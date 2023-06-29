<template><div><h1 id="content-types" tabindex="-1"><a class="header-anchor" href="#content-types" aria-hidden="true">#</a> Content Types</h1>
<p>This section provides information about the <code v-pre>Content Types</code> in <code v-pre>CMS</code> modules</p>
<p>Content Type is the structure or blueprint of a page or a section that your Web Page will display. It lets you define the overall schema of this blueprint by adding fields and setting its properties. Content Type is a pre-defined collection of data types (Fields).</p>
<p>In essence, creating a content type is like creating a mold or cast that lets you create several objects (entries) of the same nature and pattern. Content types, however, should be created after you model your content appropriately.</p>
<h5 id="content-type-structure-in-the-cms" tabindex="-1"><a class="header-anchor" href="#content-type-structure-in-the-cms" aria-hidden="true">#</a> Content Type structure in the CMS</h5>
<img :src="$withBase('/images/content-types-structure-1.png')" alt="content-types-structure-1">
<img :src="$withBase('/images/content-types-structure-2.png')" alt="content-types-structure-2">
<p>Here is the structure of a “Blog” Content Type that has a “Title,” “Thumbnail Image,” “Content,” and “SEO Meta Tags” fields. Once this content type is ready, you can create an entry for it.</p>
<hr>
<h5 id="adding-fields-to-a-content-type" tabindex="-1"><a class="header-anchor" href="#adding-fields-to-a-content-type" aria-hidden="true">#</a> Adding fields to a content type</h5>
<p>If you create <code v-pre>Content Types</code>, you will continue on to <code v-pre>Content Structure</code> page where you can determine what information you wish to collect. This creates a form which they can complete and when saved will display the information on your Frontend site.</p>
<h5 id="add-a-new-field" tabindex="-1"><a class="header-anchor" href="#add-a-new-field" aria-hidden="true">#</a> Add a new field</h5>
<p>You can drag the fields from <code v-pre>Content Fields</code> to <code v-pre>Content Structure</code> Page. Enter the name for the field. You can only use numbers, lower-case letters and the underscore character (_).</p>
<p>In the field type list, select one of the following types:</p>
<table>
<thead>
<tr>
<th>Field Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Address</td>
<td>Has seven text fields (Address Line 1, Address Line 2, Landmark, City, State, Country, Zip Code)</td>
</tr>
<tr>
<td>Boolean</td>
<td>Has one of two values (for example: &quot;yes/no&quot; or &quot;true/false&quot;)</td>
</tr>
<tr>
<td>Currency Code</td>
<td>Has dropdown contain currency code</td>
</tr>
<tr>
<td>Date</td>
<td>Choose a date using the calendar</td>
</tr>
<tr>
<td>Date Time</td>
<td>Choose a datetime using the calendar</td>
</tr>
<tr>
<td>Editor</td>
<td>Write a Long text with html tag</td>
</tr>
<tr>
<td>Email</td>
<td>Write a complete and valid email address.</td>
</tr>
<tr>
<td>Facebook Card</td>
<td>Social meta fields</td>
</tr>
<tr>
<td>Image</td>
<td>Add image file such as GIF, JPG, PNG</td>
</tr>
<tr>
<td>Image Group</td>
<td>Add multiple image file such as GIF, JPG, PNG</td>
</tr>
<tr>
<td>Json</td>
<td>Write your content, in JSON format, in the code textbox.</td>
</tr>
<tr>
<td>List</td>
<td>Add text in list format</td>
</tr>
<tr>
<td>Markdown</td>
<td>Add text in markdown format</td>
</tr>
<tr>
<td>Media</td>
<td>Add file</td>
</tr>
<tr>
<td>Number</td>
<td>A number that allows exact decimal values; often used for price or cost</td>
</tr>
<tr>
<td>Password</td>
<td>Write a password. Click the eye icon, displayed on the right of the box, to show the password.</td>
</tr>
<tr>
<td>Phone Number</td>
<td>Write your number in the textbox. Up and down arrows, displayed on the right of the box, allow to increase or decrease the current number indicated in the textbox.</td>
</tr>
<tr>
<td>Price</td>
<td>A number that allows exact decimal values; often used for price or cost</td>
</tr>
<tr>
<td>Relation</td>
<td>Relation with Table</td>
</tr>
<tr>
<td>Slug</td>
<td>Slug text (no space)</td>
</tr>
<tr>
<td>SEO Meta tags</td>
<td>SEO meta field</td>
</tr>
<tr>
<td>Select</td>
<td>Select Field (Add Option in Field Option)</td>
</tr>
<tr>
<td>Tags</td>
<td>Tag input field</td>
</tr>
<tr>
<td>Text</td>
<td>Short text such as a name (limited to 255 characters)</td>
</tr>
<tr>
<td>Textarea</td>
<td>Long, multi-line alphanumeric text such as a biography</td>
</tr>
<tr>
<td>Time</td>
<td>A Time field</td>
</tr>
<tr>
<td>Title</td>
<td>Short text such as a name (limited to 255 characters)</td>
</tr>
<tr>
<td>Twitter Card</td>
<td>Twitter meta fields</td>
</tr>
<tr>
<td>UUID</td>
<td>Write a unique identifier in the textbox. A &quot;Regenerate&quot; button, displayed on the right of the box, allows to automatically generate a UUID .</td>
</tr>
<tr>
<td>Visual Editor</td>
<td>Visual Editor</td>
</tr>
</tbody>
</table>
<hr>
<h5 id="configuring-fields" tabindex="-1"><a class="header-anchor" href="#configuring-fields" aria-hidden="true">#</a> Configuring fields</h5>
<h5 id="is-repeatable" tabindex="-1"><a class="header-anchor" href="#is-repeatable" aria-hidden="true">#</a> Is Repeatable</h5>
<p>This feature is used for both fields and groups. Is Repeatable allow you to repeat a <code v-pre>field</code> and <code v-pre>group of custom fields</code> as many times as needed.</p>
<p>Content Type :</p>
<img :src="$withBase('/images/content-types-structure-4.png')" alt="content-types-structure-4">
<p>Content :</p>
<img :src="$withBase('/images/content-types-structure-5.png')" alt="content-types-structure-5">
<h5 id="is-searchable" tabindex="-1"><a class="header-anchor" href="#is-searchable" aria-hidden="true">#</a> Is Searchable</h5>
<p>This feature is enable allow you to search that field's content by Helper Method.</p>
<img :src="$withBase('/images/content-types-structure-7.png')" alt="content-types-structure-7">
<h5 id="is-multiple" tabindex="-1"><a class="header-anchor" href="#is-multiple" aria-hidden="true">#</a> Is Multiple</h5>
<p>This feature is visible in Select and Relation Field. It Enable the multiple attributes or you can select multiple options.</p>
<img :src="$withBase('/images/content-types-structure-8.png')" alt="content-types-structure-8">
<h5 id="is-hidden" tabindex="-1"><a class="header-anchor" href="#is-hidden" aria-hidden="true">#</a> Is Hidden</h5>
<p>You can hide fields from appearing in Frontend</p>
<img :src="$withBase('/images/content-types-structure-6.png')" alt="content-types-structure-6">
<h5 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h5>
<p>This feature is visible in Relation Field. You can add options in type field from extend method <code v-pre>getCmsContentRelations</code> in <code v-pre>ExtendController</code>.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getCmsContentRelations</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">"name"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"Taxonomy"</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"namespace"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"WebReinvent\\VaahCms\\Entities\\Taxonomy"</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"options"</span> <span class="token operator">=></span> <span class="token class-name static-context">TaxonomyType</span><span class="token operator">::</span><span class="token function">getListInTreeFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"filter_by"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'vh_taxonomy_type_id'</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"add_url"</span> <span class="token operator">=></span> <span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'vh.backend'</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string double-quoted-string">"#/vaah/manage/taxonomies/create"</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"has_children"</span> <span class="token operator">=></span> <span class="token constant boolean">true</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">"name"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"Role"</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"namespace"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"WebReinvent\\VaahCms\\Entities\\Role"</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"display_column"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'name'</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"filters"</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
                    <span class="token punctuation">[</span>
                        <span class="token string double-quoted-string">"query"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'where'</span><span class="token punctuation">,</span>
                        <span class="token string double-quoted-string">"column"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'is_active'</span><span class="token punctuation">,</span>
                        <span class="token string double-quoted-string">"condition"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'='</span><span class="token punctuation">,</span>
                        <span class="token string double-quoted-string">"value"</span> <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>

            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>


        <span class="token keyword">return</span> <span class="token variable">$arr</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img :src="$withBase('/images/content-types-structure-9.png')" alt="content-types-structure-9">
<h5 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> Tags</h5>
<p>These tags are used to show the field's content within these tags. There are four tag field:</p>
<ul>
<li>Opening Tag</li>
<li>Closing Tag</li>
<li>Container opening Tag</li>
<li>Container closing Tag</li>
</ul>
<img :src="$withBase('/images/content-types-structure-10.png')" alt="content-types-structure-10">
<h5 id="terminologies" tabindex="-1"><a class="header-anchor" href="#terminologies" aria-hidden="true">#</a> Terminologies</h5>
<ul>
<li><strong>Entry</strong>: After you define a content type, you can add data to your content type by creating an entry.</li>
<li><strong>Fields</strong>: These are the building blocks/component of your structured content. You can control which data you want to add by configuring fields and its properties in a content type.</li>
</ul>
<hr>
<h5 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h5>
<ol>
<li>If you want to create a simple blog page on your site, you will define a “Blog” content type that has “title,” “date,” and “body” fields.</li>
<li>If you want to create the homepage of your site, you will define a “Pages” content type that has “header,” “footer,” “banner-image,” “title,” and “body” fields.</li>
</ol>
<hr>
<h5 id="customizing-a-content-type" tabindex="-1"><a class="header-anchor" href="#customizing-a-content-type" aria-hidden="true">#</a> Customizing a Content Type</h5>
<ul>
<li>CMS allows you to customize a content type to meet your requirements. If you want to create a Content Type for your webpage(s), you can define the content types in seeds.</li>
<li>You can divide the fields in to different groups.</li>
</ul>
<hr>
<h1 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h1>
<hr>
<h5 id="placing-content-of-a-given-content-type-on-a-page" tabindex="-1"><a class="header-anchor" href="#placing-content-of-a-given-content-type-on-a-page" aria-hidden="true">#</a> Placing Content of a Given Content Type on a Page</h5>
<img :src="$withBase('/images/content-types-structure-3.png')" alt="content-types-structure-3">
<p>In Contents, There are two types fields:</p>
<p><strong>Content Fields</strong></p>
<p>These fields can be managed from &quot;Content Types&quot; sections.</p>
<p><strong>Template Fields</strong></p>
<p>Templates can be used to specify which Content Types will be allowed in different areas on a Page. You can add some fields that means that fields are template specific and will be shown when you select that Template</p>
<p>In Pages, they have a different different structures, and we can't create different content types for each page. So in that case, we use other groups of field called Templates. Templates can be create through seeds.</p>
<h2 id="helper-methods" tabindex="-1"><a class="header-anchor" href="#helper-methods" aria-hidden="true">#</a> Helper Methods</h2>
<h5 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h5>
<div class="language-blade line-numbers-mode" data-ext="blade"><pre v-pre class="language-blade"><code>{!! get_content($data) !!}                      //   return HTML format

{!! get_the_content($data) !!}                  //   return DATA format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">get_content</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">,</span> <span class="token variable">$type</span><span class="token operator">=</span><span class="token constant">null</span><span class="token punctuation">)</span>

<span class="token variable">$type</span> <span class="token operator">=</span> content<span class="token operator">/</span>template<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="content-list" tabindex="-1"><a class="header-anchor" href="#content-list" aria-hidden="true">#</a> Content List</h5>
<div class="language-blade line-numbers-mode" data-ext="blade"><pre v-pre class="language-blade"><code>{!! get_contents('page') !!}                      //   return HTML format

{!! get_the_contents('page') !!}                  //   return DATA format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">get_contents</span><span class="token punctuation">(</span><span class="token variable">$content_type_slug</span><span class="token operator">=</span><span class="token string single-quoted-string">'pages'</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$args</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span><span class="token variable">$has_pagination</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>

<span class="token variable">$args</span> <span class="token operator">=</span> <span class="token punctuation">[</span>

    <span class="token string single-quoted-string">'q'</span>                         <span class="token operator">=></span> <span class="token string single-quoted-string">'search_item'</span><span class="token punctuation">,</span> 
    <span class="token string single-quoted-string">'per_page'</span>                  <span class="token operator">=></span> <span class="token number">20</span><span class="token punctuation">,</span>           <span class="token comment">// default = 20</span>
    <span class="token string single-quoted-string">'include_groups'</span>            <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>           <span class="token comment">// group_slug</span>
    <span class="token string single-quoted-string">'exclude_groups'</span>            <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>           <span class="token comment">// group_slug   </span>
    <span class="token string single-quoted-string">'order'</span>                     <span class="token operator">=></span> <span class="token string single-quoted-string">'name'</span><span class="token punctuation">,</span>       <span class="token comment">// default = id      </span>
    <span class="token string single-quoted-string">'order_by'</span>                  <span class="token operator">=></span> <span class="token string single-quoted-string">'asc'</span><span class="token punctuation">,</span>        <span class="token comment">// default = desc    asc/desc/ASC/DESC</span>
    <span class="token string single-quoted-string">'status'</span>                    <span class="token operator">=></span> <span class="token string single-quoted-string">'all'</span><span class="token punctuation">,</span>        <span class="token comment">// default = published    all/draft</span>
    <span class="token string single-quoted-string">'has_pagination'</span>            <span class="token operator">=></span> <span class="token constant boolean">true</span> <span class="token operator">/</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">// default = true</span>
    <span class="token string single-quoted-string">'has_simple_paginate'</span>       <span class="token operator">=></span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'take'</span>                      <span class="token operator">=></span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span> n<span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'container_opening_tag'</span>     <span class="token operator">=></span> <span class="token string single-quoted-string">'&lt;div class="columns is-multiline">'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'container_closing_tag'</span>     <span class="token operator">=></span> <span class="token string single-quoted-string">'&lt;/div>'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'content_opening_tag'</span>       <span class="token operator">=></span> <span class="token string single-quoted-string">'&lt;div class="column is-4">'</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'content_closing_tag'</span>       <span class="token operator">=></span> <span class="token string single-quoted-string">'&lt;/div>'</span>               

<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="field" tabindex="-1"><a class="header-anchor" href="#field" aria-hidden="true">#</a> Field</h5>
<div class="language-blade line-numbers-mode" data-ext="blade"><pre v-pre class="language-blade"><code>{!! get_field($data, 'title', 'default') !!}        //   return HTML format

{!! get_the_field($data, 'title', 'default') !!}    //   return DATA format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">get_field</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">,</span> <span class="token variable">$field_slug</span><span class="token punctuation">,</span>
         <span class="token variable">$group_slug</span><span class="token operator">=</span><span class="token string single-quoted-string">'default'</span><span class="token punctuation">,</span> <span class="token variable">$type</span><span class="token operator">=</span><span class="token string single-quoted-string">'content'</span><span class="token punctuation">,</span>
         <span class="token variable">$group_index</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">,</span> <span class="token variable">$field_index</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>

<span class="token variable">$type</span> <span class="token operator">=</span> content<span class="token operator">/</span>template<span class="token punctuation">;</span>

<span class="token variable">$group_index</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">/</span><span class="token number">3</span><span class="token operator">/</span><span class="token number">4</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
<span class="token variable">$field_index</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">/</span><span class="token number">3</span><span class="token operator">/</span><span class="token number">4</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> Group</h5>
<div class="language-blade line-numbers-mode" data-ext="blade"><pre v-pre class="language-blade"><code>{!! get_group($data ,'default' ) !!}            //   return HTML format

{!! get_the_group($data ,'default' ) !!}        //   return DATA format
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">get_group</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">,</span> <span class="token variable">$group_slug</span><span class="token operator">=</span><span class="token string single-quoted-string">'default'</span><span class="token punctuation">,</span> 
            <span class="token variable">$type</span><span class="token operator">=</span>'content<span class="token punctuation">,</span> <span class="token variable">$group_index</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>

<span class="token variable">$type</span> <span class="token operator">=</span> content<span class="token operator">/</span>template<span class="token punctuation">;</span>

<span class="token variable">$group_index</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">/</span><span class="token number">3</span><span class="token operator">/</span><span class="token number">4</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frontend-routes" tabindex="-1"><a class="header-anchor" href="#frontend-routes" aria-hidden="true">#</a> Frontend Routes</h2>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span><span class="token punctuation">{</span>permalink<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span><span class="token punctuation">{</span>content_type<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>permalink<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>taxonomies<span class="token operator">/</span><span class="token punctuation">{</span>taxonomy_type_slug<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>taxonomy_slug<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


