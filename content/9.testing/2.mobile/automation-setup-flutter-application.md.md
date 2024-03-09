---
title: Automation Setup for Flutter Application
---

::alert{type="info" class="p-3 mb-5 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert"}
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

- Add the statements given below in the in the file.
  <img src="/images/webdriverio/flutter_conf_one.png">

- After adding the above statements, run `flutter pub get` command in the terminal to update the changes.

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

### Step 3: Run the application
To get the **apk** needed, open your Android Studio, and Launch the emulator, then run command `flutter run` in your flutter project terminal. 

You can close the emulator and android studio for now.

To run the app on an **iOS** device. Follow the steps mentioned on this [documentation](https://docs.flutter.dev/get-started/install/macos/mobile-ios).

**With this, the configuration for the flutter application is now complete.**

## Setup WebdriverIO project
In this we are going to setup a WebdriverIO project for automating the mobile application we just created in the prior steps.

To setup the project, follow the steps mentioned in the [documentation](../1.web/0.setup-new-project.md) till **Step 9** of **Setup WebdriverIO project** section. Now follow the steps given below:
1. For "Which type of environment would you like?". Select **Mobile**.
2. For "Which mobile environment you'ld like to automate?". Select **Android** for now. We will setup iOS automation as well.
3. For "Which framework do you want to use?". Select **Mocha**.
4. For "Do you want to use a compiler?". Select **No**.
5. Press **Enter** for the four commands to generate sample test cases and page object files.
6. Choose **spec reporter**  for test case reporting.
7. For "Do you want to add plugins to your test setup?". Select **wait-for**. Press **Space** and then **Enter**.
    <img src="/images/webdriverio/plugin.png">
8. For "Would you like to include Visual Testing to your setup?". Press **Enter**.
9. For "Do you want to add a service to your test setup?". Select **Appium**.
10. When "Do you want me install `npm install` is prompted. Press **Enter**.
11. Wait for the command `npm install` to complete.
12. After the setup is complete, it will ask you to "Continue with Appium setup using appium-installer". Press **Enter**.
13. After a while it will ask you to "Select an option (Use arrow keys)". Select option **Install Appium Server**. Then select **Select latest Server version:**.
14. Wait till the appium server is installed.
15. After the installation is complete, a success message will be visible. Refer to the screenshot below:
    <img src="/images/webdriverio/flutter_setup_two.png">
16. Similarly, select **Run Appium Doctor**. Then select **Android**
17. At last select **Exit**. (Press **Space** and then **Enter**.)

## Configuration
Now, before running the test scripts we need to install several packages, configure the `wdio.conf.js` file. We also need to create **env** file so that the capabilities for different platforms can be added.

### Install Dependencies
To install the required dependencies and configure `package.json` file, follow the steps given below: