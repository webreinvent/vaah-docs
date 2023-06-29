<template><div><h1 id="laravel" tabindex="-1"><a class="header-anchor" href="#laravel" aria-hidden="true">#</a> Laravel</h1>
<nav class="table-of-contents"><ul><li><router-link to="#introduction">Introduction</router-link></li><li><router-link to="#laravel-routes">Laravel Routes</router-link></li><li><router-link to="#crud-routes">CRUD Routes</router-link><ul><li><router-link to="#html-listing-page">HTML listing page</router-link></li><li><router-link to="#listing">Listing</router-link></li><li><router-link to="#create-one-or-many-records">Create one or many records</router-link></li><li><router-link to="#bulk-update-eg-bulk-status-change">Bulk Update (eg: bulk status change)</router-link></li><li><router-link to="#bulk-delete">Bulk Delete</router-link></li><li><router-link to="#read-a-record">Read a record</router-link></li><li><router-link to="#update-a-record-update-soft-delete-status-change-etc">Update a record (update, soft delete, status change etc)</router-link></li><li><router-link to="#delete-a-record-hard-deleted">Delete a record (hard deleted)</router-link></li><li><router-link to="#fetch-a-relation-of-a-record">Fetch a relation of a record</router-link></li><li><router-link to="#attach-a-relation-to-a-record">Attach a relation to a record</router-link></li><li><router-link to="#update-a-relation-to-a-record">Update a relation to a record</router-link></li><li><router-link to="#delete-a-relation-to-a-record">Delete a relation to a record</router-link></li><li><router-link to="#fetch-list-of-relations">Fetch list of relations</router-link></li><li><router-link to="#update-list-of-relations">Update list of relations</router-link></li><li><router-link to="#delete-list-of-relations">Delete list of relations</router-link></li><li><router-link to="#include-relations">Include relations</router-link></li><li><router-link to="#include-relation-s-relations">Include relation&#39;s relations</router-link></li><li><router-link to="#sorting">Sorting</router-link></li></ul></li><li><router-link to="#performance-tuning-sql-queries">Performance Tuning SQL Queries</router-link></li><li><router-link to="#query-operators">Query Operators</router-link></li><li><router-link to="#api-routes">API Routes</router-link><ul><li><router-link to="#specify-page-number">Specify page number</router-link></li><li><router-link to="#limit-the-results">Limit the results</router-link></li><li><router-link to="#sort-by-ascending-order-of-title-then-created-by">Sort By ascending order of title then created_by</router-link></li><li><router-link to="#sort-by-in-ascending-order-of-title-then-descending-order-created-by">Sort By in ascending order of title then descending order created_by</router-link></li><li><router-link to="#include-comment-in-the-article-relationship">Include comment in the article (relationship)</router-link></li><li><router-link to="#include-comment-with-created-by-relationship">Include comment with created_by relationship</router-link></li><li><router-link to="#examples-of-filters-with-operators">Examples of filters with operators</router-link></li><li><router-link to="#multiple-operators">Multiple operators</router-link></li><li><router-link to="#get-single-record-of-article">Get single record of article</router-link></li><li><router-link to="#to-create-single-article">To create single article</router-link></li><li><router-link to="#update-single-record-of-article">Update single record of article</router-link></li><li><router-link to="#delete-single-record-of-article">Delete single record of article</router-link></li><li><router-link to="#get-single-record-of-article-with-it-s-author">Get single record of article with it&#39;s author</router-link></li><li><router-link to="#attach-author-relationship-to-the-article">Attach author (relationship) to the article</router-link></li><li><router-link to="#update-author-relationship">Update author (relationship)</router-link></li><li><router-link to="#delete-author-relationship">Delete author (relationship)</router-link></li><li><router-link to="#get-article-with-multiple-comments-relationships">Get article with multiple comments (relationships)</router-link></li><li><router-link to="#create-attach-comments-relationships">Create/Attach comments (relationships)</router-link></li><li><router-link to="#update-article-with-multiple-comments-relationships">Update article with multiple comments (relationships)</router-link></li><li><router-link to="#delete-multiples-comments-relationships">Delete multiples comments (relationships)</router-link></li></ul></li><li><router-link to="#laravel-community-guidelines-for-good-coding-practices">Laravel Community Guidelines for Good Coding Practices</router-link><ul><li><router-link to="#shorter-and-readable-syntax">Shorter and readable syntax</router-link></li><li><router-link to="#avoid-fat-methods">Avoid Fat Methods</router-link></li><li><router-link to="#prefer-to-use-eloquent-over-raw-sql-queries">Prefer to use Eloquent over raw SQL queries</router-link></li></ul></li></ul></nav>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This is a guide to maintain a consistent and industry stand code in Laravel.</p>
<h2 id="laravel-routes" tabindex="-1"><a class="header-anchor" href="#laravel-routes" aria-hidden="true">#</a> Laravel Routes</h2>
<ul>
<li>Meaningful / Predictable</li>
<li>All small letter</li>
<li>2 words must be joined with <code v-pre>hyphen</code> (<code v-pre>-</code>)</li>
</ul>
<p>This is an example of for <code v-pre>articles</code></p>
<h2 id="crud-routes" tabindex="-1"><a class="header-anchor" href="#crud-routes" aria-hidden="true">#</a> CRUD Routes</h2>
<h3 id="html-listing-page" tabindex="-1"><a class="header-anchor" href="#html-listing-page" aria-hidden="true">#</a> HTML listing page</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles/index
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/xhtml+xml</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@index</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">""</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="listing" tabindex="-1"><a class="header-anchor" href="#listing" aria-hidden="true">#</a> Listing</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@getList</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::getList</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-one-or-many-records" tabindex="-1"><a class="header-anchor" href="#create-one-or-many-records" aria-hidden="true">#</a> Create one or many records</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>POST /articles
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@createList</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::createList</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If an array is passed, multiple records will be created or else single record will be
created.</p>
<p>Eg: Single Record</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string double-quoted-string">"first_name"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'John'</span>
  <span class="token string double-quoted-string">"last_name"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Leo'</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Eg: Multiple Records</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
  <span class="token string double-quoted-string">"first_name"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'John'</span>
  <span class="token string double-quoted-string">"last_name"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Leo'</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
  <span class="token string double-quoted-string">"first_name"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'David'</span>
  <span class="token string double-quoted-string">"last_name"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'Leo'</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bulk-update-eg-bulk-status-change" tabindex="-1"><a class="header-anchor" href="#bulk-update-eg-bulk-status-change" aria-hidden="true">#</a> Bulk Update (eg: bulk status change)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>PUT /articles
