<template><div><h1 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h1>
<nav class="table-of-contents"><ul><li><router-link to="#introduction">Introduction</router-link></li><li><router-link to="#naming-conventions">Naming conventions</router-link><ul><li><router-link to="#variables">Variables</router-link></li><li><router-link to="#constants">Constants</router-link></li><li><router-link to="#functions">Functions</router-link></li><li><router-link to="#classes">Classes</router-link></li></ul></li><li><router-link to="#http-request-json-response">HTTP Request - JSON Response</router-link></li></ul></nav>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This is a guide to maintain a consistent and industry stand coding practices.</p>
<h2 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions" aria-hidden="true">#</a> Naming conventions</h2>
<h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3>
<ul>
<li>Variable names must be short, descriptive, predictable and <code v-pre>snake_cased</code></li>
</ul>
<p><strong>Wrong Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$temp_name</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$my_name</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$n1</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$var</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$n</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$na</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$tempName</span><span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$firstName</span><span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$FirstName</span><span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$getFirstName</span><span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$getfirstname</span><span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$get_first_name</span><span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$first_name</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>
<span class="token variable">$last_name</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"Leo"</span><span class="token punctuation">;</span>
<span class="token variable">$amount</span> <span class="token operator">=</span> <span class="token number">34</span><span class="token punctuation">;</span>
<span class="token variable">$price</span> <span class="token operator">=</span> <span class="token number">643</span><span class="token punctuation">;</span>
<span class="token variable">$total</span> <span class="token operator">=</span> <span class="token number">800</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="constants" tabindex="-1"><a class="header-anchor" href="#constants" aria-hidden="true">#</a> Constants</h3>
<ul>
<li>Constants must be <code v-pre>short</code>,  <code v-pre>meaningful</code>,  <code v-pre>descriptive</code> and in <code v-pre>SCREAMING_SNAKE_CASE</code>
<ul>
<li>SCREAMING_SNAKE_CASE:
<ul>
<li><code v-pre>snake_case</code> but with all capital letters</li>
<li>2 words are joined with <code v-pre>underscore</code> (<code v-pre>_</code>)</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>Wrong Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'db_HOST'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'localhost'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'DBUSER'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'db_user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'DB_pASS'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'password$%@#'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'db_name'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'db_app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'DB_HOST'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'localhost'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'DB_USER'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'db_user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'DB_PASS'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'password$%@#'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'DB_NAME'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'db_app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3>
<ul>
<li>Function/Method names must be <code v-pre>short</code>, <code v-pre>meaningful</code>,  <code v-pre>predictable</code> and <code v-pre>camelCased</code></li>
</ul>
<p><strong>Wrong Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">GetUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">Get_Url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">get_Url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">get_Url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">get_url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">geturl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">getu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">namesList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">namesList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">getFirstName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">setName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">storeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>
<ul>
<li>Class manes must be <code v-pre>meaningful</code>, <code v-pre>singlular</code> and <code v-pre>PascalCased</code>.</li>
</ul>
<p><strong>Wrong Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">cart_total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">cartTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">cart_Total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">Carttotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">Cart_total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">CartTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">Role</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers" aria-hidden="true">#</a> Controllers</h4>
<ul>
<li>Controller names must be <code v-pre>meaningful</code>, <code v-pre>singular</code> and have <code v-pre>Controller</code> suffix.</li>
<li>Controllers for page must be named after the page</li>
<li>Controllers for resources must be named after the page</li>
</ul>
<p><strong>Bad Examples</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>ArticlePageController<span class="token operator">.</span>php
ArticlesController<span class="token operator">.</span>php
article<span class="token operator">.</span>php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Example</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>ArticleController<span class="token operator">.</span>php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h4>
<ul>
<li>A model name should be 'singular<code v-pre>,</code>PascalCase/CapitalCase` and should describe the table it is representing.</li>
</ul>
<p><strong>Bad Examples</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>customer_roles
customerRoles
CustomerRoles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Example</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>CustomerRole
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h4>
<ul>
<li>Table name must be <code v-pre>snake_case</code> and <code v-pre>plural</code>.</li>
</ul>
<p><strong>Bad Examples</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>article_comment<span class="token punctuation">,</span> 
articleComments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Example</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>article_comments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="table-column-names" tabindex="-1"><a class="header-anchor" href="#table-column-names" aria-hidden="true">#</a> Table Column names</h4>
<ul>
<li>Table Column names must be <code v-pre>snake_case</code> without model name</li>
</ul>
<p><strong>Bad Examples</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>MetaTitle 
article_meta_title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Examples</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>meta_title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="http-request-json-response" tabindex="-1"><a class="header-anchor" href="#http-request-json-response" aria-hidden="true">#</a> HTTP Request - JSON Response</h2>
<p>Each <code v-pre>function</code> or <code v-pre>method</code> or <code v-pre>api</code> must return response in following format:</p>
<h4 id="success-response" tabindex="-1"><a class="header-anchor" href="#success-response" aria-hidden="true">#</a> Success Response</h4>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Action was success"</span><span class="token punctuation">,</span> <span class="token string">"Add more records"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"John"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"articles"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Article 1"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Article 2"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fail-response" tabindex="-1"><a class="header-anchor" href="#fail-response" aria-hidden="true">#</a> Fail Response</h4>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"errors"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Something went wrong"</span><span class="token punctuation">,</span> <span class="token string">"Try again"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="optional-response-variables" tabindex="-1"><a class="header-anchor" href="#optional-response-variables" aria-hidden="true">#</a> Optional Response Variables</h4>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"hint"</span><span class="token operator">:</span> <span class="token string">"Details to debug the response. Eg: role with slug 'admin' does note exist "</span><span class="token punctuation">,</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">404</span><span class="token punctuation">,</span>
  <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


