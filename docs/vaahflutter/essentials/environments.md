# Environments

::: warning Dependencies
None
:::

[[toc]]

## Running the app in different environments

- In the default environment
```bash
flutter run

OR

flutter run --dart-define="environment=default"
```

- In the development environment
```bash
flutter run --dart-define="environment=develop"
```

- In the staging environment
```bash
flutter run --dart-define="environment=stage"
```

- In the Production environment
```bash
flutter run --dart-define="environment=production"
```

## About environment configuration

Environment config contains below properties.

| **Property Name** | **Description** |
| --- | --- |
| appTitle | Represents full name of app |
| appTitleShort | Represents short name of app |
| envType | Represents environment type (e.g. develop, staging, production, etc.) |
| version | Represents current version, in major.minor.patch format (e.g. 1.0.0) |
| build | Represents build number, generally date (yyyymmdd) + build of current day (e.g. 2023010101) |
| backendUrl | No use |
| apiUrl | Represents root endpoint of url |
| timeoutLimit | Represents timeout limit for requests (in milliseconds) |
| firebaseId | Represents firebase id of app |
| sentryConfig | Contains all essential variable for sentry |
| enableLocalLogs | Used for enabling/ disabling Local Logs |
| enableCloudLogs | Used for enabling/ disabling Cloud Logs |
| enableApiLogInterceptor | Used for enabling/ disabling API Request and Response Local logs |
| showDebugPanel | Used for enabling/ disabling Debug Panel |
| debugPanelColor | Used for changing color of Debug Panel |

Sentry Config: check more [here](../directory_structure/vaahextendflutter/services/performance_monitoring.md) and [here](../directory_structure/vaahextendflutter/services/logging_library/logging_library.md)

| **Property Name** | **Description** |
| --- | --- |
| dsn | Data Source Name (which is unique per project amd developer can obtain that by creating a new project in sentry) |
| enableAutoPerformanceTracking | if set to false nothing will be monitored |
| autoAppStart | if enabled will monitor cold and warm start up time |
| enableUserInteractionTracing | if enabled will monitor User Interaction |
| enableAssetsInstrumentation | if enabled will monitor Asset Performance |
| tracesSampleRate | will report uncaught errors as per rate is set, i.e. if it's 0.4 then 40% of all uncaught error will be reported |

### Example of environment config
```dart
final EnvironmentConfig developConfig = EnvironmentConfig(
  appTitle: 'VaahFlutter',
  appTitleShort: 'VaahFlutter',
  envType: 'develop',
  version: version,
  build: build,
  backendUrl: '',
  apiUrl: '',
  timeoutLimit: 20 * 1000, // 20 seconds
  firebaseId: '',
  sentryConfig: const SentryConfig(
    dsn: '',
    enableAutoPerformanceTracking: true,
    autoAppStart: true,
    enableUserInteractionTracing: true,
    enableAssetsInstrumentation: true,
    tracesSampleRate: 0.6,
  ),
  enableLocalLogs: true,
  enableCloudLogs: true,
  enableApiLogInterceptor: true,
  showDebugPanel: true,
  debugPanelColor: AppTheme.colors['black']!.withOpacity(0.7),
);
```

## How can I create a new config and new environment and use it for my app.

- Let's say I already have one default config (developConfig) and I want to copy some of it's properties and want to override some properties. If I don't have any config I need to create one like [this](#example-of-environment-config).

