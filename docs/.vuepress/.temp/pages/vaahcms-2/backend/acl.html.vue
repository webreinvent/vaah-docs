<template><div><h1 id="access-control-list-acl" tabindex="-1"><a class="header-anchor" href="#access-control-list-acl" aria-hidden="true">#</a> Access Control List (ACL)</h1>
<p>An access control list (ACL) contains rules that grant or deny access to certain digital environments. A list of permissions associated with an object. The list specifies who or what is allowed to access the object and what operations are allowed to be performed on the object.</p>
<hr>
<h5 id="acl-in-controllers" tabindex="-1"><a class="header-anchor" href="#acl-in-controllers" aria-hidden="true">#</a> ACL in Controllers</h5>
<p>VaahCms provide a method in Controller to check the User's access. You can call this method before execute an action.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getList</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'has-access-of-users-section'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'success'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'errors'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">trans</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"vaahcms::messages.permission_denied"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h5 id="acl-in-view" tabindex="-1"><a class="header-anchor" href="#acl-in-view" aria-hidden="true">#</a> ACL in View</h5>
<p>You can call the Controller method inside view file</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>@<span class="token function">section</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'content'</span><span class="token punctuation">)</span>


        @<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'has-access-of-users-section'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

            <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
            <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
            <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>

        @<span class="token keyword">endif</span>
                
    
@endsection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h5 id="acl-in-vue" tabindex="-1"><a class="header-anchor" href="#acl-in-vue" aria-hidden="true">#</a> ACL in Vue</h5>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>In Vue, you can not call the Controller method directly. So for ACL, you will need to get the list of Permissions from Controller.</p>
<p>There is a function in <code v-pre>root.js</code> at <code v-pre>VaahCms/..../Vue/store/modules/</code> of name <code v-pre>getPermissions</code>. If you don't found any function like this, then you can create in <code v-pre>root.js</code>.</p>
<p>root.js</p>
</div>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ToastProgrammatic <span class="token keyword">as</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'buefy'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>VaahHelper <span class="token keyword">as</span> Vaah<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../vaahvue/helpers/VaahHelper"</span><span class="token punctuation">;</span>

<span class="token comment">//---------Variables</span>
<span class="token keyword">let</span> base_url <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'base'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"href"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> current_url <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'current_url'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> debug <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'debug'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//---------/Variables</span>

<span class="token keyword">let</span> assets_path <span class="token operator">=</span> base_url<span class="token operator">+</span><span class="token string">"/vaahcms/backend/themes/vaahone/assets"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> assets_image_path <span class="token operator">=</span> assets_path<span class="token operator">+</span><span class="token string">"/images"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> json_url <span class="token operator">=</span> base_url<span class="token operator">+</span><span class="token string">"/backend/json"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ajax_url <span class="token operator">=</span> base_url<span class="token operator">+</span><span class="token string">"/backend"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//=========================================================================</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">debug</span><span class="token operator">:</span> debug<span class="token punctuation">,</span>
        <span class="token literal-property property">base_url</span><span class="token operator">:</span> base_url<span class="token punctuation">,</span>
        <span class="token literal-property property">assets_path</span><span class="token operator">:</span> assets_path<span class="token punctuation">,</span>
        <span class="token literal-property property">assets_image_path</span><span class="token operator">:</span> assets_image_path<span class="token punctuation">,</span>
        <span class="token literal-property property">current_url</span><span class="token operator">:</span> current_url<span class="token punctuation">,</span>
        <span class="token literal-property property">ajax_url</span><span class="token operator">:</span> ajax_url<span class="token punctuation">,</span>
        <span class="token literal-property property">json_url</span><span class="token operator">:</span> json_url<span class="token punctuation">,</span>
        <span class="token literal-property property">permissions</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permissions_reload</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
        <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
        <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//=========================================================================</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function-variable function">updateState</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">[</span>payload<span class="token punctuation">.</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> payload<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//-----------------------------------------------------------------</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//=========================================================================</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//-----------------------------------------------------------------</span>
        <span class="token keyword">async</span> <span class="token function">getAssets</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> getters <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
            <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
            <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//-----------------------------------------------------------------</span>
        <span class="token function-variable function">reloadAssets</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> getters <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
            <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
            <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//-----------------------------------------------------------------</span>
        <span class="token keyword">async</span> <span class="token function">getPermissions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> getters <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>state<span class="token punctuation">.</span>permissions <span class="token operator">||</span> state<span class="token punctuation">.</span>permissions_reload <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">let</span> url <span class="token operator">=</span> state<span class="token punctuation">.</span>ajax_url<span class="token operator">+</span><span class="token string">'/json/permissions'</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> Vaah<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">let</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'permissions'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list
                <span class="token punctuation">}</span><span class="token punctuation">;</span>

                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateState'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>

                payload <span class="token operator">=</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'permissions_reload'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>

                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateState'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//-----------------------------------------------------------------</span>
        <span class="token function-variable function">reloadPermissions</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> dispatch<span class="token punctuation">,</span> getters <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'permissions_reload'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateState'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'getPermissions'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//-----------------------------------------------------------------</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//=========================================================================</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">state</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> state<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">permissions</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> state<span class="token punctuation">.</span>permissions<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
        <span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span><span class="token string">''</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you can call this function in <code v-pre>Vue Route Middleware</code> or in <code v-pre>Vue Component</code></p>
