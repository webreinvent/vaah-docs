<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1>
<nav class="table-of-contents"><ul><li><router-link to="#introduction">Introduction</router-link><ul><li><router-link to="#branching-strategy">Branching Strategy</router-link></li><li><router-link to="#what-is-gitflow">What is GitFlow?</router-link></li><li><router-link to="#commits">Commits</router-link></li></ul></li></ul></nav>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>We use git in all our project products, packages, modules and themes.</p>
<h3 id="branching-strategy" tabindex="-1"><a class="header-anchor" href="#branching-strategy" aria-hidden="true">#</a> Branching Strategy</h3>
<p>We use <code v-pre>GitFlow</code> as a default strategy for git branch management.</p>
<h3 id="what-is-gitflow" tabindex="-1"><a class="header-anchor" href="#what-is-gitflow" aria-hidden="true">#</a> What is GitFlow?</h3>
<p>Gitflow is a branching model, a particularly useful framework for streamlining collaboration and scaling teams.</p>
<p>It contains following branches:</p>
<table>
<thead>
<tr>
<th>Branch</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>Master or Main</td>
<td>This contains your production code.</td>
</tr>
<tr>
<td>Develop</td>
<td>This is the most active branch in which all branches are merged. This contains the most updated code.</td>
</tr>
<tr>
<td>Feature</td>
<td>These are the branches created by developers to develop features. These branches are merged by <code v-pre>Merge Request</code> or <code v-pre>Pull Request</code> to <code v-pre>develop</code> branch.</td>
</tr>
<tr>
<td>Release</td>
<td>These are the branches created from the <code v-pre>develop</code> branch to eventually merge in <code v-pre>master</code> &amp; <code v-pre>develop</code>.</td>
</tr>
<tr>
<td>Hotfix</td>
<td>These are the branches created from the <code v-pre>master</code> branch to eventually merge in <code v-pre>master</code> &amp; <code v-pre>develop</code>.</td>
</tr>
</tbody>
</table>
<p>Read more about it at: <a href="https://www.gitkraken.com/learn/git/git-flow" target="_blank" rel="noopener noreferrer">https://www.gitkraken.com/learn/git/git-flow<ExternalLinkIcon/></a></p>
<h3 id="commits" tabindex="-1"><a class="header-anchor" href="#commits" aria-hidden="true">#</a> Commits</h3>
<p>Please follow following logic for your commit messages:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">></span>: <span class="token operator">&lt;</span>description<span class="token operator">></span>


<span class="token punctuation">[</span>optional body<span class="token punctuation">]</span>

<span class="token punctuation">[</span>optional footer<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Where <code v-pre>type</code> can have following values:</p>
<ul>
<li><code v-pre>Added</code> for new features.</li>
<li><code v-pre>Changed</code> for changes in existing functionality.</li>
<li><code v-pre>Deprecated</code> for soon-to-be removed features.</li>
<li><code v-pre>Removed</code> for now removed features.</li>
<li><code v-pre>Fixed</code> for any bug fixes.</li>
<li><code v-pre>Security</code> in case of vulnerabilities.</li>
</ul>
<p>Read more at <a href="https://keepachangelog.com/en/1.0.0/" target="_blank" rel="noopener noreferrer">https://keepachangelog.com/en/1.0.0/<ExternalLinkIcon/></a></p>
</div></template>


