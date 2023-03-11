# Console Logs

::: warning Dependencies

- [colorize: ^3.0.0](https://pub.dev/packages/colorize)

:::

::: danger Developer Guide

- Developer should never use this directly, use [Logging Library](../logging_library.md) instead.

:::


[[toc]]

## Log types
Currently, our console logs are of 5 types.
1. log
2. info
3. success
4. warning
5. danger
6. transaction

Different types will print logs in different colors. the log will be in grey, info in blue, success in green, warning in yellow, and danger will be in red.

## Dependencies
```yaml
  colorize: ^3.0.0
```

## Use cases

::: tip use cases
- To log transaction time
- To see formatted (prettier) objects in the console easily readable by the human eye
- To easily differentiate between different kinds of events.
:::

## Internal use (in [logging_library.dart](../logging_library.md) only)

Call static methods of the Console class to log the events.

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

```dart
Console.logTransaction(
  execute: () async => {},
  details: const TransactionDetails(
    name: 'idle transaction',
    operation: 'idle',
  ),
);
```

```dart
Console.logTransaction(
  execute: Api.ajax('api.vaah.dev'),
  details: const TransactionDetails(
    name: 'get root route of vaah api',
    operation: 'read',
  ),
);
```

`console.dart`
```dart
import 'dart:convert';

import 'package:colorize/colorize.dart';
import 'package:flutter/material.dart';

import '../models/log.dart';

class Console {
  static void _printChunks(Colorize text) {
    final RegExp pattern = RegExp('.{1,800}'); // 800 is the size of each chunk
    pattern.allMatches(text.toString()).forEach(
          (RegExpMatch match) => debugPrint(
            match.group(0),
          ),
        );
  }

  static void _printLog(Colorize text) {
    _printChunks(text);
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
    _printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.white();
      _printLog(dataColor);
    }
  }

  static void info(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    txt.blue();
    _printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.blue();
      _printLog(dataColor);
    }
  }

  static void success(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    txt.green();
    _printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.green();
      _printLog(dataColor);
    }
  }

  static void warning(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    txt.yellow();
    _printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.yellow();
      _printLog(dataColor);
    }
  }

  static void danger(String text, [Object? data]) {
    Colorize txt = Colorize(text);
    txt.red();
    _printLog(txt);

    if (data != null) {
      Colorize dataColor = Colorize(_parseData(data));
      dataColor.red();
      _printLog(dataColor);
    }
  }

  static logTransaction({
    required Function execute,
    required TransactionDetails details,
  }) async {
    final DateTime start = DateTime.now();
    await execute();
    final DateTime end = DateTime.now();
    final diff = end.difference(start);
    success('------------- execution details -------------');
    info('Transaction Name: ${details.name} | Operation: ${details.operation}');
    if (null != details.description && details.description!.isNotEmpty) {
      info('Description: ${details.description}');
    }
    info('Execution time in milliseconds: ${diff.inMilliseconds}');
  }
}
```