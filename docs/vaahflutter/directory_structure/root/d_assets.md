# Assets

[[toc]]

## What is this directory about

This directory is on the root level will contain all the static assets that are used in the application, for example, fonts, icons, logos, background images, demo videos, etc. It is very much recommended that we should have different directories for a different type of data for example images, fonts, icons, etc should have a different folder of their own so that it becomes easier to maintain and access them.

We recommend sub categorizing these folders as well. i.e.
```
project
│   
└─── assets
    │
    └─── fonts
    |   │   
    |   └─── roboto
    |   |   | ...
    |   └─── timesnewroman
    |   |   | ...
    |   | ...
    |
    └─── icons
    |   |  
    |   └─── core
    |   |   | ...
    |   └─── storerelated
    |   |   | ...
    |   | ...
    |
    └─── images
        |   
        └─── essentials
        |   | ...
        └─── logos
        |   | ...
        └─── backgrounds
        |   | ...
        └─── settings
        |   | ...
        | ...
```

To add assets in your flutter project, you'll need to add directory paths in [pubspec.yaml](./pubspec.yaml.md#sample-pubspecyaml-file)