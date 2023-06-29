<template><div><h1 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> Tabs</h1>
<img height=175 :src="$withBase('/images/flutter/atom-widgets/tabs.gif')" alt="tabs">
<nav class="table-of-contents"><ul><li><router-link to="#how-to-use">How to use?</router-link></li><li><router-link to="#source-code">Source code:</router-link></li></ul></nav>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use?</h2>
<p>Use <code v-pre>TabOptions</code> to show tabs section. You need to pass <code v-pre>tabs</code> parameter to have <code v-pre>desired tabs</code> in <code v-pre>TabOptions</code> class. <code v-pre>tabs</code> is of type <code v-pre>List&lt;TabOption&gt;</code>.</p>
<p>TabOption has two properties one <code v-pre>name</code> which will be displayed as title and other is <code v-pre>tab</code> which will holds the content to display when tab is selected.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">TabOption</span><span class="token punctuation">(</span>
    name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Hello'</span></span><span class="token punctuation">,</span>
    tab<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Hello (Tab)'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>TabOptions</code> to show different tabs.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">const</span> <span class="token class-name">TabOptions</span><span class="token punctuation">(</span>
    tabs<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token class-name">TabOption</span><span class="token punctuation">(</span>
            name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'Hello'</span></span><span class="token punctuation">,</span>
            tab<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Hello (Tab)'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">TabOption</span><span class="token punctuation">(</span>
            name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'World!'</span></span><span class="token punctuation">,</span>
            tab<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'World! (Tab)'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code:</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/cupertino.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:team/vaahextendflutter/helpers/constants.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:team/views/pages/ui/components/section_title_selector.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TabOption</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Widget</span> tab<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">TabOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TabOptions</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">TabOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>tabs<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TabOption</span><span class="token punctuation">></span></span> tabs<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TabOptions</span><span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">_TabOptionsState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _TabOptionsState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TabOptions</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  bool hasError <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>widget<span class="token punctuation">.</span>tabs<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hasError <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  int _selectedIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> hasError
        <span class="token operator">?</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Something went wrong!'</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
            crossAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">CrossAxisAlignment</span><span class="token punctuation">.</span>start<span class="token punctuation">,</span>
            mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>
            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token class-name">Wrap</span><span class="token punctuation">(</span>
                crossAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">WrapCrossAlignment</span><span class="token punctuation">.</span>end<span class="token punctuation">,</span>
                children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                  <span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> widget<span class="token punctuation">.</span>tabs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">[</span>
                    <span class="token function">sectionTitleSelector</span><span class="token punctuation">(</span>
                      title<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>tabs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                      condition<span class="token punctuation">:</span> _selectedIndex <span class="token operator">==</span> i<span class="token punctuation">,</span>
                      callback<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          _selectedIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    verticalMargin12<span class="token punctuation">,</span>
                    horizontalMargin12<span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              verticalMargin24<span class="token punctuation">,</span>
              widget<span class="token punctuation">.</span>tabs<span class="token punctuation">[</span>_selectedIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
              verticalMargin24<span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


