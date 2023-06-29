<template><div><h1 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h1>
<p>Module is designed with flexibility, simplicity, and re-usability in mind. A module may contain just about anything: PHP code, including MVC functionality; library code; view scripts; and/or public assets such as images, CSS, and JavaScript.</p>
<hr>
<p>Visit following url you will see the Module section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is an example of module.</p>
<img :src="$withBase('/images/1.x-modules-1.png')">
<h5 id="vaahcms-module" tabindex="-1"><a class="header-anchor" href="#vaahcms-module" aria-hidden="true">#</a> Vaahcms Module</h5>
<p>VaahCms provide a <code v-pre>framework</code> for <code v-pre>Module</code>. This framework have largely been designed over the last several years and will all be good choices for building Backend site.</p>
<p>We will be using <code v-pre>Vue</code> &amp; <code v-pre>Vuex</code> because this is where the real power of VaahCMS exist.</p>
<p><RouterLink to="/vaahcms/module/introduction.html">Read Documentation</RouterLink></p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="install-theme" tabindex="-1"><a class="header-anchor" href="#install-theme" aria-hidden="true">#</a> Install Theme</h4>
<p>You can install modules by clicking <code v-pre>Install</code> button, Which will open a panel with list of modules.</p>
<p>Just like below image :</p>
<img :src="$withBase('/images/1.x-modules-2.png')">
<p>After a full down scroll an <code v-pre>install</code> button will be appeared. Onclick it will install your chosen theme.</p>
<img :src="$withBase('/images/1.x-modules-3.png')">
<p>If the theme is installed already button will indicate as <code v-pre>installed</code>.</p>
<h4 id="activate-theme" tabindex="-1"><a class="header-anchor" href="#activate-theme" aria-hidden="true">#</a> Activate Theme</h4>
<p>An <code v-pre>Activate</code> button is present in the action column of the list. By clicking on it, theme will be activated.</p>
<p>Follow below images for the reference :</p>
<img :src="$withBase('/images/1.x-modules-4.png')">
<p><code v-pre>After activation</code></p>
<img :src="$withBase('/images/1.x-modules-5.png')">
<p>There are multiple buttons are there which will responsible for multiple functionality.
We will discuss below One by One.</p>
<h4 id="deactivate" tabindex="-1"><a class="header-anchor" href="#deactivate" aria-hidden="true">#</a> Deactivate</h4>
<p>By clicking on <code v-pre>Deactivate</code> button will Deactivate the theme.</p>
<h4 id="publish-assets" tabindex="-1"><a class="header-anchor" href="#publish-assets" aria-hidden="true">#</a> Publish assets</h4>
<p>It will put the required css and js files from resources to public folder so that all the properties can be use easily.</p>
<h4 id="import-data" tabindex="-1"><a class="header-anchor" href="#import-data" aria-hidden="true">#</a> Import data</h4>
<p>This is the functionality by which user can import dummy data to the database for testing or for something like placeholder.</p>
<h4 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h4>
<p>This a<code v-pre>Action</code> button has three more options, <code v-pre>Run Migrations</code>, <code v-pre>Run Seeds</code>, <code v-pre>Refresh Migrations</code>.</p>
<img :src="$withBase('/images/1.x-modules-7.png')">
<p><code v-pre>Run Migrations</code> will run the migrations file presents in <code v-pre>../VaahCms/Modules/Database/Migrations</code>.</p>
<p><code v-pre>Run Seeds</code> this button will insert the data into respective tables according to the files presents in <code v-pre>../VaahCms/Modules/Database/Seeds</code>.</p>
<p><code v-pre>Refresh Migrations</code> is responsible to fresh the schema of respective theme only.</p>
<h4 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> View</h4>
<p>The <code v-pre>Right chevron button</code> is for details of the theme. it will create a panel at right side.</p>
<img :src="$withBase('/images/1.x-modules-8.png')"></div></template>


