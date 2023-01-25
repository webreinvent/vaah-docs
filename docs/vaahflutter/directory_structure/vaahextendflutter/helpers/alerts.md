# Alerts

::: warning Dependencies

- [fluttertoast](https://pub.dev/packages/fluttertoast)

- depends on [app_theme](../apptheme.md) also.

- [API](../services/api.md) lib depends on Alerts.

:::

[[toc]]

Basically we have two types of alerts: 1. Toast and 2. Dialog

Here Type of alert functions are nullable so you might want to check if they are null or not before using them. We made them nullable because developer can remove them in specific project so API will check if the dialogue or toast exist, if they don't it won't show anything. One usecase here is: developer wants to show error toasts only and not succuss toasts when using API, so dev will set this success toast to null. Now on success it will check if success toast is null or not if not null then only it shows it.

## Toast

For toast, we have 3 kind of toasts: `success`, `error`, and `info`.

### Info toast

```dart
Alerts.showInfoToast!(content: 'Your Content');
```

### Success toast

```dart
Alerts.showSuccessToast!(content: 'Your Content');
```

### Error toast

```dart
Alerts.showErrorToast!(content: 'Your Content');
```

## Dialog

For dialog also, we have 2 kind of dialogs: `success`, and `error`.

### Success Dialog

```dart
Alerts.showSuccessDialog!(
    title: 'Title',
    content: ['Content'],
    hint: 'Hint',
    actions: [],
);
```

### Error Dialog

```dart
Alerts.showErrorDialog!(
    title: 'Title',
    content: ['Content'],
    hint: 'Hint',
    actions: [],
);
```

## Source Code

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:team/routes/middleware.dart';
import 'package:team/vaahextendflutter/app_theme.dart';
import 'package:team/vaahextendflutter/env.dart';
import 'package:team/vaahextendflutter/widgets/debug.dart';

final _navigatorKey = GlobalKey<NavigatorState>();

class AppConfig extends StatelessWidget {
  const AppConfig({super.key});

  @override
  Widget build(BuildContext context) {
    EnvironmentConfig env = EnvironmentConfig.getEnvConfig();
    return GetMaterialApp(
      title: env.appTitle,
      theme: ThemeData(
        primarySwatch: AppTheme.colors['primary'],
      ),
      onGenerateRoute: routeMiddleware,
      builder: (BuildContext context, Widget? child) {
        return DebugWidget(
          navigatorKey: _navigatorKey,
          child: child!,
        );
      },
    );
  }
}
```