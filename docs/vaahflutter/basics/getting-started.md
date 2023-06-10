# Getting Started With VaahFlutter

::: tip Support
- VaahFlutter can be used as a base template and can be used in your existing projects as well. Check [this](./update-basic-configs.md) out for more details.
- Currently, we support two platforms, which are Android and iOS.
:::

[[toc]]

## How to run the app

### Step 1. Download The Repository

[Click here](https://github.com/webreinvent/vaahflutter/archive/refs/heads/master.zip) to download the repository.

### Step 2. Basic Configuration

There are two ways developers can integrate VaahFlutter in their project.

1. Download the repository and develop your APP on top of it
    - Developer needs to change some configurations for
    - [bundle identifier and package name](update-basic-configs.md#_1-download-the-repository-and-develop-your-app-on-top-of-it)
    - [app icon](update-basic-configs.md#_3-change-app-icon)
    - and [splash screen](update-basic-configs.md#_4-change-splash-screen)

2. Use VaahFlutter in your new/existing project
    - Developer needs to copy few directories from downloaded repository, check [this section](./update-basic-configs.md#_2-use-vaahflutter-in-your-new-existing-project).
    - If needed developer needs to configure android menifest file and info.plist file. (As of now, nothing sort of this is required)

### Step 3. Build And Run The App

Open the project in the code editor and run the below command

```bash
flutter run
```

For more details regarding running and building visit [this section.](./running-and-building.md)