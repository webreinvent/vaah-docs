<template><div><h1 id="raise-a-pr" tabindex="-1"><a class="header-anchor" href="#raise-a-pr" aria-hidden="true">#</a> Raise a PR</h1>
<nav class="table-of-contents"><ul><li><router-link to="#how-to-raise-a-pr">How to raise a PR?</router-link></li><li><router-link to="#format">Format</router-link><ul><li><router-link to="#title-with-the-link">Title with the link</router-link></li><li><router-link to="#time-log">Time Log</router-link></li><li><router-link to="#problem-statement">Problem statement</router-link></li><li><router-link to="#describe-the-fix-solution-you-implemented">Describe The Fix/ Solution You Implemented</router-link></li><li><router-link to="#dependencies">Dependencies</router-link></li><li><router-link to="#proof-of-your-testing">Proof of your testing</router-link></li><li><router-link to="#merge-request-checklist">Merge Request Checklist</router-link></li></ul></li></ul></nav>
<h2 id="how-to-raise-a-pr" tabindex="-1"><a class="header-anchor" href="#how-to-raise-a-pr" aria-hidden="true">#</a> How to raise a PR?</h2>
<ol>
<li>
<p>Check if the issue has been raised already on GitHub and if someone has picked it up already or not? Try searching closed issues also.</p>
</li>
<li>
<p>Fork the repo from latest develop branch</p>
</li>
<li>
<p>Perform the changes.</p>
</li>
<li>
<p>Do the manual and automated testing for different platforms, OS versions and different size devices.</p>
</li>
<li>
<p>Check the naming conventions.</p>
</li>
<li>
<p>Raise a PR.</p>
</li>
</ol>
<h2 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> Format</h2>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">Task #0 Title</span>](<span class="token url">url</span>)</span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Time invested:</span><span class="token punctuation">**</span></span> hh:mm format | <span class="token bold"><span class="token punctuation">**</span><span class="token content">Billable</span><span class="token punctuation">**</span></span>: 00:00 | <span class="token bold"><span class="token punctuation">**</span><span class="token content">Non-Billable</span><span class="token punctuation">**</span></span>: 00:00

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Problem Statement</span><span class="token punctuation">**</span></span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Describe The Fix/ Solution You Implemented</span><span class="token punctuation">**</span></span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Proof of your testing (Demo link or video links or image links)</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> For all the plateforms

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Dependencies</span><span class="token punctuation">**</span></span>
Updated:
- 
Added:
- 

<span class="token title important"><span class="token punctuation">###</span> Merge Request Checklist</span>

<span class="token list punctuation">-</span> [x] I have performed a self-review of my code
<span class="token list punctuation">-</span> [ ] My code does follow <span class="token code-snippet code keyword">`industry standards`</span>
<span class="token list punctuation">-</span> [ ] My code doesn't produce <span class="token code-snippet code keyword">`warnings/ errors`</span> for <span class="token code-snippet code keyword">`dart analyzer`</span>
<span class="token list punctuation">-</span> [ ] New and existing <span class="token code-snippet code keyword">`tests`</span> pass locally with my changes (No tests are there as of now)
<span class="token list punctuation">-</span> [ ] The code modified as part of this PR has been covered with tests
<span class="token list punctuation">-</span> [ ] My code is <span class="token code-snippet code keyword">`properly formatted`</span>
<span class="token list punctuation">-</span> [ ] I've followed the proper naming conventions
<span class="token list punctuation">-</span> [ ] I have rebased the <span class="token code-snippet code keyword">`feature`</span> on the latest <span class="token code-snippet code keyword">`develop`</span>
<span class="token list punctuation">-</span> [ ] I have run <span class="token code-snippet code keyword">`flutter run`</span> after the rebase
<span class="token list punctuation">-</span> [ ] I have added new dependencies/ updated old dependencies
<span class="token list punctuation">-</span> [ ] I have read all the <span class="token code-snippet code keyword">`comments`</span> &amp; <span class="token code-snippet code keyword">`notes`</span> in <span class="token code-snippet code keyword">`wireframe`</span> and verified that I did take care of that
<span class="token list punctuation">-</span> [ ] verify that the <span class="token code-snippet code keyword">`UI`</span> must match with <span class="token code-snippet code keyword">`design`</span> &amp; <span class="token code-snippet code keyword">`wireframe`</span> if available
<span class="token list punctuation">-</span> [ ] I have updated the <span class="token code-snippet code keyword">`version/ build`</span> (<span class="token code-snippet code keyword">`x.x.x+xxx`</span>)
<span class="token list punctuation">-</span> [ ] I've verified that the latest commit of <span class="token code-snippet code keyword">`develop`</span> exists in your <span class="token code-snippet code keyword">`feature`</span> branch after rebase.
<span class="token list punctuation">-</span> [ ] My fix achieves 100% of what is required
<span class="token list punctuation">-</span> [ ] Can enhance the solution in the future because better implementation could be made
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="title-with-the-link" tabindex="-1"><a class="header-anchor" href="#title-with-the-link" aria-hidden="true">#</a> Title with the link</h3>
<p>Developer need to add title of Task here, and add the task link as well. For open source contributers, they can put the title by theirselves.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token url">[<span class="token content">Task #0 Title</span>](<span class="token url">url</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="time-log" tabindex="-1"><a class="header-anchor" href="#time-log" aria-hidden="true">#</a> Time Log</h3>
<p>Developer need to log Billable/ Non-Billable Time. All the Developers contributing for open-source should log Non-Billable time/ they can ignore this section.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Time invested:</span><span class="token punctuation">**</span></span> hh:mm format | <span class="token bold"><span class="token punctuation">**</span><span class="token content">Billable</span><span class="token punctuation">**</span></span>: 00:00 | <span class="token bold"><span class="token punctuation">**</span><span class="token content">Non-Billable</span><span class="token punctuation">**</span></span>: 00:00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="problem-statement" tabindex="-1"><a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a> Problem statement</h3>
<p>Write down the issue description after <code v-pre>**Problem Statement**</code>.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Problem Statement</span><span class="token punctuation">**</span></span>
This is the issue description.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="describe-the-fix-solution-you-implemented" tabindex="-1"><a class="header-anchor" href="#describe-the-fix-solution-you-implemented" aria-hidden="true">#</a> Describe The Fix/ Solution You Implemented</h3>
<p>Write your suggetion after <code v-pre>**Describe The Fix/ Solution You Implemented**</code></p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Describe The Fix/ Solution You Implemented</span><span class="token punctuation">**</span></span>
I fixed xyz.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h3>
<p>Write dependencies you added/ modified, after <code v-pre>**Dependencies**</code>.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Dependencies</span><span class="token punctuation">**</span></span>

