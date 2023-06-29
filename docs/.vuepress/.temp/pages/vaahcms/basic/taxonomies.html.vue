<template><div><h1 id="taxonomies" tabindex="-1"><a class="header-anchor" href="#taxonomies" aria-hidden="true">#</a> Taxonomies</h1>
<p>Taxonomies are an important part of categorizing your site’s content, but the term often confuses beginners because “taxonomy” isn’t something most of us hear in daily life.
In the simplest sense, Taxonomies are just a way to group related posts (or other pieces of content) together. That’s it! Though it’s a big word, it’s not as complicated as it sounds.</p>
<p>For example, if you have a blog about sports, you could create taxonomies for the different sports (football, basketball, cricket, etc.) and assign relevant posts to each taxonomy.</p>
<p>Taxonomies are helpful because they make it easier for readers to find related content (and also provide some context to your content, though that’s a secondary benefit).</p>
<hr>
<h5 id="default-taxonomy-types" tabindex="-1"><a class="header-anchor" href="#default-taxonomy-types" aria-hidden="true">#</a> Default Taxonomy Types</h5>
<p>By default, VaahCms includes following types of <code v-pre>Taxonomy</code>:</p>
<ol>
<li>Countries</li>
<li>Registrations</li>
<li>Roles</li>
</ol>
<hr>
<h5 id="create-taxonomies-and-taxonomy-types-via-vaahseeder" tabindex="-1"><a class="header-anchor" href="#create-taxonomies-and-taxonomy-types-via-vaahseeder" aria-hidden="true">#</a> Create Taxonomies and Taxonomy Types via VaahSeeder</h5>
<p>User can create a taxonomies and taxonomy types through seeds. Create json files of name <code v-pre>taxonomies.json</code> and <code v-pre>taxonomy_types.json</code> at <code v-pre>.../VaahCms/Modules/{module_name}&gt;/Database/Seeds/json/</code> this directory.</p>
<p><code v-pre>taxonomies.json</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">"type_slug"</span><span class="token operator">:</span> <span class="token string">"roles"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Backend"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"type_slug"</span><span class="token operator">:</span> <span class="token string">"roles"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Frontend"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"type_slug"</span><span class="token operator">:</span> <span class="token string">"registrations"</span><span class="token punctuation">,</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Email Verification Pending"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    .........
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>taxonomy_types.json</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Countries"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Cities"</span><span class="token punctuation">,</span>
        <span class="token property">"parent_slug"</span><span class="token operator">:</span> <span class="token string">"countries"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Roles"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    .........
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run these seeds, you have to add some code in <code v-pre>DatabaseTableSeeder.php</code> at <code v-pre>.../VaahCms/Modules/{module_name}&gt;/Database/Seeds/</code> this directory.</p>
<p><code v-pre>DatabaseTableSeeder.php</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> VaahCms\Modules\<span class="token operator">&lt;</span>module_name<span class="token operator">></span>\Database\Seeds<span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Facades<span class="token punctuation">\</span>DB</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Str</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Libraries<span class="token punctuation">\</span>VaahSeeder</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DatabaseTableSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">VaahSeeder</span><span class="token operator">::</span><span class="token function">taxonomyTypes</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">'/json/taxonomy_types.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name static-context">VaahSeeder</span><span class="token operator">::</span><span class="token function">taxonomies</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">'/json/taxonomies.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h5 id="create-taxonomy" tabindex="-1"><a class="header-anchor" href="#create-taxonomy" aria-hidden="true">#</a> Create Taxonomy</h5>
<p>Visit following url you will see the Taxonomy section:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/manage/taxonomies/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/taxonomy-1.png')" alt="taxonomy1">
<p>Now you have to create a <code v-pre>Taxonomy</code> by click on <code v-pre>Create</code> button. You will see a create page with following field.</p>
<img :src="$withBase('/images/taxonomy-2.png')" alt="taxonomy2">
<p>First field is <code v-pre>Type</code> and there option are in hierarchical format. You can also manage the taxonomy types by click on <code v-pre>Manage</code> Button. The PopUp will appear that contains <code v-pre>Tree View</code>of Taxonomy Types and has <code v-pre>CRUD</code> Operation.</p>
<img :src="$withBase('/images/taxonomy-3.png')" alt="taxonomy3">
<p>If you select any children type, you will see a new field of <code v-pre>Parent</code> name that has taxonomies of parent of choosen type.</p>
<p>Fill all Fields. Click on <code v-pre>Save</code> button.</p>
<img :src="$withBase('/images/taxonomy-4.png')" alt="taxonomy4">
<p>Now you can see the file in <code v-pre>View</code> Page.</p>
<hr>
</div></template>


