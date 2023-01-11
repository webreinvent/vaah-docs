import{_ as l,r as i,o as r,c as o,a as e,b as n,w as a,d as s,e as c}from"./app.096e9617.js";const v={},u=e("h1",{id:"assets",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#assets","aria-hidden":"true"},"#"),s(" Assets")],-1),m={class:"table-of-contents"},b=c(`<h2 id="what-is-this-directory-about" tabindex="-1"><a class="header-anchor" href="#what-is-this-directory-about" aria-hidden="true">#</a> What is this directory about</h2><p>This directory is on the root level will contain all the static assets that are used in the application, for example, fonts, icons, logos, background images, demo videos, etc. It is very much recommended that we should have different directories for a different type of data for example images, fonts, icons, etc should have a different folder of their own so that it becomes easier to maintain and access them.</p><p>We recommend sub categorizing these folders as well. i.e.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>project
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(f,p){const t=i("router-link"),d=i("RouterLink");return r(),o("div",null,[u,e("nav",m,[e("ul",null,[e("li",null,[n(t,{to:"#what-is-this-directory-about"},{default:a(()=>[s("What is this directory about")]),_:1})])])]),b,e("p",null,[s("To add assets in your flutter project, you'll need to add directory paths in "),n(d,{to:"/vaahflutter/directory_structure/root/pubspec.yaml.html#sample-pubspecyaml-file"},{default:a(()=>[s("pubspec.yaml")]),_:1})])])}const y=l(v,[["render",h],["__file","d_assets.html.vue"]]);export{y as default};
