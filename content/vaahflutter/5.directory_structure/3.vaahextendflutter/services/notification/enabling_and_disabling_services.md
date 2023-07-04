# Enabling and Disabling Services

[[toc]]

## Env variables

For Push notifications and Internal notifications we can set what service we want to use.

## Push notifications

- To enable push notifications you need to update `pushNotificationsServiceType` variable in env file for your environment.

- Possible values of the variable are:
    1. PushNotificationsServiceType.remote
    2. PushNotificationsServiceType.local
    3. PushNotificationsServiceType.both
    4. PushNotificationsServiceType.none

- Here for context, remote service is used when dev wants to implement notifications for chat like notifications, and local service is used when dev wants to implement notifications for reminder like notifications.

### PushNotificationsServiceType.remote

- If developer sets env variable value equals to `PushNotificationsServiceType.remote` then they have to add one more variable, because to enable remote notifications we rely on `Onesignal`. They can follow [this section](./push/services/remote.md#onesignal-setup-and-env-variables) and do the configuration for one signal. When they find the one signal app id. Developer can add it using `oneSignalConfig: const OneSignalConfig(appId: 'your-app-id'),`.

### PushNotificationsServiceType.local

- If developer sets env variable value equals to `PushNotificationsServiceType.local` then they can push any local notification without any additional configuration.

### PushNotificationsServiceType.both

- If developer sets env variable value equals to `PushNotificationsServiceType.both` then they can push any local notification without any additional configuration. But for remote they need to do setup for onesignal as mentioned in [this section](#pushnotificationsservicetyperemote). And both kind of services will be available.

### PushNotificationsServiceType.none

- If developer sets env variable value equals to `PushNotificationsServiceType.none` then app will not use any kind of service and won't be able to push remote or local notifications.

::: tip More details
Please visit [push notifications section](./push/notification.md) for more details.
:::

## Internal (in-app) notifications

- To enable internal notifications you need to update `internalNotificationsServiceType` variable in env file for your environment.

- Possible values of the variable are:
    1. InternalNotificationsServiceType.firebase
    2. InternalNotificationsServiceType.pusher
    3. InternalNotificationsServiceType.custom
    4. InternalNotificationsServiceType.none

### InternalNotificationsServiceType.firebase

- If developer sets env variable value equals to `InternalNotificationsServiceType.firebase` then they have to do the setup for firebase fire store and run flutterfire configure. Read about it [here](./internal/services/firebase.md#integration).

### InternalNotificationsServiceType.pusher

- If developer sets env variable value equals to `InternalNotificationsServiceType.pusher` then they have to do the setup for firebase fire store and run flutterfire configure. Read about it [here](./internal/services/firebase.md#integration).

### InternalNotificationsServiceType.custom

- If developer sets env variable value equals to `InternalNotificationsServiceType.custom` then they have to setup custom service, [here](./internal/services/custom.md)

### InternalNotificationsServiceType.none

- If developer sets env variable value equals to `InternalNotificationsServiceType.none` then app will not use any kind of service and won't be able to dump internal notifications.

::: tip More details
Please visit [internal notifications section](./internal/notification.md) for more details.
:::
