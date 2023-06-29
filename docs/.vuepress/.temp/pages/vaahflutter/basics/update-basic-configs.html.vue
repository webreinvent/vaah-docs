<template><div><h1 id="update-basic-configs" tabindex="-1"><a class="header-anchor" href="#update-basic-configs" aria-hidden="true">#</a> Update Basic Configs</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-download-the-repository-and-develop-your-app-on-top-of-it">1. Download the repository and develop your APP on top of it.</router-link><ul><li><router-link to="#how-to-change-the-package-name-bundle-identifier-and-app-name">How to change the Package Name/ Bundle Identifier, and App Name?</router-link></li><li><router-link to="#how-to-change-the-package-name-and-description-in-pubspec-yaml">How to change the package name and description in pubspec.yaml?</router-link></li></ul></li><li><router-link to="#_2-use-vaahflutter-in-your-new-existing-project">2. Use VaahFlutter in your new/existing project.</router-link><ul><li><router-link to="#copy-core-directories-and-packages-in-your-project">Copy core directories and packages in your project.</router-link></li></ul></li><li><router-link to="#_3-change-app-icon">3. Change App Icon</router-link><ul><li><router-link to="#step-1-prepare-the-source-image">Step 1: Prepare the Source Image</router-link></li><li><router-link to="#step-2-configure-the-pubspec-yaml-file">Step 2: Configure the Pubspec.yaml File</router-link></li><li><router-link to="#step-3-prepare-the-icon-generation-configuration">Step 3: Prepare the Icon Generation Configuration</router-link></li><li><router-link to="#step-4-generate-app-icons">Step 4: Generate App Icons</router-link></li><li><router-link to="#step-5-test-the-generated-icons">Step 5: Test the Generated Icons</router-link></li></ul></li><li><router-link to="#_4-change-splash-screen">4. Change Splash Screen</router-link><ul><li><router-link to="#step-1-prepare-the-splash-screen-image">Step 1: Prepare the Splash Screen Image</router-link></li><li><router-link to="#step-2-configure-the-pubspec-yaml-file-1">Step 2: Configure the Pubspec.yaml File</router-link></li><li><router-link to="#step-3-prepare-the-splash-screen-generation-configuration">Step 3: Prepare the Splash Screen Generation Configuration</router-link></li><li><router-link to="#step-4-generate-the-splash-screen">Step 4: Generate the Splash Screen</router-link></li><li><router-link to="#step-5-test-the-splash-screen">Step 5: Test the Splash Screen</router-link></li></ul></li></ul></nav>
<div class="custom-container tip"><p class="custom-container-title">How to use VaahFlutter</p>
<p>There are 2 ways to use VaahFlutter for your project.</p>
<ol>
<li>
<p>Download the repository and develop your APP on top of it, for this you need to change some configurations for bundle identifier, package name, app icon, and splash screen. <a href="#_1-download-the-repository-and-develop-your-app-on-top-of-it">Check this section.</a></p>
</li>
<li>
<p>Use VaahFlutter in your new/existing project. This will need copying core directories and packages in your project. <a href="#_2-use-vaahflutter-in-your-newexisting-project">Check this section.</a></p>
</li>
</ol>
<p>We believe first one is little bit easy process in comparision of second. As you don't need to study VaahFlutter directories before starting the integration.</p>
</div>
<h2 id="_1-download-the-repository-and-develop-your-app-on-top-of-it" tabindex="-1"><a class="header-anchor" href="#_1-download-the-repository-and-develop-your-app-on-top-of-it" aria-hidden="true">#</a> 1. Download the repository and develop your APP on top of it.</h2>
<p><a href="https://github.com/webreinvent/vaahflutter/archive/refs/heads/master.zip" target="_blank" rel="noopener noreferrer">Click here<ExternalLinkIcon/></a> to download the repository.</p>
<h3 id="how-to-change-the-package-name-bundle-identifier-and-app-name" tabindex="-1"><a class="header-anchor" href="#how-to-change-the-package-name-bundle-identifier-and-app-name" aria-hidden="true">#</a> How to change the Package Name/ Bundle Identifier, and App Name?</h3>
<p>Let's say you want to change the package name/ Bundle identifier from <code v-pre>com.webreinvent.vaahflutter</code> to <code v-pre>domain.company.appname</code>.</p>
<div class="custom-container tip"><p class="custom-container-title">Note:</p>
<p>To avoid renaming the package and bundle identifier, you can start your project using this command in your terminal:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flutter create <span class="token parameter variable">--org</span> domain.company appname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<h4 id="for-android" tabindex="-1"><a class="header-anchor" href="#for-android" aria-hidden="true">#</a> For Android</h4>
<h5 id="change-package-name" tabindex="-1"><a class="header-anchor" href="#change-package-name" aria-hidden="true">#</a> Change package name</h5>
<h6 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step 1:</h6>
<p>Change the package name in your <code v-pre>AndroidManifest.xml</code> (locations: <code v-pre>root/android/app/src/main/AndroidManifest.xml</code>, <code v-pre>root/android/app/src/debug/AndroidManifest.xml</code> and <code v-pre>root/android/app/src/profile/AndroidManifest.xml</code>, according what environment you want to deploy).</p>
<p>From</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
    <span class="token attr-name">package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.webreinvent.vaahflutter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
    <span class="token attr-name">package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>domain.company.appname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step 2:</h6>
