<template><div><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1>
<p>When building an  <a href="https://laravel.com/docs/8.x/eloquent-resources#introduction" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a>, you may need a transformation layer that sits between your
Eloquent models and the JSON responses that are actually returned to your application's users.
For example, you may wish to display certain attributes for a subset of
users and not others, or you may wish to always include certain relationships in the
JSON representation of your models. Eloquent's resource classes allow you to expressively
and easily transform your models and model collections into JSON.</p>
<p>Of course, you may always convert Eloquent models or collections to JSON using
their toJson methods; however, Eloquent resources provide more granular and robust
control over the JSON serialization of your models and their relationships.</p>
<h3 id="sign-in" tabindex="-1"><a class="header-anchor" href="#sign-in" aria-hidden="true">#</a> Sign In</h3>
<p>To get authorization token you need to <code v-pre>sign in</code> first. after the successfully <code v-pre>sign in</code>,
an <code v-pre>api_token</code> in the response will be there which you can use as authorization token.</p>
<p>For <code v-pre>sign in</code> follow below link :</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>signin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples" tabindex="-1"><a class="header-anchor" href="#request-samples" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params  <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples" tabindex="-1"><a class="header-anchor" href="#response-samples" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>

            .............
            .............

            <span class="token property">"api_token"</span><span class="token operator">:</span> <span class="token string">"3EsIxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdyN9"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sign-up" tabindex="-1"><a class="header-anchor" href="#sign-up" aria-hidden="true">#</a> Sign Up</h3>
<p>If you don't have an account by using sign up you can create account</p>
<p>For <code v-pre>sign up</code> follow below link :</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>signup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-1" tabindex="-1"><a class="header-anchor" href="#request-samples-1" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">first_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>               
    <span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">password_confirmation</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">is_active</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                
    <span class="token literal-property property">status</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
    <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-1" tabindex="-1"><a class="header-anchor" href="#response-samples-1" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved successfully"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h3>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>VaahCms supports <a href="https://laravel.com/docs/5.8/api-authentication" target="_blank" rel="noopener noreferrer">API authentication<ExternalLinkIcon/></a>.
This allows you to protect the URLs on your web server so that only you can access them.
In order to authenticate with HTTP, you may provide a <code v-pre>API Token</code> in Header.</p>
<p>The most common way of accessing OAuth 2.0 APIs is using a “Bearer Token”.
This is a single string which acts as the authentication of the API request,
sent in an HTTP “Authorization” header. The string is meaningless to clients using it,
and may be of varying lengths.</p>
</div>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Authorization: Bearer &lt;api-token>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can ask to Admin for assigning you a <code v-pre>API Token</code>.</p>
<p>The following is a curl example using the HTTP Authorization
header using the Bearer schema with a line break and spaces for readability.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">'Authorization: Bearer &lt;api-token>'</span> <span class="token punctuation">\</span>
     <span class="token operator">&lt;</span>public-url<span class="token operator">></span>/api/users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="registration" tabindex="-1"><a class="header-anchor" href="#registration" aria-hidden="true">#</a> Registration : -</h3>
<h4 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> Create</h4>
<p>Create new registration with HTTP request. During the creation you can set up attributes.</p>
<h5 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-2" tabindex="-1"><a class="header-anchor" href="#request-samples-2" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span>                 
    <span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">display_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">designation</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">first_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>              
    <span class="token literal-property property">middle_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">country_calling_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">bio</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timezone</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alternate_email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatar_url</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">birth</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">country</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">country_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                  
    <span class="token literal-property property">activation_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activation_code_sent_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activated_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">invited_by</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">invited_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">invited_for_key</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">invited_for_value</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">user_id</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user_created_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">created_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">registration_id</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token string">""</span>                     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-2" tabindex="-1"><a class="header-anchor" href="#response-samples-2" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved successfully."</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list" tabindex="-1"><a class="header-anchor" href="#get-a-list" aria-hidden="true">#</a> Get a List</h4>
