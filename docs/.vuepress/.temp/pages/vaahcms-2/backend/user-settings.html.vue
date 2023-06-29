<template><div><h1 id="user-settings" tabindex="-1"><a class="header-anchor" href="#user-settings" aria-hidden="true">#</a> User settings</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>User setting is basically deals with the fields and data we are asking to user at the time of registration or user create. Here we can manipulate the fields' visibility.</p>
<p>Below image is the example of user-settings:</p>
<img :src="$withBase('/images/user-settings-1.png')">
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>There are two accordion named as <code v-pre>Fields</code> and <code v-pre>Custom Fields</code> available,
One can open them using clicking on them or using button <code v-pre>Expand all</code> button and close them by clicking again on open <code v-pre>Accordion</code> or <code v-pre>Collapse all</code> button.</p>
<img :src="$withBase('/images/user-settings-2.png')">
<h4 id="fields" tabindex="-1"><a class="header-anchor" href="#fields" aria-hidden="true">#</a> Fields</h4>
<p>Inside this section some predefined fields are there. By default, the fields are visible in <code v-pre>user create form</code>.
If you want to hide in <code v-pre>user create form</code> just om the toggle present in the <code v-pre>Is Hidden</code> column.</p>
<p>Below image will help you to find the column :</p>
<img :src="$withBase('/images/user-settings-3.png')">
<p>In below image You can see where it will affect  :</p>
<img :src="$withBase('/images/user-settings-4.png')">
<p>If you want to hide in <code v-pre>user registration form</code> you need to <code v-pre>check</code> <code v-pre>Apply To Registration</code>
column.</p>
<p>Below image will help you to find the column :</p>
<img :src="$withBase('/images/user-settings-5.png')">
<p>In below image You can see where it will affect  :</p>
<img :src="$withBase('/images/user-settings-6.png')">
<p>Control of <code v-pre>Fields</code> into respective area is shown in below video :</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_7SPozdalzj.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="custom-fields" tabindex="-1"><a class="header-anchor" href="#custom-fields" aria-hidden="true">#</a> Custom Fields</h4>
<p>This feature is for extra requirement. Suppose we need Adhar Number for which there is no field, in that case we can create it and use it in desired forms.</p>
<p>Below image is of <code v-pre>Custom Fields</code> :</p>
<img :src="$withBase('/images/user-settings-7.png')">
<p>You can see a dropdown in above image on bottom-left corner, select field type and press add button to add.</p>
<p>After <code v-pre>Add</code> newly added field will be like below image :</p>
<img :src="$withBase('/images/user-settings-8.png')">
<p>In the above image 3 buttons and 1 text fields are there.
First button from left side is to drag as the sections are draggable.</p>
<img :src="$withBase('/images/user-settings-9.png')">
<p>Second button <code v-pre>Cog icon</code> is to expand collapse of field options.</p>
<img :src="$withBase('/images/user-settings-10.png')">
<p>Third <code v-pre>Trash</code> button is to remove added fields form the <code v-pre>Custom Fields</code> list.</p>
<p>The text field present is to write the name of the field so that it will dispaly in form with that name dynamically.</p>
<img :src="$withBase('/images/user-settings-11.png')">
<p>More configuration are there, after save with configuration it will appear in the form.</p>
<p>Below video will explain the flow :</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_NJVUbFZDuA.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
</div></template>


