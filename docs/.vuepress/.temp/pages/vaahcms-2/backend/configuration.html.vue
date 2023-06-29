<template><div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1>
<nav class="table-of-contents"><ul><li><router-link to="#introduction">Introduction</router-link></li><li><router-link to="#environment-configuration">Environment Configuration</router-link></li></ul></nav>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>It is often found that applications are required to be configured for multiple environments and VaahCMS makes it easy to keep the configures for all the environments. By default, VaahCMS inspires from <code v-pre>gitflow</code> naming convention for the environments. During the setup of VaahCMS you need to choose the <code v-pre>Env</code> which represent environment for which you're setting up the application. It has following options:</p>
<ol>
<li><code v-pre>Custom (Features branch)</code>: If multiple developer are developing features, in that case they can have their own <code v-pre>.env</code> file.</li>
<li><code v-pre>Local (Features branch)</code>: This is when you're setting up the application on your local computer.</li>
<li><code v-pre>Develop (Develop branch)</code>: This is when you're setting up the application on your development server.</li>
<li><code v-pre>Staging (Release or Hotfix branch)</code>: When you want release certain feature or want to do hotfix before deploying the code to production.</li>
<li><code v-pre>Production (Master branch)</code>: Live/Production application.</li>
</ol>
<h2 id="environment-configuration" tabindex="-1"><a class="header-anchor" href="#environment-configuration" aria-hidden="true">#</a> Environment Configuration</h2>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Once the VaahCMS setup is complete, it generates a <code v-pre>vaahcms.json</code> file on the root of the project folder. <code v-pre>vaahcms.json</code> file contains the <code v-pre>APP_URL</code> of different environments and respective <code v-pre>env</code> files.</p>
</div>
<table>
<thead>
<tr>
<th>Environment</th>
<th><code v-pre>env</code> File</th>
</tr>
</thead>
<tbody>
<tr>
<td>Local</td>
<td>.env.local</td>
</tr>
<tr>
<td>Develop</td>
<td>.env.develop</td>
</tr>
<tr>
<td>Release or Hotfix</td>
<td>.env.staging</td>
</tr>
<tr>
<td>Production</td>
<td>.env.production</td>
</tr>
</tbody>
</table>
<p>You can manage the <code v-pre>.env</code> variables from the <code v-pre>backend</code> control panel from <code v-pre>Settings &gt; Env Variables</code>.</p>
</div></template>


