<template><div><h1 id="local-notifications" tabindex="-1"><a class="header-anchor" href="#local-notifications" aria-hidden="true">#</a> Local notifications</h1>
<nav class="table-of-contents"><ul><li><router-link to="#overview">Overview</router-link></li><li><router-link to="#dependencies">Dependencies</router-link></li><li><router-link to="#usage">Usage</router-link><ul><li><router-link to="#initializing">Initializing</router-link></li><li><router-link to="#disposing">Disposing</router-link></li><li><router-link to="#asking-permission">Asking Permission</router-link></li><li><router-link to="#pushing-notifications">Pushing Notifications</router-link></li><li><router-link to="#handling-notification-events">Handling Notification Events</router-link></li></ul></li></ul></nav>
<div class="custom-container tip"><p class="custom-container-title">Note:</p>
<p>We use PushNotifications class and not LocalNotifications class whenever needed in project becuse of <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/notification.html#best-practices-using-the-pushnotifications-class">the given reasons.</RouterLink></p>
</div>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>The LocalNotifications class interacts with the flutter_local_notifications package to handle local notifications in a Flutter app. It provides methods to initialize the service, ask for permission, push local notifications, and handle notification events.</p>
<h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h2>
<p>Before using the LocalNotifications class, make sure you have the following dependencies set up in your Flutter project:</p>
<p>flutter_local_notifications.dart: Dependency for handling local notifications.
timezone.dart: Dependency for working with timezones.
Ensure that you have imported these dependencies before using the LocalNotifications class.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>This section explains how to use the LocalNotifications class and its various methods.</p>
<h3 id="initializing" tabindex="-1"><a class="header-anchor" href="#initializing" aria-hidden="true">#</a> Initializing</h3>
<p>To initialize the local notification service, call the init method. This method sets up the flutter_local_notifications plugin with the necessary configuration.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">await</span> <span class="token class-name">LocalNotifications</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is done in push/notification.dart, so we use PushNotifications class only whenever needed.</p>
<h3 id="disposing" tabindex="-1"><a class="header-anchor" href="#disposing" aria-hidden="true">#</a> Disposing</h3>
<p>When you no longer need the local notification service, make sure to dispose of the resources by calling the dispose method.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">LocalNotifications</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="asking-permission" tabindex="-1"><a class="header-anchor" href="#asking-permission" aria-hidden="true">#</a> Asking Permission</h3>
<p>To ask the user for permission to display local notifications, use the askPermission method.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>bool<span class="token operator">?</span> permissionGranted <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">LocalNotifications</span><span class="token punctuation">.</span><span class="token function">askPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The method returns a boolean indicating whether the user granted permission for local notifications.</p>
<p>This is also handled by main <code v-pre>PushNotifications</code> class, so we don't need to call this method directly.</p>
<h3 id="pushing-notifications" tabindex="-1"><a class="header-anchor" href="#pushing-notifications" aria-hidden="true">#</a> Pushing Notifications</h3>
<p>To send a local notification, use the push method. This method takes a PushNotification object as a parameter.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">await</span> <span class="token class-name">LocalNotifications</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>notification<span class="token punctuation">:</span> pushNotification<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The notification parameter is a PushNotification object representing the local notification to be sent. Ensure that the id, heading, and content properties are set accordingly.</p>
<p>By default, the notification will be scheduled to appear 5 seconds from the current time if no sendAfter property is provided in the PushNotification object.</p>
<h3 id="handling-notification-events" tabindex="-1"><a class="header-anchor" href="#handling-notification-events" aria-hidden="true">#</a> Handling Notification Events</h3>
<p>The LocalNotifications class provides an internal method, _handleNotification, to handle notification events. This method is called when a notification is tapped or interacted with by the user.</p>
<p>The method receives the notification's payload and action ID as parameters.
Customize the _handleNotification method according to your app's requirements to handle the notification event appropriately.</p>
</div></template>


