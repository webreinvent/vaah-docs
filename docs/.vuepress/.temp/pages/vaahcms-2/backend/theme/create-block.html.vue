<template><div><h1 id="create-block" tabindex="-1"><a class="header-anchor" href="#create-block" aria-hidden="true">#</a> Create Block</h1>
<hr>
<p>Blocks are the boxes of content that are displayed in Layout Regions (such as footer or sidebar) on your page. For more details, see CMS Blocks's <RouterLink to="/vaahcms/cms/blocks.html">documentation</RouterLink></p>
<p>For creating block, you need to follow some steps:</p>
<p><strong>1. Create Location through seeds.</strong></p>
<p>Create a json file of name <code v-pre>theme_locations.json</code> at <code v-pre>../&lt;project-name&gt;/VaahCms/Themes/&lt;theme-name&gt;/Database/Seeds/json/</code> this directory.</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    
    <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"block"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Top"</span><span class="token punctuation">,</span>
        <span class="token property">"excerpt"</span><span class="token operator">:</span> <span class="token string">"Top of every page"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
      ├── BlogTheme
          ├── Database/
              ├── Seeds/
                  ├── DatabaseTableSeeder.php
                  ├── SampleDataTableSeeder.php
                  ├── json/
                      ├── theme_locations.json


      
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code v-pre>DatabaseTableSeeder.php</code> file.</p>
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


        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">'/json/theme_locations.json'</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">themeLocations</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you just need to reactivate the theme by visiting this url:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the theme is activated, Location will also be created.</p>
<p><strong>2. Create a Block.</strong></p>
<p>To create Block, visit this url:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend/cms#/blocks/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/create-block-1.png')" alt="create-block-1">
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<ul>
<li>Enter the name</li>
<li>Select Theme</li>
<li>Select Location</li>
<li>Enter Sort in number, this will work when you call blocks by location name.</li>
<li>Enter content in Editor. You can edit in HTML Editor also.</li>
<li>Click on Save button.</li>
</ul>
</div>
<img :src="$withBase('/images/create-block-2.png')" alt="create-block-2">
<p>Blocks will be fetched on frontend by two Codes:</p>
<h5 id="by-block-slug" tabindex="-1"><a class="header-anchor" href="#by-block-slug" aria-hidden="true">#</a> By Block slug</h5>
<div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre v-pre class="language-php+HTML"><code>{!! vh_block('logo') !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="by-location-name" tabindex="-1"><a class="header-anchor" href="#by-location-name" aria-hidden="true">#</a> By Location name</h5>
<div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre v-pre class="language-php+HTML"><code>{!! vh_location_blocks('top') !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You have to paste these codes in Web Pages.</p>
<img :src="$withBase('/images/create-block-3.png')" alt="create-block-3">
<p>Now, you can copy this code and paste it in home blade file. Remove hard code of logo.</p>
<div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre v-pre class="language-php+HTML"><code>&lt;a class=&quot;navbar-item&quot; href=&quot;../&quot;&gt;
                            
                            {{--&lt;img src=&quot;http://bulma.io/images/bulma-type-white.png&quot; alt=&quot;Logo&quot;&gt;--}}
                            
                            {!! vh_block('logo') !!}
                            
                        &lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, You can see the Cms Block.</p>
<img :src="$withBase('/images/create-block-4.png')" alt="create-block-4"></div></template>


