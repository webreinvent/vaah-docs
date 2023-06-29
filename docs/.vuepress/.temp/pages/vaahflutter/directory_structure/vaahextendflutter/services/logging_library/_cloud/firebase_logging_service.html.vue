<template><div><h1 id="firebase-logging-service" tabindex="-1"><a class="header-anchor" href="#firebase-logging-service" aria-hidden="true">#</a> Firebase Logging Service</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<p>implements LoggingService</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">Developer Guide</p>
<ul>
<li>Developer should never use this service directly, use <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html">Logging Library</RouterLink> instead.</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#firebaseloggingservice">FirebaseLoggingService</router-link></li></ul></nav>
<h2 id="firebaseloggingservice" tabindex="-1"><a class="header-anchor" href="#firebaseloggingservice" aria-hidden="true">#</a> FirebaseLoggingService</h2>
<div class="custom-container danger"><p class="custom-container-title">Unimplemented error</p>
<ul>
<li>
<p>Implements <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/logging_service.html">LoggingService</RouterLink>.</p>
</li>
<li>
<p>Methods does not work, will throw unimplemented error.</p>
</li>
</ul>
</div>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./logging_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../models/log.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">FirebaseLoggingService</span> <span class="token keyword">implements</span> <span class="token class-name">LoggingService</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">logEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token class-name">String</span> message<span class="token punctuation">,</span>
    <span class="token class-name">EventType</span><span class="token operator">?</span> type<span class="token punctuation">,</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token keyword">throw</span> <span class="token class-name">UnimplementedError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">logException</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> throwable<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token keyword">dynamic</span> stackTrace<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> hint<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token keyword">throw</span> <span class="token class-name">UnimplementedError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">logTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token class-name">Function</span> execute<span class="token punctuation">,</span>
    required <span class="token class-name">TransactionDetails</span> details<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token class-name">UnimplementedError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


