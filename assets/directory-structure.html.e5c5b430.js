import{_ as t,r as d,o as r,c as l,a as e,b as s,w as a,F as o,d as n,e as c}from"./app.45c05e7b.js";const v={},u=e("h1",{id:"directory-structure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#directory-structure","aria-hidden":"true"},"#"),n(" Directory Structure")],-1),m={class:"table-of-contents"},h=n("Introduction"),p=n("Environment Detection"),b=c(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   app/
      bootstrap/
      \u251C\u2500\u2500 cache/
      \u251C\u2500\u2500 app.php
      \u251C\u2500\u2500 environment.php
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
      \u251C\u2500\u2500 Modules/
      \u251C\u2500\u2500 Themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B</p><p>Read more about Laravel Directory Structure. The only differences are following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   bootstrap/
      \u251C\u2500\u2500 app.php
      \u251C\u2500\u2500 environment.php
      vaahcms.json
      VaahCms/
      \u251C\u2500\u2500 Modules/
      \u251C\u2500\u2500 Themes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B</p><p>VaahCms folder contains two more sub folders Modules &amp; Themes. As the name suggests, Modules folder will have files and folders of VaahCMS Modules which extend the functionality of VaahCMS, majorly the backend control panel. While, Themes folder will contain files and folders of VaahCMS Themes which extends the public (frontend) section of the application.</p><p>Each Module and Theme will have its own directory structure which will be discussed in respective topics in the documentation.</p><h2 id="environment-detection" tabindex="-1"><a class="header-anchor" href="#environment-detection" aria-hidden="true">#</a> Environment Detection</h2><p>bootstrap / environment.php file is responsible to detect the environment from vaahcms.json file based on APP URL and apply respective .env file.</p>`,10);function f(_,x){const i=d("RouterLink");return r(),l(o,null,[u,e("nav",m,[e("ul",null,[e("li",null,[s(i,{to:"#introduction"},{default:a(()=>[h]),_:1})]),e("li",null,[s(i,{to:"#environment-detection"},{default:a(()=>[p]),_:1})])])]),b],64)}var w=t(v,[["render",f],["__file","directory-structure.html.vue"]]);export{w as default};
