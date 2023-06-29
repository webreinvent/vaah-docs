<template><div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1>
<ul>
<li><a href="#introduction"># Introduction</a></li>
</ul>
<h4 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h4>
<p>All of the configuration/Information of Vaahcms's <code v-pre>Themes</code> are stored in the <code v-pre>config.php</code> file, which is in the <code v-pre>../&lt;project-name&gt;VaahCms/Themes/&lt;theme-name&gt;/Config/</code> directory.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">"name"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"BlogTheme"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"title"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"Theme for Blog"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"slug"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"blogtheme"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"thumbnail"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"https://img.site/p/300/160"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"excerpt"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"Blog"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"description"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"Blog"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"download_link"</span><span class="token operator">=></span> <span class="token string double-quoted-string">""</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"author_name"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"blogtheme"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"author_website"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"https://vaah.dev"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"version"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"v0.0.1"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"is_migratable"</span><span class="token operator">=></span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"is_sample_data_available"</span><span class="token operator">=></span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"db_table_prefix"</span><span class="token operator">=></span> <span class="token string double-quoted-string">"vh_blogtheme_"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"providers"</span><span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">"\\VaahCms\\Themes\\BlogTheme\\Providers\\BlogThemeServiceProvider"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"aside-menu-order"</span><span class="token operator">=></span> <span class="token constant">null</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<ul>
<li>Allow them to update their Name, Title, Slug, Description.</li>
<li>Allow them to update their version.</li>
<li>Allow them to upload their own logo.</li>
<li>Allow them to enable or disable the <code v-pre>is_migratable</code> features.</li>
<li>Allow them to enable or disable the <code v-pre>is_sample_data_available</code> features. This features allows you to import sample data through seeds.</li>
</ul>
</div>
</div></template>


