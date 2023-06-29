<template><div><h1 id="general-setting" tabindex="-1"><a class="header-anchor" href="#general-setting" aria-hidden="true">#</a> General Setting</h1>
<p>The Settings page gives developers the ability to access all backend functionality of the app. Along with accessing this information, developers can further customize the backend functionality of their application.</p>
<p>The Settings page automatically opens under the General tab. Here, you can update <code v-pre>Site Title</code>, set the format of <code v-pre>Date Time</code> and do many more things.</p>
<p>Visit following url you will see the Setting section:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/settings/general
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/general-setting-1.png')" alt="general-setting1">
<p>Settings are divided into 5 section.</p>
<ul>
<li><a href="#site-settings"># Site Settings</a></li>
<li><a href="#date-time"># Date &amp; Time</a></li>
<li><a href="#social-media-links"># Social Media &amp; Links</a></li>
<li><a href="#scripts"># Scripts</a></li>
<li><a href="#meta-tags"># Meta Tags</a></li>
</ul>
<p><strong>Note:</strong> <code v-pre>Most of the Setting will work only when you put Setting Code in Project.</code></p>
<hr>
<h5 id="site-settings" tabindex="-1"><a class="header-anchor" href="#site-settings" aria-hidden="true">#</a> Site Settings</h5>
<img :src="$withBase('/images/general-setting-2.png')" alt="general-setting2">
<table>
<thead>
<tr>
<th>Field Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Site Title</td>
<td>Title of Site</td>
</tr>
<tr>
<td>Meta Description</td>
<td>Content of Meta Description</td>
</tr>
<tr>
<td>Default Site Language</td>
<td>Current Site Language</td>
</tr>
<tr>
<td>Search Engine Visibility</td>
<td>The site will be discouraged to be indexed by search engines</td>
</tr>
<tr>
<td>Copyright Text</td>
<td>The Copyright Text</td>
</tr>
<tr>
<td>Copyright Link</td>
<td>Redirect to this link when click on Copyright Text</td>
</tr>
<tr>
<td>Copyright Year</td>
<td>The Copyright year</td>
</tr>
<tr>
<td>Assign Role(s) on Registration</td>
<td>Assign these Roles on new Registration.</td>
</tr>
<tr>
<td>Allowed file types for upload</td>
<td>These File Type will be allowed for upload.</td>
</tr>
<tr>
<td>Maintenance Mode</td>
<td>The site will display a maintenance page only.</td>
</tr>
<tr>
<td>Password Protection</td>
<td>The site will only be accessing using this password for logged in user.</td>
</tr>
<tr>
<td>Laravel Queues</td>
<td>This will enable the Laravel Queue feature.</td>
</tr>
<tr>
<td>Redirect after Backend Logout</td>
<td>Redirect to this Url after Logout from Backend</td>
</tr>
<tr>
<td>Redirect after Frontend Login</td>
<td>Redirect to this Url after Login in Frontend</td>
</tr>
<tr>
<td>Maximum number of forgot password attempts per session</td>
<td>Number of Clicks on Forgot Password Button</td>
</tr>
<tr>
<td>Maximum number of login attempts per session</td>
<td>Number of Clicks on Login Button</td>
</tr>
</tbody>
</table>
<p><strong>Clear Cache:</strong> This will clear cache of your <code v-pre>Application</code>. You can also directly visit:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/clear/cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h5 id="date-time" tabindex="-1"><a class="header-anchor" href="#date-time" aria-hidden="true">#</a> Date &amp; Time</h5>
<img :src="$withBase('/images/general-setting-3.png')" alt="general-setting3">
<table>
<thead>
<tr>
<th>Field Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Date Format</td>
<td>Set Format of Date</td>
</tr>
<tr>
<td>Time Format</td>
<td>Set Format of Time</td>
</tr>
<tr>
<td>Date Time Format</td>
<td>Set Format of Date Time</td>
</tr>
</tbody>
</table>
<hr>
<h5 id="social-media-links" tabindex="-1"><a class="header-anchor" href="#social-media-links" aria-hidden="true">#</a> Social Media &amp; Links</h5>
<img :src="$withBase('/images/general-setting-4.png')" alt="general-setting4">
<table>
<thead>
<tr>
<th>Field Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Facebook</td>
<td>Static Facebook Link</td>
</tr>
<tr>
<td>Twitter</td>
<td>Static Twitter Link</td>
</tr>
<tr>
<td>Linkedin</td>
<td>Static Linkedin Link</td>
</tr>
<tr>
<td>Youtube</td>
<td>Static Youtube Link</td>
</tr>
<tr>
<td>Instagram</td>
<td>Static Instagram Link</td>
</tr>
<tr>
<td>Github</td>
<td>Static Github Link</td>
</tr>
</tbody>
</table>
<hr>
<h5 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> Scripts</h5>
<img :src="$withBase('/images/general-setting-5.png')" alt="general-setting5">
<table>
<thead>
<tr>
<th>Field Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>After head tag start (<code v-pre>&lt;head&gt;</code>)</td>
<td>Added Scripts visible after head tag start (<code v-pre>&lt;head&gt;</code>)</td>
</tr>
<tr>
<td>After body tag start (<code v-pre>&lt;body&gt;</code>)</td>
<td>Added Scripts visible after body tag start (<code v-pre>&lt;body&gt;</code>)</td>
</tr>
<tr>
<td>Before head tag close (<code v-pre>&lt;/head&gt;</code>)</td>
<td>Added Scripts visible before head tag close (<code v-pre>&lt;/head&gt;</code>)</td>
</tr>
<tr>
<td>Before body tag close (<code v-pre>&lt;/body&gt;</code>)</td>
<td>Added Scripts visible before body tag close (<code v-pre>&lt;/body&gt;</code>)</td>
</tr>
</tbody>
</table>
<hr>
<h5 id="meta-tags" tabindex="-1"><a class="header-anchor" href="#meta-tags" aria-hidden="true">#</a> Meta Tags</h5>
<img :src="$withBase('/images/general-setting-6.png')" alt="general-setting6">
<table>
<thead>
<tr>
<th>Field Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Meta Tags</td>
<td>Add Meta Tags</td>
</tr>
</tbody>
</table>
<hr>
<h5 id="how-to-create-setting" tabindex="-1"><a class="header-anchor" href="#how-to-create-setting" aria-hidden="true">#</a> How to create Setting</h5>
<p>You can create a Setting through <code v-pre>Seeds</code> and add a field on Setting Form for that Setting.</p>
<p>Create a json file of name <code v-pre>settings.json</code> at <code v-pre>.../Database/Seeds/json/</code> this directory.</p>
<p>settings.json</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"global"</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"site_title"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"VaahCMS"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"global"</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"site_description"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Another awesome site on VaahCMS"</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to create <code v-pre>seedSetting()</code> method in DatabaseTableSeeder.php file.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">seedSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>


        <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">getListFromJson</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"settings.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$list</span> <span class="token keyword">as</span> <span class="token variable">$item</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token variable">$exist</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'vh_settings'</span> <span class="token punctuation">)</span>
                <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'category'</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'category'</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
                <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'key'</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'key'</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
                <span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$exist</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'type'</span><span class="token punctuation">]</span><span class="token operator">==</span><span class="token string single-quoted-string">'json'</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'value'</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'value'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'vh_settings'</span> <span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">insert</span><span class="token punctuation">(</span> <span class="token variable">$item</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'vh_settings'</span> <span class="token punctuation">)</span>
                    <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'category'</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'category'</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
                    <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'key'</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'key'</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
                    <span class="token operator">-></span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you just have to create a field in <code v-pre>Setting</code> page at <code v-pre>.../Vue/pages/settings/</code> directory.</p>
<hr>
</div></template>


