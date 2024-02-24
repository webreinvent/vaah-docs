---
title:Logs and Performance Monitoring
---

::alert{type="info" class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"}
For detailed documentation, check this: [logging_library](../directory_structure/vaahextendflutter/services/logging_library/logging_library) and [performance_monitoring](../directory_structure/vaahextendflutter/services/performance_monitoring)
::

## About Logging

Logging library which handles cloud (e.g. sentry, crashanalytics) and local (e.g. Console/Terminal and Local Files For Device) Logs.

::alert{type="info" class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"}
tip Cloud logging services

- As of now we have implemented [Sentry](../directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service) to log and measure performance. Any other service is not available yet. To setup Sentry please check [this](../directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.md#configuration).

- You can check out more details about it here: [Sentry](../directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service) and [Performance](../directory_structure/vaahextendflutter/services/performance_monitoring)

- Also to enable sentry; developer will have to pass `sentryConfig` in [environment](../essentials/environments).

::

- So developer should never use individual service in their application, they should always use Logging library for logging any kind of content.

<img src="/images/flutter/components/log/hierarchy.png" alt="hierarchy">

- To setup Sentry please check [this](../directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.md#configuration).

### Use cases

::alert{type="info" class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"}
- To easily log content on cloud
- To easily add another cloud logging service
- To log transactions. e.g. I want to measure and log time of an api call
- To see formatted (prettier) objects in the console easily readable by the human eye
- To easily differentiate between different kinds of events.

::

### Log types
Currently, our logs are of six types.
1. log
2. info
3. success
4. warning
5. exception
6. transaction

For Local Logs: Different types will print logs in different colors. the log will be in grey, info in blue, success in green, warning in yellow, and exception will be in red.

### How to use

#### Call static methods of the Log class to log the events.

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

#### Log Transactions

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

#### To print data, as argument pass the data
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

#### You can disable local and cloud logging for specific log

```dart
Log.exception('exception', disableLocalLogging: true);
```

```dart
Log.info('log', disableCloudLogging: true);
```

#### For exception you can pass two extra parameters: `stackTrace` and `hint`

```dart
catch (error, stackTrace){
    Log.exception(
        error,
        stackTrace: stackTrace,
        hint: 'The exception is caught in ---',
    )
}
```

## About Performance

### Use cases

- To enable/ disable all kind of tracking, switch `enableAutoPerformanceTracing`

- Record cold startup time and warm startup time

- Observe Navigation

- Capture User Interactions

- Capture Assets Performance

- Observe transactions

- Record Slow and Frozen frames (Yet to implement)

### Configuration

- To configure sentry for your project you just have to pass sentryConfig in [environment config](../directory_structure/vaahextendflutter/env.md).

- Check [this](https://youtu.be/LWc67Vja5YA) video for, how to get config values.

- To disable all kind of tracing set `enableAutoPerformanceTracing` to `false`.

- To record cold startup time and warm startup time set `autoAppStart` to `true`, check [this](../directory_structure/vaahextendflutter/services/performance_monitoring.md#startup-time) section.

- To record User Interaction set `enableUserInteractionTracing` to `true`, check [this](../directory_structure/vaahextendflutter/services/performance_monitoring.md#capture-user-interactions) section.

- To enable assets instrumentation set `enableAssetsInstrumentation` to `true`.

### How to use

Just toogle environment flags (mentioned above) to enable/ disable monitoring.
