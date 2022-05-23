import{_ as i,r as s,o as l,c as r,a as e,b as c,F as d,d as a,e as n}from"./app.9fb3462d.js";const p={},u=e("h1",{id:"localization",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#localization","aria-hidden":"true"},"#"),a(" Localization")],-1),g=e("p",null,"Laravel's localization features provide a convenient way to retrieve strings in various languages, allowing you to easily support multiple languages within your application.",-1),h=e("p",null,[a("Laravel provides two ways to manage translation strings. First, language strings may be stored in files within the "),e("code",null,"resources/lang"),a(" directory. Within this directory, there may be subdirectories for each language supported by the application. This is the approach Laravel uses to manage translation strings for built-in Laravel features such as validation error messages:")],-1),m={href:"https://laravel.com/docs/8.x/localization",target:"_blank",rel:"noopener noreferrer"},f=a("Read Documentation"),v=n(`<hr><h5 id="configure-localization-from-backend" tabindex="-1"><a class="header-anchor" href="#configure-localization-from-backend" aria-hidden="true">#</a> Configure Localization from Backend</h5><p><code>VaahCms</code> provide us a <code>User Interface</code> from which you can manage <code>Localization</code>.</p><p>Visit following url you will see the <code>Localization</code> section:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/settings/localization
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),y=["src"],w=["src"],b=n(`<hr><h5 id="steps-to-generate-lang-files" tabindex="-1"><a class="header-anchor" href="#steps-to-generate-lang-files" aria-hidden="true">#</a> Steps to generate Lang Files</h5><ol><li>Click on <code>Add Language</code> Button. The two fields will appear: <code>Name</code> and <code>Locale ISO 639 Code</code>. Enter detail and click on Save button. A New Tab will appear in <code>Language Tab</code> of that Language code.</li><li>You can select language category from category dropdown. If you did not found your category, you can also create by clicking on <code>Add Category</code> Button. One field will appear: <code>Category Name</code>. Enter detail and click on Save button. This will add a new option in category dropdown.</li><li>Now you have to add a new string. Click on <code>Add String</code> Button. The two fields will appear: <code>Type Slug</code> and <code>Type value</code>. Enter detail and click on Save button. This will create a new string in all <code>Language Tab</code>. If you select any category in dropdown, then string will create in that category otherwise it will create in <code>General</code> category.</li><li>Click on <code>Generate Language Files</code> Button. It will generate files in <code>resources/lang</code> directory.</li><li>Copy the code and paste it to retrieve strings within your application.</li></ol><p><strong>Note:</strong> <code>Step 4 / Generate Lang Files</code> is a most important step. This button generate the lang files in <code>resources/lang</code> directory. If you are adding new <code>Language</code>, <code>Category</code> or <code>Add, Update, Delete</code> operation on <code>Lang String</code> then you will have to click on generate lang file to reflect your changes. Without this step you will not retrieve you string.</p><hr><h5 id="retrieve-code" tabindex="-1"><a class="header-anchor" href="#retrieve-code" aria-hidden="true">#</a> Retrieve Code</h5><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">trans</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;messages.welcome&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are using the Blade templating engine, you may use the <code>{!! !!}</code> echo syntax to display the translation string:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span> <span class="token function">trans</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;messages.welcome&#39;</span><span class="token punctuation">)</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>`,10);function k(o,_){const t=s("ExternalLinkIcon");return l(),r(d,null,[u,g,h,e("p",null,[e("a",m,[f,c(t)])]),v,e("img",{src:o.$withBase("/images/localization-1.png"),alt:"localization-1"},null,8,y),e("img",{src:o.$withBase("/images/localization-2.png"),alt:"localization-2"},null,8,w),b],64)}var z=i(p,[["render",k],["__file","localization.html.vue"]]);export{z as default};
