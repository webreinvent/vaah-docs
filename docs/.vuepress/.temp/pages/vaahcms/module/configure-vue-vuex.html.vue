<template><div><h1 id="configure-vue-vuex" tabindex="-1"><a class="header-anchor" href="#configure-vue-vuex" aria-hidden="true">#</a> Configure Vue &amp; Vuex</h1>
<hr>
<p>At <code v-pre>VaahCms/Modules/Articles/Http/Controllers/Backend/BackendController.php</code> file you will find index method and update <code v-pre>articles::backend.pages.index</code> change in to <code v-pre>articles::backend.pages.app</code> which will display the view from <code v-pre>VaahCms/Modules/Articles/Resources/views/backend/pages/app.blade.php</code> .</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Modules<span class="token punctuation">\</span>Articles<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Controllers<span class="token punctuation">\</span>Backend</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Routing<span class="token punctuation">\</span>Controller</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">BackendController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'articles::backend.pages.app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAssets</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$data</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you also need to install the Vue.js dependencies at <code v-pre>VaahCms/Modules/Articles</code> from npm using the following command:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You should have node and npm installed in your system. You can use the following NPM command to track the changes in your application and compile the components and other required files.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm run watch<span class="token operator">-</span>poll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this app, all the necessary Vue Js component found at the <code v-pre>VaahCms/Modules/Articles/Vue</code>.</p>
<p>Let check the <code v-pre>Vue/layouts/Backend.vue</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./BackendJs.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>sections<span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>section <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"section"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>

            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>columns<span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"columns"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"column is-2"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>AsideMenu<span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"column is-10"</span><span class="token operator">></span>

                    <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>

                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token operator">/</span>columns<span class="token operator">--</span><span class="token operator">></span>

        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>sections<span class="token operator">--</span><span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


