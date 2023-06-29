<template><div><h1 id="generate-modules-in-vaah-cms" tabindex="-1"><a class="header-anchor" href="#generate-modules-in-vaah-cms" aria-hidden="true">#</a> Generate Modules in Vaah Cms</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This guide teaches <code v-pre>How to create MODULES in VAAH CMS</code></p>
<h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3>
<ul>
<li>Node</li>
<li>VaahCMS project directory</li>
</ul>
<h3 id="step-1-vaahcli-installation" tabindex="-1"><a class="header-anchor" href="#step-1-vaahcli-installation" aria-hidden="true">#</a> Step 1: VaahCli Installation</h3>
<p>To use VaahCLI generators for generating modules, install VaahClI Tool using following command</p>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code>npm i vaah -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-2-installation-of-modules" tabindex="-1"><a class="header-anchor" href="#step-2-installation-of-modules" aria-hidden="true">#</a> Step 2: Installation of Modules</h3>
<h6 id="note-in-this-tutorial-we-ll-be-creating-product-module" tabindex="-1"><a class="header-anchor" href="#note-in-this-tutorial-we-ll-be-creating-product-module" aria-hidden="true">#</a> Note: In this tutorial, we'll be creating Product Module.</h6>
<p>Command that is used to generate a module is:-</p>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code>npx vaah cms:m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After triggering this command, it will ask for some information
regarding the Module. Like:-</p>
<p>Technology to be used for Frontend:-</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Choose the tech stack of the module:  Module - Vue3 &amp; PrimeVue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can change the option by using arrow key.</p>
<p>Vue3 &amp; PrimeVue will provide primevue components with vue3 for the frontend.
Vue2 &amp; Buefy will provide Buefy components (using Bulma css) with vue2 for the frontend.</p>
<p>After that information related to modules such as name, title, description
etc. of the module.</p>
<ul>
<li>
<p>Name of The Module you want to create. For example Products.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter your module name:  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Enter more relevant name for your module. Example Product Management etc.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter meaningful title for your module:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>More details of the module. Example Product Management Module for Admin (or Seller)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter your module description:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Name of the person creating the module. Or press enter to go with default value provided.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter Author name: vaah
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Email of the author. Or press enter to enter default value.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter Author email:  support@vaah.dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Press Enter for default value for Author website and Download Url.<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter author website:  https://vaah.dev
? Enter download url: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Enter <code v-pre>true</code> if you want to run migration for this module as soon as the module
is activated. Else select <code v-pre>false</code>.<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Do you want to run migration on activation (true/false):  true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>All the migration files will be found in <code v-pre>root/VaahCms/Modules/&lt;module-name&gt;/Migrations</code> directory</p>
</div>
</li>
<li>
<p>Select <code v-pre>true</code> if you want to activate this module with some sample data. Else
select <code v-pre>false</code>.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Will your module contains sample data (true/false):  true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Use SampleDataTableSeeder for seeding Sample data.</p>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>All the Seeds files will be found in <code v-pre>root/VaahCms/Modules/&lt;module-name&gt;/Database/Seeds</code> directory.</p>
</div>
</li>
</ul>
<p>After providing all the information, Module will be generated under <code v-pre>project-root/Vaahcms/Modules</code>.
<img :src="$withBase('/images/module_path.png')" alt="module_path"></p>
<p><code v-pre>&lt;module-root-folder&gt;\config\config.php</code> contains the information that was entered while creating a module and can be changed by making changes to config.php file.
<img :src="$withBase('/images/module-config-file.png')" alt="module-config-file"></p>
<h3 id="step-3-activating-a-module" tabindex="-1"><a class="header-anchor" href="#step-3-activating-a-module" aria-hidden="true">#</a> Step 3: Activating a module</h3>
<p>Go to:-</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/vaahcms-backend-login.png')" alt="backend-login">
<p>and login to the backend panel using credentials of the user that was created while the installation of VaahCms.</p>
<p>After that, on the sidebar, click on <code v-pre>Extend</code> and then click on <code v-pre>Modules</code>.</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/module-activation-page.png')" alt="module-activation-page">
<p>List of all the installed modules will be displayed. From this list,
find your module and click on <code v-pre>Activate</code> button present on the right
side of that same module to activate the module.</p>
<p>After Successful activation, module name will be visible on the
sidebar. Click on module name to access DashBoard of the module.</p>
<img :src="$withBase('/images/module-dashboard-page.png')" alt="module-dashboard-page">
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>All migrations of that specific module will run automatically when the module is activated if <code v-pre>is_migratable</code> is set to true in config file.</p>
</div>
<h3 id="step-4-directory-structure" tabindex="-1"><a class="header-anchor" href="#step-4-directory-structure" aria-hidden="true">#</a> Step 4: Directory Structure</h3>
<img :src="$withBase('/images/module-directory-structure.png')" alt="module-directory-structure">
<ul>
<li>
<p>Config:
Config file is present here. Config file contains all the information related to module, that was provided while creating module, such as, name, description, <code v-pre>is_migratable</code>, <code v-pre>is sample data available</code> etc.
And this information can be changed in this config file.</p>
<img :src="$withBase('/images/module-config-file.png')" alt="module-config-file">
</li>
<li>
<p>Database:
All the Factory, Migrations and Seeds files of this module are present in Database Folder.</p>
<ul>
<li>To generate Migration File:<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code> npx vaah cms:m-make migration &lt;module-folder-name&gt; &lt;migration-name&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  <img :src="$withBase('/images/module-migration-file.png')" alt="module-migration-file"> 
Migration file will be generated under `Database/Migrations`.
</li>
</ul>
<p>In order to run migrations, <code v-pre>deactivate</code> and <code v-pre>activate</code> module again.</p>
</li>
<li>
<p>To generate Seeds File:</p>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code> npx vaah cms:m-make seed &lt;module-folder-name&gt; &lt;seeder-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Seeds file will be generated under <code v-pre>Database/Seeders</code>. Or we can use json files to seed data into tables.
To use a json file, create a json file under <code v-pre>&lt;module-folder&gt;/Database/Seeds/json</code> folder.
Example:
<img :src="$withBase('/images/module-json-seed-file.png')" alt="module-json-seed-file"></p>
<p>and this json file can be used in SampleDataTableSeeder
<img :src="$withBase('/images/module-sample-seeder-file1.png')" alt="module-sample-seeder-file1"></p>
<p>and
<img :src="$withBase('/images/module-sample-seeder-file2.png')" alt="module-sample-seeder-file2"></p>
<p>and to run <code v-pre>SampleDataTableSeeder</code> file, click on <code v-pre>import sample data</code> button:-
<img :src="$withBase('/images/module-sample-seeder-button.png')" alt="module-sample-seeder-button"></p>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>In order to run seeds, <code v-pre>is_sample_data_available</code> must be set to true in config file.</p>
</div>
</li>
<li>
<p>:::</p>
</li>
<li>
<p>Http:
All the Controllers,Middlewares,Requests file related to this module will be created here.
command used to create module controller is:-</p>
<div class="language-terminal-command-for-controller line-numbers-mode" data-ext="terminal-command-for-controller"><pre v-pre class="language-terminal-command-for-controller"><code>    vaah cms:t-make controller &lt;module-folder-name&gt; &lt;controller-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-terminal-command-for-middleware line-numbers-mode" data-ext="terminal-command-for-middleware"><pre v-pre class="language-terminal-command-for-middleware"><code>    vaah cms:t-make middleware &lt;module-folder-name&gt; &lt;middleware-name&gt;
::: warning NOTE
All the Controllers must be created in Http/Controllers/Backend for modules.
:::

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Models:
All the models for this module will be generated in <code v-pre>&lt;module-root&gt;/Models</code> using:</p>
</li>
</ul>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code>    npx vaah cms:t-make model &lt;module-root&gt; &lt;model-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>Views:
All the views for this module will be generated in <code v-pre>&lt;module-root&gt;/Resources/Views/backend</code></p>
<ul>
<li>this is the first page of the module <code v-pre>index.blade.php</code>.</li>
</ul>
</li>
<li>
<p>Vue:
This folder will contain all the vue files, vuex store, vue routes related to this module.</p>
<ul>
<li>
<p>Vue components will be present under Vue/pages.
<img :src="$withBase('/images/module-vue-components-files.png')" alt="module vue components files"></p>
</li>
<li>
<p>Vue routes will be present under Vue/routes.
<img :src="$withBase('/images/module-vue-routes-file.png')" alt="modules vue routes file"></p>
</li>
<li>
<p>Vue store will be found under Vue/stores.
<img :src="$withBase('/images/module-vue-store-file.png')" alt="module vue store file"></p>
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Use <code v-pre>npm install</code> inside module root folder to install dependencies for vue, and after that <code v-pre>npm run dev</code> to display vue components.</p>
</div>
</li>
</ul>
</div></template>


