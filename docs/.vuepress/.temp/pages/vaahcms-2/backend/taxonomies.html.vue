<template><div><h1 id="taxonomies" tabindex="-1"><a class="header-anchor" href="#taxonomies" aria-hidden="true">#</a> Taxonomies</h1>
<nav class="table-of-contents"><ul><li><router-link to="#purpose">Purpose</router-link></li><li><router-link to="#default-taxonomy-types">Default Taxonomy Types</router-link></li><li><router-link to="#features-demos">Features &amp; Demos</router-link><ul><li><router-link to="#create-taxonomies-and-taxonomy-types-via-vaahseeder">Create Taxonomies and Taxonomy Types via VaahSeeder</router-link></li><li><router-link to="#create-taxonomies-and-taxonomytype-via-dashboard">Create Taxonomies and TaxonomyType via Dashboard</router-link></li><li><router-link to="#update-taxonomytype-via-dashboard">Update TaxonomyType via Dashboard</router-link></li></ul></li><li><router-link to="#permissions">Permissions</router-link></li><li><router-link to="#files">Files</router-link></li><li><router-link to="#methods">Methods</router-link></li><li><router-link to="#api">API</router-link></li></ul></nav>
<h2 id="purpose" tabindex="-1"><a class="header-anchor" href="#purpose" aria-hidden="true">#</a> Purpose</h2>
<p>Although taxonomies are a crucial component of categorising the material on your application, the phrase frequently confuses newcomers because <code v-pre>Taxonomy</code> isn't a term that most of us use on a daily basis. Taxonomy are really just a technique to group similar posts entries (or other types of content) together. That's it! It's a large term, but it's not as hard to understand as it would seem.</p>
<p>For example, if you manage a sports blog, you could create taxonomies for every sport (basketball, cricket, football, etc.) and assign relevant posts to each taxonomy.</p>
<p>Taxonomies are advantageous because they make it simpler for readers to locate relevant content (and also because they provide your content some context, though that is a secondary advantage).</p>
<h2 id="default-taxonomy-types" tabindex="-1"><a class="header-anchor" href="#default-taxonomy-types" aria-hidden="true">#</a> Default Taxonomy Types</h2>
<p>By default, <code v-pre>VaahCMS</code> have following types of <code v-pre>Taxonomies</code>:</p>
<ol>
<li>Countries</li>
<li>Registrations</li>
<li>Roles</li>
</ol>
<h2 id="features-demos" tabindex="-1"><a class="header-anchor" href="#features-demos" aria-hidden="true">#</a> Features &amp; Demos</h2>
<h3 id="create-taxonomies-and-taxonomy-types-via-vaahseeder" tabindex="-1"><a class="header-anchor" href="#create-taxonomies-and-taxonomy-types-via-vaahseeder" aria-hidden="true">#</a> Create Taxonomies and Taxonomy Types via VaahSeeder</h3>
<p>Through seeds, you can create <code v-pre>taxonomies</code> and <code v-pre>taxonomy types</code>. Make two json files with the names <code v-pre>taxonomies.json</code> and <code v-pre>taxonomy_types.json</code> in the directory <code v-pre>.../VaahCms/Modules/{module name}/Database/Seeds/json/</code>.</p>
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
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>taxonomy_types.json</code></p>
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
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You must add some code to <code v-pre>DatabaseTableSeeder.php</code> in the directory <code v-pre>.../VaahCms/Modules/{module_name}/Database/Seeds</code> in order to run these seeds.</p>
<p><code v-pre>DatabaseTableSeeder.php</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> VaahCms\Modules\<span class="token punctuation">{</span>module_name<span class="token punctuation">}</span>\Database\Seeds<span class="token punctuation">;</span>


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
<h3 id="create-taxonomies-and-taxonomytype-via-dashboard" tabindex="-1"><a class="header-anchor" href="#create-taxonomies-and-taxonomytype-via-dashboard" aria-hidden="true">#</a> Create Taxonomies and TaxonomyType via Dashboard</h3>
<p>To view the <code v-pre>Taxonomy</code> section, go to the following url:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;project-url>/backend#/vaah/manage/taxonomies/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now you have to create a <code v-pre>Taxonomy</code> by click on <code v-pre>Create</code> button. You will see a create page with following field.</p>
<p>Type is the first field, and the options are organised hierarchically. Additionally, you can manage the taxonomy kinds by selecting the <code v-pre>Manage</code> button. The <code v-pre>Tree View</code> of Taxonomy Types PopUp with 'CRUD' Operation will now show.</p>
<p>You will notice a new field called <code v-pre>Select a Parent</code> name with the taxonomies of the parent of the type you have chosen if you choose any of the children types.</p>
<p>Complete every field. Press the <code v-pre>Save</code> button.</p>
<p>The file is now visible in the <code v-pre>View</code> Page.</p>
<p>You can view the video attached below for more info:</p>
<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_F20Ga5vKrX.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>
<h3 id="update-taxonomytype-via-dashboard" tabindex="-1"><a class="header-anchor" href="#update-taxonomytype-via-dashboard" aria-hidden="true">#</a> Update TaxonomyType via Dashboard</h3>
<p>Go to the Taxonomy section first, then click the Manage Taxonomy Type button to edit or
update the TaxonomyType name. To learn more, view the video attachment.</p>
<div style="padding:53.65% 0 0 0;position:relative;">
<iframe src="https://player.vimeo.com/video/802634665?h=e1bd2f4f84&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Update TaxonomyType"></iframe>
</div>
<h2 id="permissions" tabindex="-1"><a class="header-anchor" href="#permissions" aria-hidden="true">#</a> Permissions</h2>
<p>The following permissions are necessary for <code v-pre>Taxonomies</code> and <code v-pre>Taxonomy Type</code> management in order to carry out certain actions.</p>
<table>
<thead>
<tr>
<th>Permissions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Can Manage Taxonomies</td>
<td>This permission enables roles to manage taxonomies. The user can activate, deactivate, update or delete a taxonomy with this access.</td>
</tr>
<tr>
<td>Can Delete Taxonomies</td>
<td>This permission grants roles access to delete a taxonomy.</td>
</tr>
<tr>
<td>Can Update Taxonomies</td>
<td>This permission grants roles to update details of a taxonomy.</td>
</tr>
<tr>
<td>Can Read Taxonomies</td>
<td>This permission grants roles to read all listed taxonomies of the application.</td>
</tr>
<tr>
<td>Can Create Taxonomies</td>
<td>This permission grant roles to create a new taxonomy for the application.</td>
</tr>
<tr>
<td>Has Access Of Taxonomies Section</td>
<td>This permission grant roles to access of the taxonomies section in the side nav bar of the application.</td>
</tr>
<tr>
<td>Can Manage Taxonomy Types</td>
<td>This permission grant roles to manage or perform <code v-pre>CRUD</code> operation on the <code v-pre>Taxonomy Type</code>.</td>
</tr>
</tbody>
</table>
<h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h2>
<ul>
<li>Laravel Route: <code v-pre>vaahcms/Routes/backend/route-texonomies.php</code></li>
<li>Laravel Controller: <code v-pre>vaahcms/Http/Controllers/Backend/TaxonomiesController.php</code></li>
<li>Laravel Model: <code v-pre>vaahcms/Models/Taxonomy.php</code></li>
<li>Vue Route: <code v-pre>vaahcms/Vue/routes/vue-routes-taxonomies.js</code></li>
<li>Vue Store: <code v-pre>vaahcms/Vue/stores/store-taxonomies.js</code></li>
<li>Vue Page Directory: <code v-pre>vaahcms/Vue/pages/taxonomies</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<p>Some reusable method of <code v-pre>Taxonomy</code> and <code v-pre>TaxonomyType</code> mentioned bellowed:</p>
<h4 id="taxonomytype-gettaxonomybytype-type" tabindex="-1"><a class="header-anchor" href="#taxonomytype-gettaxonomybytype-type" aria-hidden="true">#</a> TaxonomyType::getTaxonomyByType($type)</h4>
<p>You can use this method to retrieve all taxonomies that are currently active under given <code v-pre>TaxonomyType</code> by just giving the desired <code v-pre>TaxonomyType</code> slug.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Taxonomy</span><span class="token punctuation">;</span>  <span class="token comment">// Import Taxonomy class at the top</span>

