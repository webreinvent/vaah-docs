<template><div><h1 id="raise-an-issue" tabindex="-1"><a class="header-anchor" href="#raise-an-issue" aria-hidden="true">#</a> Raise an issue</h1>
<nav class="table-of-contents"><ul><li><router-link to="#how-to-raise-an-issue">How to raise an issue?</router-link></li><li><router-link to="#format">Format</router-link><ul><li><router-link to="#list-all-the-issues-you-ve-found">List all the issues you&#39;ve found</router-link></li><li><router-link to="#steps-to-reproduce">Steps to reproduce</router-link></li><li><router-link to="#expected-outcome">Expected outcome</router-link></li><li><router-link to="#actual-results">Actual results</router-link></li><li><router-link to="#suggestions-for-the-fix-if-any">Suggestions for the fix if any</router-link></li><li><router-link to="#debug-logs">Debug logs</router-link></li><li><router-link to="#minimal-code-to-reproduce-the-issue-perticular-file-s-or-code-which-is-causing-the-issue">Minimal code to reproduce the issue/ perticular file(s) or code which is causing the issue</router-link></li><li><router-link to="#details">Details</router-link></li></ul></li></ul></nav>
<h2 id="how-to-raise-an-issue" tabindex="-1"><a class="header-anchor" href="#how-to-raise-an-issue" aria-hidden="true">#</a> How to raise an issue?</h2>
<ol>
<li>
<p>Check if the issue has been raised already on GitHub? Try searching closed issues also.</p>
</li>
<li>
<p>Try to reproduce it again. Specify, if you've tried <code v-pre>flutter clean</code>, <code v-pre>clean install</code>, <code v-pre>version bumps</code>, <code v-pre>etc</code>.</p>
</li>
<li>
<p>Try to record/ take snapshot of the issue and attach it.</p>
</li>
<li>
<p>Attach the debug log.</p>
</li>
<li>
<p>Provide steps to Reproduce.</p>
</li>
<li>
<p>If possible provide <code v-pre>minimal code sample</code> to reproduce the error.</p>
</li>
<li>
<p>If possible provide log for <code v-pre>flutter --doctor</code>, branch name, platform details to reproduce the error.</p>
</li>
</ol>
<h2 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> Format</h2>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">name</span><span class="token punctuation">:</span> Reporting a bug
<span class="token key atrule">about</span><span class="token punctuation">:</span> Use this template for reporting a bug.
<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"[Bug Description]"</span>
<span class="token key atrule">labels</span><span class="token punctuation">:</span> bug</span>
<span class="token punctuation">---</span></span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">List all the issues you've found</span><span class="token punctuation">**</span></span>

<span class="token list punctuation">-</span> Issue title

<span class="token hr punctuation">---</span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Steps to reproduce</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">1.</span> Go to the <span class="token code-snippet code keyword">`ABC`</span> page.
<span class="token list punctuation">2.</span> Perform <span class="token code-snippet code keyword">`LMN`</span> task.

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Expected outcome</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> description

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Actual results</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> description

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Suggestions for the fix if any</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> NA/Description

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Debug logs</span><span class="token punctuation">**</span></span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Minimal code to reproduce the issue/ perticular file(s) or code which is causing the issue</span><span class="token punctuation">**</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span> filename.ext <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>

<span class="token title important"><span class="token punctuation">###</span> Details</span>

<span class="token list punctuation">-</span> [ ] I have tried reproducing, and the issue is reproducible
<span class="token list punctuation">-</span> [ ] I have tried debugging
<span class="token list punctuation">-</span> [ ] I've provided all the mandatory info for this issue

<span class="token list punctuation">-</span> Device and platform on which you've tested
<span class="token list punctuation">-</span> Video/ Image(s) proof if possible (Link or attach it here)
<span class="token list punctuation">-</span> Output from flutter doctor if possible

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-all-the-issues-you-ve-found" tabindex="-1"><a class="header-anchor" href="#list-all-the-issues-you-ve-found" aria-hidden="true">#</a> List all the issues you've found</h3>
<p>Write down the issue description after <code v-pre>List all the issues you've found</code>.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">List all the issues you've found</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> Issue one: title
<span class="token list punctuation">-</span> Issue two: title

<span class="token hr punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="steps-to-reproduce" tabindex="-1"><a class="header-anchor" href="#steps-to-reproduce" aria-hidden="true">#</a> Steps to reproduce</h3>
<p>Add Steps to reproduce the issue in this section.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Steps to reproduce</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">1.</span> Go to the <span class="token code-snippet code keyword">`ABC`</span> page.
<span class="token list punctuation">2.</span> Perform <span class="token code-snippet code keyword">`LMN`</span> task.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="expected-outcome" tabindex="-1"><a class="header-anchor" href="#expected-outcome" aria-hidden="true">#</a> Expected outcome</h3>
<p>Write about what is expected.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Expected outcome</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> description
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actual-results" tabindex="-1"><a class="header-anchor" href="#actual-results" aria-hidden="true">#</a> Actual results</h3>
<p>Write about what is actual results.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Actual results</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> description
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="suggestions-for-the-fix-if-any" tabindex="-1"><a class="header-anchor" href="#suggestions-for-the-fix-if-any" aria-hidden="true">#</a> Suggestions for the fix if any</h3>
<p>Write your suggetion after <strong>Suggestions for the fix if any</strong>.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Suggestions for the fix if any</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> NA/Description
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debug-logs" tabindex="-1"><a class="header-anchor" href="#debug-logs" aria-hidden="true">#</a> Debug logs</h3>
<p>Attach Debug logs if any.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Debug logs</span><span class="token punctuation">**</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="minimal-code-to-reproduce-the-issue-perticular-file-s-or-code-which-is-causing-the-issue" tabindex="-1"><a class="header-anchor" href="#minimal-code-to-reproduce-the-issue-perticular-file-s-or-code-which-is-causing-the-issue" aria-hidden="true">#</a> Minimal code to reproduce the issue/ perticular file(s) or code which is causing the issue</h3>
<p>Attach minimal code to reproduce the issue.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Minimal code to reproduce the issue/ perticular file(s) or code which is causing the issue</span><span class="token punctuation">**</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span> filename.ext <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="details" tabindex="-1"><a class="header-anchor" href="#details" aria-hidden="true">#</a> Details</h3>
<p>Developer should tick the relevant boxes for PR they're raising. To tick a box? put <code v-pre>[x]</code> instead of <code v-pre>[ ]</code>. Add the additional details if possible.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> [x] I have tried reproducing, and the issue is reproducible
<span class="token list punctuation">-</span> [ ] I have tried debugging
<span class="token list punctuation">-</span> [ ] I've provided all the mandatory info for this issue

<span class="token list punctuation">-</span> Device and platform on which you've tested
<span class="token list punctuation">-</span> Video/ Image(s) proof if possible (Link or attach it here)
<span class="token list punctuation">-</span> Output from flutter doctor if possible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