PATCH /articles
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@updateList</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::updateList</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bulk-delete" tabindex="-1"><a class="header-anchor" href="#bulk-delete" aria-hidden="true">#</a> Bulk Delete</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>DELETE /articles
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@deteleList</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::deteleList</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="read-a-record" tabindex="-1"><a class="header-anchor" href="#read-a-record" aria-hidden="true">#</a> Read a record</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles/1
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@getItem</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::getItem</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-a-record-update-soft-delete-status-change-etc" tabindex="-1"><a class="header-anchor" href="#update-a-record-update-soft-delete-status-change-etc" aria-hidden="true">#</a> Update a record (update, soft delete, status change etc)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>PUT /articles/1
PATCH /articles/1
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@updateItem</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::updateItem</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-a-record-hard-deleted" tabindex="-1"><a class="header-anchor" href="#delete-a-record-hard-deleted" aria-hidden="true">#</a> Delete a record (hard deleted)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>DELETE /articles/1
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@deteleItem</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::deteleItem</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fetch-a-relation-of-a-record" tabindex="-1"><a class="header-anchor" href="#fetch-a-relation-of-a-record" aria-hidden="true">#</a> Fetch a relation of a record</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles/1/relationships/author
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@getItemAuthor</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::getItemAuthor</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="attach-a-relation-to-a-record" tabindex="-1"><a class="header-anchor" href="#attach-a-relation-to-a-record" aria-hidden="true">#</a> Attach a relation to a record</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>POST /articles/1/relationships/author
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@attachItemAuthor</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::attachItemAuthor</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-a-relation-to-a-record" tabindex="-1"><a class="header-anchor" href="#update-a-relation-to-a-record" aria-hidden="true">#</a> Update a relation to a record</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>PUT /articles/1/relationships/author
PATCH /articles/1/relationships/author
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@updateItemAuthor</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::updateItemAuthor</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-a-relation-to-a-record" tabindex="-1"><a class="header-anchor" href="#delete-a-relation-to-a-record" aria-hidden="true">#</a> Delete a relation to a record</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>DELETE /articles/1/relationships/author
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@deleteItemAuthor</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::deleteItemAuthor</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fetch-list-of-relations" tabindex="-1"><a class="header-anchor" href="#fetch-list-of-relations" aria-hidden="true">#</a> Fetch list of relations</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles/1/relationships/comments
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@getItemComments</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::getItemComments</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-list-of-relations" tabindex="-1"><a class="header-anchor" href="#update-list-of-relations" aria-hidden="true">#</a> Update list of relations</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>PUT /articles/1/relationships/comments
PATCH /articles/1/relationships/comments
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@updateItemComments</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::updateItemComments</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-list-of-relations" tabindex="-1"><a class="header-anchor" href="#delete-list-of-relations" aria-hidden="true">#</a> Delete list of relations</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>DELETE /articles/1/relationships/comments
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@deleteItemComments</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::deleteItemComments</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="include-relations" tabindex="-1"><a class="header-anchor" href="#include-relations" aria-hidden="true">#</a> Include relations</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles?include=comments
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@getList</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::getList</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="include-relation-s-relations" tabindex="-1"><a class="header-anchor" href="#include-relation-s-relations" aria-hidden="true">#</a> Include relation's relations</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles?include=comments.created_by
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@getList</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::getList</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sorting" tabindex="-1"><a class="header-anchor" href="#sorting" aria-hidden="true">#</a> Sorting</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles?sort=title,created_by
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@getList</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::getList</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="sorting-in-descending-order-of-created-by-use-desc-in-front-of-parameter" tabindex="-1"><a class="header-anchor" href="#sorting-in-descending-order-of-created-by-use-desc-in-front-of-parameter" aria-hidden="true">#</a> Sorting in descending order of <code v-pre>created_by</code>, use <code v-pre>:desc</code> in front of parameter</h6>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /articles?sort=title,created_by:desc
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Controller-Method</span><span class="token punctuation">:</span> <span class="token header-value">ArticleController@getList</span></span>
<span class="token header"><span class="token header-name keyword">Model-Method</span><span class="token punctuation">:</span> <span class="token header-value">Article::getList</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="performance-tuning-sql-queries" tabindex="-1"><a class="header-anchor" href="#performance-tuning-sql-queries" aria-hidden="true">#</a> Performance Tuning SQL Queries</h2>
<p>SQL tuning is the process of improving SQL queries to accelerate your servers performance.
It's general purpose is to reduce the amount of time it takes a user to
receive a result after issuing a query, and to reduce the amount of
resources used to process a query.</p>
<p>Big SQL queries can suffer performance issues.
Performance degradation often occurs if the database is not being properly
maintained or if queries can be rewritten more efficiently.</p>
<p>Following Query optimization tips for better performance</p>
<h4 id="apply-index-on-necessary-columns" tabindex="-1"><a class="header-anchor" href="#apply-index-on-necessary-columns" aria-hidden="true">#</a> Apply Index On Necessary Columns:</h4>
<p>Table indexes in databases help retrieve information faster and more efficiently.
An index creates a unique data column without overlapping each other.
It improves the speed of data retrieval.</p>
<h4 id="avoid-query-in-a-loop" tabindex="-1"><a class="header-anchor" href="#avoid-query-in-a-loop" aria-hidden="true">#</a> Avoid Query In A Loop:</h4>
<p>If sometimes we need to execute the same query multiple times like if
we need to insert 10 records in any table at that time don’t use
insert query in the loop instead of using bulk insert.</p>
<p>We shouldn't call Eloquent relationships method in loop.
First convert model object in to collection and then pass in to loop.</p>
<p><strong>Wrong Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">category</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">Category</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
         <span class="token string single-quoted-string">'catgeory_id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'id'</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
 
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token variable">$products</span> <span class="token operator">=</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'catgory'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$products</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=></span> <span class="token variable">$product</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$product</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$product</span><span class="token operator">-></span><span class="token property">category</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Correct Examples:</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">category</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">Category</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'catgeory_id'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'id'</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
     
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token variable">$products</span> <span class="token operator">=</span> <span class="token class-name static-context">Product</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'catgory'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token variable">$collect_products</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$products</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$collect_products</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=></span> <span class="token variable">$product</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$product</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$product</span><span class="token operator">-></span><span class="token property">category</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="avoid-too-many-joins" tabindex="-1"><a class="header-anchor" href="#avoid-too-many-joins" aria-hidden="true">#</a> Avoid too many JOINs:</h4>
<p>When you add multiple tables to a query and join them, you may overload it.
In addition, a large number of tables to retrieve data from may result in an
inefficient execution plan. When generating a plan, the SQL query optimizer
needs to identify how the tables are joined, in which order, how and when to
apply filters and aggregation.</p>
<p>JOIN elimination is one of the many techniques to achieve efficient query plans.
You can split a single query into several separate queries which can later be joined,
and thus remove unnecessary joins, subqueries, tables, etc.</p>
<h4 id="use-select-fields-instead-of-retrieve-all-data" tabindex="-1"><a class="header-anchor" href="#use-select-fields-instead-of-retrieve-all-data" aria-hidden="true">#</a> Use SELECT fields instead of retrieve all data:</h4>
<p>The SELECT statement is used to retrieve data from the database.
In the case of large databases, it is not recommended to retrieve all data
because this will take more resources on querying a huge volume of data.</p>
<p>If we execute the following query, we will retrieve all data from the Users table,
including, for example, users’ avatar pictures. The result table will contain
lots of data and will take too much memory and CPU usage.</p>
<p><strong>BAD CODE</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instead, you can specify the exact columns you need to get data from, thus,
saving database resources. In this case, SQL Server will retrieve only the
required data, and the query will have lower cost.</p>
<p><strong>GOOD CODE</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'first_name'</span><span class="token punctuation">,</span><span class="token string single-quoted-string">'last_name'</span><span class="token punctuation">,</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-exists-instead-of-first-or-count-in-condition" tabindex="-1"><a class="header-anchor" href="#use-exists-instead-of-first-or-count-in-condition" aria-hidden="true">#</a> Use Exists instead of First or Count in condition :</h4>
<p>Instead of using the count method to determine if any records exist that
match your query's constraints, you may use the <code v-pre>exists</code> and <code v-pre>doesntExist</code> methods.</p>
<p>It depends if you want to work with the user afterwards or only check if one exists.</p>
<p>If you want to use the user object if it exists:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'='</span><span class="token punctuation">,</span> <span class="token class-name static-context">Input</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span> <span class="token operator">===</span> <span class="token constant">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// user doesn't exist</span>
<span class="token punctuation">}</span>
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And if you only want to check</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'='</span><span class="token punctuation">,</span> <span class="token class-name static-context">Input</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// user found</span>
<span class="token punctuation">}</span>
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or even nicer</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'='</span><span class="token punctuation">,</span> <span class="token class-name static-context">Input</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// user found</span>
<span class="token punctuation">}</span>
   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="query-operators" tabindex="-1"><a class="header-anchor" href="#query-operators" aria-hidden="true">#</a> Query Operators</h2>
