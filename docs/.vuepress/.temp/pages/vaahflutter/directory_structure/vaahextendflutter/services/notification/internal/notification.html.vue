<template><div><h1 id="internal-notifications" tabindex="-1"><a class="header-anchor" href="#internal-notifications" aria-hidden="true">#</a> Internal Notifications</h1>
<nav class="table-of-contents"><ul><li><router-link to="#internalnotifications-class">InternalNotifications Class</router-link><ul><li><router-link to="#usage-instructions">Usage Instructions</router-link></li></ul></li><li><router-link to="#best-practices-using-the-internalnotifications-class">Best Practices: Using the InternalNotifications Class</router-link></li><li><router-link to="#source-code">Source Code</router-link></li></ul></nav>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This file (notification.dart) offers a service-based approach, allowing developers to integrate internal notifications easily with different services such as Firebase, Pusher, custom services, or no service at all.</p>
</div>
<p>Developer can set the type of service which they want to use from the environment, by setting the variable <code v-pre>internalNotificationsServiceType</code>.</p>
<p>The notification.dart file offers a centralized interface for integrating internal notifications within your application</p>
<div class="custom-container tip"><p class="custom-container-title">enable notifications</p>
<p>To enable default code from VaahFlutter you need to enable it from env. And to change the service which is used by push notifications; you need to change Internal Notifications Service Type from <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/enabling_and_disabling_services.html">env</RouterLink>.</p>
</div>
<h2 id="internalnotifications-class" tabindex="-1"><a class="header-anchor" href="#internalnotifications-class" aria-hidden="true">#</a> InternalNotifications Class</h2>
<ul>
<li>
<p>The InternalNotifications class acts as a facade, providing a set of static methods and properties to interact with the chosen internal notifications service. Here's an overview of its members (For details check this <a href="#source-code">Source code section</a>):</p>
<ul>
<li><code v-pre>_service</code>: An instance of InternalNotificationsService obtained from the getService function. which initialises the service depending on the env variable <code v-pre>internalNotificationsServiceType</code>.</li>
<li><code v-pre>pendingNotificationsCountStream</code>: A stream that emits the count of pending notifications.</li>
<li><code v-pre>notifications</code>: A list containing the current internal notifications.</li>
<li><code v-pre>notificationsStream</code>: A stream that emits updated lists of internal notifications.</li>
<li><code v-pre>init()</code>: Initializes the internal notifications service, setting up necessary resources and establishing connections. This method should be called before using any other internal notification functions.</li>
<li><code v-pre>dispose()</code>: Disposes of any resources held by the internal notifications service. It should be called when you no longer need internal notifications or when the application is shutting down.</li>
<li><code v-pre>subscribe()</code>: Subscribes to internal notifications. This function enables the reception of notifications for the currently authenticated user or device.</li>
<li><code v-pre>unsubscribe()</code>: Unsubscribes from internal notifications. This function stops the reception of notifications for the currently authenticated user or device.</li>
<li><code v-pre>push(List&lt;String&gt; userIds, InternalNotification notification)</code>: Pushes a notification to the specified list of user IDs, The InternalNotification object contains information about the notification to be sent.</li>
</ul>
</li>
</ul>
<h3 id="usage-instructions" tabindex="-1"><a class="header-anchor" href="#usage-instructions" aria-hidden="true">#</a> Usage Instructions</h3>
<ul>
<li>
<p>To integrate internal notifications into your application using this main file, follow these steps:</p>
<ol>
<li>Import the necessary dependencies and ensure that the required services (e.g., Firebase, Pusher) are set up correctly.</li>
<li>Use the InternalNotifications.init() method to initialize the internal notifications service. This step sets up connections and resources required for internal notifications. For VaahFlutter we generally do this in base controller.</li>
<li>Subscribe to internal notifications using InternalNotifications.subscribe(). This allows your application to start receiving internal notifications.</li>
<li>Utilize the available properties and methods of the InternalNotifications class to manage notifications, including accessing the list of notifications, tracking pending notification counts, and pushing new notifications. This has to be done by the Developer. Some predefined UI elements are available in <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/notification_view.html">notification_view.md</RouterLink>.</li>
<li>When your application no longer needs internal notifications or during shutdown, call InternalNotifications.dispose() to release any resources held by the internal notifications service.</li>
<li>If necessary, switch the internal notifications service type in the EnvironmentConfig file to use a different service provider (Firebase, Pusher, custom service, or none) without modifying the main file.</li>
</ol>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Note:</p>
<p>Ensure that you have the required service files (firebase.dart, pusher.dart, custom.dart, no_service.dart) and the env.dart file correctly implemented and accessible in the given file structure.</p>
</div>
<h2 id="best-practices-using-the-internalnotifications-class" tabindex="-1"><a class="header-anchor" href="#best-practices-using-the-internalnotifications-class" aria-hidden="true">#</a> Best Practices: Using the InternalNotifications Class</h2>
<p>When implementing internal notifications in your Flutter app, it's recommended to use the <code v-pre>InternalNotifications</code> class as a central interface for handling all internal notification services. This ensures a unified and consistent approach throughout your application. Here are a few reasons why you should use the <code v-pre>InternalNotifications</code> class wherever internal notifications are needed, rather than accessing the services directly:</p>
<ol>
<li>
<p>Abstraction and Encapsulation: The <code v-pre>InternalNotifications</code> class abstracts away the underlying implementation details of the notification services. By using this class, developers can work with a high-level interface that provides a consistent set of methods and hides the complexity of interacting with the individual services.</p>
</li>
<li>
<p>Code Modularity and Maintainability: By utilizing the <code v-pre>InternalNotifications</code> class, you decouple your app's code from the specific implementation details of the services. This promotes code modularity and improves maintainability. If there are any changes or updates to the notification services in the future, you can easily make the necessary modifications within the <code v-pre>InternalNotifications</code> class without affecting other parts of your app.</p>
</li>
<li>
<p>Simplified Integration: When integrating internal notifications into different parts of your app, using the <code v-pre>InternalNotifications</code> class provides a straightforward and standardized approach. Developers across your team can easily understand and use the class, resulting in a more consistent implementation of internal notifications across your app.</p>
</li>
<li>
<p>Future-Proofing: The <code v-pre>InternalNotifications</code> class acts as a layer of abstraction that shields your app from potential changes or updates in the notification services. If you ever decide to switch to a different notification service or update the existing implementation, you can make the necessary adjustments within the <code v-pre>InternalNotifications</code> class, ensuring minimal impact on the rest of your app.</p>
</li>
</ol>
<p>By following these best practices and utilizing the <code v-pre>InternalNotifications</code> class, you can achieve a more organized, maintainable, and future-proof implementation of internal notifications in your Flutter app. Remember to encourage developers on your team to utilize the <code v-pre>InternalNotifications</code> class wherever internal notifications are needed and discourage direct usage of the services.</p>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./services/base_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./services/custom.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./services/firebase.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./services/no_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./services/pusher.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../../env.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../models/notification.dart'</span></span><span class="token punctuation">;</span>

