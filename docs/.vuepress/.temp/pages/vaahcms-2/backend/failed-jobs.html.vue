<template><div><h1 id="failed-jobs" tabindex="-1"><a class="header-anchor" href="#failed-jobs" aria-hidden="true">#</a> Failed Jobs</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Sometimes our que job will fail For that reason we have a failed-jobs feature, where user can know the details about jobs which is broken in queue.</p>
<p>Visit following url you will see the Jobs section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/advanced/failedjobs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is a example of job records.</p>
<img :src="$withBase('/images/failedjobs-1.png')">
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="bulk-delete" tabindex="-1"><a class="header-anchor" href="#bulk-delete" aria-hidden="true">#</a> Bulk delete</h4>
<p>By selecting datas one can delete the records. Also there is delete all option for make it empty.</p>
<p><code v-pre>delete by selecting</code></p>
<img :src="$withBase('/images/failedjobs-2.png')">
<p><code v-pre>delete all</code></p>
<img :src="$withBase('/images/failedjobs-3.png')">
<h4 id="sorting" tabindex="-1"><a class="header-anchor" href="#sorting" aria-hidden="true">#</a> Sorting</h4>
<p>You can sort records by <code v-pre>ID</code> and with the <code v-pre>date it was created</code>.</p>
<img :src="$withBase('/images/failedjobs-4.png')">
<h4 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> Payload</h4>
<p>In <code v-pre>payload</code> column there is an eye button present, by clicking it will show the <code v-pre>payloads</code> in a popup,</p>
<img :src="$withBase('/images/failedjobs-5.png')">
<h4 id="exception" tabindex="-1"><a class="header-anchor" href="#exception" aria-hidden="true">#</a> Exception</h4>
<p>In <code v-pre>Exception</code> column there is an eye button present, by clicking it will show the <code v-pre>exception</code> in a popup,</p>
<img :src="$withBase('/images/failedjobs-6.png')">
<h4 id="reload" tabindex="-1"><a class="header-anchor" href="#reload" aria-hidden="true">#</a> Reload</h4>
<p>At top-right corner there is a <code v-pre>Refresh</code> icon there by clicking it data list will be reloaded.</p>
<img :src="$withBase('/images/failedjobs-7.png')"></div></template>