<span class="token variable">$taxonomy_type_slug</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'cities'</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token variable">$active_taxonomies</span> <span class="token operator">=</span> <span class="token class-name static-context">Taxonomy</span><span class="token operator">::</span><span class="token function">getTaxonomyByType</span><span class="token punctuation">(</span><span class="token variable">$taxonomy_type_slug</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<table>
<thead>
<tr>
<th>Permissions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Can Manage Taxonomies</td>
<td>This permission enables roles to manage taxonomies. The user can activate, deactivate, update or delete a taxonomy with this access.</td>
</tr>
<tr>
<td>Can Delete Taxonomies</td>
<td>This permission grants roles access to delete a taxonomy.</td>
</tr>
<tr>
<td>Can Update Taxonomies</td>
<td>This permission grants roles to update details of a taxonomy.</td>
</tr>
<tr>
<td>Can Read Taxonomies</td>
<td>This permission grants roles to read all listed taxonomies of the application.</td>
</tr>
<tr>
<td>Can Create Taxonomies</td>
<td>This permission grant roles to create a new taxonomy for the application.</td>
</tr>
<tr>
<td>Has Access Of Taxonomies Section</td>
<td>This permission grant roles to access of the taxonomies section in the side nav bar of the application.</td>
</tr>
<tr>
<td>Can Manage Taxonomy Types</td>
<td>This permission grant roles to manage or perform <code v-pre>CRUD</code> operation on the <code v-pre>Taxonomy Type</code>.</td>
</tr>
</tbody>
</table>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>VaahCMS has APIs for every method, allowing you to interact with <code v-pre>NuxJS</code> or other frameworks.</p>
<p>You can access APIs method from <code v-pre>vaachms/Http/Controllers/Api/TaxonomiesController.php</code> and routes from <code v-pre>vaahcms/Routes/api/api-routes-taxonomies.php</code></p>
<p>We mention some methods bellow which help you to understand the structure.</p>
<h4 id="create-taxonomy" tabindex="-1"><a class="header-anchor" href="#create-taxonomy" aria-hidden="true">#</a> Create Taxonomy</h4>
<h5 id="method-post" tabindex="-1"><a class="header-anchor" href="#method-post" aria-hidden="true">#</a> Method: <code v-pre>POST</code></h5>
<h5 id="action-creatitem" tabindex="-1"><a class="header-anchor" href="#action-creatitem" aria-hidden="true">#</a> Action: <code v-pre>creatItem</code></h5>
<h5 id="url-public-url-api-vaah-manage-taxonomies" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-vaah-manage-taxonomies" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/vaah/manage/taxonomies/</code></h5>
<h5 id="sample-request" tabindex="-1"><a class="header-anchor" href="#sample-request" aria-hidden="true">#</a> Sample Request</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'type'</span><span class="token punctuation">,</span>              <span class="token comment">//required</span>
    <span class="token string single-quoted-string">'name'</span><span class="token punctuation">,</span>              <span class="token comment">//required</span>
    <span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span>              <span class="token comment">//required</span>
    <span class="token string single-quoted-string">'is_active'</span>          <span class="token comment">//required</span>
    <span class="token string single-quoted-string">'note'</span><span class="token punctuation">,</span>              <span class="token comment">//optional</span>
    <span class="token string single-quoted-string">'seo_title'</span>          <span class="token comment">//optional</span>
    <span class="token string single-quoted-string">'seo_keywords'</span>       <span class="token comment">//optional</span>
    <span class="token string single-quoted-string">'seo_description'</span>    <span class="token comment">//optional</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sample-response" tabindex="-1"><a class="header-anchor" href="#sample-response" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ...
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"Saved successfully."</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token string">"true"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="fetch-taxonomies" tabindex="-1"><a class="header-anchor" href="#fetch-taxonomies" aria-hidden="true">#</a> Fetch Taxonomies</h4>
<h6 id="method-get" tabindex="-1"><a class="header-anchor" href="#method-get" aria-hidden="true">#</a> Method: <code v-pre>GET</code></h6>
<h6 id="action-getlist" tabindex="-1"><a class="header-anchor" href="#action-getlist" aria-hidden="true">#</a> Action: <code v-pre>getList</code></h6>
<h6 id="url-public-url-api-vaah-manage-taxonomies-1" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-vaah-manage-taxonomies-1" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/vaah/manage/taxonomies/</code></h6>
<h5 id="sample-request-1" tabindex="-1"><a class="header-anchor" href="#sample-request-1" aria-hidden="true">#</a> Sample Request</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'filter'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'q'</span>            <span class="token comment">// for search queary (optionl)</span>
        <span class="token string single-quoted-string">'trashed'</span>      <span class="token comment">// for include or exclude trashed data (optionl)</span>
        <span class="token string single-quoted-string">'is_active'</span>    <span class="token comment">// for fetching only active or inactive data (optionl)</span>
        <span class="token string single-quoted-string">'sort'</span>         <span class="token comment">// for sorting the data (optionl)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>  
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sample-response-1" tabindex="-1"><a class="header-anchor" href="#sample-response-1" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"data"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      ...
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="fetch-single-taxonomy" tabindex="-1"><a class="header-anchor" href="#fetch-single-taxonomy" aria-hidden="true">#</a> Fetch Single Taxonomy</h4>
<h6 id="method-get-1" tabindex="-1"><a class="header-anchor" href="#method-get-1" aria-hidden="true">#</a> Method: <code v-pre>GET</code></h6>
<h6 id="action-getitem" tabindex="-1"><a class="header-anchor" href="#action-getitem" aria-hidden="true">#</a> Action: <code v-pre>getItem</code></h6>
<h6 id="url-public-url-api-vaah-manage-taxonomies-id" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-vaah-manage-taxonomies-id" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/vaah/manage/taxonomies/{id}</code></h6>
<h5 id="sample-response-2" tabindex="-1"><a class="header-anchor" href="#sample-response-2" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ...
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token string">"true"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


