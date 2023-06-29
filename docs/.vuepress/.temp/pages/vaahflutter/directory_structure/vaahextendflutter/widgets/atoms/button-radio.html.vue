<template><div><h1 id="radio-buttons" tabindex="-1"><a class="header-anchor" href="#radio-buttons" aria-hidden="true">#</a> Radio Buttons</h1>
<nav class="table-of-contents"><ul><li><router-link to="#how-to-use">How to use</router-link><ul><li><router-link to="#other-properties-of-buttonradio">Other properties of ButtonRadio</router-link></li></ul></li><li><router-link to="#source-code">Source code</router-link></li></ul></nav>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2>
<p>Let's say I want to create Buttons from array of string.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">const</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> continents <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string-literal"><span class="token string">'Africa'</span></span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'Antarctica'</span></span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'Asia'</span></span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'Australia'</span></span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'Europe'</span></span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'North America'</span></span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">'South America'</span></span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">ButtonRadio</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
    items<span class="token punctuation">:</span> continents<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">RadioItem</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> e<span class="token punctuation">,</span> data<span class="token punctuation">:</span> e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    onChanged<span class="token punctuation">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let's say I want to create Radio Buttons for <code v-pre>X</code> type. Type for which all buttons will be created, where value of all individual radio's will be of that type.</p>
<p>Now let's assume We have type Language so here you can see example for that.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token comment">// Model/ Custom Type</span>
<span class="token keyword">class</span> <span class="token class-name">Language</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> language<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Difficulty</span> difficulty<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">Language</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>language<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>difficulty<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> <span class="token class-name">Difficulty</span> <span class="token punctuation">{</span>
  easy<span class="token punctuation">,</span>
  moderate<span class="token punctuation">,</span>
  hard<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token comment">// Array of that Model/ Custom Type</span>
<span class="token keyword">const</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Language</span><span class="token punctuation">></span></span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token class-name">Language</span><span class="token punctuation">(</span>
    language<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'c / c++'</span></span><span class="token punctuation">,</span>
    difficulty<span class="token punctuation">:</span> <span class="token class-name">Difficulty</span><span class="token punctuation">.</span>easy<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token class-name">Language</span><span class="token punctuation">(</span>
    language<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'python'</span></span><span class="token punctuation">,</span>
    difficulty<span class="token punctuation">:</span> <span class="token class-name">Difficulty</span><span class="token punctuation">.</span>easy<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token class-name">Language</span><span class="token punctuation">(</span>
    language<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'dart'</span></span><span class="token punctuation">,</span>
    difficulty<span class="token punctuation">:</span> <span class="token class-name">Difficulty</span><span class="token punctuation">.</span>easy<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token class-name">Language</span><span class="token punctuation">(</span>
    language<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'other'</span></span><span class="token punctuation">,</span>
    difficulty<span class="token punctuation">:</span> <span class="token class-name">Difficulty</span><span class="token punctuation">.</span>easy<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token comment">// Passing Model/ Custom Type in ButtonRadio </span>
<span class="token class-name">ButtonRadio</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Language</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
    items<span class="token punctuation">:</span> items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">RadioItem</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> e<span class="token punctuation">.</span>language<span class="token punctuation">,</span> data<span class="token punctuation">:</span> e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    onChanged<span class="token punctuation">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="other-properties-of-buttonradio" tabindex="-1"><a class="header-anchor" href="#other-properties-of-buttonradio" aria-hidden="true">#</a> Other properties of ButtonRadio</h3>
<ul>
<li>
<p>initialValue</p>
<ul>
<li>Pass initial value to change default selected value</li>
</ul>
</li>
<li>
<p>padding</p>
<ul>
<li>Pass padding to change padding around individual buttons</li>
</ul>
</li>
</ul>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../helpers/constants.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">RadioItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> text<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">T</span> data<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">RadioItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ButtonRadio</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">T</span><span class="token operator">?</span> initialValue<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RadioItem</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> items<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> onChanged<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">EdgeInsets</span><span class="token operator">?</span> padding<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">ButtonRadio</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>initialValue<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>onChanged<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>padding<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ButtonRadio</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> _ButtonRadioState<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _ButtonRadioState<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ButtonRadio</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  late <span class="token class-name">T</span> _selectedValue<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">assert</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>items<span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _selectedValue <span class="token operator">=</span> widget<span class="token punctuation">.</span>initialValue <span class="token operator">?</span><span class="token operator">?</span> widget<span class="token punctuation">.</span>items<span class="token punctuation">.</span>first<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Wrap</span><span class="token punctuation">(</span>
      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> item <span class="token keyword">in</span> widget<span class="token punctuation">.</span>items<span class="token punctuation">)</span>
          <span class="token class-name">Padding</span><span class="token punctuation">(</span>
            padding<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>padding <span class="token operator">?</span><span class="token operator">?</span> rightPadding8 <span class="token operator">+</span> bottomPadding8<span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">InkWell</span><span class="token punctuation">(</span>
              onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  _selectedValue <span class="token operator">=</span> item<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                widget<span class="token punctuation">.</span><span class="token function">onChanged</span><span class="token punctuation">(</span>_selectedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
                mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>
                children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                  <span class="token class-name">Radio</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
                    value<span class="token punctuation">:</span> item<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
                    groupValue<span class="token punctuation">:</span> _selectedValue<span class="token punctuation">,</span>
                    onChanged<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token operator">?</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          _selectedValue <span class="token operator">=</span> value<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        widget<span class="token punctuation">.</span><span class="token function">onChanged</span><span class="token punctuation">(</span>_selectedValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    materialTapTargetSize<span class="token punctuation">:</span> <span class="token class-name">MaterialTapTargetSize</span><span class="token punctuation">.</span>shrinkWrap<span class="token punctuation">,</span>
                    visualDensity<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">VisualDensity</span><span class="token punctuation">(</span>
                      horizontal<span class="token punctuation">:</span> <span class="token class-name">VisualDensity</span><span class="token punctuation">.</span>minimumDensity<span class="token punctuation">,</span>
                      vertical<span class="token punctuation">:</span> <span class="token class-name">VisualDensity</span><span class="token punctuation">.</span>minimumDensity<span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token class-name">Flexible</span><span class="token punctuation">(</span>
                    child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


