<template><div><h1 id="logs-and-performance-monitoring" tabindex="-1"><a class="header-anchor" href="#logs-and-performance-monitoring" aria-hidden="true">#</a> Logs and Performance Monitoring</h1>
<div class="custom-container tip"><p class="custom-container-title">Documentation</p>
<p>For detailed documentation, check this: <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html">logging_library</RouterLink> and <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html">performance_monitoring</RouterLink></p>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#about-logging">About Logging</router-link><ul><li><router-link to="#use-cases">Use cases</router-link></li><li><router-link to="#log-types">Log types</router-link></li><li><router-link to="#how-to-use">How to use</router-link></li></ul></li><li><router-link to="#about-performance">About Performance</router-link><ul><li><router-link to="#use-cases-1">Use cases</router-link></li><li><router-link to="#configuration">Configuration</router-link></li><li><router-link to="#how-to-use-1">How to use</router-link></li></ul></li></ul></nav>
<h2 id="about-logging" tabindex="-1"><a class="header-anchor" href="#about-logging" aria-hidden="true">#</a> About Logging</h2>
<p>Logging library which handles cloud (e.g. sentry, crashanalytics) and local (e.g. Console/Terminal and Local Files For Device) Logs.</p>
<div class="custom-container tip"><p class="custom-container-title">Cloud logging services</p>
<ul>
<li>
<p>As of now we have implemented <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html">Sentry</RouterLink> to log and measure performance. Any other service is not available yet. To setup Sentry please check <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html#configuration">this</RouterLink>.</p>
</li>
<li>
<p>You can check out more details about it here: <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.html">Sentry</RouterLink> and <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html">Performance</RouterLink></p>
</li>
<li>
<p>Also to enable sentry; developer will have to pass <code v-pre>sentryConfig</code> in <RouterLink to="/vaahflutter/essentials/environments.html">environment</RouterLink>.</p>
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
<h3 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use cases</h3>
<div class="custom-container tip"><p class="custom-container-title">use cases</p>
<ul>
<li>To easily log content on cloud</li>
<li>To easily add another cloud logging service</li>
<li>To log transactions. e.g. I want to measure and log time of an api call</li>
<li>To see formatted (prettier) objects in the console easily readable by the human eye</li>
<li>To easily differentiate between different kinds of events.</li>
</ul>
</div>
<h3 id="log-types" tabindex="-1"><a class="header-anchor" href="#log-types" aria-hidden="true">#</a> Log types</h3>
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
<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h3>
<h4 id="call-static-methods-of-the-log-class-to-log-the-events" tabindex="-1"><a class="header-anchor" href="#call-static-methods-of-the-log-class-to-log-the-events" aria-hidden="true">#</a> Call static methods of the Log class to log the events.</h4>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Log"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"info"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"success"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"warning"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// code snippet</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="log-transactions" tabindex="-1"><a class="header-anchor" href="#log-transactions" aria-hidden="true">#</a> Log Transactions</h4>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="to-print-data-as-argument-pass-the-data" tabindex="-1"><a class="header-anchor" href="#to-print-data-as-argument-pass-the-data" aria-hidden="true">#</a> To print data, as argument pass the data</h4>
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
<h4 id="you-can-disable-local-and-cloud-logging-for-specific-log" tabindex="-1"><a class="header-anchor" href="#you-can-disable-local-and-cloud-logging-for-specific-log" aria-hidden="true">#</a> You can disable local and cloud logging for specific log</h4>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'exception'</span></span><span class="token punctuation">,</span> disableLocalLogging<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'log'</span></span><span class="token punctuation">,</span> disableCloudLogging<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="for-exception-you-can-pass-two-extra-parameters-stacktrace-and-hint" tabindex="-1"><a class="header-anchor" href="#for-exception-you-can-pass-two-extra-parameters-stacktrace-and-hint" aria-hidden="true">#</a> For exception you can pass two extra parameters: <code v-pre>stackTrace</code> and <code v-pre>hint</code></h4>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>
        error<span class="token punctuation">,</span>
        stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
        hint<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'The exception is caught in ---'</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="about-performance" tabindex="-1"><a class="header-anchor" href="#about-performance" aria-hidden="true">#</a> About Performance</h2>
<h3 id="use-cases-1" tabindex="-1"><a class="header-anchor" href="#use-cases-1" aria-hidden="true">#</a> Use cases</h3>
<ul>
<li>
<p>To enable/ disable all kind of tracking, switch <code v-pre>enableAutoPerformanceTracking</code></p>
</li>
<li>
<p>Record cold startup time and warm startup time</p>
</li>
<li>
<p>Observe Navigation</p>
</li>
<li>
<p>Capture User Interactions</p>
</li>
<li>
<p>Capture Assets Performance</p>
</li>
<li>
<p>Observe transactions</p>
</li>
<li>
<p>Record Slow and Frozen frames (Yet to implement)</p>
</li>
</ul>
<h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3>
<ul>
<li>
<p>To configure sentry for your project you just have to pass sentryConfig in <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/env.html">environment config</RouterLink>.</p>
</li>
<li>
<p>Check <a href="https://youtu.be/LWc67Vja5YA" target="_blank" rel="noopener noreferrer">this<ExternalLinkIcon/></a> video for, how to get config values.</p>
</li>
<li>
<p>To disable all kind of tracing set <code v-pre>enableAutoPerformanceTracking</code> to <code v-pre>false</code>.</p>
</li>
<li>
<p>To record cold startup time and warm startup time set <code v-pre>autoAppStart</code> to <code v-pre>true</code>, check <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html#startup-time">this</RouterLink> section.</p>
</li>
<li>
<p>To record User Interaction set <code v-pre>enableUserInteractionTracing</code> to <code v-pre>true</code>, check <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.html#capture-user-interactions">this</RouterLink> section.</p>
</li>
<li>
<p>To enable assets instrumentation set <code v-pre>enableAssetsInstrumentation</code> to <code v-pre>true</code>.</p>
</li>
</ul>
<h3 id="how-to-use-1" tabindex="-1"><a class="header-anchor" href="#how-to-use-1" aria-hidden="true">#</a> How to use</h3>
<p>Just toogle environment flags (mentioned above) to enable/ disable monitoring.</p>
</div></template>