<p>Get a list of the Registration objects and their properties in a list with Pagination.</p>
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
<td>Value to be search in <code v-pre>first_name</code>, <code v-pre>middle_name</code>, <code v-pre>last_name</code>, <code v-pre>display_name</code>, <code v-pre>email</code> and <code v-pre>id</code> Column</td>
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
<td>from</td>
<td>Initial Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>to</td>
<td>Final Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>status</td>
<td>Status of Registration and may be either <code v-pre>email-verification-vending</code>, <code v-pre>email-verified</code> or <code v-pre>user-created</code></td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>trashed</td>
<td>Set true to show <code v-pre>Trashed (Soft Delete)</code> data</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h5 id="url-1" tabindex="-1"><a class="header-anchor" href="#url-1" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>registrations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-3" tabindex="-1"><a class="header-anchor" href="#request-samples-3" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">from</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span>     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-3" tabindex="-1"><a class="header-anchor" href="#response-samples-3" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/registrations?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/registrations?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/registrations?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/registrations"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item" tabindex="-1"><a class="header-anchor" href="#get-item" aria-hidden="true">#</a> Get Item</h4>
<p>Get a Item of the Registration objects. This will retrieves a User by their custom attributes,
and returns all the properties of Registration.</p>
<p>Column can be id, uuid, email, username or Registration's attribute and their value.</p>
<h5 id="url-2" tabindex="-1"><a class="header-anchor" href="#url-2" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-4" tabindex="-1"><a class="header-anchor" href="#request-samples-4" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
   <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-4" tabindex="-1"><a class="header-anchor" href="#response-samples-4" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h4>
<p>Simple HTTP request to Registrations API and you can update standard attributes for a user within few seconds!</p>
<p>Column can be id, uuid, email, username or Registration's attribute and their value.</p>
<h5 id="url-3" tabindex="-1"><a class="header-anchor" href="#url-3" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-5" tabindex="-1"><a class="header-anchor" href="#request-samples-5" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span>                 
    <span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                
    <span class="token literal-property property">display_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">designation</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">first_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>               
    <span class="token literal-property property">middle_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
    <span class="token literal-property property">country_calling_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">bio</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timezone</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alternate_email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatar_url</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">birth</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">country</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">country_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                  
    <span class="token literal-property property">activation_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activation_code_sent_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activated_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">invited_by</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">invited_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">invited_for_key</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">invited_for_value</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">user_id</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user_created_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">created_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">registration_id</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token string">""</span>                     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-5" tabindex="-1"><a class="header-anchor" href="#response-samples-5" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h4>
<p>Simple HTTP request to Registration API to delete registration.</p>
<p>Column can be id, uuid, email, username or Registration's attribute and their value.</p>
<h5 id="url-4" tabindex="-1"><a class="header-anchor" href="#url-4" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-6" tabindex="-1"><a class="header-anchor" href="#response-samples-6" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Action was successful"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create-user" tabindex="-1"><a class="header-anchor" href="#create-user" aria-hidden="true">#</a> Create User</h4>
<p>Simple HTTP request to Registration API to create User.</p>
<h5 id="url-5" tabindex="-1"><a class="header-anchor" href="#url-5" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>registrations<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>create<span class="token operator">-</span>user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-7" tabindex="-1"><a class="header-anchor" href="#response-samples-7" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            ...........
            ...........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"User is created."</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="users" tabindex="-1"><a class="header-anchor" href="#users" aria-hidden="true">#</a> Users</h3>
