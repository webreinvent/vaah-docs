<template><div><h1 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment variables</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Environment variables are values that impact the processes and behavior of vaahCMS, it may access the values for configuration purposes.</p>
<p>Visit following url you will see the Env-variables section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/settings/env-variables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is an example of Env-variables values.</p>
<img :src="$withBase('/images/env-setting-1.png')">
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="add-variables" tabindex="-1"><a class="header-anchor" href="#add-variables" aria-hidden="true">#</a> Add variables</h4>
<p>For adding a variable need to scroll down, at the bottom-right corner a field will be visible.
like below image :</p>
<img :src="$withBase('/images/env-setting-2.png')">
<p>Until the field is null <code v-pre>Add Env Variable</code> button will be disabled. Once it filled button will be enabled and after clicking it will add variable to the lists.</p>
<img :src="$withBase('/images/env-setting-3.png')">
<p>To save the list with newly added variable you need to click on save butto
Then a warning confirmation will come just like below :</p>
<img :src="$withBase('/images/env-setting-4.png')">
<p>Below video for better understanding.</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_jhtvHzEpDv.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<p>You can observe every letter and spaces are converted to uppercase and &quot;_&quot; respectively to reduce error during using as it will affect environment of the project.</p>
<h4 id="other-features" tabindex="-1"><a class="header-anchor" href="#other-features" aria-hidden="true">#</a> Other features</h4>
<p>In the blue colour tag active env file name is written.</p>
<img :src="$withBase('/images/env-setting-5.png')">
<p>At the top-right corner a download button will be visible, by clicking it .env file be downloaded.</p>
<img :src="$withBase('/images/env-setting-6.png')">
<p>Besides <code v-pre>Download button</code> a refresh button is there, through which you can reload the data.</p>
</div></template>


