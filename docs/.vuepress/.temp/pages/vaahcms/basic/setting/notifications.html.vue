<template><div><h1 id="notifications" tabindex="-1"><a class="header-anchor" href="#notifications" aria-hidden="true">#</a> Notifications</h1>
<nav class="table-of-contents"><ul><li><router-link to="#setup-laravel-queues-for-vaahcms">Setup Laravel Queues for VaahCMS</router-link></li><li><router-link to="#how-to-create-new-notification">How to create new notification?</router-link></li><li><router-link to="#how-to-show-notification-variables">How to show notification variables?</router-link></li><li><router-link to="#how-to-add-notification-actions">How to add notification actions?</router-link></li><li><router-link to="#how-to-use-variable-strings">How to use variable strings?</router-link></li><li><router-link to="#how-to-add-custom-url">How to add Custom Url?</router-link></li><li><router-link to="#sending-without-laravel-queues">Sending without Laravel Queues</router-link></li><li><router-link to="#sending-notifications-with-laravel-queues">Sending notifications with Laravel Queues</router-link></li><li><router-link to="#example">Example</router-link></li></ul></nav>
<h3 id="setup-laravel-queues-for-vaahcms" tabindex="-1"><a class="header-anchor" href="#setup-laravel-queues-for-vaahcms" aria-hidden="true">#</a> Setup Laravel Queues for VaahCMS</h3>
<p>Follow the following steps:</p>
<ol>
<li>
<p>Set <code v-pre>QUEUE_CONNECTION</code> to <code v-pre>database</code> in your active <code v-pre>env</code> file</p>
</li>
<li>
<p>Visit <code v-pre>Setting &gt; General &gt; Site Settings &gt; Laravel Queues</code> in your <code v-pre>backend dashboard</code> and enable it.</p>
</li>
<li>
<p>Run or setup <code v-pre>cron/daemon</code> job for</p>
<p><code v-pre>php artisan queue:work --queue=high,medium,low,default --env=env_filename</code></p>
<p>If you want to run without cache use following command:</p>
<p><code v-pre>php artisan queue:listen --queue=high,medium,low,default --env=env_filename</code>
eg:</p>
<p><code v-pre>php artisan queue:listen --queue=high,medium,low,default --env=develop</code></p>
</li>
</ol>
<p>If you make any changes in code of your <code v-pre>Job</code> class, then you must restart the <code v-pre>queue:work</code> command.</p>
<p><strong>Note:</strong> When sending notifications, be sure to set the <code v-pre>MAIL_FROM_ADDRESS</code> and <code v-pre>MAIL_FROM_NAME</code> in your <code v-pre>env</code> file. This value will be used as the <code v-pre>sender</code> of the <code v-pre>email</code> and <code v-pre>name</code> of your mail notification messages.</p>
<h3 id="how-to-create-new-notification" tabindex="-1"><a class="header-anchor" href="#how-to-create-new-notification" aria-hidden="true">#</a> How to create new notification?</h3>
<p>There are two way to create notifications:</p>
<ol>
<li>Using <code v-pre>Backend &gt; Settings &gt; Notifications</code></li>
<li>Use <code v-pre>Seeds</code></li>
</ol>
<h4 id="_1-create-notification-from-backend" tabindex="-1"><a class="header-anchor" href="#_1-create-notification-from-backend" aria-hidden="true">#</a> 1. Create notification from Backend</h4>
<p>Login to <code v-pre>Backend Administrator Control Panel</code> (<code v-pre>&lt;public-url</code>/backend), then navigate to <code v-pre>Settings &gt; Notifications</code>.</p>
<img :src="$withBase('/images/notification-5.png')" alt="notification-5">
<p>Here you will be able create new <code v-pre>notifications</code> which can be used in your code.</p>
<img :src="$withBase('/images/notification-6.png')" alt="notification-6">
<h4 id="_2-create-notification-via-seeds" tabindex="-1"><a class="header-anchor" href="#_2-create-notification-via-seeds" aria-hidden="true">#</a> 2. Create notification via Seeds</h4>
<p>You need to create <strong>two</strong> <code v-pre>json </code> files in your <code v-pre>module</code> or <code v-pre>theme</code> at following locations:</p>
<p><code v-pre>&lt;theme-or-module-path&gt;/Database/Seeders/json/notifications.json</code> with following content:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"&lt;notification-name>"</span><span class="token punctuation">,</span>
        <span class="token property">"via_mail"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"via_sms"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"via_push"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"via_backend"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"via_frontend"</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can choose the various <code v-pre>via</code> by which you want to send the <code v-pre>notification</code>.</p>
