<template><div><h1 id="basics-of-product-in-vaahstore" tabindex="-1"><a class="header-anchor" href="#basics-of-product-in-vaahstore" aria-hidden="true">#</a> Basics of Product in VaahStore</h1>
<nav class="table-of-contents"><ul><li><router-link to="#what-is-product">What is Product?</router-link><ul><li><router-link to="#how-to-create-a-product">How to create a Product?</router-link></li><li><router-link to="#requirement-to-create-a-product">Requirement to create a Product</router-link></li></ul></li><li><router-link to="#add-vendor-to-product">Add vendor to product</router-link></li><li><router-link to="#api">API</router-link><ul><li><router-link to="#create">create</router-link></li><li><router-link to="#get-list">Get List</router-link></li><li><router-link to="#get-record">Get Record</router-link></li><li><router-link to="#save-product">Save Product</router-link></li></ul></li></ul></nav>
<h2 id="what-is-product" tabindex="-1"><a class="header-anchor" href="#what-is-product" aria-hidden="true">#</a> What is Product?</h2>
<h3 id="how-to-create-a-product" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-product" aria-hidden="true">#</a> How to create a Product?</h3>
<p>After activating <code v-pre>VaahStore</code>, to create a vendor go into <code v-pre>VaahCMS &gt; Store &gt; Products</code> then click on create button. A form to create product will open.</p>
<h3 id="requirement-to-create-a-product" tabindex="-1"><a class="header-anchor" href="#requirement-to-create-a-product" aria-hidden="true">#</a> Requirement to create a Product</h3>
<table>
<thead>
<tr>
<th>Fields</th>
<th></th>
<th>Descriptions</th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td></td>
<td><code v-pre>This will contain name of the product.</code></td>
</tr>
<tr>
<td>Store</td>
<td></td>
<td><code v-pre>This is to choose Store for the product.</code></td>
</tr>
<tr>
<td>Brand</td>
<td></td>
<td><code v-pre>Select the brand of the product</code></td>
</tr>
<tr>
<td>Type</td>
<td></td>
<td><code v-pre>Select the type of your product</code></td>
</tr>
<tr>
<td>Quantity</td>
<td></td>
<td><code v-pre>Total number of product available</code></td>
</tr>
<tr>
<td>In Stock</td>
<td></td>
<td><code v-pre>Indicate that the product is in stock or not</code></td>
</tr>
<tr>
<td>Status</td>
<td></td>
<td><code v-pre>This is to set the status of the product.</code></td>
</tr>
<tr>
<td>Status Notes</td>
<td></td>
<td><code v-pre>Notes are to describe your decision for any status.</code></td>
</tr>
<tr>
<td>Is Active</td>
<td></td>
<td><code v-pre>This is to Activate or Deactivate your product.</code></td>
</tr>
</tbody>
</table>
<h2 id="add-vendor-to-product" tabindex="-1"><a class="header-anchor" href="#add-vendor-to-product" aria-hidden="true">#</a> Add vendor to product</h2>
<p>After creating a product, to add vendors directly to product look into the table where all the listing of vendor is coming.</p>
<p>Over there under the <code v-pre>Product</code> column you will find the total count of the product to their respective vendors along with an option <code v-pre>+</code> to add new product, click on that.</p>
<img :src="$withBase('/images/vaahstore/product_link_btn_in_vendor.png')" alt="product linking from vendor">
<p>After that a <code v-pre>Add Product</code> page will open.</p>
<p>Inside the <code v-pre>Add Product</code> page there is a dropdown to select and add product.</p>
<img :src="$withBase('/images/vaahstore/dropdown_to_select_add_product_in_vendor.png')" alt="product linking from vendor">
<p>All the added product will be shown in the below table, and some basic changes to the product can be done in the table and then click on above save button, to save the changes.</p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h3>
<h4 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>api<span class="token operator">/</span>store<span class="token operator">/</span>vendors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="request-samples" tabindex="-1"><a class="header-anchor" href="#request-samples" aria-hidden="true">#</a> Request samples</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">"name"</span><span class="token punctuation">,</span>                             <span class="token comment">// String</span>
    <span class="token string double-quoted-string">"slug"</span><span class="token punctuation">,</span>                             <span class="token comment">// String</span>
    <span class="token string double-quoted-string">"vh_st_store_id"</span><span class="token punctuation">,</span>                   <span class="token comment">// JSON</span>
    <span class="token string double-quoted-string">"approved_by"</span><span class="token punctuation">,</span>                      <span class="token comment">// JSON</span>
    <span class="token string double-quoted-string">"owned_by"</span><span class="token punctuation">,</span>                         <span class="token comment">// JSON</span>
    <span class="token string double-quoted-string">"taxonomy_id_vendor_status"</span><span class="token punctuation">,</span>        <span class="token comment">// JSON</span>
    <span class="token string double-quoted-string">"status_notes"</span><span class="token punctuation">,</span>                     <span class="token comment">// String</span>
    <span class="token string double-quoted-string">"is_default"</span><span class="token punctuation">,</span>                       <span class="token comment">// Boolean</span>
    <span class="token string double-quoted-string">"auto_approve_products"</span><span class="token punctuation">,</span>            <span class="token comment">// Boolean</span>
    <span class="token string double-quoted-string">"is_active"</span><span class="token punctuation">,</span>                        <span class="token comment">// Boolean</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="response-sample" tabindex="-1"><a class="header-anchor" href="#response-sample" aria-hidden="true">#</a> Response sample</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">"status"</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">"success"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"messages"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">"Saved"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"data"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-list" tabindex="-1"><a class="header-anchor" href="#get-list" aria-hidden="true">#</a> Get List</h3>
