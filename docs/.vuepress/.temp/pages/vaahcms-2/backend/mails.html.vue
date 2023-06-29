<template><div><h1 id="mails" tabindex="-1"><a class="header-anchor" href="#mails" aria-hidden="true">#</a> Mails</h1>
<nav class="table-of-contents"><ul><li><router-link to="#setup-laravel-queues-for-vaahcms">Setup Laravel Queues for VaahCMS</router-link></li><li><router-link to="#send-mails-with-laravel-queues">Send mails with Laravel Queues</router-link><ul><li><router-link to="#send-a-generic-mail">Send a generic mail:</router-link></li><li><router-link to="#send-laravel-mails">Send Laravel mails</router-link></li><li><router-link to="#send-mail-to-a-user">Send mail to a user:</router-link></li><li><router-link to="#send-a-mail-to-super-administrators">Send a mail to Super Administrators</router-link></li><li><router-link to="#send-mails-without-laravel-queues">Send mails without Laravel Queues</router-link></li></ul></li><li><router-link to="#customizing-the-templates">Customizing The Templates</router-link></li></ul></nav>
<h2 id="setup-laravel-queues-for-vaahcms" tabindex="-1"><a class="header-anchor" href="#setup-laravel-queues-for-vaahcms" aria-hidden="true">#</a> Setup Laravel Queues for VaahCMS</h2>
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
<hr>
<h2 id="send-mails-with-laravel-queues" tabindex="-1"><a class="header-anchor" href="#send-mails-with-laravel-queues" aria-hidden="true">#</a> Send mails with Laravel Queues</h2>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>By default <code v-pre>VaahCMS</code> does not use Laravel queues/jobs to schedule the mail. Hence, mails will be send immediately.</p>
</div>
<h3 id="send-a-generic-mail" tabindex="-1"><a class="header-anchor" href="#send-a-generic-mail" aria-hidden="true">#</a> Send a generic mail:</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">VaahMail</span><span class="token operator">::</span><span class="token function">dispatchGenericMail</span><span class="token punctuation">(</span><span class="token variable">$subject</span><span class="token punctuation">,</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token variable">$to</span><span class="token punctuation">,</span> <span class="token variable">$from_email</span><span class="token punctuation">,</span> 
                              <span class="token variable">$from_name</span><span class="token punctuation">,</span> <span class="token variable">$cc</span><span class="token punctuation">,</span> <span class="token variable">$bcc</span><span class="token punctuation">,</span> <span class="token variable">$priority</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>$subject</code></td>
<td>Subject of the email</td>
</tr>
<tr>
<td><code v-pre>$message</code></td>
<td>Content of the message, it can have <code v-pre>html</code> tags</td>
</tr>
<tr>
<td><code v-pre>$to</code></td>
<td>List of recipients in array format.</td>
</tr>
<tr>
<td><code v-pre>$from_email</code></td>
<td>From email, if it's not set, then it will try to get the <code v-pre>domain</code> from <code v-pre>APP_URL</code> and add <code v-pre>noreply</code>. Eg: <code v-pre>noreply@&lt;domain&gt;</code></td>
</tr>
<tr>
<td><code v-pre>$from_name</code></td>
<td>From name, if it's not set, the name will be taken from <code v-pre>APP_NAME</code></td>
</tr>
<tr>
<td><code v-pre>$cc</code></td>
<td>List of <code v-pre>cc</code> recipients in array format.</td>
</tr>
<tr>
<td><code v-pre>$bcc</code></td>
<td>List of <code v-pre>bcc</code> recipients in array format.</td>
</tr>
</tbody>
</table>
<p>Eg: An example of <code v-pre>$to</code> , <code v-pre>$cc</code> and <code v-pre>$bcc</code> is following:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$contacts</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">'email'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'email@example.com'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'name'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">'email'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'email2@example.com'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="send-laravel-mails" tabindex="-1"><a class="header-anchor" href="#send-laravel-mails" aria-hidden="true">#</a> Send Laravel mails</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">VaahMail</span><span class="token operator">::</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token variable">$mail</span><span class="token punctuation">,</span> <span class="token variable">$to</span><span class="token punctuation">,</span> <span class="token variable">$cc</span><span class="token punctuation">,</span> <span class="token variable">$bcc</span><span class="token punctuation">,</span> <span class="token variable">$priority</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>$mail</code> should an instance of Laravel Mail <code v-pre>Illuminate\Mail\Mailable</code> class.</p>
</li>
<li>
<p><code v-pre>$to</code> is the array of recipient:</p>
</li>
<li>
<p><code v-pre>$priority</code> it is the order of execution of the jobs. You can provide following values <code v-pre>high</code>, <code v-pre>medium</code> <code v-pre>low</code> &amp; <code v-pre>default</code></p>
</li>
</ul>
<hr>
<h3 id="send-mail-to-a-user" tabindex="-1"><a class="header-anchor" href="#send-mail-to-a-user" aria-hidden="true">#</a> Send mail to a user:</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">VaahMail</span><span class="token operator">::</span><span class="token function">dispatchToUser</span><span class="token punctuation">(</span><span class="token variable">$mail</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$cc</span><span class="token punctuation">,</span> <span class="token variable">$bcc</span><span class="token punctuation">,</span> <span class="token variable">$priority</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>$user</code> is an instance of <code v-pre>WebReinvent\VaahCms\Entities\User</code></li>
</ul>
<hr>
<h3 id="send-a-mail-to-super-administrators" tabindex="-1"><a class="header-anchor" href="#send-a-mail-to-super-administrators" aria-hidden="true">#</a> Send a mail to Super Administrators</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">notifySuperAdmins</span><span class="token punctuation">(</span><span class="token variable">$subject</span><span class="token punctuation">,</span> <span class="token variable">$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="send-mails-without-laravel-queues" tabindex="-1"><a class="header-anchor" href="#send-mails-without-laravel-queues" aria-hidden="true">#</a> Send mails without Laravel Queues</h3>
<p>If you want to send the mails without Laravel queues, you can use following code</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">VaahMail</span><span class="token operator">::</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$mail</span><span class="token punctuation">,</span> <span class="token variable">$to</span><span class="token punctuation">,</span> <span class="token variable">$cc</span><span class="token punctuation">,</span> <span class="token variable">$bcc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="customizing-the-templates" tabindex="-1"><a class="header-anchor" href="#customizing-the-templates" aria-hidden="true">#</a> Customizing The Templates</h2>
<p>To customize the default Laravel mail &amp; notification template you must publish the asset, using following commands:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-mail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-notifications
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will publish files under <code v-pre>resources/views/vendor/mail</code> directory. To update the UI of the VaahCMS <code v-pre>Mails</code>, you can edit following file:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>resources/views/vendor/mail/html/header.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>resources/views/vendor/mail/html/footer.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>resources/views/vendor/mail/html/themes/default.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
</div></template>