<p><code v-pre>&lt;theme-or-module-path&gt;/Database/Seeders/json/notification_contents.json</code></p>
<p>In this file <code v-pre>slug</code> is coming from the <code v-pre>&lt;notification-name&gt;</code> and each <code v-pre>{}</code> object represent the a <code v-pre>line</code> for the notification.</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"&lt;notification-name-slug>"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"subject"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Welcome Email"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"&lt;notification-name-slug>"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"from"</span><span class="token punctuation">,</span>
        <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"#!ENV:MAIL_FROM_NAME!#"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"#!ENV:MAIL_FROM_ADDRESS!#"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"&lt;notification-name-slug>"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"line"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Hello #!USER:NAME!#"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"&lt;notification-name-slug>"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"backend"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"content"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Lorem ipsum #!ENV:APP_NAME!#. Thanks!"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"&lt;notification-name-slug>"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"backend"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"action"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Click"</span><span class="token punctuation">,</span>
        <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"action"</span><span class="token operator">:</span><span class="token string">"#!ROUTE:VH.VERIFICATION!#"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>slug</code></td>
<td>It is the slug of the notification name.</td>
</tr>
<tr>
<td><code v-pre>via</code></td>
<td>Represent that this <code v-pre>{}</code> object belong to how the notification will be sent.</td>
</tr>
<tr>
<td><code v-pre>sort</code></td>
<td>Index or sequence of the each object.</td>
</tr>
<tr>
<td><code v-pre>key</code></td>
<td>This represent the type of object.<br /><strong>mail</strong> can have following keys : <code v-pre>greeting</code>, <code v-pre>line</code>, <code v-pre>action</code>, <code v-pre>from</code>, <code v-pre>subject</code><br /><strong>backend</strong> can have following keys: <code v-pre>content</code>, <code v-pre>action</code></td>
</tr>
<tr>
<td><code v-pre>value</code></td>
<td>Value contain the actual content of the <code v-pre>key</code>. This can have dynamic values like <code v-pre>#!ENV:APP_NAME!#</code> will be replace by the <code v-pre>APP_NAME</code></td>
</tr>
<tr>
<td>meta</td>
<td>Any additional information required. Eg: For key <code v-pre>action</code> it requires <code v-pre>Label</code> and <code v-pre>Link</code> like a hyperlink requires a <code v-pre>Label</code> and <code v-pre>Link</code></td>
</tr>
</tbody>
</table>
<p>Now to these notification should be created, whenever the <code v-pre>module</code> or <code v-pre>theme</code> gets activated. So, now we need to use <code v-pre>DatabaseTableSeeder.php</code> , add following methods to seed these notifications:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token operator">...</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">seedNotifications</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">seedNotificationContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">seedNotifications</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>VaahSeeder</span><span class="token operator">::</span><span class="token function">getListFromJson</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string double-quoted-string">"/json/notifications.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>VaahSeeder</span><span class="token operator">::</span><span class="token function">storeSeedsWithUuid</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'vh_notifications'</span><span class="token punctuation">,</span> <span class="token variable">$list</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">seedNotificationContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>VaahSeeder</span><span class="token operator">::</span><span class="token function">getListFromJson</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string double-quoted-string">"notification_contents.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$list</span> <span class="token keyword">as</span> <span class="token variable">$item</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$notification</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'vh_notifications'</span> <span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span> <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'slug'</span><span class="token punctuation">]</span> <span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$exist</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'vh_notification_contents'</span> <span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'vh_notification_id'</span><span class="token punctuation">,</span> <span class="token variable">$notification</span><span class="token operator">-></span><span class="token property">id</span> <span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'sort'</span><span class="token punctuation">,</span>  <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'sort'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'via'</span><span class="token punctuation">,</span>  <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'via'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'vh_notification_id'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$notification</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'meta'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'meta'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'meta'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">unset</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'slug'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$exist</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'vh_notification_contents'</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'vh_notification_contents'</span><span class="token punctuation">)</span>
                <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">'vh_notification_id'</span><span class="token punctuation">,</span> <span class="token variable">$notification</span><span class="token operator">-></span><span class="token property">id</span> <span class="token punctuation">)</span>
                <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'sort'</span><span class="token punctuation">,</span>  <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'sort'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token operator">-></span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'via'</span><span class="token punctuation">,</span>  <span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'via'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token operator">-></span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-show-notification-variables" tabindex="-1"><a class="header-anchor" href="#how-to-show-notification-variables" aria-hidden="true">#</a> How to show notification variables?</h3>
