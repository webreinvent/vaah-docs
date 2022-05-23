import{_ as t,r as p,o,c as r,a as n,b as e,F as l,d as s,e as i}from"./app.9fb3462d.js";const c={},u=n("h1",{id:"set-up-vue-routes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#set-up-vue-routes","aria-hidden":"true"},"#"),s(" Set up Vue Routes")],-1),d=n("hr",null,null,-1),k=s("For most Single Page Applications, it\u2019s recommended to use the officially-supported vue-router library. For more details, see vue-router\u2019s "),v={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},m=s("documentation"),b=s(" and you can check out the video explanation:"),y={href:"https://www.youtube.com/watch?v=mY2MiaYiSdw&t=305s",target:"_blank",rel:"noopener noreferrer"},h=s("Vue.js Routing with vue-router"),_={href:"https://youtu.be/X-cs3UfqfYA",target:"_blank",rel:"noopener noreferrer"},g=s("Vue-Router child components"),f=n("p",null,"Now we set up vue routes, all we need to do is map our components to the routes and you can also associate the routes with the Middleware functions.",-1),w=s("The concept of Middleware in frameworks like Laravel makes it fairly easy to do things like requiring an authenticated user for specific routes. You can check out the full details "),C={href:"https://blog.logrocket.com/vue-middleware-pipelines/",target:"_blank",rel:"noopener noreferrer"},V=s("here"),q=s("."),x=i(`<p>Add this route to <code>VaahCms/Modules/Articles/Vue/routes/routes.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> ContentsList <span class="token keyword">from</span> <span class="token string">&quot;./../pages/contents/List&quot;</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,3);function j(E,L){const a=p("ExternalLinkIcon");return o(),r(l,null,[u,d,n("p",null,[k,n("a",v,[m,e(a)]),b]),n("ul",null,[n("li",null,[n("a",y,[h,e(a)])]),n("li",null,[n("a",_,[g,e(a)])])]),f,n("p",null,[w,n("a",C,[V,e(a)]),q]),x],64)}var A=t(c,[["render",j],["__file","setup-routes.html.vue"]]);export{A as default};
