<template><div><h1 id="localization" tabindex="-1"><a class="header-anchor" href="#localization" aria-hidden="true">#</a> Localization</h1>
<p>Laravel's localization features provide a convenient way to retrieve strings in various languages, allowing you to easily support multiple languages within your application.</p>
<p>Laravel provides two ways to manage translation strings. First, language strings may be stored in files within the <code v-pre>resources/lang</code> directory. Within this directory, there may be subdirectories for each language supported by the application. This is the approach Laravel uses to manage translation strings for built-in Laravel features such as validation error messages:</p>
<p><a href="https://laravel.com/docs/8.x/localization" target="_blank" rel="noopener noreferrer">Read Documentation<ExternalLinkIcon/></a></p>
<hr>
<h5 id="configure-localization-from-backend" tabindex="-1"><a class="header-anchor" href="#configure-localization-from-backend" aria-hidden="true">#</a> Configure Localization from Backend</h5>
<p><code v-pre>VaahCms</code> provide us a <code v-pre>User Interface</code> from which you can manage <code v-pre>Localization</code>.</p>
<p>Visit following url you will see the <code v-pre>Localization</code> section:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/settings/localization
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/localization-1.png')" alt="localization-1">
<img :src="$withBase('/images/localization-2.png')" alt="localization-2">
<hr>
<h5 id="steps-to-generate-lang-files" tabindex="-1"><a class="header-anchor" href="#steps-to-generate-lang-files" aria-hidden="true">#</a> Steps to generate Lang Files</h5>
<ol>
<li>Click on <code v-pre>Add Language</code> Button. The two fields will appear: <code v-pre>Name</code> and <code v-pre>Locale ISO 639 Code</code>. Enter detail and click on Save button. A New Tab will appear in <code v-pre>Language Tab</code> of that Language code.</li>
<li>You can select language category from category dropdown. If you did not found your category, you can also create by clicking on <code v-pre>Add Category</code> Button. One field will appear: <code v-pre>Category Name</code>. Enter detail and click on Save button. This will add a new option in category dropdown.</li>
<li>Now you have to add a new string. Click on <code v-pre>Add String</code> Button. The two fields will appear: <code v-pre>Type Slug</code> and <code v-pre>Type value</code>. Enter detail and click on Save button. This will create a new string in all <code v-pre>Language Tab</code>. If you select any category in dropdown, then string will create in that category otherwise it will create in <code v-pre>General</code> category.</li>
<li>Click on <code v-pre>Generate Language Files</code> Button. It will generate files in <code v-pre>resources/lang</code> directory.</li>
<li>Copy the code and paste it to retrieve strings within your application.</li>
</ol>
<p><strong>Note:</strong> <code v-pre>Step 4 / Generate Lang Files</code> is a most important step. This button generate the lang files in <code v-pre>resources/lang</code> directory. If you are adding new <code v-pre>Language</code>, <code v-pre>Category</code> or <code v-pre>Add, Update, Delete</code> operation on <code v-pre>Lang String</code> then you will have to click on generate lang file to reflect your changes. Without this step you will not retrieve you string.</p>
<hr>
<h5 id="retrieve-code" tabindex="-1"><a class="header-anchor" href="#retrieve-code" aria-hidden="true">#</a> Retrieve Code</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">trans</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'messages.welcome'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are using the Blade templating engine, you may use the <code v-pre>{!! !!}</code> echo syntax to display the translation string:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span> <span class="token function">trans</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'messages.welcome'</span><span class="token punctuation">)</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
</div></template>


