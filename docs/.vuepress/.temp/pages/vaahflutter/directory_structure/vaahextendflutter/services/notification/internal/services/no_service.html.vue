<template><div><h1 id="no-service" tabindex="-1"><a class="header-anchor" href="#no-service" aria-hidden="true">#</a> No Service</h1>
<nav class="table-of-contents"><ul><li><router-link to="#usage">Usage</router-link></li><li><router-link to="#souce-code">Souce Code</router-link></li></ul></nav>
<p>The &quot;No Service&quot; option within the Internal Notifications service allows you to disable the use of any notification service for internal notifications.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>When selecting the &quot;No Service&quot; option, the Internal Notifications service will provide empty implementations for all methods and streams.</p>
<p>The &quot;No Service&quot; option provides a way to disable notification services within the Internal Notifications service.</p>
<p>If you decide to choose no service or enable notifications in the future, you can easily do so by selecting the appropriate service and implementing the required methods.</p>
<h2 id="souce-code" tabindex="-1"><a class="header-anchor" href="#souce-code" aria-hidden="true">#</a> Souce Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./base_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../models/notification.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">InternalNotificationsNoService</span> <span class="token keyword">implements</span> <span class="token class-name">InternalNotificationsService</span> <span class="token punctuation">{</span>
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


