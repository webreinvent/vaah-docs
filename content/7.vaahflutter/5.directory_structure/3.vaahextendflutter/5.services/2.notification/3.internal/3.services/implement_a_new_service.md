---
toc: true
---

# Implementing a New Internal Notification Service

## Introduction

In this section, we will discuss how to implement a new internal notification service within your Flutter application. The internal notification service allows you to send and receive real-time notifications within your application.

## Prerequisites

- Before implementing a new internal notification service, make sure you have a clear understanding of the requirements and architecture of your application. Additionally, ensure that you have the necessary access and credentials for the chosen service.

- You've refered all of the documentation from Internal Notifications Section

## Steps

1. Create a New Service Class:

- Start by creating a new Dart file for your service class, such as custom_notifications_service.dart.
- Import the necessary dependencies for your service implementation.

2. Implement the InternalNotificationsService Interface:

- Implement the InternalNotificationsService interface in your service class.
- This interface provides the required methods and properties for managing internal notifications.
- The interface includes methods such as init(), dispose(), subscribe(), unsubscribe(), and push(), which you need to implement according to your service's functionality.
- You can refer to the existing service implementations (firebase_notifications_service.dart, pusher_notifications_service.dart, etc.) for guidance on how to structure your implementation.

3. Define Streams and Data Structures:

- Define the necessary streams and data structures to handle notifications.
- Streams can be used to provide real-time updates of pending notifications and notification data.
- For example, you can define streams like pendingNotificationsCountStream and notificationsStream to expose the notification count and the list of notifications, respectively.

4. Implement Service Initialization:

- Implement the init() method in your service class to initialize the service.
- This method should establish the necessary connections, set up event listeners, and perform any required configurations for your chosen service.
- If applicable, you may need to authenticate or set up credentials to access the notification service.

5. Implement Subscription and Unsubscription:

- Implement the subscribe() and unsubscribe() methods in your service class.
- These methods should handle subscribing to and unsubscribing from the relevant notification channels or topics.
- Depending on your service, you may need to provide user-specific channel or topic names to enable targeted notifications.

6. Implement Notification Pushing:

- Implement the push() method in your service class.
- This method should handle pushing notifications to the intended recipients.
- You may need to provide the user IDs or other identifiers of the target recipients along with the notification content.

7. Handle Data Updates and Event Triggers:

- Depending on your service, you may need to implement event handlers or listeners to capture incoming notification events.
- When an event occurs, update the appropriate streams and data structures to reflect the changes.
For example, if a new notification is received, add it to the list of notifications and update the notification count stream.

8. Clean Up and Disposal:

- Implement the dispose() method in your service class to handle clean-up operations when the service is no longer needed.
- This method should close any open connections, release resources, and unsubscribe from notification channels.

9. Implement Customization Options:

- Consider providing customization options for your service implementation.
- For example, you may allow developers to configure notification settings, enable/disable certain features, or specify additional service-specific parameters.

10. Update the main internal/notification.dart file

Update the main internal notifications file to include the custom service. In the main file, import the custom service file and modify the getService method to include the custom service option.

```dart
case InternalNotificationsServiceType.yourservice:
  return InternalNotificationsWithYourService();
```

- For this you have to add the enum value for `InternalNotificationsServiceType`. Which can be found in env file.

## Usage

1. Import your custom service class into the desired files or modules where you need to work with internal notifications.

2. Initialize an instance of your internal notification class.

We generally initialize this in base controller.

```dart
await InternalNotifications.init();
```

3. Call the necessary methods on the service instance to manage notifications, such as init(), subscribe(), unsubscribe(), and push().

4. Subscribe to the streams provided by your service instance to receive real-time updates of pending notifications and notification data.

5. Customize the service implementation or configure any additional options based on your application's requirements.