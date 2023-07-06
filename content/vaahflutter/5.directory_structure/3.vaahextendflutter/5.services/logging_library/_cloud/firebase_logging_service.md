# Firebase Logging Service

::: warning Dependencies

implements LoggingService

:::

::: danger Developer Guide

- Developer should never use this service directly, use [Logging Library](../logging_library.md) instead.

:::


[[toc]]

## FirebaseLoggingService

::: danger Unimplemented error
- Implements [LoggingService](./logging_service.md).

- Methods does not work, will throw unimplemented error.
:::

```dart
import './logging_service.dart';
import '../models/log.dart';

abstract class FirebaseLoggingService implements LoggingService {
  static logEvent({
    required String message,
    EventType? type,
    Object? data,
  }) =>
      throw UnimplementedError();

  static logException(
    dynamic throwable, {
    dynamic stackTrace,
    dynamic hint,
  }) =>
      throw UnimplementedError();

  static logTransaction({
    required Function execute,
    required TransactionDetails details,
  }) async =>
      UnimplementedError();
}
```