<template><div><h1 id="themes" tabindex="-1"><a class="header-anchor" href="#themes" aria-hidden="true">#</a> Themes</h1>
<p>A theme is a set of files that define the visual look and feel of your site. The modules that run on your site determine which content (including HTML text and other data stored in the database, uploaded images, and any other asset files) is displayed on the pages of your site. The theme determines the HTML markup and CSS styling that wraps the content.</p>
<p>Visit following url you will see the Themes section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/settings/Themes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is an example of themes.</p>
<img :src="$withBase('/images/1.x-themes-1.png')">
<h5 id="vaahcms-theme" tabindex="-1"><a class="header-anchor" href="#vaahcms-theme" aria-hidden="true">#</a> Vaahcms Theme</h5>
<p>VaahCms provide a <code v-pre>framework</code> for <code v-pre>Theme</code>. This framework has largely been designed over the last several years and will all be good choices for building sites.</p>
<p>We will be using <code v-pre>Vue</code> &amp; <code v-pre>Vuex</code> because this is where the real power of VaahCMS exist.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="install-theme" tabindex="-1"><a class="header-anchor" href="#install-theme" aria-hidden="true">#</a> Install Theme</h4>
<p>You can install themes by clicking <code v-pre>Install</code> button, Which will open a panel with list of themes.</p>
<p>Just like below image :</p>
<img :src="$withBase('/images/1.x-themes-2.png')">
<p>After a full down scroll an <code v-pre>install</code> button will be appeared. Onclick it will install your chosen theme.</p>
<img :src="$withBase('/images/1.x-themes-3.png')">
<p>If the theme is installed already button will indicate as <code v-pre>installed</code>.</p>
<h4 id="activate-theme" tabindex="-1"><a class="header-anchor" href="#activate-theme" aria-hidden="true">#</a> Activate Theme</h4>
<p>An <code v-pre>Activate</code> button is present in the action column of the list. By clicking on it, theme will be activated.</p>
<p>Follow below images for the reference :</p>
<img :src="$withBase('/images/1.x-themes-4.png')">
<p><code v-pre>After activation</code></p>
<img :src="$withBase('/images/1.x-themes-5.png')">
<p>There are multiple buttons are there which will responsible for multiple functionality.
We will discuss below One by One.</p>
<h4 id="deactivate" tabindex="-1"><a class="header-anchor" href="#deactivate" aria-hidden="true">#</a> Deactivate</h4>
<p>By clicking on <code v-pre>Deactivate</code> button will Deactivate the theme.</p>
<h4 id="publish-assets" tabindex="-1"><a class="header-anchor" href="#publish-assets" aria-hidden="true">#</a> Publish assets</h4>
<p>This functionality is to transfer the css and js files from <code v-pre>Resources</code> to <code v-pre>Public</code>, so that design can be performed.</p>
<h4 id="import-data" tabindex="-1"><a class="header-anchor" href="#import-data" aria-hidden="true">#</a> Import data</h4>
<p>To store dummy data in the database to display in site user can use this functionality.</p>
<p>Fo more information : <RouterLink to="/vaahcms-2/backend/theme/import-data.html">Read Documentation</RouterLink></p>
<h4 id="mark-as-default" tabindex="-1"><a class="header-anchor" href="#mark-as-default" aria-hidden="true">#</a> Mark as default</h4>
<p>If multiple active theme is there, then <code v-pre>Make Default</code> button will be visible.
This button will make the theme active and button will change into yellow <code v-pre>✓</code>.</p>
<p>Bellow image will help you to understand better:</p>
<img :src="$withBase('/images/1.x-themes-6.png')">
<h4 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h4>
<p>This a<code v-pre>Action</code> button has three more options, <code v-pre>Run Migrations</code>, <code v-pre>Run Seeds</code>, <code v-pre>Refresh Migrations</code>.</p>
<img :src="$withBase('/images/1.x-themes-7.png')">
<p><code v-pre>Run Migrations</code> will run the migrations file presents in <code v-pre>../VaahCms/Themes/Database/Migrations</code>.</p>
<p><code v-pre>Run Seeds</code> this button will insert the data into respective tables according to the files presents in <code v-pre>../VaahCms/Themes/Database/Seeds</code>.</p>
<p><code v-pre>Refresh Migrations</code> is responsible to fresh the schema of respective theme only.</p>
<h4 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> View</h4>
<p>The <code v-pre>Right chevron button</code> is for details of the theme. it will create a panel at right side.</p>
<img :src="$withBase('/images/1.x-themes-8.png')"></div></template>


