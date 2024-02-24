---
toc: true
title: Logging Service
---


::alert{type="warning" class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert"}
Dependencies   

None

::

::alert{type="danger" class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert"} 
Developer Guide   

- Developer should never use this service directly, use [Logging Library](../logging_library.md) instead.

::



## Log types

Currently, three types of logging functions are there in abstract class `LoggingService`.

1. event
2. exception
3. transaction

- event is used to for log, info, success, and warning.
- exception is used to for logging exceptions.
- transaction is used to for logging transactions.

## LoggingService

- This service is abstract class and is used to implement different cloud services. e.g. Sentry, Google CrashAnalytics, etc.

- Check [here](../logging_library.md#how-to-add-new-cloud-service) how can you add new cloud logging service.

- This service defines basic structure for services which implements `LoggingService` so when different services are used in [logging_library](../logging_library.md), they do provide basic functions needed.

```dart
import '../models/log.dart';

abstract class LoggingService {
  static logEvent({
    required String message,
    required EventType type,
    Object? data,
  }) =>
      UnimplementedError();

  static logException(
    dynamic throwable, {
    dynamic stackTrace,
    dynamic hint,
  }) =>
      UnimplementedError();

  static logTransaction({
    required Function execute,
    required TransactionDetails details,
  }) async =>
      UnimplementedError();
}
```
