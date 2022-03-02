import{e as n}from"./app.52016828.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure" aria-hidden="true">#</a> Directory Structure</h1><ul><li><a href="#introduction"># Introduction</a></li></ul><h4 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>      Config/
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
          \u251C\u2500\u2500 Frontend/
              \u251C\u2500\u2500 FrontendController.php
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
          \u251C\u2500\u2500 frontend/
              \u251C\u2500\u2500 layouts/
              \u251C\u2500\u2500 default.blade.php
              \u251C\u2500\u2500 home.blade.php
              \u251C\u2500\u2500 welcome.blade.php
              \u251C\u2500\u2500 pages/
                  \u251C\u2500\u2500 index.blade.php
      Routes/
      \u251C\u2500\u2500 api.php
      \u251C\u2500\u2500 backend.php
      \u251C\u2500\u2500 frontend.php
      Tests/
      Vue/
        \u251C\u2500\u2500 layouts/
        \u251C\u2500\u2500 pages/
        \u251C\u2500\u2500 routes/
        \u251C\u2500\u2500 store/
        \u251C\u2500\u2500 vaahvue/
        \u251C\u2500\u2500 app.js
      composer.json
      package.json
      package-lock.json
      README.md
      webpack.mix.js 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><hr><h5 id="blade-file" tabindex="-1"><a class="header-anchor" href="#blade-file" aria-hidden="true">#</a> Blade File</h5><p>At <code>VaahCms/Themes/BlogTheme/Resources/views/frontend/</code> directory you will find 3 blade file.</p><ul><li><strong>Default</strong>: When the link has no content or page, you can call this view file.</li><li><strong>Home</strong>: This view file represent the Home Page.</li><li><strong>Welcome</strong>: This view file will shown only in new setup.</li></ul><hr><h5 id="seeds" tabindex="-1"><a class="header-anchor" href="#seeds" aria-hidden="true">#</a> Seeds</h5><p>Seeds are used to generate necessary data or sample data for the module. At <code>VaahCms/Modules/Articles/Database/Seeds</code> folder you will find two files:</p><ul><li><code>DatabaseTableSeeder.php</code>: This seeder file will be called whenever you will activate the module from the backend of the VaahCMS.</li><li><code>SampleDataTableSeeder.php</code>: This seeder file will be called whenever you will click on &quot;Import Sample Data&quot; button of the module.</li></ul><hr><h5 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h5><p>In the simplest form, assets means JavaScript, CSS, and images which lie directly under the public directory and are publicly accessible using a URL.</p><p>Laravel provides a helper function, <code>asset()</code>, which generates a URL for your assets. You can use this in blade syntax, e.g.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;script type=&#39;text/javascript&#39; src=&#39;{ { asset(&#39;js/jquery.js&#39;) } }&#39;&gt;<span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h5 id="compiling-assets" tabindex="-1"><a class="header-anchor" href="#compiling-assets" aria-hidden="true">#</a> Compiling Assets</h5><p>A mix is a configuration layer on top of Webpack, so to run the Mix tasks you only need to execute one of the NPM scripts that are included with the default Laravel <code>package.json</code> file.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Run all Mix tasks...</span>
npm run dev
<span class="token constant">OR</span>
npm run watch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>It will compile our CSS and JS files and put the build inside a public folder.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Run all Mix tasks and minify output...</span>
npm run production
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If you run <code>npm run production</code> it will actually minify everything and not create a source map for the files. However since it&#39;s modified the files are smaller and harder to read.</p><p>In VaahCms, Publish path for assets is different from <code>npm run dev</code> &amp; <code>npm run watch</code>. Assets are stored in <code>VaahCms/Themes/BlogTheme/Resources/assets</code> directory and when you reactivate <code>Theme</code>, assets will add to public folder.</p><p>We then include this CSS and JS files inside our master blade file. You can see the code inside the file webpack.mix.js file. The webpack.mix.js file resides in the <code>Module</code> and <code>Theme</code> folder.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mix <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;laravel-mix&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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

    publish_folder <span class="token operator">=</span> <span class="token string">&#39;./../../../public/vaahcms/themes/&#39;</span><span class="token punctuation">;</span>
    output_folder <span class="token operator">=</span> <span class="token string">&quot;./blogtheme/assets/&quot;</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div>`,27);function p(t,l){return e}var o=s(a,[["render",p]]);export{o as default};
