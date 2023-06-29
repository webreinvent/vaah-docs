<template><div><h1 id="logging-library" tabindex="-1"><a class="header-anchor" href="#logging-library" aria-hidden="true">#</a> Logging library</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li>Log depends <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/env.html">EnvironmentConfig</RouterLink>.</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#overview">Overview</router-link></li><li><router-link to="#use-cases">Use cases</router-link></li><li><router-link to="#log-types">Log types</router-link></li><li><router-link to="#how-to-use">How to use</router-link><ul><li><router-link to="#call-static-methods-of-the-log-class-to-log-the-events">Call static methods of the Log class to log the events.</router-link></li><li><router-link to="#log-transactions">Log Transactions</router-link></li><li><router-link to="#to-print-data-as-argument-pass-the-data">To print data, as argument pass the data</router-link></li><li><router-link to="#you-can-disable-local-and-cloud-logging-for-specific-log">You can disable local and cloud logging for specific log</router-link></li><li><router-link to="#for-exception-you-can-pass-two-extra-parameters-stacktrace-and-hint">For exception you can pass two extra parameters: stackTrace and hint</router-link></li><li><router-link to="#how-to-add-new-cloud-service">How to add new cloud service?</router-link></li></ul></li><li><router-link to="#enviroment-variables-which-control-logging">Enviroment variables which control logging</router-link></li><li><router-link to="#logging-library-dart-source-code">logging_library.dart Source code:</router-link></li></ul></nav>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<ul>
<li>This is the central logging library which handles cloud (e.g. sentry, crashanalytics) and local (e.g. Console/Terminal and Local Files For Device) Logs.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Cloud logging services</p>
<ul>
<li>
<p>As of now we have implemented <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html">Sentry</RouterLink> to log and measure performance. Any other service is not available yet. To setup Sentry please check <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html#configuration">this</RouterLink>.</p>
</li>
<li>
<p>You can check out more details about it here: <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html">Sentry</RouterLink> and <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html">Performance</RouterLink></p>
</li>
<li>
<p>Also to enable sentry; developer will have to pass <code v-pre>sentryConfig</code> in <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/env.html">environment</RouterLink>.</p>
</li>
</ul>
</div>
<ul>
<li>So developer should never use individual service in their application, they should always use Logging library for logging any kind of content.</li>
</ul>
<img :src="$withBase('/images/flutter/components/log/hierarchy.png')" alt="hierarchy">
<ul>
<li>To setup Sentry please check <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html#configuration">this</RouterLink>.</li>
</ul>
<h2 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use cases</h2>
<div class="custom-container tip"><p class="custom-container-title">use cases</p>
<ul>
<li>To easily log content on cloud</li>
<li>To easily add another cloud logging service</li>
<li>To log transactions. e.g. I want to measure and log time of an api call</li>
<li>To see formatted (prettier) objects in the console easily readable by the human eye</li>
<li>To easily differentiate between different kinds of events.</li>
</ul>
</div>
<h2 id="log-types" tabindex="-1"><a class="header-anchor" href="#log-types" aria-hidden="true">#</a> Log types</h2>
<p>Currently, our logs are of six types.</p>
<ol>
<li>log</li>
<li>info</li>
<li>success</li>
<li>warning</li>
<li>exception</li>
<li>transaction</li>
</ol>
<p>For Local Logs: Different types will print logs in different colors. the log will be in grey, info in blue, success in green, warning in yellow, and exception will be in red.</p>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2>
<h3 id="call-static-methods-of-the-log-class-to-log-the-events" tabindex="-1"><a class="header-anchor" href="#call-static-methods-of-the-log-class-to-log-the-events" aria-hidden="true">#</a> Call static methods of the Log class to log the events.</h3>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Log"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"info"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"success"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"warning"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// code snippet</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="log-transactions" tabindex="-1"><a class="header-anchor" href="#log-transactions" aria-hidden="true">#</a> Log Transactions</h3>
<p>When developer wants to measure performance of different operations they can use <code v-pre>logTransaction</code> funtion. Where developer will have to pass operation for which they wants to log as <code v-pre>execute</code> argument. e.g. API send receive requests, getting a file from local storage and parsing data, processing huge data, search queries, etc.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">logTransaction</span><span class="token punctuation">(</span>
  execute<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  details<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TransactionDetails</span><span class="token punctuation">(</span>
    name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'idle transaction'</span></span><span class="token punctuation">,</span>
    operation<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'idle'</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">logTransaction</span><span class="token punctuation">(</span>
  execute<span class="token punctuation">:</span> <span class="token class-name">Api</span><span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'api.vaah.dev'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  details<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TransactionDetails</span><span class="token punctuation">(</span>
    name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'get root route of vaah api'</span></span><span class="token punctuation">,</span>
    operation<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'read'</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="to-print-data-as-argument-pass-the-data" tabindex="-1"><a class="header-anchor" href="#to-print-data-as-argument-pass-the-data" aria-hidden="true">#</a> To print data, as argument pass the data</h3>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span></span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-literal"><span class="token string">"first_key"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"value"</span></span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">"second_key"</span></span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">"key"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"value"</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">"key"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"updated_value"</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<img :src="$withBase('/images/flutter/components/log/prettier-log.png')" alt="Output">
<h3 id="you-can-disable-local-and-cloud-logging-for-specific-log" tabindex="-1"><a class="header-anchor" href="#you-can-disable-local-and-cloud-logging-for-specific-log" aria-hidden="true">#</a> You can disable local and cloud logging for specific log</h3>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'exception'</span></span><span class="token punctuation">,</span> disableLocalLogging<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'log'</span></span><span class="token punctuation">,</span> disableCloudLogging<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="for-exception-you-can-pass-two-extra-parameters-stacktrace-and-hint" tabindex="-1"><a class="header-anchor" href="#for-exception-you-can-pass-two-extra-parameters-stacktrace-and-hint" aria-hidden="true">#</a> For exception you can pass two extra parameters: <code v-pre>stackTrace</code> and <code v-pre>hint</code></h3>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>
        error<span class="token punctuation">,</span>
        stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
        hint<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'The exception is caught in ---'</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-add-new-cloud-service" tabindex="-1"><a class="header-anchor" href="#how-to-add-new-cloud-service" aria-hidden="true">#</a> How to add new cloud service?</h3>
<h4 id="step-1-create-a-service-which-implements-loggingservice-example-of-implemented-service-sentry" tabindex="-1"><a class="header-anchor" href="#step-1-create-a-service-which-implements-loggingservice-example-of-implemented-service-sentry" aria-hidden="true">#</a> Step 1: create a service which implements <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/logging_service.html">LoggingService</RouterLink>, example of implemented service: <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html">Sentry</RouterLink></h4>
<h4 id="step-2-add-that-service-in-services-array-in-logging-library-dart" tabindex="-1"><a class="header-anchor" href="#step-2-add-that-service-in-services-array-in-logging-library-dart" aria-hidden="true">#</a> Step 2: Add that service in _services array, in <a href="#logging-library-dart-source-code">logging_library.dart</a></h4>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Type</span><span class="token punctuation">></span></span> _services <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name">SentryLoggingService</span><span class="token punctuation">,</span>
    <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="step-3-call-relavent-functions-of-that-new-service-in-logevent-and-exception-switch-cases" tabindex="-1"><a class="header-anchor" href="#step-3-call-relavent-functions-of-that-new-service-in-logevent-and-exception-switch-cases" aria-hidden="true">#</a> Step 3: Call relavent functions of that new service in <code v-pre>_logEvent</code> and <code v-pre>exception</code>, <a href="#logging-library-dart-source-code">switch cases</a></h4>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">_logEvent</span><span class="token punctuation">(</span>
    <span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
    <span class="token class-name">EventType</span><span class="token operator">?</span> type<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> service <span class="token keyword">in</span> _services<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>service<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token class-name">SentryLoggingService</span><span class="token punctuation">:</span>
          <span class="token class-name">SentryLoggingService</span><span class="token punctuation">.</span><span class="token function">logEvent</span><span class="token punctuation">(</span>
            message<span class="token punctuation">:</span> text<span class="token punctuation">,</span>
            level<span class="token punctuation">:</span> type<span class="token operator">?</span><span class="token punctuation">.</span>toSentryLevel<span class="token punctuation">,</span>
            data<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">:</span>
          <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">.</span><span class="token function">logEvent</span><span class="token punctuation">(</span>
            message<span class="token punctuation">:</span> text<span class="token punctuation">,</span>
            type<span class="token punctuation">:</span> type<span class="token punctuation">,</span>
            data<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exception</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> throwable<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> stackTrace<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> hint<span class="token punctuation">,</span>
    bool disableLocalLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    bool disableCloudLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">EnvironmentConfig</span> config <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableLocalLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableLocalLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">danger</span><span class="token punctuation">(</span>throwable<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableCloudLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableCloudLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> hintWithData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-literal"><span class="token string">'hint'</span></span><span class="token punctuation">:</span> hint<span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">:</span> data<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> service <span class="token keyword">in</span> _services<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>service<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token class-name">SentryLoggingService</span><span class="token punctuation">:</span>
            <span class="token class-name">SentryLoggingService</span><span class="token punctuation">.</span><span class="token function">logException</span><span class="token punctuation">(</span>
              throwable<span class="token punctuation">,</span>
              stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
              hint<span class="token punctuation">:</span> hintWithData<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">:</span>
            <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">.</span><span class="token function">logException</span><span class="token punctuation">(</span>
              throwable<span class="token punctuation">,</span>
              stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
              hint<span class="token punctuation">:</span> hintWithData<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token keyword">default</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enviroment-variables-which-control-logging" tabindex="-1"><a class="header-anchor" href="#enviroment-variables-which-control-logging" aria-hidden="true">#</a> Enviroment variables which control logging</h2>
<ul>
<li>depending on environment variables <code v-pre>enableLocalLogs</code> and <code v-pre>enableCloudLogs</code>, the content is logged. e.g. if <code v-pre>enableLocalLogs</code> in the <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/env.html">environment</RouterLink> is set to <code v-pre>false</code> then no local logs will be printed. if <code v-pre>enableCloudLogs</code> is set to <code v-pre>false</code> then no local logs will be printed.</li>
</ul>
<h2 id="logging-library-dart-source-code" tabindex="-1"><a class="header-anchor" href="#logging-library-dart-source-code" aria-hidden="true">#</a> <code v-pre>logging_library.dart</code> Source code:</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./_cloud/firebase_logging_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./_cloud/logging_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./_cloud/sentry_logging_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./_local/console_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../env.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Type</span><span class="token punctuation">></span></span> _services <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name">SentryLoggingService</span><span class="token punctuation">,</span>
    <span class="token comment">// FirebaseLoggingService,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
    bool disableLocalLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    bool disableCloudLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">EnvironmentConfig</span> config <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableLocalLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableLocalLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableCloudLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableCloudLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_logEvent</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> data<span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token class-name">EventType</span><span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">info</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
    bool disableLocalLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    bool disableCloudLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">EnvironmentConfig</span> config <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableLocalLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableLocalLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableCloudLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableCloudLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_logEvent</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> data<span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token class-name">EventType</span><span class="token punctuation">.</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">success</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
    bool disableLocalLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    bool disableCloudLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">EnvironmentConfig</span> config <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableLocalLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableLocalLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableCloudLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableCloudLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_logEvent</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> data<span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token class-name">EventType</span><span class="token punctuation">.</span>success<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">warning</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
    bool disableLocalLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    bool disableCloudLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">EnvironmentConfig</span> config <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableLocalLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableLocalLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableCloudLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableCloudLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_logEvent</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> data<span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token class-name">EventType</span><span class="token punctuation">.</span>warning<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exception</span><span class="token punctuation">(</span>
    <span class="token keyword">dynamic</span> throwable<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> stackTrace<span class="token punctuation">,</span>
    <span class="token keyword">dynamic</span> hint<span class="token punctuation">,</span>
    bool disableLocalLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    bool disableCloudLogging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">EnvironmentConfig</span> config <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableLocalLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableLocalLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">danger</span><span class="token punctuation">(</span>throwable<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>enableCloudLogs <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>disableCloudLogging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> hintWithData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-literal"><span class="token string">'hint'</span></span><span class="token punctuation">:</span> hint<span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">:</span> data<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> service <span class="token keyword">in</span> _services<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>service<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token class-name">SentryLoggingService</span><span class="token punctuation">:</span>
            <span class="token class-name">SentryLoggingService</span><span class="token punctuation">.</span><span class="token function">logException</span><span class="token punctuation">(</span>
              throwable<span class="token punctuation">,</span>
              stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
              hint<span class="token punctuation">:</span> hintWithData<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">:</span>
            <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">.</span><span class="token function">logException</span><span class="token punctuation">(</span>
              throwable<span class="token punctuation">,</span>
              stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
              hint<span class="token punctuation">:</span> hintWithData<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token keyword">default</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">_logEvent</span><span class="token punctuation">(</span>
    <span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span><span class="token operator">?</span> data<span class="token punctuation">,</span>
    <span class="token class-name">EventType</span><span class="token operator">?</span> type<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> service <span class="token keyword">in</span> _services<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>service<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token class-name">SentryLoggingService</span><span class="token punctuation">:</span>
          <span class="token class-name">SentryLoggingService</span><span class="token punctuation">.</span><span class="token function">logEvent</span><span class="token punctuation">(</span>
            message<span class="token punctuation">:</span> text<span class="token punctuation">,</span>
            level<span class="token punctuation">:</span> type<span class="token operator">?</span><span class="token punctuation">.</span>toSentryLevel<span class="token punctuation">,</span>
            data<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">:</span>
          <span class="token class-name">FirebaseLoggingService</span><span class="token punctuation">.</span><span class="token function">logEvent</span><span class="token punctuation">(</span>
            message<span class="token punctuation">:</span> text<span class="token punctuation">,</span>
            type<span class="token punctuation">:</span> type<span class="token punctuation">,</span>
            data<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