<p>The <RouterLink to="/vaahcms/basic/users.html">User</RouterLink> API provides operations to manage users in your organization.</p>
<h4 id="create-user-1" tabindex="-1"><a class="header-anchor" href="#create-user-1" aria-hidden="true">#</a> Create user</h4>
<p>Create new user with HTTP request. During the creation you can set up attributes.</p>
<h5 id="url-6" tabindex="-1"><a class="header-anchor" href="#url-6" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'Accept'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>api_token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"&lt;public-url>/api/users/create"</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="request-samples-6" tabindex="-1"><a class="header-anchor" href="#request-samples-6" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">display_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">designation</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">first_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">middle_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">last_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">country_calling_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">phone</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bio</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">timezone</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">alternate_email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">avatar_url</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">birth</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">country</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">country_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">is_active</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">activation_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">activation_code_sent_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">activated_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">invited_by</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">invited_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">invited_for_key</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">invited_for_value</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">user_id</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">user_created_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">created_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">registration_id</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token string">""</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-8" tabindex="-1"><a class="header-anchor" href="#response-samples-8" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           ..........
           ..........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved successfully."</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list-of-users" tabindex="-1"><a class="header-anchor" href="#get-a-list-of-users" aria-hidden="true">#</a> Get a List of Users</h4>
<p>Get a list of the <code v-pre>User</code> objects and their properties in a list with <code v-pre>Pagination</code>.</p>
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
<td>Value to be search in <code v-pre>first_name</code>, <code v-pre>middle_name</code>, <code v-pre>last_name</code>, <code v-pre>display_name</code>, <code v-pre>email</code> and <code v-pre>id</code> Column</td>
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
<td>from</td>
<td>Initial Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>to</td>
<td>Final Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>status</td>
<td>Status of User and may be either <code v-pre>active</code> or <code v-pre>inactive</code></td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>trashed</td>
<td>Set true to show <code v-pre>Trashed (Soft Delete)</code> data</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h5 id="url-7" tabindex="-1"><a class="header-anchor" href="#url-7" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'Accept'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>api_token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"&lt;public-url>/api/users"</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="request-samples-7" tabindex="-1"><a class="header-anchor" href="#request-samples-7" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
     <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
     <span class="token literal-property property">from</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
     <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
     <span class="token literal-property property">status</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
     <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
     <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-9" tabindex="-1"><a class="header-anchor" href="#response-samples-9" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token string">""</span>success"<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/users?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/users?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/users?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/users"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-user-item" tabindex="-1"><a class="header-anchor" href="#get-user-item" aria-hidden="true">#</a> Get User Item</h4>
<p>Get a Item of the <code v-pre>User</code> objects .
This will retrieves a <code v-pre>User</code> by their <code v-pre>custom attributes</code>, and returns all the properties of User.</p>
<p>Column can be <code v-pre>id</code>, <code v-pre>uuid</code>, <code v-pre>email</code>, <code v-pre>username</code> or User's attribute and their value.</p>
<h5 id="url-8" tabindex="-1"><a class="header-anchor" href="#url-8" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>cms<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-8" tabindex="-1"><a class="header-anchor" href="#request-samples-8" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

   <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span>                  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-10" tabindex="-1"><a class="header-anchor" href="#response-samples-10" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-1" tabindex="-1"><a class="header-anchor" href="#update-1" aria-hidden="true">#</a> Update</h4>
