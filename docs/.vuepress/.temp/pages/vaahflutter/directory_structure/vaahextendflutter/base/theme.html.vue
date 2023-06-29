<template><div><h1 id="base-theme" tabindex="-1"><a class="header-anchor" href="#base-theme" aria-hidden="true">#</a> Base Theme</h1>
<nav class="table-of-contents"><ul></ul></nav>
<p><code v-pre>BaseTheme</code> is a core component for managing themes in VaahFlutter, but we don't use BaseTheme class directly. We use <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/apptheme.html"><code v-pre>AppTheme</code></RouterLink> class to manage the theme in our app.</p>
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
<p><code v-pre>base_theme.dart</code></p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">BaseTheme</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">></span></span> colors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">'primary'</span></span><span class="token punctuation">:</span> _primary<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">'info'</span></span><span class="token punctuation">:</span> _info<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">:</span> _success<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">'warning'</span></span><span class="token punctuation">:</span> _warning<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">:</span> _danger<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">'white'</span></span><span class="token punctuation">:</span> _white<span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">'black'</span></span><span class="token punctuation">:</span> _black<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> _primary <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFF3366FF</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFD6E4FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFD6E4FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFADC8FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF84A9FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF6690FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF3366FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF254EDB</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF1939B7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF102693</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF091A7A</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> _success <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFF4FB52D</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFE9FBD5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFE9FBD5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFCFF7AD</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFA8E87F</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF81D25B</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF4FB52D</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF369B20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF228216</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF11680E</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF08560B</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> _info <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFF4CA8FF</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFDBF4FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFDBF4FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFB7E7FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF93D5FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF78C4FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF4CA8FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF3783DB</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF2662B7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF184493</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF0E2F7A</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> _warning <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFFFFBF00</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFF7CC</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFF7CC</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFED99</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFE066</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFD33F</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFBF00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFDB9E00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFB77F00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF936300</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF7A4E00</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> _danger <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFFFF382D</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFE5D5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFE5D5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFC4AB</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF9C81</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF7661</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFF382D</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFDB2026</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFB71629</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF930E28</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF7A0828</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> _white <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFFFFFFFF</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFFFFFFF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">MaterialColor</span> _black <span class="token operator">=</span> <span class="token class-name">MaterialColor</span><span class="token punctuation">(</span>
  <span class="token number">0xFF000000</span><span class="token punctuation">,</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token number">50</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFF2F2F2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFF2F2F2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">200</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFE5E5E5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">300</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFFB2B2B2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">400</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF666666</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">500</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">600</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">700</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">800</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">900</span><span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