<h4 id="url-1" tabindex="-1"><a class="header-anchor" href="#url-1" aria-hidden="true">#</a> URL</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token constant">GET</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>api<span class="token operator">/</span>store<span class="token operator">/</span>vendors<span class="token operator">?</span>rows<span class="token operator">=</span><span class="token punctuation">{</span>number_of_rows<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="response-sample-1" tabindex="-1"><a class="header-anchor" href="#response-sample-1" aria-hidden="true">#</a> Response sample</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">"success"</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"data"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-record" tabindex="-1"><a class="header-anchor" href="#get-record" aria-hidden="true">#</a> Get Record</h3>
<h4 id="url-2" tabindex="-1"><a class="header-anchor" href="#url-2" aria-hidden="true">#</a> URL</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token constant">GET</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>api<span class="token operator">/</span>store<span class="token operator">/</span>vendors<span class="token operator">/</span><span class="token punctuation">{</span>record_id<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="response-sample-2" tabindex="-1"><a class="header-anchor" href="#response-sample-2" aria-hidden="true">#</a> Response sample</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">"success"</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"data"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
        <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span><span class="token operator">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="save-product" tabindex="-1"><a class="header-anchor" href="#save-product" aria-hidden="true">#</a> Save Product</h3>
<h4 id="url-3" tabindex="-1"><a class="header-anchor" href="#url-3" aria-hidden="true">#</a> URL</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">/</span>api<span class="token operator">/</span>store<span class="token operator">/</span>vendors<span class="token operator">/</span>product
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="request-samples-1" tabindex="-1"><a class="header-anchor" href="#request-samples-1" aria-hidden="true">#</a> Request samples</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span>
    <span class="token string single-quoted-string">'same as create'</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">.</span>
    <span class="token string double-quoted-string">"products"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string double-quoted-string">"can_update"</span>                <span class="token comment">// Boolean</span>
        <span class="token string double-quoted-string">"id"</span>                        <span class="token comment">// product id</span>
        <span class="token string double-quoted-string">"product"</span>                   <span class="token comment">// JSON</span>
        <span class="token string double-quoted-string">"status"</span>                    <span class="token comment">// JSON</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


