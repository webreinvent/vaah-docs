import{_ as n,e as s}from"./app.9fb3462d.js";const a={},e=s(`<h1 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure" aria-hidden="true">#</a> Directory Structure</h1><ul><li><a href="#introduction"># Introduction</a></li></ul><h4 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>      Config/
      \u251C\u2500\u2500 config.php
      Database/
      \u251C\u2500\u2500 Factories/
      \u251C\u2500\u2500 Migrations/
      \u251C\u2500\u2500 Seeds/
          \u251C\u2500\u2500 json/
          \u251C\u2500\u2500 DatabaseTableSeeder.php
          \u251C\u2500\u2500 SampleDataTableSeeder.php
      Helpers/
      Http/
      \u251C\u2500\u2500 Requests/
      \u251C\u2500\u2500 Middleware/
      \u251C\u2500\u2500 Controllers/
          \u251C\u2500\u2500 Backend/
              \u251C\u2500\u2500 BackendController.php
              \u251C\u2500\u2500 ExtendController.php
              \u251C\u2500\u2500 SetupController.php
          \u251C\u2500\u2500 Frontend/
      Libraries/
      Models/
      node_modules/
      Providers/
      Resources/
      \u251C\u2500\u2500 assets/
          \u251C\u2500\u2500 css/
          \u251C\u2500\u2500 js/
          \u251C\u2500\u2500 sass/
      \u251C\u2500\u2500 lang/
      \u251C\u2500\u2500 views/
          \u251C\u2500\u2500 backend/
              \u251C\u2500\u2500 pages/
                  \u251C\u2500\u2500 app.blade.php
                  \u251C\u2500\u2500 index.blade.php
      Routes/
      \u251C\u2500\u2500 api.php
      \u251C\u2500\u2500 backend.php
      \u251C\u2500\u2500 frontend.php
      Tests/
      Vue/
      \u251C\u2500\u2500 layouts/
          \u251C\u2500\u2500 Backend.vue
          \u251C\u2500\u2500 BackendJs.js
          \u251C\u2500\u2500 partials/
              \u251C\u2500\u2500 AsideMenu.vue

      \u251C\u2500\u2500 pages/
          \u251C\u2500\u2500 contents/
              \u251C\u2500\u2500 Create.vue
              \u251C\u2500\u2500 CreateJs.js
              \u251C\u2500\u2500 Edit.vue
              \u251C\u2500\u2500 EditJs.js
              \u251C\u2500\u2500 List.vue
              \u251C\u2500\u2500 ListJs.js
              \u251C\u2500\u2500 View.vue
              \u251C\u2500\u2500 ViewJs.js
              \u251C\u2500\u2500 partials/
                  \u251C\u2500\u2500 ListLargeView.vue
                  \u251C\u2500\u2500 ListLargeViewJs.js
                  \u251C\u2500\u2500 ListSmallView.vue
                  \u251C\u2500\u2500 ListSmallViewJs.js

      \u251C\u2500\u2500 store/
          \u251C\u2500\u2500 store.js
          \u251C\u2500\u2500 modules/
              \u251C\u2500\u2500 contents.js
              \u251C\u2500\u2500 root.js

      \u251C\u2500\u2500 routes/
          \u251C\u2500\u2500 routes.js
          \u251C\u2500\u2500 config/
              \u251C\u2500\u2500 middlewarePipeline.js
              \u251C\u2500\u2500 router.js
          \u251C\u2500\u2500 middleware/
              \u251C\u2500\u2500 GetAssets.js

      \u251C\u2500\u2500 vaahvue/
          \u251C\u2500\u2500 helpers/
              \u251C\u2500\u2500 VaahHelper.js

      \u251C\u2500\u2500 app.js
      composer.json
      package.json
      package-lock.json
      README.md
      webpack.mix.js  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h5 id="seeds" tabindex="-1"><a class="header-anchor" href="#seeds" aria-hidden="true">#</a> Seeds</h5><p>Seeds are used to generate necessary data or sample data for the module. At <code>VaahCms/Modules/Articles/Database/Seeds</code> folder you will find two files:</p><ul><li><code>DatabaseTableSeeder.php</code>: This seeder file will be called whenever you will activate the module from the backend of the VaahCMS.</li><li><code>SampleDataTableSeeder.php</code>: This seeder file will be called whenever you will click on &quot;Import Sample Data&quot; button of the module.</li></ul><hr><h5 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h5><p>In the simplest form, assets means JavaScript, CSS, and images which lie directly under the public directory and are publicly accessible using a URL.</p><p>Laravel provides a helper function, <code>asset()</code>, which generates a URL for your assets. You can use this in blade syntax, e.g.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&#39;text/javascript&#39;</span> src<span class="token operator">=</span><span class="token string">&#39;{ { asset(&#39;</span>js<span class="token operator">/</span>jquery<span class="token punctuation">.</span>js<span class="token string">&#39;) } }&#39;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h5 id="compiling-assets" tabindex="-1"><a class="header-anchor" href="#compiling-assets" aria-hidden="true">#</a> Compiling Assets</h5><p>A mix is a configuration layer on top of Webpack, so to run the Mix tasks you only need to execute one of the NPM scripts that are included with the default Laravel <code>package.json</code> file.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Run all Mix tasks...</span>
npm run dev
<span class="token constant">OR</span>
npm run watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It will compile our CSS and JS files and put the build inside a public folder.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Run all Mix tasks and minify output...</span>
npm run production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run <code>npm run production</code> it will actually minify everything and not create a source map for the files. However since it&#39;s modified the files are smaller and harder to read.</p><p>In VaahCms, Publish path for assets is different from <code>npm run dev</code> &amp; <code>npm run watch</code>. Assets are stored in <code>VaahCms/Themes/BlogTheme/Resources/assets</code> directory and when you reactivate <code>Theme</code>, assets will add to public folder.</p><p>We then include this CSS and JS files inside our master blade file. You can see the code inside the file webpack.mix.js file. The webpack.mix.js file resides in the <code>Module</code> and <code>Theme</code> folder.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mix <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;laravel-mix&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs_extra <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs-extra&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



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

source_vue_folder <span class="token operator">=</span> __dirname<span class="token operator">+</span><span class="token string">&#39;/Vue&#39;</span><span class="token punctuation">;</span>


<span class="token keyword">if</span> <span class="token punctuation">(</span>mix<span class="token punctuation">.</span><span class="token function">inProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
     |--------------------------------------------------------------------------
     | Only in Production
     |--------------------------------------------------------------------------
     */</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;IN PRODUCTION MODE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    publish_folder <span class="token operator">=</span> <span class="token string">&#39;./Resources/assets/&#39;</span><span class="token punctuation">;</span>
    output_folder <span class="token operator">=</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">;</span>

    mix<span class="token punctuation">.</span><span class="token function">setPublicPath</span><span class="token punctuation">(</span>publish_folder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mix<span class="token punctuation">.</span><span class="token function">js</span><span class="token punctuation">(</span>source_vue_folder<span class="token operator">+</span><span class="token string">&quot;/app.js&quot;</span><span class="token punctuation">,</span>  output_folder<span class="token operator">+</span><span class="token string">&#39;/build/app.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

    publish_folder <span class="token operator">=</span> <span class="token string">&#39;./../../../public/vaahcms/modules/&#39;</span><span class="token punctuation">;</span>
    output_folder <span class="token operator">=</span> <span class="token string">&quot;./articles/assets/&quot;</span><span class="token punctuation">;</span>

    mix<span class="token punctuation">.</span><span class="token function">setPublicPath</span><span class="token punctuation">(</span>publish_folder<span class="token punctuation">)</span><span class="token punctuation">;</span>

    mix<span class="token punctuation">.</span><span class="token function">js</span><span class="token punctuation">(</span>source_vue_folder<span class="token operator">+</span><span class="token string">&quot;/app.js&quot;</span><span class="token punctuation">,</span>  output_folder<span class="token operator">+</span><span class="token string">&#39;/build/app.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>



mix<span class="token punctuation">.</span><span class="token function">webpackConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">poll</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;/Config/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/Database/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/Entities/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/Helpers/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/Http/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/Providers/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/Resources/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/Routes/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/node_modules/&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/vendor/&#39;</span><span class="token punctuation">,</span>

        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,24);function i(l,t){return e}var p=n(a,[["render",i],["__file","directory-structure.html.vue"]]);export{p as default};
