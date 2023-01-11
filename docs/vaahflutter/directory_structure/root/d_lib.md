# Lib

[[toc]]

## What is this directory about

All your app code will reside in the lib folder. Make sure to plan your code structure before starting to develop your app. Otherwise, it can get confusing quickly without proper organization.

This is the most important folder in the project, used to write most of the dart code. By default, the lib folder contains the main.dart file, which is the application’s entry point, in case of multiple environments lib can have multi main files.

In our repo you can see following files and directories in lib folder
```{20}
project
│   
└─── lib
    │
    └─── models
    |   | ...
    |
    └─── views
    |   | ...
    |
    └─── controllers
    |   | ...
    |
    └─── resources
    |   | ...
    |
    └─── routes
    |   | ...
    |
    └─── vaahextendflutter
    |   | ...
    |
    └───  app_config.dart
    |
    └───  main.dart
```

| **Directory name** | **Documentation link** | **Description** |
| --- | --- | --- |
| models | [check this](../lib/models) | This directory is project specific and contains models for the project |
| views | [check this](../lib/views) | This directory is also project specific and contains UI screens for the project |
| controllers | [check this](../lib/controllers) | This directory is also project specific and contains logic for handling actions |
| resources | [check this](../lib/resources) | This directory contains essential resoucrces for app (e.g. stores token locally when user sign in) |
| routes | [check this](../lib/routes/routes) | This directory contains route handler |
| **`vaahextendflutter`** | [check this](../vaahextendflutter) | `This is the most important directory. It contains all essential code needed to use Vaah Essentials` |