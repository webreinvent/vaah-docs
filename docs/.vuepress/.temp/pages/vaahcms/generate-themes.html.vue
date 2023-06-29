<template><div><h1 id="generate-themes-in-vaah-cms" tabindex="-1"><a class="header-anchor" href="#generate-themes-in-vaah-cms" aria-hidden="true">#</a> Generate Themes in Vaah Cms</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This is guide to teachs <code v-pre>How to create Themes in VAAH CMS</code></p>
<h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3>
<ul>
<li>node js installed</li>
<li>vaah project directory</li>
</ul>
<h3 id="step-1-vaah-cli-installtion" tabindex="-1"><a class="header-anchor" href="#step-1-vaah-cli-installtion" aria-hidden="true">#</a> Step 1: Vaah Cli Installtion</h3>
<p>To use Vaah generators to generate themes, install VaahCli Tool using</p>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code>npm install vaah -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code>npm i vaah -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-2-installation-of-theme" tabindex="-1"><a class="header-anchor" href="#step-2-installation-of-theme" aria-hidden="true">#</a> Step 2: Installation of Theme</h3>
<h6 id="note-for-this-tutorial-we-ll-be-creating-blog-theme" tabindex="-1"><a class="header-anchor" href="#note-for-this-tutorial-we-ll-be-creating-blog-theme" aria-hidden="true">#</a> Note: For this tutorial, we'll be creating Blog Theme.</h6>
<p>Command that is used to generate a theme is:-</p>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code>npx vaah cms:t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After triggering this command, it will ask for some information
regarding the Theme. Like:-</p>
<ul>
<li>
<p>Name of The Theme you want to create. For example BlogTheme.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter your theme name:-  BlogTheme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>More relevent name for your Theme. Example, Blog Theme etc.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter meaningful title for your theme: Blog Theme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>More details of the theme that explains more about what this theme contains and provides. Example, Blog Theme with Auth Page.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter your theme description: Blog Theme with Auth Page
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Name of the person creating the Theme. Or press enter to go with default value provided.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter Author name: vaah
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Email of the author. Or press enter to enter default value.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter Author email:  support@vaah.dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Press enter for default value for Author website and Download Url.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter author website:  https://vaah.dev
? Enter download url: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Enter <code v-pre>true</code> if you want to run seeder for this theme. Else select <code v-pre>false</code>.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Will your theme contains sample data (true/false):  false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="note-all-the-seed-files-will-be-found-in-root-vaahcms-themes-theme-name-database-seeds-directory" tabindex="-1"><a class="header-anchor" href="#note-all-the-seed-files-will-be-found-in-root-vaahcms-themes-theme-name-database-seeds-directory" aria-hidden="true">#</a> Note: All the seed files will be found in <code v-pre>root/VaahCms/Themes/&lt;theme-name&gt;/Database/Seeds</code> directory.</h6>
</li>
</ul>
<p>After providing all the information, Theme will generated under <code v-pre>project-root/Vaahcms/Themes.</code>.</p>
<p><code v-pre>&lt;theme-root-folder&gt;\config\config.php</code> contains the information that was enter while creating a theme and can be changed by making changes to config.php file.
<img :src="$withBase('/images/theme-config-file.png')" alt="theme-config-file"></p>
<h3 id="step-3-activating-a-theme" tabindex="-1"><a class="header-anchor" href="#step-3-activating-a-theme" aria-hidden="true">#</a> Step 3: Activating a Theme</h3>
<p>Go to:-</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;your-site-url>/backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/vaahcms-backend-login.png')" alt="backend-login">
<p>and login to the backend panel using credentials of the user that was created while the installation of VaahCms.</p>
<p>After that, on the sidebar, click on <code v-pre>Extend</code> and then click on <code v-pre>Modules</code>.</p>
<p>Or visit:-</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;your-site-url>/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>to access <code v-pre>Theme Activation Page</code> directly.</p>
<img :src="$withBase('/images/theme-activation-page.png')" alt="module-activation-page">
<p>List of all the installed themes will be displayed. From this list,
find your theme and click on <code v-pre>Activate</code> button present on the right
side of that same theme to activate the theme.</p>
<p>After successfull activation, theme name will be visible on the
side bar. Click on theme name to access DashBoard of the theme.</p>
<img :src="$withBase('/images/theme-dashboard-page.png')" alt="theme-dashboard-page">
<h6 id="note-all-migrations-of-that-specific-theme-will-run-automatically-when-the-theme-is-activated" tabindex="-1"><a class="header-anchor" href="#note-all-migrations-of-that-specific-theme-will-run-automatically-when-the-theme-is-activated" aria-hidden="true">#</a> Note: All migrations of that specific theme will run automatically when the theme is activated .</h6>
<h3 id="step-4-directory-structure" tabindex="-1"><a class="header-anchor" href="#step-4-directory-structure" aria-hidden="true">#</a> Step 4: Directory Structure</h3>
<img :src="$withBase('/images/theme-directory-structure.png')" alt="theme-directory-structure">
<ul>
<li>
<p>Config:
Config file is present here. Config file contains all the information related to theme, that was provided while creating theme, such as, name, description, <code v-pre>is sample data available</code> etc.
And this information can be changed in this config file.</p>
<img :src="$withBase('/images/theme-config-file.png')" alt="theme-config-file">
</li>
<li>
<p>Database:
All the Factory, Migrations and Seeds files of this theme are present in Database Folder.</p>
<ul>
<li>To generate Migration File:<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code> npx vaah cms:m-make migrations &lt;theme-folder-name&gt; &lt;migration-name&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/theme-migrations.png')" alt="theme-migrations"> 
Migration file will be generated under `Database/Migrations`.
</li>
</ul>
<p>In order to run migrations, <code v-pre>deactivate</code> and <code v-pre>activate</code> Theme again.</p>
</li>
<li>
<p>To generate Seeds File:</p>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code> npx vaah cms:m-make migrations &lt;theme-folder-name&gt; &lt;seeder-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Seeds file will be generated under <code v-pre>Database/Seeders</code>.
Or
we can use json files to seed data into tables.
Example:
<img :src="$withBase('/images/theme-seeds1.png')" alt="theme-seeds1"></p>
<p>and this json file can be used in SampleDataTableSeeder
<img :src="$withBase('/images/theme-sample-seeder-file.png')" alt="theme-sample-seeder-file"></p>
<p>and
<img :src="$withBase('/images/theme-sample-seeder-file1.png')" alt="theme-sample-seeder-file1"></p>
<p>and to run <code v-pre>SampleDataTableSeeder</code> file, click on <code v-pre>import sample data</code> button:-
<img :src="$withBase('/images/theme-sample-data-seeder-button.png')" alt="theme sample data seeder button"></p>
</li>
<li>
<p>Models:
All the models for this theme will be generated in <code v-pre>&lt;theme-root&gt;/Models</code> using:</p>
</li>
</ul>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code>    npx vaah cms:t-make model &lt;theme-root&gt; &lt;model-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>Views:
All the views for this theme will be generated in <code v-pre>&lt;theme-root&gt;/Resources/Views</code></p>
<ul>
<li>this is the first page of the theme <code v-pre>welcome.balde.php</code>.</li>
<li>this page can be used as homepage <code v-pre>home.balde.php</code>.</li>
<li>this page can be used as fallback back <code v-pre>default.balde.php</code>.</li>
</ul>
</li>
<li>
<p>Vue:
This folder will contain all the vue files, vuex store, vue routes related to this theme.</p>
<ul>
<li>
<p>Vue components will be present under Vue/pages.
<img :src="$withBase('/images/theme-vue-componentes-file.png')" alt="theme vue componentes files"></p>
</li>
<li>
<p>Vue routes will be present under Vue/routes.
<img :src="$withBase('/images/theme-vue-routes-file.png')" alt="theme vue routes file"></p>
</li>
<li>
<p>Vue store will be found under Vue/stores.
<img :src="$withBase('/images/theme-vue-store-file.png')" alt="theme vue store file"></p>
</li>
</ul>
</li>
</ul>
<h4 id="note-use-npm-install-inside-theme-root-folder-to-install-dependencies-for-vue-and-after-that-npm-run-dev-to-display-vue-components" tabindex="-1"><a class="header-anchor" href="#note-use-npm-install-inside-theme-root-folder-to-install-dependencies-for-vue-and-after-that-npm-run-dev-to-display-vue-components" aria-hidden="true">#</a> Note: Use <code v-pre>npm install</code> inside theme root folder to install dependencies for vue, and after that <code v-pre>npm run dev</code> to display vue components.</h4>
</div></template>