<p>In your <code v-pre>build.gradle</code> (<code v-pre>root/android/app/build.gradle</code>) file inside the app; change applicationId</p>
<p>From</p>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre v-pre class="language-groovy"><code>android <span class="token punctuation">{</span>
    <span class="token punctuation">...</span>
    defaultConfig <span class="token punctuation">{</span>
        <span class="token comment">// Specify your unique Application ID (https://developer.android.com/studio/build/application-id.html).</span>
        applicationId <span class="token interpolation-string"><span class="token string">"com.webreinvent.vaahflutter"</span></span>
        <span class="token punctuation">...</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To</p>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre v-pre class="language-groovy"><code>android <span class="token punctuation">{</span>
    <span class="token punctuation">...</span>
    defaultConfig <span class="token punctuation">{</span>
        <span class="token comment">// Specify your unique Application ID (https://developer.android.com/studio/build/application-id.html).</span>
        applicationId <span class="token interpolation-string"><span class="token string">"domain.company.appname"</span></span>
        <span class="token punctuation">...</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step 3:</h6>
<p>Change the package name in <code v-pre>root/android/app/src/main/kotlin/com/webreinvent/vaahflutter/MainActivity.kt</code></p>
<p>From</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre v-pre class="language-kotlin"><code><span class="token keyword">package</span> com<span class="token punctuation">.</span>webreinvent<span class="token punctuation">.</span>vaahflutter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre v-pre class="language-kotlin"><code><span class="token keyword">package</span> domain<span class="token punctuation">.</span>company<span class="token punctuation">.</span>appname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4" aria-hidden="true">#</a> Step 4:</h6>
<p>Change the directory name</p>
<p>From</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>root/android/app/src/main/kotlin/com/webreinvent/vaahflutter/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>root/android/app/src/main/kotlin/domain/company/appname/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="change-the-app-name" tabindex="-1"><a class="header-anchor" href="#change-the-app-name" aria-hidden="true">#</a> Change the app name</h5>
<p>If you want to change your app's name that is displayed everywhere,</p>
<p>Change the <code v-pre>android:label</code> in your <code v-pre>AndroidManifest.xml</code> (locations: <code v-pre>root/android/app/src/main/AndroidManifest.xml</code>, <code v-pre>root/android/app/src/debug/AndroidManifest.xml</code> and <code v-pre>root/android/app/src/profile/AndroidManifest.xml</code>, according what environment you want to deploy).</p>
<p>From</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token operator">&lt;</span>application
        android<span class="token punctuation">:</span>label<span class="token operator">=</span><span class="token string-literal"><span class="token string">"VaahFlutter"</span></span>
        android<span class="token punctuation">:</span>name<span class="token operator">=</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">applicationName</span><span class="token punctuation">}</span></span><span class="token string">"</span></span>
        android<span class="token punctuation">:</span>icon<span class="token operator">=</span><span class="token string-literal"><span class="token string">"@mipmap/ic_launcher"</span></span><span class="token operator">></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>to</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token operator">&lt;</span>application
        android<span class="token punctuation">:</span>label<span class="token operator">=</span><span class="token string-literal"><span class="token string">"Your App Name"</span></span>
        android<span class="token punctuation">:</span>name<span class="token operator">=</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">applicationName</span><span class="token punctuation">}</span></span><span class="token string">"</span></span>
        android<span class="token punctuation">:</span>icon<span class="token operator">=</span><span class="token string-literal"><span class="token string">"@mipmap/ic_launcher"</span></span><span class="token operator">></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="for-ios" tabindex="-1"><a class="header-anchor" href="#for-ios" aria-hidden="true">#</a> For iOS</h4>
<h5 id="change-bundle-identifier" tabindex="-1"><a class="header-anchor" href="#change-bundle-identifier" aria-hidden="true">#</a> Change bundle identifier</h5>
<p>Change the <code v-pre>CFBundleIdentifier</code> (bundle identifier) value in your <code v-pre>root/ios/Runner/Info.plist</code> file.</p>
<p>From</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">></span></span>CFBundleIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>com.webreinvent.vaahflutter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">></span></span>CFBundleIdentifier<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>domain.company.appname<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="change-app-name" tabindex="-1"><a class="header-anchor" href="#change-app-name" aria-hidden="true">#</a> Change app name</h5>
<p>Change the <code v-pre>CFBundleDisplayName</code> (bundle display name) value in your <code v-pre>root/ios/Runner/Info.plist</code> file.</p>
<p>From</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">></span></span>CFBundleDisplayName<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>VaahFlutter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">></span></span>CFBundleDisplayName<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>Your App Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-change-the-package-name-and-description-in-pubspec-yaml" tabindex="-1"><a class="header-anchor" href="#how-to-change-the-package-name-and-description-in-pubspec-yaml" aria-hidden="true">#</a> How to change the package name and description in pubspec.yaml?</h3>
<div class="custom-container danger"><p class="custom-container-title">Note:</p>
<p>Changing the app name in pubspec.yaml can cause errors in package imports</p>
</div>
<p>Change <code v-pre>name</code> and <code v-pre>description</code> properties in <code v-pre>root/pubspec.yaml</code></p>
<p>From</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>name: vaahflutter
description: VaahFlutter, is all about app essentials.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>name: your_app_name
description: Your app description.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-use-vaahflutter-in-your-new-existing-project" tabindex="-1"><a class="header-anchor" href="#_2-use-vaahflutter-in-your-new-existing-project" aria-hidden="true">#</a> 2. Use VaahFlutter in your new/existing project.</h2>
<h3 id="copy-core-directories-and-packages-in-your-project" tabindex="-1"><a class="header-anchor" href="#copy-core-directories-and-packages-in-your-project" aria-hidden="true">#</a> Copy core directories and packages in your project.</h3>
<ul>
<li><code v-pre>root/assets</code></li>
<li><code v-pre>root/lib</code></li>
<li><code v-pre>root/packages</code></li>
<li><code v-pre>root/pubspec.yaml</code></li>
</ul>
<h4 id="check-the-documentation-for-how-to-use-different-components" tabindex="-1"><a class="header-anchor" href="#check-the-documentation-for-how-to-use-different-components" aria-hidden="true">#</a> Check the documentation for how to use different components</h4>
<ul>
<li><RouterLink to="/vaahflutter/essentials/app.html">Essesntials</RouterLink></li>
<li><RouterLink to="/vaahflutter/core/performance_and_log.html">Core</RouterLink></li>
<li><RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/base/controller.html">Vaah Components</RouterLink></li>
</ul>
<hr>
<div class="custom-container tip"><p class="custom-container-title">Future plans</p>
<p>TODO: implement VaahFlutter as a package.</p>
</div>
<h2 id="_3-change-app-icon" tabindex="-1"><a class="header-anchor" href="#_3-change-app-icon" aria-hidden="true">#</a> 3. Change App Icon</h2>
<p>We use <a href="https://pub.dev/packages/flutter_launcher_icons" target="_blank" rel="noopener noreferrer">flutter_launcher_icons<ExternalLinkIcon/></a> to change app icon.</p>
<h3 id="step-1-prepare-the-source-image" tabindex="-1"><a class="header-anchor" href="#step-1-prepare-the-source-image" aria-hidden="true">#</a> Step 1: Prepare the Source Image</h3>
<h3 id="step-2-configure-the-pubspec-yaml-file" tabindex="-1"><a class="header-anchor" href="#step-2-configure-the-pubspec-yaml-file" aria-hidden="true">#</a> Step 2: Configure the Pubspec.yaml File</h3>
<p>In your Flutter project, open the pubspec.yaml file. This file contains metadata and dependencies for your app. To generate app icons automatically, you'll need to add the <code v-pre>flutter_launcher_icons</code> package as a dev dependency.</p>
<h3 id="step-3-prepare-the-icon-generation-configuration" tabindex="-1"><a class="header-anchor" href="#step-3-prepare-the-icon-generation-configuration" aria-hidden="true">#</a> Step 3: Prepare the Icon Generation Configuration</h3>
<p>Create a new file in the root of your project called <code v-pre>flutter_launcher_icons.yaml</code>. In this file, you will define the configuration for generating app icons.</p>
<p>Add the following content to flutter_launcher_icons.yaml:</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">flutter_icons</span><span class="token punctuation">:</span>
  <span class="token key atrule">android</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">ios</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">image_path</span><span class="token punctuation">:</span> <span class="token string">"assets/icon.png"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above configuration, make sure to replace <code v-pre>&quot;assets/icon.png&quot;</code> with the path to your high-resolution source image.</p>
<h3 id="step-4-generate-app-icons" tabindex="-1"><a class="header-anchor" href="#step-4-generate-app-icons" aria-hidden="true">#</a> Step 4: Generate App Icons</h3>
<p>Now that you have configured the icon generation, run the following command in your project's root directory to generate the app icons:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flutter pub run flutter_launcher_icons:main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-5-test-the-generated-icons" tabindex="-1"><a class="header-anchor" href="#step-5-test-the-generated-icons" aria-hidden="true">#</a> Step 5: Test the Generated Icons</h3>
<p>Build and run your Flutter app on different devices or simulators to ensure that the generated app icons appear correctly and are properly scaled for each platform.</p>
<h2 id="_4-change-splash-screen" tabindex="-1"><a class="header-anchor" href="#_4-change-splash-screen" aria-hidden="true">#</a> 4. Change Splash Screen</h2>
<p>We use <a href="https://pub.dev/packages/flutter_native_splash" target="_blank" rel="noopener noreferrer">flutter_native_splash<ExternalLinkIcon/></a> to change launch screen.</p>
<h3 id="step-1-prepare-the-splash-screen-image" tabindex="-1"><a class="header-anchor" href="#step-1-prepare-the-splash-screen-image" aria-hidden="true">#</a> Step 1: Prepare the Splash Screen Image</h3>
<p>Generally I recommend showing logo on top of colored container (full screen). So I just use logo for <code v-pre>Prepare the Splash Screen Image</code> step.</p>
<h3 id="step-2-configure-the-pubspec-yaml-file-1" tabindex="-1"><a class="header-anchor" href="#step-2-configure-the-pubspec-yaml-file-1" aria-hidden="true">#</a> Step 2: Configure the Pubspec.yaml File</h3>
<p>In your Flutter project, open the pubspec.yaml file. This file contains metadata and dependencies for your app. To generate a splash screen automatically, you'll need to add the <code v-pre>flutter_native_splash</code> package as a dev dependency.</p>
<h3 id="step-3-prepare-the-splash-screen-generation-configuration" tabindex="-1"><a class="header-anchor" href="#step-3-prepare-the-splash-screen-generation-configuration" aria-hidden="true">#</a> Step 3: Prepare the Splash Screen Generation Configuration</h3>
<p>Create a new file in the root of your project called <code v-pre>flutter_native_splash.yaml</code>. In this file, you will define the configuration for generating the splash screen.</p>
<p>Add the following content to flutter_native_splash.yaml:</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">flutter_native_splash</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">"assets/icon.png"</span>
  <span class="token key atrule">color</span><span class="token punctuation">:</span> <span class="token string">"ffffff"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above configuration, make sure to replace <code v-pre>&quot;assets/icon.png&quot;</code> with the path to your high-resolution splash screen image. Additionally, you can customize the <code v-pre>&quot;color&quot;</code> value to match your app's branding.</p>
<h3 id="step-4-generate-the-splash-screen" tabindex="-1"><a class="header-anchor" href="#step-4-generate-the-splash-screen" aria-hidden="true">#</a> Step 4: Generate the Splash Screen</h3>
<p>Now that you have configured the splash screen generation, run the following command in your project's root directory to generate the splash screen:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flutter pub run flutter_native_splash:create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-5-test-the-splash-screen" tabindex="-1"><a class="header-anchor" href="#step-5-test-the-splash-screen" aria-hidden="true">#</a> Step 5: Test the Splash Screen</h3>
<p>Build and run your Flutter app to see the generated splash screen in action. The splash screen will appear briefly when launching the app and then transition to your app's main screen.</p>
</div></template>


