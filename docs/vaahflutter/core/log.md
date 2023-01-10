# Debug Logs

::: warning Dependencies

- [colorize: ^3.0.0](https://pub.dev/packages/colorize)

- Log uses EnvironmentConfig, So it depends on the env.dart file. 
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

For more details check [environments.md](./environments.md)
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