<template><div><h1 id="general-settings" tabindex="-1"><a class="header-anchor" href="#general-settings" aria-hidden="true">#</a> General settings</h1>
<nav class="table-of-contents"><ul><li><router-link to="#introduction">Introduction</router-link></li><li><router-link to="#site-settings">Site Settings</router-link></li><li><router-link to="#date-time">Date &amp; Time</router-link></li><li><router-link to="#social-media-links">Social Media &amp; Links</router-link></li><li><router-link to="#scripts">Scripts</router-link></li><li><router-link to="#meta-tags">Meta Tags</router-link></li></ul></nav>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Those configurations are used to manage vaahCMS can be set in this <code v-pre>General settings</code> section.
Here controls are segregated in 5 parts in accordion, will discuss one by one.</p>
<p>Visit following url you will see the General settings section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/advanced/general
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is a example of General settings.</p>
<img :src="$withBase('/images/general-settings-1.png')">
<h2 id="site-settings" tabindex="-1"><a class="header-anchor" href="#site-settings" aria-hidden="true">#</a> Site Settings</h2>
<p>In this setting we are configuring the behavior of the application.</p>
<p>Below Image is a example of Site settings.</p>
<img :src="$withBase('/images/general-settings-2.png')">
<p>Follow the lists below to know about site settings</p>
<table>
<thead>
<tr>
<th>Title</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Site Title</td>
<td>The value in this field will reflect as a title in frontend application.</td>
</tr>
<tr>
<td>Default Site Language</td>
<td>The value in this field  wii be set as default through out application.</td>
</tr>
<tr>
<td>Redirect after Frontend Login</td>
<td>This will allow user to redirect after login in frontend side.</td>
</tr>
<tr>
<td>Meta Description</td>
<td>Short description of the application.</td>
</tr>
<tr>
<td>Search Engine Visibility</td>
<td>This is known as seo visibility.</td>
</tr>
<tr>
<td>Assign Role(s) on Registration</td>
<td>This value will be the status of a user after registration.</td>
</tr>
<tr>
<td>Allowed file types for upload</td>
<td>This will allow user to upload files of particular types.</td>
</tr>
<tr>
<td>Copyright Text</td>
<td>This will show in footer. Custom option is there one can show it's own words.</td>
</tr>
<tr>
<td>Copyright Link</td>
<td>This will show in footer. Custom option is there one can show effective link</td>
</tr>
<tr>
<td>Copyright Year</td>
<td>This will show in footer. Custom year option is there.</td>
</tr>
<tr>
<td>Max number of forgot password attempts</td>
<td>This will allow user to attempt forgot password. If the number of attempts exceeds from given number it will take action.</td>
</tr>
<tr>
<td>Maximum number of login attempts</td>
<td>This will allow user to fixed login attempt. If the number of attempts exceeds from given number it will take action.</td>
</tr>
<tr>
<td>Password Protection</td>
<td>This will help to masking password at the time of login or registered.</td>
</tr>
<tr>
<td>Laravel Queues</td>
<td>This will enable the queue feature of laravel in vaahCMS.</td>
</tr>
<tr>
<td>Maintenance Mode</td>
<td>This will show a message for maintenance if it is enabled.</td>
</tr>
<tr>
<td>Redirect after Backend Logout</td>
<td>After logout where should it redirect, login page, frontend  or other this feature is for.</td>
</tr>
</tbody>
</table>
<p>After set all the configuration you need to click on <code v-pre>Save Setting</code> button to achieve those effect.
There is also <code v-pre>Clear Cache</code> button which will help user to clear by pressing a button, after that it will log out and take to the login page.</p>
<p>Below video will help to understand about site settings :</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_2aMY72cHW6.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h2 id="date-time" tabindex="-1"><a class="header-anchor" href="#date-time" aria-hidden="true">#</a> Date &amp; Time</h2>
<p>This setting is to set the format of the date, time and date&amp;time. Each format get a dropdown,
where some fixed formats are there. Also there is custom option available to avail user defined format.</p>
<p>Below image is of <code v-pre>Date &amp; Time</code> settings.</p>
<img :src="$withBase('/images/general-settings-3.png')">
<p>After set the format of the Date and Time you need to click on the <code v-pre>Save</code>.</p>
<h2 id="social-media-links" tabindex="-1"><a class="header-anchor" href="#social-media-links" aria-hidden="true">#</a> Social Media &amp; Links</h2>
<p>This is for managing social media and its links.</p>
<p>Below image is of <code v-pre>Social Media &amp; Links</code> settings.</p>
<img :src="$withBase('/images/general-settings-4.png')">
<p>Here one can add new social media link also remove old one if not useful.
Watch the video below to know How to <code v-pre>Manage social media &amp; its links</code> :</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_FRxckDhd8J.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h2 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> Scripts</h2>
<p>In this section you can put <code v-pre>Google Analytics</code> script tags. Here we can put tags in two parts, one inside head and another one inside body.</p>
<p>Below image is of <code v-pre>Scripts</code> settings.</p>
<img :src="$withBase('/images/general-settings-5.png')">
<p>After put tags inside these four fields click on <code v-pre>Save</code> to store the configuration for <code v-pre>Script Tag</code></p>
<h2 id="meta-tags" tabindex="-1"><a class="header-anchor" href="#meta-tags" aria-hidden="true">#</a> Meta Tags</h2>
<p>VahhCMS has meta tag updating section where we can add our custom meta tag. VaahCMS presents two meta tags, which is
<code v-pre>Google Webmaster</code> &amp; <code v-pre>Open Graph(Facebook)</code>.</p>
<p>Below image is for reference:</p>
<img :src="$withBase('/images/general-settings-6.png')">
<p>One can add a tag by clicking  <code v-pre>Add Meta Tag</code> button. It will add a tag there you need to define some property.</p>
<p>Below video will help you to understand how to add a <code v-pre>Meta Tag</code>:</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_ls71HjXLXM.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<p>If you want to add VaahCMS <code v-pre>Meta Tags</code> watch below video :</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_5N1FXxuZ31.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
</div></template>