<h5 id="vue-route-middleware" tabindex="-1"><a class="header-anchor" href="#vue-route-middleware" aria-hidden="true">#</a> Vue Route Middleware</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>GetBackendAssets<span class="token punctuation">.</span>js<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"> file located at </span><span class="token template-punctuation string">`</span></span>VaahCms<span class="token operator">/</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token operator">/</span>Vue<span class="token operator">/</span>routes<span class="token operator">/</span>middleware<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GetBackendAssets.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>VaahHelper <span class="token keyword">as</span> Vaah<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../vaahvue/helpers/VaahHelper"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">GetBackendAssets</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">,</span> store <span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">//--------------Redirect to Sign in</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">'root/state'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>is_logged_in<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'sign.in'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//--------------/Redirect to Sign in</span>

    <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'root/getAssets'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'root/getPermissions'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>routes.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> routes<span class="token punctuation">;</span>
<span class="token keyword">let</span> routes_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


routes<span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>



<span class="token comment">//----------Middleware</span>

<span class="token keyword">import</span> GetBackendAssets <span class="token keyword">from</span> <span class="token string">'./middleware/GetBackendAssets'</span>
<span class="token comment">//----------Middleware</span>

<span class="token keyword">import</span> LayoutBackend <span class="token keyword">from</span> <span class="token string">"./../layouts/Backend.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> routes_backend <span class="token operator">=</span>     <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/vaah'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> LayoutBackend<span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            GetBackendAssets
            <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>routes_backend<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="vue-component" tabindex="-1"><a class="header-anchor" href="#vue-component" aria-hidden="true">#</a> Vue Component</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>        <span class="token comment">//---------------------------------------------------------------------</span>
        <span class="token keyword">async</span> <span class="token function">getPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>namespace<span class="token operator">+</span><span class="token string">'/getPermissions'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//---------------------------------------------------------------------</span>
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In Controller, you have to write this code to get permissions list.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getPermissions</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>


        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Auth</span><span class="token operator">::</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'failed'</span><span class="token punctuation">;</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'errors'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'list'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">permissions</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In Vue, there is a <RouterLink to="/vaahcms/vaahvue/helpers.html">VaahHelper</RouterLink> function that is used to check <code v-pre>User</code> access.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>        <span class="token comment">//---------------------------------------------------------------------</span>
        <span class="token function-variable function">hasPermission</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">slug</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vaah<span class="token punctuation">.</span><span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>permissions<span class="token punctuation">,</span> slug<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//---------------------------------------------------------------------</span>
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To know about <code v-pre>VaahHelper</code>.</p>
<p><RouterLink to="/vaahcms/vaahvue/helpers.html">Read Documentation</RouterLink></p>
</div></template>


