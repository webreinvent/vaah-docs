<template><div><h1 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h1>
<nav class="table-of-contents"><ul><li><router-link to="#what-is-this-directory-about">What is this directory about</router-link></li></ul></nav>
<h2 id="what-is-this-directory-about" tabindex="-1"><a class="header-anchor" href="#what-is-this-directory-about" aria-hidden="true">#</a> What is this directory about</h2>
<p>Like the <RouterLink to="/vaahflutter/directory_structure/root/d_android.html">Android</RouterLink> folder, this folder contains files required by the application to run the dart code on iOS platforms. The main files under the ios folder are <code v-pre>Assets.xcassests</code> folder, and <code v-pre>info.plist</code> file. The <code v-pre>Assets.xcassests</code> folder is like the res folder in Android. It contains non-programmable resources required for the application.</p>
<p>The <code v-pre>info.plist</code> file is similar to the <code v-pre>AndroidManifest.xml file</code>. It stores information required by the SDK of the application. If any modification is to be done to make the application-specific to IOS platforms, it should be done in this folder.</p>
<p><code v-pre>AppDelegate.swift</code> in <code v-pre>ios/Runner</code> The entry point for the ios app. 3rd party packages might need to have some initialization logic added here, but mostly we don't touch this file. Check their documentation for details.</p>
</div></template>