<table>
<thead>
<tr>
<th>MySql Operator</th>
<th>Query Parameter</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>=</td>
<td>eq</td>
<td>Equal to</td>
</tr>
<tr>
<td>!=</td>
<td>not</td>
<td>Not equal to</td>
</tr>
<tr>
<td>&lt;</td>
<td>lt</td>
<td>Less than</td>
</tr>
<tr>
<td>&lt;=</td>
<td>lte</td>
<td>Less than or equal to</td>
</tr>
<tr>
<td>&gt;</td>
<td>gt</td>
<td>Greater than</td>
</tr>
<tr>
<td>&gt;=</td>
<td>gte</td>
<td>Greater than or equal to</td>
</tr>
<tr>
<td>like</td>
<td>like</td>
<td>Like search query</td>
</tr>
<tr>
<td>between</td>
<td>btw</td>
<td>Between</td>
</tr>
</tbody>
</table>
<h2 id="api-routes" tabindex="-1"><a class="header-anchor" href="#api-routes" aria-hidden="true">#</a> API Routes</h2>
<h4 id="get-list-of-articles-with-pagination" tabindex="-1"><a class="header-anchor" href="#get-list-of-articles-with-pagination" aria-hidden="true">#</a> Get list of articles with pagination</h4>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>
GET /api/articles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="specify-page-number" tabindex="-1"><a class="header-anchor" href="#specify-page-number" aria-hidden="true">#</a> Specify page number</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles?page=5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="limit-the-results" tabindex="-1"><a class="header-anchor" href="#limit-the-results" aria-hidden="true">#</a> Limit the results</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles?limit=10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sort-by-ascending-order-of-title-then-created-by" tabindex="-1"><a class="header-anchor" href="#sort-by-ascending-order-of-title-then-created-by" aria-hidden="true">#</a> Sort By ascending order of title then created_by</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles?sort=title,created_by
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sort-by-in-ascending-order-of-title-then-descending-order-created-by" tabindex="-1"><a class="header-anchor" href="#sort-by-in-ascending-order-of-title-then-descending-order-created-by" aria-hidden="true">#</a> Sort By in ascending order of title then descending order created_by</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles?sort=title,created_by:desc,price
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="include-comment-in-the-article-relationship" tabindex="-1"><a class="header-anchor" href="#include-comment-in-the-article-relationship" aria-hidden="true">#</a> Include comment in the article (relationship)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles?include=comments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="include-comment-with-created-by-relationship" tabindex="-1"><a class="header-anchor" href="#include-comment-with-created-by-relationship" aria-hidden="true">#</a> Include comment with created_by relationship</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles?include=comments.created_by
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="examples-of-filters-with-operators" tabindex="-1"><a class="header-anchor" href="#examples-of-filters-with-operators" aria-hidden="true">#</a> Examples of filters with operators</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles?filter[is_active]=true
GET /api/articles?filter[created_by]=eq:5
GET /api/articles?filter[title]=like:hello
GET /api/articles?filter[price]=gt:5
GET /api/articles?filter[date]=btw:5|7

