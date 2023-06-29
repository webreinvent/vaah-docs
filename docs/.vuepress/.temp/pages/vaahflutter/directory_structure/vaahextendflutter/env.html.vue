<template><div><h1 id="environments" tabindex="-1"><a class="header-anchor" href="#environments" aria-hidden="true">#</a> Environments</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<p>None</p>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#running-the-app-in-different-environments">Running the app in different environments</router-link></li><li><router-link to="#about-environment-configuration">About environment configuration</router-link><ul><li><router-link to="#properties">Properties</router-link></li><li><router-link to="#example-of-environment-config">Example of environment config</router-link></li></ul></li><li><router-link to="#how-can-i-create-a-new-config-and-new-environment-and-use-it-for-my-app">How can I create a new config and new environment and use it for my app.</router-link></li><li><router-link to="#source-code">Source Code</router-link></li></ul></nav>
<h2 id="running-the-app-in-different-environments" tabindex="-1"><a class="header-anchor" href="#running-the-app-in-different-environments" aria-hidden="true">#</a> Running the app in different environments</h2>
<ul>
<li>In the default environment</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flutter run

OR

flutter run --dart-define<span class="token operator">=</span><span class="token string">"environment=default"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>In the development environment</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flutter run --dart-define<span class="token operator">=</span><span class="token string">"environment=develop"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>In the staging environment</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flutter run --dart-define<span class="token operator">=</span><span class="token string">"environment=stage"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>In the Production environment</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flutter run --dart-define<span class="token operator">=</span><span class="token string">"environment=production"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="about-environment-configuration" tabindex="-1"><a class="header-anchor" href="#about-environment-configuration" aria-hidden="true">#</a> About environment configuration</h2>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
<p>Environment config contains below properties.</p>
<table>
<thead>
<tr>
<th><strong>Property Name</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>appTitle</td>
<td>Represents full name of app</td>
</tr>
<tr>
<td>appTitleShort</td>
<td>Represents short name of app</td>
</tr>
<tr>
<td>envType</td>
<td>Represents environment type (e.g. develop, staging, production, etc.)</td>
</tr>
<tr>
<td>version</td>
<td>Represents current version, in major.minor.patch format (e.g. 1.0.0)</td>
</tr>
<tr>
<td>build</td>
<td>Represents build number, generally date (yyyymmdd) + build of current day (e.g. 2023010101)</td>
</tr>
<tr>
<td>backendUrl</td>
<td>No use</td>
</tr>
<tr>
<td>apiUrl</td>
<td>Represents root endpoint of url</td>
</tr>
<tr>
<td>timeoutLimit</td>
<td>Represents timeout limit for requests (in milliseconds)</td>
</tr>
<tr>
<td>firebaseId</td>
<td>Represents firebase id of app</td>
</tr>
<tr>
<td>enableLocalLogs</td>
<td>Used for enabling/ disabling Local Logs</td>
</tr>
<tr>
<td>enableCloudLogs</td>
<td>Used for enabling/ disabling Cloud Logs</td>
</tr>
<tr>
<td>enableApiLogInterceptor</td>
<td>Used for enabling/ disabling API Request and Response Local logs</td>
</tr>
<tr>
<td>sentryConfig</td>
<td>Contains all essential values for sentry</td>
</tr>
<tr>
<td>pushNotificationsServiceType</td>
<td>Used to set the Push Notifications Service Type</td>
</tr>
<tr>
<td>oneSignalConfig</td>
<td>Used to set the One signal config <strong>(needed/ works only when push notification service type is remote)</strong></td>
</tr>
<tr>
<td>internalNotificationsServiceType</td>
<td>Used to set the Internal Notifications Service Type</td>
</tr>
<tr>
<td>pusherConfig</td>
<td>Used to set the Pusher config <strong>(needed/ works only when internal notification service type is pusher)</strong></td>
</tr>
<tr>
<td>showDebugPanel</td>
<td>Used for enabling/ disabling Debug Panel</td>
</tr>
<tr>
<td>debugPanelColor</td>
<td>Used for changing color of Debug Panel</td>
</tr>
</tbody>
</table>
<h4 id="sentry-config-sentryconfig" tabindex="-1"><a class="header-anchor" href="#sentry-config-sentryconfig" aria-hidden="true">#</a> Sentry Config (sentryConfig)</h4>
<p>check more <RouterLink to="/vaahflutter/directory_structure/directory_structure/vaahextendflutter/services/performance_monitoring.html">here</RouterLink> and <RouterLink to="/vaahflutter/directory_structure/directory_structure/vaahextendflutter/services/logging_library/logging_library.html">here</RouterLink></p>
<table>
<thead>
<tr>
<th><strong>Property Name</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>dsn</td>
<td>Data Source Name (which is unique per project amd developer can obtain that by creating a new project in sentry)</td>
</tr>
<tr>
<td>enableAutoPerformanceTracking</td>
<td>if set to false nothing will be monitored</td>
</tr>
<tr>
<td>autoAppStart</td>
<td>if enabled will monitor cold and warm start up time</td>
</tr>
<tr>
<td>enableUserInteractionTracing</td>
<td>if enabled will monitor User Interaction</td>
</tr>
<tr>
<td>enableAssetsInstrumentation</td>
<td>if enabled will monitor Asset Performance</td>
</tr>
<tr>
<td>tracesSampleRate</td>
<td>will report uncaught errors as per rate is set, i.e. if it's 0.4 then 40% of all uncaught error will be reported</td>
</tr>
</tbody>
</table>
<h4 id="push-notifications-service-type-pushnotificationsservicetype" tabindex="-1"><a class="header-anchor" href="#push-notifications-service-type-pushnotificationsservicetype" aria-hidden="true">#</a> Push Notifications Service Type (pushNotificationsServiceType)</h4>
<p>Check <RouterLink to="/vaahflutter/directory_structure/directory_structure/vaahextendflutter/services/notification/push/notification.html">this</RouterLink>.</p>
<p>Possible values for <code v-pre>pushNotificationsServiceType</code> are</p>
<table>
<thead>
<tr>
<th><strong>Property Name</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>PushNotificationsServiceType.local</td>
<td>No additional configuration needed to push local notifications</td>
</tr>
<tr>
<td>PushNotificationsServiceType.remote</td>
<td>This will allow dev to push notifications via Remote service (devices which are not local will also be allowed using player id)</td>
</tr>
<tr>
<td>PushNotificationsServiceType.both</td>
<td>This will allow dev to push notifications via Local service (for local device notifications) and to push notifications via Remote service (devices which are not local will also be allowed</td>
</tr>
<tr>
<td>PushNotificationsServiceType.none</td>
<td>No additional configuration needed. Choosing this will disable Push Notifications</td>
</tr>
</tbody>
</table>
<p>If you choose <code v-pre>PushNotificationsServiceType.remote</code> or <code v-pre>PushNotificationsServiceType.both</code> you need to add <code v-pre>oneSignalConfig</code> as well.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>oneSignalConfig<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">OneSignalConfig</span><span class="token punctuation">(</span>appId<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="internal-notifications-service-type-internalnotificationsservicetype" tabindex="-1"><a class="header-anchor" href="#internal-notifications-service-type-internalnotificationsservicetype" aria-hidden="true">#</a> Internal Notifications Service Type (internalNotificationsServiceType)</h4>
<p>Check <RouterLink to="/vaahflutter/directory_structure/directory_structure/vaahextendflutter/services/notification/internal/notification.html">this</RouterLink>.</p>
<p>Possible values for <code v-pre>internalNotificationsServiceType</code> are</p>
<table>
<thead>
<tr>
<th><strong>Property Name</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>InternalNotificationsServiceType.firebase</td>
<td>This will enable internal notifications via firestore</td>
</tr>
<tr>
<td>InternalNotificationsServiceType.pusher</td>
<td>This will enable internal notifications via pusher</td>
</tr>
<tr>
<td>InternalNotificationsServiceType.custom</td>
<td>This will enable internal notifications via custom service</td>
</tr>
<tr>
<td>InternalNotificationsServiceType.none</td>
<td>This will disable internal notifications</td>
</tr>
</tbody>
</table>
<p>If you choose <code v-pre>InternalNotificationsServiceType.firebase</code> you need to setup firestore and firebase app as well, check more details <RouterLink to="/vaahflutter/directory_structure/directory_structure/vaahextendflutter/services/notification/internal/services/firebase.html#integration">here</RouterLink>.</p>
<p>If you choose <code v-pre>InternalNotificationsServiceType.pusher</code> you need to setup pusher as well, check more details <RouterLink to="/vaahflutter/directory_structure/directory_structure/vaahextendflutter/services/notification/internal/services/pusher.html#integration">here</RouterLink>.</p>
<p>If you choose <code v-pre>InternalNotificationsServiceType.cutom</code> you need to write custom service code in <RouterLink to="/vaahflutter/directory_structure/directory_structure/vaahextendflutter/services/notification/internal/services/custom.html">custom.dart</RouterLink></p>
<h3 id="example-of-environment-config" tabindex="-1"><a class="header-anchor" href="#example-of-environment-config" aria-hidden="true">#</a> Example of environment config</h3>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">final</span> <span class="token class-name">EnvironmentConfig</span> developConfig <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">(</span>
  appTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'VaahFlutter'</span></span><span class="token punctuation">,</span>
  appTitleShort<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'VaahFlutter'</span></span><span class="token punctuation">,</span>
  envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'develop'</span></span><span class="token punctuation">,</span>
  version<span class="token punctuation">:</span> version<span class="token punctuation">,</span>
  build<span class="token punctuation">:</span> build<span class="token punctuation">,</span>
  backendUrl<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span>
  apiUrl<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span>
  timeoutLimit<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 20 seconds</span>
  firebaseId<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span>
  sentryConfig<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">SentryConfig</span><span class="token punctuation">(</span>
    dsn<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span>
    enableAutoPerformanceTracking<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    autoAppStart<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    enableUserInteractionTracing<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    enableAssetsInstrumentation<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    tracesSampleRate<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  enableLocalLogs<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  enableCloudLogs<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  enableApiLogInterceptor<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  showDebugPanel<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  debugPanelColor<span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'black'</span></span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-can-i-create-a-new-config-and-new-environment-and-use-it-for-my-app" tabindex="-1"><a class="header-anchor" href="#how-can-i-create-a-new-config-and-new-environment-and-use-it-for-my-app" aria-hidden="true">#</a> How can I create a new config and new environment and use it for my app.</h2>
<ul>
<li>
<p>Let's say I already have one default config (developConfig) and I want to copy some of it's properties and want to override some properties. If I don't have any config I need to create one like <a href="#example-of-environment-config">this</a>.</p>
</li>
<li>
<p>Then I can pass different configurations in <code v-pre>_envConfigs</code> array in <a href="#source-code">Source Code</a>.</p>
</li>
</ul>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">></span></span> _envConfigs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-literal"><span class="token string">'develop'</span></span><span class="token punctuation">:</span> developConfig<span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'stage'</span></span><span class="token punctuation">:</span> developConfig<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
    envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'stage'</span></span><span class="token punctuation">,</span>
    enableLocalLogs<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'production'</span></span><span class="token punctuation">:</span> developConfig<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
    envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'production'</span></span><span class="token punctuation">,</span>
    enableLocalLogs<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    enableApiLogInterceptor<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    showDebugPanel<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'my-env'</span></span><span class="token punctuation">:</span> developConfig<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
    envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'none'</span></span><span class="token punctuation">,</span>
    enableCloudLogs<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And then developer can just use <code v-pre>flutter run</code> command with their environment name</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flutter run --dart-define<span class="token operator">=</span><span class="token string">"environment=my-env"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<p><code v-pre>env.dart</code> file</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:io'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:get/get.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:get_storage/get_storage.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./app_theme.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./services/logging_library/logging_library.dart'</span></span><span class="token punctuation">;</span>

<span class="token comment">// After changing any const you will need to restart the app (Hot-reload won't work).</span>

<span class="token comment">// Version and build</span>
<span class="token keyword">const</span> <span class="token class-name">String</span> version <span class="token operator">=</span> <span class="token string-literal"><span class="token string">'1.0.0'</span></span><span class="token punctuation">;</span> <span class="token comment">// version format 1.0.0 (major.minor.patch)</span>
<span class="token keyword">const</span> <span class="token class-name">String</span> build <span class="token operator">=</span> <span class="token string-literal"><span class="token string">'2022030201'</span></span><span class="token punctuation">;</span> <span class="token comment">// build no format 'YYYYMMDDNUMBER'</span>

<span class="token keyword">final</span> <span class="token class-name">EnvironmentConfig</span> defaultConfig <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">(</span>
  appTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'VaahFlutter'</span></span><span class="token punctuation">,</span>
  appTitleShort<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'VaahFlutter'</span></span><span class="token punctuation">,</span>
  envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'default'</span></span><span class="token punctuation">,</span>
  version<span class="token punctuation">:</span> version<span class="token punctuation">,</span>
  build<span class="token punctuation">:</span> build<span class="token punctuation">,</span>
  backendUrl<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span>
  apiUrl<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span>
  timeoutLimit<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 20 seconds</span>
  enableLocalLogs<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  enableCloudLogs<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  enableApiLogInterceptor<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  pushNotificationsServiceType<span class="token punctuation">:</span> <span class="token class-name">PushNotificationsServiceType</span><span class="token punctuation">.</span>both<span class="token punctuation">,</span>
  oneSignalConfig<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">OneSignalConfig</span><span class="token punctuation">(</span>appId<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  internalNotificationsServiceType<span class="token punctuation">:</span> <span class="token class-name">InternalNotificationsServiceType</span><span class="token punctuation">.</span>custom<span class="token punctuation">,</span>
  pusherConfig<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">PusherConfig</span><span class="token punctuation">(</span>apiKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span> cluster<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  showDebugPanel<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  debugPanelColor<span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'black'</span></span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// To add new configuration add new key, value pair in envConfigs</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">></span></span> _envConfigs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do not remove default config</span>
  <span class="token string-literal"><span class="token string">'default'</span></span><span class="token punctuation">:</span> defaultConfig<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
    envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'default'</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'develop'</span></span><span class="token punctuation">:</span> defaultConfig<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
    envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'develop'</span></span><span class="token punctuation">,</span>
    enableCloudLogs<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'stage'</span></span><span class="token punctuation">:</span> defaultConfig<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
    envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'stage'</span></span><span class="token punctuation">,</span>
    enableCloudLogs<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'production'</span></span><span class="token punctuation">:</span> defaultConfig<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
    envType<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'production'</span></span><span class="token punctuation">,</span>
    enableLocalLogs<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    enableApiLogInterceptor<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    showDebugPanel<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">EnvController</span> <span class="token keyword">extends</span> <span class="token class-name">GetxController</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">GetStorage</span> _storage <span class="token operator">=</span> <span class="token class-name">GetStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  late <span class="token class-name">EnvironmentConfig</span> _config<span class="token punctuation">;</span>

  <span class="token class-name">EnvironmentConfig</span> <span class="token keyword">get</span> config <span class="token operator">=</span><span class="token operator">></span> _config<span class="token punctuation">;</span>

  <span class="token class-name">EnvController</span><span class="token punctuation">(</span><span class="token class-name">String</span> environment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      _config <span class="token operator">=</span> <span class="token function">getSpecificConfig</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>openCount<span class="token punctuation">:</span> _storage<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'open_count'</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">EnvironmentConfig</span> <span class="token function">getSpecificConfig</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bool configExists <span class="token operator">=</span> _envConfigs<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configExists<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> _envConfigs<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Environment configuration not found for key: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">key</span></span><span class="token string">'</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">increaseOpenCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _storage<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'open_count'</span></span><span class="token punctuation">,</span> _config<span class="token punctuation">.</span>openCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _config <span class="token operator">=</span> _config<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>openCount<span class="token punctuation">:</span> _config<span class="token punctuation">.</span>openCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">EnvironmentConfig</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> appTitle<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> appTitleShort<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> envType<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> version<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> build<span class="token punctuation">;</span>
  <span class="token keyword">final</span> int openCount<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> backendUrl<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> apiUrl<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> firebaseId<span class="token punctuation">;</span>
  <span class="token keyword">final</span> int timeoutLimit<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool enableLocalLogs<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool enableCloudLogs<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">SentryConfig</span><span class="token operator">?</span> sentryConfig<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool enableApiLogInterceptor<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">PushNotificationsServiceType</span> pushNotificationsServiceType<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">InternalNotificationsServiceType</span> internalNotificationsServiceType<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">OneSignalConfig</span><span class="token operator">?</span> oneSignalConfig<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">PusherConfig</span><span class="token operator">?</span> pusherConfig<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool showDebugPanel<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span> debugPanelColor<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>appTitle<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>appTitleShort<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>envType<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>version<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>build<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>openCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>backendUrl<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firebaseId<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>timeoutLimit<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>enableLocalLogs<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>enableCloudLogs<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sentryConfig<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>enableApiLogInterceptor<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>pushNotificationsServiceType<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>internalNotificationsServiceType<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>oneSignalConfig<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pusherConfig<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>showDebugPanel<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>debugPanelColor<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token class-name">EnvironmentConfig</span> <span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> bool envControllerExists <span class="token operator">=</span> <span class="token class-name">Get</span><span class="token punctuation">.</span>isRegistered<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EnvController</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>envControllerExists<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">EnvController</span> envController <span class="token operator">=</span> <span class="token class-name">Get</span><span class="token punctuation">.</span>find<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EnvController</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> envController<span class="token punctuation">.</span>config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> environment <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">fromEnvironment</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'environment'</span></span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'default'</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">EnvController</span> envController <span class="token operator">=</span> <span class="token class-name">Get</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">EnvController</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>
      <span class="token string-literal"><span class="token string">'Env Type: </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">envController<span class="token punctuation">.</span>config<span class="token punctuation">.</span>envType</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">,</span>
      disableCloudLogging<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>
      <span class="token string-literal"><span class="token string">'Version: </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">envController<span class="token punctuation">.</span>config<span class="token punctuation">.</span>version</span><span class="token punctuation">}</span></span><span class="token string">+</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">envController<span class="token punctuation">.</span>config<span class="token punctuation">.</span>build</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">,</span>
      disableCloudLogging<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">EnvironmentConfig</span> <span class="token function">copyWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token operator">?</span> appTitle<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> appTitleShort<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> envType<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> version<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> build<span class="token punctuation">,</span>
    int<span class="token operator">?</span> openCount<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> backendUrl<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> apiUrl<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> firebaseId<span class="token punctuation">,</span>
    int<span class="token operator">?</span> timeoutLimit<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> enableLocalLogs<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> enableCloudLogs<span class="token punctuation">,</span>
    <span class="token class-name">SentryConfig</span><span class="token operator">?</span> sentryConfig<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> enableApiLogInterceptor<span class="token punctuation">,</span>
    <span class="token class-name">PushNotificationsServiceType</span><span class="token operator">?</span> pushNotificationsServiceType<span class="token punctuation">,</span>
    <span class="token class-name">InternalNotificationsServiceType</span><span class="token operator">?</span> internalNotificationsServiceType<span class="token punctuation">,</span>
    <span class="token class-name">OneSignalConfig</span><span class="token operator">?</span> oneSignalConfig<span class="token punctuation">,</span>
    <span class="token class-name">PusherConfig</span><span class="token operator">?</span> pusherConfig<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> showDebugPanel<span class="token punctuation">,</span>
    <span class="token class-name">Color</span><span class="token operator">?</span> debugPanelColor<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">(</span>
      appTitle<span class="token punctuation">:</span> appTitle <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appTitle<span class="token punctuation">,</span>
      appTitleShort<span class="token punctuation">:</span> appTitleShort <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appTitleShort<span class="token punctuation">,</span>
      envType<span class="token punctuation">:</span> envType <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>envType<span class="token punctuation">,</span>
      version<span class="token punctuation">:</span> version <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>version<span class="token punctuation">,</span>
      build<span class="token punctuation">:</span> build <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>build<span class="token punctuation">,</span>
      openCount<span class="token punctuation">:</span> openCount <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>openCount<span class="token punctuation">,</span>
      backendUrl<span class="token punctuation">:</span> backendUrl <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>backendUrl<span class="token punctuation">,</span>
      apiUrl<span class="token punctuation">:</span> apiUrl <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token punctuation">,</span>
      firebaseId<span class="token punctuation">:</span> firebaseId <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firebaseId<span class="token punctuation">,</span>
      timeoutLimit<span class="token punctuation">:</span> timeoutLimit <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>timeoutLimit<span class="token punctuation">,</span>
      enableLocalLogs<span class="token punctuation">:</span> enableLocalLogs <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enableLocalLogs<span class="token punctuation">,</span>
      enableCloudLogs<span class="token punctuation">:</span> enableCloudLogs <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enableCloudLogs<span class="token punctuation">,</span>
      sentryConfig<span class="token punctuation">:</span> sentryConfig <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sentryConfig<span class="token punctuation">,</span>
      enableApiLogInterceptor<span class="token punctuation">:</span> enableApiLogInterceptor <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enableApiLogInterceptor<span class="token punctuation">,</span>
      pushNotificationsServiceType<span class="token punctuation">:</span>
          pushNotificationsServiceType <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pushNotificationsServiceType<span class="token punctuation">,</span>
      internalNotificationsServiceType<span class="token punctuation">:</span>
          internalNotificationsServiceType <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>internalNotificationsServiceType<span class="token punctuation">,</span>
      oneSignalConfig<span class="token punctuation">:</span> oneSignalConfig <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>oneSignalConfig<span class="token punctuation">,</span>
      pusherConfig<span class="token punctuation">:</span> pusherConfig <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pusherConfig<span class="token punctuation">,</span>
      showDebugPanel<span class="token punctuation">:</span> showDebugPanel <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>showDebugPanel<span class="token punctuation">,</span>
      debugPanelColor<span class="token punctuation">:</span> debugPanelColor <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>debugPanelColor<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">increaseOpenCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> bool envControllerExists <span class="token operator">=</span> <span class="token class-name">Get</span><span class="token punctuation">.</span>isRegistered<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EnvController</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>envControllerExists<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'No EnvController Is Registered'</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token class-name">Get</span><span class="token punctuation">.</span>find<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EnvController</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increaseOpenCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> <span class="token class-name">PushNotificationsServiceType</span> <span class="token punctuation">{</span> local<span class="token punctuation">,</span> remote<span class="token punctuation">,</span> both<span class="token punctuation">,</span> none <span class="token punctuation">}</span>

<span class="token keyword">enum</span> <span class="token class-name">InternalNotificationsServiceType</span> <span class="token punctuation">{</span> pusher<span class="token punctuation">,</span> firebase<span class="token punctuation">,</span> custom<span class="token punctuation">,</span> none <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SentryConfig</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> dsn<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool autoAppStart<span class="token punctuation">;</span> <span class="token comment">// To record cold and warm start up time</span>
  <span class="token keyword">final</span> double tracesSampleRate<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool enableAutoPerformanceTracking<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool enableUserInteractionTracing<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool enableAssetsInstrumentation<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">SentryConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>dsn<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>autoAppStart <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tracesSampleRate <span class="token operator">=</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>enableAutoPerformanceTracking <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>enableUserInteractionTracing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>enableAssetsInstrumentation <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">SentryConfig</span> <span class="token function">copyWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token operator">?</span> dsn<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> autoAppStart<span class="token punctuation">,</span>
    double<span class="token operator">?</span> tracesSampleRate<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> enableAutoPerformanceTracking<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> enableUserInteractionTracing<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> enableAssetsInstrumentation<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">SentryConfig</span><span class="token punctuation">(</span>
      dsn<span class="token punctuation">:</span> dsn <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dsn<span class="token punctuation">,</span>
      autoAppStart<span class="token punctuation">:</span> autoAppStart <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>autoAppStart<span class="token punctuation">,</span>
      tracesSampleRate<span class="token punctuation">:</span> tracesSampleRate <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tracesSampleRate<span class="token punctuation">,</span>
      enableAutoPerformanceTracking<span class="token punctuation">:</span>
          enableAutoPerformanceTracking <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enableAutoPerformanceTracking<span class="token punctuation">,</span>
      enableUserInteractionTracing<span class="token punctuation">:</span>
          enableUserInteractionTracing <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enableUserInteractionTracing<span class="token punctuation">,</span>
      enableAssetsInstrumentation<span class="token punctuation">:</span> enableAssetsInstrumentation <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>enableAssetsInstrumentation<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OneSignalConfig</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> appId<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">OneSignalConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>appId<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">OneSignalConfig</span> <span class="token function">copyWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token operator">?</span> appId<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">OneSignalConfig</span><span class="token punctuation">(</span>
      appId<span class="token punctuation">:</span> appId <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appId<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PusherConfig</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> apiKey<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> cluster<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">PusherConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>apiKey<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>cluster<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">PusherConfig</span> <span class="token function">copyWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token operator">?</span> apiKey<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> cluster<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">PusherConfig</span><span class="token punctuation">(</span>
      apiKey<span class="token punctuation">:</span> apiKey <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>apiKey<span class="token punctuation">,</span>
      cluster<span class="token punctuation">:</span> cluster <span class="token operator">?</span><span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cluster<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


