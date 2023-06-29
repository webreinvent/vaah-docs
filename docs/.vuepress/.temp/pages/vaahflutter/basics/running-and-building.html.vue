<template><div><h1 id="running-and-building" tabindex="-1"><a class="header-anchor" href="#running-and-building" aria-hidden="true">#</a> Running and Building</h1>
<nav class="table-of-contents"><ul><li><router-link to="#how-to-run-app-in-different-environments">How to run app in different environments:</router-link></li><li><router-link to="#how-to-build-app">How to build app?</router-link><ul><li><router-link to="#building-app-with-different-environments">Building app with different environments</router-link></li><li><router-link to="#building-in-different-modes">Building in different modes.</router-link></li><li><router-link to="#building-ipa-without-signing-it">Building ipa without signing it</router-link></li></ul></li></ul></nav>
<h2 id="how-to-run-app-in-different-environments" tabindex="-1"><a class="header-anchor" href="#how-to-run-app-in-different-environments" aria-hidden="true">#</a> How to run app in different environments:</h2>
<table>
<thead>
<tr>
<th><strong>Environment name</strong></th>
<th><strong>Command</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Default</td>
<td><code v-pre>flutter run</code> OR <code v-pre>flutter run --dart-define=&quot;environment=default&quot;</code></td>
</tr>
<tr>
<td>Development</td>
<td><code v-pre>flutter run --dart-define=&quot;environment=develop&quot;</code></td>
</tr>
<tr>
<td>Staging/ QA</td>
<td><code v-pre>flutter run --dart-define=&quot;environment=stage&quot;</code></td>
</tr>
<tr>
<td>Production</td>
<td><code v-pre>flutter run --dart-define=&quot;environment=production&quot;</code></td>
</tr>
</tbody>
</table>
<h2 id="how-to-build-app" tabindex="-1"><a class="header-anchor" href="#how-to-build-app" aria-hidden="true">#</a> How to build app?</h2>
<h3 id="building-app-with-different-environments" tabindex="-1"><a class="header-anchor" href="#building-app-with-different-environments" aria-hidden="true">#</a> Building app with different environments</h3>
<table>
<thead>
<tr>
<th><strong>Platform</strong></th>
<th><strong>Environment name</strong></th>
<th><strong>Command</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Android</td>
<td>Default</td>
<td><code v-pre>flutter build apk</code> OR <code v-pre>flutter build apk --dart-define=&quot;environment=default&quot;</code></td>
</tr>
<tr>
<td>Android</td>
<td>Development</td>
<td><code v-pre>flutter build apk --dart-define=&quot;environment=develop&quot;</code></td>
</tr>
<tr>
<td>Android</td>
<td>Staging/ QA</td>
<td><code v-pre>flutter build apk --dart-define=&quot;environment=stage&quot;</code></td>
</tr>
<tr>
<td>Android</td>
<td>Production</td>
<td><code v-pre>flutter build apk --dart-define=&quot;environment=production&quot;</code></td>
</tr>
<tr>
<td>Android (appbundle)</td>
<td>Default</td>
<td><code v-pre>flutter build appbundle</code> OR <code v-pre>flutter build appbundle --dart-define=&quot;environment=default&quot;</code></td>
</tr>
<tr>
<td>Android (appbundle)</td>
<td>Development</td>
<td><code v-pre>flutter build appbundle --dart-define=&quot;environment=develop&quot;</code></td>
</tr>
<tr>
<td>Android (appbundle)</td>
<td>Staging/ QA</td>
<td><code v-pre>flutter build appbundle --dart-define=&quot;environment=stage&quot;</code></td>
</tr>
<tr>
<td>Android (appbundle)</td>
<td>Production</td>
<td><code v-pre>flutter build appbundle --dart-define=&quot;environment=production&quot;</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><strong>Platform</strong></th>
<th><strong>Environment name</strong></th>
<th><strong>Command</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>iOS</td>
<td>Default</td>
<td><code v-pre>flutter build ipa</code> OR <code v-pre>flutter build ipa --dart-define=&quot;environment=default&quot;</code></td>
</tr>
<tr>
<td>iOS</td>
<td>Development</td>
<td><code v-pre>flutter build ipa --dart-define=&quot;environment=develop&quot;</code></td>
</tr>
<tr>
<td>iOS</td>
<td>Staging/ QA</td>
<td><code v-pre>flutter build ipa --dart-define=&quot;environment=stage&quot;</code></td>
</tr>
<tr>
<td>iOS</td>
<td>Production</td>
<td><code v-pre>flutter build ipa --dart-define=&quot;environment=production&quot;</code></td>
</tr>
<tr>
<td>iOS (.app)</td>
<td>Default</td>
<td><code v-pre>flutter build ios</code> OR <code v-pre>flutter build ipa --dart-define=&quot;environment=default&quot;</code></td>
</tr>
<tr>
<td>iOS (.app)</td>
<td>Development</td>
<td><code v-pre>flutter build ios --dart-define=&quot;environment=develop&quot;</code></td>
</tr>
<tr>
<td>iOS (.app)</td>
<td>Staging/ QA</td>
<td><code v-pre>flutter build ios --dart-define=&quot;environment=stage&quot;</code></td>
</tr>
<tr>
<td>iOS (.app)</td>
<td>Production</td>
<td><code v-pre>flutter build ios --dart-define=&quot;environment=production&quot;</code></td>
</tr>
</tbody>
</table>
<h3 id="building-in-different-modes" tabindex="-1"><a class="header-anchor" href="#building-in-different-modes" aria-hidden="true">#</a> Building in different modes.</h3>
<p>Pass additional arguments with your build commands.</p>
<table>
<thead>
<tr>
<th><strong>mode</strong></th>
<th><strong>Command</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Debug</td>
<td><code v-pre>flutter build ipa --debug</code>, <code v-pre>flutter build apk --debug</code></td>
</tr>
<tr>
<td>Profile</td>
<td><code v-pre>flutter build ipa --profile</code>, <code v-pre>flutter build apk --profile</code></td>
</tr>
<tr>
<td>Release</td>
<td><code v-pre>flutter build ipa --release</code>, <code v-pre>flutter build apk --release</code></td>
</tr>
</tbody>
</table>
<h3 id="building-ipa-without-signing-it" tabindex="-1"><a class="header-anchor" href="#building-ipa-without-signing-it" aria-hidden="true">#</a> Building ipa without signing it</h3>
<table>
<thead>
<tr>
<th><strong>flag</strong></th>
<th><strong>command</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>--no-codesign</td>
<td><code v-pre>flutter build ipa --no-codesign</code>, <code v-pre>flutter build ios --no-codesign</code></td>
</tr>
</tbody>
</table>
<p>Note: building for <code v-pre>ipa</code> will give <code v-pre>Runner.xcarchive</code>. To check the app, you should right click on <code v-pre>Runner.xcarchive</code> &gt; then select <code v-pre>show package contents</code> &gt; then open <code v-pre>products</code> &gt; <code v-pre>application</code> &gt; There you will be able to find the application.</p>
</div></template>


