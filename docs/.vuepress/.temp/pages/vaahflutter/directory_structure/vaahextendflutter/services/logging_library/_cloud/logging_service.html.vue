<template><div><h1 id="logging-service" tabindex="-1"><a class="header-anchor" href="#logging-service" aria-hidden="true">#</a> Logging Service</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<p>None</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">Developer Guide</p>
<ul>
<li>Developer should never use this service directly, use <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html">Logging Library</RouterLink> instead.</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#log-types">Log types</router-link></li><li><router-link to="#loggingservice">LoggingService</router-link></li></ul></nav>
<h2 id="log-types" tabindex="-1"><a class="header-anchor" href="#log-types" aria-hidden="true">#</a> Log types</h2>
<p>Currently, three types of logging functions are there in abstract class <code v-pre>LoggingService</code>.</p>
<ol>
<li>event</li>
<li>exception</li>
<li>transaction</li>
</ol>
<ul>
<li>event is used to for log, info, success, and warning.</li>
<li>exception is used to for logging exceptions.</li>
<li>transaction is used to for logging transactions.</li>
</ul>
<h2 id="loggingservice" tabindex="-1"><a class="header-anchor" href="#loggingservice" aria-hidden="true">#</a> LoggingService</h2>
<ul>
<li>
<p>This service is abstract class and is used to implement different cloud services. e.g. Sentry, Google CrashAnalytics, etc.</p>
</li>
<li>
<p>Check <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html#how-to-add-new-cloud-service">here</RouterLink> how can you add new cloud logging service.</p>
</li>
<li>
<p>This service defines basic structure for services which implements <code v-pre>LoggingService</code> so when different services are used in <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html">logging_library</RouterLink>, they do provide basic functions needed.</p>
</li>
</ul>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../models/log.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">LoggingService</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">logEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token class-name">String</span> message<span class="token punctuation">,</span>
    required <span class="token class-name">EventType</span> type<span class="token punctuation">,</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token class-name">UnimplementedError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">logException</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> throwable<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token keyword">dynamic</span> stackTrace<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> hint<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token class-name">UnimplementedError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token function">logTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token class-name">Function</span> execute<span class="token punctuation">,</span>
    required <span class="token class-name">TransactionDetails</span> details<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token class-name">UnimplementedError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


