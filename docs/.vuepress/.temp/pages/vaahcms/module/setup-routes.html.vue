<template><div><h1 id="set-up-vue-routes" tabindex="-1"><a class="header-anchor" href="#set-up-vue-routes" aria-hidden="true">#</a> Set up Vue Routes</h1>
<hr>
<p>For most Single Page Applications, it’s recommended to use the officially-supported vue-router library. For more details, see vue-router’s <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">documentation<ExternalLinkIcon/></a> and you can check out the video explanation:</p>
<ul>
<li><a href="https://www.youtube.com/watch?v=mY2MiaYiSdw&amp;t=305s" target="_blank" rel="noopener noreferrer">Vue.js Routing with vue-router<ExternalLinkIcon/></a></li>
<li><a href="https://youtu.be/X-cs3UfqfYA" target="_blank" rel="noopener noreferrer">Vue-Router child components<ExternalLinkIcon/></a></li>
</ul>
<p>Now we set up vue routes, all we need to do is map our components to the routes and you can also associate the routes with the Middleware functions.</p>
<p>The concept of Middleware in frameworks like Laravel makes it fairly easy to do things like requiring an authenticated user for specific routes. You can check out the full details <a href="https://blog.logrocket.com/vue-middleware-pipelines/" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
<p>Add this route to <code v-pre>VaahCms/Modules/Articles/Vue/routes/routes.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ContentsList <span class="token keyword">from</span> <span class="token string">"./../pages/contents/List"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContentsCreate <span class="token keyword">from</span> <span class="token string">"./../pages/contents/Create"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContentsView <span class="token keyword">from</span> <span class="token string">"./../pages/contents/View"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContentsEdit <span class="token keyword">from</span> <span class="token string">"./../pages/contents/Edit"</span><span class="token punctuation">;</span>

routes_list <span class="token operator">=</span>     <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/contents'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Backend<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'contents'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'contents.list'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> ContentsList<span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'create'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'contents.create'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span> ContentsCreate<span class="token punctuation">,</span>
                    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'view/:id'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'contents.view'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span> ContentsView<span class="token punctuation">,</span>
                    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'edit/:id'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'contents.edit'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span> ContentsEdit<span class="token punctuation">,</span>
                    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>routes_list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


