<template><div><h1 id="container-with-rounded-border" tabindex="-1"><a class="header-anchor" href="#container-with-rounded-border" aria-hidden="true">#</a> Container With Rounded Border</h1>
<nav class="table-of-contents"><ul><li><router-link to="#how-to-use">How to use?</router-link></li><li><router-link to="#source-code">Source code</router-link></li></ul></nav>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use?</h2>
<p>child parameter is mendatory.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">const</span> <span class="token class-name">ContainerWithRoundedBorder</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Hello'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>change borderRadius.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">const</span> <span class="token class-name">ContainerWithRoundedBorder</span><span class="token punctuation">(</span>
    borderRadius<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Hello'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>change background color of container.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">final</span> <span class="token class-name">ContainerWithRoundedBorder</span><span class="token punctuation">(</span>
    color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>pink<span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Hello'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>change container padding.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">const</span> <span class="token class-name">ContainerWithRoundedBorder</span><span class="token punctuation">(</span>
    padding<span class="token punctuation">:</span> allPadding16<span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Hello'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>change container height and width.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">const</span> <span class="token class-name">ContainerWithRoundedBorder</span><span class="token punctuation">(</span>
    height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Hello'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:team/vaahextendflutter/helpers/constants.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ContainerWithRoundedBorder</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">EdgeInsets</span> padding<span class="token punctuation">;</span>
  <span class="token keyword">final</span> double<span class="token operator">?</span> width<span class="token punctuation">;</span>
  <span class="token keyword">final</span> double<span class="token operator">?</span> height<span class="token punctuation">;</span>
  <span class="token keyword">final</span> double borderRadius<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span> color<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Widget</span> child<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">ContainerWithRoundedBorder</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>padding <span class="token operator">=</span> allPadding24<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>borderRadius <span class="token operator">=</span> defaultPadding<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
      width<span class="token punctuation">:</span> width<span class="token punctuation">,</span>
      height<span class="token punctuation">:</span> height<span class="token punctuation">,</span>
      padding<span class="token punctuation">:</span> padding<span class="token punctuation">,</span>
      decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
        borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span>borderRadius<span class="token punctuation">)</span><span class="token punctuation">,</span>
        color<span class="token punctuation">:</span> color<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> child<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


