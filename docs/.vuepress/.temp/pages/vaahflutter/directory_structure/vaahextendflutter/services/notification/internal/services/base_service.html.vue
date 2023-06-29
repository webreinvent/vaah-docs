<template><div><h1 id="base-service" tabindex="-1"><a class="header-anchor" href="#base-service" aria-hidden="true">#</a> Base Service</h1>
<nav class="table-of-contents"><ul><li><router-link to="#internalnotificationsservice-class">InternalNotificationsService Class</router-link><ul><li><router-link to="#implementing-internal-notifications-service">Implementing Internal Notifications Service</router-link></li></ul></li><li><router-link to="#source-code">Source Code</router-link></li></ul></nav>
<ul>
<li>The base service file provides the foundation for implementing different internal notification services. It defines the InternalNotificationsService abstract class, which outlines the required methods and properties that specific services must implement.</li>
</ul>
<p>Here's an overview of the class structure:</p>
<h2 id="internalnotificationsservice-class" tabindex="-1"><a class="header-anchor" href="#internalnotificationsservice-class" aria-hidden="true">#</a> InternalNotificationsService Class</h2>
<ul>
<li>The InternalNotificationsService abstract class serves as a blueprint for internal notification services. It provides the members listed <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/notification.html#internalnotifications-class">here</RouterLink>.</li>
</ul>
<h3 id="implementing-internal-notifications-service" tabindex="-1"><a class="header-anchor" href="#implementing-internal-notifications-service" aria-hidden="true">#</a> Implementing Internal Notifications Service</h3>
<p>To create a specific internal notifications service, follow these steps:</p>
<ol>
<li>
<p>Create a new service file that implements the InternalNotificationsService abstract class.</p>
</li>
<li>
<p>Override the empty methods (init(), dispose(), subscribe(), unsubscribe(), push()) according to the requirements of your chosen service provider (e.g., We have already provided code for services like: Firebase and Pusher. You can refere that when you try to <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/notification.html#creating-a-new-service-for-your-project">implement your own service</RouterLink>).</p>
</li>
<li>
<p>Customize the properties (pendingNotificationsCountStream, notificationsStream, notifications) to provide the necessary functionality specific to your service.</p>
</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">Note:</p>
<p>Ensure that the implemented service file is correctly imported and accessible within the application's file structure.</p>
</div>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../models/notification.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">InternalNotificationsService</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span> pendingNotificationsCountStream <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span> notificationsStream <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> <span class="token keyword">get</span> notifications <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userIds<span class="token punctuation">,</span> <span class="token class-name">InternalNotification</span> notification<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


