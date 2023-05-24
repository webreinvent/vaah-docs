import{_ as l,r as n,o,c as r,a as e,b as i,w as c,d as a,e as d}from"./app.62b9cc5c.js";const u={},h=e("h1",{id:"analysis-option-yaml",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#analysis-option-yaml","aria-hidden":"true"},"#"),a(" analysis_option.yaml")],-1),p={class:"table-of-contents"},v=e("h2",{id:"what-is-this-file-about",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-this-file-about","aria-hidden":"true"},"#"),a(" What is this file about")],-1),m={href:"https://dart.dev/guides/language/analysis-options",target:"_blank",rel:"noopener noreferrer"},_=d(`<p>Place the analysis options file, analysis_options.yaml, at the root of the package, in the same directory as the pubspec file.</p><p>Here’s a sample analysis options file:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>include: package:lints/recommended.yaml

analyzer:
  exclude: [build/**]
  language:
    strict-casts: true
    strict-raw-types: true

linter:
  rules:
    - cancel_subscriptions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Be careful while editing</p><p>YAML is sensitive to whitespace. Don’t use tabs in a YAML file, and use 2 spaces to denote each level of indentation.</p></div>`,4);function f(b,y){const s=n("router-link"),t=n("ExternalLinkIcon");return o(),r("div",null,[h,e("nav",p,[e("ul",null,[e("li",null,[i(s,{to:"#what-is-this-file-about"},{default:c(()=>[a("What is this file about")]),_:1})])])]),v,e("p",null,[a("The ruleset for the dart code analyzer. To configure the analyzer, have a look at the "),e("a",m,[a("official documentation"),i(t)]),a(".")]),_])}const x=l(u,[["render",f],["__file","analysis_option.html.vue"]]);export{x as default};
