# Console Logs

::: warning Dependencies

- [colorize: ^3.0.0](https://pub.dev/packages/colorize)

- Log depends [EnvironmentConfig](../env.md). 
:::

[[toc]]

## Log types
Currently, our console logs are of 5 types.
1. log
2. info
3. success
4. warning
5. danger

Different types will print logs in different colors. the log will be in grey, info in blue, success in green, warning in yellow, and danger will be in red.

::: danger Note:
The log will check the below variable, if it's set to false then no log will be printed. So make sure your environment variable is set to true if you want to log events.

`EnvironmentConfig.enableConsoleLogs`

for more details check [environments.md](./environments.md)
:::

## Dependencies
```yaml
  colorize: ^3.0.0
```

## Use cases

::: tip use cases
- To see formatted (prettier) objects in the console easily readable by the human eye
- To easily differentiate between different kinds of events.
:::

## How to use

Step 1: Import console.dart file using the below command.

```dart
import 'vaahextendflutter/helpers/console.dart';
```

Step 2: Call static methods of the Console class to log the events.

```dart
Console.log("Message");
Console.info("Message");
Console.success("Message");
Console.warning("Message");
Console.danger("Message");
```

Output:

<img :src="$withBase('/images/flutter/components/log/log-type.png')" alt="Output">

To print data, as the second argument pass the data 
```dart{8}
Map<String, dynamic> data = {
  "first_key": "value",
  "second_key": [
    {"key": "value"},
    {"key": "updated_value"},
  ],
};
Console.success('data', data);
```

Output:

<img :src="$withBase('/images/flutter/components/log/prettier-log.png')" alt="Output">


`console.dart`
```dart
import 'dart:convert';

import 'package:colorize/colorize.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../../env.dart';

class Console {
  static void printChunks(Colorize text) {
    final RegExp pattern = RegExp('.{1,800}'); // 800 is the size of each chunk
    pattern.allMatches(text.toString()).forEach(
          (RegExpMatch match) => debugPrint(
            match.group(0),
          ),
        );
  }

  static void printLog(Colorize text) {
    if (!EnvironmentConfig.getEnvConfig().enableConsoleLogs) return;
    Console.printChunks(text);
  }

  static String _parseData(Object? data) {
    try {
      JsonEncoder encoder = const JsonEncoder.withIndent('  ');
      return encoder.convert(data).toString();
    } catch (err) {
      danger("Cannot parse the data, please check the type of data!");
      return '';
    }
  }

  static void log(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    Console.printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.white();
      Console.printLog(dataColor);
    }
  }

  static void info(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    txt.blue();
    Console.printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.blue();
      Console.printLog(dataColor);
    }
  }

  static void success(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    txt.green();
    Console.printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.green();
      Console.printLog(dataColor);
    }
  }

  static void warning(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    txt.yellow();
    Console.printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.yellow();
      Console.printLog(dataColor);
    }
  }

  static void danger(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    txt.red();
    Console.printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.red();
      Console.printLog(dataColor);
    }
  }
}
```