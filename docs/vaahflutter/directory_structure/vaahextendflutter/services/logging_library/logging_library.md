# Logging library

::: warning Dependencies

- Log depends [EnvironmentConfig](../../env.md). 

:::

[[toc]]

## Overview

- This is the central logging library which handles cloud (e.g. sentry, crashanalytics) and local (e.g. Console/Terminal and Local Files For Device) Logs.

::: tip Cloud logging services

- As of now we have implemented [Sentry](./_cloud/sentry_logging_service.md) to log and measure performance. Any other service is not available yet. To setup Sentry please check [this](./_cloud/sentry_logging_service.md#configuration).

- You can check out more details about it here: [Sentry](./_cloud/sentry_logging_service.md) and [Performance](../performance_monitoring.md)

- Also to enable sentry; developer will have to pass `sentryConfig` in [environment](../../env.md).

:::

- So developer should never use individual service in their application, they should always use Logging library for logging any kind of content.

<img :src="$withBase('/images/flutter/components/log/hierarchy.png')" alt="hierarchy">

- To setup Sentry please check [this](./_cloud/sentry_logging_service.md#configuration).

## Use cases

::: tip use cases

- To easily log content on cloud
- To easily add another cloud logging service
- To log transactions. e.g. I want to measure and log time of an api call
- To see formatted (prettier) objects in the console easily readable by the human eye
- To easily differentiate between different kinds of events.

:::

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

<img :src="$withBase('/images/flutter/components/log/prettier-log.png')" alt="Output">

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

#### Step 1: create a service which implements [LoggingService](./_cloud/logging_service.md), example of implemented service: [Sentry](./_cloud/sentry_logging_service.md)

#### Step 2: Add that service in _services array, in [logging_library.dart](#logging-library-dart-source-code)

```dart
  static final List<Type> _services = [
    SentryLoggingService,
    FirebaseLoggingService,
  ];
```

#### Step 3: Call relavent functions of that new service in `_logEvent` and `exception`, [switch cases](#logging-library-dart-source-code)

```dart{15-21}
static void _logEvent(
    String text, {
    Object? data,
    EventType? type,
  }) {
    for (var service in _services) {
      switch (service) {
        case SentryLoggingService:
          SentryLoggingService.logEvent(
            message: text,
            level: type?.toSentryLevel,
            data: data,
          );
          return;
        case FirebaseLoggingService:
          FirebaseLoggingService.logEvent(
            message: text,
            type: type,
            data: data,
          );
          return;
        default:
          return;
      }
    }
  }
```

```dart{27-33}
static void exception(
    dynamic throwable, {
    Object? data,
    dynamic stackTrace,
    dynamic hint,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    EnvironmentConfig config = EnvironmentConfig.getEnvConfig();
    if (config.enableLocalLogs && !disableLocalLogging) {
      Console.danger(throwable.toString(), data);
    }
    if (config.enableCloudLogs && !disableCloudLogging) {
      final hintWithData = {
        'hint': hint,
        'data': data,
      };
      for (var service in _services) {
        switch (service) {
          case SentryLoggingService:
            SentryLoggingService.logException(
              throwable,
              stackTrace: stackTrace,
              hint: hintWithData,
            );
            return;
          case FirebaseLoggingService:
            FirebaseLoggingService.logException(
              throwable,
              stackTrace: stackTrace,
              hint: hintWithData,
            );
            return;
          default:
            return;
        }
      }
    }
  }
```

## Enviroment variables which control logging

- depending on environment variables `enableLocalLogs` and `enableCloudLogs`, the content is logged. e.g. if `enableLocalLogs` in the [environment](../../env.md) is set to `false` then no local logs will be printed. if `enableCloudLogs` is set to `false` then no local logs will be printed.

## `logging_library.dart` Source code:

```dart
import './_cloud/firebase_logging_service.dart';
import './_cloud/logging_service.dart';
import './_cloud/sentry_logging_service.dart';
import './_local/console_service.dart';
import '../../env.dart';

class Log {
  static final List<Type> _services = [
    SentryLoggingService,
    // FirebaseLoggingService,
  ];

  static void log(
    dynamic text, {
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    EnvironmentConfig config = EnvironmentConfig.getEnvConfig();
    if (config.enableLocalLogs && !disableLocalLogging) {
      Console.log(text.toString(), data);
    }
    if (config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(text.toString(), data: data, type: EventType.log);
    }
  }

  static void info(
    dynamic text, {
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    EnvironmentConfig config = EnvironmentConfig.getEnvConfig();
    if (config.enableLocalLogs && !disableLocalLogging) {
      Console.info(text.toString(), data);
    }
    if (config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(text.toString(), data: data, type: EventType.info);
    }
  }

  static void success(
    dynamic text, {
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    EnvironmentConfig config = EnvironmentConfig.getEnvConfig();
    if (config.enableLocalLogs && !disableLocalLogging) {
      Console.success(text.toString(), data);
    }
    if (config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(text.toString(), data: data, type: EventType.success);
    }
  }

  static void warning(
    dynamic text, {
    Object? data,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    EnvironmentConfig config = EnvironmentConfig.getEnvConfig();
    if (config.enableLocalLogs && !disableLocalLogging) {
      Console.warning(text.toString(), data);
    }
    if (config.enableCloudLogs && !disableCloudLogging) {
      _logEvent(text.toString(), data: data, type: EventType.warning);
    }
  }

  static void exception(
    dynamic throwable, {
    Object? data,
    dynamic stackTrace,
    dynamic hint,
    bool disableLocalLogging = false,
    bool disableCloudLogging = false,
  }) {
    EnvironmentConfig config = EnvironmentConfig.getEnvConfig();
    if (config.enableLocalLogs && !disableLocalLogging) {
      Console.danger(throwable.toString(), data);
    }
    if (config.enableCloudLogs && !disableCloudLogging) {
      final hintWithData = {
        'hint': hint,
        'data': data,
      };
      for (var service in _services) {
        switch (service) {
          case SentryLoggingService:
            SentryLoggingService.logException(
              throwable,
              stackTrace: stackTrace,
              hint: hintWithData,
            );
            return;
          case FirebaseLoggingService:
            FirebaseLoggingService.logException(
              throwable,
              stackTrace: stackTrace,
              hint: hintWithData,
            );
            return;
          default:
            return;
        }
      }
    }
  }

  static void _logEvent(
    String text, {
    Object? data,
    EventType? type,
  }) {
    for (var service in _services) {
      switch (service) {
        case SentryLoggingService:
          SentryLoggingService.logEvent(
            message: text,
            level: type?.toSentryLevel,
            data: data,
          );
          return;
        case FirebaseLoggingService:
          FirebaseLoggingService.logEvent(
            message: text,
            type: type,
            data: data,
          );
          return;
        default:
          return;
      }
    }
  }
}
```