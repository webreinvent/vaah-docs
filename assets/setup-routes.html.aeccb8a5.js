import{_ as t,r as p,o,c as r,a as n,d as s,b as e,e as l}from"./app.60a653af.js";const i={},c=n("h1",{id:"set-up-vue-routes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#set-up-vue-routes","aria-hidden":"true"},"#"),s(" Set up Vue Routes")],-1),u=n("hr",null,null,-1),d={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.youtube.com/watch?v=mY2MiaYiSdw&t=305s",target:"_blank",rel:"noopener noreferrer"},v={href:"https://youtu.be/X-cs3UfqfYA",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"Now we set up vue routes, all we need to do is map our components to the routes and you can also associate the routes with the Middleware functions.",-1),b={href:"https://blog.logrocket.com/vue-middleware-pipelines/",target:"_blank",rel:"noopener noreferrer"},y=l(`<p>Add this route to <code>VaahCms/Modules/Articles/Vue/routes/routes.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ContentsList <span class="token keyword">from</span> <span class="token string">&quot;./../pages/contents/List&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContentsCreate <span class="token keyword">from</span> <span class="token string">&quot;./../pages/contents/Create&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContentsView <span class="token keyword">from</span> <span class="token string">&quot;./../pages/contents/View&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContentsEdit <span class="token keyword">from</span> <span class="token string">&quot;./../pages/contents/Edit&quot;</span><span class="token punctuation">;</span>

routes_list <span class="token operator">=</span>     <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/contents&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Backend<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;contents&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;contents.list&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> ContentsList<span class="token punctuation">,</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;contents.create&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span> ContentsCreate<span class="token punctuation">,</span>
                    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;view/:id&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;contents.view&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span> ContentsView<span class="token punctuation">,</span>
                    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;edit/:id&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;contents.edit&#39;</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,3);function h(_,g){const a=p("ExternalLinkIcon");return o(),r("div",null,[c,u,n("p",null,[s("For most Single Page Applications, it’s recommended to use the officially-supported vue-router library. For more details, see vue-router’s "),n("a",d,[s("documentation"),e(a)]),s(" and you can check out the video explanation:")]),n("ul",null,[n("li",null,[n("a",k,[s("Vue.js Routing with vue-router"),e(a)])]),n("li",null,[n("a",v,[s("Vue-Router child components"),e(a)])])]),m,n("p",null,[s("The concept of Middleware in frameworks like Laravel makes it fairly easy to do things like requiring an authenticated user for specific routes. You can check out the full details "),n("a",b,[s("here"),e(a)]),s(".")]),y])}const w=t(i,[["render",h],["__file","setup-routes.html.vue"]]);export{w as default};
