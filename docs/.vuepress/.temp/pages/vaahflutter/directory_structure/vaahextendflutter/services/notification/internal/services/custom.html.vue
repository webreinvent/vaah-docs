<template><div><h1 id="custom-service" tabindex="-1"><a class="header-anchor" href="#custom-service" aria-hidden="true">#</a> Custom Service</h1>
<nav class="table-of-contents"><ul><li><router-link to="#implementation">Implementation</router-link></li><li><router-link to="#souce-code">Souce Code</router-link></li></ul></nav>
<p>The custom service file provides developers with the flexibility to implement their own internal notifications service according to their specific requirements. Developers can customize and extend this file to integrate their preferred custom service for internal notifications.</p>
<p>This service has to be implemented by developer depending on what custom service they want to use.</p>
<h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2>
<p>Customize the implementation of each method and property according to the requirements of your custom service. This may involve integrating with external APIs, databases, or other relevant components.</p>
<h2 id="souce-code" tabindex="-1"><a class="header-anchor" href="#souce-code" aria-hidden="true">#</a> Souce Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./base_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../models/notification.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">InternalNotificationsWithCustomService</span> <span class="token keyword">implements</span> <span class="token class-name">InternalNotificationsService</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span> pendingNotificationsCountStream <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span> notificationsStream <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> <span class="token keyword">get</span> notifications <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userIds<span class="token punctuation">,</span> <span class="token class-name">InternalNotification</span> notification<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


