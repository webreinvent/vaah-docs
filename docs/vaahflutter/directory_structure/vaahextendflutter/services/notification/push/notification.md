# Push Notification

[[toc]]

The PushNotifications class is responsible for handling both remote and local push notifications in a project. This documentation will guide you through the code and explain its functionalities.

## Overview

The PushNotifications class is an abstract class that provides static methods to interact with both remote and local notifications. It serves as a wrapper for the RemoteNotifications and LocalNotifications services.

The RemoteNotifications service manages notifications that are sent from a remote source, commonly employed in scenarios similar to chat applications. In contrast, the LocalNotifications service is responsible for handling notifications generated locally on the device, often utilized for user-defined reminders.

::: tip enable notifications
To enable default code from VaahFlutter you need to enable it from env. And to change the service which is used by push notifications; you need to change Push Notifications Service Type from [env](../enabling_and_disabling_services.md).
:::

## Usage

This section explains how to use the PushNotifications class and its various methods.

### Initializing

To initialize push notifications, call the init method. This method initializes both the remote and local notification services.

```dart
await PushNotifications.init();
```

### Disposing
When you no longer need push notifications, make sure to dispose of the resources by calling the dispose method. This will clean up any ongoing processes and release system resources.

```dart
PushNotifications.dispose();
```

### Asking Permission

To ask the user for permission to display notifications, use the askPermission method. Note that the behavior may vary depending on the configuration of your project.

```dart
await PushNotifications.askPermission();
```

::: tip Note:
- If your project has OneSignal configuration, RemoteNotifications.askPermission will be called. Keep in mind that if you call both RemoteNotifications.askPermission and LocalNotifications.askPermission, the user will see two permission prompts if they neither accept nor reject notification permission.

- If your project has no setup for OneSignal, LocalNotifications.askPermission will be used, which always works.
:::

### Subscribing and Unsubscribing

To subscribe to push notifications, call the subscribe method. This method subscribes to both remote and local notifications.

```dart
await PushNotifications.subscribe();
```

To unsubscribe from push notifications, use the unsubscribe method. This method unsubscribes from both remote and local notifications.

```dart
await PushNotifications.unsubscribe();
```

### Pushing Notifications

To send a push notification, use the push method. This method takes a PushNotification object as a parameter, along with an optional channel.

```dart
await PushNotifications.push(
  notification: pushNotification,
  channel: 'channel_name',
);
```

The notification parameter is a PushNotification object representing the push notification to be sent. Ensure that the content property of the notification is not empty.

If the notification type is NotificationType.local, the notification will be sent using the LocalNotifications.push method.

For other notification types, the notification will be sent using the RemoteNotifications.push method, along with the specified channel if provided.

## Best Practices: Using the PushNotifications Class

When implementing push notifications in your Flutter app, it's recommended to use the `PushNotifications` class as a central interface for handling both remote and local notifications. This ensures a unified and consistent approach throughout your application. Here are a few reasons why you should use the `PushNotifications` class wherever push notifications are needed, rather than accessing the remote and local services directly:

1. Abstraction and Encapsulation: The `PushNotifications` class abstracts away the underlying implementation details of the remote and local notification services. By using this class, developers can work with a high-level interface that provides a consistent set of methods and hides the complexity of interacting with the individual services.

2. Code Modularity and Maintainability: By utilizing the `PushNotifications` class, you decouple your app's code from the specific implementation details of the remote and local services. This promotes code modularity and improves maintainability. If there are any changes or updates to the notification services in the future, you can easily make the necessary modifications within the `PushNotifications` class without affecting other parts of your app.

3. Simplified Integration: When integrating push notifications into different parts of your app, using the `PushNotifications` class provides a straightforward and standardized approach. Developers across your team can easily understand and use the class, resulting in a more consistent implementation of push notifications across your app.

4. Future-Proofing: The `PushNotifications` class acts as a layer of abstraction that shields your app from potential changes or updates in the remote and local notification services. If you ever decide to switch to a different notification service or update the existing implementation, you can make the necessary adjustments within the `PushNotifications` class, ensuring minimal impact on the rest of your app.

By following these best practices and utilizing the `PushNotifications` class, you can achieve a more organized, maintainable, and future-proof implementation of push notifications in your Flutter app. Remember to encourage developers on your team to utilize the `PushNotifications` class wherever push notifications are needed and discourage direct usage of the remote and local services.

::: tip configuration
- As mentioned in [this file](../enabling_and_disabling_services.md), you need to change env variables to enable push notifications.
:::

## Source Code

```dart
import 'dart:async';

import './services/local.dart';
import './services/remote.dart';
import '../models/notification.dart';

abstract class PushNotifications {
  static final Stream<String> remoteUserIdStream = RemoteNotifications.userIdStream;
  static String? get remoteUserId => RemoteNotifications.userId;

  static Future<void> init() async {
    await RemoteNotifications.init();
    await LocalNotifications.init();
  }

  static void dispose() {
    RemoteNotifications.dispose();
    LocalNotifications.dispose();
  }

  static Future<void> askPermission() async {
    // RemoteNotifications.askPermission only works if OneSignal config is there
    // And if we call RemoteNotifications.askPermission and LocalNotifications.askPermission both then
    // Two prompts will be shown to the user in case when user neither accepts nor rejects notification permission.

    // Local notification permission always works even if project has no setup for onesignal
    await LocalNotifications.askPermission();
  }

  static Future<void> subscribe() async {
    await RemoteNotifications.subscribe();
    await LocalNotifications.subscribe();
  }

  static Future<void> unsubscribe() async {
    await RemoteNotifications.unsubscribe();
    await LocalNotifications.unsubscribe();
  }

  static Future<void> push({
    required PushNotification notification,
    String? channel,
  }) async {
    assert(notification.content.trim().isNotEmpty);
    if (NotificationType.local == notification.type) {
      await LocalNotifications.push(notification: notification);
      return;
    }
    await RemoteNotifications.push(notification: notification, channel: channel);
  }
}
```