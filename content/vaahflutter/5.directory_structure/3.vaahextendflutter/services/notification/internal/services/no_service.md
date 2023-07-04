# No Service

[[toc]]

The "No Service" option within the Internal Notifications service allows you to disable the use of any notification service for internal notifications.

## Usage

When selecting the "No Service" option, the Internal Notifications service will provide empty implementations for all methods and streams.

The "No Service" option provides a way to disable notification services within the Internal Notifications service.

If you decide to choose no service or enable notifications in the future, you can easily do so by selecting the appropriate service and implementing the required methods.

## Souce Code

```dart
import 'dart:async';

import './base_service.dart';
import '../../models/notification.dart';

class InternalNotificationsNoService implements InternalNotificationsService {
  @override
  final Stream<int> pendingNotificationsCountStream = const Stream.empty();

  @override
  final Stream<List<InternalNotification>> notificationsStream = const Stream.empty();

  @override
  List<InternalNotification> get notifications => [];

  @override
  Future<void> init() async {}

  @override
  Future<void> dispose() async {}

  @override
  Future<void> subscribe() async {}

  @override
  Future<void> unsubscribe() async {}

  @override
  Future<void> push(List<String> userIds, InternalNotification notification) async {}
}
```