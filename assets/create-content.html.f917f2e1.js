import{_ as t,o,c as p,a as n,F as i,d as a,e}from"./app.9fb3462d.js";const l={},c=n("h1",{id:"create-content",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-content","aria-hidden":"true"},"#"),a(" Create Content")],-1),u=n("hr",null,null,-1),r=n("p",null,[a("After create a "),n("code",null,"Content Type"),a(", you can see that "),n("code",null,"Content Type"),a(" in Top Menu under "),n("code",null,"Content")],-1),d=["src"],v=e(`<p>For creating Content, you need to follow some steps:</p><p><strong>1. Create Template through seeds.</strong></p><p>Create a json file of name <code>templates.json</code> at <code>VaahCms/Themes/BlogTheme/Database/Seeds/json/</code> this directory.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;file_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontend.default&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Welcome&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;file_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontend.welcome&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">]</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;file_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontend.home&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">]</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You have to set <code>blade file</code> path in a template.json file. The content link return to this Blade File. The data in the fields of that content show in that Blade file only.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>      \u251C\u2500\u2500 BlogTheme
          \u251C\u2500\u2500 Database/
              \u251C\u2500\u2500 Seeds/
                  \u251C\u2500\u2500 DatabaseTableSeeder.php
                  \u251C\u2500\u2500 SampleDataTableSeeder.php
                  \u251C\u2500\u2500 json/
                      \u251C\u2500\u2500 templates.json


      
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code>DatabaseTableSeeder.php</code> file.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\\</span>Themes<span class="token punctuation">\\</span>BlogTheme<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeds</span><span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">VaahCms<span class="token punctuation">\\</span>Modules<span class="token punctuation">\\</span>Cms<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>CmsSeeder</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DatabaseTableSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$theme_slug</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;blogtheme&#39;</span><span class="token punctuation">;</span>

        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/json/templates.json&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">templates</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you just need to reactivate the theme by visiting this url:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the theme is activated, Template will also be created</p>`,11),m=["src"],k=e(`<p>Now you can go to Blog page in Content and create a content for <code>Blogs</code>.</p><p>Fill out all fields in Create form. In Templates, you can see the data that you have been created through seeds. and this will decide which <code>Blade file</code> will open for that content.</p><p>In Templates, You can add some fields that means that fields are template specific and will be shown when you select that Template</p><p><strong>Example:-</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
        <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Services&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;file_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontend.service&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Header&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;header&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Headline&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;headline&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Dummy Headline&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Description&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;description&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This is a Dummy Content.&quot;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also add an author for this content.</p>`,6),b=["src"],q=e(`<p>Now, you need to copy the code by a click on copy icon and paste it in a blade file. Remove the Hard Code from blade file and paste the CMS code in place of their. You can see the difference below.</p><div class="language-php+HTML ext-php+HTML line-numbers-mode"><pre class="language-php+HTML"><code>{{--&lt;div class=&quot;hero-body&quot;&gt;
            &lt;div class=&quot;container has-text-centered&quot;&gt;
                &lt;h1 class=&quot;title&quot;&gt;
                    The new standard in &amp;lt;insert industry here&amp;gt;
                &lt;/h1&gt;
                &lt;h2 class=&quot;subtitle&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/h2&gt;
            &lt;/div&gt;
        &lt;/div&gt;--}}



        &lt;div class=&quot;hero-body&quot;&gt;
            &lt;div class=&quot;container has-text-centered&quot;&gt;
                &lt;h1 class=&quot;title&quot;&gt;
                    {!! get_field($data, &#39;title&#39;) !!}
                &lt;/h1&gt;
                &lt;h2 class=&quot;subtitle&quot;&gt;
                    {!! get_field($data, &#39;content&#39;) !!}
                &lt;/h2&gt;
            &lt;/div&gt;
        &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, You can see the content that you have input in Cms.</p>`,3),g=["src"];function h(s,y){return o(),p(i,null,[c,u,r,n("img",{src:s.$withBase("/images/create-content-1.png"),alt:"create-content-1"},null,8,d),v,n("img",{src:s.$withBase("/images/create-content-2.png"),alt:"create-content-2"},null,8,m),k,n("img",{src:s.$withBase("/images/create-content-3.png"),alt:"create-content-3"},null,8,b),q,n("img",{src:s.$withBase("/images/create-content-4.png"),alt:"create-content-4"},null,8,g)],64)}var _=t(l,[["render",h],["__file","create-content.html.vue"]]);export{_ as default};
