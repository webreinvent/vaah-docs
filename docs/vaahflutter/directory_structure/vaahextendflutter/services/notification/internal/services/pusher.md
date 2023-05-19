# Pusher service

[[toc]]

The Pusher service file provides the implementation of internal notifications using the Pusher service. Pusher enables real-time communication and facilitates the establishment of private channels for users to interact with each other and receive notifications in real time. It's important to note that in order to use Pusher, developers need to set up an account and configure Pusher on pusher.com.

## Pusher Advantages
- Real-time communication: Pusher allows users to establish private channels and enables real-time communication between users and the backend. This can be utilized for various purposes, such as user-to-user communication and delivering notifications instantly.

## Pusher Limitations
- Inability to fetch old events: One limitation of Pusher is that it does not have the ability to fetch old events. It can only listen to live events triggered after establishing a connection. This means that if a user is offline during an event trigger, they won't receive the event when they come back online.

- Handling historical data: Storing historical data locally can be a challenge when using Pusher, especially in scenarios where users uninstall and reinstall the app or use the app on multiple devices. If historical data is required, it is recommended to implement a backend solution to store events in a cloud database prior to sending them via Pusher.

::: tip Information and guidance on Pusher
For further information and guidance on Pusher, refer to the official Pusher documentation and support resources provided by Pusher at [https://support.pusher.com/hc/en-us/articles/4412239519249](https://support.pusher.com/hc/en-us/articles/4412239519249).
:::

## Integration

Developers integrating Pusher-based internal notifications should follow these steps:

1. Sign up for a Pusher account and configure Pusher on pusher.com.
2. Verify the necessary logic to establish a connection with Pusher and handle user authentication and authorization for private channels.
3. Ensure that you handle the management of private channels, event triggers, and event subscriptions within your main internal notifications file, while considering the limitations and challenges mentioned above.
4. You might want to setup the user id in private channel to target specific user. When subscribing for perticular user; user id is needed so for that, logic should be implemented by developer in the `init()` method of this class to assign user id in the service, the logic may vary depending on the project. This user ID will be used to establish private channels for the user.
5. Obtain the Pusher configuration details, such as the API key and cluster, and put it in your environment configuration.

::: tip Note:
Remember to adapt and modify the provided Pusher service file according to your specific application requirements and architectural design.

Please note that the Pusher service file provided here serves as a part of the overall internal notifications system. It should be used within the context of the main internal notifications file, which acts as a central point for integrating different notification services.
:::

## Source Code

```dart
import 'dart:async';

import 'package:pusher_channels_flutter/pusher_channels_flutter.dart';

import './base_service.dart';
import '../../../../env.dart';
import '../../../logging_library/logging_library.dart';
import '../../models/notification.dart';

class InternalNotificationsWithPusher implements InternalNotificationsService {
  late final PusherChannelsFlutter _pusher;

  final StreamController<int> _pendingNotificationsCountStreamController =
      StreamController<int>.broadcast();

  @override
  late final Stream<int> pendingNotificationsCountStream;

  final StreamController<List<InternalNotification>> _notificationsStreamController =
      StreamController<List<InternalNotification>>.broadcast();

  @override
  late final Stream<List<InternalNotification>> notificationsStream;

  List<InternalNotification> _notifications = [];

  @override
  List<InternalNotification> get notifications => _notifications;

  late final String userId;

  @override
  Future<void> init() async {
    pendingNotificationsCountStream = _pendingNotificationsCountStreamController.stream;
    notificationsStream = _notificationsStreamController.stream;

    // Write your logic here to get user id
    userId = 'userId';

    final EnvironmentConfig environmentConfig = EnvironmentConfig.getEnvConfig();
    if (environmentConfig.pusherConfig == null) return;

    _pusher = PusherChannelsFlutter.getInstance();
    await _pusher.init(
      apiKey: environmentConfig.pusherConfig!.apiKey,
      cluster: environmentConfig.pusherConfig!.cluster,
      onAuthorizer: (String channelName, String socketId, dynamic options) {
        // return {"shared_secret": "11518af14b1d4acbd3b9"};
      },
      onEvent: (event) {
        Log.warning(event);
        if (event.data != null) {
          _notificationsUpdated([event.data]);
        }
      },
    );
    await _pusher.subscribe(channelName: 'private-$userId');
    await _pusher.connect(); // Connect with cluster
  }

  @override
  Future<void> dispose() async {}

  @override
  Future<void> subscribe() async {}

  @override
  Future<void> unsubscribe() async {}

  @override
  Future<void> push(List<String> userIds, InternalNotification notification) async {
    for (final id in userIds) {
      await _pusher.trigger(
        PusherEvent(
          channelName: 'private-$id',
          eventName: 'Internal Notification',
          data: notification.toJson(),
        ),
      );
    }
  }

  void _notificationsUpdated(List<Map<String, dynamic>> notifications) {
    int count = 0;
    final List<InternalNotification> updatedNotifications = [];
    for (final jsonNotification in notifications) {
      final InternalNotification notification = InternalNotification.fromJson(jsonNotification);
      if (!notification.opened) count++;
      updatedNotifications.add(notification);
    }
    _pendingNotificationsCountStreamController.add(count);
    _notificationsStreamController.add(updatedNotifications);
    _notifications = updatedNotifications;
  }
}
```