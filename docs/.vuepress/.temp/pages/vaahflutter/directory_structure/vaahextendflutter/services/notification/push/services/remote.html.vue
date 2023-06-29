<template><div><h1 id="remote-notifications" tabindex="-1"><a class="header-anchor" href="#remote-notifications" aria-hidden="true">#</a> Remote Notifications</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li><a href="https://pub.dev/packages/onesignal_flutter" target="_blank" rel="noopener noreferrer">onesignal_flutter<ExternalLinkIcon/></a></li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#overview">Overview</router-link></li><li><router-link to="#onesignal-setup-and-env-variables">OneSignal Setup and Env Variables</router-link></li><li><router-link to="#usage">Usage</router-link><ul><li><router-link to="#initialization">Initialization</router-link></li><li><router-link to="#disposing">Disposing</router-link></li><li><router-link to="#asking-permission">Asking Permission</router-link></li><li><router-link to="#subscribing-and-unsubscribing">Subscribing and Unsubscribing</router-link></li></ul></li><li><router-link to="#pushing-notifications-targetting-specific-users">Pushing Notifications/ Targetting Specific Users</router-link><ul><li><router-link to="#real-world-example">Real World Example</router-link></li></ul></li><li><router-link to="#receive-notification">Receive Notification</router-link></li><li><router-link to="#send-notification">Send Notification</router-link></li><li><router-link to="#source-code">Source Code</router-link></li></ul></nav>
<div class="custom-container tip"><p class="custom-container-title">Note:</p>
<p>We use PushNotifications class and not RemoteNotifications class whenever needed in project becuse of <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/notification.html#best-practices-using-the-pushnotifications-class">the given reasons.</RouterLink></p>
</div>
<p>VaahFlutter uses OneSignal as push notification service. <a href="https://onesignal.com/" target="_blank" rel="noopener noreferrer">https://onesignal.com/<ExternalLinkIcon/></a></p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<ul>
<li>Direct communication with service (We are using this method)</li>
</ul>
<img width="400" :src="$withBase('/images/flutter/notifications/communication-types/dct1.png')">
<img width="400" :src="$withBase('/images/flutter/notifications/communication-types/dct2.png')">
<img width="400" :src="$withBase('/images/flutter/notifications/communication-types/dct3.png')">
<img width="400" :src="$withBase('/images/flutter/notifications/communication-types/dct4.png')">
<ul>
<li>Communication with service via backend</li>
</ul>
<img width="400" :src="$withBase('/images/flutter/notifications/communication-types/ict1.png')">
<img width="400" :src="$withBase('/images/flutter/notifications/communication-types/ict2.png')">
<img width="600" :src="$withBase('/images/flutter/notifications/communication-types/ict3.png')">
<img width="600" :src="$withBase('/images/flutter/notifications/communication-types/ict4.png')">
<ul>
<li>General flows</li>
</ul>
<img width="500" :src="$withBase('/images/flutter/notifications/general-flows/gf1.png')">
<img width="500" :src="$withBase('/images/flutter/notifications/general-flows/gf2.png')">
<img :src="$withBase('/images/flutter/notifications/general-flows/gf3.png')">
<img :src="$withBase('/images/flutter/notifications/general-flows/gf4.png')">
<img :src="$withBase('/images/flutter/notifications/general-flows/gf5.png')">
<img :src="$withBase('/images/flutter/notifications/general-flows/gf6.png')">
<h2 id="onesignal-setup-and-env-variables" tabindex="-1"><a class="header-anchor" href="#onesignal-setup-and-env-variables" aria-hidden="true">#</a> OneSignal Setup and Env Variables</h2>
<div class="custom-container tip"><p class="custom-container-title">Setup</p>
<ul>
<li>To do the setup on one signal you will need to setup one of the below thing.
<ul>
<li><RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/configurations/p12_certificate.html">.p12 Certificate</RouterLink></li>
<li>OR <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/configurations/p8_key.html">p8 Token-Based Connection to APNs</RouterLink></li>
</ul>
</li>
</ul>
</div>
<ul>
<li>
<p>Devs will have to do the setup their app on One Signal and then set env variable with the id. e.g. for your env set <code v-pre>oneSignalConfig: const OneSignalConfig(appId: &quot;0000aaaa-0000-0000-0000-aaaa0000aaaa&quot;),</code></p>
</li>
<li>
<p>Check <a href="https://documentation.onesignal.com/docs/flutter-sdk-setup" target="_blank" rel="noopener noreferrer">Flutter SDK Setup<ExternalLinkIcon/></a> on OneSignal.</p>
</li>
</ul>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization" aria-hidden="true">#</a> Initialization</h3>
<p>Initialize AppNotification in your base controller. So whenever the notification is tapped, it can be handled by AppNotification class. And data passed from the notification can be parsed and handled by app.</p>
<p>This will also handle assignment of player id to device. More details on player id is in <a href="#targetting-specific-users">this section.</a></p>
<h3 id="disposing" tabindex="-1"><a class="header-anchor" href="#disposing" aria-hidden="true">#</a> Disposing</h3>
<p>When you no longer need the remote notification service, make sure to dispose of the resources by calling the dispose method.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">RemoteNotifications</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="asking-permission" tabindex="-1"><a class="header-anchor" href="#asking-permission" aria-hidden="true">#</a> Asking Permission</h3>
<p>To ask the user for permission to display remote notifications, use the askPermission method.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>bool<span class="token operator">?</span> permissionGranted <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">RemoteNotifications</span><span class="token punctuation">.</span><span class="token function">askPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The method returns a boolean indicating whether the user granted permission for remote notifications. If the OneSignal configuration is not available, the method will return null.</p>
<h3 id="subscribing-and-unsubscribing" tabindex="-1"><a class="header-anchor" href="#subscribing-and-unsubscribing" aria-hidden="true">#</a> Subscribing and Unsubscribing</h3>
<p>To subscribe to remote notifications, call the subscribe method.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">await</span> <span class="token class-name">RemoteNotifications</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To unsubscribe from remote notifications, use the unsubscribe method.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">await</span> <span class="token class-name">RemoteNotifications</span><span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pushing-notifications-targetting-specific-users" tabindex="-1"><a class="header-anchor" href="#pushing-notifications-targetting-specific-users" aria-hidden="true">#</a> Pushing Notifications/ Targetting Specific Users</h2>
<ul>
<li>
<p>We can target notifications for specific user if we know the player id of that user.</p>
</li>
<li>
<p>When user successfully initializes the one signal, they get a player id. Everytime app starts, one signal checks if user has player id? if not, then it initializes one signal. If it's expired then also it reinitializes. And gives a new player id to device.</p>
</li>
<li>
<p>We can listen to the change of player id and we can send a request to API to register new player id with the current looged in user.</p>
</li>
</ul>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>_oneSignal<span class="token punctuation">.</span><span class="token function">setSubscriptionObserver</span><span class="token punctuation">(</span>_handleSubscriptionStateChanges<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In listner (_handleSubscriptionStateChanges) function we can write logic to register new player id for user (depending on if user is guest or not/ bifurcation mechanism of app).</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">_handleSubscriptionStateChanges</span><span class="token punctuation">(</span>
  <span class="token class-name">OSSubscriptionStateChanges</span> subscriptionState<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>subscriptionState<span class="token punctuation">.</span>to<span class="token punctuation">.</span>userId <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _storage<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>_userIdKey<span class="token punctuation">,</span> subscriptionState<span class="token punctuation">.</span>to<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _userIdStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>subscriptionState<span class="token punctuation">.</span>to<span class="token punctuation">.</span>userId<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Add your logic below to register player id for user</span>
    API<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'test'</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-literal"><span class="token string">'user_id'</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'current_user_id'</span></span><span class="token punctuation">,</span>
      <span class="token string-literal"><span class="token string">'player_id'</span></span><span class="token punctuation">:</span> subscriptionState<span class="token punctuation">.</span>to<span class="token punctuation">.</span>userId<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="real-world-example" tabindex="-1"><a class="header-anchor" href="#real-world-example" aria-hidden="true">#</a> Real World Example</h3>
<ul>
<li>
<p><code v-pre>User A</code> has Android device and <code v-pre>User B</code> has iOS device.</p>
</li>
<li>
<p>We have developed messaging app and it uses <code v-pre>VaahFlutter</code>, both users have installed this app.</p>
</li>
<li>
<p>When User A starts app they gets a player id and its stored using get_storage, but they are not logged in yet. So when they will log in, we check stored player id (in get_storage) and assign it to the User A, send request to API to register player id for that user, and let's say thier id is <code v-pre>user_a</code>. Same happens for User B, and let's assume their id is <code v-pre>user_b</code>.</p>
</li>
<li>
<p>Our app has a functionality using which one user can send message to other user. User A (user_a) sends message to User B (user_b). We can setup notification service in backend when one user sends message to another, backend sends notification to appropriate device (because backend knows who is sending message to whom and backend can get specific player id to target). Or if we want to handle it using app, we can post notification when user sends message, because app will also know who is sending message to whom, so it can fetch player id stored in database for targeted user.</p>
</li>
<li>
<p>Let's say one of the user's player id is expired and it's reassigned when user openes app, so as we have explained, we do have a <code v-pre>setSubscriptionObserver</code> where we can handle this case to store new player id for logged in user to database.</p>
</li>
<li>
<p>So again when user_a sends message to user_b, we will have updated player id in database and it will be handled correctly.</p>
</li>
<li>
<p>What if user doesn't grant permission/ turns off notifications? In that case OneSignal knows this and doesn't send notification.</p>
</li>
</ul>
<h2 id="receive-notification" tabindex="-1"><a class="header-anchor" href="#receive-notification" aria-hidden="true">#</a> Receive Notification</h2>
<p>Notification can have one parameter <code v-pre>payload</code> with <code v-pre>path</code>, <code v-pre>data</code>, and <code v-pre>auth</code> properties. So that all notifications have uniform format and vaahflutter can handle them.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"auth"</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Notifications Are handled by <code v-pre>setNotificationOpenedHandler</code>.</li>
</ul>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>_oneSignal<span class="token punctuation">.</span><span class="token function">setNotificationOpenedHandler</span><span class="token punctuation">(</span>_handleNotification<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Developer can do the changes in below function to handle notifications differently.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">_handleNotification</span><span class="token punctuation">(</span><span class="token class-name">OSNotificationOpenedResult</span> openedResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Notification Opened'</span></span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">"actionId"</span></span><span class="token punctuation">:</span> openedResult<span class="token punctuation">.</span>action<span class="token operator">?</span><span class="token punctuation">.</span>actionId<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"title"</span></span><span class="token punctuation">:</span> openedResult<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"body"</span></span><span class="token punctuation">:</span> openedResult<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>body<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"additionalData"</span></span><span class="token punctuation">:</span> openedResult<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>additionalData<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"timestamp"</span></span><span class="token punctuation">:</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>millisecondsSinceEpoch<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token keyword">dynamic</span> payload <span class="token operator">=</span> openedResult<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>additionalData<span class="token operator">?</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'payload'</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>payload <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Get</span><span class="token punctuation">.</span><span class="token function">offAllNamed</span><span class="token punctuation">(</span>
      payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      arguments<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
        <span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">:</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">:</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="send-notification" tabindex="-1"><a class="header-anchor" href="#send-notification" aria-hidden="true">#</a> Send Notification</h2>
<ul>
<li>
<p>To send notifications from App developer will ave to call AppNotification.post method.</p>
</li>
<li>
<p>Where you have to pass <code v-pre>playerIds</code> and <code v-pre>content</code> parameters compulsorily.</p>
</li>
<li>
<p>There are other optional parameters which you can pass: <code v-pre>heading</code>, <code v-pre>payloadPath</code>, <code v-pre>payloadData</code>, <code v-pre>payloadAuth</code>, <code v-pre>buttons</code>, and <code v-pre>imageURL</code>.</p>
</li>
<li>
<p>From App you can not target all users, if you want to do that you'll have to get all player ids and then target them.</p>
</li>
</ul>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppNotification</span><span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>playerIds<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'id_a'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'id_b'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span> content<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Hello World!'</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:get/get.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:get_storage/get_storage.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:onesignal_flutter/onesignal_flutter.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./logging_library/logging_library.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../env.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">String</span> _userIdKey <span class="token operator">=</span> <span class="token string-literal"><span class="token string">'notification_user_id'</span></span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AppNotification</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">OneSignal</span> _oneSignal <span class="token operator">=</span> <span class="token class-name">OneSignal</span><span class="token punctuation">.</span>shared<span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">EnvironmentConfig</span> _env <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">GetStorage</span> _storage <span class="token operator">=</span> <span class="token class-name">GetStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> _userIdStreamController <span class="token operator">=</span>
      <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userIdStream <span class="token operator">=</span> _userIdStreamController<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token keyword">get</span> userId <span class="token operator">=</span><span class="token operator">></span> _storage<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>_userIdKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_env<span class="token punctuation">.</span>oneSignalConfig <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_storage<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>_userIdKey<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _userIdStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>_storage<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>_userIdKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    _oneSignal<span class="token punctuation">.</span><span class="token function">setSubscriptionObserver</span><span class="token punctuation">(</span>_handleSubscriptionStateChanges<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> _oneSignal<span class="token punctuation">.</span><span class="token function">setLogLevel</span><span class="token punctuation">(</span><span class="token class-name">OSLogLevel</span><span class="token punctuation">.</span>verbose<span class="token punctuation">,</span> <span class="token class-name">OSLogLevel</span><span class="token punctuation">.</span>none<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> _oneSignal<span class="token punctuation">.</span><span class="token function">setAppId</span><span class="token punctuation">(</span>_env<span class="token punctuation">.</span>oneSignalConfig<span class="token operator">!</span><span class="token punctuation">.</span>appId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> _oneSignal<span class="token punctuation">.</span><span class="token function">promptUserForPushNotificationPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _oneSignal<span class="token punctuation">.</span><span class="token function">setNotificationOpenedHandler</span><span class="token punctuation">(</span>_handleNotification<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _userIdStreamController<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _oneSignal<span class="token punctuation">.</span><span class="token function">disablePush</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> playerIds<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> heading<span class="token punctuation">,</span>
    required <span class="token class-name">String</span> content<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> payloadPath<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> payloadData<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> payloadAuth<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OSActionButton</span><span class="token punctuation">></span></span><span class="token operator">?</span> buttons<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> imageURL<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>playerIds<span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> _oneSignal<span class="token punctuation">.</span><span class="token function">postNotification</span><span class="token punctuation">(</span>
      <span class="token class-name">OSCreateNotification</span><span class="token punctuation">(</span>
        playerIds<span class="token punctuation">:</span> playerIds<span class="token punctuation">,</span>
        heading<span class="token punctuation">:</span> heading<span class="token punctuation">,</span>
        content<span class="token punctuation">:</span> content<span class="token punctuation">,</span>
        additionalData<span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token string-literal"><span class="token string">'payload'</span></span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">:</span> payloadPath<span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">:</span> payloadData<span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">:</span> payloadAuth<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        buttons<span class="token punctuation">:</span> buttons<span class="token punctuation">,</span>
        bigPicture<span class="token punctuation">:</span> imageURL<span class="token punctuation">,</span>
        iosAttachments<span class="token punctuation">:</span> imageURL <span class="token operator">==</span> <span class="token keyword">null</span>
            <span class="token operator">?</span> <span class="token keyword">null</span>
            <span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string-literal"><span class="token string">'image'</span></span><span class="token punctuation">:</span> imageURL<span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">_handleSubscriptionStateChanges</span><span class="token punctuation">(</span>
    <span class="token class-name">OSSubscriptionStateChanges</span> subscriptionState<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>subscriptionState<span class="token punctuation">.</span>to<span class="token punctuation">.</span>userId <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> _storage<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>_userIdKey<span class="token punctuation">,</span> subscriptionState<span class="token punctuation">.</span>to<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      _userIdStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>subscriptionState<span class="token punctuation">.</span>to<span class="token punctuation">.</span>userId<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">_handleNotification</span><span class="token punctuation">(</span><span class="token class-name">OSNotificationOpenedResult</span> openedResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Notification Opened'</span></span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token string-literal"><span class="token string">"actionId"</span></span><span class="token punctuation">:</span> openedResult<span class="token punctuation">.</span>action<span class="token operator">?</span><span class="token punctuation">.</span>actionId<span class="token punctuation">,</span>
      <span class="token string-literal"><span class="token string">"title"</span></span><span class="token punctuation">:</span> openedResult<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token string-literal"><span class="token string">"body"</span></span><span class="token punctuation">:</span> openedResult<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>body<span class="token punctuation">,</span>
      <span class="token string-literal"><span class="token string">"additionalData"</span></span><span class="token punctuation">:</span> openedResult<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>additionalData<span class="token punctuation">,</span>
      <span class="token string-literal"><span class="token string">"timestamp"</span></span><span class="token punctuation">:</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>millisecondsSinceEpoch<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token keyword">dynamic</span> payload <span class="token operator">=</span> openedResult<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>additionalData<span class="token operator">?</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'payload'</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>payload <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Get</span><span class="token punctuation">.</span><span class="token function">offAllNamed</span><span class="token punctuation">(</span>
        payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        arguments<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
          <span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">:</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">:</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


