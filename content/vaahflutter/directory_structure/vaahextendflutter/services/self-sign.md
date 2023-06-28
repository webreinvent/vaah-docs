# Self-Sign 

::: warning Dependencies
- dart:io
:::

[[toc]]

## When to use?

If you are not using ssl secured api end-point and you want to fake that you are using ssl by modifying certificate.

## How to use?

import self-sign.dart in your main file.

```dart
import 'package:/vaahextendflutter/services/api_self_signed.dart';
```

override http client global before run app

```dart
void main() {
  HttpOverrides.global = SelfSignedHttps();
  runApp(MyApp());
}
```

## Source code

```dart
import 'dart:io';

/// How to use: override http client global before run app
/// void main() {
///   HttpOverrides.global = SelfSignedHttps();
///   runApp(MyApp());
/// }

class SelfSignedHttps extends HttpOverrides {
  @override
  HttpClient createHttpClient(SecurityContext? context) {
    final HttpClient client = super.createHttpClient(context);
    client.badCertificateCallback = (
      X509Certificate cert,
      String host,
      int port,
    ) =>
        true;
    return client;
  }
}
```