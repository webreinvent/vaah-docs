<template><div><h1 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h1>
<nav class="table-of-contents"><ul><li><router-link to="#what-is-this-directory-about">What is this directory about</router-link></li></ul></nav>
<h2 id="what-is-this-directory-about" tabindex="-1"><a class="header-anchor" href="#what-is-this-directory-about" aria-hidden="true">#</a> What is this directory about</h2>
<p>This directory is on the root level will contain all the static assets that are used in the application, for example, fonts, icons, logos, background images, demo videos, etc. It is very much recommended that we should have different directories for a different type of data for example images, fonts, icons, etc should have a different folder of their own so that it becomes easier to maintain and access them.</p>
<p>We recommend sub categorizing these folders as well. i.e.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>project
│   
└─── assets
    │
    └─── fonts
    |   │   
    |   └─── roboto
    |   |   | ...
    |   └─── timesnewroman
    |   |   | ...
    |   | ...
    |
    └─── icons
    |   |  
    |   └─── core
    |   |   | ...
    |   └─── storerelated
    |   |   | ...
    |   | ...
    |
    └─── images
        |   
        └─── essentials
        |   | ...
        └─── logos
        |   | ...
        └─── backgrounds
        |   | ...
        └─── settings
        |   | ...
        | ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To add assets in your flutter project, you'll need to add directory paths in <RouterLink to="/vaahflutter/directory_structure/root/pubspec.yaml.html#sample-pubspecyaml-file">pubspec.yaml</RouterLink></p>
</div></template>


