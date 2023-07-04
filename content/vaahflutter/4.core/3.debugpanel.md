# Debug panel

::: warning Dependencies

- This panel uses EnvironmentConfig, thus depending on the env.dart file.

:::

[[toc]]

<img height="512" :src="$withBase('/images/flutter/debug-panel.gif')" alt="debug-panel">

Debug panel will be visible only if `showDebugPanel` is set to `true` for `EnvironmentConfig` in the `env.dart` file. You can change the color of the tag by setting the `debugPanelColor` variable for your EnvironmentConfig.

::: danger NOTE:
Remember showDebugPanel for production should always be `false` in the Environment configuration in the `env.dart` file.
:::

```dart
  'production': defaultConfig.copyWith(
    ...
    showDebugPanel: false,
  ),
```

## Make the panel visible on a specific screen

```dart
final _navigatorKey = GlobalKey<NavigatorState>();

class MyPage extends StatelessWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DebugWidget(
        navigatorKey: _navigatorKey,
        child: Container(),
    );
  }
}
```

## Make the panel visible on every screen using central implementation.

::: tip NOTE:
You have to write the below code in MaterialApp, and that will show the tag panel on each screen. You don't have to wrap any other screen/ widget, or you don't have to extend any screen/widget with DebugWidget.
:::

In the file containing the material app paste this code after imports
```dart
final _navigatorKey = GlobalKey<NavigatorState>();
```

 In the material app paste, this code and panel will be visible on all pages.
```dart
return MaterialApp(
  builder: (BuildContext context, Widget? child) {
    return DebugWidget(
      navigatorKey: _navigatorKey,
      child: child!,
    );
  },
);
```