import{r as t,o as l,c as i,a as n,b as a,w as r,F as o,d as e,e as p}from"./app.52016828.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},b=n("h1",{id:"directory-structure",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#directory-structure","aria-hidden":"true"},"#"),e(" Directory Structure")],-1),d={class:"table-of-contents"},m=e("Introduction"),h=e("Environment Detection"),f=p(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   app/
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u200B</p><p>Read more about Laravel Directory Structure. The only differences are following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   bootstrap/
      \u251C\u2500\u2500 app.php
      \u251C\u2500\u2500 environment.php
      vaahcms.json
      VaahCms/
      \u251C\u2500\u2500 Modules/
      \u251C\u2500\u2500 Themes/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u200B</p><p>VaahCms folder contains two more sub folders Modules &amp; Themes. As the name suggests, Modules folder will have files and folders of VaahCMS Modules which extend the functionality of VaahCMS, majorly the backend control panel. While, Themes folder will contain files and folders of VaahCMS Themes which extends the public (frontend) section of the application.</p><p>Each Module and Theme will have its own directory structure which will be discussed in respective topics in the documentation.</p><h2 id="environment-detection" tabindex="-1"><a class="header-anchor" href="#environment-detection" aria-hidden="true">#</a> Environment Detection</h2><p>bootstrap / environment.php file is responsible to detect the environment from vaahcms.json file based on APP URL and apply respective .env file.</p>`,10);function v(_,x){const s=t("RouterLink");return l(),i(o,null,[b,n("nav",d,[n("ul",null,[n("li",null,[a(s,{to:"#introduction"},{default:r(()=>[m]),_:1})]),n("li",null,[a(s,{to:"#environment-detection"},{default:r(()=>[h]),_:1})])])]),f],64)}var y=c(u,[["render",v]]);export{y as default};
