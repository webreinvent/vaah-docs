# Internal Notifications

[[toc]]

::: tip
This file (notification.dart) offers a service-based approach, allowing developers to integrate internal notifications easily with different services such as Firebase, Pusher, custom services, or no service at all.
:::

Developer can set the type of service which they want to use from the environment, by setting the variable `internalNotificationsServiceType`.

The notification.dart file offers a centralized interface for integrating internal notifications within your application

## InternalNotifications Class

- The InternalNotifications class acts as a facade, providing a set of static methods and properties to interact with the chosen internal notifications service. Here's an overview of its members (For details check this [Source code section](#source-code)):

    - `_service`: An instance of InternalNotificationsService obtained from the getService function. which initialises the service depending on the env variable `internalNotificationsServiceType`.
    - `pendingNotificationsCountStream`: A stream that emits the count of pending notifications.
    - `notifications`: A list containing the current internal notifications.
    - `notificationsStream`: A stream that emits updated lists of internal notifications.
    - `init()`: Initializes the internal notifications service, setting up necessary resources and establishing connections. This method should be called before using any other internal notification functions.
    - `dispose()`: Disposes of any resources held by the internal notifications service. It should be called when you no longer need internal notifications or when the application is shutting down.
    - `subscribe()`: Subscribes to internal notifications. This function enables the reception of notifications for the currently authenticated user or device.
    - `unsubscribe()`: Unsubscribes from internal notifications. This function stops the reception of notifications for the currently authenticated user or device.
    - `push(List<String> userIds, InternalNotification notification)`: Pushes a notification to the specified list of user IDs, The InternalNotification object contains information about the notification to be sent.

### Usage Instructions
- To integrate internal notifications into your application using this main file, follow these steps:

    1. Import the necessary dependencies and ensure that the required services (e.g., Firebase, Pusher) are set up correctly.
    2. Use the InternalNotifications.init() method to initialize the internal notifications service. This step sets up connections and resources required for internal notifications. For VaahFlutter we generally do this in base controller.
    3. Subscribe to internal notifications using InternalNotifications.subscribe(). This allows your application to start receiving internal notifications.
    4. Utilize the available properties and methods of the InternalNotifications class to manage notifications, including accessing the list of notifications, tracking pending notification counts, and pushing new notifications. This has to be done by the Developer. Some predefined UI elements are available in [notification_view.md](./notification_view.md).
    5. When your application no longer needs internal notifications or during shutdown, call InternalNotifications.dispose() to release any resources held by the internal notifications service.
    6. If necessary, switch the internal notifications service type in the EnvironmentConfig file to use a different service provider (Firebase, Pusher, custom service, or none) without modifying the main file.

::: tip Note:
Ensure that you have the required service files (firebase.dart, pusher.dart, custom.dart, no_service.dart) and the env.dart file correctly implemented and accessible in the given file structure.
:::


## Best Practices: Using the InternalNotifications Class

When implementing internal notifications in your Flutter app, it's recommended to use the `InternalNotifications` class as a central interface for handling all internal notification services. This ensures a unified and consistent approach throughout your application. Here are a few reasons why you should use the `InternalNotifications` class wherever internal notifications are needed, rather than accessing the services directly:

1. Abstraction and Encapsulation: The `InternalNotifications` class abstracts away the underlying implementation details of the notification services. By using this class, developers can work with a high-level interface that provides a consistent set of methods and hides the complexity of interacting with the individual services.

2. Code Modularity and Maintainability: By utilizing the `InternalNotifications` class, you decouple your app's code from the specific implementation details of the services. This promotes code modularity and improves maintainability. If there are any changes or updates to the notification services in the future, you can easily make the necessary modifications within the `InternalNotifications` class without affecting other parts of your app.

3. Simplified Integration: When integrating internal notifications into different parts of your app, using the `InternalNotifications` class provides a straightforward and standardized approach. Developers across your team can easily understand and use the class, resulting in a more consistent implementation of internal notifications across your app.

4. Future-Proofing: The `InternalNotifications` class acts as a layer of abstraction that shields your app from potential changes or updates in the notification services. If you ever decide to switch to a different notification service or update the existing implementation, you can make the necessary adjustments within the `InternalNotifications` class, ensuring minimal impact on the rest of your app.

By following these best practices and utilizing the `InternalNotifications` class, you can achieve a more organized, maintainable, and future-proof implementation of internal notifications in your Flutter app. Remember to encourage developers on your team to utilize the `InternalNotifications` class wherever internal notifications are needed and discourage direct usage of the services.

## Source Code

```dart
import 'dart:async';

import './services/base_service.dart';
import './services/custom.dart';
import './services/firebase.dart';
import './services/no_service.dart';
import './services/pusher.dart';
import '../../../env.dart';
import '../models/notification.dart';

InternalNotificationsService get getService {
  final InternalNotificationsServiceType serviceType =
      EnvironmentConfig.getEnvConfig().internalNotificationsServiceType;
  switch (serviceType) {
    case InternalNotificationsServiceType.firebase:
      return InternalNotificationsWithFirebase();
    case InternalNotificationsServiceType.pusher:
      return InternalNotificationsWithPusher();
    case InternalNotificationsServiceType.custom:
      return InternalNotificationsWithCustomService();
    case InternalNotificationsServiceType.none:
      return InternalNotificationsNoService();
  }
}

abstract class InternalNotifications {
  static final InternalNotificationsService _service = getService;

  static late final Stream<int> pendingNotificationsCountStream;

  static late List<InternalNotification> notifications;

  static late final Stream<List<InternalNotification>> notificationsStream;

  static Future<void> init() async {
    await _service.init();
    pendingNotificationsCountStream = _service.pendingNotificationsCountStream;
    notifications = _service.notifications;
    notificationsStream = _service.notificationsStream;
    _service.notificationsStream.listen((updatedNotifications) {
      notifications = updatedNotifications;
    });
  }

  static void dispose() async {
    await _service.dispose();
  }

  static Future<void> subscribe() async {
    await _service.subscribe();
  }

  static Future<void> unsubscribe() async {
    await _service.unsubscribe();
  }

  static Future<void> push(List<String> userIds, InternalNotification notification) async {
    await _service.push(userIds, notification);
  }
}
```