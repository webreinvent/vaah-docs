<template><div><h1 id="develop-module" tabindex="-1"><a class="header-anchor" href="#develop-module" aria-hidden="true">#</a> Develop Module</h1>
<h5 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h5>
<p>The purpose of this tutorial is to develop a VaahCMS Module for the management of articles with CRUD operations in the backend of the VaahCMS.</p>
<h5 id="step-1-install-vaahcms" tabindex="-1"><a class="header-anchor" href="#step-1-install-vaahcms" aria-hidden="true">#</a> Step 1: Install VaahCMS</h5>
<p>Steps to install VaahCMS is available at <RouterLink to="/vaahcms/installation.html">Getting Started &gt; Installation</RouterLink></p>
<h5 id="step-2-install-vaahcli" tabindex="-1"><a class="header-anchor" href="#step-2-install-vaahcli" aria-hidden="true">#</a> Step 2: Install VaahCLI</h5>
<p>Install NodeJs package <code v-pre>VaahCLI</code> globally, instructions are available at <a href="https://www.npmjs.com/package/vaah" target="_blank" rel="noopener noreferrer">VaahCLI<ExternalLinkIcon/></a>.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm i vaah <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VaahCLI will help you to quickly generate <code v-pre>Module</code> &amp; <code v-pre>Theme</code> scaffolding.</p>
<p>You can effectively use the tool with <code v-pre>Command Generator</code> at <RouterLink to="/vaahcms/generators.html">Generators</RouterLink>.</p>
<h5 id="step-3-generate-module" tabindex="-1"><a class="header-anchor" href="#step-3-generate-module" aria-hidden="true">#</a> Step 3: Generate Module</h5>
<p>Lets call the module as <code v-pre>Articles</code>. Open the command line tool &amp; navigate to the project root folder or in PHPStorm open <code v-pre>Terminal</code> and to generate scaffolding for the module, use following command:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npx vaah cms:module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will ask you following questions, answers also mentioned in <code v-pre>red</code> color:</p>
<ul>
<li>Enter your module name: <code v-pre>Articles</code></li>
<li>Enter meaningful title for your module: <code v-pre>Module for Articles Management</code></li>
<li>Enter your module description: <code v-pre>Manage Articles</code></li>
<li>Enter Author name: <code v-pre>Vaah</code></li>
<li>Enter Author email: <code v-pre>support@vaah.dev</code></li>
<li>Enter author website: <code v-pre>https://vaah.dev</code></li>
<li>Enter download URL: (don't enter anything, just press enter)</li>
<li>Do you want to run migration when activated (true/false): <code v-pre>true</code></li>
<li>Will your module contains sample data (true/false): <code v-pre>true</code></li>
</ul>
<p>Once this step is complete, it will generate a new folder at <code v-pre>VaahCMS &gt; Articles</code> or visit following url you will see the module:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
</div></template>


