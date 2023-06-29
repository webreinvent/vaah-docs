<template><div><h1 id="import-sample-data" tabindex="-1"><a class="header-anchor" href="#import-sample-data" aria-hidden="true">#</a> Import Sample Data</h1>
<hr>
<p>Dummy data is mock data generated at random as a substitute for live data in testing environments. In other words, dummy data acts as a placeholder for live data.</p>
<p>You can add while doing a fresh setup of Project. For that you just create following seeds.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>      ├── BlogTheme
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


      
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>menus.json</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Blog 1"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"content"</span><span class="token punctuation">,</span>
        <span class="token property">"parent"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">"menu_slug"</span><span class="token operator">:</span> <span class="token string">"top-menu"</span><span class="token punctuation">,</span>
        <span class="token property">"theme_location"</span><span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span>
        <span class="token property">"is_home"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>blocks.json</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Logo"</span><span class="token punctuation">,</span>
        <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"&lt;img src=\"#!PUBLIC:THEME_URL!#/storage/cms/media/2021/06/7pOicvBEwEWepwO2qAuFyrBMqj5agNZCqsIlI5ZI.jpg\">"</span><span class="token punctuation">,</span>
        <span class="token property">"theme_location"</span><span class="token operator">:</span> <span class="token string">"top"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>content_types.json</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Blogs"</span><span class="token punctuation">,</span>
            <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"blogs"</span><span class="token punctuation">,</span>
            <span class="token property">"plural"</span><span class="token operator">:</span> <span class="token string">"Blogs"</span><span class="token punctuation">,</span>
            <span class="token property">"plural_slug"</span><span class="token operator">:</span> <span class="token string">"blogs"</span><span class="token punctuation">,</span>
            <span class="token property">"singular"</span><span class="token operator">:</span> <span class="token string">"Blog"</span><span class="token punctuation">,</span>
            <span class="token property">"singular_slug"</span><span class="token operator">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span>
            <span class="token property">"excerpt"</span><span class="token operator">:</span> <span class="token string">"Web Blogs"</span><span class="token punctuation">,</span>
            <span class="token property">"is_published"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"is_commentable"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"content_statuses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">"draft"</span><span class="token punctuation">,</span>
                <span class="token string">"published"</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"groups"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Default"</span><span class="token punctuation">,</span>
                <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"default"</span><span class="token punctuation">,</span>
                <span class="token property">"fields"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Title"</span><span class="token punctuation">,</span>
                        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"title"</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Content"</span><span class="token punctuation">,</span>
                        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"editor"</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>blogs.json</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Blog 1"</span><span class="token punctuation">,</span>
        <span class="token property">"template_slug"</span><span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>
        <span class="token property">"permalink"</span><span class="token operator">:</span> <span class="token string">"blog-1"</span><span class="token punctuation">,</span>
        <span class="token property">"content"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"default"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Blog 1"</span><span class="token punctuation">,</span>
                <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"This is Dummy data"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code v-pre>SampleDataTableSeeder.php</code> and <code v-pre>DatabaseTableSeeder.php</code> file.</p>
<p><strong>DatabaseTableSeeder.php</strong></p>
<p>This seeder file will be called whenever you will activate the module from the backend of the VaahCMS.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Themes<span class="token punctuation">\</span>BlogTheme<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeds</span><span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Modules<span class="token punctuation">\</span>Cms<span class="token punctuation">\</span>Libraries<span class="token punctuation">\</span>CmsSeeder</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DatabaseTableSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$theme_slug</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'blogtheme'</span><span class="token punctuation">;</span>


        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'/json/content_types.json'</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">contentTypes</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>SampleDataTableSeeder.php</strong></p>
<p>This seeder file will be called whenever you will click on &quot;Import Sample Data&quot; button of the module.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Themes<span class="token punctuation">\</span>BlogTheme<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeds</span><span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Modules<span class="token punctuation">\</span>Cms<span class="token punctuation">\</span>Libraries<span class="token punctuation">\</span>CmsSeeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Theme</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">SampleDataTableSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">theme</span> <span class="token operator">=</span> <span class="token class-name static-context">Theme</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'blogtheme'</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token property">theme</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">seeds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">function</span> <span class="token function-definition function">seeds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token variable">$theme_slug</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'blogtheme'</span><span class="token punctuation">;</span>

        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">'/json/sample/blogs.json'</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">createSampleField</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">'/json/sample/menus.json'</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">menus</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">'/json/sample/blocks.json'</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">blocks</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you just need to <code v-pre>reactivate</code> the theme and click on <code v-pre>Import Sample Data</code> button by visiting this url:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/import-data-1.png')" alt="import-data-1">
</div></template>


