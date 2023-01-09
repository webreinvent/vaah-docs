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

## `env.dart` file
```dart
...

// After changing any const you will need to restart the app (Hot-reload won't work).

// Version and build
const String version = '1.0.0'; // version format 1.0.0 (major.minor.patch)
const String build = '2022122001'; // build no format 'YYYYMMDDNUMBER'

final EnvironmentConfig defaultConfig = EnvironmentConfig(
  appTitle: 'WebReinvent',
  appTitleShort: 'WRI',
  envType: 'default',
  version: version,
  build: build,
  backendUrl: '',
  apiUrl: '',
  timeoutLimit: 60 * 1000, // 60 seconds
  firebaseId: '',
  enableConsoleLogs: true,
  enableLocalLogs: true,
  enableApiLogs: true,
  showDebugPanel: true,
  debugPanelColor: AppTheme.colors['black']!.withOpacity(0.7),
);

// To add a new configuration add a new key, and value pair in envConfigs
Map<String, EnvironmentConfig> envConfigs = {
  // Do not remove the default config
  'default': defaultConfig.copyWith(
    envType: 'default',
  ),
  'develop': defaultConfig.copyWith(
    envType: 'develop',
    enableLocalLogs: false,
  ),
  'stage': defaultConfig.copyWith(
    envType: 'stage',
    enableLocalLogs: false,
  ),
  'production': defaultConfig.copyWith(
    envType: 'production',
    enableConsoleLogs: false,
    enableLocalLogs: false,
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
    } catch (e) {
      Console.danger(e.toString());
      exit(0);
    }
  }

  EnvironmentConfig getSpecificConfig(String key) {
    bool configExists = envConfigs.containsKey(key);
    if (configExists) {
      return envConfigs[key]!;
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
  final bool enableConsoleLogs;
  final bool enableLocalLogs;
  final bool enableApiLogs;
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
    required this.enableConsoleLogs,
    required this.enableLocalLogs,
    required this.enableApiLogs,
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
    Console.info('Env Type: ${envController.config.envType}');
    Console.info('Version: ${envController.config.version}+${envController.config.build}');
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
    bool? enableConsoleLogs,
    bool? enableLocalLogs,
    bool? enableApiLogs,
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
      enableConsoleLogs: enableConsoleLogs ?? this.enableConsoleLogs,
      enableLocalLogs: enableLocalLogs ?? this.enableLocalLogs,
      enableApiLogs: enableApiLogs ?? this.enableApiLogs,
      showDebugPanel: showDebugPanel ?? this.showDebugPanel,
      debugPanelColor: debugPanelColor ?? this.debugPanelColor,
    );
  }
}
```

## Details

All the environment-related variables are defined in EnvironmentConfig class, there can be multiple EnvironmentConfig instances to use different configs for the app [Check this section]().  

### EnvironmentConfig variables
As of now, EnvironmentConfig consist of variable listed below

| Variable name | Type  | Short Description |
| --- | --- | --- |
| appTitle | String | Full name of app |
| appTitleShort | String | short name of app |
| envType | String | type of env (e.g. dev, stg, prod) |
| version | String | version of app (version format 1.0.0 (major.minor.patch)) |
| build | String | build number of the app (build no format 'YYYYMMDDNUMBER') |
| backendUrl | String | backend url |
| apiUrl | String | api url |
| firebaseId | String | firebase app id
| timeoutLimit | int | common timeout limit (in milliseconds (if I want to set it to 15 sec then it should be 15 * 1000)) |
| enableConsoleLogs | bool | to enable/ disable console logs |
| enableLocalLogs | bool | to enable/ disable Local logs |
| enableApiLogs | bool | to enable/ disable API/ Remote logs |
| showDebugPanel | bool | to enable/ disable Debug panel |
| debugPanelColor | Color | Debug panel font color |

### Accessing env variables using EnvironmentConfig
::: danger Note:
- Developer should access config using `EnvironmentConfig.getEnvConfig()` and `EnvironmentConfig.setEnvConfig()`, Developer should not implement any methods to interact with configs directly. 
:::

but first, we need to initialize `EnvironmentConfig`, then we can access its variables,

Before starting the app we get the environment variable from the command line argument, and depending on that we will initialize the EnvironmentConfig and EnvController.

i.e. when the below command is executed we extract the environment variable
```bash
flutter run --dart-define="environment=develop"
```

We initialize the config in [BaseController](../app.md/#base-controller) using `EnvironmentConfig.setEnvConfig()`

setEnvConfig contains code shown below, In below code section the first line will extract env from arguments. And rest of the code will initialize the EnvController. But for the environment value we are receiving from the argument, the 'key' for that value should be in `envConfigs` (check env.dart code), otherwise default config will be used.

```dart{2,3}
static void setEnvConfig() {
    String environment = const String.fromEnvironment('environment', defaultValue: 'default');
    final EnvController envController = Get.put(EnvController(environment));
    ...
  }
```

To access the EnvironmentConfig developer can use
```dart
EnvironmentConfig config = EnvironmentConfig.getEnvConfig();
```

### Adding And Removing Configs
Dev can check the defaultConfig in `env.dart` file and can also refer envConfigs variable which is Map<String, EnvironmentConfig>. The developer can add a key-value pair in it and after that developer can run the app for that environment by passing a command line argument.

we can copy config with overriding values using copyWith method.

```dart
'develop': defaultConfig.copyWith(
  envType: 'develop',
  enableLocalLogs: false,
),
```