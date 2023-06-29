<template><div><h1 id="develop-theme" tabindex="-1"><a class="header-anchor" href="#develop-theme" aria-hidden="true">#</a> Develop Theme</h1>
<hr>
<h5 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h5>
<p>The purpose of this tutorial is to develop a VaahCMS Theme for the management of blog with CMS Module.</p>
<h5 id="step-1-install-vaahcms" tabindex="-1"><a class="header-anchor" href="#step-1-install-vaahcms" aria-hidden="true">#</a> Step 1: Install VaahCMS</h5>
<p>Steps to install VaahCMS is available at <RouterLink to="/vaahcms/installation.html">Getting Started &gt; Installation</RouterLink></p>
<h5 id="step-2-install-vaahcli" tabindex="-1"><a class="header-anchor" href="#step-2-install-vaahcli" aria-hidden="true">#</a> Step 2: Install VaahCLI</h5>
<p>Install NodeJs package <code v-pre>VaahCLI</code> globally, instructions are available at <a href="https://www.npmjs.com/package/vaah" target="_blank" rel="noopener noreferrer">VaahCLI<ExternalLinkIcon/></a>.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm i vaah <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VaahCLI will help you to quickly generate <code v-pre>Module</code> &amp; <code v-pre>Theme</code> scaffolding.</p>
<p>You can effectively use the tool with <code v-pre>Command Generator</code> at <RouterLink to="/vaahcms/generators.html">Generators</RouterLink>.</p>
<h5 id="step-3-generate-theme" tabindex="-1"><a class="header-anchor" href="#step-3-generate-theme" aria-hidden="true">#</a> Step 3: Generate Theme</h5>
<p>Let's call the theme as <code v-pre>BlogTheme</code>. Open the command line tool &amp; navigate to the project root folder or in PHPStorm open <code v-pre>Terminal</code> and to generate scaffolding for the theme, use following command:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>npx vaah cms<span class="token punctuation">:</span>theme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will ask you following questions, answers also mentioned in <code v-pre>red</code> color:</p>
<ul>
<li>Enter your theme name: <code v-pre>BlogTheme</code></li>
<li>Enter meaningful title for your theme: <code v-pre>Theme for Blog</code></li>
<li>Enter your theme description: <code v-pre>Blog</code></li>
<li>Enter Author name: <code v-pre>Vaah</code></li>
<li>Enter Author email: <code v-pre>support@vaah.dev</code></li>
<li>Enter author website: <code v-pre>https://vaah.dev</code></li>
<li>Enter download URL: (don't enter anything, just press enter)</li>
<li>Do you want to run migration when activated (true/false): <code v-pre>true</code></li>
<li>Will your theme contains sample data (true/false): <code v-pre>true</code></li>
</ul>
<p>Once this step is complete, it will generate a new folder at <code v-pre>VaahCMS &gt; Themes &gt; BlogTheme</code>.</p>
<p>Now, you actually activate the theme by visiting following URL:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once, the theme is activated, you will be able to see the &quot;BlogTheme&quot; on Public url.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will see the view generated from the following blade file</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>VaahCms/Themes/BlogTheme/Resources/views/frontend/pages/index.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


