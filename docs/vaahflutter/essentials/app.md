# App

[[toc]]

::: warning Dependencies
- [get: ^4.6.5](https://pub.dev/packages/get)
:::

## Base Controller 

- Path: `root/lib/vaahextendflutter/base/base_controller.dart`

Base Controller is used for initializing all core functionalities needed by `vaahextendflutter`.

```dart{5-8}
...

class BaseController extends GetxController {
  Future<void> init() async {
    await GetStorage.init();
    EnvironmentConfig.setEnvConfig();
    AppTheme.init();
    Api.init();
  }
}
```

## Main function

- Path: `root/lib/main.dart`

In the main function, we need to initialize the BaseController.

```dart{5-6}
...

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  BaseController baseController = Get.put(BaseController());
  await baseController.init();
  runApp(const MyApp());
}
```

## Mateial App GetMaterialApp

- We recommend using, VaahFlutter `EnvironmentConfig`, VaahFlutter `AppTheme`, VaahFlutter `route middleware`, and VaahFlutter `DebugWidget`.

- You can check the documentation here:
  - [EnvironmentConfig]()
  - [AppTheme]()
  - [routeMiddleware]()
  - [DebugWidget]()

```dart
final _navigatorKey = GlobalKey<NavigatorState>();

class AppConfig extends StatelessWidget {
  const AppConfig({super.key});

  @override
  Widget build(BuildContext context) {
    EnvironmentConfig config = EnvironmentConfig.getEnvConfig();
    return GetMaterialApp(
      title: config.appTitle,
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