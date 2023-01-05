import{_ as s,o as a,c as e,a as t,e as p}from"./app.60a653af.js";const o={},l=p(`<h1 id="import-sample-data" tabindex="-1"><a class="header-anchor" href="#import-sample-data" aria-hidden="true">#</a> Import Sample Data</h1><hr><p>Dummy data is mock data generated at random as a substitute for live data in testing environments. In other words, dummy data acts as a placeholder for live data.</p><p>You can add while doing a fresh setup of Project. For that you just create following seeds.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      ├── BlogTheme
          ├── Database/
              ├── Seeds/
                  ├── DatabaseTableSeeder.php
                  ├── SampleDataTableSeeder.php
                  ├── json/
                      ├── content_types.json
                      ├── sample/
                          ├── menus.json
                          ├── blocks.json
                          ├── blogs.json


      
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>menus.json</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Blog 1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;menu_slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top-menu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;theme_location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_home&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>blocks.json</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Logo&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;img src=\\&quot;#!PUBLIC:THEME_URL!#/storage/cms/media/2021/06/7pOicvBEwEWepwO2qAuFyrBMqj5agNZCqsIlI5ZI.jpg\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;theme_location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>content_types.json</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Blogs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blogs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;plural&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Blogs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;plural_slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blogs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;singular&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Blog&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;singular_slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;excerpt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Web Blogs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_published&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_commentable&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;content_statuses&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;draft&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;published&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Title&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Content&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editor&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>blogs.json</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Blog 1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;template_slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;permalink&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog-1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Blog 1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This is Dummy data&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code>SampleDataTableSeeder.php</code> and <code>DatabaseTableSeeder.php</code> file.</p><p><strong>DatabaseTableSeeder.php</strong></p><p>This seeder file will be called whenever you will activate the module from the backend of the VaahCMS.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
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


        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/json/content_types.json&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">contentTypes</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>SampleDataTableSeeder.php</strong></p><p>This seeder file will be called whenever you will click on &quot;Import Sample Data&quot; button of the module.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\\</span>Themes<span class="token punctuation">\\</span>BlogTheme<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeds</span><span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">VaahCms<span class="token punctuation">\\</span>Modules<span class="token punctuation">\\</span>Cms<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>CmsSeeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\\</span>VaahCms<span class="token punctuation">\\</span>Entities<span class="token punctuation">\\</span>Theme</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">SampleDataTableSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">theme</span> <span class="token operator">=</span> <span class="token class-name static-context">Theme</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;slug&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;blogtheme&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">theme</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">seeds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">function</span> <span class="token function-definition function">seeds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token variable">$theme_slug</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;blogtheme&#39;</span><span class="token punctuation">;</span>

        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/json/sample/blogs.json&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">createSampleField</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/json/sample/menus.json&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">menus</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/json/sample/blocks.json&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">blocks</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you just need to <code>reactivate</code> the theme and click on <code>Import Sample Data</code> button by visiting this url:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),i=["src"];function c(n,u){return a(),e("div",null,[l,t("img",{src:n.$withBase("/images/import-data-1.png"),alt:"import-data-1"},null,8,i)])}const d=s(o,[["render",c],["__file","import-data.html.vue"]]);export{d as default};
