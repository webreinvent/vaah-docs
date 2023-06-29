<template><div><h1 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This feature is to self updation of vaahCMS.</p>
<p>Visit following url you will see the update section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/settings/update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The update page is looks like below image:</p>
<img :src="$withBase('/images/update-setting-1.png')">
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="how-to-update" tabindex="-1"><a class="header-anchor" href="#how-to-update" aria-hidden="true">#</a> How to update</h4>
<p>By clicking <code v-pre>Check for update</code> button, which is present in the top-right corner will check in backed.</p>
<img :src="$withBase('/images/update-setting-2.png')">
<p>If there is any version difference occur then it will suggest for update like below image:</p>
<img :src="$withBase('/images/update-setting-3.png')">
<p>If the version difference is very high it will suggest update manually. Like below image:</p>
<img :src="$withBase('/images/update-setting-4.png')">
<p>If version is same then it will show like below :</p>
<img :src="$withBase('/images/update-setting-5.png')">
<p>This video will help you to understand the process of auto update</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_cAoLQPpcOd.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
</div></template>