<p>Simple HTTP request to Users API and you can update standard attributes for a user within few seconds!</p>
<p>Column can be <code v-pre>id</code>, <code v-pre>uuid</code>, <code v-pre>email</code>, <code v-pre>username</code> or User's attribute and their value.</p>
<h5 id="url-9" tabindex="-1"><a class="header-anchor" href="#url-9" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-9" tabindex="-1"><a class="header-anchor" href="#request-samples-9" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">display_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">designation</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">first_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">middle_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gender</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">country_calling_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bio</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">website</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timezone</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alternate_email</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatar_url</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">birth</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">country</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">country_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_login_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_login_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">remember_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">login_otp</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">api_token_used_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">api_token_used_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">is_active</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">activated_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">affiliate_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">affiliate_code_used_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">reset_password_code</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">reset_password_code_sent_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">reset_password_code_used_at</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foreign_user_id</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token literal-property property">created_ip</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-11" tabindex="-1"><a class="header-anchor" href="#response-samples-11" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-1" tabindex="-1"><a class="header-anchor" href="#delete-1" aria-hidden="true">#</a> Delete</h4>
<p>Simple HTTP request to Users API to delete user.</p>
<p>Column can be <code v-pre>id</code>, <code v-pre>uuid</code>, <code v-pre>email</code>, <code v-pre>username</code> or User's attribute and their value.</p>
<h5 id="url-10" tabindex="-1"><a class="header-anchor" href="#url-10" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-12" tabindex="-1"><a class="header-anchor" href="#response-samples-12" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Action was successful"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-user-s-roles" tabindex="-1"><a class="header-anchor" href="#get-user-s-roles" aria-hidden="true">#</a> Get User's Roles</h4>
<p>Get <code v-pre>user's roles</code> via GET/POST request.</p>
<p>Column can be <code v-pre>id</code>, <code v-pre>uuid</code>, <code v-pre>email</code>, <code v-pre>username</code> or User's attribute and their value.</p>
<h5 id="url-11" tabindex="-1"><a class="header-anchor" href="#url-11" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>roles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-10" tabindex="-1"><a class="header-anchor" href="#request-samples-10" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-13" tabindex="-1"><a class="header-anchor" href="#response-samples-13" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"roles"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="user-has-role" tabindex="-1"><a class="header-anchor" href="#user-has-role" aria-hidden="true">#</a> User has Role</h4>
<p>API to check if an user has a specific role.</p>
<p>Column can be <code v-pre>id</code>, <code v-pre>uuid</code>, <code v-pre>email</code>, <code v-pre>username</code> or User's attribute and their value.</p>
<h5 id="url-12" tabindex="-1"><a class="header-anchor" href="#url-12" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>role_slug<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-14" tabindex="-1"><a class="header-anchor" href="#response-samples-14" aria-hidden="true">#</a> Response samples</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">"data"</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token operator">/</span><span class="token constant boolean">false</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"success"</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-user-s-permissions" tabindex="-1"><a class="header-anchor" href="#get-user-s-permissions" aria-hidden="true">#</a> Get User's Permissions</h4>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Get <code v-pre>user's permissions</code> via GET/POST request.</p>
<p>Column can be <code v-pre>id</code>, <code v-pre>uuid</code>, <code v-pre>email</code>, <code v-pre>username</code> or User's attribute and their value.</p>
</div>
<h5 id="url-13" tabindex="-1"><a class="header-anchor" href="#url-13" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>permissions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-11" tabindex="-1"><a class="header-anchor" href="#request-samples-11" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-15" tabindex="-1"><a class="header-anchor" href="#response-samples-15" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"permissions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="user-has-permission" tabindex="-1"><a class="header-anchor" href="#user-has-permission" aria-hidden="true">#</a> User has Permission</h4>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>API to check if an user has a specific permission.</p>
<p>Column can be <code v-pre>id</code>, <code v-pre>uuid</code>, <code v-pre>email</code>, <code v-pre>username</code> or User's attribute and their value.</p>
</div>
<h5 id="url-14" tabindex="-1"><a class="header-anchor" href="#url-14" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>permissions<span class="token operator">/</span><span class="token punctuation">{</span>permission_slug<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-16" tabindex="-1"><a class="header-anchor" href="#response-samples-16" aria-hidden="true">#</a> Response samples</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">"data"</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token operator">/</span><span class="token constant boolean">false</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"success"</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles : -</h3>
<h4 id="create-1" tabindex="-1"><a class="header-anchor" href="#create-1" aria-hidden="true">#</a> Create</h4>
<p>Create new role with HTTP request. During the creation you can set up attributes.</p>
<h5 id="url-15" tabindex="-1"><a class="header-anchor" href="#url-15" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-12" tabindex="-1"><a class="header-anchor" href="#request-samples-12" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span>                 
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">slug</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">details</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                  
    <span class="token literal-property property">is_active</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-17" tabindex="-1"><a class="header-anchor" href="#response-samples-17" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           ..........
           ..........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved successfully."</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list-1" tabindex="-1"><a class="header-anchor" href="#get-a-list-1" aria-hidden="true">#</a> Get a List</h4>
<p>Get a list of the Role objects and their properties in a list with Pagination.</p>
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
<td>Value to be search in <code v-pre>name</code> and <code v-pre>slug</code> Column</td>
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
<td>from</td>
<td>Initial Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>to</td>
<td>Final Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>filter</td>
<td>Status of Role and may be either <code v-pre>active</code>, <code v-pre>inactive</code>, <code v-pre>frontend</code> or <code v-pre>backend</code></td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>trashed</td>
<td>Set true to show <code v-pre>Trashed (Soft Delete)</code> data</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h5 id="url-16" tabindex="-1"><a class="header-anchor" href="#url-16" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>roles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-13" tabindex="-1"><a class="header-anchor" href="#request-samples-13" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">from</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                      
    <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                        
    <span class="token literal-property property">filter</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span>                         
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-18" tabindex="-1"><a class="header-anchor" href="#response-samples-18" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/roles?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/roles?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1:8000http://127.0.0.1:8000/api/roles?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/roles"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item-1" tabindex="-1"><a class="header-anchor" href="#get-item-1" aria-hidden="true">#</a> Get Item</h4>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Get a Item of the Role objects . This will retrieve a Role by their custom attributes,
and returns all the properties of Role.</p>
<p>Column can be id, uuid, email, username or Role's attribute and their value.</p>
</div>
<h5 id="url-17" tabindex="-1"><a class="header-anchor" href="#url-17" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-14" tabindex="-1"><a class="header-anchor" href="#request-samples-14" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

   <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
   <span class="token literal-property property">trashedtrashed</span><span class="token operator">:</span><span class="token string">""</span>                     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-19" tabindex="-1"><a class="header-anchor" href="#response-samples-19" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-2" tabindex="-1"><a class="header-anchor" href="#update-2" aria-hidden="true">#</a> Update</h4>
<p>Simple HTTP requests to Role API and you can update standard attributes for a role within few seconds!</p>
<p>Column can be id, uuid, email, username or Role's attribute and their value.</p>
<h5 id="url-18" tabindex="-1"><a class="header-anchor" href="#url-18" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-15" tabindex="-1"><a class="header-anchor" href="#request-samples-15" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">slug</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">details</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                  
    <span class="token literal-property property">is_active</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-20" tabindex="-1"><a class="header-anchor" href="#response-samples-20" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-2" tabindex="-1"><a class="header-anchor" href="#delete-2" aria-hidden="true">#</a> Delete</h4>
<p>Simple HTTP request to Role API to delete user.</p>
<p>Column can be id, uuid, email, username or Role's attribute and their value.</p>
<h5 id="url-19" tabindex="-1"><a class="header-anchor" href="#url-19" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-21" tabindex="-1"><a class="header-anchor" href="#response-samples-21" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Action was successful"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-role-s-users" tabindex="-1"><a class="header-anchor" href="#get-role-s-users" aria-hidden="true">#</a> Get Role's Users</h4>
<p>Get role's users via GET/POST request.</p>
<p>Column can be id, uuid, email, username or Role's attribute and their value.</p>
<h5 id="url-20" tabindex="-1"><a class="header-anchor" href="#url-20" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-16" tabindex="-1"><a class="header-anchor" href="#request-samples-16" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span>              
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-22" tabindex="-1"><a class="header-anchor" href="#response-samples-22" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"role"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"users"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-role-s-permissions" tabindex="-1"><a class="header-anchor" href="#get-role-s-permissions" aria-hidden="true">#</a> Get Role's Permissions</h4>
<p>Get role's permissions via GET/POST request.</p>
<p>Column can be id, uuid, email, username or Role's attribute and their value.</p>
<h5 id="url-21" tabindex="-1"><a class="header-anchor" href="#url-21" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>permissions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-17" tabindex="-1"><a class="header-anchor" href="#request-samples-17" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span>      
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-23" tabindex="-1"><a class="header-anchor" href="#response-samples-23" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"role"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"permissions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="permission" tabindex="-1"><a class="header-anchor" href="#permission" aria-hidden="true">#</a> Permission : -</h3>
<h4 id="get-a-list-2" tabindex="-1"><a class="header-anchor" href="#get-a-list-2" aria-hidden="true">#</a> Get a List</h4>
<p>Get a list of the Permission objects and their properties in a list with Pagination.</p>
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
<td>Value to be search in <code v-pre>name</code> and <code v-pre>slug</code> Column</td>
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
<td>from</td>
<td>Initial Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>to</td>
<td>Final Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>filter</td>
<td>Status of Permission and may be either <code v-pre>active</code>, <code v-pre>inactive</code> or <code v-pre>{module_name}</code></td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>section</td>
<td>if filter = {module_name}</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>trashed</td>
<td>Set true to show <code v-pre>Trashed (Soft Delete)</code> data</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h5 id="url-22" tabindex="-1"><a class="header-anchor" href="#url-22" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>permissions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-18" tabindex="-1"><a class="header-anchor" href="#request-samples-18" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">from</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                        
    <span class="token literal-property property">filter</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">section</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                  
    <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span>                     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-24" tabindex="-1"><a class="header-anchor" href="#response-samples-24" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/permissions?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/permissions?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/permissions?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/permissions"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item-2" tabindex="-1"><a class="header-anchor" href="#get-item-2" aria-hidden="true">#</a> Get Item</h4>
<p>Get a Item of the Permission objects . This will retrieves a User by their custom attributes, and returns all the properties of Permission.</p>
<p>Column can be id, uuid, email, username or Permission's attribute and their value.</p>
<h5 id="url-23" tabindex="-1"><a class="header-anchor" href="#url-23" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>permissions<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-19" tabindex="-1"><a class="header-anchor" href="#request-samples-19" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

   <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
   <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-25" tabindex="-1"><a class="header-anchor" href="#response-samples-25" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-3" tabindex="-1"><a class="header-anchor" href="#delete-3" aria-hidden="true">#</a> Delete</h4>
<p>Simple HTTP request to Users API to delete permission.</p>
<p>Column can be id, uuid, email, username or Permission's attribute and their value.</p>
<h5 id="url-24" tabindex="-1"><a class="header-anchor" href="#url-24" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>roles<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-26" tabindex="-1"><a class="header-anchor" href="#response-samples-26" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Action was successful"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-permission-s-users" tabindex="-1"><a class="header-anchor" href="#get-permission-s-users" aria-hidden="true">#</a> Get Permission's Users</h4>
<p>Get permission's users via GET/POST request.</p>
<p>Column can be id, uuid, email, username or Role's attribute and their value.</p>
<h5 id="url-25" tabindex="-1"><a class="header-anchor" href="#url-25" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>permissions<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-20" tabindex="-1"><a class="header-anchor" href="#request-samples-20" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span>      
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-27" tabindex="-1"><a class="header-anchor" href="#response-samples-27" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"role"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"users"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-permission-s-roles" tabindex="-1"><a class="header-anchor" href="#get-permission-s-roles" aria-hidden="true">#</a> Get Permission's Roles</h4>
<p>Get permission's roles via GET/POST request.</p>
<h5 id="url-26" tabindex="-1"><a class="header-anchor" href="#url-26" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>permissions<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>roles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-21" tabindex="-1"><a class="header-anchor" href="#request-samples-21" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span>      
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-28" tabindex="-1"><a class="header-anchor" href="#response-samples-28" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"role"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            .............
            .............
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"permissions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="taxonomy" tabindex="-1"><a class="header-anchor" href="#taxonomy" aria-hidden="true">#</a> Taxonomy : -</h3>
<h4 id="create-2" tabindex="-1"><a class="header-anchor" href="#create-2" aria-hidden="true">#</a> Create</h4>
<p>Create new Create with HTTP request. During the creation you can set up attributes.</p>
<h5 id="url-27" tabindex="-1"><a class="header-anchor" href="#url-27" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-22" tabindex="-1"><a class="header-anchor" href="#request-samples-22" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>                
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">slug</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-29" tabindex="-1"><a class="header-anchor" href="#response-samples-29" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           ..........
           ..........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved successfully."</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list-3" tabindex="-1"><a class="header-anchor" href="#get-a-list-3" aria-hidden="true">#</a> Get a List</h4>
<p>Get a list of the Taxonomy objects and their properties in a list with Pagination.</p>
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
<td>Value to be search in <code v-pre>name</code> and <code v-pre>slug</code> Column</td>
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
<td>from</td>
<td>Initial Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>to</td>
<td>Final Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>status</td>
<td>Status of taxonomy and may be either <code v-pre>active</code> or <code v-pre>inactive</code></td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>trashed</td>
<td>Set true to show <code v-pre>Trashed (Soft Delete)</code> data</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h5 id="url-28" tabindex="-1"><a class="header-anchor" href="#url-28" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-23" tabindex="-1"><a class="header-anchor" href="#request-samples-23" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">q</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                         
    <span class="token literal-property property">from</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                        
    <span class="token literal-property property">status</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">types</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                  
    <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span>                     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-30" tabindex="-1"><a class="header-anchor" href="#response-samples-30" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/taxonomies?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/taxonomies?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/taxonomies?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/taxonomies"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item-3" tabindex="-1"><a class="header-anchor" href="#get-item-3" aria-hidden="true">#</a> Get Item</h4>
<p>Get a Item of the Taxonomy objects . This will retrieves a User by their custom attributes,
and returns all the properties of Taxonomy.</p>
<p>Column can be id, uuid, email, username or Taxonomy's attribute and their value.</p>
<h5 id="url-29" tabindex="-1"><a class="header-anchor" href="#url-29" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-24" tabindex="-1"><a class="header-anchor" href="#request-samples-24" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

   <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
   <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-31" tabindex="-1"><a class="header-anchor" href="#response-samples-31" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-3" tabindex="-1"><a class="header-anchor" href="#update-3" aria-hidden="true">#</a> Update</h4>
<p>Simple HTTP request to Taxonomy API and you can update standard attributes for a user within few seconds!</p>
<p>Column can be id, uuid, email, username or Taxonomy's attribute and their value.</p>
<h5 id="url-30" tabindex="-1"><a class="header-anchor" href="#url-30" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-25" tabindex="-1"><a class="header-anchor" href="#request-samples-25" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">slug</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-32" tabindex="-1"><a class="header-anchor" href="#response-samples-32" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-4" tabindex="-1"><a class="header-anchor" href="#delete-4" aria-hidden="true">#</a> Delete</h4>
<p>Simple HTTP request to Users API to delete taxonomy.</p>
<p>Column can be id, uuid, email, username or Taxonomy's attribute and their value.</p>
<h5 id="url-31" tabindex="-1"><a class="header-anchor" href="#url-31" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomies<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-33" tabindex="-1"><a class="header-anchor" href="#response-samples-33" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Action was successful"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="taxonomy-type" tabindex="-1"><a class="header-anchor" href="#taxonomy-type" aria-hidden="true">#</a> Taxonomy Type : -</h3>
<h4 id="create-3" tabindex="-1"><a class="header-anchor" href="#create-3" aria-hidden="true">#</a> Create</h4>
<p>Create new Taxonomy Type with HTTP request. During the creation you can set up attributes.</p>
<h5 id="url-32" tabindex="-1"><a class="header-anchor" href="#url-32" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types<span class="token operator">/</span>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-26" tabindex="-1"><a class="header-anchor" href="#request-samples-26" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">slug</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-34" tabindex="-1"><a class="header-anchor" href="#response-samples-34" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           ..........
           ..........
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved successfully."</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-a-list-4" tabindex="-1"><a class="header-anchor" href="#get-a-list-4" aria-hidden="true">#</a> Get a List</h4>
<p>Get a list of the Taxonomy Type objects and their properties in a list with Pagination.</p>
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
<td>Value to be search in <code v-pre>name</code> and <code v-pre>slug</code> Column</td>
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
<td>from</td>
<td>Initial Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>to</td>
<td>Final Date</td>
<td>String<br />(Y-m-d)</td>
<td></td>
</tr>
<tr>
<td>with_children</td>
<td>When true, get Response with children attribute</td>
<td>Boolean</td>
<td>false</td>
</tr>
<tr>
<td>trashed</td>
<td>Set true to show <code v-pre>Trashed (Soft Delete)</code> data</td>
<td>Boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h5 id="url-33" tabindex="-1"><a class="header-anchor" href="#url-33" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-27" tabindex="-1"><a class="header-anchor" href="#request-samples-27" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">slug</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">to</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>                 
    <span class="token literal-property property">per_page</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">with_children</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-35" tabindex="-1"><a class="header-anchor" href="#response-samples-35" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"current_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                ..............
                ..............
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"first_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/taxonomy-types?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"from"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"last_page_url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/taxonomy-types?page=1"</span><span class="token punctuation">,</span>
            <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"&amp;laquo; Previous"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/taxonomy-types?page=1"</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                    <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Next &amp;raquo;"</span><span class="token punctuation">,</span>
                    <span class="token property">"active"</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"next_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"&lt;public-url>/api/taxonomy-types"</span><span class="token punctuation">,</span>
            <span class="token property">"per_page"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token property">"prev_page_url"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">"to"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-item-4" tabindex="-1"><a class="header-anchor" href="#get-item-4" aria-hidden="true">#</a> Get Item</h4>
<p>Get a Item of the Taxonomy Type objects . This will retrieves a User by their custom attributes,
and returns all the properties of Taxonomy Type.</p>
<p>Column can be id, uuid, email, username or Taxonomy Type's attribute and their value.</p>
<h5 id="url-34" tabindex="-1"><a class="header-anchor" href="#url-34" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-28" tabindex="-1"><a class="header-anchor" href="#request-samples-28" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

   <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span>                 
   <span class="token literal-property property">trashed</span><span class="token operator">:</span><span class="token string">''</span>                    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-36" tabindex="-1"><a class="header-anchor" href="#response-samples-36" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        .............
        .............
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-4" tabindex="-1"><a class="header-anchor" href="#update-4" aria-hidden="true">#</a> Update</h4>
<p>Simple HTTP request to Taxonomy type API and you can update standard attributes for a user within few seconds!</p>
<p>Column can be id, uuid, email, username or Taxonomy type's attribute and their value.</p>
<h5 id="url-35" tabindex="-1"><a class="header-anchor" href="#url-35" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span>update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="request-samples-29" tabindex="-1"><a class="header-anchor" href="#request-samples-29" aria-hidden="true">#</a> Request samples</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">api_token</span><span class="token operator">:</span><span class="token string">''</span>            
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                    
    <span class="token literal-property property">slug</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                     
    <span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>                   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="response-samples-37" tabindex="-1"><a class="header-anchor" href="#response-samples-37" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Saved"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ...........
        ...........
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-5" tabindex="-1"><a class="header-anchor" href="#delete-5" aria-hidden="true">#</a> Delete</h4>
<p>Simple HTTP request to Users API to delete taxonomy type.</p>
<p>Column can be id, uuid, email, username or Taxonomy type's attribute and their value.</p>
<h5 id="url-36" tabindex="-1"><a class="header-anchor" href="#url-36" aria-hidden="true">#</a> URL</h5>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">GET</span><span class="token operator">/</span><span class="token constant">POST</span> <span class="token operator">&lt;</span><span class="token keyword">public</span><span class="token operator">-</span>url<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>taxonomy<span class="token operator">-</span>types<span class="token operator">/</span><span class="token punctuation">{</span>column<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="response-samples-38" tabindex="-1"><a class="header-anchor" href="#response-samples-38" aria-hidden="true">#</a> Response samples</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"Action was successful"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


