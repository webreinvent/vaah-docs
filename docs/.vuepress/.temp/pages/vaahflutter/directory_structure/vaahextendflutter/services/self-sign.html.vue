<template><div><h1 id="self-sign" tabindex="-1"><a class="header-anchor" href="#self-sign" aria-hidden="true">#</a> Self-Sign</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li>dart:io</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#when-to-use">When to use?</router-link></li><li><router-link to="#how-to-use">How to use?</router-link></li><li><router-link to="#source-code">Source code</router-link></li></ul></nav>
<h2 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a> When to use?</h2>
<p>If you are not using ssl secured api end-point and you want to fake that you are using ssl by modifying certificate.</p>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use?</h2>
<p>import self-sign.dart in your main file.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:/vaahextendflutter/services/api_self_signed.dart'</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>override http client global before run app</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">HttpOverrides</span><span class="token punctuation">.</span>global <span class="token operator">=</span> <span class="token class-name">SelfSignedHttps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:io'</span></span><span class="token punctuation">;</span>

<span class="token comment">/// How to use: override http client global before run app</span>
<span class="token comment">/// void main() {</span>
<span class="token comment">///   HttpOverrides.global = SelfSignedHttps();</span>
<span class="token comment">///   runApp(MyApp());</span>
<span class="token comment">/// }</span>

<span class="token keyword">class</span> <span class="token class-name">SelfSignedHttps</span> <span class="token keyword">extends</span> <span class="token class-name">HttpOverrides</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">HttpClient</span> <span class="token function">createHttpClient</span><span class="token punctuation">(</span><span class="token class-name">SecurityContext</span><span class="token operator">?</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">HttpClient</span> client <span class="token operator">=</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">createHttpClient</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    client<span class="token punctuation">.</span>badCertificateCallback <span class="token operator">=</span> <span class="token punctuation">(</span>
      <span class="token class-name">X509Certificate</span> cert<span class="token punctuation">,</span>
      <span class="token class-name">String</span> host<span class="token punctuation">,</span>
      int port<span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
        <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> client<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


