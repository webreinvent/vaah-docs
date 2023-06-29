<template><div><h1 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure" aria-hidden="true">#</a> Directory Structure</h1>
<ul>
<li><a href="#introduction"># Introduction</a></li>
</ul>
<h4 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>      Config/
      ├── config.php
      Database/
      ├── Factories/
      ├── Migrations/
      ├── Seeds/
          ├── json/
          ├── DatabaseTableSeeder.php
          ├── SampleDataTableSeeder.php
      Helpers/
      Http/
      ├── Requests/
      ├── Middleware/
      ├── Controllers/
          ├── Backend/
              ├── BackendController.php
              ├── ExtendController.php
              ├── SetupController.php
          ├── Frontend/
      Libraries/
      Models/
      node_modules/
      Providers/
      Resources/
      ├── assets/
          ├── css/
          ├── js/
          ├── sass/
      ├── lang/
      ├── views/
          ├── backend/
              ├── pages/
                  ├── app.blade.php
                  ├── index.blade.php
      Routes/
      ├── api.php
      ├── backend.php
      ├── frontend.php
      Tests/
      Vue/
      ├── layouts/
          ├── Backend.vue
          ├── BackendJs.js
          ├── partials/
              ├── AsideMenu.vue

      ├── pages/
          ├── contents/
              ├── Create.vue
              ├── CreateJs.js
              ├── Edit.vue
              ├── EditJs.js
              ├── List.vue
              ├── ListJs.js
              ├── View.vue
              ├── ViewJs.js
              ├── partials/
                  ├── ListLargeView.vue
                  ├── ListLargeViewJs.js
                  ├── ListSmallView.vue
                  ├── ListSmallViewJs.js

      ├── store/
          ├── store.js
          ├── modules/
              ├── contents.js
              ├── root.js

      ├── routes/
          ├── routes.js
          ├── config/
              ├── middlewarePipeline.js
              ├── router.js
          ├── middleware/
              ├── GetAssets.js

      ├── vaahvue/
          ├── helpers/
              ├── VaahHelper.js

      ├── app.js
      composer.json
      package.json
      package-lock.json
      README.md
      webpack.mix.js  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h5 id="seeds" tabindex="-1"><a class="header-anchor" href="#seeds" aria-hidden="true">#</a> Seeds</h5>
<p>Seeds are used to generate necessary data or sample data for the module. At <code v-pre>VaahCms/Modules/Articles/Database/Seeds</code> folder you will find two files:</p>
<ul>
<li><code v-pre>DatabaseTableSeeder.php</code>: This seeder file will be called whenever you will activate the module from the backend of the VaahCMS.</li>
<li><code v-pre>SampleDataTableSeeder.php</code>: This seeder file will be called whenever you will click on &quot;Import Sample Data&quot; button of the module.</li>
</ul>
<hr>
<h5 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h5>
<p>In the simplest form, assets means JavaScript, CSS, and images which lie directly under the public directory and are publicly accessible using a URL.</p>
<p>Laravel provides a helper function, <code v-pre>asset()</code>, which generates a URL for your assets. You can use this in blade syntax, e.g.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">'text/javascript'</span> src<span class="token operator">=</span><span class="token string">'{ { asset('</span>js<span class="token operator">/</span>jquery<span class="token punctuation">.</span>js<span class="token string">') } }'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h5 id="compiling-assets" tabindex="-1"><a class="header-anchor" href="#compiling-assets" aria-hidden="true">#</a> Compiling Assets</h5>
<p>A mix is a configuration layer on top of Webpack, so to run the Mix tasks you only need to execute one of the NPM scripts that are included with the default Laravel <code v-pre>package.json</code> file.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Run all Mix tasks...</span>
npm run dev
<span class="token constant">OR</span>
npm run watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It will compile our CSS and JS files and put the build inside a public folder.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Run all Mix tasks and minify output...</span>
npm run production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run <code v-pre>npm run production</code> it will actually minify everything and not create a source map for the files. However since it's modified the files are smaller and harder to read.</p>
<p>In VaahCms, Publish path for assets is different from <code v-pre>npm run dev</code> &amp; <code v-pre>npm run watch</code>. Assets are stored in <code v-pre>VaahCms/Themes/BlogTheme/Resources/assets</code> directory and when you reactivate <code v-pre>Theme</code>, assets will add to public folder.</p>
<p>We then include this CSS and JS files inside our master blade file. You can see the code inside the file webpack.mix.js file. The webpack.mix.js file resides in the <code v-pre>Module</code> and <code v-pre>Theme</code> folder.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mix <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'laravel-mix'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs_extra <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs-extra'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token comment">/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */</span>

<span class="token keyword">let</span> publish_folder<span class="token punctuation">;</span>
<span class="token keyword">let</span> output_folder<span class="token punctuation">;</span>
<span class="token keyword">let</span> source_vue_folder<span class="token punctuation">;</span>

source_vue_folder <span class="token operator">=</span> __dirname<span class="token operator">+</span><span class="token string">'/Vue'</span><span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span>mix<span class="token punctuation">.</span><span class="token function">inProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
     |--------------------------------------------------------------------------
     | Only in Production
     |--------------------------------------------------------------------------
     */</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---------------------'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'IN PRODUCTION MODE'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'---------------------'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    publish_folder <span class="token operator">=</span> <span class="token string">'./Resources/assets/'</span><span class="token punctuation">;</span>
    output_folder <span class="token operator">=</span> <span class="token string">"./"</span><span class="token punctuation">;</span>

    mix<span class="token punctuation">.</span><span class="token function">setPublicPath</span><span class="token punctuation">(</span>publish_folder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mix<span class="token punctuation">.</span><span class="token function">js</span><span class="token punctuation">(</span>source_vue_folder<span class="token operator">+</span><span class="token string">"/app.js"</span><span class="token punctuation">,</span>  output_folder<span class="token operator">+</span><span class="token string">'/build/app.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

    publish_folder <span class="token operator">=</span> <span class="token string">'./../../../public/vaahcms/modules/'</span><span class="token punctuation">;</span>
    output_folder <span class="token operator">=</span> <span class="token string">"./articles/assets/"</span><span class="token punctuation">;</span>

    mix<span class="token punctuation">.</span><span class="token function">setPublicPath</span><span class="token punctuation">(</span>publish_folder<span class="token punctuation">)</span><span class="token punctuation">;</span>

    mix<span class="token punctuation">.</span><span class="token function">js</span><span class="token punctuation">(</span>source_vue_folder<span class="token operator">+</span><span class="token string">"/app.js"</span><span class="token punctuation">,</span>  output_folder<span class="token operator">+</span><span class="token string">'/build/app.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>



mix<span class="token punctuation">.</span><span class="token function">webpackConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'/Config/'</span><span class="token punctuation">,</span>
            <span class="token string">'/Database/'</span><span class="token punctuation">,</span>
            <span class="token string">'/Entities/'</span><span class="token punctuation">,</span>
            <span class="token string">'/Helpers/'</span><span class="token punctuation">,</span>
            <span class="token string">'/Http/'</span><span class="token punctuation">,</span>
            <span class="token string">'/Providers/'</span><span class="token punctuation">,</span>
            <span class="token string">'/Resources/'</span><span class="token punctuation">,</span>
            <span class="token string">'/Routes/'</span><span class="token punctuation">,</span>
            <span class="token string">'/node_modules/'</span><span class="token punctuation">,</span>
            <span class="token string">'/vendor/'</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


