# API 

::: warning Dependencies

- [dio: ^4.0.6](https://pub.dev/packages/dio)

- This panel uses EnvironmentConfig, thus depending on the env.dart file. It uses the base API URL from your EnviromentConfig.
:::

[[toc]]

## Change Base URL

To change the base URL change the variable in your [EnvironmentConfig](./environments).
```dart
'default': defaultConfig.copyWith(
    apiUrl: 'YOUR_API_URL',
),
```
The developer should not include the `/` at the end of the URL. e.g.
```dart
'default': defaultConfig.copyWith(
    apiUrl: 'https://api.webreinvent.com',
),
```

depending on `enableApiLogs` from [EnviromentConfig](./environments), `LogInterceptor` for dio can be enabled/ disabled.

## Initialize Api class

To use interceptors, Base Api Url, Cookie jar, etc, Api needs to be initialized first before use, so we initialize it using `Api.init()` in [BaseController](../app.md/#base-controller)

```dart
Api.init();
```

## Ajax method

- ajax method automatically converts objects from `snake_case To lowerCamelCase` when `Receiving the response`.

- ajax method automatically converts objects from `lowerCamelCase To snake_case` when `Sending the request`.

### Parameters

#### 1. URL
- Parameter name: url
- Required: yes
- Type: `String`
- Description: endpoint of a request
- Note: Start the URL with `/`, because our base URL doesn't contain `/` at the end, [check here](#change-base-url).
- Example:
```dart
Api.ajax(url: '/api/user');
```

#### 2. Callback
- Parameter name: callback
- Required: no
- Type: `Future<void> Function(dynamic data, Response<dynamic>? res)?`
- Description: callback function
- Note: returns a null value when an error occurs, otherwise returns the value for the `data` key and whole response.
- Example:
```dart{3}
Api.ajax(
    url: '/api/users',
    callback: (data, resp) async { Console.info('data', data); },
);
```

#### 3. Method
- Parameter name: method
- Required: no
- Type: `String`
- default value: `'get'`
- possible values are: `'get', 'post', 'put', 'patch', and 'delete'`
- Description: request type
- Example:
```dart{3}
Api.ajax(
    url: '/api/users/1',
    method: 'delete',
);
```

#### 4. Query
- Parameter name: query
- Required: no
- Type: `Map<String, dynamic>?`
- Description: query parameters
- Examples:
```dart{3}
Api.ajax(
    url: '/api/users/',
    query: { 'id': 1 },
);
```
```dart{3}
Api.ajax(
    url: '/api/users/',
    query: { 'minimum_age': 18, name: 'ABC' },
);
```

#### 5. Params
- Parameter name: params
- Required: no
- Type: `Map<String, dynamic>?`
- Description: params is data passed in the post, put, etc requests.
- Examples:
```dart{3}
Api.ajax(
    url: '/api/users',
    method: 'post',
    params: {
        'name': 'ABC',
        'age': 18,
        'hobbies': ['coding', 'playing']
    },
);
```
```dart{3}
Api.ajax(
    url: '/api/users/1',
    method: 'patch',
    params: {
        'name': 'new name',
        'age': 19,
    },
);
```

#### 6. Headers
- Parameter name: headers
- Required: no
- Type: `List<Map<String, String>>?`
- Description: custom headers passed in requests
- Example:
```dart{3-6}
Api.ajax(
    url: '/api/users?token=abc',
    headers: [
        {'Accept': 'application/json'},
        {'X-Requested-With': 'XMLHttpRequest'},
    ],
);
```

#### 7. customTimeoutLimit
- Parameter name: customTimeoutLimit
- Required: no
- Type: `int?`
- Description: timeout for request in milliseconds (if not specified in function call then will use the default value from env)
- Note: It is in milliseconds, so if you want to set a time limit of 10 sec you should pass 10*1000 in arguments.
- Example:
```dart
Api.ajax(url: '/api/users', customTimeoutLimit: 10 * 1000);
```

#### 8. Show Alert
- Parameter name: showAlert
- Required: no
- Type: `bool`
- Description: will show an alert on success or error if the parameter is set to true.
- Note: If set to true, then will check if toast and dialogue for success and error exist in the `REPLACE_ME.ext` file, if they don't exist then fallback alerts and toasts will be used.
- Example:
```dart
Api.ajax(url: '/api/users', showAlert: true);
```

#### 9. Alert Type
- Parameter name: alertType
- Required: no
- Type: `String`
- Default Value: 'dialogue'
- Possible values: 'toast' and 'dialog'
- Description: Depending on type will show toast or alert.
- Example:
```dart
Api.ajax(url: '/api/users', showAlert: true, alertType: 'toast');
```

#### 10. On Start Method
- Parameter name: onStart
- Required: no
- Type: `Future<void> Function()?`
- Description: will be called in starting (before sending request) when the ajax method is called.
- Example:
```dart
Api.ajax(
    url: '/api/users',
    onStart: () async {
        Console.log('Check if has admin permissions');
    },
);
```

#### 11. On Completed Method
- Parameter name: onCompleted
- Required: no
- Type: `Future<void> Function()?`
- Description: will be called when the ajax method is completed.
- Example:
```dart
Api.ajax(
    url: '/api/users',
    onCompleted: () async {
        Console.log('Check if response is empty?');
    },
);
```

#### 11. On Error Method
- Parameter name: onError
- Required: no
- Type: `Future<void> Function(dynamic error)?`
- Description: will be called when the ajax method hits an error.
- Example:
```dart
Api.ajax(
    url: '/api/users',
    onError: (dynamic err) async {
        Console.danger(err.toString());
    },
);
```

#### 12. On Finally Method
- Parameter name: onFinally
- Required: no
- Type: `Future<void> Function()?`
- Description: will be called finally when the ajax method is completed.
- Example:
```dart
Api.ajax(
    url: '/api/users',
    onFinally: () async {
        Console.danger('OnFinally method was called!');
    },
);

```