<span class="token list punctuation">-</span> added
abc: 1.0.0

<span class="token list punctuation">-</span> updated
xyz: 1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proof-of-your-testing" tabindex="-1"><a class="header-anchor" href="#proof-of-your-testing" aria-hidden="true">#</a> Proof of your testing</h3>
<p>Attach links after <code v-pre>**Proof of your testing (Demo link or video links or image links)**</code>.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Proof of your testing (Demo link or video links or image links)</span><span class="token punctuation">**</span></span>
<span class="token list punctuation">-</span> Android
<span class="token url">[<span class="token content">link</span>](<span class="token url">https://webreinvent.com</span>)</span>
<span class="token list punctuation">-</span> iOS
<span class="token url">[<span class="token content">link</span>](<span class="token url">https://webreinvent.com</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="merge-request-checklist" tabindex="-1"><a class="header-anchor" href="#merge-request-checklist" aria-hidden="true">#</a> Merge Request Checklist</h3>
<p>Developer should tick the relevant boxes for PR they're raising. To tick a box? put <code v-pre>[x]</code> instead of <code v-pre>[ ]</code>.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> Merge Request Checklist</span>

<span class="token list punctuation">-</span> [x] I have performed a self-review of my code
<span class="token list punctuation">-</span> [ ] My code does follow <span class="token code-snippet code keyword">`industry standards`</span>
<span class="token list punctuation">-</span> [ ] My code doesn't produce <span class="token code-snippet code keyword">`warnings/ errors`</span> for <span class="token code-snippet code keyword">`dart analyzer`</span>
<span class="token list punctuation">-</span> [ ] New and existing <span class="token code-snippet code keyword">`tests`</span> pass locally with my changes (No tests are there as of now)
<span class="token list punctuation">-</span> [ ] The code modified as part of this PR has been covered with tests
<span class="token list punctuation">-</span> [ ] My code is <span class="token code-snippet code keyword">`properly formatted`</span>
<span class="token list punctuation">-</span> [ ] I've followed the proper naming conventions
<span class="token list punctuation">-</span> [ ] I have rebased the <span class="token code-snippet code keyword">`feature`</span> on the latest <span class="token code-snippet code keyword">`develop`</span>
<span class="token list punctuation">-</span> [ ] I have run <span class="token code-snippet code keyword">`flutter run`</span> after the rebase
<span class="token list punctuation">-</span> [ ] I have added new dependencies/ updated old dependencies
<span class="token list punctuation">-</span> [ ] I have read all the <span class="token code-snippet code keyword">`comments`</span> &amp; <span class="token code-snippet code keyword">`notes`</span> in <span class="token code-snippet code keyword">`wireframe`</span> and verified that I did take care of that
<span class="token list punctuation">-</span> [ ] verify that the <span class="token code-snippet code keyword">`UI`</span> must match with <span class="token code-snippet code keyword">`design`</span> &amp; <span class="token code-snippet code keyword">`wireframe`</span> if available
<span class="token list punctuation">-</span> [ ] I have updated the <span class="token code-snippet code keyword">`version/ build`</span> (<span class="token code-snippet code keyword">`x.x.x+xxx`</span>)
<span class="token list punctuation">-</span> [ ] I've verified that the latest commit of <span class="token code-snippet code keyword">`develop`</span> exists in your <span class="token code-snippet code keyword">`feature`</span> branch after rebase.
<span class="token list punctuation">-</span> [ ] My fix achieves 100% of what is required
<span class="token list punctuation">-</span> [ ] Can enhance the solution in the future because better implementation could be made
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


