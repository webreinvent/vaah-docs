<template><div><h1 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li>None</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#basetheme">BaseTheme</router-link></li><li><router-link to="#apptheme">AppTheme</router-link><ul><li><router-link to="#app-theme-dart">app_theme.dart</router-link></li><li><router-link to="#how-to-update-the-color-for-a-specific-key">How to update the color for a specific key</router-link></li><li><router-link to="#how-to-add-a-color">How to add a color</router-link></li><li><router-link to="#how-to-access-any-color-property">How to access any color property</router-link></li></ul></li></ul></nav>
<h2 id="basetheme" tabindex="-1"><a class="header-anchor" href="#basetheme" aria-hidden="true">#</a> BaseTheme</h2>
<p><code v-pre>BaseTheme</code> is a core component for managing themes in VaahFlutter, but we don't use BaseTheme class directly. We use <a href="#apptheme"><code v-pre>AppTheme</code></a> class to manage the theme in our app.</p>
<p>BaseTheme contains the <code v-pre>colors</code> property (Map&lt;String, MaterialColor&gt;), with default values for the below-listed keys.</p>
<table>
<thead>
<tr>
<th>No</th>
<th>key name</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.</td>
<td>primary</td>
</tr>
<tr>
<td>2.</td>
<td>info</td>
</tr>
<tr>
<td>3.</td>
<td>success</td>
</tr>
<tr>
<td>4.</td>
<td>warning</td>
</tr>
<tr>
<td>5.</td>
<td>danger</td>
</tr>
<tr>
<td>6.</td>
<td>white</td>
</tr>
<tr>
<td>7.</td>
<td>black</td>
</tr>
</tbody>
</table>
<p>Default swatches</p>
<img :src="$withBase('/images/flutter/default-color-swatches.png')" alt="default-color-swatches">
<h2 id="apptheme" tabindex="-1"><a class="header-anchor" href="#apptheme" aria-hidden="true">#</a> AppTheme</h2>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li>AppTheme depends on BaseTheme</li>
</ul>
</div>
<p>AppTheme is used to manage the theme in our app. AppTheme needs to be initialized first before use, so we initialize it using <code v-pre>AppTheme.init()</code> in <RouterLink to="/vaahflutter/app.md/#base-controller">BaseController</RouterLink></p>
<h3 id="app-theme-dart" tabindex="-1"><a class="header-anchor" href="#app-theme-dart" aria-hidden="true">#</a> app_theme.dart</h3>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'base/base_theme.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">AppTheme</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">></span></span> colors <span class="token operator">=</span> <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">BaseTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token keyword">const</span> panelBorder <span class="token operator">=</span> <span class="token class-name">Border</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> int precision <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> double extraSmall <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> double small <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> double medium <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> double large <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> double extraLarge <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Color swatch</p>
<p>The developer can generate a color swatch from <a href="https://colors.eva.design/" target="_blank" rel="noopener noreferrer">https://colors.eva.design/<ExternalLinkIcon/></a></p>
</div>
<h3 id="how-to-update-the-color-for-a-specific-key" tabindex="-1"><a class="header-anchor" href="#how-to-update-the-color-for-a-specific-key" aria-hidden="true">#</a> How to update the color for a specific key</h3>
<p>In the init() method you can simply assign a color value for the key you want to override. Check the below snippet.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'primary'</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> pink <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFFFF1F6A</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFD4D2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFD4D2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFA5A8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF788B</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF577E</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF1F6A</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFDB166B</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFB70F68</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF930960</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF7A055A</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-add-a-color" tabindex="-1"><a class="header-anchor" href="#how-to-add-a-color" aria-hidden="true">#</a> How to add a color</h3>
<p>In the init() method you can simply assign a color value for the key you want to add. Check the below snippet.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'pink'</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> pink <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFFFF1F6A</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFD4D2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFD4D2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFA5A8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF788B</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF577E</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF1F6A</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFDB166B</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFB70F68</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF930960</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF7A055A</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-access-any-color-property" tabindex="-1"><a class="header-anchor" href="#how-to-access-any-color-property" aria-hidden="true">#</a> How to access any color property</h3>
<p>Add import in your dart file</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:example/vaahextendflutter/app_theme.dart'</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Access the color key by calling the colors property on AppTheme class. E.g. if you want to access the primary key use</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'primary'</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


