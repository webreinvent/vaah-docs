"use strict";(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[8147],{1564:(e,a,t)=>{t.r(a),t.d(a,{data:()=>l});const l={key:"v-d6383b92",path:"/vaahcms/theme/develop-theme.html",title:"Develop Theme",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"vaahcms/theme/develop-theme.md",git:{updatedTime:1627122338e3}}},1497:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});var l=t(6252);const n=(0,l.uE)('<h1 id="develop-theme" tabindex="-1"><a class="header-anchor" href="#develop-theme" aria-hidden="true">#</a> Develop Theme</h1><hr><h5 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h5><p>The purpose of this tutorial is to develop a VaahCMS Theme for the management of blog with CMS Module.</p><h5 id="step-1-install-vaahcms" tabindex="-1"><a class="header-anchor" href="#step-1-install-vaahcms" aria-hidden="true">#</a> Step 1: Install VaahCMS</h5>',5),o=(0,l.Uk)("Steps to install VaahCMS is available at "),s=(0,l.Uk)("Getting Started > Installation"),i=(0,l._)("h5",{id:"step-2-install-vaahcli",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#step-2-install-vaahcli","aria-hidden":"true"},"#"),(0,l.Uk)(" Step 2: Install VaahCLI")],-1),r=(0,l.Uk)("Install NodeJs package "),d=(0,l._)("code",null,"VaahCLI",-1),c=(0,l.Uk)(" globally, instructions are available at "),h={href:"https://www.npmjs.com/package/vaah",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("VaahCLI"),u=(0,l.Uk)("."),m=(0,l.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i vaah <span class="token operator">-</span>g\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>VaahCLI will help you to quickly generate <code>Module</code> &amp; <code>Theme</code> scaffolding.</p>',2),g=(0,l.Uk)("You can effectively use the tool with "),v=(0,l._)("code",null,"Command Generator",-1),b=(0,l.Uk)(" at "),f=(0,l.Uk)("Generators"),w=(0,l.Uk)("."),k=(0,l.uE)('<h5 id="step-3-generate-theme" tabindex="-1"><a class="header-anchor" href="#step-3-generate-theme" aria-hidden="true">#</a> Step 3: Generate Theme</h5><p>Lets call the theme as <code>BlogTheme</code>. Open the command line tool &amp; navigate to the project root folder or in PHPStorm open <code>Terminal</code> and to generate scaffolding for the theme, use following command:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>vaah cms<span class="token punctuation">:</span>t\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>It will ask you following questions, answers also mentioned in <code>red</code> color:</p><ul><li>Enter your theme name: <code>BlogTheme</code></li><li>Enter meaningful title for your theme: <code>Theme for Blog</code></li><li>Enter your theme description: <code>Blog</code></li><li>Enter Author name: <code>Vaah</code></li><li>Enter Author email: <code>support@vaah.dev</code></li><li>Enter author website: <code>https://vaah.dev</code></li><li>Enter download URL: (don&#39;t enter anything, just press enter)</li><li>Do you want to run migration when activated (true/false): <code>true</code></li><li>Will your theme contains sample data (true/false): <code>true</code></li></ul><p>Once this step is complete, it will generate a new folder at <code>VaahCMS &gt; Themes &gt; BlogTheme</code>.</p><p>Now, you actually activate the theme by visiting following URL:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/themes/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Once, the theme is activated, you will be able to see the &quot;BlogTheme&quot; on Public url.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;project-url&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You will see the view generated from the following blade file</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VaahCms/Themes/BlogTheme/Resources/views/frontend/pages/index.blade.php\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',12),x={},y=(0,t(3744).Z)(x,[["render",function(e,a){const t=(0,l.up)("RouterLink"),x=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l._)("p",null,[o,(0,l.Wm)(t,{to:"/vaahcms/installation.html"},{default:(0,l.w5)((()=>[s])),_:1})]),i,(0,l._)("p",null,[r,d,c,(0,l._)("a",h,[p,(0,l.Wm)(x)]),u]),m,(0,l._)("p",null,[g,v,b,(0,l.Wm)(t,{to:"/vaahcms/generators.html"},{default:(0,l.w5)((()=>[f])),_:1}),w]),k],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[t,l]of a)e[t]=l;return e}}}]);