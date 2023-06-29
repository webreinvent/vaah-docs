<template><div><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1>
<nav class="table-of-contents"><ul><li><router-link to="#install-via-vaahcli">Install via VaahCLI</router-link></li><li><router-link to="#manual-download-installation">Manual Download &amp; Installation</router-link><ul><li><router-link to="#download-vaahcms">Download VaahCMS</router-link></li><li><router-link to="#install-dependencies">Install Dependencies</router-link></li><li><router-link to="#setup-configuration">Setup &amp; Configuration</router-link></li></ul></li></ul></nav>
<h2 id="install-via-vaahcli" tabindex="-1"><a class="header-anchor" href="#install-via-vaahcli" aria-hidden="true">#</a> Install via VaahCLI</h2>
<p>Install <a href="https://vaah.dev/cli" target="_blank" rel="noopener noreferrer">VaahCLI<ExternalLinkIcon/></a>, via following command:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm install vaah <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then run following command to install VaahCMS:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx vaah cms:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then run</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And visit:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://127.0.0.1:8000/vaahcms/setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>If you visit http://127.0.0.1:8000 before completing the setup then you may get few errors, you can ignore these errors and visit http://127.0.0.1:8000/vaahcms/setup to setup the VaahCMS</p>
</div>
<h2 id="manual-download-installation" tabindex="-1"><a class="header-anchor" href="#manual-download-installation" aria-hidden="true">#</a> Manual Download &amp; Installation</h2>
<h3 id="download-vaahcms" tabindex="-1"><a class="header-anchor" href="#download-vaahcms" aria-hidden="true">#</a> Download VaahCMS</h3>
<p>You can manually download the setup files, from following link:</p>
<p><a href="https://github.com/webreinvent/vaahcms-ready/archive/master.zip" target="_blank" rel="noopener noreferrer">Download VaahCMS<ExternalLinkIcon/></a></p>
<h3 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install Dependencies</h3>
<p>VaahCMS utilizes <a href="https://getcomposer.org/" target="_blank" rel="noopener noreferrer">Composer<ExternalLinkIcon/></a> to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.</p>
<ol>
<li>
<p>Extract the downloaded VaahCMS folder.</p>
</li>
<li>
<p>Open terminal or command prompt and open the root folder of VaahCMS files.</p>
</li>
<li>
<p>Run following command to install the dependencies:</p>
</li>
</ol>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>composer install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="setup-configuration" tabindex="-1"><a class="header-anchor" href="#setup-configuration" aria-hidden="true">#</a> Setup &amp; Configuration</h3>
<p>Once the dependencies are downloaded, you need to publish the assets &amp; config of VaahCMS via following commands:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>php artisan vendor<span class="token punctuation">:</span>publish <span class="token operator">--</span>provider<span class="token operator">=</span><span class="token string single-quoted-string">'WebReinvent\VaahCms\VaahCmsServiceProvider'</span> <span class="token operator">--</span>tag<span class="token operator">=</span>assets <span class="token operator">--</span>force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>php artisan vendor<span class="token punctuation">:</span>publish <span class="token operator">--</span>provider<span class="token operator">=</span><span class="token string single-quoted-string">'WebReinvent\VaahCms\VaahCmsServiceProvider'</span> <span class="token operator">--</span>tag<span class="token operator">=</span>config <span class="token operator">--</span>force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you get this error: <code v-pre>Unable to locate publishable resources</code>.</p>
<p>Then just run publish command and choose the class that you want to publish.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>php artisan vendor<span class="token punctuation">:</span>publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you're using XAMPP or WAMP, visit following url to begin the setup:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/vaahcms/setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p>
<p>If you have PHP installed locally and you would like to use PHP's built-in development server to serve your application, you may use the serve Artisan command. This command will start a development server at <code v-pre>http://localhost:8000</code>. Run following command to start the serving the application:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>php artisan serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>and visit:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://localhost:8000/vaahcms/setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is will begin setup and easy form wizard to configure your the application. Once you're done with the configuration you will be able to login to the admin control panel at following url:</p>
<p>In case of XAMPP or WAMP:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In case of development server:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://localhost:8000/backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