GET /api/articles?filter[is_active]=true&amp;filter[created_by]=eq:5&amp;filter[date]=btw:5|7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="multiple-operators" tabindex="-1"><a class="header-anchor" href="#multiple-operators" aria-hidden="true">#</a> Multiple operators</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles?filter[price]=gt:5|AND|lt:10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get-single-record-of-article" tabindex="-1"><a class="header-anchor" href="#get-single-record-of-article" aria-hidden="true">#</a> Get single record of article</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="to-create-single-article" tabindex="-1"><a class="header-anchor" href="#to-create-single-article" aria-hidden="true">#</a> To create single article</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>POST /api/articles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="update-single-record-of-article" tabindex="-1"><a class="header-anchor" href="#update-single-record-of-article" aria-hidden="true">#</a> Update single record of article</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>PUT /api/articles/1
PATCH /api/articles/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-single-record-of-article" tabindex="-1"><a class="header-anchor" href="#delete-single-record-of-article" aria-hidden="true">#</a> Delete single record of article</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>DELETE /api/articles/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get-single-record-of-article-with-it-s-author" tabindex="-1"><a class="header-anchor" href="#get-single-record-of-article-with-it-s-author" aria-hidden="true">#</a> Get single record of article with it's author</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles/1/relationships/author
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="attach-author-relationship-to-the-article" tabindex="-1"><a class="header-anchor" href="#attach-author-relationship-to-the-article" aria-hidden="true">#</a> Attach author (relationship) to the article</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>POST /api/articles/1/relationships/author
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="update-author-relationship" tabindex="-1"><a class="header-anchor" href="#update-author-relationship" aria-hidden="true">#</a> Update author (relationship)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>PUT /api/articles/1/relationships/author
PATCH /api/articles/1/relationships/author
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-author-relationship" tabindex="-1"><a class="header-anchor" href="#delete-author-relationship" aria-hidden="true">#</a> Delete author (relationship)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>DELETE /api/articles/1/relationships/author
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get-article-with-multiple-comments-relationships" tabindex="-1"><a class="header-anchor" href="#get-article-with-multiple-comments-relationships" aria-hidden="true">#</a> Get article with multiple comments (relationships)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>GET /api/articles/1/relationships/comments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="create-attach-comments-relationships" tabindex="-1"><a class="header-anchor" href="#create-attach-comments-relationships" aria-hidden="true">#</a> Create/Attach comments (relationships)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>POST /api/articles/1/relationships/comments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="update-article-with-multiple-comments-relationships" tabindex="-1"><a class="header-anchor" href="#update-article-with-multiple-comments-relationships" aria-hidden="true">#</a> Update article with multiple comments (relationships)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>PUT /api/articles/1/relationships/comments
PATCH /api/articles/1/relationships/comments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-multiples-comments-relationships" tabindex="-1"><a class="header-anchor" href="#delete-multiples-comments-relationships" aria-hidden="true">#</a> Delete multiples comments (relationships)</h3>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>DELETE /api/articles/1/relationships/comments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="laravel-community-guidelines-for-good-coding-practices" tabindex="-1"><a class="header-anchor" href="#laravel-community-guidelines-for-good-coding-practices" aria-hidden="true">#</a> Laravel Community Guidelines for Good Coding Practices</h2>
<h3 id="shorter-and-readable-syntax" tabindex="-1"><a class="header-anchor" href="#shorter-and-readable-syntax" aria-hidden="true">#</a> Shorter and readable syntax</h3>
<ul>
<li>Use shorter and more readable syntax where possible</li>
</ul>
<p><strong>Bad Examples</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$request</span><span class="token operator">-></span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$request</span><span class="token operator">-></span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Good Example</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">session</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$request</span><span class="token operator">-></span><span class="token property">name</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>More Examples</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">Common syntax</th>
<th style="text-align:left">Shorter and more readable syntax</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Session::get('cart')</td>
<td style="text-align:left">session('cart')</td>
</tr>
<tr>
<td style="text-align:left">$request-&gt;session()-&gt;get('cart')</td>
<td style="text-align:left">session('cart')</td>
</tr>
<tr>
<td style="text-align:left">Session::put('cart', $data)</td>
<td style="text-align:left">session(['cart' =&gt; $data])</td>
</tr>
<tr>
<td style="text-align:left">$request-&gt;input('name'), Request::get('name')</td>
<td style="text-align:left">$request-&gt;name, request('name')</td>
</tr>
<tr>
<td style="text-align:left">return Redirect::back()</td>
<td style="text-align:left">return back()</td>
</tr>
<tr>
<td style="text-align:left">is_null($object-&gt;relation) ? null : $object-&gt;relation-&gt;id</td>
<td style="text-align:left">optional($object-&gt;relation)-&gt;id</td>
</tr>
<tr>
<td style="text-align:left">return view('index')-&gt;with('title', $title)-&gt;with('client', $client)</td>
<td style="text-align:left">return view('index', compact('title', 'client'))</td>
</tr>
<tr>
<td style="text-align:left">$request-&gt;has('value') ? $request-&gt;value : 'default';</td>
<td style="text-align:left">$request-&gt;get('value', 'default')</td>
</tr>
<tr>
<td style="text-align:left">Carbon::now(), Carbon::today()</td>
<td style="text-align:left">now(), today()</td>
</tr>
<tr>
<td style="text-align:left">App::make('Class')</td>
<td style="text-align:left">app('Class')</td>
</tr>
<tr>
<td style="text-align:left">-&gt;where('column', '=', 1)</td>
<td style="text-align:left">-&gt;where('column', 1)</td>
</tr>
<tr>
<td style="text-align:left">-&gt;orderBy('created_at', 'desc')</td>
<td style="text-align:left">-&gt;latest()</td>
</tr>
<tr>
<td style="text-align:left">-&gt;orderBy('age', 'desc')</td>
<td style="text-align:left">-&gt;latest('age')</td>
</tr>
<tr>
<td style="text-align:left">-&gt;orderBy('created_at', 'asc')</td>
<td style="text-align:left">-&gt;oldest()</td>
</tr>
<tr>
<td style="text-align:left">-&gt;select('id', 'name')-&gt;get()</td>
<td style="text-align:left">-&gt;get(['id', 'name'])</td>
</tr>
<tr>
<td style="text-align:left">-&gt;first()-&gt;name</td>
<td style="text-align:left">-&gt;value('name')</td>
</tr>
</tbody>
</table>
<h3 id="avoid-fat-methods" tabindex="-1"><a class="header-anchor" href="#avoid-fat-methods" aria-hidden="true">#</a> Avoid Fat Methods</h3>
<ul>
<li>Avoid fat controllers and write frequent queries in model.</li>
<li>DB related logic should be in <code v-pre>Eloquent models</code> or in <code v-pre>Repository</code>/<code v-pre>Helper</code> classes.</li>
<li>Do not include business logic in Controllers. They should be in <code v-pre>Repository</code>/<code v-pre>Helper</code> classes.</li>
<li>Methods and Classes should adhere to the <code v-pre>Single Responsibility Principle</code>.</li>
<li>Don't use extensive if-else nesting. Instead, check for negative conditions first.</li>
<li>Do not keep commented code in methods or classes.</li>
</ul>
<p><strong>Bad Examples</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getItem</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'hrc-can-read-customers'</span><span class="token punctuation">)</span>
        <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token class-name static-context">EqCustomerUser</span><span class="token operator">::</span><span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string single-quoted-string">'hrc-can-read-customers'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// check Permissions</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token variable">$item</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">withTrashed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$item</span><span class="token punctuation">;</span>
        
            <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'failed'</span><span class="token punctuation">;</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'errors'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'User not found'</span><span class="token punctuation">;</span>
    
            <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'failed'</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'errors'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">trans</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"vaahcms::messages.permission_denied"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// $user = Auth::user();</span>
    <span class="token comment">// if(!$user) {</span>
    <span class="token comment">//    $response['status'] = 'failed';</span>
    <span class="token comment">//    $response['errors'][] = 'User not found';</span>
    <span class="token comment">//</span>
    <span class="token comment">//    return $response;</span>
    <span class="token comment">// }</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Good Examples</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment">// Add this method to Helper/Repository class</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token variable">$permission_slug</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'hrc-can-read-customers'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'failed'</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'errors'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">trans</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"vaahcms::messages.permission_denied"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'messages'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'Action is successful'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// this code will be in model</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getItem</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$permission_response</span> <span class="token operator">=</span> <span class="token class-name static-context">Helper</span><span class="token operator">::</span><span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'hrc-can-read-customers'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$permission_response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token variable">$permission_response</span><span class="token punctuation">;</span>
    
    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'failed'</span><span class="token punctuation">;</span>
        <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'errors'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'User not found'</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token variable">$item</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'id'</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">withTrashed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$item</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prefer-to-use-eloquent-over-raw-sql-queries" tabindex="-1"><a class="header-anchor" href="#prefer-to-use-eloquent-over-raw-sql-queries" aria-hidden="true">#</a> Prefer to use Eloquent over raw SQL queries</h3>
