<template><div><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1>
<p>An API-based CMS, also known as a <code v-pre>headless CMS</code>, is a relatively new approach to content
management with many advantages, allow you to build websites and apps that are decoupled from their
content management tools and integrated via API. This gives you the flexibility to build your front-end using
your preferred tools.</p>
<p>An API-based approach can save a team significant time and
money in the initial implementation as well as ongoing maintenance.
With an API you have full control of the presentation of your content with your own code.</p>
<h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h3>
<p>VaahCms supports <a href="https://laravel.com/docs/5.8/api-authentication" target="_blank" rel="noopener noreferrer">API authentication<ExternalLinkIcon/></a>.
This allows you to protect the URLs on your web server so that only you can access them.
In order to authenticate with HTTP, you may provide a <code v-pre>API Token</code> with the following URL format:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;public-url>/api/cms/contents-types?api_token=XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can ask to Admin for assigning you a <code v-pre>API Token</code>.</p>
<h3 id="content-types" tabindex="-1"><a class="header-anchor" href="#content-types" aria-hidden="true">#</a> Content Types</h3>
<p>Content Type is the structure or blueprint of a page or a section that your Web Page will display.</p>
<h4 id="get-a-list-of-content-types" tabindex="-1"><a class="header-anchor" href="#get-a-list-of-content-types" aria-hidden="true">#</a> Get a List of Content Types</h4>
<p>Get a list of the <code v-pre>Content Type</code> objects and their properties in a list.
This API retrieves a specific field of <code v-pre>Content Types</code>, and returns all the properties of the Content Types with <code v-pre>Pagination</code>.</p>
<h6 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request" aria-hidden="true">#</a> HTTP request</h6>
<p><code v-pre>GET/POST &lt;public-url&gt;/api/cms/contents-types</code></p>
<p>This method supports some of the query parameters to help customize the response.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>q</td>
<td>Value to be search in <code v-pre>Name</code>, <code v-pre>Slug</code>, <code v-pre>Plural Slug</code> and <code v-pre>Singular Slug</code> Column</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>per_page</td>
<td><code v-pre>N</code> Item Per Page</td>
<td>Number</td>
<td>20</td>
</tr>
<tr>
<td>order</td>
<td>Sort the results of the list by a given column</td>
<td>String</td>
<td>id</td>
</tr>
<tr>
<td>order_by</td>
<td>Direction of the sort and may be either <code v-pre>asc</code> or <code v-pre>desc</code></td>
<td>String</td>
<td>desc</td>
</tr>
<tr>
<td>filters</td>
<td>Column name passes as a <code v-pre>key</code> and Value passes as a <code v-pre>key's value</code>. Columns: <code v-pre>is_published</code>, <code v-pre>is_commentable</code></td>
<td>Array</td>
<td></td>
</tr>
</tbody>
</table>
<h5 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>GET &lt;public-url>/api/cms/contents-types?page=1&amp;per_page=1&amp;
q=pag&amp;order=asc&amp;order_by=updated_at&amp;filters[is_published]=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="request-samples" tabindex="-1"><a class="header-anchor" href="#request-samples" aria-hidden="true">#</a> Request samples</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>POST &lt;public-url>/api/cms/contents-types
 
