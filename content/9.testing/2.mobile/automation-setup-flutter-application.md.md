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

1. Run following commands in the terminal of the Code Editor (Make sure the path is set to your project directory).
    - First we will install `appium` in our project.
        ```shell
        npm i appium --save-dev
        ```
    - After this, `appium-flutter-driver` is installed which performs actions on mobile app. To know more, refer [npm.js](https://www.npmjs.com/package/appium-flutter-driver?activeTab=readme) 
        ```shell
        npm i appium-flutter-driver --save-dev
        ```
    - Similarly, we will install `appium-flutter-finder`. This will be used to locate elements in flutter app. To know more, refer [npm.js](https://www.npmjs.com/package/appium-flutter-finder?activeTab=explore)
        ```shell
        npm i appium-flutter-finder --save-dev
        ```
    - Next, we will install `assert` module to make assertions in out test script.
        ```shell
        npm i assert --save-dev
        ```
    - Similarly, we will install `chai` to use various expect methods in it.
        ```shell
        npm i chai --save-dev
        ```
    - Finally, run this command:
        ```shell 
        npm i chalk cli-color cross-env ts-node typescript --save-dev
        ```
2. In `package.json` file, replace the code in script with the below code:
    ```json
    "scripts": {
        "wdio": "cross-env wdio run ./wdio.conf.js",
        "wdio debug": "cross-env NODE_WDIO_DEBUG=true wdio run ./wdio.conf.js",
        "wdio ios": "cross-env NODE_WDIO_OS=ios wdio run ./wdio.conf.js",
        "wdio android": "cross-env NODE_WDIO_OS=android wdio run ./wdio.conf.js"
    }
    ```
3. Also add `"type":"module"` inside package.json file. Refer to the code below:
    ```json
    ...
    "type": "module",
    "devDependencies": {
        ...
    }
    ```
### Configure ENV file 
1. Create a new file in the root folder of the project, where the file `wdio.conf.js` file is located.
2. Name the file `wdio.env.js`.
3. Add the code given below inside the file:
    ```js
    class Env {

        constructor() {

            this.params = {
                debug: false,
                env: null,
                log_level: 'error',
                small_pause: 5000,
                medium_pause: 10000,
                long_pause: 25000,
                app_id: 'com.toolstation.mobile_app.dev',
                version: null,
                capabilities: [{
                        platformName: 'Android',
                        'appium:deviceName': 'P7A34',
                        'appium:platformVersion': '14',
                        'appium:automationName': 'Flutter',
                        'appium:app': '/Users/toolstation/development/toolstation/mobile_app/build/app/outputs/flutter-apk/app-ukpreprod-debug.apk',
                        'appium:fullReset': true,
                        'appium:noReset': false,
                        'appium:autoGrantPermissions': true,
                }]
            };
        } 
        //-------------------------------------------------
        setId(){
            const env = process.argv[4];

            if(env == 'ios')
                this.params.app_id = 'com.toolstation.mobile-app.dev'
            else
                this.params.app_id = 'com.toolstation.mobile_app.dev'
        }

        setCapabilities()
        {
            const env = process.argv[4];

            switch(env)
            {
                case 'android':
                    this.params.capabilities = [{
                        platformName: 'Android',
                        'appium:deviceName': 'P7A34',
                        'appium:platformVersion': '14',
                        'appium:automationName': 'Flutter',
                        'appium:app': '/Users/toolstation/development/toolstation/mobile_app/build/app/outputs/flutter-apk/app-ukpreprod-debug.apk',
                        'appium:fullReset': true,
                        'appium:noReset': false,
                        'appium:autoGrantPermissions': true,
                    }]
                    break;
                case 'ios':
                    this.params.capabilities = [{
                        platformName: 'iOS',
                        'appium:deviceName': 'iPhone 15 Pro',
                        'appium:platformVersion': '17.2',
                        'appium:automationName': 'Flutter',
                        'appium:app':'/Users/toolstation/development/toolstation/mobile_app/build/ios/iphonesimulator/Runner.app',
                        'appium:noReset': false,
                        'appium:autoLaunch': true,
                        'appium:autoAcceptAlerts': true
                    }]
                    break;
            }
        }
        //-------------------------------------------------
        getParams () {
            this.setId();
            this.setCapabilities();
            console.log('params-->', this.params);
            return this.params;
        }
    }
    export default Env;
    ```

### Configure `wdio.conf.js` file
After this, we need to configure the `wdio.conf.js` file. Open the file and follow the steps mentioned below:
1. Add the following code at the top of the file in order to import `wdio.env.js` file created in step 3 of Configure ENV File section.
    ```js
    import env from "./wdio.env.js";
    const envObj = new env();
    const params = envObj.getParams();
    ```
2. Replace `exports.config` to `export const config`. Refer to the code snippet below:
    ```js
    export const config = {
        ...
    }
    ```
3. Enter this code: `env: params,` inside exports.config. Refer to the code below:
    ```js
    export const config = {
        env: params,
        //
        // ====================
        // Runner Configuration
        // ====================
        ...
    }
    ```
4. For the `capabilities` replace the code with `capabilities: params.capabilities,`. Refer to the code below:
    ```js
    export const config = {
        ...
        capabilities: params.capabilities,
        ...
    }
    ```
Now, the configuration is completed. But we still need to do some changes with the test files before we can start running our script. 