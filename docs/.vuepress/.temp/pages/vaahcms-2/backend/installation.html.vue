<template><div><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1>
<nav class="table-of-contents"><ul><li><router-link to="#install-via-vaahcli">Install via VaahCLI</router-link></li><li><router-link to="#manual-download-installation">Manual Download &amp; Installation</router-link><ul><li><router-link to="#download-vaahcms">Download VaahCMS</router-link></li><li><router-link to="#install-dependencies">Install Dependencies</router-link></li><li><router-link to="#setup-configuration">Setup &amp; Configuration</router-link></li></ul></li></ul></nav>
<h2 id="install-via-vaahcli" tabindex="-1"><a class="header-anchor" href="#install-via-vaahcli" aria-hidden="true">#</a> Install via VaahCLI</h2>
<p>Install <a href="https://vaah.dev/cli" target="_blank" rel="noopener noreferrer">VaahCLI<ExternalLinkIcon/></a>, via following command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vaah <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then run following command to install VaahCMS:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx vaah cms:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then run</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And visit:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">localhost</span><span class="token punctuation">:</span><span class="token header-value">8080/vaahcms/setup</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>OR</strong></p>
<p>If you are using <code v-pre>xampp</code> or <code v-pre>wamp</code>, then visit</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;laravel-public-url>/vaahcms/setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>If you visit <code v-pre>&lt;laravel-public-url&gt;</code> before completing the setup then you may get few errors, you can ignore these errors and visit <code v-pre>&lt;laravel-public-url&gt;/vaahcms/setup</code> to setup the VaahCMS</p>
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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="setup-configuration" tabindex="-1"><a class="header-anchor" href="#setup-configuration" aria-hidden="true">#</a> Setup &amp; Configuration</h3>
<p>Once the dependencies are downloaded, you need to publish the assets &amp; config of VaahCMS via following commands:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">'WebReinvent\VaahCms\VaahCmsServiceProvider'</span> <span class="token parameter variable">--tag</span><span class="token operator">=</span>assets <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">'WebReinvent\VaahCms\VaahCmsServiceProvider'</span> <span class="token parameter variable">--tag</span><span class="token operator">=</span>config <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you get this error: <code v-pre>Unable to locate publishable resources</code>.</p>
<p>Then just run publish command and choose the class that you want to publish.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you're using <code v-pre>XAMPP</code> or <code v-pre>WAMP</code>, visit following url to begin the setup:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/vaahcms/setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p>
<p>If you have PHP installed locally, and you would like to use PHP's built-in development server to serve your application, you may use the serve Artisan command. This command will start a development server at <code v-pre>&lt;public-url&gt;</code>. Run following command to start the serving the application:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>and visit:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code><span class="token header"><span class="token header-name keyword">localhost</span><span class="token punctuation">:</span><span class="token header-value">8080/vaahcms/setup</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will begin the setup process and easy form wizard to configure your the application. Once you're done with the configuration you will be able to login to the backend (administrative control panel) at following url:</p>
<p>In case of XAMPP or WAMP:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


