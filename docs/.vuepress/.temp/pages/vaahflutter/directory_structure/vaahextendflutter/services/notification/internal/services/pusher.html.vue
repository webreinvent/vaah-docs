<template><div><h1 id="pusher-service" tabindex="-1"><a class="header-anchor" href="#pusher-service" aria-hidden="true">#</a> Pusher service</h1>
<nav class="table-of-contents"><ul><li><router-link to="#pusher-advantages">Pusher Advantages</router-link></li><li><router-link to="#pusher-limitations">Pusher Limitations</router-link></li><li><router-link to="#integration">Integration</router-link></li><li><router-link to="#source-code">Source Code</router-link></li><li><router-link to="#onauthorizer-and-backend-sample-code">onAuthorizer and Backend sample code</router-link><ul><li><router-link to="#_1-client-side-configuration-dart-flutter">1. Client-side Configuration (Dart/Flutter):</router-link></li><li><router-link to="#_2-backend-configuration">2. Backend Configuration</router-link></li></ul></li></ul></nav>
<p>The Pusher service file provides the implementation of internal notifications using the Pusher service. Pusher enables real-time communication and facilitates the establishment of private channels for users to interact with each other and receive notifications in real time. It's important to note that in order to use Pusher, developers need to set up an account and configure Pusher on pusher.com.</p>
<h2 id="pusher-advantages" tabindex="-1"><a class="header-anchor" href="#pusher-advantages" aria-hidden="true">#</a> Pusher Advantages</h2>
<ul>
<li>Real-time communication: Pusher allows users to establish private channels and enables real-time communication between users and the backend. This can be utilized for various purposes, such as user-to-user communication and delivering notifications instantly.</li>
</ul>
<h2 id="pusher-limitations" tabindex="-1"><a class="header-anchor" href="#pusher-limitations" aria-hidden="true">#</a> Pusher Limitations</h2>
<ul>
<li>
<p>Inability to fetch old events: One limitation of Pusher is that it does not have the ability to fetch old events. It can only listen to live events triggered after establishing a connection. This means that if a user is offline during an event trigger, they won't receive the event when they come back online.</p>
</li>
<li>
<p>Handling historical data: Storing historical data locally can be a challenge when using Pusher, especially in scenarios where users uninstall and reinstall the app or use the app on multiple devices. If historical data is required, it is recommended to implement a backend solution to store events in a cloud database prior to sending them via Pusher.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Information and guidance on Pusher</p>
<p>For further information and guidance on Pusher, refer to the official Pusher documentation and support resources provided by Pusher at <a href="https://support.pusher.com/hc/en-us/articles/4412239519249" target="_blank" rel="noopener noreferrer">https://support.pusher.com/hc/en-us/articles/4412239519249<ExternalLinkIcon/></a>.</p>
</div>
<ul>
<li>
<p>Pusher can only trigger events on public channels from the client side. It cannot trigger events on private channels directly.</p>
</li>
<li>
<p>To send events on private channels, you need to establish a private channel and configure the necessary authorization process.</p>
</li>
<li>
<p>When using a private channel, you need to set up an onAuthorizer function and a corresponding backend implementation.</p>
</li>
<li>
<p>The onAuthorizer function sends a request to your backend server to obtain an authorization object, which will be used by Pusher to authenticate the client's access to the private channel.</p>
</li>
<li>
<p>By using the onAuthorizer function and backend implementation, you can ensure that only authorized clients can subscribe to and trigger events on private channels. This adds an extra layer of security and control over the communication.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Please note that setting up the authorization process and implementing the backend functionality are essential steps when using private channels with Pusher. Make sure to configure the onAuthorizer function and handle the backend logic accordingly to enable secure and authorized communication on private channels.</p>
<p>Please refere <code v-pre>onAuthorizer</code> and <code v-pre>Backend</code> sample code <a href="#onauthorizer-and-backend-sample-code">here</a>.</p>
</div>
<h2 id="integration" tabindex="-1"><a class="header-anchor" href="#integration" aria-hidden="true">#</a> Integration</h2>
<p>Developers integrating Pusher-based internal notifications should follow these steps:</p>
<ol>
<li>Sign up for a Pusher account and configure Pusher on pusher.com.</li>
<li>Verify the necessary logic to establish a connection with Pusher and handle user authentication and authorization for private channels.</li>
<li>Ensure that you handle the management of private channels, event triggers, and event subscriptions within your main internal notifications file, while considering the limitations and challenges mentioned above.</li>
<li>You might want to setup the user id in private channel to target specific user. When subscribing for perticular user; user id is needed so for that, logic should be implemented by developer in the <code v-pre>init()</code> method of this class to assign user id in the service, the logic may vary depending on the project. This user ID will be used to establish private channels for the user.</li>
<li>Obtain the Pusher configuration details, such as the API key and cluster, and put it in your environment configuration.</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">Note:</p>
<p>Remember to adapt and modify the provided Pusher service file according to your specific application requirements and architectural design.</p>
<p>Please note that the Pusher service file provided here serves as a part of the overall internal notifications system. It should be used within the context of the main internal notifications file, which acts as a central point for integrating different notification services.</p>
</div>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:pusher_channels_flutter/pusher_channels_flutter.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./base_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../../../env.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../../logging_library/logging_library.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../models/notification.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">InternalNotificationsWithPusher</span> <span class="token keyword">implements</span> <span class="token class-name">InternalNotificationsService</span> <span class="token punctuation">{</span>
  late <span class="token keyword">final</span> <span class="token class-name">PusherChannelsFlutter</span> _pusher<span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span> _pendingNotificationsCountStreamController <span class="token operator">=</span>
      <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  late <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span> pendingNotificationsCountStream<span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span> _notificationsStreamController <span class="token operator">=</span>
      <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  late <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span> notificationsStream<span class="token punctuation">;</span>

  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> _notifications <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> <span class="token keyword">get</span> notifications <span class="token operator">=</span><span class="token operator">></span> _notifications<span class="token punctuation">;</span>

  late <span class="token keyword">final</span> <span class="token class-name">String</span> userId<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    pendingNotificationsCountStream <span class="token operator">=</span> _pendingNotificationsCountStreamController<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>
    notificationsStream <span class="token operator">=</span> _notificationsStreamController<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>

    <span class="token comment">// Write your logic here to get user id</span>
    userId <span class="token operator">=</span> <span class="token string-literal"><span class="token string">'userId'</span></span><span class="token punctuation">;</span>

    <span class="token keyword">final</span> <span class="token class-name">EnvironmentConfig</span> environmentConfig <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>environmentConfig<span class="token punctuation">.</span>pusherConfig <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    _pusher <span class="token operator">=</span> <span class="token class-name">PusherChannelsFlutter</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> _pusher<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>
      apiKey<span class="token punctuation">:</span> environmentConfig<span class="token punctuation">.</span>pusherConfig<span class="token operator">!</span><span class="token punctuation">.</span>apiKey<span class="token punctuation">,</span>
      cluster<span class="token punctuation">:</span> environmentConfig<span class="token punctuation">.</span>pusherConfig<span class="token operator">!</span><span class="token punctuation">.</span>cluster<span class="token punctuation">,</span>
      onAuthorizer<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">String</span> channelName<span class="token punctuation">,</span> <span class="token class-name">String</span> socketId<span class="token punctuation">,</span> <span class="token keyword">dynamic</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// return {"shared_secret": "11518af14b1d4acbd3b9"};</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      onEvent<span class="token punctuation">:</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>data <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">_notificationsUpdated</span><span class="token punctuation">(</span><span class="token punctuation">[</span>event<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> _pusher<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>channelName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'private-</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">userId</span></span><span class="token string">'</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> _pusher<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Connect with cluster</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userIds<span class="token punctuation">,</span> <span class="token class-name">InternalNotification</span> notification<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> id <span class="token keyword">in</span> userIds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> _pusher<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>
        <span class="token class-name">PusherEvent</span><span class="token punctuation">(</span>
          channelName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'private-</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">id</span></span><span class="token string">'</span></span><span class="token punctuation">,</span>
          eventName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Internal Notification'</span></span><span class="token punctuation">,</span>
          data<span class="token punctuation">:</span> notification<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">_notificationsUpdated</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span><span class="token punctuation">></span></span> notifications<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    int count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> updatedNotifications <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> jsonNotification <span class="token keyword">in</span> notifications<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">InternalNotification</span> notification <span class="token operator">=</span> <span class="token class-name">InternalNotification</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>jsonNotification<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>notification<span class="token punctuation">.</span>opened<span class="token punctuation">)</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
      updatedNotifications<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>notification<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    _pendingNotificationsCountStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _notificationsStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>updatedNotifications<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _notifications <span class="token operator">=</span> updatedNotifications<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onauthorizer-and-backend-sample-code" tabindex="-1"><a class="header-anchor" href="#onauthorizer-and-backend-sample-code" aria-hidden="true">#</a> onAuthorizer and Backend sample code</h2>
<h3 id="_1-client-side-configuration-dart-flutter" tabindex="-1"><a class="header-anchor" href="#_1-client-side-configuration-dart-flutter" aria-hidden="true">#</a> 1. Client-side Configuration (Dart/Flutter):</h3>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>_pusher <span class="token operator">=</span> <span class="token class-name">PusherChannelsFlutter</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> _pusher<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>
  <span class="token comment">// Rest of your Pusher configuration...</span>
  onAuthorizer<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">String</span> channelName<span class="token punctuation">,</span> <span class="token class-name">String</span> socketId<span class="token punctuation">,</span> <span class="token keyword">dynamic</span> options<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> response <span class="token operator">=</span> <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
      <span class="token string-literal"><span class="token string">'https://your-backend-server.com/pusher/authorize'</span></span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string-literal"><span class="token string">'channelName'</span></span><span class="token punctuation">:</span> channelName<span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">'socketId'</span></span><span class="token punctuation">:</span> socketId<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">jsonDecode</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-backend-configuration" tabindex="-1"><a class="header-anchor" href="#_2-backend-configuration" aria-hidden="true">#</a> 2. Backend Configuration</h3>
<div class="custom-container tip"><p class="custom-container-title">note</p>
<p>Assuming you have an Express server set up, you'll need to create a route that handles the authorization request and generates the authorization data.</p>
</div>
<p>In this example, when the client requests authorization for a private channel, the server receives the request and performs the necessary authorization logic. It generates the authorization data (authData) based on the user's permissions or any other relevant information. The server then uses the Pusher library to generate the authorization signature (auth) required by Pusher. Finally, the server sends the auth data back to the client as a response.</p>
<p>Please note that this is a simplified example, and you'll need to adapt it to your specific backend setup and requirements. Make sure to install the required dependencies (pusher in this case) and configure your Pusher credentials appropriately.</p>
<h4 id="a-example-using-node-js-and-express" tabindex="-1"><a class="header-anchor" href="#a-example-using-node-js-and-express" aria-hidden="true">#</a> a. Example using Node.js and Express:</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Pusher <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'pusher'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Pusher configuration</span>
<span class="token keyword">const</span> pusher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pusher</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'YOUR_APP_ID'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'YOUR_APP_KEY'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">'YOUR_APP_SECRET'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cluster</span><span class="token operator">:</span> <span class="token string">'YOUR_APP_CLUSTER'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/pusher/authorize'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> channelName<span class="token punctuation">,</span> socketId <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>

  <span class="token comment">// Implement your authorization logic here</span>
  <span class="token comment">// This can include checking user permissions, validating session, etc.</span>
  <span class="token comment">// Generate the necessary auth data based on your requirements</span>

  <span class="token keyword">const</span> authData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user_id</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user_info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> auth <span class="token operator">=</span> pusher<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>channelName<span class="token punctuation">,</span> socketId<span class="token punctuation">,</span> authData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Server is running on port 3000'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="a-example-using-php" tabindex="-1"><a class="header-anchor" href="#a-example-using-php" aria-hidden="true">#</a> a. Example using PHP:</h4>
<ol>
<li>Install the Pusher PHP library:</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> require pusher/pusher-php-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Create a route and controller in your Laravel application:</li>
</ol>
<ul>
<li>2 (a). Define the route in routes/web.php:</li>
</ul>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'/pusher/authorize'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">PusherAuthController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'authorize'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>2 (b). Create a new controller using the command:</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan make:controller PusherAuthController
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>2 (c). Implement the authorization logic in PusherAuthController.php:</li>
</ul>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Pusher<span class="token punctuation">\</span>Pusher</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">PusherAuthController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">authorize</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$channelName</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'channelName'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$socketId</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'socketId'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Implement your authorization logic here</span>
        <span class="token comment">// This can include checking user permissions, validating session, etc.</span>
        <span class="token comment">// Generate the necessary auth data based on your requirements</span>

        <span class="token variable">$pusher</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pusher</span><span class="token punctuation">(</span>
            <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'broadcasting.connections.pusher.key'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'broadcasting.connections.pusher.secret'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'broadcasting.connections.pusher.app_id'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'broadcasting.connections.pusher.options'</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$authData</span> <span class="token operator">=</span> <span class="token variable">$pusher</span><span class="token operator">-></span><span class="token function">socket_auth</span><span class="token punctuation">(</span><span class="token variable">$channelName</span><span class="token punctuation">,</span> <span class="token variable">$socketId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Send the authorization data as a response</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$authData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Configure Laravel to use Pusher:</li>
</ol>
<p>Set your Pusher credentials in the .env file:</p>
<div class="language-makefile line-numbers-mode" data-ext="makefile"><pre v-pre class="language-makefile"><code>BROADCAST_DRIVER<span class="token operator">=</span>pusher
PUSHER_APP_ID<span class="token operator">=</span>your-app-id
PUSHER_APP_KEY<span class="token operator">=</span>your-app-key
PUSHER_APP_SECRET<span class="token operator">=</span>your-app-secret
PUSHER_APP_CLUSTER<span class="token operator">=</span>your-app-cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure the broadcasting settings in config/broadcasting.php:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token string single-quoted-string">'connections'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'pusher'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'driver'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'pusher'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'key'</span> <span class="token operator">=></span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'PUSHER_APP_KEY'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'secret'</span> <span class="token operator">=></span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'PUSHER_APP_SECRET'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'app_id'</span> <span class="token operator">=></span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'PUSHER_APP_ID'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'options'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'cluster'</span> <span class="token operator">=></span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'PUSHER_APP_CLUSTER'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// Other broadcasting connections...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