<p>If you want to show variables name in notification sidebar.</p>
<img :src="$withBase('/images/notification-1.png')" alt="notification-1">
<p>You need to add <code v-pre>getNotificationVariables</code> method in <code v-pre>ExtendController</code> of your <code v-pre>Theme</code> or <code v-pre>Module</code>.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getNotificationVariables</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!USER:NAME!#'</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'details'</span><span class="token operator">=></span><span class="token string single-quoted-string">'Will be replaced with name.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!USER:DISPLAY_NAME!#'</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'details'</span><span class="token operator">=></span><span class="token string single-quoted-string">'Will be replaced with display name.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!USER:EMAIL!#'</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'details'</span><span class="token operator">=></span><span class="token string single-quoted-string">'Will be replaced with email.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!USER:PHONE!#'</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'details'</span><span class="token operator">=></span><span class="token string single-quoted-string">'Will be replaced with phone.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$list</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-add-notification-actions" tabindex="-1"><a class="header-anchor" href="#how-to-add-notification-actions" aria-hidden="true">#</a> How to add notification actions?</h3>
<p>If you want to add action variables in notification.</p>
<img :src="$withBase('/images/notification-2.png')" alt="notification-2">
<p>You need to add <code v-pre>getNotificationActions</code> method in <code v-pre>ExtendController</code> of your <code v-pre>Theme</code> or <code v-pre>Module</code>.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getNotificationActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!ROUTE:VH.LOGIN!#'</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!ROUTE:VH.REGISTER!#'</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!ROUTE:VH.RESET!#'</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!ROUTE:VH.VERIFICATION!#'</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$list</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-use-variable-strings" tabindex="-1"><a class="header-anchor" href="#how-to-use-variable-strings" aria-hidden="true">#</a> How to use variable strings?</h3>
<p>There are three types of variable strings.</p>
<ol>
<li>
<p><code v-pre>#!USER:VARIABLE_NAME!#</code> : If the notification contains #!USER:NAME!# string and then the $input array must be: $inputs = [ &quot;user_id&quot; =&gt; X ]. This will replace the string with value provided in the User Entity.</p>
</li>
<li>
<p><code v-pre>#!PARAM:VARIABLE_NAME!#</code> : If the notification contains #!PARAM:NAME!# string and then the $input array must be: $inputs = [ &quot;name&quot; =&gt; &quot;John&quot; ]. This will replace the string with value provided in the inputs.</p>
</li>
<li>
<p><code v-pre>#!ROUTE:VARIABLE_NAME!#</code> :  If the notification contains #!ROUTE:VH.LOGIN!# string. This will replace the string with <code v-pre>url</code> of that <code v-pre>route name</code> provided in the <code v-pre>PHP Routes</code>.</p>
</li>
</ol>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$notification</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"&lt;notification-slug>"</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$notification</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    <span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">"user_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
            <span class="token string double-quoted-string">"notification_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">send</span><span class="token punctuation">(</span>
    	<span class="token variable">$notification</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$inputs</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-add-custom-url" tabindex="-1"><a class="header-anchor" href="#how-to-add-custom-url" aria-hidden="true">#</a> How to add Custom Url?</h3>
<p>To add custom url, you need to add <code v-pre>param string</code> of custom url: <code v-pre>#!PARAM:CUSTOM_URL!#</code>.</p>
<p>You can add this param string in <code v-pre>Notification Actions</code>.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getNotificationActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'name'</span><span class="token operator">=></span><span class="token string single-quoted-string">'#!PARAM:CUSTOM_URL!#'</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'status'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'success'</span><span class="token punctuation">;</span>
    <span class="token variable">$response</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'data'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$list</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is how you can add custom url in method.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$notification</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"&lt;notification-slug>"</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$notification</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    <span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">"user_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
            <span class="token string double-quoted-string">"notification_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
            <span class="token string double-quoted-string">"custom_url"</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'https://custom-url'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">send</span><span class="token punctuation">(</span>
    	<span class="token variable">$notification</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$inputs</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sending-without-laravel-queues" tabindex="-1"><a class="header-anchor" href="#sending-without-laravel-queues" aria-hidden="true">#</a> Sending without Laravel Queues</h3>
<p>If you want to send the notification without Laravel queues, you can use following code</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$notification</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"&lt;notification-slug>"</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$notification</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    <span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">"user_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
            <span class="token string double-quoted-string">"notification_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">send</span><span class="token punctuation">(</span>
    	<span class="token variable">$notification</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$inputs</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sending-notifications-with-laravel-queues" tabindex="-1"><a class="header-anchor" href="#sending-notifications-with-laravel-queues" aria-hidden="true">#</a> Sending notifications with Laravel Queues</h3>
<p><strong>Note:</strong> By default <code v-pre>VaahCMS</code> does not use Laravel queues/jobs to send the notification. You must enable it, read <code v-pre>Setup Notifications with queues</code> section to know more</p>
<p>To send notification with Laravel Queues, you can use following code:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$notification</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"&lt;notification-slug>"</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$notification</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">"user_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
            <span class="token string double-quoted-string">"notification_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">dispatch</span><span class="token punctuation">(</span>
    	<span class="token variable">$notification</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$inputs</span><span class="token punctuation">,</span> <span class="token variable">$priority</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$notification</code></td>
<td>is the instance of <code v-pre>WebReinvent\VaahCms\Entities\Notification</code></td>
</tr>
<tr>
<td><code v-pre>$user</code></td>
<td>is the instance of <code v-pre>WebReinvent\VaahCms\Entities\User</code></td>
</tr>
<tr>
<td><code v-pre>$inputs</code></td>
<td>is the a data array contain values of strings. <code v-pre>user_id</code> and <code v-pre>notification_id</code> are required params. <br />Eg. <br />1. If the notification contains <code v-pre>#!PARAM:NAME!#</code> string and then the <code v-pre>$input</code> array must be:  <code>$inputs =  [ &quot;name&quot; =&gt; &quot;John&quot; ]</code> This will replace the string with value provided in the inputs. <br />2. If the notification contains <code v-pre>#!USER:NAME!#</code> string and then the <code v-pre>$input</code> array must be:  <code>$inputs =  [ &quot;user_id&quot; =&gt; X ]</code> This will replace the string with value provided in the <code v-pre>User</code> Entity.</td>
</tr>
<tr>
<td><code v-pre>$priority</code></td>
<td>it is the order of execution of the jobs. You can provide following values: <code v-pre>high</code> ,<code v-pre>medium</code>, <code v-pre>low</code>, &amp; <code v-pre>default</code></td>
</tr>
</tbody>
</table>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3>
<p>In this example, we register a greeting, a line of text, a call to action, and then another line of text.</p>
<img :src="$withBase('/images/notification-3.png')" alt="notification-3">
<h4 id="notification-seeds" tabindex="-1"><a class="header-anchor" href="#notification-seeds" aria-hidden="true">#</a> Notification Seeds</h4>
<p><code v-pre>notifications.json</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Send Welcome Email"</span><span class="token punctuation">,</span>
        <span class="token property">"via_mail"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"via_sms"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"via_push"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"via_backend"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"via_frontend"</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>notification_contents.json</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"send-welcome-email"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"subject"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Welcome Email"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"send-welcome-email"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"from"</span><span class="token punctuation">,</span>
        <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"#!ENV:MAIL_FROM_NAME!#"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"#!ENV:MAIL_FROM_ADDRESS!#"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"send-welcome-email"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"line"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Hello #!USER:NAME!#"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"send-welcome-email"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"greetings"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Welcome to #!ENV:APP_NAME!#"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"send-welcome-email"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"line"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Thank you for signing up for #!ENV:APP_NAME!# services"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"send-welcome-email"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"action"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"Click to Login"</span><span class="token punctuation">,</span>
        <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"action"</span><span class="token operator">:</span><span class="token string">"#!ROUTE:VH.LOGIN!#"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"send-welcome-email"</span><span class="token punctuation">,</span>
        <span class="token property">"via"</span><span class="token operator">:</span> <span class="token string">"mail"</span><span class="token punctuation">,</span>
        <span class="token property">"sort"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"line"</span><span class="token punctuation">,</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"If your have any queries please contact this #!ENV:MAIL_FROM_ADDRESS!#"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use following code to send a Notification.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$notification</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"send-welcome-email"</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$notification</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    
    <span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">"user_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
            <span class="token string double-quoted-string">"notification_id"</span> <span class="token operator">=></span> xxx<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token class-name class-name-fully-qualified static-context">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Notification</span><span class="token operator">::</span><span class="token function">send</span><span class="token punctuation">(</span>
    	<span class="token variable">$notification</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$inputs</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The notification channel will then translate the message components into a beautiful, responsive HTML email template with a plain-text counterpart. Here is an example of an email generated by the notification:</p>
<img :src="$withBase('/images/notification-4.png')" alt="notification-4">
<p><strong>Note:</strong> When sending notifications, be sure to set the <code v-pre>APP_NAME</code> in your <code v-pre>env</code> file. This value will be used in the <code v-pre>header</code> and <code v-pre>footer</code> of your mail notification messages.</p>
</div></template>


