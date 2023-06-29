<template><div><h1 id="pubspec-yaml" tabindex="-1"><a class="header-anchor" href="#pubspec-yaml" aria-hidden="true">#</a> pubspec.yaml</h1>
<nav class="table-of-contents"><ul><li><router-link to="#what-is-this-file-about">What is this file about</router-link><ul><li><router-link to="#sample-pubspec-yaml-file">Sample pubspec.yaml file</router-link></li></ul></li></ul></nav>
<h2 id="what-is-this-file-about" tabindex="-1"><a class="header-anchor" href="#what-is-this-file-about" aria-hidden="true">#</a> What is this file about</h2>
<p>Every Flutter project includes a pubspec.yaml file, often referred to as the pubspec. A basic pubspec is generated when you create a new Flutter project. It’s located at the top of the project tree and contains metadata about the project that the Dart and Flutter tooling needs to know. The pubspec is written in YAML, which is human readable, but be aware that white space (tabs v spaces) matters.</p>
<p>This is the file we use to add metadata and configuration specific to our application. The pubspec file specifies dependencies that the project requires, such as particular packages (and their versions), fonts, or image files. It also specifies other requirements, such as dependencies on developer packages (like testing or mocking packages), or particular constraints on the version of the Flutter SDK.</p>
<p>Flutter supports using shared packages contributed by other developers to the Flutter and Dart ecosystems. This allows quickly building an app without having to develop everything from scratch. so the pubspec. yaml file will be containing the records of all the dependencies used for the flutter project.</p>
<h3 id="sample-pubspec-yaml-file" tabindex="-1"><a class="header-anchor" href="#sample-pubspec-yaml-file" aria-hidden="true">#</a> Sample <code v-pre>pubspec.yaml</code> file</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>name: &lt;project name>
description: &lt;project description>

publish_to: 'none'

version: 1.0.0+0001

environment:
  sdk: ">=2.19.6"
  flutter: ">=3.7.11"

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here we need to have <RouterLink to="/vaahflutter/directory_structure/root/d_assets.html">assets</RouterLink> directory in project.</p>
</div></template>


