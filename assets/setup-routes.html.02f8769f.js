import{r as e,o as t,c as o,a as n,d as p,F as r,b as s,e as l}from"./app.bd5bcde4.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"set-up-vue-routes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#set-up-vue-routes","aria-hidden":"true"},"#"),s(" Set up Vue Routes")],-1),k=n("hr",null,null,-1),b=s("For most Single Page Applications, it\u2019s recommended to use the officially-supported vue-router library. For more details, see vue-router\u2019s "),m={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},d=s("documentation"),y=s(" and you can check out the video explanation:"),h={href:"https://www.youtube.com/watch?v=mY2MiaYiSdw&t=305s",target:"_blank",rel:"noopener noreferrer"},_=s("Vue.js Routing with vue-router"),g={href:"https://youtu.be/X-cs3UfqfYA",target:"_blank",rel:"noopener noreferrer"},f=s("Vue-Router child components"),w=n("p",null,"Now we set up vue routes, all we need to do is map our components to the routes and you can also associate the routes with the Middleware functions.",-1),v=s("The concept of Middleware in frameworks like Laravel makes it fairly easy to do things like requiring an authenticated user for specific routes. You can check out the full details "),C={href:"https://blog.logrocket.com/vue-middleware-pipelines/",target:"_blank",rel:"noopener noreferrer"},V=s("here"),q=s("."),x=l(`<p>Add this route to <code>VaahCms/Modules/Articles/Vue/routes/routes.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> ContentsList <span class="token keyword">from</span> <span class="token string">&quot;./../pages/contents/List&quot;</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><hr>`,3);function j(E,L){const a=e("ExternalLinkIcon");return t(),o(r,null,[i,k,n("p",null,[b,n("a",m,[d,p(a)]),y]),n("ul",null,[n("li",null,[n("a",h,[_,p(a)])]),n("li",null,[n("a",g,[f,p(a)])])]),w,n("p",null,[v,n("a",C,[V,p(a)]),q]),x],64)}var B=c(u,[["render",j]]);export{B as default};
