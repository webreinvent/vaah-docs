<template><div><h1 id="dynamic-links" tabindex="-1"><a class="header-anchor" href="#dynamic-links" aria-hidden="true">#</a> Dynamic Links</h1>
<div class="custom-container warning"><p class="custom-container-title">Dependencies</p>
<ul>
<li><a href="https://pub.dev/packages/firebase_core" target="_blank" rel="noopener noreferrer">firebase_core<ExternalLinkIcon/></a></li>
<li><a href="https://pub.dev/packages/firebase_dynamic_links" target="_blank" rel="noopener noreferrer">firebase_dynamic_links<ExternalLinkIcon/></a></li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#use-cases">Use Cases</router-link></li><li><router-link to="#scenerios">Scenerios</router-link></li><li><router-link to="#general-concept">General Concept</router-link></li><li><router-link to="#how-to-use">How to use?</router-link><ul><li><router-link to="#setup-firebase-for-your-project-if-you-haven-t-done-that-yet">Setup Firebase For Your Project (if you haven&#39;t done that yet)</router-link></li><li><router-link to="#enable-dynamic-links-in-firebase">Enable Dynamic Links In Firebase</router-link></li><li><router-link to="#things-you-need-to-know">Things you need to know</router-link></li><li><router-link to="#create-a-link-in-firebase-dynamic-links">Create A Link In Firebase Dynamic Links</router-link></li><li><router-link to="#add-intent-filters-in-android-menifest">Add Intent Filters In Android Menifest</router-link></li><li><router-link to="#add-associated-domain-in-ios-project">Add Associated Domain In iOS Project</router-link></li><li><router-link to="#encoding-url-website-part">Encoding URL (Website Part)</router-link></li><li><router-link to="#never-encode-in-the-manner-illustrated-here">Never encode in the manner illustrated here</router-link></li><li><router-link to="#handling-redirection-website-part">Handling Redirection (Website Part)</router-link></li><li><router-link to="#handle-dynamic-link-in-app">Handle Dynamic Link In App</router-link></li></ul></li><li><router-link to="#source-code">Source Code</router-link></li></ul></nav>
<h2 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use Cases</h2>
<ul>
<li>When you want users to install app instead of them using website.</li>
<li>When you want some kind of redirection from website to app.</li>
</ul>
<h2 id="scenerios" tabindex="-1"><a class="header-anchor" href="#scenerios" aria-hidden="true">#</a> Scenerios</h2>
<ul>
<li>App is installed but we don't want any redirection from website.</li>
<li>App is installed and we want redirections from website.</li>
<li>App is not installed and we want to force users to download it.</li>
<li>App is not installed and we let users to see content on website.</li>
</ul>
<h2 id="general-concept" tabindex="-1"><a class="header-anchor" href="#general-concept" aria-hidden="true">#</a> General Concept</h2>
<ul>
<li>Create a dynamic link on firebase.</li>
<li>Let's say for <code v-pre>/test-path</code> you want to redirect users to app if they are using phone.</li>
<li>So for path <code v-pre>/test-path</code> in website we will check if user has opened the page in phone or other devices.
<ul>
<li>If it's not phone, we just show content of website.</li>
<li>If it's phone, we trigger redirect to dynamic link we got from firebase.</li>
</ul>
</li>
<li>When user hits dynamic link, We can configure what we want it to do.
<ul>
<li>if Installed open app and pass the link and data.</li>
<li>if App not installed
<ul>
<li>Open app/ play store page for your app.</li>
<li>Or redirect to somewhere.</li>
</ul>
</li>
</ul>
</li>
<li>We write logic to handle dynamic link and data in app.</li>
</ul>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use?</h2>
<div class="custom-container warning"><p class="custom-container-title">Dynamic Links</p>
<ul>
<li>VaahExtendFlutter makes it so much easier to integrate dynamic links we will show you the process now.</li>
</ul>
</div>
<h3 id="setup-firebase-for-your-project-if-you-haven-t-done-that-yet" tabindex="-1"><a class="header-anchor" href="#setup-firebase-for-your-project-if-you-haven-t-done-that-yet" aria-hidden="true">#</a> Setup Firebase For Your Project (if you haven't done that yet)</h3>
<ul>
<li>
<p>Install <a href="https://firebase.google.com/docs/cli#setup_update_cli" target="_blank" rel="noopener noreferrer">Firebase CLI<ExternalLinkIcon/></a> in your system. And Log in to your account.</p>
</li>
<li>
<p>Install the <a href="https://firebase.google.com/docs/flutter/setup#install-cli-tools" target="_blank" rel="noopener noreferrer">FlutterFire CLI<ExternalLinkIcon/></a></p>
</li>
<li>
<p>run <code v-pre>flutterfire configure</code> in your project -&gt; then select create new project/ configure old project</p>
</li>
<li>
<p>Check the steps in the video: <a href="https://youtu.be/kESR99dkRS8" target="_blank" rel="noopener noreferrer">Configure Firebase App<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Pass parameters to connect firebase app with vaahextendflutter and handle dynamic links. This will intialize the firebase app everytime app is started. Check the steps in the video: <a href="https://youtu.be/ooEHkxy7LmA" target="_blank" rel="noopener noreferrer">Integrating Firebase With VaahFlutter<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="enable-dynamic-links-in-firebase" tabindex="-1"><a class="header-anchor" href="#enable-dynamic-links-in-firebase" aria-hidden="true">#</a> Enable Dynamic Links In Firebase</h3>
<ul>
<li>
<p>Go to Dynamic Links section</p>
</li>
<li>
<p>Press <code v-pre>Get Started</code></p>
</li>
<li>
<p>Enter the domain</p>
</li>
<li>
<p>And done</p>
</li>
<li>
<p>Check the steps in the video: <a href="https://youtu.be/HTshF3KSvyI" target="_blank" rel="noopener noreferrer">Enable Dynamic Links<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="things-you-need-to-know" tabindex="-1"><a class="header-anchor" href="#things-you-need-to-know" aria-hidden="true">#</a> Things you need to know</h3>
<table>
<thead>
<tr>
<th>Link Name/ Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dynamic link</td>
<td>https://yourapp.page.link/?link=https://website.com/custom?payload={}&amp;apn=com.example.app&amp;ibi=com.example.app&amp;isi=123456789</td>
</tr>
<tr>
<td>Deep link</td>
<td>https://website.com/custom?payload={}</td>
</tr>
</tbody>
</table>
<ul>
<li>Short dynamic links does not support custom parameters/ passing custom data.</li>
<li>Long dynamic links does support it but there are some rules you follow to make it work perfectly.</li>
<li>In long dynamic links you need to <a href="#encoding-url-website-part">encode</a> deep link which you're passing. (On the website part, Stay with us and this point will make sense.)</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">Team ID</p>
<p>For iOS; Team ID in firebase (iOS App) is mandetory and it can't be fake - and using that you will have to sign your app, where for development purpose fake app id will work.</p>
</div>
<ul>
<li>
<p>Short links</p>
<ul>
<li>
<p><code v-pre>https://yourapp.page.link/custom</code> ✅ works</p>
</li>
<li>
<p><code v-pre>https://yourapp.page.link/custom?payload={}</code> ❌ parameters won't be passed to app</p>
</li>
</ul>
</li>
<li>
<p>Long links</p>
<ul>
<li>
<p><code v-pre>https://yourapp.page.link/?link=https://website.com/custom?payload={}&amp;apn=com.example.app&amp;ibi=com.example.app&amp;isi=123456789</code> ✅ works, <a href="#encoding-url-website-part">where deep link should be encoded</a> (for better reading we did not encoded it in documentation.)</p>
</li>
<li>
<p>where <code v-pre>https://yourapp.page.link/</code> is main dynamic link. And you pass <code v-pre>deep link</code> after <code v-pre>?link=</code> which is passed in app and should be handled by app e.g. <code v-pre>https://website.com/custom?payload={}</code> (should be encoded tho). You pass android package name with <code v-pre>&amp;apn=com.example.app</code> and iOS bundle identifier <code v-pre>&amp;ibi=com.example.app</code>. You pass App Store ID using <code v-pre>&amp;isi=123456789</code>.</p>
</li>
<li>
<p>If app isn't installed and you want user to redirect to some link you pass parameters link; for android fallback link as <code v-pre>&amp;afl=https://vaahflutter.ml</code> for iOS fallback link as <code v-pre>&amp;ifl=https://vaahflutter.ml</code></p>
</li>
</ul>
</li>
<li>
<p>In your website</p>
<ul>
<li>
<p>Do not redirect links to the same link from where it's coming; when user is not using mobile devices.</p>
</li>
<li>
<p>Example of bad implementation: for <code v-pre>website.com/custom</code> you've applied redirect logic for that path (without checking if user is using mobile or not). Which will redirect to <code v-pre>dynamic link</code>.</p>
</li>
<li>
<p>So when user opens <code v-pre>website.com/custom</code> -&gt; it redirects to <code v-pre>dynamic link</code> -&gt; as user is not on mobile device they are redirected to <code v-pre>website.com/custom</code> again. -&gt; again it redirects to  <code v-pre>dynamic link</code> -&gt; ...</p>
</li>
<li>
<p>So when this link is opened in browser in device other than Android and iOS, the link resolves it to the same link from where it came (website.com/custom). You can see, how it becomes infinite loop.</p>
</li>
</ul>
</li>
</ul>
<h3 id="create-a-link-in-firebase-dynamic-links" tabindex="-1"><a class="header-anchor" href="#create-a-link-in-firebase-dynamic-links" aria-hidden="true">#</a> Create A Link In Firebase Dynamic Links</h3>
<p>We suggest you create one single link to handle everthing. But you pass different parameters with it. Stay with us and it will make sense.</p>
<ul>
<li>
<p>In the Dynamic Links section, click on <code v-pre>New Dynamic Link</code>. And configure it like shown in video.</p>
</li>
<li>
<p>Check the steps in the video: <a href="https://youtu.be/jSBiRazPn5Q" target="_blank" rel="noopener noreferrer">Create Dynamic Link<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="add-intent-filters-in-android-menifest" tabindex="-1"><a class="header-anchor" href="#add-intent-filters-in-android-menifest" aria-hidden="true">#</a> Add Intent Filters In Android Menifest</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>android.intent.action.VIEW<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>android.intent.category.DEFAULT<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>android.intent.category.BROWSABLE<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span> <span class="token attr-name"><span class="token namespace">android:</span>host</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name.page.link<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">android:</span>scheme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Check the steps in the video: <a href="https://youtu.be/MzRbDBhyQa4" target="_blank" rel="noopener noreferrer">Intent Filter<ExternalLinkIcon/></a></li>
</ul>
<h3 id="add-associated-domain-in-ios-project" tabindex="-1"><a class="header-anchor" href="#add-associated-domain-in-ios-project" aria-hidden="true">#</a> Add Associated Domain In iOS Project</h3>
<p>path: <code v-pre>ios/Runner/Runner.entitlements</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">></span></span>com.apple.developer.associated-domains<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>array</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span>applinks:YOUR_FIREBASE_APP_DYNAMIC_LINK_PREFIX.page.link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>array</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plist</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Check the steps in the video: <a href="https://youtu.be/OtXhfFPDWyE" target="_blank" rel="noopener noreferrer">Associated Domain<ExternalLinkIcon/></a></li>
</ul>
<h3 id="encoding-url-website-part" tabindex="-1"><a class="header-anchor" href="#encoding-url-website-part" aria-hidden="true">#</a> Encoding URL (Website Part)</h3>
<table>
<thead>
<tr>
<th>Link Name/ Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dynamic link</td>
<td>https://yourapp.page.link/?link=https://website.com/custom?payload={}&amp;apn=com.example.app&amp;ibi=com.example.app&amp;isi=123456789</td>
</tr>
<tr>
<td>Deep link</td>
<td>https://website.com/custom?payload={}</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Dynamic link is whole link, it contains deep link and other parameters.</p>
</li>
<li>
<p>Deep link is a link which is passed to the app from website.</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Encoding</p>
<ul>
<li>
<p>In dynamic link, the deep link you are passing has to be encoded.</p>
</li>
<li>
<p>If it's encoded incorrectly then it won't be passed to app. It will be broken because we have special characters in our link.</p>
</li>
<li>
<p>So we can't pass deep link without encoding it.</p>
</li>
<li>
<p>In Url parameters are encoded differently and whole url is encoded differently.</p>
</li>
</ul>
</div>
<ul>
<li>
<p>We have <code v-pre>https://website.com/custom?payload={}</code> as deep link</p>
</li>
<li>
<p>So we can see parameter part here is : <code v-pre>?payload={}</code></p>
</li>
<li>
<p>And link part is : <code v-pre>https://website.com/custom</code></p>
</li>
<li>
<p>We can't encode both parts same way.</p>
<ul>
<li>e.g. if we talk about javascript: for parameter encoding we use <code v-pre>encodeURIComponent</code> and after that we add that encoded part to the link part and then encode whole thing with <code v-pre>encodeURI</code>.</li>
<li>e.g. if we talk about PHP: for parameter encoding we use <code v-pre>rawurlencode</code> method and after that we add that encoded part to the link part and then encode whole thing with <code v-pre>urlencode</code>.</li>
</ul>
</li>
<li>
<p>So as example</p>
</li>
</ul>
<p>For Javascript</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> link <span class="token operator">=</span> <span class="token string">'https://website.com/custom'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> parameters <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">'?payload={}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> encodedURL <span class="token operator">=</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">link</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>parameters<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Use encodedURL for redirection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For PHP</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$link</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'https://website.com/custom?payload='</span><span class="token punctuation">;</span>
<span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token function">rawurlencode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'{}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$encoded</span> <span class="token operator">=</span>  <span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token variable">$link</span><span class="token operator">.</span><span class="token variable">$parameters</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Use encoded output for redirection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">Encoding url and parameters</p>
<h3 id="never-encode-in-the-manner-illustrated-here" tabindex="-1"><a class="header-anchor" href="#never-encode-in-the-manner-illustrated-here" aria-hidden="true">#</a> Never encode in the manner illustrated here</h3>
<h4 id="for-javascript" tabindex="-1"><a class="header-anchor" href="#for-javascript" aria-hidden="true">#</a> For Javascript</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">'https://website.com/custom?payload={}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token string">'https://website.com/custom?payload={}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">'https://website.com/custom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token string">'?payload={}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="for-php" tabindex="-1"><a class="header-anchor" href="#for-php" aria-hidden="true">#</a> For PHP</h4>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">rawurlencode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'https://website.com/custom?payload={}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'https://website.com/custom?payload={}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token function">rawurlencode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'https://website.com/custom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'?payload={}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="handling-redirection-website-part" tabindex="-1"><a class="header-anchor" href="#handling-redirection-website-part" aria-hidden="true">#</a> Handling Redirection (Website Part)</h3>
<ul>
<li>In app, vaah flutter can handle query parameter <code v-pre>payload with below properties</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>payload <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"auth"</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>In Website we check if device is mobile or not.</p>
</li>
<li>
<p>If Mobile</p>
<ul>
<li>
<p>we create one query parameter payload like shown above, add it to the end point. e.g. <code v-pre>https://website.com/custom?payload={&quot;path&quot;:null,&quot;data&quot;:null,&quot;auth&quot;:null}</code></p>
</li>
<li>
<p>And then encode that link. e.g. <code v-pre>hhttps://website.com/custom%3Fpayload%3D%7B%22path%22%3Anull%2C%22data%22%3Anull%2C%22auth%22%3Anull%7D</code></p>
</li>
<li>
<p>We put this encoded part in <code v-pre>link</code> parameter of <code v-pre>dynamic link</code> we created and redirect user to that link. e.g. <code v-pre>https://yourapp.page.link/?link=hhttps://website.com/custom%3Fpayload%3D%7B%22path%22%3Anull%2C%22data%22%3Anull%2C%22auth%22%3Anull%7D&amp;apn=com.example.app&amp;ibi=com.example.app&amp;isi=123456789</code></p>
</li>
</ul>
</li>
<li>
<p>If not Mobile: we show website content.</p>
</li>
</ul>
<h4 id="handling-custom-path-in-php" tabindex="-1"><a class="header-anchor" href="#handling-custom-path-in-php" aria-hidden="true">#</a> Handling '/custom' path in PHP.</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
$useragent<span class="token operator">=</span>$_SERVER<span class="token punctuation">[</span><span class="token string">'HTTP_USER_AGENT'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">'/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i'</span><span class="token punctuation">,</span>$useragent<span class="token punctuation">)</span><span class="token operator">||</span><span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token string">'/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i'</span><span class="token punctuation">,</span><span class="token function">substr</span><span class="token punctuation">(</span>$useragent<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    echo <span class="token string">"Hello World"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">else</span><span class="token punctuation">{</span>
    $payload <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">"path"</span> <span class="token operator">=></span> <span class="token string">"/"</span><span class="token punctuation">,</span>
        <span class="token string">"auth"</span> <span class="token operator">=></span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">"data"</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
            <span class="token string">"id"</span> <span class="token operator">=></span> <span class="token string">"test"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    $payload <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span>$payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    $deeplink <span class="token operator">=</span> <span class="token function">urlencode</span><span class="token punctuation">(</span><span class="token string">"https://website.com/custom/?payload="</span><span class="token punctuation">.</span><span class="token function">rawurlencode</span><span class="token punctuation">(</span>$payload<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $dynamiclink <span class="token operator">=</span> <span class="token string">"https://yourapp.page.link/?apn=com.example.app&amp;ibi=com.example.app&amp;isi=123456789&amp;link="</span><span class="token punctuation">.</span>$deeplink<span class="token punctuation">;</span>
    
    <span class="token function">header</span><span class="token punctuation">(</span><span class="token string">"Location: "</span><span class="token punctuation">.</span>$dynamiclink<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">?</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="handling-custom-path-in-javascript" tabindex="-1"><a class="header-anchor" href="#handling-custom-path-in-javascript" aria-hidden="true">#</a> Handling '/custom' path in Javascript.</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/custom'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>devicetype<span class="token punctuation">.</span><span class="token function">isDevicePhone</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">'user-agent'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> endPoint <span class="token operator">=</span> <span class="token string">'https://website.com/custom'</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dynamicLink <span class="token operator">=</span> <span class="token string">'https://yourapp.page.link/?apn=com.example.app&amp;ibi=com.example.app&amp;isi=123456789&amp;link='</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"/ui-page"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"auth"</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> parameters <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">?payload=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> encodedParameters <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> deeplink <span class="token operator">=</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span>endPoint <span class="token operator">+</span> encodedParameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dynamicLink<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>deeplink<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">'Error'</span><span class="token punctuation">,</span> <span class="token literal-property property">menuId</span><span class="token operator">:</span> <span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">404</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'App Not Installed!'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Function to check device type</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isDevicePhone</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">agent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>agent<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>agent<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span>isDevicePhone <span class="token operator">=</span> isDevicePhone<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Example website is here: <a href="https://github.com/we-prajapati-c001/node-website" target="_blank" rel="noopener noreferrer">node-website<ExternalLinkIcon/></a></li>
</ul>
<h3 id="handle-dynamic-link-in-app" tabindex="-1"><a class="header-anchor" href="#handle-dynamic-link-in-app" aria-hidden="true">#</a> Handle Dynamic Link In App</h3>
<ul>
<li>
<p>Initialize firebase with the app. if setup is not done <a href="#setup-firebase-for-your-project-if-you-havent-done-that-yet">check this</a>, and pass FirebaseConfig parameter to base controller, if you're using not whole code from project then initialize and configure firebase app by your self.</p>
</li>
<li>
<p>Initialize dynamic links from VaahExtendFlutter Service to catch initial links (when app is close), and subscribe to the links which are coming (when app is open). If you're using whole code from project you don't have to do anything expect initializing base controller.</p>
</li>
</ul>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">BaseController</span> <span class="token keyword">extends</span> <span class="token class-name">GetxController</span> <span class="token punctuation">{</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token class-name">FirebaseOptions</span><span class="token operator">?</span> firebaseOptions<span class="token punctuation">,</span>
    required <span class="token class-name">Widget</span> app<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>firebaseOptions <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token class-name">Firebase</span><span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>
        options<span class="token punctuation">:</span> firebaseOptions<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">DynamicLinks</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>VaahExtendFlutter Service -&gt; Dynamic Links will handle links with <code v-pre>payload</code> data. example of payload</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">"auth"</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Auth is used to pass data related to auth. e.g. x-csrf token, barer token, etc. Thus it depends on project and developer can configure how to handle auth parameter in app by doing some changes in <code v-pre>dynamic_links.dart</code> file. for now auth is passed to the route along with data so dev can handle it there for specific routes.</p>
</li>
<li>
<p>If path is not null then we redirect user to that route with the data. Routes will have to handle data by themselves.</p>
</li>
<li>
<p>dart code to handle the dynamic link</p>
</li>
</ul>
<p>We need to decode the full link in handle link function, as we are passing encoded link from website.</p>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">_handleLink</span><span class="token punctuation">(</span><span class="token class-name">PendingDynamicLinkData</span> linkData<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">Uri</span> decodedLink <span class="token operator">=</span> <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">decodeFull</span><span class="token punctuation">(</span>linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token keyword">dynamic</span> payload <span class="token operator">=</span> <span class="token function">_decodePayload</span><span class="token punctuation">(</span>decodedLink<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _dynamicLinksStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
      <span class="token class-name">DeepLink</span><span class="token punctuation">(</span>
        encoded<span class="token punctuation">:</span> linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        decoded<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span>host</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span>path</span><span class="token punctuation">}</span></span><span class="token string">?payload=</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">payload</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-literal"><span class="token string">"encoded"</span></span><span class="token punctuation">:</span> linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-literal"><span class="token string">"decoded"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span>host</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span>path</span><span class="token punctuation">}</span></span><span class="token string">?payload=</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">payload</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>payload <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Get</span><span class="token punctuation">.</span><span class="token function">offAllNamed</span><span class="token punctuation">(</span>
        payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        arguments<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
          <span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">:</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">:</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>
      error<span class="token punctuation">,</span>
      stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
      hint<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Error handling dynamic link! </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span><span class="token function">asMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">dynamic</span> <span class="token function">_decodePayload</span><span class="token punctuation">(</span><span class="token class-name">Uri</span> link<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">jsonDecode</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>queryParameters<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'payload'</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>
      error<span class="token punctuation">,</span>
      stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
      hint<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Error decoding payload! </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">link</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:convert'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:firebase_dynamic_links/firebase_dynamic_links.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:get/get.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./logging_library/logging_library.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DynamicLinks</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token comment">// handle initial dynamic link</span>
    <span class="token keyword">final</span> getInitialLink <span class="token operator">=</span> <span class="token keyword">await</span> _firebaseDynamicLinks<span class="token punctuation">.</span><span class="token function">getInitialLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>getInitialLink <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_handleLink</span><span class="token punctuation">(</span>getInitialLink<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// listen/ subscribe to the links which comes later and handle them</span>
    _firebaseDynamicLinks<span class="token punctuation">.</span>onLink
        <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
          _handleLink<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">FirebaseDynamicLinks</span> _firebaseDynamicLinks <span class="token operator">=</span> <span class="token class-name">FirebaseDynamicLinks</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DeepLink</span><span class="token punctuation">></span></span> _dynamicLinksStreamController <span class="token operator">=</span>
      <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DeepLink</span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DeepLink</span><span class="token punctuation">></span></span> dynamicLinksStream <span class="token operator">=</span> _dynamicLinksStreamController<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ShortDynamicLink</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">createLink</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token class-name">String</span><span class="token operator">?</span> path<span class="token punctuation">,</span>
    required <span class="token keyword">dynamic</span> data<span class="token punctuation">,</span>
    required <span class="token keyword">dynamic</span> auth<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">String</span> parameters <span class="token operator">=</span> <span class="token function">jsonEncode</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-literal"><span class="token string">"path"</span></span><span class="token punctuation">:</span> path<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"data"</span></span><span class="token punctuation">:</span> data<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"auth"</span></span><span class="token punctuation">:</span> auth<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">await</span> _firebaseDynamicLinks<span class="token punctuation">.</span><span class="token function">buildShortLink</span><span class="token punctuation">(</span>
        <span class="token class-name">DynamicLinkParameters</span><span class="token punctuation">(</span>
          link<span class="token punctuation">:</span> <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"https://your.domain?payload=</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">parameters</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          uriPrefix<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://YOUR_FIREBASE_APP_DYNAMIC_LINK_PREFIX.page.link"</span></span><span class="token punctuation">,</span>
          androidParameters<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">AndroidParameters</span><span class="token punctuation">(</span>packageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"your.package.name"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          iosParameters<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">IOSParameters</span><span class="token punctuation">(</span>bundleId<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"your.bundle.identifier"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        shortLinkType<span class="token punctuation">:</span> <span class="token class-name">ShortDynamicLinkType</span><span class="token punctuation">.</span>unguessable<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span> hint<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Error creating dynamic link!"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">_handleLink</span><span class="token punctuation">(</span><span class="token class-name">PendingDynamicLinkData</span> linkData<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">Uri</span> decodedLink <span class="token operator">=</span> <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">decodeFull</span><span class="token punctuation">(</span>linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">final</span> <span class="token keyword">dynamic</span> payload <span class="token operator">=</span> <span class="token function">_decodePayload</span><span class="token punctuation">(</span>decodedLink<span class="token punctuation">)</span><span class="token punctuation">;</span>
      _dynamicLinksStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
        <span class="token class-name">DeepLink</span><span class="token punctuation">(</span>
          encoded<span class="token punctuation">:</span> linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          decoded<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span>host</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span>path</span><span class="token punctuation">}</span></span><span class="token string">?payload=</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">payload</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-literal"><span class="token string">"encoded"</span></span><span class="token punctuation">:</span> linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">"decoded"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span>host</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span>link<span class="token punctuation">.</span>path</span><span class="token punctuation">}</span></span><span class="token string">?payload=</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">payload</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>payload <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Get</span><span class="token punctuation">.</span><span class="token function">offAllNamed</span><span class="token punctuation">(</span>
          payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'path'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          arguments<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
            <span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">:</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'data'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">:</span> payload<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'auth'</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>
        error<span class="token punctuation">,</span>
        stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
        hint<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Error handling dynamic link! </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">linkData<span class="token punctuation">.</span><span class="token function">asMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token keyword">dynamic</span> <span class="token function">_decodePayload</span><span class="token punctuation">(</span><span class="token class-name">Uri</span> link<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">jsonDecode</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>queryParameters<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'payload'</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>
        error<span class="token punctuation">,</span>
        stackTrace<span class="token punctuation">:</span> stackTrace<span class="token punctuation">,</span>
        hint<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Error decoding payload! </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">link</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DeepLink</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> encoded<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> decoded<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">DeepLink</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>encoded<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>decoded<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


