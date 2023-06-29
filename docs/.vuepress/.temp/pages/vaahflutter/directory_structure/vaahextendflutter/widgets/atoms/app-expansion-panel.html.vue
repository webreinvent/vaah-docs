<template><div><h1 id="expansion-panel" tabindex="-1"><a class="header-anchor" href="#expansion-panel" aria-hidden="true">#</a> Expansion Panel</h1>
<img :src="$withBase('/images/flutter/atom-widgets/expansion_panel.gif')" alt="expansion_panel">
<nav class="table-of-contents"><ul><li><router-link to="#how-to-use">How to use?</router-link></li><li><router-link to="#source-code">Source Code</router-link></li></ul></nav>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use?</h2>
<p>use AppExpansionPanel with default style header, Note: if you are using default header and not passing heading argument, then heding will be nothing but empty.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span>
    heading<span class="token punctuation">:</span> title<span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        child<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use AppExpansionPanel with custom header</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span>
    headerBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ExpansionControl</span> control<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">InkWell</span><span class="token punctuation">(</span>
            onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                control<span class="token punctuation">.</span>expanded <span class="token operator">=</span> <span class="token operator">!</span>control<span class="token punctuation">.</span>expanded<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                padding<span class="token punctuation">:</span> allPadding16<span class="token punctuation">,</span>
                child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
                    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                        <span class="token class-name">Expanded</span><span class="token punctuation">(</span>
                            child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token class-name">TextStyles</span><span class="token punctuation">.</span>bold5<span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token keyword">const</span> <span class="token class-name">AppExpansionPanelIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        child<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use AppExpansionPanel expanded property to see expanded section initially.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span>
    heading<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'WebReinvent'</span></span><span class="token punctuation">,</span>
    expanded<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        child<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use AppExpansionPanel padding property to set custom padding around children.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span>
    heading<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'WebReinvent'</span></span><span class="token punctuation">,</span>
    padding<span class="token punctuation">:</span> allPadding16<span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        child<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>enable/ disable border in AppExpansionPanel. By default the border is enabled.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span>
    heading<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'WebReinvent'</span></span><span class="token punctuation">,</span>
    border<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        child<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom background color of AppExpansionPanel. Note: if border is enabled then only background color will work.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span>
    heading<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'WebReinvent'</span></span><span class="token punctuation">,</span>
    border<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>pink<span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        child<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom background color of AppExpansionPanel. Note: if border is enabled then only background color will work.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span>
    heading<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'WebReinvent'</span></span><span class="token punctuation">,</span>
    border<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>pink<span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        child<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>custom text style in AppExpansionPanel.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span>
    heading<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'WebReinvent'</span></span><span class="token punctuation">,</span>
    textStyle<span class="token punctuation">:</span> <span class="token class-name">TextStyles</span><span class="token punctuation">.</span>regular4<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'primary'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        child<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span> <span class="token keyword">hide</span> <span class="token class-name">ExpansionPanel</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:font_awesome_flutter/font_awesome_flutter.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:team/vaahextendflutter/app_theme.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:team/vaahextendflutter/helpers/constants.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:team/vaahextendflutter/helpers/styles.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">final</span> _expansionTween <span class="token operator">=</span> <span class="token class-name">CurveTween</span><span class="token punctuation">(</span>curve<span class="token punctuation">:</span> <span class="token class-name">Curves</span><span class="token punctuation">.</span>fastOutSlowIn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> _iconTurnTween <span class="token operator">=</span> <span class="token class-name">Tween</span><span class="token generics"><span class="token punctuation">&lt;</span>double<span class="token punctuation">></span></span><span class="token punctuation">(</span>begin<span class="token punctuation">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> end<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token comment">//</span>
    <span class="token punctuation">.</span><span class="token function">chain</span><span class="token punctuation">(</span>_expansionTween<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ExpansionControl</span> <span class="token punctuation">{</span>
  <span class="token keyword">abstract</span> bool expanded<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">typedef</span> <span class="token class-name">ExpansionHeaderBuilder</span> <span class="token operator">=</span> <span class="token class-name">Widget</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ExpansionControl</span> control<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>

<span class="token metadata function">@immutable</span>
<span class="token keyword">class</span> <span class="token class-name">AppExpansionPanel</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">AppExpansionPanel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>headerBuilder<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>heading<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>expanded <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>padding <span class="token operator">=</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span>zero<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>backgroundColor<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textStyle<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">ExpansionHeaderBuilder</span> headerBuilder<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> heading<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">></span></span> children<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool expanded<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">EdgeInsets</span> padding<span class="token punctuation">;</span>
  <span class="token keyword">final</span> bool border<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span><span class="token operator">?</span> backgroundColor<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">TextStyle</span><span class="token operator">?</span> textStyle<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">_AppExpansionPanelState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _AppExpansionPanelState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AppExpansionPanel</span><span class="token punctuation">></span></span>
    <span class="token keyword">with</span> <span class="token class-name">SingleTickerProviderStateMixin</span><span class="token punctuation">,</span> <span class="token class-name">ExpansionControl</span> <span class="token punctuation">{</span>
  late <span class="token class-name">AnimationController</span> _controller<span class="token punctuation">;</span>
  late <span class="token class-name">Animation</span><span class="token generics"><span class="token punctuation">&lt;</span>double<span class="token punctuation">></span></span> _expansionAnim<span class="token punctuation">;</span>
  late <span class="token class-name">Animation</span><span class="token generics"><span class="token punctuation">&lt;</span>double<span class="token punctuation">></span></span> _iconTurns<span class="token punctuation">;</span>

  late bool _expanded<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _expanded <span class="token operator">=</span> widget<span class="token punctuation">.</span>expanded<span class="token punctuation">;</span>
    _controller <span class="token operator">=</span> <span class="token class-name">AnimationController</span><span class="token punctuation">(</span>duration<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token punctuation">:</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">,</span> vsync<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _controller<span class="token punctuation">.</span>value <span class="token operator">=</span> expanded <span class="token operator">?</span> _controller<span class="token punctuation">.</span>upperBound <span class="token punctuation">:</span> _controller<span class="token punctuation">.</span>lowerBound<span class="token punctuation">;</span>
    _expansionAnim <span class="token operator">=</span> _controller<span class="token punctuation">.</span><span class="token function">drive</span><span class="token punctuation">(</span>_expansionTween<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _iconTurns <span class="token operator">=</span> _controller<span class="token punctuation">.</span><span class="token function">drive</span><span class="token punctuation">(</span>_iconTurnTween<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didUpdateWidget</span><span class="token punctuation">(</span><span class="token keyword">covariant</span> <span class="token class-name">AppExpansionPanel</span> oldWidget<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didUpdateWidget</span><span class="token punctuation">(</span>oldWidget<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldWidget<span class="token punctuation">.</span>expanded <span class="token operator">!=</span> widget<span class="token punctuation">.</span>expanded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      expanded <span class="token operator">=</span> widget<span class="token punctuation">.</span>expanded<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  bool <span class="token keyword">get</span> expanded <span class="token operator">=</span><span class="token operator">></span> _expanded<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">set</span> <span class="token function">expanded</span><span class="token punctuation">(</span>bool value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_expanded <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _controller<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      _controller<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    _expanded <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _controller<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Material</span><span class="token punctuation">(</span>
      type<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>border <span class="token operator">?</span> <span class="token class-name">MaterialType</span><span class="token punctuation">.</span>canvas <span class="token punctuation">:</span> <span class="token class-name">MaterialType</span><span class="token punctuation">.</span>transparency<span class="token punctuation">,</span>
      color<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>backgroundColor <span class="token operator">?</span><span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'black'</span></span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">.</span>shade50<span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      shape<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>border <span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>panelBorder <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      textStyle<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>textStyle<span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
        mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>widget<span class="token punctuation">.</span>headerBuilder <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            widget<span class="token punctuation">.</span>headerBuilder<span class="token operator">!</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
          <span class="token keyword">else</span>
            <span class="token function">defaultHeaderBuilder</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">SizeTransition</span><span class="token punctuation">(</span>
            axis<span class="token punctuation">:</span> <span class="token class-name">Axis</span><span class="token punctuation">.</span>vertical<span class="token punctuation">,</span>
            axisAlignment<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span>
            sizeFactor<span class="token punctuation">:</span> _expansionAnim<span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
              padding<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>padding <span class="token operator">-</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>padding<span class="token punctuation">.</span>top<span class="token punctuation">)</span><span class="token punctuation">,</span>
              child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
                mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>
                crossAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">CrossAxisAlignment</span><span class="token punctuation">.</span>stretch<span class="token punctuation">,</span>
                children<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>children<span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Widget</span> <span class="token function">defaultHeaderBuilder</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ExpansionControl</span> control<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">InkWell</span><span class="token punctuation">(</span>
      onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        control<span class="token punctuation">.</span>expanded <span class="token operator">=</span> <span class="token operator">!</span>control<span class="token punctuation">.</span>expanded<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
        padding<span class="token punctuation">:</span> allPadding16<span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token class-name">Expanded</span><span class="token punctuation">(</span>
              child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>heading <span class="token operator">?</span><span class="token operator">?</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token class-name">TextStyles</span><span class="token punctuation">.</span>bold5<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">const</span> <span class="token class-name">AppExpansionPanelIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token metadata function">@immutable</span>
<span class="token keyword">class</span> <span class="token class-name">AppExpansionPanelIcon</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span><span class="token operator">?</span> color<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token class-name">AppExpansionPanelIcon</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">RotationTransition</span><span class="token punctuation">(</span>
      turns<span class="token punctuation">:</span> context<span class="token punctuation">.</span>findAncestorStateOfType<span class="token generics"><span class="token punctuation">&lt;</span>_AppExpansionPanelState<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">.</span>_iconTurns<span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">FaIcon</span><span class="token punctuation">(</span>
        <span class="token class-name">FontAwesomeIcons</span><span class="token punctuation">.</span>angleDown<span class="token punctuation">,</span>
        color<span class="token punctuation">:</span> color <span class="token operator">?</span><span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'primary'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


