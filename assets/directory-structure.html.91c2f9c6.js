import{_ as d,r as t,o as r,c as l,a as e,b as s,w as a,d as n,e as o}from"./app.60a653af.js";const c={},v=e("h1",{id:"directory-structure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#directory-structure","aria-hidden":"true"},"#"),n(" Directory Structure")],-1),u={class:"table-of-contents"},m=o(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   app/
      bootstrap/
      ├── cache/
      ├── app.php
      ├── environment.php
      config/
      database/
      public/
      resources/
      storage/
      tests/
      vendor/
      .env
      .env.example
      .gitattributes
      .gitignore
      artisan
      composer.json
      package.json
      package.json
      phpunit.xml
      README.md
      server.php
      vaahcms.json
      webpack.mix.js
      VaahCms/
      ├── Modules/
      ├── Themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>Read more about Laravel Directory Structure. The only differences are following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   bootstrap/
      ├── app.php
      ├── environment.php
      vaahcms.json
      VaahCms/
      ├── Modules/
      ├── Themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>VaahCms folder contains two more sub folders Modules &amp; Themes. As the name suggests, Modules folder will have files and folders of VaahCMS Modules which extend the functionality of VaahCMS, majorly the backend control panel. While, Themes folder will contain files and folders of VaahCMS Themes which extends the public (frontend) section of the application.</p><p>Each Module and Theme will have its own directory structure which will be discussed in respective topics in the documentation.</p><h2 id="environment-detection" tabindex="-1"><a class="header-anchor" href="#environment-detection" aria-hidden="true">#</a> Environment Detection</h2><p>bootstrap / environment.php file is responsible to detect the environment from vaahcms.json file based on APP URL and apply respective .env file.</p>`,10);function h(p,b){const i=t("router-link");return r(),l("div",null,[v,e("nav",u,[e("ul",null,[e("li",null,[s(i,{to:"#introduction"},{default:a(()=>[n("Introduction")]),_:1})]),e("li",null,[s(i,{to:"#environment-detection"},{default:a(()=>[n("Environment Detection")]),_:1})])])]),m])}const _=d(c,[["render",h],["__file","directory-structure.html.vue"]]);export{_ as default};
