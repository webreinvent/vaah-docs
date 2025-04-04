---
toc: true
title: Logging library
--- 


::alert{type="warning" class="p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert"} 
Dependencies   
- Log depends [EnvironmentConfig](../../env.md).
::


## Overview

- This is the central logging library which handles cloud (e.g. sentry, datadog and crash analytics) and local (e.g. Console/Terminal and Local Files For Device) Logs.

::alert{type="info" class="p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert"} 
 Cloud logging services
- We have implemented [Sentry](./_cloud/sentry_logging_service.md) and [DataDog](./_cloud/datadog_logging_service.md) to log and measure performance.
- To enable sentry, will required `sentryConfig` in [environment](../../env.md).
- To enable datadog, will required `datadogConfig` in [environment](../../env.md).
- For more details check: [Sentry](./_cloud/sentry_logging_service.md), [DataDog](./_cloud/datadog_logging_service.md) and [Performance](../performance_monitoring.md)
::

- We should never use individual service in their application, they should always use Logging library for logging any kind of content.

<img src="/images/flutter/components/log/hierarchy.png" alt="hierarchy">

- To setup Sentry please check [this](./_cloud/sentry_logging_service.md#configuration).

## Use cases

::alert{type="info" class="p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert"} 
Use cases:
- To easily log content on cloud
- To easily add another cloud logging service
- To log transactions. e.g. I want to measure and log time of an api call
- To see formatted (prettier) objects in the console easily readable by the human eye
- To easily differentiate between different kinds of events.

::
## Log types
Currently, our logs are of nine types.
1. log
2. info
3. success
4. warning
5. exception
6. transaction
7. action
8. attributes
9. setUserInfo

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

#### Step 1: Create a service which implements [LoggingService](./_cloud/logging_service.md), example of implemented service: [Sentry](./_cloud/sentry_logging_service.md) and [DataDog](./_cloud/datadog_logging_service.md)

#### Step 2: Initialize service in init method, in [logging_library.dart](#logging_librarydart-source-code) which return updated app child.

```dart
  static Future<Widget> init({
    required ErrorLoggingType errorLogging,
    required Widget app,
  }) async {
    if (errorLogging.isSentry) {
      _loggingService = SentryLoggingService();
    } else if (errorLogging.isDatadog) {
      _loggingService = DataDogLoggingService();
    } else if (errorLogging.isFirebase) {
      _loggingService = FirebaseLoggingService();
    }

    final updatedApp = await _loggingService?.init(app: app);

    return updatedApp ?? app;
  }
```

#### Step 3: Call relavent functions of that service in `_logEvent`, `exception`, `logUserInfo`,`logActions` and `logSections` (#logging-library-dart-source-code)

```dart
static Future<void> _logEvent(
    String text, {
    Object? data,
    EventType? type,
  }) async {
    await _loggingService?.logEvent(
      message: text,
      type: type!,
      data: data,
    );
  }
```

```dart
static Future<void> exception(
    dynamic throwable, {
    Object? data,
    dynamic source,
    dynamic stackTrace,
    dynamic hint,
    RumErrorSource? rumErrorSource,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.danger('$throwable\n$hint', data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      final hintWithData = {
        'hint': hint,
        'data': data,
      };
      await _loggingService?.logException(
        throwable,
        stackTrace: stackTrace,
        hint: hintWithData,
      );
    }
  }
```

```dart
static Future<void> logUserInfo({
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
    required String id,
    required String name,
    required String email,
    Map<String, dynamic> extraInfo = const {},
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.info(name, extraInfo);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      await _loggingService?.setUserInfoLogger(
        id: id,
        name: name,
        email: email,
        extraInfo: extraInfo,
      );
    }
  }
  ```

  ```dart
static Future<void> logActions({
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
    required RumActionType rumActionType,
    required String eventName,
    Map<String, Object>? eventProperties,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.success(eventName, eventProperties);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      await _loggingService?.addEventsLogger(
        eventName: eventName,
        eventProperties: eventProperties ?? {},
        rumActionType: rumActionType,
      );
    }
  }
  ```

  ```dart
static Future<void> logSections({
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
    required String sectionName,
    required dynamic sectionValue,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.success(sectionName, sectionValue);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      await _loggingService?.addSectionLogger(
        sectionName: sectionName,
        sectionValue: sectionValue,
      );
    }
  }
  ```

## Enviroment variables which control logging

- Depending on environment variables `enableLocalLogs` and `enableCloudLogs`, the content is logged. e.g. if `enableLocalLogs` in the [environment](../../env.md) is set to `false` then no local logs will be printed. if `enableCloudLogs` is set to `false` then no local logs will be printed.

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

  static List<NavigatorObserver> loggingServiceObserver = [
    if (_config.errorLoggingTypeService(isFirebaseEnabled: false).isSentry)
      SentryNavigatorObserver()
    else if (_config.errorLoggingTypeService(isFirebaseEnabled: false).isDatadog)
      DatadogNavigationObserver(
        datadogSdk: DataDogLoggingService.datadogSdk ?? DatadogSdk.instance,
      )
  ];

  static Future<Widget> init({
    required ErrorLoggingType errorLogging,
    required Widget app,
  }) async {
    if (errorLogging.isSentry) {
      _loggingService = SentryLoggingService();
    } else if (errorLogging.isDatadog) {
      _loggingService = DataDogLoggingService();
    } else if (errorLogging.isFirebase) {
      _loggingService = FirebaseLoggingService();
    }

    final updatedApp = await _loggingService?.init(app: app);

    return updatedApp ?? app;
  }

  static Future<void> logEvent({
    required String message,
    required EventType type,
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.log(message.toString(), data);
    }
    await _loggingService?.logEvent(message: message, type: type, data: data);
  }

  static void log(
    dynamic text, {
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.log(text.toString(), data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(text.toString(), data: data, type: EventType.log);
    }
  }

  static void info(
    dynamic text, {
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.info(text.toString(), data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(text.toString(), data: data, type: EventType.info);
    }
  }

  static void success(
    dynamic text, {
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.success(text.toString(), data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(text.toString(), data: data, type: EventType.success);
    }
  }

  static void warning(
    dynamic text, {
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.warning(text.toString(), data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(text.toString(), data: data, type: EventType.warning);
    }
  }

  static Future<void> exception(
    dynamic throwable, {
    Object? data,
    dynamic source,
    dynamic stackTrace,
    dynamic hint,
    RumErrorSource? rumErrorSource,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.danger('$throwable\n$hint', data);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      final hintWithData = {
        'hint': hint,
        'data': data,
      };
      await _loggingService?.logException(
        throwable,
        stackTrace: stackTrace,
        hint: hintWithData,
      );
    }
  }

  static Future<void> logUserInfo({
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
    required String id,
    required String name,
    required String email,
    Map<String, dynamic> extraInfo = const {},
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.info(name, extraInfo);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      await _loggingService?.setUserInfoLogger(
        id: id,
        name: name,
        email: email,
        extraInfo: extraInfo,
      );
    }
  }

  static Future<void> logActions({
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
    required RumActionType rumActionType,
    required String eventName,
    Map<String, Object>? eventProperties,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.success(eventName, eventProperties);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      await _loggingService?.addEventsLogger(
        eventName: eventName,
        eventProperties: eventProperties ?? {},
        rumActionType: rumActionType,
      );
    }
  }

  static Future<void> logSections({
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
    required String sectionName,
    required dynamic sectionValue,
  }) async {
    if (_config.enableLocalLogs && !disableLocalLogging) {
      Console.success(sectionName, sectionValue);
    }
    if (_config.enableCloudLogs && !disableCloudLogging) {
      await _loggingService?.addSectionLogger(
        sectionName: sectionName,
        sectionValue: sectionValue,
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
      await _loggingService?.logTransaction(
        execute: execute,
        details: details,
      );
    }
  }

  static Future<void> _logEvent(
    String text, {
    Object? data,
    EventType? type,
  }) async {
    await _loggingService?.logEvent(
      message: text,
      type: type!,
      data: data,
    );
  }
}

```
