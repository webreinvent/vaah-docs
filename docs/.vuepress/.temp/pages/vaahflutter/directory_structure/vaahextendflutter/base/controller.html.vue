<template><div><h1 id="base-controller" tabindex="-1"><a class="header-anchor" href="#base-controller" aria-hidden="true">#</a> Base Controller</h1>
<nav class="table-of-contents"><ul></ul></nav>
<p>Base Controller is used for initializing all core functionalities needed by <code v-pre>vaahextendflutter</code>. We need to initialize base controller in <RouterLink to="/vaahflutter/essentials/app.html#main-function">main function</RouterLink>.</p>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<p>package <code v-pre>get_storage</code></p>
</div>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  required <span class="token class-name">Widget</span> app<span class="token punctuation">,</span>
  <span class="token class-name">FirebaseOptions</span><span class="token operator">?</span> firebaseOptions<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token comment">// Storage initialization to store some properties locally</span>
  <span class="token keyword">await</span> <span class="token class-name">GetStorage</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Environment initialization</span>
  <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">setEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">EnvironmentConfig</span> config <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Initialization of Firebase and Services</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>firebaseOptions <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token class-name">Firebase</span><span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>
      options<span class="token punctuation">:</span> firebaseOptions<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DynamicLinks</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Other Local Initializations (Depends on your app)</span>
  <span class="token class-name">AppTheme</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Api</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Sentry Initialization (And/ Or) Running main app</span>
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
    <span class="token class-name">Widget</span> child <span class="token operator">=</span> app<span class="token punctuation">;</span>
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
    <span class="token comment">// Running main app</span>
    <span class="token function">runApp</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Running main app when sentry config is not there</span>
    <span class="token function">runApp</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


