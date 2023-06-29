<template><div><h1 id="extend-vaahcms-sidebar" tabindex="-1"><a class="header-anchor" href="#extend-vaahcms-sidebar" aria-hidden="true">#</a> Extend VaahCMS Sidebar</h1>
<hr>
<img :src="$withBase('/images/extend-sidebar-1.png')" alt="extends-sidebar-1">
<br/>
At `VaahCms/Modules/Articles/Http/Controllers/Backend` folder you will find three files:
<ul>
<li><code v-pre>BackendController.php</code>: Default controller for the module.</li>
<li><code v-pre>ExtendController.php</code>: This controller file contains methods which extends the backend view of the VaahCMS.</li>
<li><code v-pre>SetupController.php</code>: This controller file contains methods which are being called during activation &amp; deactivation of the module.</li>
</ul>
<p>To extend the sidebar, we need to edit <code v-pre>ExtendController.php</code>:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>  <span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Modules<span class="token punctuation">\</span>Articles<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Controllers<span class="token punctuation">\</span>Backend</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Routing<span class="token punctuation">\</span>Controller</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ExtendController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">topLeftMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$links</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$links</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">topRightUserMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$links</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$links</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">sidebarMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$list</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'link'</span> <span class="token operator">=></span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'vh.backend.articles'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'icon'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'newspaper'</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'label'</span><span class="token operator">=></span> <span class="token string single-quoted-string">'Articles'</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$list</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>sidebarMenu</code> method contains a variable <code v-pre>$list</code> contains link details. You can find icons from <a href="https://fontawesome.com/icons?d=gallery&amp;s=solid&amp;m=free" target="_blank" rel="noopener noreferrer">FontAwesome<ExternalLinkIcon/></a>.</p>
<p>Now, you actually activate the module by visiting following url:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the module is activated, you will be able to see the &quot;Articles&quot; menu item in the <code v-pre>Sidebar</code>. You can click on the menu item and you will see the view generated from the following <code v-pre>blade</code> file:</p>
<div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre v-pre class="language-php+HTML"><code>VaahCms/Modules/Articles/Resources/views/backend/pages/dashboard.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
</div></template>