$param = [
   'q'                         => 'search_item', 
   'per_page'                  => 5,               
   'order'                     => 'name',                  
   'order_by'                  => 'asc',              
   'filters'                   => [
       'is_published'          => 1  
   ]
];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples" tabindex="-1"><a class="header-anchor" href="#response-samples" aria-hidden="true">#</a> Response samples</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "status": "success",
    "data": {
        "current_page": 1,
        "data": [
            ``````````
            ``````````
        ],
        "first_page_url": "&lt;public-url>/api/cms/contents-types?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "&lt;public-url>/api/cms/contents-types?page=1",
        "links": [
            {
                "url": null,
                "label": "&amp;laquo; Previous",
                "active": false
            },
            {
                "url": "&lt;public-url>/api/cms/contents-types?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &amp;raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "&lt;public-url>/api/cms/contents-types",
        "per_page": 20,
        "prev_page_url": null,
        "to": null,
        "total": 0
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-content-type" tabindex="-1"><a class="header-anchor" href="#get-content-type" aria-hidden="true">#</a> Get Content Type</h4>
<p>Get a Item of the <code v-pre>Content Type</code> objects and relationships of a Content Type object.
This will retrieves a <code v-pre>Content Type</code> by <code v-pre>slug</code> value, and returns all the properties / Field Structure of Content Type.</p>
<h6 id="http-request-1" tabindex="-1"><a class="header-anchor" href="#http-request-1" aria-hidden="true">#</a> HTTP request</h6>
<p><code v-pre>GET/POST &lt;public-url&gt;/api/cms/contents-types/{column}/{value}</code></p>
<p>Column can be <code v-pre>id</code>, <code v-pre>uuid</code>, <code v-pre>name</code>, <code v-pre>slug</code>, <code v-pre>plural_slug</code>, <code v-pre>singular_slug</code> and their value.</p>
<h5 id="url-1" tabindex="-1"><a class="header-anchor" href="#url-1" aria-hidden="true">#</a> URL</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;public-url>/api/cms/contents-types/slug/blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-1" tabindex="-1"><a class="header-anchor" href="#response-samples-1" aria-hidden="true">#</a> Response samples</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "status": "success",
    "data": {
        "id": 1,
        "uuid": "1ee83ff4-892d-44eb-b236-acbbc44fbcb3",
        "name": "Blog",
        "slug": "blog",
        "plural": "Blogs",
        "plural_slug": "blogs",
        "singular": "Blog",
        "singular_slug": "blog",
        "excerpt": "Simple blog",
        "is_published": 1,
        "is_commentable": 1,
        "content_statuses": [
            "draft",
            "published"
        ],
        "total_records": null,
        "published_records": null,
        "total_comments": null,
        "meta": null,
        "created_by": null,
        "updated_by": 1,
        "deleted_by": null,
        "created_at": null,
        "updated_at": "2021-08-17 12:06:40",
        "deleted_at": null,
        "groups": {}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h3>
<h4 id="get-a-list-of-content" tabindex="-1"><a class="header-anchor" href="#get-a-list-of-content" aria-hidden="true">#</a> Get a List of Content</h4>
<p>Get a list of the <code v-pre>Content</code> objects and their properties in a list.
This API retrieves a specific field of <code v-pre>Content</code>, and returns all the properties of the Contents with <code v-pre>Pagination</code>.</p>
<h6 id="http-request-2" tabindex="-1"><a class="header-anchor" href="#http-request-2" aria-hidden="true">#</a> HTTP request</h6>
<p><code v-pre>GET/POST &lt;public-url&gt;/api/cms/contents/{plural_slug}</code></p>
<p>This will retrieves a list of <code v-pre>Content</code> by <code v-pre>plural_slug</code> of <code v-pre>Content Type</code> , and returns all the <code v-pre>Groups</code> and their <code v-pre>Fields</code> of Contents.</p>
<p>This method supports some of the query parameters to help customize the response.</p>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>q</td>
<td>Value to be search in <code v-pre>Name</code>, <code v-pre>Slug</code>, <code v-pre>Plural Slug</code> and <code v-pre>Singular Slug</code> Column</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>per_page</td>
<td><code v-pre>N</code> Item Per Page</td>
<td>Number</td>
<td>20</td>
</tr>
<tr>
<td>order</td>
<td>Sort the results of the list by a given column</td>
<td>String</td>
<td>id</td>
</tr>
<tr>
<td>order_by</td>
<td>Direction of the sort and may be either <code v-pre>asc</code> or <code v-pre>desc</code></td>
<td>String</td>
<td>desc</td>
</tr>
<tr>
<td>include_groups</td>
<td>Input <code v-pre>Group slugs</code> that you want to include</td>
<td>Array</td>
<td></td>
</tr>
<tr>
<td>exclude_groups</td>
<td>Input <code v-pre>Group slugs</code> that you want to exclude</td>
<td>Array</td>
<td></td>
</tr>
<tr>
<td>status</td>
<td>Status of Content and may be either all, draft , published and so on</td>
<td>String</td>
<td>published</td>
</tr>
<tr>
<td>has_pagination</td>
<td>Set <code v-pre>false</code> to get data with out Pagination</td>
<td>Boolean</td>
<td>true</td>
</tr>
<tr>
<td>has_simple_paginate</td>
<td>Set <code v-pre>true</code> to get data with <code v-pre>Simple Paginate</code></td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>take</td>
<td>No of Records, will work when <code v-pre>has_pagination = false</code></td>
<td>Number</td>
<td></td>
</tr>
</tbody>
</table>
<h5 id="url-2" tabindex="-1"><a class="header-anchor" href="#url-2" aria-hidden="true">#</a> URL</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>GET &lt;public-url>/api/cms/contents/blogs?page=1&amp;per_page=20&amp;
exclude_groups=header&amp;include_groups=default&amp;api_token=fsfsfsfsfsfsdfsfsdfsdfsdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="request-samples-1" tabindex="-1"><a class="header-anchor" href="#request-samples-1" aria-hidden="true">#</a> Request samples</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>POST &lt;public-url>/api/cms/contents/blogs
 
$param = [
   'q'                         => 'search_item', 
   'per_page'                  => 5,               
   'order'                     => 'name',                  
   'order_by'                  => 'asc',              
   'include_groups'            => ['default'],      // group_slug
   'exclude_groups'            => ['header'],       // group_slug
   'status'                    => 'all',            // default = published    all/draft
   'has_pagination'            => true/false/0/1,   // default = true
   'has_simple_paginate'       => true/false/0/1,   // default = false
   'take'                      => 1,2,3,4, ..... n,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-2" tabindex="-1"><a class="header-anchor" href="#response-samples-2" aria-hidden="true">#</a> Response samples</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "status": "success",
    "data": {
        "current_page": 1,
        "data": [],
        "first_page_url": "&lt;public-url>/api/cms/contents-types?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "&lt;public-url>/api/cms/contents-types?page=1",
        "links": [
            {
   {
       "status": "success",
       "data": {
           "current_page": 1,
           "data": [
               ``````````
               ``````````
           ],
           "first_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=1",
           "from": 1,
           "last_page": 2964,
           "last_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2964",
           "links": [
                {
                    "url": null,
                    "label": "&amp;laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2",
                    "label": "Next &amp;raquo;",
                    "active": false
                }
           ],
           "next_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2",
           "path": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs",
           "per_page": 20,
           "prev_page_url": null,
           "to": 20,
           "total": 59268
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-content-type-1" tabindex="-1"><a class="header-anchor" href="#get-content-type-1" aria-hidden="true">#</a> Get Content Type</h4>
<p>Get a Item of the <code v-pre>Content</code> objects and relationships of a Content object.
This will retrieves a <code v-pre>Content</code> by two params:</p>
<ul>
<li>singular_slug : <code v-pre>singular_slug</code> value of Content Type</li>
<li>content_slug : <code v-pre>slug</code> value of Content</li>
</ul>
<h6 id="http-request-3" tabindex="-1"><a class="header-anchor" href="#http-request-3" aria-hidden="true">#</a> HTTP request</h6>
<p><code v-pre>GET/POST &lt;public-url&gt;/api/cms/contents/{singular_slug}/{content_slug}</code></p>
<h5 id="url-3" tabindex="-1"><a class="header-anchor" href="#url-3" aria-hidden="true">#</a> URL</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>GET &lt;public-url>/api/cms/contents/blogs/xxxxxxxxxxxx
?include_groups=default&amp;exclude_groups=header
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="request-samples-2" tabindex="-1"><a class="header-anchor" href="#request-samples-2" aria-hidden="true">#</a> Request samples</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>POST &lt;public-url>/api/cms/contents/blogs/xxxxxxxxxxxx
 
$param = [             
   'include_groups'            => ['default'],                  // group_slug
   'exclude_groups'            => ['header'],                   // group_slug
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-3" tabindex="-1"><a class="header-anchor" href="#response-samples-3" aria-hidden="true">#</a> Response samples</h5>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{
    "status": "success",
    "data": {
        "id": 100,
        "uuid": "09047dab-e1bc-4f3c-a35b-2a881b488d7b",
        "parent_id": null,
        "vh_cms_content_type_id": 1,
        "vh_theme_id": 2,
        "vh_theme_template_id": 5,
        "name": "xxxxxxxxxxxx",
        "slug": "xxxxxxxxxxxx",
        "permalink": "xxxxxxxxxxxx",
        "author": null,
        "is_published_at": "2021-08-27 12:52:04",
        "status": "published",
        "total_comments": null,
        "meta": null,
        "created_by": 1,
        "updated_by": 1,
        "deleted_by": null,
        "created_at": "2021-08-27 12:52:04",
        "updated_at": "2021-08-27 12:52:04",
        "deleted_at": null,
        "content_fields": {},
        "template_fields": {},
        "link_prefix": "http://localhost/vikram/vaahcms-dev-env/public/blog/",
        "link": "http://localhost/vikram/vaahcms-dev-env/public/blog/xxxxxxxxxxxx",
        "content_type": {}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


