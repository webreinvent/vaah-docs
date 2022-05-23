import{_ as i,r as l,o,c,a as n,b as p,w as d,F as r,d as e,e as a}from"./app.45c05e7b.js";const u={},v=n("h1",{id:"create-block",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-block","aria-hidden":"true"},"#"),e(" Create Block")],-1),m=n("hr",null,null,-1),b=e("Blocks are the boxes of content that are displayed in Layout Regions (such as footer or sidebar) on your page. For more details, see CMS Blocks's "),k=e("documentation"),h=a(`<p>For creating block, you need to follow some steps:</p><p><strong>1. Create Location through seeds.</strong></p><p>Create a json file of name <code>theme_locations.json</code> at <code>VaahCms/Themes/BlogTheme/Database/Seeds/json/</code> this directory.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
    
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Top&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;excerpt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Top of every page&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
      \u251C\u2500\u2500 BlogTheme
          \u251C\u2500\u2500 Database/
              \u251C\u2500\u2500 Seeds/
                  \u251C\u2500\u2500 DatabaseTableSeeder.php
                  \u251C\u2500\u2500 SampleDataTableSeeder.php
                  \u251C\u2500\u2500 json/
                      \u251C\u2500\u2500 theme_locations.json


      
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code>DatabaseTableSeeder.php</code> file.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
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
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you just need to reactivate the theme by visiting this url:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the theme is activated, Location will also be created.</p><p><strong>2. Create a Block.</strong></p><p>To create Block, visit this url:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;project-url&gt;/backend/cms#/blocks/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),g=["src"],_=n("ul",null,[n("li",null,"Enter the name"),n("li",null,"Select Theme"),n("li",null,"Select Location"),n("li",null,"Enter Sort in number, this will work when you call blocks by location name."),n("li",null,"Enter content in Editor. You can edit in HTML Editor also."),n("li",null,"Click on Save button.")],-1),y=["src"],f=a(`<p>Blocks will be fetched on frontend by two Codes:</p><h5 id="by-block-slug" tabindex="-1"><a class="header-anchor" href="#by-block-slug" aria-hidden="true">#</a> By Block slug</h5><div class="language-php+HTML ext-php+HTML line-numbers-mode"><pre class="language-php+HTML"><code>{!! vh_block(&#39;logo&#39;) !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="by-location-name" tabindex="-1"><a class="header-anchor" href="#by-location-name" aria-hidden="true">#</a> By Location name</h5><div class="language-php+HTML ext-php+HTML line-numbers-mode"><pre class="language-php+HTML"><code>{!! vh_location_blocks(&#39;top&#39;) !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You have to paste these codes in Web Pages.</p>`,6),w=["src"],T=a(`<p>Now, you can copy this code and paste it in home blade file. Remove hard code of logo.</p><div class="language-php+HTML ext-php+HTML line-numbers-mode"><pre class="language-php+HTML"><code>&lt;a class=&quot;navbar-item&quot; href=&quot;../&quot;&gt;
                            
                            {{--&lt;img src=&quot;http://bulma.io/images/bulma-type-white.png&quot; alt=&quot;Logo&quot;&gt;--}}
                            
                            {!! vh_block(&#39;logo&#39;) !!}
                            
                        &lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, You can see the Cms Block.</p>`,3),q=["src"];function x(s,B){const t=l("RouterLink");return o(),c(r,null,[v,m,n("p",null,[b,p(t,{to:"/vaahcms/cms/blocks.html"},{default:d(()=>[k]),_:1})]),h,n("img",{src:s.$withBase("/images/create-block-1.png"),alt:"create-block-1"},null,8,g),_,n("img",{src:s.$withBase("/images/create-block-2.png"),alt:"create-block-2"},null,8,y),f,n("img",{src:s.$withBase("/images/create-block-3.png"),alt:"create-block-3"},null,8,w),T,n("img",{src:s.$withBase("/images/create-block-4.png"),alt:"create-block-4"},null,8,q)],64)}var S=i(u,[["render",x],["__file","create-block.html.vue"]]);export{S as default};
