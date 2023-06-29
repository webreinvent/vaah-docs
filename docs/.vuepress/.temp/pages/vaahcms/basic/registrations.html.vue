<template><div><h1 id="registrations" tabindex="-1"><a class="header-anchor" href="#registrations" aria-hidden="true">#</a> Registrations</h1>
<p>Registration and authentication are mandatory in any application when you have little concern about privacy.</p>
<p>In VaahCms, the purpose of <code v-pre>Registration</code> is to prevent <code v-pre>duplicate</code> entries in <code v-pre>Users</code> table.</p>
<hr>
<h5 id="create-registration" tabindex="-1"><a class="header-anchor" href="#create-registration" aria-hidden="true">#</a> Create Registration</h5>
<p>Visit following url you will see the Registration section:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/registrations/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/registration-1.png')" alt="registration">
<p>Now you have to create a <code v-pre>Registration Entry</code> by click on <code v-pre>Create</code> button. You will see a create page with following field.</p>
<img :src="$withBase('/images/registration-2.png')" alt="registration">
<p>Fill all Fields. Click on <code v-pre>Save</code> button.</p>
<img :src="$withBase('/images/registration-3.png')" alt="registration">
<p>Now you can see the detail in <code v-pre>View</code> Page.</p>
<hr>
<h5 id="function-to-call-to-create-registration" tabindex="-1"><a class="header-anchor" href="#function-to-call-to-create-registration" aria-hidden="true">#</a> Function to call to Create Registration</h5>
<p>You can create a <code v-pre>Registration</code> by call the <code v-pre>postCreate()</code>method of <code v-pre>RegistrationController</code> at <code v-pre>WebReinvent\VaahCms\Http\Controllers</code>.</p>
<p>RegistrationController.php</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Routing<span class="token punctuation">\</span>Controller</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Registration</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">RegistrationsController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token variable">$theme</span><span class="token punctuation">;</span>

    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token property">theme</span> <span class="token operator">=</span> <span class="token function">vh_get_backend_theme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
    <span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">postCreate</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'can-create-registrations'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'failed'</span><span class="token punctuation">;</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'errors'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">trans</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"vaahcms::messages.permission_denied"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">Registration</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token class-name static-context">Registration</span><span class="token operator">::</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'list'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$list</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'list'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


