import{_ as i,r as d,o as s,c as a,a as e,d as t,b as l,e as u}from"./app.677d1a42.js";const o={},r=e("h1",{id:"api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),t(" API")],-1),c=e("p",null,[t("An API-based CMS, also known as a "),e("code",null,"headless CMS"),t(", is a relatively new approach to content management with many advantages, allow you to build websites and apps that are decoupled from their content management tools and integrated via API. This gives you the flexibility to build your front-end using your preferred tools.")],-1),v=e("p",null,"An API-based approach can save a team significant time and money in the initial implementation as well as ongoing maintenance. With an API you have full control of the presentation of your content with your own code.",-1),m=e("h3",{id:"authentication",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#authentication","aria-hidden":"true"},"#"),t(" Authentication")],-1),p={href:"https://laravel.com/docs/5.8/api-authentication",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"API Token",-1),q=u(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;public-url&gt;/api/cms/contents-types?api_token=XXXXXXXXXXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can ask to Admin for assigning you a <code>API Token</code>.</p><h3 id="content-types" tabindex="-1"><a class="header-anchor" href="#content-types" aria-hidden="true">#</a> Content Types</h3><p>Content Type is the structure or blueprint of a page or a section that your Web Page will display.</p><h4 id="get-a-list-of-content-types" tabindex="-1"><a class="header-anchor" href="#get-a-list-of-content-types" aria-hidden="true">#</a> Get a List of Content Types</h4><p>Get a list of the <code>Content Type</code> objects and their properties in a list. This API retrieves a specific field of <code>Content Types</code>, and returns all the properties of the Content Types with <code>Pagination</code>.</p><h6 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request" aria-hidden="true">#</a> HTTP request</h6><p><code>GET/POST &lt;public-url&gt;/api/cms/contents-types</code></p><p>This method supports some of the query parameters to help customize the response.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>q</td><td>Value to be search in <code>Name</code>, <code>Slug</code>, <code>Plural Slug</code> and <code>Singular Slug</code> Column</td><td>String</td><td></td></tr><tr><td>per_page</td><td><code>N</code> Item Per Page</td><td>Number</td><td>20</td></tr><tr><td>order</td><td>Sort the results of the list by a given column</td><td>String</td><td>id</td></tr><tr><td>order_by</td><td>Direction of the sort and may be either <code>asc</code> or <code>desc</code></td><td>String</td><td>desc</td></tr><tr><td>filters</td><td>Column name passes as a <code>key</code> and Value passes as a <code>key&#39;s value</code>. Columns: <code>is_published</code>, <code>is_commentable</code></td><td>Array</td><td></td></tr></tbody></table><h5 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET &lt;public-url&gt;/api/cms/contents-types?page=1&amp;per_page=1&amp;
q=pag&amp;order=asc&amp;order_by=updated_at&amp;filters[is_published]=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="request-samples" tabindex="-1"><a class="header-anchor" href="#request-samples" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST &lt;public-url&gt;/api/cms/contents-types
 
$param = [
   &#39;q&#39;                         =&gt; &#39;search_item&#39;, 
   &#39;per_page&#39;                  =&gt; 5,               
   &#39;order&#39;                     =&gt; &#39;name&#39;,                  
   &#39;order_by&#39;                  =&gt; &#39;asc&#39;,              
   &#39;filters&#39;                   =&gt; [
       &#39;is_published&#39;          =&gt; 1  
   ]
];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples" tabindex="-1"><a class="header-anchor" href="#response-samples" aria-hidden="true">#</a> Response samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;status&quot;: &quot;success&quot;,
    &quot;data&quot;: {
        &quot;current_page&quot;: 1,
        &quot;data&quot;: [
            \`\`\`\`\`\`\`\`\`\`
            \`\`\`\`\`\`\`\`\`\`
        ],
        &quot;first_page_url&quot;: &quot;&lt;public-url&gt;/api/cms/contents-types?page=1&quot;,
        &quot;from&quot;: null,
        &quot;last_page&quot;: 1,
        &quot;last_page_url&quot;: &quot;&lt;public-url&gt;/api/cms/contents-types?page=1&quot;,
        &quot;links&quot;: [
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;&amp;laquo; Previous&quot;,
                &quot;active&quot;: false
            },
            {
                &quot;url&quot;: &quot;&lt;public-url&gt;/api/cms/contents-types?page=1&quot;,
                &quot;label&quot;: &quot;1&quot;,
                &quot;active&quot;: true
            },
            {
                &quot;url&quot;: null,
                &quot;label&quot;: &quot;Next &amp;raquo;&quot;,
                &quot;active&quot;: false
            }
        ],
        &quot;next_page_url&quot;: null,
        &quot;path&quot;: &quot;&lt;public-url&gt;/api/cms/contents-types&quot;,
        &quot;per_page&quot;: 20,
        &quot;prev_page_url&quot;: null,
        &quot;to&quot;: null,
        &quot;total&quot;: 0
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-content-type" tabindex="-1"><a class="header-anchor" href="#get-content-type" aria-hidden="true">#</a> Get Content Type</h4><p>Get a Item of the <code>Content Type</code> objects and relationships of a Content Type object. This will retrieves a <code>Content Type</code> by <code>slug</code> value, and returns all the properties / Field Structure of Content Type.</p><h6 id="http-request-1" tabindex="-1"><a class="header-anchor" href="#http-request-1" aria-hidden="true">#</a> HTTP request</h6><p><code>GET/POST &lt;public-url&gt;/api/cms/contents-types/{column}/{value}</code></p><p>Column can be <code>id</code>, <code>uuid</code>, <code>name</code>, <code>slug</code>, <code>plural_slug</code>, <code>singular_slug</code> and their value.</p><h5 id="url-1" tabindex="-1"><a class="header-anchor" href="#url-1" aria-hidden="true">#</a> URL</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;public-url&gt;/api/cms/contents-types/slug/blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-1" tabindex="-1"><a class="header-anchor" href="#response-samples-1" aria-hidden="true">#</a> Response samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;status&quot;: &quot;success&quot;,
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;uuid&quot;: &quot;1ee83ff4-892d-44eb-b236-acbbc44fbcb3&quot;,
        &quot;name&quot;: &quot;Blog&quot;,
        &quot;slug&quot;: &quot;blog&quot;,
        &quot;plural&quot;: &quot;Blogs&quot;,
        &quot;plural_slug&quot;: &quot;blogs&quot;,
        &quot;singular&quot;: &quot;Blog&quot;,
        &quot;singular_slug&quot;: &quot;blog&quot;,
        &quot;excerpt&quot;: &quot;Simple blog&quot;,
        &quot;is_published&quot;: 1,
        &quot;is_commentable&quot;: 1,
        &quot;content_statuses&quot;: [
            &quot;draft&quot;,
            &quot;published&quot;
        ],
        &quot;total_records&quot;: null,
        &quot;published_records&quot;: null,
        &quot;total_comments&quot;: null,
        &quot;meta&quot;: null,
        &quot;created_by&quot;: null,
        &quot;updated_by&quot;: 1,
        &quot;deleted_by&quot;: null,
        &quot;created_at&quot;: null,
        &quot;updated_at&quot;: &quot;2021-08-17 12:06:40&quot;,
        &quot;deleted_at&quot;: null,
        &quot;groups&quot;: {}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h3><h4 id="get-a-list-of-content" tabindex="-1"><a class="header-anchor" href="#get-a-list-of-content" aria-hidden="true">#</a> Get a List of Content</h4><p>Get a list of the <code>Content</code> objects and their properties in a list. This API retrieves a specific field of <code>Content</code>, and returns all the properties of the Contents with <code>Pagination</code>.</p><h6 id="http-request-2" tabindex="-1"><a class="header-anchor" href="#http-request-2" aria-hidden="true">#</a> HTTP request</h6><p><code>GET/POST &lt;public-url&gt;/api/cms/contents/{plural_slug}</code></p><p>This will retrieves a list of <code>Content</code> by <code>plural_slug</code> of <code>Content Type</code> , and returns all the <code>Groups</code> and their <code>Fields</code> of Contents.</p><p>This method supports some of the query parameters to help customize the response.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>q</td><td>Value to be search in <code>Name</code>, <code>Slug</code>, <code>Plural Slug</code> and <code>Singular Slug</code> Column</td><td>String</td><td></td></tr><tr><td>per_page</td><td><code>N</code> Item Per Page</td><td>Number</td><td>20</td></tr><tr><td>order</td><td>Sort the results of the list by a given column</td><td>String</td><td>id</td></tr><tr><td>order_by</td><td>Direction of the sort and may be either <code>asc</code> or <code>desc</code></td><td>String</td><td>desc</td></tr><tr><td>include_groups</td><td>Input <code>Group slugs</code> that you want to include</td><td>Array</td><td></td></tr><tr><td>exclude_groups</td><td>Input <code>Group slugs</code> that you want to exclude</td><td>Array</td><td></td></tr><tr><td>status</td><td>Status of Content and may be either all, draft , published and so on</td><td>String</td><td>published</td></tr><tr><td>has_pagination</td><td>Set <code>false</code> to get data with out Pagination</td><td>Boolean</td><td>true</td></tr><tr><td>has_simple_paginate</td><td>Set <code>true</code> to get data with <code>Simple Paginate</code></td><td>Boolean</td><td>false</td></tr><tr><td>take</td><td>No of Records, will work when <code>has_pagination = false</code></td><td>Number</td><td></td></tr></tbody></table><h5 id="url-2" tabindex="-1"><a class="header-anchor" href="#url-2" aria-hidden="true">#</a> URL</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET &lt;public-url&gt;/api/cms/contents/blogs?page=1&amp;per_page=20&amp;
exclude_groups=header&amp;include_groups=default&amp;api_token=fsfsfsfsfsfsdfsfsdfsdfsdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="request-samples-1" tabindex="-1"><a class="header-anchor" href="#request-samples-1" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST &lt;public-url&gt;/api/cms/contents/blogs
 
$param = [
   &#39;q&#39;                         =&gt; &#39;search_item&#39;, 
   &#39;per_page&#39;                  =&gt; 5,               
   &#39;order&#39;                     =&gt; &#39;name&#39;,                  
   &#39;order_by&#39;                  =&gt; &#39;asc&#39;,              
   &#39;include_groups&#39;            =&gt; [&#39;default&#39;],      // group_slug
   &#39;exclude_groups&#39;            =&gt; [&#39;header&#39;],       // group_slug
   &#39;status&#39;                    =&gt; &#39;all&#39;,            // default = published    all/draft
   &#39;has_pagination&#39;            =&gt; true/false/0/1,   // default = true
   &#39;has_simple_paginate&#39;       =&gt; true/false/0/1,   // default = false
   &#39;take&#39;                      =&gt; 1,2,3,4, ..... n,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-2" tabindex="-1"><a class="header-anchor" href="#response-samples-2" aria-hidden="true">#</a> Response samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;status&quot;: &quot;success&quot;,
    &quot;data&quot;: {
        &quot;current_page&quot;: 1,
        &quot;data&quot;: [],
        &quot;first_page_url&quot;: &quot;&lt;public-url&gt;/api/cms/contents-types?page=1&quot;,
        &quot;from&quot;: null,
        &quot;last_page&quot;: 1,
        &quot;last_page_url&quot;: &quot;&lt;public-url&gt;/api/cms/contents-types?page=1&quot;,
        &quot;links&quot;: [
            {
   {
       &quot;status&quot;: &quot;success&quot;,
       &quot;data&quot;: {
           &quot;current_page&quot;: 1,
           &quot;data&quot;: [
               \`\`\`\`\`\`\`\`\`\`
               \`\`\`\`\`\`\`\`\`\`
           ],
           &quot;first_page_url&quot;: &quot;http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=1&quot;,
           &quot;from&quot;: 1,
           &quot;last_page&quot;: 2964,
           &quot;last_page_url&quot;: &quot;http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2964&quot;,
           &quot;links&quot;: [
                {
                    &quot;url&quot;: null,
                    &quot;label&quot;: &quot;&amp;laquo; Previous&quot;,
                    &quot;active&quot;: false
                },
                {
                    &quot;url&quot;: &quot;http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2&quot;,
                    &quot;label&quot;: &quot;Next &amp;raquo;&quot;,
                    &quot;active&quot;: false
                }
           ],
           &quot;next_page_url&quot;: &quot;http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2&quot;,
           &quot;path&quot;: &quot;http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs&quot;,
           &quot;per_page&quot;: 20,
           &quot;prev_page_url&quot;: null,
           &quot;to&quot;: 20,
           &quot;total&quot;: 59268
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-content-type-1" tabindex="-1"><a class="header-anchor" href="#get-content-type-1" aria-hidden="true">#</a> Get Content Type</h4><p>Get a Item of the <code>Content</code> objects and relationships of a Content object. This will retrieves a <code>Content</code> by two params:</p><ul><li>singular_slug : <code>singular_slug</code> value of Content Type</li><li>content_slug : <code>slug</code> value of Content</li></ul><h6 id="http-request-3" tabindex="-1"><a class="header-anchor" href="#http-request-3" aria-hidden="true">#</a> HTTP request</h6><p><code>GET/POST &lt;public-url&gt;/api/cms/contents/{singular_slug}/{content_slug}</code></p><h5 id="url-3" tabindex="-1"><a class="header-anchor" href="#url-3" aria-hidden="true">#</a> URL</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET &lt;public-url&gt;/api/cms/contents/blogs/xxxxxxxxxxxx
?include_groups=default&amp;exclude_groups=header
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="request-samples-2" tabindex="-1"><a class="header-anchor" href="#request-samples-2" aria-hidden="true">#</a> Request samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST &lt;public-url&gt;/api/cms/contents/blogs/xxxxxxxxxxxx
 
$param = [             
   &#39;include_groups&#39;            =&gt; [&#39;default&#39;],                  // group_slug
   &#39;exclude_groups&#39;            =&gt; [&#39;header&#39;],                   // group_slug
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-3" tabindex="-1"><a class="header-anchor" href="#response-samples-3" aria-hidden="true">#</a> Response samples</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;status&quot;: &quot;success&quot;,
    &quot;data&quot;: {
        &quot;id&quot;: 100,
        &quot;uuid&quot;: &quot;09047dab-e1bc-4f3c-a35b-2a881b488d7b&quot;,
        &quot;parent_id&quot;: null,
        &quot;vh_cms_content_type_id&quot;: 1,
        &quot;vh_theme_id&quot;: 2,
        &quot;vh_theme_template_id&quot;: 5,
        &quot;name&quot;: &quot;xxxxxxxxxxxx&quot;,
        &quot;slug&quot;: &quot;xxxxxxxxxxxx&quot;,
        &quot;permalink&quot;: &quot;xxxxxxxxxxxx&quot;,
        &quot;author&quot;: null,
        &quot;is_published_at&quot;: &quot;2021-08-27 12:52:04&quot;,
        &quot;status&quot;: &quot;published&quot;,
        &quot;total_comments&quot;: null,
        &quot;meta&quot;: null,
        &quot;created_by&quot;: 1,
        &quot;updated_by&quot;: 1,
        &quot;deleted_by&quot;: null,
        &quot;created_at&quot;: &quot;2021-08-27 12:52:04&quot;,
        &quot;updated_at&quot;: &quot;2021-08-27 12:52:04&quot;,
        &quot;deleted_at&quot;: null,
        &quot;content_fields&quot;: {},
        &quot;template_fields&quot;: {},
        &quot;link_prefix&quot;: &quot;http://localhost/vikram/vaahcms-dev-env/public/blog/&quot;,
        &quot;link&quot;: &quot;http://localhost/vikram/vaahcms-dev-env/public/blog/xxxxxxxxxxxx&quot;,
        &quot;content_type&quot;: {}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,51);function h(g,x){const n=d("ExternalLinkIcon");return s(),a("div",null,[r,c,v,m,e("p",null,[t("VaahCms supports "),e("a",p,[t("API authentication"),l(n)]),t(". This allows you to protect the URLs on your web server so that only you can access them. In order to authenticate with HTTP, you may provide a "),b,t(" with the following URL format:")]),q])}const f=i(o,[["render",h],["__file","api.html.vue"]]);export{f as default};
