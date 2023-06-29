<template><div><h1 id="vaahcms" tabindex="-1"><a class="header-anchor" href="#vaahcms" aria-hidden="true">#</a> VaahCMS</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This is a guide to generating user crud in the module of VaahCMS.
Before jumping to the crud part project should have generated the module and activated it.
For the module and theme set up follow the below link:
<a href="https://github.com/webreinvent/vaahcli/tree/develop" target="_blank" rel="noopener noreferrer">VaahCLI<ExternalLinkIcon/></a></p>
<h2 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step-1</h2>
<p>Create a module first. <a href="https://docs.vaah.dev/vaahcms-2/backend/generate-module.html" target="_blank" rel="noopener noreferrer">Create Module<ExternalLinkIcon/></a>.
One module can have many cruds.<br>
Use the below command to generate users CRUD :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx vaah cms:users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After pressing enter.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>      This <span class="token builtin class-name">command</span> are only <span class="token keyword">for</span> Vue <span class="token number">3</span> module      
? For <span class="token function">which</span> you want to create CRUD:  <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
<span class="token operator">></span> Module<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token number">0</span>
  Theme<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.1
  Custom Path<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.2
  
  //<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>Press enter on the module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>? Enter the Module/Theme/Entity name: HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>? Enter the section name <span class="token punctuation">(</span>Backend <span class="token operator">|</span> Frontend or Folder name<span class="token punctuation">)</span>:  Backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>? Vue folder name/path:  Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>? Enter your model name <span class="token punctuation">(</span>singular<span class="token punctuation">)</span>: User 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>? Enter your controller name <span class="token punctuation">(</span>plural<span class="token punctuation">)</span>: Users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/vaahcms-two/2.x-module-user.png')">
<h2 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step-2</h2>
<p>Include the laravel router file in the module's route file</p>
<p><code v-pre>VaahCms/Modules/Helloworld/Routes/backend.php</code></p>
<p>Add this code in the last.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment">//-------------------------------------------------------</span>
<span class="token keyword">include</span> <span class="token punctuation">(</span><span class="token string double-quoted-string">"backend/routes-users.php"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//-------------------------------------------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step-3</h2>
<p>Include the vue router file.</p>
<p><code v-pre>VaahCms/Modules/Helloworld/Vue/routes/routes.js</code></p>
<p>Add this code to the above path.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment">//-------------------------------------------------------</span>
import users from <span class="token string double-quoted-string">"./vue-routes-users"</span><span class="token punctuation">;</span>
   
routes <span class="token operator">=</span> routes<span class="token operator">.</span><span class="token function">concat</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//-------------------------------------------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4" aria-hidden="true">#</a> Step-4</h2>
<p>Call router file when clicking on the users</p>
<p><code v-pre>VaahCms/Modules/Helloworld/Vue/components/aside.vue</code></p>
<p>Add this code to items of the module (VaahCms/Modules/Helloworld/Vue/components/aside.vue).</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token comment">//-------------------------------------------------------</span>
        label<span class="token punctuation">:</span> <span class="token string single-quoted-string">'HelloWorld'</span><span class="token punctuation">,</span>
        <span class="token argument-name">items</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                label<span class="token punctuation">:</span> <span class="token string single-quoted-string">'Users'</span><span class="token punctuation">,</span>
                <span class="token argument-name">icon</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">'fa-regular fa-chart-bar'</span><span class="token punctuation">,</span>
                <span class="token argument-name">to</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">"/users"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
<span class="token comment">//-------------------------------------------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Use <code v-pre>npm install</code> inside the module root folder to install dependencies for vue, and after that <code v-pre>npm run dev</code> to display vue components.</p>
</div>
<p>All steps are mentioned in this video.</p>
<figure>
<iframe width="672" height="353" src="https://www.youtube.com/embed/dqfDUU0wfRo" title="VaahCMS 2.x + Vue3 | How to create User CRUD and use pre-configured vue 3 app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</figure>
</div></template>


