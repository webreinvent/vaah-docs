<template><div><h1 id="vaahcms" tabindex="-1"><a class="header-anchor" href="#vaahcms" aria-hidden="true">#</a> Vaahcms</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This is a guide to generate crud in VaahCms. We are taking an example of Blog site.
Before jumping to crud part project should have generated module and activated.
For the module and theme set up follow below link:-
<a href="https://github.com/webreinvent/vaahcli" target="_blank" rel="noopener noreferrer">https://github.com/webreinvent/vaahcli<ExternalLinkIcon/></a></p>
<h2 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step-1</h2>
<p>Firstly need to update VaahCms self update
Use below command for that :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vaah <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step-2</h2>
<p>Use the below command to generate CRUD :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx vaah cms:crud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/crud-generate-2.png')">
<h2 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step-3</h2>
<p>Use following procedures to set up CRUD.</p>
<ul>
<li>
<p>For which you want to create CRUD: vue3 &amp; PrimeVue <code v-pre>This option is to build template</code></p>
</li>
<li>
<p>Enter the Module/Theme/Entity name: Blog <code v-pre>Name of the module, so that it will create crud inside it</code></p>
</li>
<li>
<p>Enter the section name (Backend | Frontend or Folder name): Backend <code v-pre>For module choose backend, for theme choose frontend</code></p>
</li>
<li>
<p>Vue folder name/path:(vue) <code v-pre>The directory name where vue files and component stored</code></p>
</li>
<li>
<p>Enter your database table name: blog <code v-pre>Enter the table name for which you are generating crud</code></p>
</li>
<li>
<p>Do you want to generate migration file (true/false):  (true) <code v-pre>We have to write true so that migration file will be generated</code></p>
</li>
<li>
<p>Enter your model name (singular): Blog <code v-pre>It is asking name of the model. Use table name as singular for better understanding</code></p>
</li>
<li>
<p>Enter your controller name (plural): Blogs <code v-pre>It is asking name of the controller. Use table name as plural for better understanding</code></p>
</li>
</ul>
<p><code v-pre>This video will help you to understand the generation of CRUD.</code></p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/cmd_NiBc9DdrDM.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h2 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4" aria-hidden="true">#</a> Step-4</h2>
<p>Now write migrations according to schema and re-activate module to run the migration.
Below link you can use to go module in your browser</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>This video will help you to understand how to re-activate module.</code></p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_j3WEb0p0h0.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h2 id="step-5" tabindex="-1"><a class="header-anchor" href="#step-5" aria-hidden="true">#</a> Step-5</h2>
<p>Include the laravel router file in the module's route file</p>
<p><code v-pre>VaahCms/Modules/Blog/Routes/backend.php</code></p>
<p>Add this code in above path</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">include</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'backend/routes-blog.php'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/crud-generate-5.png')">
<h2 id="step-6" tabindex="-1"><a class="header-anchor" href="#step-6" aria-hidden="true">#</a> Step-6</h2>
<p>Include the vue router file</p>
<p><code v-pre>VaahCms/Modules/Blog/Vue/routes/routes.js</code></p>
<p>Add this code in above path</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>import blog from <span class="token string double-quoted-string">"./vue-routes-blogs"</span><span class="token punctuation">;</span>
   
routes <span class="token operator">=</span> routes<span class="token operator">.</span><span class="token function">concat</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img :src="$withBase('/images/crud-generate-6.png')">
<h2 id="step-7" tabindex="-1"><a class="header-anchor" href="#step-7" aria-hidden="true">#</a> Step-7</h2>
<p>Import the route file of vue</p>
<p><code v-pre>modules/vue/store/store-blog.js</code></p>
<p>Paste <code v-pre>/backend</code>
Make sure that code should be like this</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> ajax_url <span class="token operator">=</span> base_url <span class="token operator">+</span> <span class="token string">"/backend/blog/blogs"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/crud-generate-7.png')">
<h2 id="step-8" tabindex="-1"><a class="header-anchor" href="#step-8" aria-hidden="true">#</a> Step-8</h2>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>If you are generating crud <code v-pre>First time inside module</code> then only follow this step.</p>
<p>Open <code v-pre>.env &amp; .env.custom</code> and paste below code</p>
</div>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>MODULE_TRAVEL_ENV=develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/crud-generate-8-a.png')">
<img :src="$withBase('/images/crud-generate-8-b.png')">
<h2 id="step-9" tabindex="-1"><a class="header-anchor" href="#step-9" aria-hidden="true">#</a> Step-9</h2>
<p>In this step you need run <code v-pre>npm install</code> in terminal.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">..</span>/<span class="token operator">&lt;</span>project-name<span class="token operator">></span>/vaahcms/Modules/<span class="token operator">&lt;</span>module-name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/crud-generate-9.png')">
<h2 id="step-10" tabindex="-1"><a class="header-anchor" href="#step-10" aria-hidden="true">#</a> Step-10</h2>
<p>After install dependencies for local needs to run dev server <code v-pre>npm run dev</code>.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">..</span>/<span class="token operator">&lt;</span>project-name<span class="token operator">></span>/vaahcms/Modules/<span class="token operator">&lt;</span>module-name<span class="token operator">></span>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/crud-generate-10.png')">
<p>If we are deploying in production server we need to run <code v-pre>npm run build</code>.</p>
</div></template>


