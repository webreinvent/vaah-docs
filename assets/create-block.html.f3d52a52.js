import{_ as l,r as i,o,c,a as n,d as e,b as p,w as d,e as a}from"./app.e7504ec9.js";const r={},u=n("h1",{id:"create-block",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-block","aria-hidden":"true"},"#"),e(" Create Block")],-1),v=n("hr",null,null,-1),m=a(`<p>For creating block, you need to follow some steps:</p><p><strong>1. Create Location through seeds.</strong></p><p>Create a json file of name <code>theme_locations.json</code> at <code>VaahCms/Themes/BlogTheme/Database/Seeds/json/</code> this directory.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Top&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;excerpt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Top of every page&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
      ├── BlogTheme
          ├── Database/
              ├── Seeds/
                  ├── DatabaseTableSeeder.php
                  ├── SampleDataTableSeeder.php
                  ├── json/
                      ├── theme_locations.json


      
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code>DatabaseTableSeeder.php</code> file.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
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


        <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/json/theme_locations.json&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">CmsSeeder</span><span class="token operator">::</span><span class="token function">themeLocations</span><span class="token punctuation">(</span><span class="token variable">$theme_slug</span><span class="token punctuation">,</span> <span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you just need to reactivate the theme by visiting this url:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the theme is activated, Location will also be created.</p><p><strong>2. Create a Block.</strong></p><p>To create Block, visit this url:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;/backend/cms#/blocks/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),b=["src"],k=n("ul",null,[n("li",null,"Enter the name"),n("li",null,"Select Theme"),n("li",null,"Select Location"),n("li",null,"Enter Sort in number, this will work when you call blocks by location name."),n("li",null,"Enter content in Editor. You can edit in HTML Editor also."),n("li",null,"Click on Save button.")],-1),h=["src"],g=a(`<p>Blocks will be fetched on frontend by two Codes:</p><h5 id="by-block-slug" tabindex="-1"><a class="header-anchor" href="#by-block-slug" aria-hidden="true">#</a> By Block slug</h5><div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre class="language-php+HTML"><code>{!! vh_block(&#39;logo&#39;) !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="by-location-name" tabindex="-1"><a class="header-anchor" href="#by-location-name" aria-hidden="true">#</a> By Location name</h5><div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre class="language-php+HTML"><code>{!! vh_location_blocks(&#39;top&#39;) !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You have to paste these codes in Web Pages.</p>`,6),_=["src"],y=a(`<p>Now, you can copy this code and paste it in home blade file. Remove hard code of logo.</p><div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre class="language-php+HTML"><code>&lt;a class=&quot;navbar-item&quot; href=&quot;../&quot;&gt;
                            
                            {{--&lt;img src=&quot;http://bulma.io/images/bulma-type-white.png&quot; alt=&quot;Logo&quot;&gt;--}}
                            
                            {!! vh_block(&#39;logo&#39;) !!}
                            
                        &lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, You can see the Cms Block.</p>`,3),f=["src"];function w(s,T){const t=i("RouterLink");return o(),c("div",null,[u,v,n("p",null,[e("Blocks are the boxes of content that are displayed in Layout Regions (such as footer or sidebar) on your page. For more details, see CMS Blocks's "),p(t,{to:"/vaahcms/cms/blocks.html"},{default:d(()=>[e("documentation")]),_:1})]),m,n("img",{src:s.$withBase("/images/create-block-1.png"),alt:"create-block-1"},null,8,b),k,n("img",{src:s.$withBase("/images/create-block-2.png"),alt:"create-block-2"},null,8,h),g,n("img",{src:s.$withBase("/images/create-block-3.png"),alt:"create-block-3"},null,8,_),y,n("img",{src:s.$withBase("/images/create-block-4.png"),alt:"create-block-4"},null,8,f)])}const x=l(r,[["render",w],["__file","create-block.html.vue"]]);export{x as default};
