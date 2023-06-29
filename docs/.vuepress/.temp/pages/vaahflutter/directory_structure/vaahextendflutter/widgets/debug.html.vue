<template><div><h1 id="debug-panel" tabindex="-1"><a class="header-anchor" href="#debug-panel" aria-hidden="true">#</a> Debug panel</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li>This panel uses EnvironmentConfig, thus depending on the env.dart file.</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#make-the-panel-visible-on-a-specific-screen">Make the panel visible on a specific screen</router-link></li><li><router-link to="#make-the-panel-visible-on-every-screen-using-central-implementation">Make the panel visible on every screen using central implementation.</router-link></li><li><router-link to="#source-code">Source Code</router-link></li></ul></nav>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token comment">// *****************************************</span>
<span class="token comment">// Debug panel</span>

<span class="token comment">// If you change any code in this file you'll probably have to restart the app</span>
<span class="token comment">// HotReload won't work because most of the variables are constants and are</span>
<span class="token comment">// assigned with some values when material app is build.</span>
<span class="token comment">// *****************************************</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/services.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../app_theme.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../env.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../helpers/constants.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../helpers/styles.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../services/dynamic_links.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> double constHandleWidth <span class="token operator">=</span> <span class="token number">180.0</span><span class="token punctuation">;</span> <span class="token comment">// tag handle width</span>
<span class="token keyword">const</span> double constHandleHeight <span class="token operator">=</span> <span class="token number">38.0</span><span class="token punctuation">;</span> <span class="token comment">// tag handle height</span>