<ul>
<li>Prefer to use Eloquent over using Query Builder and raw SQL queries. Prefer collections to arrays.</li>
<li>Eloquent allows you to write readable and maintainable code. Also, Eloquent has great built-in tools like soft deletes, events, scopes etc.</li>
</ul>
<p><strong>Bad Example</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token constant">SELECT</span> <span class="token operator">*</span>
<span class="token constant">FROM</span> <span class="token string backtick-quoted-string">`articles`</span>
<span class="token constant">WHERE</span> <span class="token function">EXISTS</span> <span class="token punctuation">(</span><span class="token constant">SELECT</span> <span class="token operator">*</span>
<span class="token constant">FROM</span> <span class="token string backtick-quoted-string">`users`</span>
<span class="token constant">WHERE</span> <span class="token string backtick-quoted-string">`articles`</span><span class="token operator">.</span><span class="token string backtick-quoted-string">`user_id`</span> <span class="token operator">=</span> <span class="token string backtick-quoted-string">`users`</span><span class="token operator">.</span><span class="token string backtick-quoted-string">`id`</span>
<span class="token keyword">AND</span> <span class="token function">EXISTS</span> <span class="token punctuation">(</span><span class="token constant">SELECT</span> <span class="token operator">*</span>
<span class="token constant">FROM</span> <span class="token string backtick-quoted-string">`profiles`</span>
<span class="token constant">WHERE</span> <span class="token string backtick-quoted-string">`profiles`</span><span class="token operator">.</span><span class="token string backtick-quoted-string">`user_id`</span> <span class="token operator">=</span> <span class="token string backtick-quoted-string">`users`</span><span class="token operator">.</span><span class="token string backtick-quoted-string">`id`</span><span class="token punctuation">)</span>
<span class="token keyword">AND</span> <span class="token string backtick-quoted-string">`users`</span><span class="token operator">.</span><span class="token string backtick-quoted-string">`deleted_at`</span> <span class="token constant">IS</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
<span class="token keyword">AND</span> <span class="token string backtick-quoted-string">`verified`</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'1'</span>
<span class="token keyword">AND</span> <span class="token string backtick-quoted-string">`active`</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'1'</span>
<span class="token constant">ORDER</span> <span class="token constant">BY</span> <span class="token string backtick-quoted-string">`created_at`</span> <span class="token constant">DESC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Good Example</strong></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">Article</span><span class="token operator">::</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'user.profile'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">verified</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">latest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


