# Routes

[[toc]]

Routes is file which does path to Page(View) mapping. This routes are used in [middleware](./middleware.md) file.

```dart
import 'package:flutter/material.dart';
import 'package:example/view/pages/home.dart';
import 'package:example/view/pages/not_found.dart';
import 'package:example/view/pages/permission_denied.dart';

final Map<String, Route<dynamic> Function()> routes = {
  '/': HomePage.route,
  HomePage.routePath: HomePage.route,
  NotFoundPage.routePath: NotFoundPage.route,
  PermissionDeniedPage.routePath: PermissionDeniedPage.route,
};
```