# Base Controller

[[toc]]

Base Controller is used for initializing all core functionalities needed by `vaahextendflutter`. We need to initialize base controller in [main function](../../../essentials/app.md#main-function).

::: warning Dependencies
package `get_storage` and file `root_assets_controller`

if your app don't need root_assets_controller then you can remove below highlighted lines from the base_controller.dart
:::

base_controller.dart (here replace example with your flutter app name)
```dart{3,14}
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:example/controllers/root_assets_controller.dart';
import 'package:example/vaahextendflutter/app_theme.dart';
import 'package:example/vaahextendflutter/env.dart';
import 'package:example/vaahextendflutter/services/api.dart';

class BaseController extends GetxController {
  Future<void> init() async {
    await GetStorage.init();
    EnvironmentConfig.setEnvConfig();
    AppTheme.init();
    Api.init();
    Get.put(RootAssetsController());
  }
}
```