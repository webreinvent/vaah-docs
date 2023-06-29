<template><div><h1 id="debug-panel" tabindex="-1"><a class="header-anchor" href="#debug-panel" aria-hidden="true">#</a> Debug panel</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li>This panel uses EnvironmentConfig, thus depending on the env.dart file.</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#make-the-panel-visible-on-a-specific-screen">Make the panel visible on a specific screen</router-link></li><li><router-link to="#make-the-panel-visible-on-every-screen-using-central-implementation">Make the panel visible on every screen using central implementation.</router-link></li></ul></nav>
<img height="512" :src="$withBase('/images/flutter/debug-panel.gif')" alt="debug-panel">
<p>Debug panel will be visible only if <code v-pre>showDebugPanel</code> is set to <code v-pre>true</code> for <code v-pre>EnvironmentConfig</code> in the <code v-pre>env.dart</code> file. You can change the color of the tag by setting the <code v-pre>debugPanelColor</code> variable for your EnvironmentConfig.</p>
<div class="custom-container danger"><p class="custom-container-title">NOTE:</p>
<p>Remember showDebugPanel for production should always be <code v-pre>false</code> in the Environment configuration in the <code v-pre>env.dart</code> file.</p>
</div>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code>  <span class="token string-literal"><span class="token string">'production'</span></span><span class="token punctuation">:</span> defaultConfig<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    showDebugPanel<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="make-the-panel-visible-on-a-specific-screen" tabindex="-1"><a class="header-anchor" href="#make-the-panel-visible-on-a-specific-screen" aria-hidden="true">#</a> Make the panel visible on a specific screen</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">final</span> _navigatorKey <span class="token operator">=</span> <span class="token class-name">GlobalKey</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">NavigatorState</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">MyPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DebugWidget</span><span class="token punctuation">(</span>
        navigatorKey<span class="token punctuation">:</span> _navigatorKey<span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="make-the-panel-visible-on-every-screen-using-central-implementation" tabindex="-1"><a class="header-anchor" href="#make-the-panel-visible-on-every-screen-using-central-implementation" aria-hidden="true">#</a> Make the panel visible on every screen using central implementation.</h2>
<div class="custom-container tip"><p class="custom-container-title">NOTE:</p>
<p>You have to write the below code in MaterialApp, and that will show the tag panel on each screen. You don't have to wrap any other screen/ widget, or you don't have to extend any screen/widget with DebugWidget.</p>
</div>
<p>In the file containing the material app paste this code after imports</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">final</span> _navigatorKey <span class="token operator">=</span> <span class="token class-name">GlobalKey</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">NavigatorState</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the material app paste, this code and panel will be visible on all pages.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
  builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">Widget</span><span class="token operator">?</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DebugWidget</span><span class="token punctuation">(</span>
      navigatorKey<span class="token punctuation">:</span> _navigatorKey<span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> child<span class="token operator">!</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


