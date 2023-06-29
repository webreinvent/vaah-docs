<template><div><h1 id="sentry-logging-service" tabindex="-1"><a class="header-anchor" href="#sentry-logging-service" aria-hidden="true">#</a> Sentry Logging Service</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li>
<p><a href="https://pub.dev/packages/sentry_flutter" target="_blank" rel="noopener noreferrer">sentry_flutter<ExternalLinkIcon/></a></p>
</li>
<li>
<p>implements LoggingService</p>
</li>
</ul>
</div>
<div class="custom-container danger"><p class="custom-container-title">Developer Guide</p>
<ul>
<li>Developer should never use this service directly, use <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html">Logging Library</RouterLink> instead.</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#sentryloggingservice">SentryLoggingService</router-link></li><li><router-link to="#configuration">Configuration</router-link></li><li><router-link to="#source-code">Source code</router-link></li></ul></nav>
<h2 id="sentryloggingservice" tabindex="-1"><a class="header-anchor" href="#sentryloggingservice" aria-hidden="true">#</a> SentryLoggingService</h2>
<ul>
<li>
<p>Implements <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/logging_service.html">LoggingService</RouterLink>.</p>
</li>
<li>
<p>Provides methods which implements sentry services for event, exception, and transaction.</p>
</li>
</ul>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
<ul>
<li>
<p>To configure sentry for your project you just have to pass sentryConfig in <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/env.html">environment config</RouterLink>.</p>
<ul>
<li>
<p>You will have to add sentry dsn in sentryConfig.</p>
</li>
<li>
<p>And you can configure SampleRate to trace uncaught errors. Value of <code v-pre>tracesSampleRate</code> (in <code v-pre>sentryConfig</code>) can be between 0 and 1. if value of <code v-pre>tracesSampleRate</code> is <code v-pre>0.4</code> then it will record 40% of uncaught errors, if it's <code v-pre>1</code> it will record 100% of uncaught errors.</p>
</li>
</ul>
</li>
<li>
<p>Check <a href="https://youtu.be/LWc67Vja5YA" target="_blank" rel="noopener noreferrer">this<ExternalLinkIcon/></a> video for, how to get config values.</p>
</li>
<li>
<p>Check this also for other <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html">sentry integration (PERFORMANCE)</RouterLink>.</p>
</li>
</ul>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:sentry_flutter/sentry_flutter.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./logging_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../models/log.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SentryLoggingService</span> <span class="token keyword">implements</span> <span class="token class-name">LoggingService</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">logEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token class-name">String</span> message<span class="token punctuation">,</span>
    <span class="token class-name">SentryLevel</span><span class="token operator">?</span> level<span class="token punctuation">,</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">SentryEvent</span> event <span class="token operator">=</span> <span class="token class-name">SentryEvent</span><span class="token punctuation">(</span>message<span class="token punctuation">:</span> <span class="token class-name">SentryMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span> level<span class="token punctuation">:</span> level<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Sentry</span><span class="token punctuation">.</span><span class="token function">captureEvent</span><span class="token punctuation">(</span>
      event<span class="token punctuation">,</span>
      hint<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">logException</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> throwable<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token keyword">dynamic</span> stackTrace<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> hint<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Sentry</span><span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>throwable<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span> hint<span class="token punctuation">:</span> hint<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">logTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token class-name">Function</span> execute<span class="token punctuation">,</span>
    required <span class="token class-name">TransactionDetails</span> details<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">ISentrySpan</span> transaction <span class="token operator">=</span> <span class="token class-name">Sentry</span><span class="token punctuation">.</span><span class="token function">startTransaction</span><span class="token punctuation">(</span>details<span class="token punctuation">.</span>name<span class="token punctuation">,</span> details<span class="token punctuation">.</span>operation<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> transaction<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


