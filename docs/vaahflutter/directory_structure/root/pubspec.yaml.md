# pubspec.yaml

[[toc]]

## What is this file about

Every Flutter project includes a pubspec.yaml file, often referred to as the pubspec. A basic pubspec is generated when you create a new Flutter project. It’s located at the top of the project tree and contains metadata about the project that the Dart and Flutter tooling needs to know. The pubspec is written in YAML, which is human readable, but be aware that white space (tabs v spaces) matters.

This is the file we use to add metadata and configuration specific to our application. The pubspec file specifies dependencies that the project requires, such as particular packages (and their versions), fonts, or image files. It also specifies other requirements, such as dependencies on developer packages (like testing or mocking packages), or particular constraints on the version of the Flutter SDK.

Flutter supports using shared packages contributed by other developers to the Flutter and Dart ecosystems. This allows quickly building an app without having to develop everything from scratch. so the pubspec. yaml file will be containing the records of all the dependencies used for the flutter project.

### Sample `pubspec.yaml` file
```
name: <project name>
description: <project description>

publish_to: 'none'

version: 1.0.0+0001

environment:
  sdk: ">=2.19.2"
  flutter: ">=3.7.3"

dependencies:
  flutter:       # Required for every Flutter project
    sdk: flutter # Required for every Flutter project

  cupertino_icons: ^1.0.5 # Only required if you use Cupertino (iOS style) icons

dev_dependencies:
  flutter_test:
    sdk: flutter # Required for a Flutter project that includes tests
  flutter_lints: ^2.0.0

flutter:

  uses-material-design: true # Required if you use the Material icon font

  # To add assets to your application, add directory path:
  assets:
    - assets/images/essentials
    - assets/icons/
    - assets/icons/general/

  fonts:              # Required if your app uses custom fonts
    - family: Roboto
      fonts:
        - asset: assets/fonts/Roboto/Regular.ttf
        - asset: assets/fonts/Roboto/Italic.ttf
          style: italic
    - family: Times New Roman
      fonts:
        - asset: assets/fonts/timesnewroman/Regular.ttf
        - asset: assets/fonts/Bold.ttf
          weight: 700
```

Here we need to have [assets](./d_assets.md) directory in project.