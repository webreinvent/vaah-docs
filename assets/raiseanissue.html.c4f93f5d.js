import{_ as o,r as d,o as r,c,a as e,b as a,w as i,d as s,e as t}from"./app.ba077105.js";const u={},p=e("h1",{id:"raise-an-issue",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#raise-an-issue","aria-hidden":"true"},"#"),s(" Raise an issue")],-1),m={class:"table-of-contents"},v=t(`<h2 id="how-to-raise-an-issue" tabindex="-1"><a class="header-anchor" href="#how-to-raise-an-issue" aria-hidden="true">#</a> How to raise an issue?</h2><ol><li><p>Check if the issue has been raised already on GitHub? Try searching closed issues also.</p></li><li><p>Try to reproduce it again. Specify, if you&#39;ve tried <code>flutter clean</code>, <code>clean install</code>, <code>version bumps</code>, <code>etc</code>.</p></li><li><p>Try to record/ take snapshot of the issue and attach it.</p></li><li><p>Attach the debug log.</p></li><li><p>Provide steps to Reproduce.</p></li><li><p>If possible provide <code>minimal code sample</code> to reproduce the error.</p></li><li><p>If possible provide log for <code>flutter --doctor</code>, branch name, platform details to reproduce the error.</p></li></ol><h2 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> Format</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Overview</span>

<span class="token list punctuation">-</span> [ ] I&#39;ve performed a self-review of the issue I&#39;m raising
<span class="token list punctuation">-</span> [ ] I&#39;ve provided debug logs
<span class="token list punctuation">-</span> [ ] I&#39;ve provided steps to reproduce
<span class="token list punctuation">-</span> [ ] I&#39;ve provided minimal code sample to reproduce the issue
<span class="token list punctuation">-</span> [ ] I&#39;ve provided additional information also

<span class="token title important"><span class="token punctuation">###</span> Problem statement</span>
<span class="token comment">&lt;!-- Problem description --&gt;</span>

<span class="token title important"><span class="token punctuation">###</span> Debug logs</span>
\\\`\`\`bash
<span class="token comment">&lt;!-- paste your debug logs here --&gt;</span>
\\\`\`\`

<span class="token title important"><span class="token punctuation">###</span> Steps to reproduce</span>
<span class="token comment">&lt;!-- steps to reproduce --&gt;</span>

<span class="token title important"><span class="token punctuation">###</span> Minimal code sample</span>
<span class="token comment">&lt;!-- code sample/link --&gt;</span>

<span class="token title important"><span class="token punctuation">###</span> Suggested Solution</span>
<span class="token comment">&lt;!-- Solution description --&gt;</span>

<span class="token title important"><span class="token punctuation">###</span> Links</span>
<span class="token comment">&lt;!-- links related to issue, videos, screenshot, etc. --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h3>`,5),h=["src"],b=t(`<h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h3><p>Developer should tick the relevant boxes. To tick a box? put <code>[x]</code> instead of <code>[ ]</code>.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Overview</span>

<span class="token list punctuation">-</span> [x] I&#39;ve performed a self-review of the issue I&#39;m raising
<span class="token list punctuation">-</span> [ ] I&#39;ve provided debug logs
<span class="token list punctuation">-</span> [ ] I&#39;ve provided steps to reproduce
<span class="token list punctuation">-</span> [ ] I&#39;ve provided minimal code sample to reproduce the issue
<span class="token list punctuation">-</span> [ ] I&#39;ve provided additional information also
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="problem-statement" tabindex="-1"><a class="header-anchor" href="#problem-statement" aria-hidden="true">#</a> Problem statement</h3><p>Write down the issue description after <code>&lt;!-- Problem description --&gt;</code> comment.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> Problem statement</span>
<span class="token comment">&lt;!-- Problem description --&gt;</span>
This is issue description.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debug-logs" tabindex="-1"><a class="header-anchor" href="#debug-logs" aria-hidden="true">#</a> Debug Logs</h3><p>Remove <code>\\</code>, Paste the Debug logs where the comment <code>&lt;!-- paste your debug logs here --&gt;</code> is.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> Debug logs</span>
\\\`\`\`bash
yyyy-mm-dd hh:mm:ss XYZ failed
yyyy-mm-dd hh:mm:ss flutter: Observatory listening on http://127.0.0.1/
\\\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="steps-to-reproduce" tabindex="-1"><a class="header-anchor" href="#steps-to-reproduce" aria-hidden="true">#</a> Steps to reproduce</h3><p>Write down the steps after <code>&lt;!-- steps to reproduce --&gt;</code> comment.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> Steps to reproduce</span>
<span class="token comment">&lt;!-- steps to reproduce --&gt;</span>
Step 1: go to abc.
Step 2: try performing xyz.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="minimal-code-sample" tabindex="-1"><a class="header-anchor" href="#minimal-code-sample" aria-hidden="true">#</a> Minimal code sample</h3><p>Attach minimal code sample to reproduce the issue.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> Minimal code sample</span>
<span class="token comment">&lt;!-- code sample/link --&gt;</span>
Your code sample/ link.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="suggested-solution" tabindex="-1"><a class="header-anchor" href="#suggested-solution" aria-hidden="true">#</a> Suggested Solution</h3><p>Write your suggetion after <code>&lt;!-- Solution description --&gt;</code> comment.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> Suggested Solution</span>
<span class="token comment">&lt;!-- Solution description --&gt;</span>
I suggest changing xyz.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h3><p>Attach links after <!-- links related to issue, videos, screenshot, etc. --> comment.</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> Links</span>
<span class="token comment">&lt;!-- links related to issue, videos, screenshot, etc. --&gt;</span>
<span class="token url">[<span class="token content">link</span>](<span class="token url">https://webreinvent.com</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function g(l,k){const n=d("router-link");return r(),c("div",null,[p,e("nav",m,[e("ul",null,[e("li",null,[a(n,{to:"#how-to-raise-an-issue"},{default:i(()=>[s("How to raise an issue?")]),_:1})]),e("li",null,[a(n,{to:"#format"},{default:i(()=>[s("Format")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#output"},{default:i(()=>[s("Output")]),_:1})]),e("li",null,[a(n,{to:"#overview"},{default:i(()=>[s("Overview")]),_:1})]),e("li",null,[a(n,{to:"#problem-statement"},{default:i(()=>[s("Problem statement")]),_:1})]),e("li",null,[a(n,{to:"#debug-logs"},{default:i(()=>[s("Debug Logs")]),_:1})]),e("li",null,[a(n,{to:"#steps-to-reproduce"},{default:i(()=>[s("Steps to reproduce")]),_:1})]),e("li",null,[a(n,{to:"#minimal-code-sample"},{default:i(()=>[s("Minimal code sample")]),_:1})]),e("li",null,[a(n,{to:"#suggested-solution"},{default:i(()=>[s("Suggested Solution")]),_:1})]),e("li",null,[a(n,{to:"#links"},{default:i(()=>[s("Links")]),_:1})])])])])]),v,e("img",{src:l.$withBase("/images/flutter/getting-started/issue.png"),alt:"Output"},null,8,h),b])}const w=o(u,[["render",g],["__file","raiseanissue.html.vue"]]);export{w as default};
