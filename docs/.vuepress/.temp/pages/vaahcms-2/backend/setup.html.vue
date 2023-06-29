<template><div><h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1>
<nav class="table-of-contents"><ul><li><router-link to="#purpose">Purpose</router-link></li><li><router-link to="#setup-process">Setup Process</router-link></li></ul></nav>
<h2 id="purpose" tabindex="-1"><a class="header-anchor" href="#purpose" aria-hidden="true">#</a> Purpose</h2>
<p>You must navigate to the &quot;Setup&quot; page to configure the
entire application after installing all the dependencies.
For setting up the database, email clients,
and first &quot;Super Administrator&quot; account, we provided a GUI.
This setup page makes it simple to set up the fundamental procedure
and begin work.</p>
<p><code v-pre>&lt;public-url&gt;/backend#/setup</code></p>
<h2 id="setup-process" tabindex="-1"><a class="header-anchor" href="#setup-process" aria-hidden="true">#</a> Setup Process</h2>
<h4 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step - 1</h4>
<p>Click on the installation button to start the procedure.</p>
<img :src="$withBase('/images/vaahcms-two/setup/install-btn.png')">
<h4 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step - 2</h4>
<p>When you click the installation button, a form with the fields listed bellowed opens.</p>
<h5 id="database-configuration" tabindex="-1"><a class="header-anchor" href="#database-configuration" aria-hidden="true">#</a> Database Configuration</h5>
<table>
<thead>
<tr>
<th>Columns</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Debug</td>
<td>Drop-down</td>
<td>From this drop-down selection, you must choose your application's &quot;debug&quot; mode.</td>
</tr>
<tr>
<td>Time-zone</td>
<td>Searchable Drop-down</td>
<td>You may look up and select your application's time zone using this drop-down.</td>
</tr>
<tr>
<td>App/Website Name</td>
<td>Input</td>
<td>You have to enter the name of your application or website here.</td>
</tr>
<tr>
<td>Database Type</td>
<td>Drop-down</td>
<td>You must select the database for your application from this drop-down selection.</td>
</tr>
<tr>
<td>Database Host</td>
<td>Input</td>
<td>Enter the IP address of your database host here.</td>
</tr>
<tr>
<td>Database Port</td>
<td>Input</td>
<td>Enter the active port for your database here.</td>
</tr>
<tr>
<td>Database Name</td>
<td>Input</td>
<td>Enter the database name for your application here.</td>
</tr>
<tr>
<td>Database Username</td>
<td>Input</td>
<td>Enter your database's username here.</td>
</tr>
<tr>
<td>Database Password</td>
<td>Input</td>
<td>Enter your database's password here.</td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>After fill-up the form you click on the <code v-pre>Test Database Connection</code> button to ensure that your given credentials are right.</p>
</div>
<h5 id="mail-configuration" tabindex="-1"><a class="header-anchor" href="#mail-configuration" aria-hidden="true">#</a> Mail Configuration</h5>
<table>
<thead>
<tr>
<th>Columns</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mail Provider</td>
<td>Drop-down</td>
<td>From thin drop-down selection you must chose your mail provider client.</td>
</tr>
<tr>
<td>Mail Driver</td>
<td>Input</td>
<td>Enter your mail driver here.</td>
</tr>
<tr>
<td>Mail Host</td>
<td>Input</td>
<td>Enter your mail provider's host here.</td>
</tr>
<tr>
<td>Mail Port</td>
<td>Input</td>
<td>Enter your mail provider's port here.</td>
</tr>
<tr>
<td>Mail Username</td>
<td>Input</td>
<td>Enter your username here.</td>
</tr>
<tr>
<td>Mail Password</td>
<td>Input</td>
<td>Enter your password here.</td>
</tr>
<tr>
<td>Mail Encryption</td>
<td>Drop-down</td>
<td>From this drop-down selection you must chose your mail's encryption type.</td>
</tr>
<tr>
<td>From Name</td>
<td>Input</td>
<td>Enter your from name here.</td>
</tr>
<tr>
<td>From Email</td>
<td>Input</td>
<td>Enter your from email here.</td>
</tr>
</tbody>
</table>
<p>After fill-up the form you click on the <code v-pre>Test Mail Configuration</code> button to ensure that your given credentials are right.</p>
<p>For more understanding you can watch bellowed attached video.</p>
<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_MQWp0lyUkn.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step - 3</h4>
<p>Click <code v-pre>Migrate &amp; Run Seed</code> button for run the migration and seeds.</p>
<p>For more understanding you can watch bellowed attached video.</p>
<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_xQZgIoVjc4.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4" aria-hidden="true">#</a> Step - 4</h4>
<p>Now create a new <code v-pre>super administrator</code> account.</p>
<p>For more understanding you can watch bellowed attached video.</p>
<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_Y9hmmPuegS.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
</div></template>


