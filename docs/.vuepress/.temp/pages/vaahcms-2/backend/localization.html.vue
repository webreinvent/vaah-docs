<template><div><h1 id="localization" tabindex="-1"><a class="header-anchor" href="#localization" aria-hidden="true">#</a> Localization</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Localization features provide a convenient way to retrieve strings in various languages, allowing you to easily support multiple languages within your application.</p>
<p>Visit following url you will see the localization section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/settings/localization
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is an example of localization.</p>
<img :src="$withBase('/images/localization-setting-1.png')">
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="add-into-localization" tabindex="-1"><a class="header-anchor" href="#add-into-localization" aria-hidden="true">#</a> Add into localization</h4>
<p>For adding into need to scroll down, at the bottom-left corner a field will be visible.
like below image :</p>
<img :src="$withBase('/images/localization-setting-2.png')">
<p>Until the field is null <code v-pre>Add String</code> button will be disabled. Once it filled button will be enabled and after clicking it will add variable to the lists.</p>
<img :src="$withBase('/images/localization-setting-3.png')">
<p>To save the list with newly added variable you need to click on save button
Then a warning confirmation will come just like below :</p>
<img :src="$withBase('/images/localization-setting-4.png')">
<p>Below video for better understanding.</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_OAmkBlhFCF.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="add-language-localization" tabindex="-1"><a class="header-anchor" href="#add-language-localization" aria-hidden="true">#</a> Add language localization</h4>
<p>On the top-right corner a button is there named <code v-pre>Add Language</code> by clicking it a form will appear under message section.</p>
<p>Like below image</p>
<img :src="$withBase('/images/localization-setting-5.png')">
<p>Two fields are required to save the language otherwise it will ask ti fill.</p>
<p>After click on save button language will be added in the list and you can see the list of languages by clicking the dropdown on top-left corner.</p>
<img :src="$withBase('/images/localization-setting-6.png')">
<p>Default language is <code v-pre>English (56/57)</code>, if you want to change language select one from the list then it will filter the values against the language.</p>
<p>Inside the bracket it is written how many fields are filled out of total added fields.</p>
<p>If you want to add field, it will add the field against the selected language from the list.</p>
<p>Below video will help you to understand with example :</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_9HFaHtKvhc.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="add-category-localization" tabindex="-1"><a class="header-anchor" href="#add-category-localization" aria-hidden="true">#</a> Add category localization</h4>
<p>There is an option vaahCMS provide that to add strings under category which will enhance the user experience in multi-language feature.
User can filter the lists using category and language as well.</p>
<p>Below image is an exmple of add and filter of category:</p>
<img :src="$withBase('/images/localization-setting-7.png')">
<p><code v-pre>Add New Category</code> section will be visible after click on <code v-pre>Add Category button</code> under warning message.</p>
<p>Once put category name in the field and click on <code v-pre>save</code> button, the new category will be saved and appear in the filter dropdown of category.</p>
<p>Below video will help you to understand with example :</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_CEk9xFYSRC.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<p>Besides <code v-pre>Category filter dropdown</code> another dropdown is present which is to filter the list with values or without.</p>
<img :src="$withBase('/images/localization-setting-8.png')">
<h4 id="reset-localization-filter" tabindex="-1"><a class="header-anchor" href="#reset-localization-filter" aria-hidden="true">#</a> Reset localization filter</h4>
<p>At the end of filter row <code v-pre>Reset</code> button will help to reset all the filters. But after reset `Englist (56/57) will be selected as it is the default language.</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_CXayJJCfdu.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="generate-language-files-localization" tabindex="-1"><a class="header-anchor" href="#generate-language-files-localization" aria-hidden="true">#</a> Generate Language Files localization</h4>
<p><code v-pre>Generate Language Files</code> button is there at the bottom-right corner before <code v-pre>save</code> button. By which You can generate language file in the backend.</p>
<img :src="$withBase('/images/localization-setting-9.png')">
</div></template>


