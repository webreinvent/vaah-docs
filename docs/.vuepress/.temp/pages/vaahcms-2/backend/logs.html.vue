<template><div><h1 id="logs" tabindex="-1"><a class="header-anchor" href="#logs" aria-hidden="true">#</a> Logs</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This features helps  user to view the errors inside the panel instead of terminal if any error approaches during work.</p>
<p>Visit following url you will see the Lobs section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/advanced/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is a example of job records.</p>
<img :src="$withBase('/images/logs-1.png')">
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="details-view" tabindex="-1"><a class="header-anchor" href="#details-view" aria-hidden="true">#</a> Details view</h4>
<p>By default, the view of logs are in list mode.
If user want to see more about <code v-pre>error</code> click on <code v-pre>Eye icon</code> in action column.</p>
<img :src="$withBase('/images/logs-2.png')">
<p>User can directly refresh items by clicking the <code v-pre>Refresh icon</code></p>
<p>User can delete logs by clicking <code v-pre>Trash icon</code> presents individual rows.
Another way is clicking <code v-pre>Delete All</code>.</p>
<img :src="$withBase('/images/logs-3.png')">
</div></template>


