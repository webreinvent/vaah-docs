<template><div><h1 id="create-menu" tabindex="-1"><a class="header-anchor" href="#create-menu" aria-hidden="true">#</a> Create Menu</h1>
<hr>
<p>Menus are a collection of links (menu items) used to navigate a website. For more details, see CMS Menus's <RouterLink to="/vaahcms/cms/menus.html">documentation</RouterLink></p>
<p>For creating menu, you need to follow some steps:</p>
<p><strong>1. Create Location through seeds.</strong></p>
<p>Create a json file of name <code v-pre>theme_locations.json</code> at <code v-pre>VaahCms/Themes/BlogTheme/Database/Seeds/json/</code> this directory.</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"menu"</span><span class="token punctuation">,</span>
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
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the theme is activated, Location will also be created.</p>
<p><strong>2. Create a Menu.</strong></p>
<p>To create Menu, visit this url:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend/cms#/menus/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/create-menu-1.png')" alt="create-menu-1">
<ul>
<li>Select Theme</li>
<li>Select Location</li>
<li>Create Menu Or Select existing Menu</li>
</ul>
<img :src="$withBase('/images/create-menu-2.png')" alt="create-menu-2">
<div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre v-pre class="language-php+HTML"><code>{!! vh_location('top', true) !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, you can copy this code and paste it in home blade file. Remove hard code of menu.</p>
<div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre v-pre class="language-php+HTML"><code>&lt;div class=&quot;tabs is-right&quot;&gt;
                                {{--&lt;ul&gt;
                                    &lt;li class=&quot;is-active&quot;&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Examples&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Features&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Team&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Help&lt;/a&gt;&lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;span class=&quot;navbar-item&quot;&gt;
                                        &lt;a class=&quot;button is-white is-outlined&quot;
                                           href=&quot;https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html&quot;&gt;
                                            &lt;span class=&quot;icon&quot;&gt;
                                                &lt;i class=&quot;fa fa-github&quot;&gt;&lt;/i&gt;
                                            &lt;/span&gt;
                                            &lt;span title=&quot;Hello from the other side&quot;&gt;View Source&lt;/span&gt;
                                        &lt;/a&gt;
                                    &lt;/span&gt;--}}




                                {!! vh_location('top', true) !!}
                            &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, You can see the CMS menu.</p>
<img :src="$withBase('/images/create-menu-3.png')" alt="create-menu-3">
</div></template>


