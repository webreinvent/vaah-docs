import{_ as e,o as t,c as o,a as n,F as i,e as p,d as s}from"./app.9fb3462d.js";const l={},c=p(`<h1 id="taxonomies" tabindex="-1"><a class="header-anchor" href="#taxonomies" aria-hidden="true">#</a> Taxonomies</h1><p>Taxonomies are an important part of categorizing your site\u2019s content, but the term often confuses beginners because \u201Ctaxonomy\u201D isn\u2019t something most of us hear in daily life. In the simplest sense, Taxonomies are just a way to group related posts (or other pieces of content) together. That\u2019s it! Though it\u2019s a big word, it\u2019s not as complicated as it sounds.</p><p>For example, if you have a blog about sports, you could create taxonomies for the different sports (football, basketball, cricket, etc.) and assign relevant posts to each taxonomy.</p><p>Taxonomies are helpful because they make it easier for readers to find related content (and also provide some context to your content, though that\u2019s a secondary benefit).</p><hr><h5 id="default-taxonomy-types" tabindex="-1"><a class="header-anchor" href="#default-taxonomy-types" aria-hidden="true">#</a> Default Taxonomy Types</h5><p>By default, VaahCms includes following types of <code>Taxonomy</code>:</p><ol><li>Countries</li><li>Registrations</li><li>Roles</li></ol><hr><h5 id="create-taxonomies-and-taxonomy-types-via-vaahseeder" tabindex="-1"><a class="header-anchor" href="#create-taxonomies-and-taxonomy-types-via-vaahseeder" aria-hidden="true">#</a> Create Taxonomies and Taxonomy Types via VaahSeeder</h5><p>User can create a taxonomies and taxonomy types through seeds. Create json files of name <code>taxonomies.json</code> and <code>taxonomy_types.json</code> at <code>.../VaahCms/Modules/{module_name}&gt;/Database/Seeds/json/</code> this directory.</p><p><code>taxonomies.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">&quot;type_slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;roles&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Backend&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type_slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;roles&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Frontend&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type_slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;registrations&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Email Verification Pending&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    .........
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>taxonomy_types.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Countries&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Cities&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parent_slug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;countries&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Roles&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    .........
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run these seeds, you have to add some code in <code>DatabaseTableSeeder.php</code> at <code>.../VaahCms/Modules/{module_name}&gt;/Database/Seeds/</code> this directory.</p><p><code>DatabaseTableSeeder.php</code></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> VaahCms\\Modules\\<span class="token operator">&lt;</span>module_name<span class="token operator">&gt;</span>\\Database\\Seeds<span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>DB</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Str</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\\</span>VaahCms<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>VaahSeeder</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DatabaseTableSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">VaahSeeder</span><span class="token operator">::</span><span class="token function">taxonomyTypes</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/json/taxonomy_types.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">VaahSeeder</span><span class="token operator">::</span><span class="token function">taxonomies</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/json/taxonomies.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="create-taxonomy" tabindex="-1"><a class="header-anchor" href="#create-taxonomy" aria-hidden="true">#</a> Create Taxonomy</h5><p>Visit following url you will see the Taxonomy section:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/manage/taxonomies/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),u=["src"],r=n("p",null,[s("Now you have to create a "),n("code",null,"Taxonomy"),s(" by click on "),n("code",null,"Create"),s(" button. You will see a create page with following field.")],-1),d=["src"],m=n("p",null,[s("First field is "),n("code",null,"Type"),s(" and there option are in hierarchical format. You can also manage the taxonomy types by click on "),n("code",null,"Manage"),s(" Button. The PopUp will appear that contains "),n("code",null,"Tree View"),s("of Taxonomy Types and has "),n("code",null,"CRUD"),s(" Operation.")],-1),k=["src"],v=n("p",null,[s("If you select any children type, you will see a new field of "),n("code",null,"Parent"),s(" name that has taxonomies of parent of choosen type.")],-1),h=n("p",null,[s("Fill all Fields. Click on "),n("code",null,"Save"),s(" button.")],-1),b=["src"],y=n("p",null,[s("Now you can see the file in "),n("code",null,"View"),s(" Page.")],-1),g=n("hr",null,null,-1);function x(a,f){return t(),o(i,null,[c,n("img",{src:a.$withBase("/images/taxonomy-1.png"),alt:"taxonomy1"},null,8,u),r,n("img",{src:a.$withBase("/images/taxonomy-2.png"),alt:"taxonomy2"},null,8,d),m,n("img",{src:a.$withBase("/images/taxonomy-3.png"),alt:"taxonomy3"},null,8,k),v,h,n("img",{src:a.$withBase("/images/taxonomy-4.png"),alt:"taxonomy4"},null,8,b),y,g],64)}var q=e(l,[["render",x],["__file","taxonomies.html.vue"]]);export{q as default};
