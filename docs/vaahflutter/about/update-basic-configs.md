# Update Basic Configs

[[toc]]

## 1. Clone the repository and build your APP on top of it.

To clone the repository, you'll need to run the below command in your terminal. Make sure [git](https://git-scm.com/downloads) is installed in your system.

```bash
git clone ...
```

### How to change the Package Name/ Bundle Identifier, and App Name?

Let's say you want to change the package name/ Bundle identifier from `com.webreinvent.app` to `domain.company.appname`.

::: tip Note:
To avoid renaming the package and bundle identifier, you can start your project using this command in your terminal:

```bash
flutter create --org domain.company appname
```
:::

#### For Android

##### Change package name

###### Step 1:

Change the package name in your `AndroidManifest.xml` (locations: `root/android/app/src/main/AndroidManifest.xml`, `root/android/app/src/debug/AndroidManifest.xml` and `root/android/app/src/profile/AndroidManifest.xml`, according what environment you want to deploy).

From
```xml{2}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.webreinvent.app">
```

To
```xml{2}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="domain.company.appname">
```

###### Step 2:

In your `build.gradle` (`root/android/app/build.gradle`) file inside the app; change applicationId

From
```groovy{5}
android {
    ...
    defaultConfig {
        // Specify your unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "com.webreinvent.app"
        ...
    }
    ...
}
```

To
```groovy{5}
android {
    ...
    defaultConfig {
        // Specify your unique Application ID (https://developer.android.com/studio/build/application-id.html).
        applicationId "domain.company.appname"
        ...
    }
    ...
}
```

###### Step 3:

Change the directory name

From
```
root/android/app/src/main/kotlin/com/webreinvent/app/
```

To
```
root/android/app/src/main/kotlin/domain/company/appname/
```

##### Change the app name

If you want to change your app's name that is displayed everywhere,

Change the `android:label` in your `AndroidManifest.xml` (locations: `root/android/app/src/main/AndroidManifest.xml`, `root/android/app/src/debug/AndroidManifest.xml` and `root/android/app/src/profile/AndroidManifest.xml`, according what environment you want to deploy).

From
```dart{2}
<application
        android:label="App"
        android:name="${applicationName}"
        android:icon="@mipmap/ic_launcher">
```
to
```dart{2}
<application
        android:label="Your App Name"
        android:name="${applicationName}"
        android:icon="@mipmap/ic_launcher">
```

---

#### For iOS

##### Change bundle identifier

Change the `CFBundleIdentifier` (bundle identifier) value in your `root/ios/Runner/Info.plist` file.


From
```xml{2}
<key>CFBundleIdentifier</key>
<string>com.webreinvent.app</string>
```

To
```xml{2}
<key>CFBundleIdentifier</key>
<string>domain.company.appname</string>
```

##### Change app name

Change the `CFBundleDisplayName` (bundle display name) value in your `root/ios/Runner/Info.plist` file.

From
```xml{2}
<key>CFBundleDisplayName</key>
<string>App</string>
```

To
```xml{2}
<key>CFBundleDisplayName</key>
<string>Your App Name</string>
```

### How to change the package name and description in pubspec.yaml?

::: danger Note:
Changing the app name in pubspec.yaml can cause errors in package imports
:::

Change `name` and `description` properties in `root/pubspec.yaml`

From
```
name: app
description: VaahFlutter, is all about app essentials.
```

To
```
name: your_app_name
description: Your app description.
```

## 2. Use VaahFlutter in your new/existing project.

### Copy core directories and packages in your project.

- `root/assets`
- `root/lib`
- `root/packages`
- `root/pubspec.yaml`

### Check the documentation for how to use [different components](../core/log.md)

---

::: tip Future plans
TODO: implement VaahFlutter as a package.
:::
