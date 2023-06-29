<template><div><h1 id="performance-monitoring" tabindex="-1"><a class="header-anchor" href="#performance-monitoring" aria-hidden="true">#</a> Performance Monitoring</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li><a href="https://pub.dev/packages/sentry_flutter" target="_blank" rel="noopener noreferrer">sentry_flutter<ExternalLinkIcon/></a></li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#use-cases">Use cases</router-link><ul><li><router-link to="#auto-performance-tracking">Auto Performance Tracking</router-link></li><li><router-link to="#startup-time">Startup time</router-link></li><li><router-link to="#capture-user-interactions">Capture User Interactions</router-link></li><li><router-link to="#capture-assets-performance">Capture Assets Performance</router-link></li><li><router-link to="#observe-transactions">Observe Transactions</router-link></li><li><router-link to="#record-slow-and-frozen-frames-yet-to-implement">Record Slow and Frozen frames (Yet to implement)</router-link></li></ul></li><li><router-link to="#configuration">Configuration</router-link></li><li><router-link to="#how-to-use">How to use?</router-link></li><li><router-link to="#where-is-the-code-that-handles-this">Where is the code that handles this?</router-link></li></ul></nav>
<h2 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use cases</h2>
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
<h3 id="auto-performance-tracking" tabindex="-1"><a class="header-anchor" href="#auto-performance-tracking" aria-hidden="true">#</a> Auto Performance Tracking</h3>
<ul>
<li>When <code v-pre>enableAutoPerformanceTracking</code> flag is set to <code v-pre>false</code> nothing will be monitored.</li>
</ul>
<h3 id="startup-time" tabindex="-1"><a class="header-anchor" href="#startup-time" aria-hidden="true">#</a> Startup time</h3>
<ul>
<li>
<p>To record cold startup time and warm startup time. Set <code v-pre>autoAppStart</code> to <code v-pre>true</code>.</p>
</li>
<li>
<p>Provides insight into how long your application takes to launch.</p>
</li>
<li>
<p>Startup time is attached to first transaction that happens in app, so if app has no transaction nothing will be recorded. Learn about transactions <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html#log-transactions">here</RouterLink>.</p>
</li>
</ul>
<h3 id="capture-user-interactions" tabindex="-1"><a class="header-anchor" href="#capture-user-interactions" aria-hidden="true">#</a> Capture User Interactions</h3>
<ul>
<li>
<p>To capture User Interactions set <code v-pre>enableUserInteractionTracing</code> to <code v-pre>true</code>.</p>
</li>
<li>
<p>The UI instrumentation, once enabled, captures transactions and adds breadcrumbs for a set of different user interactions, which include clicks, long clicks, taps, and so on. The SDK composes the transaction name from the key of the Widget that captured the user interaction (for example, login_button). The transaction operation is set to ui.action.click.</p>
</li>
<li>
<p>If the view doesn't have the key assigned, the transaction and the breadcrumb won't be captured because it can't be uniquely identified otherwise.</p>
</li>
<li>
<p>The key value should be unique across the whole application because the transactions are grouped by its name.</p>
</li>
</ul>
<h3 id="capture-assets-performance" tabindex="-1"><a class="header-anchor" href="#capture-assets-performance" aria-hidden="true">#</a> Capture Assets Performance</h3>
<ul>
<li>
<p>To capture Assets Performance set <code v-pre>enableAssetsInstrumentation</code> to <code v-pre>true</code>.</p>
</li>
<li>
<p>provides insight into how long your app takes to load its assets, such as files.</p>
</li>
</ul>
<h3 id="observe-transactions" tabindex="-1"><a class="header-anchor" href="#observe-transactions" aria-hidden="true">#</a> Observe Transactions</h3>
<ul>
<li>Learn more about transactions <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.html#log-transactions">here</RouterLink>.</li>
</ul>
<h3 id="record-slow-and-frozen-frames-yet-to-implement" tabindex="-1"><a class="header-anchor" href="#record-slow-and-frozen-frames-yet-to-implement" aria-hidden="true">#</a> Record Slow and Frozen frames (Yet to implement)</h3>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
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
<p>To record cold startup time and warm startup time set <code v-pre>autoAppStart</code> to <code v-pre>true</code>, check <a href="#startup-time">this</a> section.</p>
</li>
<li>
<p>To record User Interaction set <code v-pre>enableUserInteractionTracing</code> to <code v-pre>true</code>, check <a href="#capture-user-interactions">this</a> section.</p>
</li>
<li>
<p>To enable assets instrumentation set <code v-pre>enableAssetsInstrumentation</code> to <code v-pre>true</code>.</p>
</li>
</ul>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use?</h2>
<p>Just toogle environment flags to enable/ disable monitoring.</p>
<h2 id="where-is-the-code-that-handles-this" tabindex="-1"><a class="header-anchor" href="#where-is-the-code-that-handles-this" aria-hidden="true">#</a> Where is the code that handles this?</h2>
<p>base_controller handles everything. So if developer is building on our app or has similar code of <code v-pre>base_controller</code> in their <code v-pre>core_controller or main</code> then they are good to go.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">final</span> <span class="token class-name">EnvironmentConfig</span> config <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> config<span class="token punctuation">.</span>sentryConfig <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>dsn<span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token class-name">SentryFlutter</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> options
        <span class="token punctuation">.</span><span class="token punctuation">.</span>dsn <span class="token operator">=</span> config<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>dsn
        <span class="token punctuation">.</span><span class="token punctuation">.</span>autoAppStart <span class="token operator">=</span> config<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>autoAppStart
        <span class="token punctuation">.</span><span class="token punctuation">.</span>tracesSampleRate <span class="token operator">=</span> config<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>tracesSampleRate
        <span class="token punctuation">.</span><span class="token punctuation">.</span>enableAutoPerformanceTracking <span class="token operator">=</span> config<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>enableAutoPerformanceTracking
        <span class="token punctuation">.</span><span class="token punctuation">.</span>enableUserInteractionTracing <span class="token operator">=</span> config<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>enableUserInteractionTracing
        <span class="token punctuation">.</span><span class="token punctuation">.</span>environment <span class="token operator">=</span> config<span class="token punctuation">.</span>envType<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Widget</span> child <span class="token operator">=</span> app<span class="token punctuation">;</span> <span class="token comment">// Main (Material) App</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>enableUserInteractionTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        child <span class="token operator">=</span> <span class="token class-name">SentryUserInteractionWidget</span><span class="token punctuation">(</span>
            child<span class="token punctuation">:</span> child<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>enableAssetsInstrumentation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        child <span class="token operator">=</span> <span class="token class-name">DefaultAssetBundle</span><span class="token punctuation">(</span>
            bundle<span class="token punctuation">:</span> <span class="token class-name">SentryAssetBundle</span><span class="token punctuation">(</span>
                enableStructuredDataTracing<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> child<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">runApp</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">runApp</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see depending on environment variables we apply different performance monitoring mechanisms.</p>
<p>So to set those environment variables you need to pass something like shown below</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>sentryConfig<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">SentryConfig</span><span class="token punctuation">(</span>
    dsn<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span>
    enableAutoPerformanceTracking<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    autoAppStart<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    enableUserInteractionTracing<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    enableAssetsInstrumentation<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    tracesSampleRate<span class="token punctuation">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Learn more about those environment variables <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/env.html">here</RouterLink>.</p>
</div></template>


