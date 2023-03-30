# API 

::: warning Dependencies

- [dio](https://pub.dev/packages/dio)

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

Depending on `enableApiLogs` from [EnviromentConfig](./environments), `LogInterceptor` for dio can be enabled/ disabled.

## Initialize Api class

To use interceptors, Base Api Url, Cookie jar, etc, Api needs to be initialized first before use, so we initialize it using `Api.init()` in [BaseController](../app.md/#base-controller)

```dart
Api.init();
```

## Ajax method

- Ajax method automatically converts objects from `snake_case To lowerCamelCase` when `Receiving the response`.

- Ajax method automatically converts objects from `lowerCamelCase To snake_case` when `Sending the request`.

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

Using inline function

```dart{10-17}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> signIn(String identifier, String password) async {
    Map<String, dynamic> user = await Api.ajax(
      url: apiEndPoint,
      method: 'post',
      params: {"identifier": identifier, "password": password},
      callback: {
        if (data == null) {
          showToast('Message');
        } else {
          rootAssetsController.user = data;
          rootAssetsController.apiToken = data['token'];
        }
      },
    );
    return;
  }
}

// Calling the signIn function
User.signIn('username', 'password');
```

Using reference

```dart{10,15-22}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> signIn(String identifier, String password) async {
    Map<String, dynamic> user = await Api.ajax(
      url: apiEndPoint,
      method: 'post',
      params: {"identifier": identifier, "password": password},
      callback: _signInAfter,
    );
    return;
  }

  static Future<void> _signInAfter(dynamic data, dynamic response) async {
    if (data == null) {
      showToast('Message');
    } else {
      rootAssetsController.user = data;
      rootAssetsController.apiToken = data['token'];
    }
  }
}

// Calling the signIn function
User.signIn('username', 'password');
```

#### 3. Method
- Parameter name: method
- Required: no
- Type: `String`
- default value: `'get'`
- possible values are: `'get', 'post', 'put', 'patch', and 'delete'`
- Description: request type
- Example:

```dart{7}
class User {
  static const String apiEndPoint = '/users';

  static Future<void> delete(String id) async {
    await Api.ajax(
      url: apiEndPoint,
      method: 'delete',
      params: {'id': id},
    );
  }
}

// Calling the deleteItem function
User.delete('id');
```

#### 4. Query
- Parameter name: query
- Required: no
- Type: `Map<String, dynamic>?`
- Description: query parameters
- Examples:


```dart{7}
class User {
  static const String apiEndPoint = '/users';

  static Future<List<User>> search(String name, int age) async {
    return await Api.ajax(
      url: '$apiEndPoint/search',
      query: {'name': name, 'age': age},
    );
  }
}

// Calling the search function
List<User> searchResults = await User.search('name', 18);
```

#### 5. Params
- Parameter name: params
- Required: no
- Type: `Map<String, dynamic>?`
- Description: params is data passed in the post, put, etc requests.
- Examples:

```dart{9}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> updateHobbies(User user) async {
    Map<String, dynamic> user = await Api.ajax(
      url: '$apiEndPoint/${user.id}',
      method: 'patch',
      params: {"hobbies": user.hobbies},
    );
    rootAssetsController.user = user;
  }
}

// Calling the updateHobbies function
User.updateHobbies(currentUser);
```

#### 6. Headers
- Parameter name: headers
- Required: no
- Type: `List<Map<String, String>>?`
- Description: custom headers passed in requests
- Example:

```dart{8-11}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> getCSRFToken() async {
    await Api.ajax(
      url: '$apiEndPoint/csrf-token',
      headers: [
        {'Accept': 'application/json'},
        {'X-Requested-With': 'XMLHttpRequest'},
      ],
    );
  }
}
```

#### 7. customTimeoutLimit
- Parameter name: customTimeoutLimit
- Required: no
- Type: `int?`
- Description: timeout for request in milliseconds (if not specified in function call then will use the default value from env)
- Note: It is in milliseconds, so if you want to set a time limit of 10 sec you should pass 10*1000 in arguments.
- Example:

```dart{8}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> analyzeShoppingPreferences(String id) async {
    await Api.ajax(
      url: '$apiEndPoint/analyze-shopping-preferences/$id',
      customTimeoutLimit: 20 * 1000,
    );
  }
}
```

#### 8. Show Alert
- Parameter name: showAlert
- Required: no
- Type: `bool`
- Description: will show an alert on success or error if the parameter is set to true.
- Note: If set to true, then will check if toast and dialogue for success and error exist in the `REPLACE_ME.ext` file, if they don't exist then fallback alerts and toasts will be used.
- Example:

```dart{10,15}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> signIn(String identifier, String password) async {
    Map<String, dynamic> user = await Api.ajax(
      url: apiEndPoint,
      method: 'post',
      params: {"identifier": identifier, "password": password},
      showAlert: true,
    );
  }
}

// Now when we call the function and the API sends error (lets say, 401 or something) then error alert will appear, when it sends successfull response then it will show success alert
```

TODO: Add screenshot

#### 9. Alert Type
- Parameter name: alertType
- Required: no
- Type: `String`
- Default Value: 'dialogue'
- Possible values: 'toast' and 'dialog'
- Description: Depending on type will show toast or alert.
- Example:

```dart{11,16}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> signIn(String identifier, String password) async {
    Map<String, dynamic> user = await Api.ajax(
      url: apiEndPoint,
      method: 'post',
      params: {"identifier": identifier, "password": password},
      showAlert: true,
      alertType: 'toast'
    );
  }
}

// Now when we call the function and the API sends error (lets say, 401 or something) then error toast will appear, when it sends successfull response then it will show success toast
```

TODO: Add screenshot

#### 10. On Start Method
- Parameter name: onStart
- Required: no
- Type: `Future<void> Function()?`
- Description: will be called in starting (before sending request) when the ajax method is called.
- Example:

```dart{9-13}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> signOut() async {
    await Api.ajax(
      url: '$apiEndPoint/logout',
      params: {"identifier": identifier},
      onStart: {
        if(rootAssetsController.user == null){
          showToast('Sign in first, no user found!');
        }
      }
    );
  }
}
```

#### 11. On Completed Method
- Parameter name: onCompleted
- Required: no
- Type: `Future<void> Function()?`
- Description: will be called when the ajax method is completed.
- Example:

```dart{9-11}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> signOut() async {
    await Api.ajax(
      url: '$apiEndPoint/logout',
      params: {"identifier": identifier},
      onCompleted: {
        goToHomePage();
      }
    );
  }
}
```

#### 11. On Error Method
- Parameter name: onError
- Required: no
- Type: `Future<void> Function(dynamic error)?`
- Description: will be called when the ajax method hits an error.
- Example:
```dart{9-11}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> purchaseService(String id) async {
    await Api.ajax(
      url: '$apiEndPoint/purchase',
      params: {"identifier": id},
      onError: {
        Console.danger('purchase-failed);
      }
    );
  }
}
```

#### 12. On Finally Method
- Parameter name: onFinally
- Required: no
- Type: `Future<void> Function()?`
- Description: will be called finally when the ajax method is completed.
- Example:

```dart{6,10,12-14}
class User {
  static const String apiEndPoint = '/users';
  static final RootAssetsController rootAssetsController = Get.find<RootAssetsController>();

  static Future<void> writePDF(String endpoint) async {
    // Logic to open the file;
    await Api.ajax(
      url: '$apiEndPoint/purchase',
      params: {
        "data": // read file data,
      },
      onFinally: {
        // Logic to close the file;
      }
    );
  }
}
```