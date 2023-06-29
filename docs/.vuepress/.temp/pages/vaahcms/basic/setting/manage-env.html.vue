<template><div><h1 id="manage-env-variables" tabindex="-1"><a class="header-anchor" href="#manage-env-variables" aria-hidden="true">#</a> Manage Env Variables</h1>
<p>Env file contains various settings, one row – one KEY=VALUE pair. And then, within your project code you can get those environment variables with function <code v-pre>env('KEY')</code>.</p>
<p>The <code v-pre>.env</code> file stores configuration variables for your application and <code v-pre>.env.example</code> is simply an example of what might be in the <code v-pre>.env</code> file! You can easily rename <code v-pre>.env.example</code> to <code v-pre>.env</code> to get started.</p>
<p>The <code v-pre>.env</code> file also contains your app key which is used for encryption in your app. In Laravel, you can maintain separate configuration from your application. For example:- Your local dev environment has different database credentials than production environment. For more detail, view Laravel Documentation.</p>
<p><a href="https://laravel.com/docs/8.x/configuration#environment-configuration" target="_blank" rel="noopener noreferrer">Read Documentation<ExternalLinkIcon/></a></p>
<hr>
<h5 id="configure-env-from-backend" tabindex="-1"><a class="header-anchor" href="#configure-env-from-backend" aria-hidden="true">#</a> Configure Env from Backend</h5>
<p><code v-pre>VaahCms</code> provide us different <code v-pre>env</code> file for different environment or for different <code v-pre>Developers</code>. You can also create a <code v-pre>env</code> file of <code v-pre>custom</code> name. For example:- env.local, env.production, env.username</p>
<p>It will automatically detect your <code v-pre>env</code> file by App Url. If App url not found then it will fetch <code v-pre>.env</code> file.</p>
<p>Visit following url you will see the <code v-pre>Env Variables</code> section:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/settings/env-variables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/manage-env-1.png')" alt="manage-env-1">
<img :src="$withBase('/images/manage-env-2.png')" alt="manage-env-2">
<p>You can <code v-pre>add</code> and <code v-pre>update</code> env variables directly from here.</p>
<p>After click on <code v-pre>Save</code> button, you will see a <code v-pre>Pop-up</code> that is for confirmation.</p>
<img :src="$withBase('/images/manage-env-3.png')" alt="manage-env-3">
<p>When you click on <code v-pre>Proceed</code>, You will be <code v-pre>logout</code> and <code v-pre>redirected</code> to login page.</p>
<hr>
</div></template>


