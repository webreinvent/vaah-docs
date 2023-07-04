# VaahFlutter

[[toc]]

## Introduction
VaahFlutter is a Flutter-based framework that provides common features required in any application.
    
The purpose of developing VaahFlutter is to create a framework that can be extended in a manageable and structured manner in order to develop large applications while not having to reinvent all essential functionalities every time. Some of the features are as follows:

- Managing environments
- Log Library
- Debug panel
- API service to handle all API-related jobs, case parser for API
- Toasts and Alerts
- App theme, manage colors, text styles
- Padding, margin helpers, and widgets
- Route handler with permissions
- Most common UI widgets.

## Requirements

### Minimum System Requirements

::: tip requirements
- [Windows](https://docs.flutter.dev/get-started/install/windows#system-requirements)
- [Mac](https://docs.flutter.dev/get-started/install/macos#system-requirements)
- [Linux](https://docs.flutter.dev/get-started/install/linux#system-requirements)
- [Chrome OS](https://docs.flutter.dev/get-started/install/chromeos#system-requirements)
:::

### Flutter and Dart Versions

::: danger requirements
We try to use the latest stable version released by flutter, thus as of now VaahFlutter depends on dart SDK version 2.19.6 and flutter version 3.7.11

The `root/pubspec.yaml` file contains `sdk` and `flutter` properties which are used to define dart sdk and flutter versions.
- sdk: ">=2.19.6"
- flutter: ">=3.7.11"
:::

### Learning Curve

If you want to get started quickly with VaahFlutter, all you need to know is [Flutter](https://flutter.dev/) and [Dart](https://dart.dev/). Please read the detailed documentation on Flutter and Dart's official website.

## Releases

### Versioning Scheme

VaahFlutter and its other first-party packages follow Semantic Versioning. Major platform releases are released every 6 to 8 months, while minor and patch releases maybe released as often as every month. Minor and patch releases should never contain breaking changes.

The official way to report the bugs is via [github repo](https://github.com/webreinvent/vaahflutter/issues).

### Support Policy

Bug fixes are provided for one year and security fixes are provided for two years for all `major` releases. These releases provide the longest window of support and maintenance.