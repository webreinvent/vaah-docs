# analysis_option.yaml

[[toc]]

## What is this file about

The ruleset for the dart code analyzer. To configure the analyzer, have a look at the [official documentation](https://dart.dev/guides/language/analysis-options).

Place the analysis options file, analysis_options.yaml, at the root of the package, in the same directory as the pubspec file.

Here’s a sample analysis options file:
```
include: package:lints/recommended.yaml

analyzer:
  exclude: [build/**]
  language:
    strict-casts: true
    strict-raw-types: true

linter:
  rules:
    - cancel_subscriptions
```

::: danger Be careful while editing
YAML is sensitive to whitespace. Don’t use tabs in a YAML file, and use 2 spaces to denote each level of indentation.
:::