---
toc: true
title: Logging library
--- 


::alert{type="warning" class="p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert"} 
Dependencies   
- Log depends [EnvironmentConfig](../../env.md).
::


## Overview

- This is the central logging library which handles cloud (e.g. sentry, crashanalytics) and local (e.g. Console/Terminal and Local Files For Device) Logs.

::alert{type="info" class="p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert"} 
 Cloud logging services
- As of now we have implemented [Sentry](./_cloud/sentry_logging_service.md) to log and measure performance. Any other service is not available yet. To setup Sentry please check [this](./_cloud/sentry_logging_service.md#configuration).
- You can check out more details about it here: [Sentry](./_cloud/sentry_logging_service.md) and [Performance](../performance_monitoring.md)
- Also to enable sentry & datadog; developer will have to pass `sentryConfig` `datadogConfig` in [environment](../../env.md).
::

- So developer should never use individual service in their application, they should always use Logging library for logging any kind of content.

<img src="/images/flutter/components/log/hierarchy.png" alt="hierarchy">

- To setup Sentry please check [this](./_cloud/sentry_logging_service.md#configuration).

## Use cases

::alert{type="info" class="p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert"} 
use cases   
- To easily log content on cloud
- To easily add another cloud logging service
- To log transactions. e.g. I want to measure and log time of an api call
- To see formatted (prettier) objects in the console easily readable by the human eye
- To easily differentiate between different kinds of events.

::
## Log types
Currently, our logs are of six types.
1. log
2. info
3. success
4. warning
5. exception
6. transaction

For Local Logs: Different types will print logs in different colors. the log will be in grey, info in blue, success in green, warning in yellow, and exception will be in red.

## How to use

### Call static methods of the Log class to log the events.

```dart
Log.log("Log");
Log.info("info");
Log.success("success");
Log.warning("warning");
try {
  // code snippet
} catch (error, stackTrace){
  Log.exception(error, stackTrace: stackTrace);
}
```

### Log Transactions

When developer wants to measure performance of different operations they can use `logTransaction` funtion. Where developer will have to pass operation for which they wants to log as `execute` argument. e.g. API send receive requests, getting a file from local storage and parsing data, processing huge data, search queries, etc.

```dart
Log.logTransaction(
  execute: () async => {},
  details: const TransactionDetails(
    name: 'idle transaction',
    operation: 'idle',
  ),
);
```

```dart
Log.logTransaction(
  execute: Api.ajax('api.vaah.dev'),
  details: const TransactionDetails(
    name: 'get root route of vaah api',
    operation: 'read',
  ),
);
```

### To print data, as argument pass the data 
```dart{8}
Map<String, dynamic> data = {
  "first_key": "value",
  "second_key": [
    {"key": "value"},
    {"key": "updated_value"},
  ],
};
Log.info('data', data: data);
```

Output:

<img src="/images/flutter/components/log/prettier-log.png" alt="Output">

### You can disable local and cloud logging for specific log

```dart
Log.exception('exception', disableLocalLogging: true);
```

```dart
Log.info('log', disableCloudLogging: true);
```

### For exception you can pass two extra parameters: `stackTrace` and `hint`

```dart
catch (error, stackTrace){
    Log.exception(
        error,
        stackTrace: stackTrace,
        hint: 'The exception is caught in ---',
    )
}
```

### How to add new cloud service?

#### Step 1: Create a service which implements [LoggingService](./_cloud/logging_service.md), example of implemented service: [Sentry](./_cloud/sentry_logging_service.md)

#### Step 2: Add a relevant condition in the below method to define _loggingService variable via various conditions, in [logging_library.dart](#logging_librarydart-source-code)

```dart
static Future<Widget> init({
    required CloudLoggingService cloudLogging,
    required Widget app,
  }) async {
    if (cloudLogging.isSentry) {
      _loggingService = SentryLoggingService();
    } else if (cloudLogging.isDatadog) {
      _loggingService = DataDogLoggingService();
    } else if (cloudLogging.isFirebase) {
      _loggingService = FirebaseLoggingService();
    }

    final updatedApp = await _loggingService?.init(app: app);

    return updatedApp ?? app;
  }
```

#### Step 3: Call relavent functions of that new service in `_logEvent` and `exception`, [switch cases](#logging-library-dart-source-code)

```dart{15-21}
static void _logEvent(
    String message, {
    Map<String, dynamic>? data,
    EventType? type,
  }) {
    _loggingService?.logEvent(
      message: message,
      data: data,
      type: type ?? EventType.info,
    );
  }
```

```dart{27-33}
static void exception(
    String message, {
    dynamic throwable,
    StackTrace? stackTrace,
    Map<String, dynamic>? hint,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.danger(
        message,
        throwable: throwable,
        stackTrace: stackTrace,
        hint: hint,
      );
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      final hintWithData = {
        'hint': hint,
        'message': message,
      };
      _loggingService?.logException(
        throwable,
        hint: hintWithData,
        stackTrace: stackTrace,
      );
    }
  }
```

## Enviroment variables which control logging

- depending on environment variables `enableLocalLogs` and `enableCloudLogs`, the content is logged. e.g. if `enableLocalLogs` in the [environment](../../env.md) is set to `false` then no local logs will be printed. if `enableCloudLogs` is set to `false` then no local logs will be printed.

## `logging_library.dart` Source code:

```dart
import 'package:datadog_flutter_plugin/datadog_flutter_plugin.dart';
import 'package:flutter/material.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

import '../../env/env.dart';
import '_cloud/datadog_logging_service.dart';
import '_cloud/firebase_logging_service.dart';
import '_cloud/logging_service.dart';
import '_cloud/sentry_logging_service.dart';
import '_local/console_service.dart';
import 'models/log.dart';

class Log {
  static EnvironmentConfig get _config => EnvironmentConfig.getConfig;
  static LoggingService? _loggingService;

  static List<NavigatorObserver> navigatorObservers = [
    if (_config.cloudLoggingServiceType(isFirebaseConfigured: false).isSentry) ...[
      SentryNavigatorObserver(),
    ] else if (_config.cloudLoggingServiceType(isFirebaseConfigured: false).isDatadog) ...[
      DatadogNavigationObserver(
        datadogSdk: DataDogLoggingService.datadogSdk ?? DatadogSdk.instance,
      )
    ]
  ];

  static Future<Widget> init({
    required CloudLoggingService cloudLogging,
    required Widget app,
  }) async {
    if (cloudLogging.isSentry) {
      _loggingService = SentryLoggingService();
    } else if (cloudLogging.isDatadog) {
      _loggingService = DataDogLoggingService();
    } else if (cloudLogging.isFirebase) {
      _loggingService = FirebaseLoggingService();
    }

    final updatedApp = await _loggingService?.init(app: app);

    return updatedApp ?? app;
  }

  static void log(
    String message, {
    Map<String, dynamic>? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.log(message, data: data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(
        message,
        data: data,
        type: EventType.log,
      );
    }
  }

  static void info(
    String message, {
    Map<String, dynamic>? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.info(message, data: data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(
        message,
        data: data,
        type: EventType.info,
      );
    }
  }

  static void success(
    String message, {
    Map<String, dynamic>? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.success(message, data: data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(
        message,
        data: data,
        type: EventType.success,
      );
    }
  }

  static void warning(
    String message, {
    Map<String, dynamic>? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.warning(message, data: data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(
        message,
        data: data,
        type: EventType.warning,
      );
    }
  }

  static void _logEvent(
    String message, {
    Map<String, dynamic>? data,
    EventType? type,
  }) {
    _loggingService?.logEvent(
      message: message,
      data: data,
      type: type ?? EventType.info,
    );
  }

  static void exception(
    String message, {
    dynamic throwable,
    StackTrace? stackTrace,
    Map<String, dynamic>? hint,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.danger(
        message,
        throwable: throwable,
        stackTrace: stackTrace,
        hint: hint,
      );
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      final hintWithData = {
        'hint': hint,
        'message': message,
      };
      _loggingService?.logException(
        throwable,
        hint: hintWithData,
        stackTrace: stackTrace,
      );
    }
  }

  static Future<void> setUserInfo({
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
    required String id,
    required String name,
    required String email,
    Map<String, dynamic> metaData = const {},
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.info(
        name,
        data: metaData,
      );
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _loggingService?.setUserInfo(
        id: id,
        name: name,
        email: email,
        metaData: metaData,
      );
    }
  }

  static void unsetUserInfo({
    String? id,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    _loggingService?.unsetUserInfo();

    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.info(
        'User info successfully cleared.',
      );
    }
  }

  static Future<void> logTransaction({
    required Function execute,
    required TransactionDetails details,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.logTransaction(execute: execute, details: details);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _loggingService?.logTransaction(
        execute: execute,
        details: details,
      );
    }
  }
}
```