<span class="token class-name">InternalNotificationsService</span> <span class="token keyword">get</span> getService <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">InternalNotificationsServiceType</span> serviceType <span class="token operator">=</span>
      <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>internalNotificationsServiceType<span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>serviceType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token class-name">InternalNotificationsServiceType</span><span class="token punctuation">.</span>firebase<span class="token punctuation">:</span>
      <span class="token keyword">return</span> <span class="token class-name">InternalNotificationsWithFirebase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token class-name">InternalNotificationsServiceType</span><span class="token punctuation">.</span>pusher<span class="token punctuation">:</span>
      <span class="token keyword">return</span> <span class="token class-name">InternalNotificationsWithPusher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token class-name">InternalNotificationsServiceType</span><span class="token punctuation">.</span>custom<span class="token punctuation">:</span>
      <span class="token keyword">return</span> <span class="token class-name">InternalNotificationsWithCustomService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token class-name">InternalNotificationsServiceType</span><span class="token punctuation">.</span>none<span class="token punctuation">:</span>
      <span class="token keyword">return</span> <span class="token class-name">InternalNotificationsNoService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">InternalNotifications</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">InternalNotificationsService</span> _service <span class="token operator">=</span> getService<span class="token punctuation">;</span>

  <span class="token keyword">static</span> late <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span> pendingNotificationsCountStream<span class="token punctuation">;</span>

  <span class="token keyword">static</span> late <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> notifications<span class="token punctuation">;</span>

  <span class="token keyword">static</span> late <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span> notificationsStream<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _service<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pendingNotificationsCountStream <span class="token operator">=</span> _service<span class="token punctuation">.</span>pendingNotificationsCountStream<span class="token punctuation">;</span>
    notifications <span class="token operator">=</span> _service<span class="token punctuation">.</span>notifications<span class="token punctuation">;</span>
    notificationsStream <span class="token operator">=</span> _service<span class="token punctuation">.</span>notificationsStream<span class="token punctuation">;</span>
    _service<span class="token punctuation">.</span>notificationsStream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>updatedNotifications<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      notifications <span class="token operator">=</span> updatedNotifications<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _service<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _service<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _service<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userIds<span class="token punctuation">,</span> <span class="token class-name">InternalNotification</span> notification<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _service<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>userIds<span class="token punctuation">,</span> notification<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


