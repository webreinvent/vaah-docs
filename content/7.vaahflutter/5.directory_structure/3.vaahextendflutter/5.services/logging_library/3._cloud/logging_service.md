---
toc: true
title: Logging Service
---


::alert{type="warning" class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert"}
Dependencies   

None

::

::alert{type="danger" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert"} 
Developer Guide   

- Developer should never use this service directly, use [Logging Library](../logging_library.md) instead.

::



## Log types

Currently, three types of logging functions are there in abstract class `LoggingService`.

1. init
2. event
3. exception
4. transaction
5. setUserInfo
6. unsetUserInfo

- init is used to initialize the service accordingly.
- event is used to for log, info, success, and warning.
- exception is used to for logging exceptions.
- transaction is used to for logging transactions.
- setUserInfo is used to populate the attributes/error thrown by user via custom metdadata ex. id, email & region etc.
- unsetUserInfo is used to remove the custom metadata that has been set by user for it'ss session.

## LoggingService

- This service is abstract class and is used to implement different cloud services. e.g. Sentry, Google CrashAnalytics, etc.

- Check [here](../logging_library.md#how-to-add-new-cloud-service) how can you add new cloud logging service.

- This service defines basic structure for services which implements `LoggingService` so when different services are used in [logging_library](../logging_library.md), they do provide basic functions needed.

```dart
import 'package:flutter/material.dart';
import '../models/log.dart';

abstract class LoggingService {
  Future<Widget> init({
    required Widget app,
  });

  void logEvent({
    required String message,
    required EventType type,
    Map<String, dynamic>? data,
  });

  void logException(
    dynamic throwable, {
    StackTrace? stackTrace,
    Map<String, dynamic>? hint,
  });

  Future<void> logTransaction({
    required Function execute,
    required TransactionDetails details,
  });

  void setUserInfo({
    String? id,
    String? name,
    String? email,
    Map<String, dynamic>? metaData,
  });

  void unsetUserInfo();
}
```
