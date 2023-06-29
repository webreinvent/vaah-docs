<template><div><h1 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> Media</h1>
<p>Media Section is a collection of your image, audio, and Flash files used to enhance your website. Media Section can also generate all sorts of conversions. Using the blog post example, you probably don't want to display the original image in a list of blog posts. It's more likely that you want to show a thumbnail, on such a list.</p>
<hr>
<h5 id="create-media" tabindex="-1"><a class="header-anchor" href="#create-media" aria-hidden="true">#</a> Create Media</h5>
<p>Visit following url you will see the Media section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/manage/media/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/2x-media-1.png')" alt="media1">
<p>Now you have to create a <code v-pre>Media</code> by click on <code v-pre>Create</code> button. You will see a create page with following field.</p>
<img :src="$withBase('/images/2x-media-2.png')" alt="media2">
<p>Fill all Fields and <code v-pre>upload</code> a file. Click on <code v-pre>Save</code> button.</p>
<img :src="$withBase('/images/2x-media-3.png')" alt="media3">
<p>Now you can see the file in <code v-pre>View</code> Page and view the <code v-pre>Original</code> file and <code v-pre>Thumbnail</code> file by click on that icon.</p>
<p><strong>Note:</strong> <code v-pre>You can use Generated Media url everywhere in Project. This URL can be shared with anyone and allows them to download the original media file.</code></p>
<hr>
</div></template>