<span class="token metadata function">@immutable</span>
<span class="token keyword">class</span> <span class="token class-name">DebugWidget</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">DebugWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>navigatorKey<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">GlobalKey</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">NavigatorState</span><span class="token punctuation">></span></span> navigatorKey<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Widget</span> child<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">DebugWidgetState</span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">DebugWidgetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token class-name">DebugWidgetState</span> <span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> context<span class="token punctuation">.</span>findAncestorStateOfType<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DebugWidgetState</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DebugWidgetState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DebugWidget</span><span class="token punctuation">></span></span> <span class="token keyword">with</span> <span class="token class-name">SingleTickerProviderStateMixin</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> _drawerKey <span class="token operator">=</span> <span class="token class-name">GlobalKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> _focusScopeNode <span class="token operator">=</span> <span class="token class-name">FocusScopeNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> _handleHeight <span class="token operator">=</span> constHandleHeight<span class="token punctuation">;</span>
  late <span class="token class-name">AnimationController</span> _controller<span class="token punctuation">;</span>

  <span class="token comment">// To determine whether to show tag or not depending on env variable</span>
  late <span class="token class-name">EnvironmentConfig</span> _environmentConfig<span class="token punctuation">;</span>
  bool showDebugPanel <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// get env controller and set variable showDebugPanel</span>
    _environmentConfig <span class="token operator">=</span> <span class="token class-name">EnvironmentConfig</span><span class="token punctuation">.</span><span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    showDebugPanel <span class="token operator">=</span> _environmentConfig<span class="token punctuation">.</span>showDebugPanel<span class="token punctuation">;</span>
    <span class="token comment">// initialise AnimationController</span>
    _controller <span class="token operator">=</span> <span class="token class-name">AnimationController</span><span class="token punctuation">(</span>
      duration<span class="token punctuation">:</span> duration250milli<span class="token punctuation">,</span>
      vsync<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// addStatusListener to focus and unfocus the panel shown</span>
    _controller<span class="token punctuation">.</span><span class="token function">addStatusListener</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token class-name">AnimationStatus</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">==</span> <span class="token class-name">AnimationStatus</span><span class="token punctuation">.</span>dismissed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          _focusScopeNode<span class="token punctuation">.</span><span class="token function">unfocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">NavigatorState</span> <span class="token keyword">get</span> navigator <span class="token operator">=</span><span class="token operator">></span> widget<span class="token punctuation">.</span>navigatorKey<span class="token punctuation">.</span>currentState<span class="token operator">!</span><span class="token punctuation">;</span>

  <span class="token comment">// will open panel</span>
  <span class="token keyword">void</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> _controller<span class="token punctuation">.</span><span class="token function">fling</span><span class="token punctuation">(</span>velocity<span class="token punctuation">:</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// will close panel</span>
  <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> _controller<span class="token punctuation">.</span><span class="token function">fling</span><span class="token punctuation">(</span>velocity<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// will open/ close panel based on if panel is half open or close</span>
  <span class="token keyword">void</span> <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_controller<span class="token punctuation">.</span>value <span class="token operator">></span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> double topMargin <span class="token operator">=</span> <span class="token class-name">MediaQuery</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>padding<span class="token punctuation">.</span>top <span class="token operator">+</span> defaultMargin<span class="token punctuation">;</span>
    <span class="token keyword">return</span> showDebugPanel
        <span class="token operator">?</span> <span class="token class-name">LayoutBuilder</span><span class="token punctuation">(</span>
            builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">BoxConstraints</span> constraints<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">final</span> height <span class="token operator">=</span> constraints<span class="token punctuation">.</span>maxHeight <span class="token operator">-</span> topMargin<span class="token punctuation">;</span>
              <span class="token keyword">final</span> minFactor <span class="token operator">=</span> <span class="token punctuation">(</span>_handleHeight <span class="token operator">/</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span>
                fit<span class="token punctuation">:</span> <span class="token class-name">StackFit</span><span class="token punctuation">.</span>expand<span class="token punctuation">,</span>
                children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                  widget<span class="token punctuation">.</span>child<span class="token punctuation">,</span>
                  <span class="token class-name">Container</span><span class="token punctuation">(</span>
                    margin<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>top<span class="token punctuation">:</span> topMargin<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    child<span class="token punctuation">:</span> <span class="token class-name">GestureDetector</span><span class="token punctuation">(</span>
                      onVerticalDragDown<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">DragDownDetails</span> details<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        _controller<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      onVerticalDragUpdate<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">DragUpdateDetails</span> details<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        _controller<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token operator">-</span>details<span class="token punctuation">.</span>primaryDelta<span class="token operator">!</span> <span class="token operator">/</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      onVerticalDragEnd<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">DragEndDetails</span> details<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>_controller<span class="token punctuation">.</span>isDismissed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          <span class="token keyword">return</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>details<span class="token punctuation">.</span>primaryVelocity<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">365.0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          <span class="token keyword">final</span> visualVelocity <span class="token operator">=</span> <span class="token operator">-</span>details<span class="token punctuation">.</span>primaryVelocity<span class="token operator">!</span> <span class="token operator">/</span> height<span class="token punctuation">;</span>
                          _controller<span class="token punctuation">.</span><span class="token function">fling</span><span class="token punctuation">(</span>velocity<span class="token punctuation">:</span> visualVelocity<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_controller<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                          <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      onVerticalDragCancel<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>_controller<span class="token punctuation">.</span>isDismissed <span class="token operator">||</span> _controller<span class="token punctuation">.</span>isAnimating<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          <span class="token keyword">return</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>_controller<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                          <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                          <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      excludeFromSemantics<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      child<span class="token punctuation">:</span> <span class="token class-name">RepaintBoundary</span><span class="token punctuation">(</span>
                        child<span class="token punctuation">:</span> <span class="token class-name">Align</span><span class="token punctuation">(</span>
                          alignment<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>bottomCenter<span class="token punctuation">,</span>
                          child<span class="token punctuation">:</span> <span class="token class-name">AnimatedBuilder</span><span class="token punctuation">(</span>
                            animation<span class="token punctuation">:</span> _controller<span class="token punctuation">,</span>
                            builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">Widget</span><span class="token operator">?</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                              <span class="token keyword">return</span> <span class="token class-name">Align</span><span class="token punctuation">(</span>
                                alignment<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>topCenter<span class="token punctuation">,</span>
                                heightFactor<span class="token punctuation">:</span> _controller<span class="token punctuation">.</span>value <span class="token operator">+</span> minFactor<span class="token punctuation">,</span>
                                child<span class="token punctuation">:</span> child<span class="token punctuation">,</span>
                              <span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            child<span class="token punctuation">:</span> <span class="token class-name">RepaintBoundary</span><span class="token punctuation">(</span>
                              child<span class="token punctuation">:</span> <span class="token class-name">FocusScope</span><span class="token punctuation">(</span>
                                key<span class="token punctuation">:</span> _drawerKey<span class="token punctuation">,</span>
                                node<span class="token punctuation">:</span> _focusScopeNode<span class="token punctuation">,</span>
                                child<span class="token punctuation">:</span> <span class="token function">_EnvPanel</span><span class="token punctuation">(</span>
                                  handleHeight<span class="token punctuation">:</span> _handleHeight<span class="token punctuation">,</span>
                                  onHandlePressed<span class="token punctuation">:</span> toggle<span class="token punctuation">,</span>
                                  config<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">,</span>
                                  child<span class="token punctuation">:</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span>
                                    builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                      <span class="token keyword">return</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                                        padding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>
                                          top<span class="token punctuation">:</span> _handleHeight<span class="token punctuation">,</span>
                                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                        child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
                                          margin<span class="token punctuation">:</span> allPadding24<span class="token punctuation">,</span>
                                          child<span class="token punctuation">:</span> <span class="token class-name">SingleChildScrollView</span><span class="token punctuation">(</span>
                                            physics<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">BouncingScrollPhysics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                            child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
                                              children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                                                <span class="token function">_ShowDetails</span><span class="token punctuation">(</span>
                                                  contentHolder<span class="token punctuation">:</span> <span class="token class-name">PanelDataContentHolder</span><span class="token punctuation">(</span>
                                                    content<span class="token punctuation">:</span> <span class="token punctuation">{</span>
                                                      <span class="token string-literal"><span class="token string">'App Title'</span></span><span class="token punctuation">:</span>
                                                          <span class="token class-name">Data</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>appTitle<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'App Title Short'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                        value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>appTitleShort<span class="token punctuation">,</span>
                                                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'Environment'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                        value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>envType<span class="token punctuation">,</span>
                                                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'Version'</span></span><span class="token punctuation">:</span>
                                                          <span class="token class-name">Data</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'Build'</span></span><span class="token punctuation">:</span>
                                                          <span class="token class-name">Data</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>build<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'Backend URL'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                        value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>backendUrl<span class="token punctuation">,</span>
                                                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'API URL'</span></span><span class="token punctuation">:</span>
                                                          <span class="token class-name">Data</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>apiUrl<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'Request and Response Timeout'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                        value<span class="token punctuation">:</span>
                                                            <span class="token string-literal"><span class="token string">'</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">_environmentConfig<span class="token punctuation">.</span>timeoutLimit <span class="token operator">/</span> <span class="token number">1000</span></span><span class="token punctuation">}</span></span><span class="token string"> Seconds'</span></span><span class="token punctuation">,</span>
                                                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'Firebase Id'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                        value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>firebaseId<span class="token punctuation">,</span>
                                                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'API Logs Interceptor'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                        value<span class="token punctuation">:</span> _environmentConfig
                                                                <span class="token punctuation">.</span>enableApiLogInterceptor
                                                            <span class="token operator">?</span> <span class="token string-literal"><span class="token string">'enabled'</span></span>
                                                            <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'disabled'</span></span><span class="token punctuation">,</span>
                                                        color<span class="token punctuation">:</span> _environmentConfig
                                                                <span class="token punctuation">.</span>enableApiLogInterceptor
                                                            <span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">]</span>
                                                            <span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'Local Logs'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                        value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>enableLocalLogs
                                                            <span class="token operator">?</span> <span class="token string-literal"><span class="token string">'enabled'</span></span>
                                                            <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'disabled'</span></span><span class="token punctuation">,</span>
                                                        color<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>enableLocalLogs
                                                            <span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">]</span>
                                                            <span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token string-literal"><span class="token string">'Cloud Logs'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                        value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>enableCloudLogs
                                                            <span class="token operator">?</span> <span class="token string-literal"><span class="token string">'enabled'</span></span>
                                                            <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'disabled'</span></span><span class="token punctuation">,</span>
                                                        color<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>enableCloudLogs
                                                            <span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">]</span>
                                                            <span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span>
                                                          _environmentConfig<span class="token punctuation">.</span>sentryConfig<span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">{</span>
                                                        <span class="token string-literal"><span class="token string">'Sentry DSN'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                          value<span class="token punctuation">:</span>
                                                              _environmentConfig<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>dsn<span class="token punctuation">,</span>
                                                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                        <span class="token string-literal"><span class="token string">'Sentry Traces Sample Rate'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                          value<span class="token punctuation">:</span> _environmentConfig
                                                              <span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>tracesSampleRate
                                                              <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                        <span class="token string-literal"><span class="token string">'Sentry Auto App Start (Record Cold And Warm Start Time)'</span></span><span class="token punctuation">:</span>
                                                            <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                          value<span class="token punctuation">:</span> _environmentConfig
                                                                  <span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>autoAppStart
                                                              <span class="token operator">?</span> <span class="token string-literal"><span class="token string">'enabled'</span></span>
                                                              <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'disabled'</span></span><span class="token punctuation">,</span>
                                                          color<span class="token punctuation">:</span> _environmentConfig
                                                                  <span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span><span class="token punctuation">.</span>autoAppStart
                                                              <span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">]</span>
                                                              <span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                        <span class="token string-literal"><span class="token string">'Sentry User Interaction Tracing'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                          value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span>
                                                                  <span class="token punctuation">.</span>enableUserInteractionTracing
                                                              <span class="token operator">?</span> <span class="token string-literal"><span class="token string">'enabled'</span></span>
                                                              <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'disabled'</span></span><span class="token punctuation">,</span>
                                                          color<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span>
                                                                  <span class="token punctuation">.</span>enableUserInteractionTracing
                                                              <span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">]</span>
                                                              <span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                        <span class="token string-literal"><span class="token string">'Sentry Auto Performance Tracking'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                          value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span>
                                                                  <span class="token punctuation">.</span>enableAutoPerformanceTracking
                                                              <span class="token operator">?</span> <span class="token string-literal"><span class="token string">'enabled'</span></span>
                                                              <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'disabled'</span></span><span class="token punctuation">,</span>
                                                          color<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span>
                                                                  <span class="token punctuation">.</span>enableAutoPerformanceTracking
                                                              <span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">]</span>
                                                              <span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                        <span class="token string-literal"><span class="token string">'Sentry Assets Instrumentation'</span></span><span class="token punctuation">:</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>
                                                          value<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span>
                                                                  <span class="token punctuation">.</span>enableAssetsInstrumentation
                                                              <span class="token operator">?</span> <span class="token string-literal"><span class="token string">'enabled'</span></span>
                                                              <span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'disabled'</span></span><span class="token punctuation">,</span>
                                                          color<span class="token punctuation">:</span> _environmentConfig<span class="token punctuation">.</span>sentryConfig<span class="token operator">!</span>
                                                                  <span class="token punctuation">.</span>enableAssetsInstrumentation
                                                              <span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">]</span>
                                                              <span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                verticalMargin24<span class="token punctuation">,</span>
                                                <span class="token keyword">const</span> <span class="token function">_StreamLinksSection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                                verticalMargin24<span class="token punctuation">,</span>
                                              <span class="token punctuation">]</span><span class="token punctuation">,</span>
                                            <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                      <span class="token punctuation">)</span><span class="token punctuation">;</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                              <span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">:</span> widget<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token metadata function">@immutable</span>
<span class="token keyword">class</span> _EnvPanel <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">_EnvPanel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>handleHeight<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>onHandlePressed<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">final</span> double handleHeight<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">VoidCallback</span> onHandlePressed<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">EnvironmentConfig</span> config<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Widget</span> child<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Theme</span><span class="token punctuation">(</span>
      data<span class="token punctuation">:</span> <span class="token class-name">ThemeData</span><span class="token punctuation">(</span>
        primaryColor<span class="token punctuation">:</span> config<span class="token punctuation">.</span>debugPanelColor<span class="token punctuation">,</span>
        colorScheme<span class="token punctuation">:</span> <span class="token class-name">ColorScheme</span><span class="token punctuation">.</span><span class="token function">fromSwatch</span><span class="token punctuation">(</span>
          accentColor<span class="token punctuation">:</span> config<span class="token punctuation">.</span>debugPanelColor<span class="token punctuation">,</span>
          brightness<span class="token punctuation">:</span> <span class="token class-name">Brightness</span><span class="token punctuation">.</span>dark<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Material</span><span class="token punctuation">(</span>
        color<span class="token punctuation">:</span> config<span class="token punctuation">.</span>debugPanelColor<span class="token punctuation">,</span>
        clipBehavior<span class="token punctuation">:</span> <span class="token class-name">Clip</span><span class="token punctuation">.</span>antiAlias<span class="token punctuation">,</span>
        shape<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token function">_PanelBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span>
          fit<span class="token punctuation">:</span> <span class="token class-name">StackFit</span><span class="token punctuation">.</span>expand<span class="token punctuation">,</span>
          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token class-name">RepaintBoundary</span><span class="token punctuation">(</span>
              child<span class="token punctuation">:</span> <span class="token class-name">Overlay</span><span class="token punctuation">(</span>
                initialEntries<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                  <span class="token class-name">OverlayEntry</span><span class="token punctuation">(</span>
                    maintainState<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> child<span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">RepaintBoundary</span><span class="token punctuation">(</span>
              child<span class="token punctuation">:</span> <span class="token class-name">Align</span><span class="token punctuation">(</span>
                alignment<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>topCenter<span class="token punctuation">,</span>
                child<span class="token punctuation">:</span> <span class="token class-name">InkResponse</span><span class="token punctuation">(</span>
                  onTap<span class="token punctuation">:</span> onHandlePressed<span class="token punctuation">,</span>
                  radius<span class="token punctuation">:</span> constHandleWidth <span class="token operator">/</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
                  child<span class="token punctuation">:</span> <span class="token class-name">RotatedBox</span><span class="token punctuation">(</span>
                    quarterTurns<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    child<span class="token punctuation">:</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
                      width<span class="token punctuation">:</span> constHandleWidth<span class="token punctuation">,</span>
                      height<span class="token punctuation">:</span> handleHeight<span class="token punctuation">,</span>
                      child<span class="token punctuation">:</span> <span class="token class-name">FittedBox</span><span class="token punctuation">(</span>
                        child<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                          padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>left<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> right<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> bottom<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> top<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                          child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
                            <span class="token string-literal"><span class="token string">'</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">config<span class="token punctuation">.</span>envType</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">config<span class="token punctuation">.</span>version</span><span class="token punctuation">}</span></span><span class="token string">+</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">config<span class="token punctuation">.</span>build</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _PanelBorder <span class="token keyword">extends</span> <span class="token class-name">ShapeBorder</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">_PanelBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token keyword">const</span> double handleWidth <span class="token operator">=</span> constHandleWidth<span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> double handleHeight <span class="token operator">=</span>
      constHandleHeight <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// if you want a small width line visible with tag remove + 4</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">EdgeInsetsGeometry</span> <span class="token keyword">get</span> dimensions <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span>zero<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">ShapeBorder</span> <span class="token function">scale</span><span class="token punctuation">(</span>double t<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">const</span> <span class="token function">_PanelBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Path</span> <span class="token function">getInnerPath</span><span class="token punctuation">(</span><span class="token class-name">Rect</span> rect<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token class-name">TextDirection</span><span class="token operator">?</span> textDirection<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">addRect</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Path</span> <span class="token function">getOuterPath</span><span class="token punctuation">(</span><span class="token class-name">Rect</span> rect<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token class-name">TextDirection</span><span class="token operator">?</span> textDirection<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> borderRadius <span class="token operator">=</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token class-name">Radius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span>handleHeight <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">final</span> width <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>width <span class="token operator">-</span> handleWidth<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> leftEnd <span class="token operator">=</span> rect<span class="token punctuation">.</span>left <span class="token operator">+</span> width<span class="token punctuation">;</span>
    <span class="token keyword">final</span> rightEnd <span class="token operator">=</span> rect<span class="token punctuation">.</span>right <span class="token operator">-</span> width<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Path</span><span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>
      <span class="token class-name">PathOperation</span><span class="token punctuation">.</span>union<span class="token punctuation">,</span>
      <span class="token class-name">Path</span><span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>
        <span class="token class-name">PathOperation</span><span class="token punctuation">.</span>difference<span class="token punctuation">,</span>
        <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">addRect</span><span class="token punctuation">(</span>
            rect<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">addRRect</span><span class="token punctuation">(</span>
            borderRadius<span class="token punctuation">.</span><span class="token function">toRRect</span><span class="token punctuation">(</span>
              <span class="token class-name">Rect</span><span class="token punctuation">.</span><span class="token function">fromLTRB</span><span class="token punctuation">(</span>
                rect<span class="token punctuation">.</span>left <span class="token operator">-</span> handleWidth<span class="token punctuation">,</span>
                <span class="token operator">-</span>handleHeight<span class="token punctuation">,</span>
                leftEnd<span class="token punctuation">,</span>
                handleHeight <span class="token operator">-</span> <span class="token number">4.0</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">addRRect</span><span class="token punctuation">(</span>
            borderRadius<span class="token punctuation">.</span><span class="token function">toRRect</span><span class="token punctuation">(</span>
              <span class="token class-name">Rect</span><span class="token punctuation">.</span><span class="token function">fromLTRB</span><span class="token punctuation">(</span>
                rightEnd<span class="token punctuation">,</span>
                <span class="token operator">-</span>handleHeight<span class="token punctuation">,</span>
                rect<span class="token punctuation">.</span>right <span class="token operator">+</span> handleHeight<span class="token punctuation">,</span>
                handleHeight <span class="token operator">-</span> <span class="token number">4.0</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">addRect</span><span class="token punctuation">(</span>
            <span class="token class-name">Rect</span><span class="token punctuation">.</span><span class="token function">fromLTWH</span><span class="token punctuation">(</span>
              leftEnd<span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              handleWidth<span class="token punctuation">,</span>
              handleHeight <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token class-name">Path</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">addRRect</span><span class="token punctuation">(</span>
          borderRadius<span class="token punctuation">.</span><span class="token function">toRRect</span><span class="token punctuation">(</span>
            <span class="token class-name">Rect</span><span class="token punctuation">.</span><span class="token function">fromLTWH</span><span class="token punctuation">(</span>
              leftEnd<span class="token punctuation">,</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              handleWidth<span class="token punctuation">,</span>
              handleHeight<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">paint</span><span class="token punctuation">(</span><span class="token class-name">Canvas</span> canvas<span class="token punctuation">,</span> <span class="token class-name">Rect</span> rect<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token class-name">TextDirection</span><span class="token operator">?</span> textDirection<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _StreamLinksSection <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">_StreamLinksSection</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>_StreamLinksSection<span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">_StreamLinksSectionState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _StreamLinksSectionState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>_StreamLinksSection<span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token class-name">DeepLink</span><span class="token operator">?</span> link<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DynamicLinks</span><span class="token punctuation">.</span>dynamicLinksStream<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">DeepLink</span> deeplink<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        link <span class="token operator">=</span> deeplink<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> link <span class="token operator">==</span> <span class="token keyword">null</span>
        <span class="token operator">?</span> emptyWidget
        <span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
            mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>start<span class="token punctuation">,</span>
            crossAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">CrossAxisAlignment</span><span class="token punctuation">.</span>start<span class="token punctuation">,</span>
            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Dynamic Link'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              verticalMargin8<span class="token punctuation">,</span>
              <span class="token function">_ShowDetails</span><span class="token punctuation">(</span>contentHolder<span class="token punctuation">:</span> <span class="token class-name">PanelLinkContentHolder</span><span class="token punctuation">(</span>content<span class="token punctuation">:</span> link<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _ShowDetails <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">PanelContentHolder</span> contentHolder<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function">_ShowDetails</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>contentHolder<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>_ShowDetails<span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">_ShowDetailsState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _ShowDetailsState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>_ShowDetails<span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">PanelContentHolder</span> contentHolder <span class="token operator">=</span> widget<span class="token punctuation">.</span>contentHolder<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
      mainAxisSize<span class="token punctuation">:</span> <span class="token class-name">MainAxisSize</span><span class="token punctuation">.</span>min<span class="token punctuation">,</span>
      crossAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">CrossAxisAlignment</span><span class="token punctuation">.</span>start<span class="token punctuation">,</span>
      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>contentHolder <span class="token operator">is</span> <span class="token class-name">PanelDataContentHolder</span><span class="token punctuation">)</span>
          <span class="token class-name">Builder</span><span class="token punctuation">(</span>
            builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TableRow</span><span class="token punctuation">></span></span> rows <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
              contentHolder<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
                <span class="token punctuation">(</span>key<span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  rows<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
                    <span class="token class-name">TableRow</span><span class="token punctuation">(</span>
                      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                        <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                          padding<span class="token punctuation">:</span> allPadding8<span class="token punctuation">,</span>
                          child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token class-name">Padding</span><span class="token punctuation">(</span>
                          padding<span class="token punctuation">:</span> allPadding8<span class="token punctuation">,</span>
                          child<span class="token punctuation">:</span> <span class="token class-name">SelectableText</span><span class="token punctuation">(</span>
                            data<span class="token punctuation">.</span>value <span class="token operator">?</span><span class="token operator">?</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">,</span>
                            style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> data<span class="token punctuation">.</span>color <span class="token operator">?</span><span class="token operator">?</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'warning'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">]</span><span class="token punctuation">,</span>
                      decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
                        border<span class="token punctuation">:</span> <span class="token class-name">Border</span><span class="token punctuation">(</span>
                          bottom<span class="token punctuation">:</span> <span class="token class-name">BorderSide</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'white'</span></span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.55</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span> <span class="token class-name">Table</span><span class="token punctuation">(</span>
                children<span class="token punctuation">:</span> rows<span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>contentHolder <span class="token operator">is</span> <span class="token class-name">PanelLinkContentHolder</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">[</span>
          <span class="token class-name">SelectableText</span><span class="token punctuation">(</span>
            contentHolder<span class="token punctuation">.</span>content<span class="token punctuation">.</span>encoded<span class="token punctuation">,</span>
            style<span class="token punctuation">:</span> <span class="token class-name">TextStyles</span><span class="token punctuation">.</span>regular3<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'danger'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">Clipboard</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token class-name">ClipboardData</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> contentHolder<span class="token punctuation">.</span>content<span class="token punctuation">.</span>encoded<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">SelectableText</span><span class="token punctuation">(</span>
            contentHolder<span class="token punctuation">.</span>content<span class="token punctuation">.</span>decoded<span class="token punctuation">,</span>
            style<span class="token punctuation">:</span> <span class="token class-name">TextStyles</span><span class="token punctuation">.</span>regular3<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">AppTheme</span><span class="token punctuation">.</span>colors<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'success'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">Clipboard</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token class-name">ClipboardData</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> contentHolder<span class="token punctuation">.</span>content<span class="token punctuation">.</span>decoded<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">PanelContentHolder</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">PanelContentHolder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PanelDataContentHolder</span> <span class="token keyword">extends</span> <span class="token class-name">PanelContentHolder</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Data</span><span class="token punctuation">></span></span> content<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">PanelDataContentHolder</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PanelLinkContentHolder</span> <span class="token keyword">extends</span> <span class="token class-name">PanelContentHolder</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">DeepLink</span> content<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">PanelLinkContentHolder</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> value<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> tooltip<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span><span class="token operator">?</span> color<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tooltip<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


