<template><div><h1 id="generate-theme-in-vaah-cms" tabindex="-1"><a class="header-anchor" href="#generate-theme-in-vaah-cms" aria-hidden="true">#</a> Generate Theme in Vaah Cms</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This guide teaches <code v-pre>How to create Theme in VAAH CMS</code></p>
<h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3>
<ul>
<li>node js installed</li>
<li>vaah project directory</li>
</ul>
<h3 id="step-1-vaah-cli-installation" tabindex="-1"><a class="header-anchor" href="#step-1-vaah-cli-installation" aria-hidden="true">#</a> Step 1: Vaah Cli Installation</h3>
<p>To use Vaah generators to generate themes, install VaahCli Tool using</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vaah <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vaah <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-2-installation-of-theme" tabindex="-1"><a class="header-anchor" href="#step-2-installation-of-theme" aria-hidden="true">#</a> Step 2: Installation of Theme</h3>
<h6 id="note-for-this-tutorial-we-ll-be-creating-articles-theme" tabindex="-1"><a class="header-anchor" href="#note-for-this-tutorial-we-ll-be-creating-articles-theme" aria-hidden="true">#</a> Note: For this tutorial, we'll be creating Articles Theme.</h6>
<p>Command that is used to generate a theme is:-</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx vaah cms:t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After triggering this command, it will ask for some information
regarding the Theme. Like:-</p>
<ul>
<li>
<p>Name of The Theme you want to create. For example ArticleTheme.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter your theme name:  ArticleTheme  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Enter more relevant name for your Theme. Example Theme for Articles etc.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter meaningful title for your theme:  Theme for Articles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Detailed Description about the Theme. Example:-</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter your theme description:  This theme will be used for Article Section
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Name of the person creating the Theme. Or press enter to go with default value provided. Like:-</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter Author name:  vaah
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Email of the author. Or press enter to enter default value.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter Author email:  support@vaah.dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Press Enter for default value for Author website and Download Url.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Enter author website:  https://vaah.dev
? Enter download url: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Enter <code v-pre>true</code> if you want to run migration for this theme as soon as the theme
is activated. Else select <code v-pre>false</code>.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Do you want to run migration when activated (true/false):  true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="note-all-the-migration-files-will-be-found-in-root-vaahcms-themes-theme-name-database-migrations-directory" tabindex="-1"><a class="header-anchor" href="#note-all-the-migration-files-will-be-found-in-root-vaahcms-themes-theme-name-database-migrations-directory" aria-hidden="true">#</a> Note: All the migration files will be found in <code v-pre>root/VaahCms/Themes/&lt;theme-name&gt;/Database/Migrations</code> directory</h6>
</li>
<li>
<p>Select <code v-pre>true</code> if you want to activate this theme with some sample data. Else
select <code v-pre>false</code>.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>? Will your theme contains sample data (true/false):  true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Use SampleDataTableSeeder for seeding Sample data.</p>
<h6 id="note-all-the-seeds-files-will-be-found-in-root-vaahcms-themes-theme-name-database-seeds-directory" tabindex="-1"><a class="header-anchor" href="#note-all-the-seeds-files-will-be-found-in-root-vaahcms-themes-theme-name-database-seeds-directory" aria-hidden="true">#</a> Note: All the Seeds files will be found in <code v-pre>root/VaahCms/Themes/&lt;theme-name&gt;/Database/Seeds</code> directory.</h6>
</li>
</ul>
<p>After providing all the information, Theme will be generated under <code v-pre>project-root/Vaahcms/Themes</code>.
<img :src="$withBase('/images/themes/files.png')" alt="theme_path"></p>
<p><code v-pre>&lt;theme-root-folder&gt;\config\config.php</code> contains the information that was entered while creating a theme and can be changed by making changes to config.php file.
<img :src="$withBase('/images/themes/config.png')" alt="theme-config-file"></p>
<h3 id="step-3-activating-a-theme" tabindex="-1"><a class="header-anchor" href="#step-3-activating-a-theme" aria-hidden="true">#</a> Step 3: Activating a Theme</h3>
<p>Go to:-</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;publc-url>/backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/themes/login.png')" alt="themes-login">
<p>and login to the backend panel using credentials of the user that was created while the installation of VaahCms.</p>
<p>After that, on the sidebar, click on <code v-pre>Extend</code> and then click on <code v-pre>Themes</code>.</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/themes/activation-page.png')" alt="theme-activation-page">
<p>List of all the installed themes will be displayed. From this list,
find your theme and click on <code v-pre>Activate</code> button present on the right
side of that same theme to activate the theme.</p>
<p>After Successful activation, theme name will be visible on the
sidebar. Click on theme name to access DashBoard of the theme.</p>
<img :src="$withBase('/images//themes/activated-sidebar-icon.png')" alt="activated-theme-sidebar-icon">
<h6 id="note-all-migrations-of-that-specific-theme-will-run-automatically-when-the-theme-is-activated" tabindex="-1"><a class="header-anchor" href="#note-all-migrations-of-that-specific-theme-will-run-automatically-when-the-theme-is-activated" aria-hidden="true">#</a> Note: All migrations of that specific theme will run automatically when the theme is activated .</h6>
<h3 id="step-4-directory-structure" tabindex="-1"><a class="header-anchor" href="#step-4-directory-structure" aria-hidden="true">#</a> Step 4: Directory Structure</h3>
<img :src="$withBase('/images/themes/directory-structure.png')" alt="directory-structure">
<ul>
<li>
<p>Config:</p>
<img :src="$withBase('/images/themes/config-directory.png')" alt="theme-config-directory">
<p>Config file is present here. Config file contains all the information related to theme, that was provided while creating theme, such as, name, description, <code v-pre>is_migratable</code>, <code v-pre>is sample data available</code> etc.
And this information can be changed in this config file.</p>
<img :src="$withBase('/images/themes/config.png')" alt="theme-config-file">
</li>
<li>
<p>Database:</p>
<img :src="$withBase('/images/themes/database-directory.png')" alt="theme-database-directory">
<p>All the Factory, Migrations and Seeds files of this theme are present in Database Folder.</p>
<ul>
<li>To generate Migration File:<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code> npx vaah cms:t-make migration &lt;theme-folder-name&gt; &lt;migration-name&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>example:-<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code> npx vaah cms:t-make migration ArticleTheme contact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>Migration file generated after running command:-
<img :src="$withBase('/images/themes/migration-file.png')" alt="theme-migration-file">
Migration file will be generated under <code v-pre>Database/Migrations</code>.</li>
</ul>
<p>In order to run migrations, <code v-pre>deactivate</code> and <code v-pre>activate</code> theme again.</p>
</li>
<li>
<p>To generate Seeds File:</p>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code> npx vaah cms:m-make seed &lt;theme-folder-name&gt; &lt;seeder-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Seeds file will be generated under <code v-pre>Database/Seeders</code>. Or we can use json files to seed data into tables.
To use a json file, create a json file under <code v-pre>&lt;theme-folder&gt;/Database/Seeds/json</code> folder.
Example:</p>
<img :src="$withBase('/images/themes/json-seed-file.png')" alt="theme-json-seed-file">
<p>and this json file can be used in SampleDataTableSeeder
<img :src="$withBase('/images/themes/seed-file1.png')" alt="theme-sample-seeder-file1"></p>
<p>and to run <code v-pre>SampleDataTableSeeder</code> file, click on <code v-pre>import sample data</code> button:-
<img :src="$withBase('/images/themes/seed-button.png')" alt="theme-sample-seeder-button"></p>
<p>####Note: In order to run seeds, is_sample_data_available must be set to true in config file.</p>
</li>
<li>
<p>Http:</p>
<img :src="$withBase('/images/themes/http-directory.png')" alt="theme-http-directory">
<p>All the Controllers,Middlewares,Requests file related to this theme will be created here.
command used to create theme controller is:-</p>
<div class="language-terminal-command-for-controller line-numbers-mode" data-ext="terminal-command-for-controller"><pre v-pre class="language-terminal-command-for-controller"><code>    vaah cms:t-make controller &lt;theme-folder-name&gt; &lt;controller-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-terminal-command-for-middleware line-numbers-mode" data-ext="terminal-command-for-middleware"><pre v-pre class="language-terminal-command-for-middleware"><code>    vaah cms:t-make middleware &lt;theme-folder-name&gt; &lt;middleware-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="note-all-the-controllers-will-be-created-in-http-controllers-frontend-for-themes" tabindex="-1"><a class="header-anchor" href="#note-all-the-controllers-will-be-created-in-http-controllers-frontend-for-themes" aria-hidden="true">#</a> Note: All the Controllers will be created in Http/Controllers/Frontend for themes.</h4>
</li>
<li>
<p>Models:</p>
<img :src="$withBase('/images/themes/model-directory.png')" alt="theme-model-directory">
<p>All the models for this theme will be generated in <code v-pre>&lt;theme-root&gt;/Models</code> using:</p>
</li>
</ul>
<div class="language-terminal line-numbers-mode" data-ext="terminal"><pre v-pre class="language-terminal"><code>    npx vaah cms:t-make model &lt;theme-root&gt; &lt;model-name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>Routes:
All the routes for theme will be found in routes/frontend.php. And all the new route will be created in this same file.</p>
</li>
<li>
<p>Views:</p>
<img :src="$withBase('/images/themes/views-directory.png')" alt="theme-views-directory">
<p>All the views for this theme will be generated in <code v-pre>&lt;theme-root&gt;/Resources/Views/frontend</code></p>
<ul>
<li>this is the first page of the theme <code v-pre>welcome.blade.php</code>.</li>
</ul>
</li>
<li>
<p>Vue:
This folder will contain all the vue files, vuex store, vue routes related to this theme.</p>
<ul>
<li>
<p>Vue components will be present under Vue/pages.</p>
<img :src="$withBase('/images/themes/vue-file.png')" alt="theme vue components files">
</li>
<li>
<p>Vue routes will be present under Vue/routes.</p>
<img :src="$withBase('/images/themes/vue-route-file.png')" alt="themes vue routes file">
</li>
<li>
<p>Vue store will be found under Vue/stores.</p>
<img :src="$withBase('/images/themes/vue-store-file.png')" alt="theme vue store file">
</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Use <code v-pre>npm install</code> inside theme root folder to install dependencies for vue, and after that <code v-pre>npm run dev</code> to display vue components.</p>
</div>
</li>
</ul>
</div></template>


