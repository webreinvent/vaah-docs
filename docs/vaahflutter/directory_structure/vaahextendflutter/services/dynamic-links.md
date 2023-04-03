# Dynamic Links 

::: warning Dependencies
- [firebase_core](https://pub.dev/packages/firebase_core)
- [firebase_dynamic_links](https://pub.dev/packages/firebase_dynamic_links)
:::

[[toc]]

## Use Cases

- When you want users to install app instead of them using website.
- When you want some kind of redirection from website to app.

## Scenerios

- App is installed but we don't want any redirection from website.
- App is installed and we want redirections from website.
- App is not installed and we want to force users to download it.
- App is not installed and we let users to see content on website.

## General Concept

- Create a dynamic link on firebase.
- Let's say for `/test-path` you want to redirect users to app if they are using phone.
- So for path `/test-path` in website we will check if user has opened the page in phone or other devices.
  - If it's not phone, we just show content of website.
  - If it's phone, we trigger redirect to dynamic link we got from firebase.
- When user hits dynamic link, We can configure what we want it to do.
  - if Installed open app and pass the link and data.
  - if App not installed
    - Open app/ play store page for your app.
    - Or redirect to somewhere.
- We write logic to handle dynamic link and data in app.

## How to use?

::: warning Dynamic Links
- VaahExtendFlutter makes it so much easier to integrate dynamic links we will show you the process now.
:::

### Setup Firebase For Your Project (if you haven't done that yet)

- Install [Firebase CLI](https://firebase.google.com/docs/cli#setup_update_cli) in your system. And Log in to your account.

- Install the [FlutterFire CLI](https://firebase.google.com/docs/flutter/setup#install-cli-tools)

- run `flutterfire configure` in your project -> then select create new project/ configure old project

- Check the steps in the video: [Configure Firebase App](https://youtu.be/kESR99dkRS8)

- Pass parameters to connect firebase app with vaahextendflutter and handle dynamic links. This will intialize the firebase app everytime app is started. Check the steps in the video: [Integrating Firebase With VaahFlutter](https://youtu.be/ooEHkxy7LmA)

### Enable Dynamic Links In Firebase

- Go to Dynamic Links section

- Press `Get Started`

- Enter the domain

- And done

- Check the steps in the video: [Enable Dynamic Links](https://youtu.be/HTshF3KSvyI)

### Things you need to know

- Short dynamic links does not support custom parameters/ passing custom data.
- Long dynamic links does support it but there are some rules you follow to make it work perfectly.
- In long dynamic links you need to encode deep link which you're passing. (On the website part, Stay with us and this point will make sense.)

::: danger Team ID
For iOS; Team ID in firebase (iOS App) is mandetory and it can't be fake - and using that you will have to sign your app, where for development purpose fake app id will work.
:::

- Short links
  - `https://yourapp.page.link/custom` ✅ works
  
  - `https://yourapp.page.link/custom?payload={}` ❌ parameters won't be passed to app

- Long links

  - `https://yourapp.page.link/?link=https://website.com/custom?payload={}&apn=com.example.app&ibi=com.example.app&isi=123456789` ✅ works, where link should be encoded (for better reading we did not encoded it in documentation)

  - where `https://yourapp.page.link/` is main dynamic link. And you pass deep link after `?link=` which is passed in app and should be handled by app e.g. `https://website.com/custom?payload={}` (should be encoded tho). You pass android package name with `&apn=com.example.app` and iOS bundle identifier `&ibi=com.example.app`. You pass App Store ID using `&isi=123456789`.

  - If app isn't installed and you want user to redirect to some link you pass parameters link; for android fallback link as `&afl=https://vaahflutter.ml` for iOS fallback link as `&ifl=https://vaahflutter.ml`

- In your website

	- Do not redirect links to the same link from where it's coming; when user is not using mobile devices.

	- Example of bad implementation: for `website.com/custom` you've applied redirect logic for that path (without checking if user is using mobile or not). Which will redirect to `dynamic link`. 
  
  - So when user opens `website.com/custom` -> it redirects to `dynamic link` -> as user is not on mobile device they are redirected to `website.com/custom` again. -> again it redirects to  `dynamic link` -> ...
  
  - So when this link is opened in browser in device other than Android and iOS, the link resolves it to the same link from where it came (website.com/custom). You can see, how it becomes infinite loop.

### Create A Link In Firebase Dynamic Links

We suggest you create one single link to handle everthing. But you pass different parameters with it. Stay with us and it will make sense.

- In the Dynamic Links section, click on `New Dynamic Link`. And configure it like shown in video.

- Check the steps in the video: [Create Dynamic Link](https://youtu.be/jSBiRazPn5Q)

### Add Intent Filters In Android Menifest

```xml
<intent-filter>
    <action android:name="android.intent.action.VIEW"/>
    <category android:name="android.intent.category.DEFAULT"/>
    <category android:name="android.intent.category.BROWSABLE"/>
    <data android:host="name.page.link" android:scheme="https"/>
</intent-filter>
```

- Check the steps in the video: [Intent Filter](https://youtu.be/MzRbDBhyQa4)

### Add Associated Domain In iOS Project

path: `ios/Runner/Runner.entitlements`

```xml
<dict>
	<key>com.apple.developer.associated-domains</key>
	<array>
		<string>applinks:YOUR_FIREBASE_APP_DYNAMIC_LINK_PREFIX.page.link</string>
	</array>
</dict>
</plist>
```

- Check the steps in the video: [Associated Domain](https://youtu.be/OtXhfFPDWyE)

### On Website Write Code For Redirection

- In app, vaah flutter can handle query parameter `payload with below properties`

```js
payload = {
  "path": null,
  "data": null,
  "auth": null
};
```

- In Website we check if device is mobile or not.

- If Mobile

  - we create one query parameter payload like shown above, add it to the end point. e.g. `https://website.com/custom?payload={"path":null,"data":null,"auth":null}`
  
  - And then encode that link. e.g. `https%3A%2F%2Fwebsite.com%2Fcustom%3Fpayload%3D%7B%22path%22%3Anull%2C%22data%22%3Anull%2C%22auth%22%3Anull%7D`

  - We put this encoded part in `link` parameter of `dynamic link` we created and redirect user to that link. e.g. `https://yourapp.page.link/?link=https%3A%2F%2Fwebsite.com%2Fcustom%3Fpayload%3D%7B%22path%22%3Anull%2C%22data%22%3Anull%2C%22auth%22%3Anull%7D&apn=com.example.app&ibi=com.example.app&isi=123456789`

- If not Mobile: we show website content.

- Demo: Node JS code to handle path `/custom` on website

```js
router.get('/custom', function (req, res, next) {
  if (devicetype.isDevicePhone(req.headers['user-agent'])) {
    const endPoint = 'https://website.com/custom';
    const payload = {
      "path": null,
      "data": null,
      "auth": null
    };
    const parameters = `payload=${JSON.stringify(payload)}`;
    const encoded = encodeURIComponent(`${endPoint}?${parameters}`);

    res.redirect(`https://yourapp.page.link/?link=${encoded}&apn=com.example.app&ibi=com.example.app&isi=123456789`);
  }
  else {
    res.render('custom', { page: 'Custom', menuId: 'custom' });
  }
});
```

Function to check device type
```js
const isDevicePhone = (agent) => {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0, 4))) {
        return true;
    }
    return false;
}

exports.isDevicePhone = isDevicePhone;
```

- Example website is here: [node-website](https://github.com/we-prajapati-c001/node-website)

### Handle Dynamic Link In App

- Initialize firebase with the app. if setup is not done [check this](#setup-firebase-for-your-project-if-you-havent-done-that-yet), and pass FirebaseConfig parameter to base controller, if you're using not whole code from project then initialize and configure firebase app by your self.

- Initialize dynamic links from VaahExtendFlutter Service to catch initial links (when app is close), and subscribe to the links which are coming (when app is open). If you're using whole code from project you don't have to do anything expect initializing base controller.

```dart{6-11}
class BaseController extends GetxController {
  Future<void> init({
    FirebaseOptions? firebaseOptions,
    required Widget app,
  }) async {
    if (firebaseOptions != null) {
      await Firebase.initializeApp(
        options: firebaseOptions,
      );
      DynamicLinks.init();
    }
...
```

- VaahExtendFlutter Service -> Dynamic Links will handle links with `payload` data. example of payload

```js
const payload = {
  "path": null,
  "data": null,
  "auth": null
};
```

- Auth is used to pass data related to auth. e.g. x-csrf token, barer token, etc. Thus it depends on project and developer can configure how to handle auth parameter in app by doing some changes in `dynamic_links.dart` file. for now auth is passed to the route along with data so dev can handle it there for specific routes.

- If path is not null then we redirect user to that route with the data. Routes will have to handle data by themselves.

## Source Code

```dart
import 'dart:async';
import 'dart:convert';

import 'package:firebase_dynamic_links/firebase_dynamic_links.dart';
import 'package:get/get.dart';

import './logging_library/logging_library.dart';

abstract class DynamicLinks {
  static void init() async {
    // handle initial dynamic link
    final getInitialLink = await _firebaseDynamicLinks.getInitialLink();
    if (getInitialLink != null) {
      _handleLink(getInitialLink);
    }

    // listen/ subscribe to the links which comes later and handle them
    _firebaseDynamicLinks.onLink
        .listen(
          _handleLink,
        )
        .onError(
          (error, stackTrace) => Log.exception(error, stackTrace: stackTrace),
        );
  }

  static final FirebaseDynamicLinks _firebaseDynamicLinks = FirebaseDynamicLinks.instance;
  static final StreamController<PendingDynamicLinkData> _dynamicLinksStreamController =
      StreamController<PendingDynamicLinkData>.broadcast();
  static final Stream<PendingDynamicLinkData> dynamicLinksStream =
      _dynamicLinksStreamController.stream;

  static Future<ShortDynamicLink?> createLink({
    required String? path,
    required dynamic data,
    required dynamic auth,
  }) async {
    try {
      final String parameters = jsonEncode({"path": path, "data": data, "auth": auth});
      return await _firebaseDynamicLinks.buildShortLink(
        DynamicLinkParameters(
          link: Uri.parse("https://vaahflutter.ml?payload=$parameters"),
          uriPrefix: "https://vaahfluttertest.page.link",
          androidParameters: const AndroidParameters(packageName: "com.webreinvent.vaahflutter"),
          iosParameters: const IOSParameters(bundleId: "com.webreinvent.vaahflutter"),
        ),
        shortLinkType: ShortDynamicLinkType.unguessable,
      );
    } catch (error, stackTrace) {
      Log.exception(error, stackTrace: stackTrace, hint: "Error creating dynamic link!");
      return null;
    }
  }

  static Future<void> _handleLink(PendingDynamicLinkData linkData) async {
    try {
      _dynamicLinksStreamController.add(linkData);
      final dynamic payload = jsonDecode(linkData.link.queryParameters['payload'].toString());
      if (payload != null && payload['path'] != null) {
        Get.offAllNamed(
          payload['path'],
          arguments: <String, dynamic>{
            'data': payload['data'],
            'auth': payload['auth'],
          },
        );
      }
    } catch (error, stackTrace) {
      Log.exception(
        error,
        stackTrace: stackTrace,
        hint: "Error handling dynamic link! ${linkData.asMap()}",
      );
    }
  }
}
```