<template><div><h1 id="vaahflutter" tabindex="-1"><a class="header-anchor" href="#vaahflutter" aria-hidden="true">#</a> VaahFlutter</h1>
<nav class="table-of-contents"><ul><li><router-link to="#introduction">Introduction</router-link></li><li><router-link to="#requirements">Requirements</router-link><ul><li><router-link to="#minimum-system-requirements">Minimum System Requirements</router-link></li><li><router-link to="#flutter-and-dart-versions">Flutter and Dart Versions</router-link></li><li><router-link to="#learning-curve">Learning Curve</router-link></li></ul></li><li><router-link to="#releases">Releases</router-link><ul><li><router-link to="#versioning-scheme">Versioning Scheme</router-link></li><li><router-link to="#support-policy">Support Policy</router-link></li></ul></li></ul></nav>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>VaahFlutter is a Flutter-based framework that provides common features required in any application.</p>
<p>The purpose of developing VaahFlutter is to create a framework that can be extended in a manageable and structured manner in order to develop large applications while not having to reinvent all essential functionalities every time. Some of the features are as follows:</p>
<ul>
<li>Managing environments</li>
<li>Log Library</li>
<li>Debug panel</li>
<li>API service to handle all API-related jobs, case parser for API</li>
<li>Toasts and Alerts</li>
<li>App theme, manage colors, text styles</li>
<li>Padding, margin helpers, and widgets</li>
<li>Route handler with permissions</li>
<li>Most common UI widgets.</li>
</ul>
<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2>
<h3 id="minimum-system-requirements" tabindex="-1"><a class="header-anchor" href="#minimum-system-requirements" aria-hidden="true">#</a> Minimum System Requirements</h3>
<div class="custom-container tip"><p class="custom-container-title">requirements</p>
<ul>
<li><a href="https://docs.flutter.dev/get-started/install/windows#system-requirements" target="_blank" rel="noopener noreferrer">Windows<ExternalLinkIcon/></a></li>
<li><a href="https://docs.flutter.dev/get-started/install/macos#system-requirements" target="_blank" rel="noopener noreferrer">Mac<ExternalLinkIcon/></a></li>
<li><a href="https://docs.flutter.dev/get-started/install/linux#system-requirements" target="_blank" rel="noopener noreferrer">Linux<ExternalLinkIcon/></a></li>
<li><a href="https://docs.flutter.dev/get-started/install/chromeos#system-requirements" target="_blank" rel="noopener noreferrer">Chrome OS<ExternalLinkIcon/></a></li>
</ul>
</div>
<h3 id="flutter-and-dart-versions" tabindex="-1"><a class="header-anchor" href="#flutter-and-dart-versions" aria-hidden="true">#</a> Flutter and Dart Versions</h3>
<div class="custom-container danger"><p class="custom-container-title">requirements</p>
<p>We try to use the latest stable version released by flutter, thus as of now VaahFlutter depends on dart SDK version 2.19.6 and flutter version 3.7.11</p>
<p>The <code v-pre>root/pubspec.yaml</code> file contains <code v-pre>sdk</code> and <code v-pre>flutter</code> properties which are used to define dart sdk and flutter versions.</p>
<ul>
<li>sdk: &quot;&gt;=2.19.6&quot;</li>
<li>flutter: &quot;&gt;=3.7.11&quot;</li>
</ul>
</div>
<h3 id="learning-curve" tabindex="-1"><a class="header-anchor" href="#learning-curve" aria-hidden="true">#</a> Learning Curve</h3>
<p>If you want to get started quickly with VaahFlutter, all you need to know is <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">Flutter<ExternalLinkIcon/></a> and <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">Dart<ExternalLinkIcon/></a>. Please read the detailed documentation on Flutter and Dart's official website.</p>
<h2 id="releases" tabindex="-1"><a class="header-anchor" href="#releases" aria-hidden="true">#</a> Releases</h2>
<h3 id="versioning-scheme" tabindex="-1"><a class="header-anchor" href="#versioning-scheme" aria-hidden="true">#</a> Versioning Scheme</h3>
<p>VaahFlutter and its other first-party packages follow Semantic Versioning. Major platform releases are released every 6 to 8 months, while minor and patch releases maybe released as often as every month. Minor and patch releases should never contain breaking changes.</p>
<p>The official way to report the bugs is via <a href="https://github.com/webreinvent/vaahflutter/issues" target="_blank" rel="noopener noreferrer">github repo<ExternalLinkIcon/></a>.</p>
<h3 id="support-policy" tabindex="-1"><a class="header-anchor" href="#support-policy" aria-hidden="true">#</a> Support Policy</h3>
<p>Bug fixes are provided for one year and security fixes are provided for two years for all <code v-pre>major</code> releases. These releases provide the longest window of support and maintenance.</p>
</div></template>


