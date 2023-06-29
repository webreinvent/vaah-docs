<template><div><h1 id="firebase-setup" tabindex="-1"><a class="header-anchor" href="#firebase-setup" aria-hidden="true">#</a> Firebase Setup</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li><a href="https://pub.dev/packages/firebase_core" target="_blank" rel="noopener noreferrer">firebase_core<ExternalLinkIcon/></a></li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#setup-firebase-for-your-project">Setup Firebase For Your Project</router-link></li><li><router-link to="#register-sha-keys-with-firebase">Register SHA Keys With Firebase</router-link></li></ul></nav>
<h3 id="setup-firebase-for-your-project" tabindex="-1"><a class="header-anchor" href="#setup-firebase-for-your-project" aria-hidden="true">#</a> Setup Firebase For Your Project</h3>
<ul>
<li>
<p>Install <a href="https://firebase.google.com/docs/cli#setup_update_cli" target="_blank" rel="noopener noreferrer">Firebase CLI<ExternalLinkIcon/></a> in your system. And Log in to your account.</p>
</li>
<li>
<p>Install the <a href="https://firebase.google.com/docs/flutter/setup#install-cli-tools" target="_blank" rel="noopener noreferrer">FlutterFire CLI<ExternalLinkIcon/></a></p>
</li>
<li>
<p>run <code v-pre>flutterfire configure</code> in your project -&gt; then select create new project/ configure old project</p>
</li>
<li>
<p>Check the steps in the video: <a href="https://youtu.be/kESR99dkRS8" target="_blank" rel="noopener noreferrer">Configure Firebase App<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Pass parameters to connect firebase app with vaahextendflutter. This will intialize the firebase app everytime app is started. Check the steps in the video: <a href="https://youtu.be/ooEHkxy7LmA" target="_blank" rel="noopener noreferrer">Integrating Firebase With VaahFlutter<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="register-sha-keys-with-firebase" tabindex="-1"><a class="header-anchor" href="#register-sha-keys-with-firebase" aria-hidden="true">#</a> Register SHA Keys With Firebase</h3>
<ul>
<li>
<p>Visit https://developers.google.com/android/guides/client-auth, to check how to get SHA keys.</p>
</li>
<li>
<p>Run the command (default passowrd is <code v-pre>android</code>), get the keys.</p>
</li>
<li>
<p>Go to firebase console, to android app settings, add SHA1 and SHA-256 keys.</p>
</li>
</ul>
<p>Check the steps in the video: <a href="https://youtu.be/aaSFyyOnTM4" target="_blank" rel="noopener noreferrer">SHA KEYS<ExternalLinkIcon/></a></p>
</div></template>


