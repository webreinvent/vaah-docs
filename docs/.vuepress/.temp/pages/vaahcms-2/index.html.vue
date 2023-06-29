<template><div><h1 id="vaahcms" tabindex="-1"><a class="header-anchor" href="#vaahcms" aria-hidden="true">#</a> VaahCMS</h1>
<nav class="table-of-contents"><ul><li><router-link to="#introduction">Introduction</router-link></li><li><router-link to="#ecosystem">Ecosystem</router-link></li><li><router-link to="#requirements">Requirements</router-link><ul><li><router-link to="#minimum-system-requirements">Minimum System Requirements</router-link></li><li><router-link to="#learning-curve">Learning Curve</router-link></li></ul></li><li><router-link to="#releases">Releases</router-link><ul><li><router-link to="#versioning-scheme">Versioning Scheme</router-link></li><li><router-link to="#support-policy">Support Policy</router-link></li></ul></li></ul></nav>
<p align="center">
<a href="https://webreinvent.com/contact-us?utm_source=docs.vaah.dev&utm_medium=vaahcms&utm_campaign=docs"><img src="https://raw.githubusercontent.com/webreinvent/.github/master/images/banner.png" width="850"></a>
</p>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>VaahCMS is a web application development platform shipped with headless content management system and common features required in any web application.</p>
<p>Built with <code v-pre>Laravel 10</code> framework, <code v-pre>Vue 3</code>, <code v-pre>Pinia</code> and <code v-pre>PrimeVue</code> with HMVC structured Modules &amp; Themes.</p>
<p>The purpose of creating <code v-pre>VaahCMS</code> is to create a platform which can be extended in a manageable and structured way to develop large applications without reinventing common functionality every time. A list of functionality are following:</p>
<ul>
<li>WordPress like installation</li>
<li>Roles &amp; Permissions (ACL)</li>
<li>Install pre-built modules &amp; themes</li>
<li>Modules: Build purpose specific isolated code</li>
<li>Themes: Create frontend themes</li>
<li>CRUD Generator</li>
<li>Built-in REST API, which you can connect with any frontend framework</li>
<li>Extremely fast control/admin panel</li>
<li>Extend control/admin panel with no major learning curve</li>
<li><strong><a href="https://vaah.dev/cli" target="_blank" rel="noopener noreferrer">VaahCLI<ExternalLinkIcon/></a>:</strong> a CLI tool to generate modules, themes and crud scaffolding.</li>
</ul>
<p><a href="https://vaah.dev/cms/features" target="_blank" rel="noopener noreferrer">List of all Features<ExternalLinkIcon/></a></p>
<h2 id="ecosystem" tabindex="-1"><a class="header-anchor" href="#ecosystem" aria-hidden="true">#</a> Ecosystem</h2>
<ul>
<li><a href="https://vaah.dev/saas" target="_blank" rel="noopener noreferrer">VaahSaaS<ExternalLinkIcon/></a> : Multi-tenant SaaS Product Development</li>
<li><a href="https://vaah.dev/cli" target="_blank" rel="noopener noreferrer">VaahCLI<ExternalLinkIcon/></a> : CLI Tool for Scaffold &amp; Rapid Development</li>
<li><a href="https://vaah.dev/store" target="_blank" rel="noopener noreferrer">VaahStore<ExternalLinkIcon/></a> : Mult-Vendor Laravel E-Commerce &amp; Marketplace</li>
<li><a href="https://vaah.dev/flutter" target="_blank" rel="noopener noreferrer">VaahFlutter<ExternalLinkIcon/></a> : A Comprehensive Flutter Scaffolding with All Basic Features</li>
<li><a href="https://vaah.dev/nuxt" target="_blank" rel="noopener noreferrer">VaahNuxt<ExternalLinkIcon/></a> : Built impressive frontend with Nuxt 3 &amp; VaahCMS API</li>
</ul>
<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2>
<h3 id="minimum-system-requirements" tabindex="-1"><a class="header-anchor" href="#minimum-system-requirements" aria-hidden="true">#</a> Minimum System Requirements</h3>
<p>The Laravel framework has a few system requirements. All of these requirements are satisfied by the <a href="https://vaah.dev/cms/docs/requirements#!" target="_blank" rel="noopener noreferrer">Laravel Homestead<ExternalLinkIcon/></a> virtual machine, so it's highly recommended that you use Homestead as your local Laravel development environment.</p>
<p>However, if you are not using Homestead, you will need to make sure your server meets the following requirements:</p>
<ul>
<li>PHP &gt;= 8.1</li>
<li>Ctype PHP Extension</li>
<li>cURL PHP Extension</li>
<li>DOM PHP Extension</li>
<li>Fileinfo PHP Extension</li>
<li>Filter PHP Extension</li>
<li>Hash PHP Extension</li>
<li>Mbstring PHP Extension</li>
<li>OpenSSL PHP Extension</li>
<li>PCRE PHP Extension</li>
<li>PDO PHP Extension</li>
<li>Session PHP Extension</li>
<li>Tokenizer PHP Extension</li>
<li>XML PHP Extension</li>
</ul>
<h3 id="learning-curve" tabindex="-1"><a class="header-anchor" href="#learning-curve" aria-hidden="true">#</a> Learning Curve</h3>
<p>If you want to quickly get started with VaahCMS, all you need to know is <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">Laravel<ExternalLinkIcon/></a>. Please go through detailed documentation on Laravel official website.</p>
<p>But if you want to use the true potential of VaahCMS and want to develop enterprise level applications, then you must learn following technologies:</p>
<ul>
<li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue<ExternalLinkIcon/></a>: Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.</li>
<li><a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router<ExternalLinkIcon/></a>: Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.</li>
<li><a href="https://pinia.vuejs.org/" target="_blank" rel="noopener noreferrer">Pinia<ExternalLinkIcon/></a>: Pinia is a store library for Vue, it allows you to share a state across components/pages.</li>
<li><a href="https://primevue.org/" target="_blank" rel="noopener noreferrer">PrimeVue<ExternalLinkIcon/></a>: PrimeVue is a rich set of open source UI components for Vue.</li>
</ul>
<h2 id="releases" tabindex="-1"><a class="header-anchor" href="#releases" aria-hidden="true">#</a> Releases</h2>
<h3 id="versioning-scheme" tabindex="-1"><a class="header-anchor" href="#versioning-scheme" aria-hidden="true">#</a> Versioning Scheme</h3>
<p>VaahCMS and its other first-party packages follow Semantic Versioning. Major platform releases are released every 12 to 15 months, while minor and patch releases may be released as often as every month. Minor and patch releases should never contain breaking changes.</p>
<p>The official away to report the bugs is via <a href="https://github.com/webreinvent/vaahcms/issues" target="_blank" rel="noopener noreferrer">github repo<ExternalLinkIcon/></a>.</p>
<h3 id="support-policy" tabindex="-1"><a class="header-anchor" href="#support-policy" aria-hidden="true">#</a> Support Policy</h3>
<p>For all major releases, bug fixes are provided for 1 year and security fixes are provided for 2 years. These releases provide the longest window of support and maintenance.</p>
</div></template>


