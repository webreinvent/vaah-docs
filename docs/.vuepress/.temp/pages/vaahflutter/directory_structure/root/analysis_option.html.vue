<template><div><h1 id="analysis-option-yaml" tabindex="-1"><a class="header-anchor" href="#analysis-option-yaml" aria-hidden="true">#</a> analysis_option.yaml</h1>
<nav class="table-of-contents"><ul><li><router-link to="#what-is-this-file-about">What is this file about</router-link></li></ul></nav>
<h2 id="what-is-this-file-about" tabindex="-1"><a class="header-anchor" href="#what-is-this-file-about" aria-hidden="true">#</a> What is this file about</h2>
<p>The ruleset for the dart code analyzer. To configure the analyzer, have a look at the <a href="https://dart.dev/guides/language/analysis-options" target="_blank" rel="noopener noreferrer">official documentation<ExternalLinkIcon/></a>.</p>
<p>Place the analysis options file, analysis_options.yaml, at the root of the package, in the same directory as the pubspec file.</p>
<p>Here’s a sample analysis options file:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>include: package:lints/recommended.yaml

analyzer:
  exclude: [build/**]
  language:
    strict-casts: true
    strict-raw-types: true

linter:
  rules:
    - cancel_subscriptions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Be careful while editing</p>
<p>YAML is sensitive to whitespace. Don’t use tabs in a YAML file, and use 2 spaces to denote each level of indentation.</p>
</div>
</div></template>


