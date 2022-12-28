import{_ as a,o as t,c as e,a as n,d as p,e as o}from"./app.e7504ec9.js";const c={},l=n("h1",{id:"add-to-aside-menu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#add-to-aside-menu","aria-hidden":"true"},"#"),p(" Add to Aside Menu")],-1),u=n("hr",null,null,-1),i=["src"],d=o(`<p>At <code>VaahCms/Modules/Articles/Vue/layouts/partials/</code> folder you will find a files:</p><p>AsideMenu.vue: In which we directly set the new menu items.</p><p>To extend the sidebar, we need to edit <code>AsideMenu.vue</code>:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-menu</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-menu-list</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Manage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-menu-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content<span class="token punctuation">&quot;</span></span>
                         <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cog<span class="token punctuation">&quot;</span></span>
                         <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root.current_url+&#39;#/contents&#39;<span class="token punctuation">&quot;</span></span>
                         <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span>
                         <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!!($route.path.includes(&#39;/contents&#39;))<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-menu-item</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-menu-list</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-menu</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&#39;root/state&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">assets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&#39;root/state&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>assets<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//---------------------------------------------------------------------</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//---------------------------------------------------------------------</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function r(s,k){return t(),e("div",null,[l,u,n("img",{src:s.$withBase("/images/aside-menu.png"),alt:"aside-menu"},null,8,i),d])}const m=a(c,[["render",r],["__file","add-to-aside.html.vue"]]);export{m as default};
