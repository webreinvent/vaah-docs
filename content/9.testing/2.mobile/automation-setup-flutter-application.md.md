---
title: Automation Setup for Flutter Application
---

::alert{type="info" class="p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert"}
**Prerequisites**:
- Android/iOS simulators should be setup and functional.
::

## Setup Flutter Application
Before working on the automation script. We have to configure the flutter application to allow automation script to perform steps within the application.

### Step 1: Download Flutter SDK
First step is to download flutter sdk. Follow the steps mentioned in this [documentation](https://docs.flutter.dev/get-started/install) by docs.flutter.dev.

### Step 2: Create a Sample flutter App
To create a sample flutter application for testing. Follow the steps mentioned in this [documentation](https://docs.flutter.dev/get-started/test-drive).

## Configure Flutter Application
After setting up flutter and creating a sample application. We need to configure few files to allow webdriverio-appium to automate the app.

Follow the steps mentioned below to configure the flutter application:

### Step 1: Update `pubspec.yaml` file
Navigate to the sample app project in VSCode and open file `pubspec.yaml`.

Add the statements given below in the in the file.
<img src="/images/webdriverio/flutter_conf_one.png">

After adding the above statements, run `flutter pub get` command in the terminal to update the changes.

### Step 2: Update `main.dart` file
Open `main.dart` file and add the following statements.
- Add the statement given below at the top of the file.
    ```dart
    import 'package:flutter_driver/driver_extension.dart';
    ```
- Also add the below statement inside main() method.
    ```dart
    enableFlutterDriverExtension();
    ```
- Refer to the screenshot given below:
  <img src="/images/webdriverio/flutter_conf_two.png">

