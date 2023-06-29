<template><div><h1 id="dashboard" tabindex="-1"><a class="header-anchor" href="#dashboard" aria-hidden="true">#</a> Dashboard</h1>
<p>This is the home page of VaahCms. Where you can have the shortcuts of important features.</p>
<p>Visit following url you will see the Dashboard section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is a example of Dashboard.</p>
<img :src="$withBase('/images/2.x-dashboard-1.png')">
<h2 id="purpose-features" tabindex="-1"><a class="header-anchor" href="#purpose-features" aria-hidden="true">#</a> Purpose &amp; Features</h2>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>The main use of a dashboard is to show a comprehensive overview of data from different sources.
Dashboards are useful for monitoring, measuring, and analyzing relevant data in key areas.</p>
</div>
<h4 id="the-features-we-will-discuss-below" tabindex="-1"><a class="header-anchor" href="#the-features-we-will-discuss-below" aria-hidden="true">#</a> The features we will discuss below:</h4>
<p>On the right side <code v-pre>Getting Started</code> button is there. It will redirect you to the documentation section if you are new to VaahCms.</p>
<img :src="$withBase('/images/2.x-dashboard-2.png')">
<p>On the left side of <code v-pre>Getting Started</code> button <code v-pre>Check updates</code> button is there, which is to check whether update is available or not.
It will redirect to update section of settings.</p>
<img :src="$withBase('/images/2.x-dashboard-3.png')">
<p>Below of these two button two accordion tabs are there <code v-pre>Jobs</code> &amp; <code v-pre>Laravel Logs</code>.</p>
<img :src="$withBase('/images/2.x-dashboard-4.png')">
<p>In Jobs tab describes the things related to laravel queue. There is two options
available <code v-pre>Pending</code> &amp; <code v-pre>failed</code> , which will redirects to jobs and failed jobs section respectively.</p>
<img :src="$withBase('/images/2.x-dashboard-5.png')">
<p>Another tab is about error logs of laravel. If any issue happen user can see the log list here.
For the details, user need to click <code v-pre>view</code> button to go to the details view of the log section.</p>
<img :src="$withBase('/images/2.x-dashboard-6.png')">
<p>At the middle section of Dashboard Two sections are there one is <code v-pre>Manage sites</code>
another one is <code v-pre>User &amp; access</code></p>
<img :src="$withBase('/images/2.x-dashboard-7.png')">
<table>
<thead>
<tr>
<th>Buttons</th>
<th>Use for</th>
</tr>
</thead>
<tbody>
<tr>
<td>Activate Theme</td>
<td>Redirect to <code v-pre>List of themes</code> section to activate one from there</td>
</tr>
<tr>
<td>View your Site</td>
<td>Redirect to the <code v-pre>Auther's website</code> of the activated theme</td>
</tr>
<tr>
<td>Manage your module</td>
<td>Redirect to Module section</td>
</tr>
<tr>
<td>View Details</td>
<td>Redirect to the respective section</td>
</tr>
</tbody>
</table>
</div></template>