- Then I can pass different configurations in `_envConfigs` array in [Source Code](#source-code).

```dart
Map<String, EnvironmentConfig> _envConfigs = {
  'develop': developConfig,
  'stage': developConfig.copyWith(
    envType: 'stage',
    enableLocalLogs: false,
  ),
  'production': developConfig.copyWith(
    envType: 'production',
    enableLocalLogs: false,
    enableApiLogInterceptor: false,
    showDebugPanel: false,
  ),
  'my-env': developConfig.copyWith(
    envType: 'none',
    enableCloudLogs: false,
  ),
};
```

And then developer can just use `flutter run` command with their environment name
```bash
flutter run --dart-define="environment=my-env"
```

## Source Code

`env.dart` file

```dart
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:get/get.dart';

import './app_theme.dart';
import './services/logging_library/logging_library.dart';

// After changing any const you will need to restart the app (Hot-reload won't work).

// Version and build
const String version = '1.0.0'; // version format 1.0.0 (major.minor.patch)
const String build = '2022030201'; // build no format 'YYYYMMDDNUMBER'

final EnvironmentConfig defaultConfig = EnvironmentConfig(
  appTitle: 'VaahFlutter',
  appTitleShort: 'VaahFlutter',
  envType: 'default',
  version: version,
  build: build,
  backendUrl: '',
  apiUrl: '',
  timeoutLimit: 20 * 1000, // 20 seconds
  firebaseId: '',
  sentryConfig: const SentryConfig(
    dsn: '',
    enableAutoPerformanceTracking: true,
    autoAppStart: true,
    enableUserInteractionTracing: true,
    enableAssetsInstrumentation: true,
    tracesSampleRate: 0.6,
  ),
  enableLocalLogs: true,
  enableCloudLogs: true,
  enableApiLogInterceptor: true,
  showDebugPanel: true,
  debugPanelColor: AppTheme.colors['black']!.withOpacity(0.7),
);

// To add new configuration add new key, value pair in envConfigs
Map<String, EnvironmentConfig> _envConfigs = {
  // Do not remove default config
  'default': defaultConfig.copyWith(
    envType: 'default',
  ),
  'develop': defaultConfig.copyWith(
    envType: 'develop',
    enableCloudLogs: false,
  ),
  'stage': defaultConfig.copyWith(
    envType: 'stage',
    enableCloudLogs: true,
  ),
  'production': defaultConfig.copyWith(
    envType: 'production',
    enableLocalLogs: false,
    enableApiLogInterceptor: false,
    showDebugPanel: false,
  ),
};

class EnvController extends GetxController {
  late EnvironmentConfig _config;
  EnvironmentConfig get config => _config;

  EnvController(String environment) {
    try {
      _config = getSpecificConfig(environment);
      update();
    } catch (error, stackTrace) {
      Log.exception(error, stackTrace: stackTrace);
      exit(0);
    }
  }

  EnvironmentConfig getSpecificConfig(String key) {
    bool configExists = _envConfigs.containsKey(key);
    if (configExists) {
      return _envConfigs[key]!;
    }
    throw Exception('Environment configuration not found for key: $key');
  }
}

class EnvironmentConfig {
  final String appTitle;
  final String appTitleShort;
  final String envType;
  final String version;
  final String build;
  final String backendUrl;
  final String apiUrl;
  final String firebaseId;
  final int timeoutLimit;
  final bool enableLocalLogs;
  final bool enableCloudLogs;
  final SentryConfig? sentryConfig;
  final bool enableApiLogInterceptor;
  final bool showDebugPanel;
  final Color debugPanelColor;

  const EnvironmentConfig({
    required this.appTitle,
    required this.appTitleShort,
    required this.envType,
    required this.version,
    required this.build,
    required this.backendUrl,
    required this.apiUrl,
    required this.firebaseId,
    required this.timeoutLimit,
    required this.enableLocalLogs,
    required this.enableCloudLogs,
    this.sentryConfig,
    required this.enableApiLogInterceptor,
    required this.showDebugPanel,
    required this.debugPanelColor,
  });

  static EnvironmentConfig getEnvConfig() {
    final bool envControllerExists = Get.isRegistered<EnvController>();
    if (!envControllerExists) {
      setEnvConfig();
    }
    EnvController envController = Get.find<EnvController>();
    return envController.config;
  }

  static void setEnvConfig() {
    String environment = const String.fromEnvironment('environment', defaultValue: 'default');
    final EnvController envController = Get.put(EnvController(environment));
    Log.info(
      'Env Type: ${envController.config.envType}',
      disableCloudLogging: true,
    );
    Log.info(
      'Version: ${envController.config.version}+${envController.config.build}',
      disableCloudLogging: true,
    );
  }

  EnvironmentConfig copyWith({
    String? appTitle,
    String? appTitleShort,
    String? envType,
    String? version,
    String? build,
    String? backendUrl,
    String? apiUrl,
    String? firebaseId,
    int? timeoutLimit,
    bool? enableLocalLogs,
    bool? enableCloudLogs,
    SentryConfig? sentryConfig,
    bool? enableApiLogInterceptor,
    bool? showDebugPanel,
    Color? debugPanelColor,
  }) {
    return EnvironmentConfig(
      appTitle: appTitle ?? this.appTitle,
      appTitleShort: appTitleShort ?? this.appTitleShort,
      envType: envType ?? this.envType,
      version: version ?? this.version,
      build: build ?? this.build,
      backendUrl: backendUrl ?? this.backendUrl,
      apiUrl: apiUrl ?? this.apiUrl,
      firebaseId: firebaseId ?? this.firebaseId,
      timeoutLimit: timeoutLimit ?? this.timeoutLimit,
      enableLocalLogs: enableLocalLogs ?? this.enableLocalLogs,
      enableCloudLogs: enableCloudLogs ?? this.enableCloudLogs,
      sentryConfig: sentryConfig ?? this.sentryConfig,
      enableApiLogInterceptor: enableApiLogInterceptor ?? this.enableApiLogInterceptor,
      showDebugPanel: showDebugPanel ?? this.showDebugPanel,
      debugPanelColor: debugPanelColor ?? this.debugPanelColor,
    );
  }
}

class SentryConfig {
  final String dsn;
  final bool autoAppStart; // To record cold and warm start up time
  final double tracesSampleRate;
  final bool enableAutoPerformanceTracking;
  final bool enableUserInteractionTracing;
  final bool enableAssetsInstrumentation;

  const SentryConfig({
    required this.dsn,
    this.autoAppStart = true,
    this.tracesSampleRate = 0.6,
    this.enableAutoPerformanceTracking = true,
    this.enableUserInteractionTracing = true,
    this.enableAssetsInstrumentation = true,
  });

  SentryConfig copyWith({
    String? dsn,
    bool? autoAppStart,
    double? tracesSampleRate,
    bool? enableAutoPerformanceTracking,
    bool? enableUserInteractionTracing,
    bool? enableAssetsInstrumentation,
  }) {
    return SentryConfig(
      dsn: dsn ?? this.dsn,
      autoAppStart: autoAppStart ?? this.autoAppStart,
      tracesSampleRate: tracesSampleRate ?? this.tracesSampleRate,
      enableAutoPerformanceTracking:
          enableAutoPerformanceTracking ?? this.enableAutoPerformanceTracking,
      enableUserInteractionTracing:
          enableUserInteractionTracing ?? this.enableUserInteractionTracing,
      enableAssetsInstrumentation: enableAssetsInstrumentation ?? this.enableAssetsInstrumentation,
    );
  }
}
```