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

- We should never use this service directly, use [Logging Library](../logging_library.md) instead.

::



## Log types

Currently, six types of logging functions are there in abstract class `LoggingService`.

1. event
2. exception
3. transaction
4. action
5. attributes
6. setUserInfo

- event is used to for log, info, success, and warning.
- exception is used to for logging exceptions.
- transaction is used to for logging transactions.
- action are used for logging events.
- attributes are used to add sections to datadog.
- setUserInfo are used to set default information of user.

## LoggingService

- This service is abstract class and is used to implement different cloud services. e.g. Sentry, DataDog, Google CrashAnalytics, etc.

- Check [here](../logging_library.md#how-to-add-new-cloud-service) how can you add new cloud logging service.

- This service defines basic structure for services which implements `LoggingService` so when different services are used in [logging_library](../logging_library.md), they do provide basic functions needed.

```dart
import 'package:datadog_flutter_plugin/datadog_flutter_plugin.dart';
import 'package:flutter/material.dart';

import '../models/log.dart';

abstract class LoggingService {
  Future<Widget> init({
    required Widget app,
  });

  Future<void> logException(
    dynamic throwable, {
    dynamic source,
    dynamic stackTrace,
    dynamic hint,
  });

  Future<void> setUserInfoLogger({
    String? id,
    String? name,
    String? email,
    Map<String, dynamic>? extraInfo,
  });

  Future<void> logEvent({
    required String message,
    required EventType type,
    Object? data,
  });

  Future<void> addEventsLogger({
    required RumActionType rumActionType,
    required String eventName,
    Map<String, Object>? eventProperties,
  });

  Future<void> addSectionLogger({
    required String sectionName,
    required dynamic sectionValue,
  });

  Future<void> logTransaction({
    required Function execute,
    required TransactionDetails details,
  });
}

```
