<template><div><h1 id="configuring-vuex-library" tabindex="-1"><a class="header-anchor" href="#configuring-vuex-library" aria-hidden="true">#</a> Configuring Vuex Library</h1>
<hr>
<p>Vuex provides that single source of truth for us. As we begin to store state within it, our state becomes a lot cleaner, and a lot easier to reason about. Now, every component that relies on our Global State can have direct access to it.</p>
<p>When one component updates the Vuex State, other components can be listening for when that State changes, then they can reactively respond based off that state-change (and the new State value they receive). For more details, see vuex's <a href="https://vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">documentation<ExternalLinkIcon/></a></p>
<p>Now we will configure the Vuex library inside Vue application. So now first of all go to modules folder at <code v-pre>VaahCms/Modules/Articles/Vue/store/modules/</code></p>
<p>Now make another file inside the module folder called as <code v-pre>contents.js</code> which will have the getters,actions,mutations as shown below</p>
<p>Let check the <code v-pre>Vue/store/modules/contents.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>VaahHelper <span class="token keyword">as</span> Vaah<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../vaahvue/helpers/VaahHelper"</span><span class="token punctuation">;</span>

<span class="token comment">//---------Variables</span>
<span class="token keyword">let</span> base_url <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'base'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"href"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> debug <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'debug'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//---------/Variables</span>

<span class="token keyword">let</span> json_url <span class="token operator">=</span> base_url<span class="token operator">+</span><span class="token string">"/backend/articles/json"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ajax_url <span class="token operator">=</span> base_url<span class="token operator">+</span><span class="token string">"/backend/articles/contents"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">debug</span><span class="token operator">:</span> debug<span class="token punctuation">,</span>
        <span class="token literal-property property">content_slug</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">base_url</span><span class="token operator">:</span> base_url<span class="token punctuation">,</span>
        <span class="token literal-property property">ajax_url</span><span class="token operator">:</span> ajax_url<span class="token punctuation">,</span>
        <span class="token literal-property property">json_url</span><span class="token operator">:</span> json_url<span class="token punctuation">,</span>
        <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">assets_is_fetching</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">assets_reload</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selected_id</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status_list</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list_is_empty</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">is_list_loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">list_view</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active_item</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">is_item_loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show_filters</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query_string</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">new_item</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            <span class="token literal-property property">is_published</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function-variable function">updateState</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">[</span>payload<span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> payload<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">updateStore</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> getters <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> list_view<span class="token punctuation">;</span>
            <span class="token keyword">let</span> update<span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>payload <span class="token operator">&amp;&amp;</span> payload<span class="token punctuation">.</span>name <span class="token operator">&amp;&amp;</span> payload<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">'contents.list'</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                list_view <span class="token operator">=</span> <span class="token string">'large'</span><span class="token punctuation">;</span>

                update <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'active_item'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>

                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateState'</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">'contents.create'</span> <span class="token operator">||</span> payload<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">'contents.view'</span> <span class="token operator">||</span> payload<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">'contents.edit'</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                list_view <span class="token operator">=</span> <span class="token string">'small'</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>

            <span class="token keyword">let</span> view <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'list_view'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> list_view
            <span class="token punctuation">}</span><span class="token punctuation">;</span>

            <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateState'</span><span class="token punctuation">,</span> view<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">state</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> state<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">assets</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> state<span class="token punctuation">.</span>assets<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">is_logged_in</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> state<span class="token punctuation">.</span>is_logged_in<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now this file will be import in <code v-pre>Vue/store/store.js</code> which is shown below.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> root <span class="token keyword">from</span> <span class="token string">'./modules/root'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> contents <span class="token keyword">from</span> <span class="token string">'./modules/contents'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">root</span><span class="token operator">:</span> root<span class="token punctuation">,</span>
        <span class="token literal-property property">contents</span><span class="token operator">:</span> contents<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


