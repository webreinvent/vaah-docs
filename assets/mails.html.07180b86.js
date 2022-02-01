import{r as o,o as l,c as p,a,d as n,w as t,F as c,b as s,e as i}from"./app.0b393cb1.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=a("h1",{id:"mails",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mails","aria-hidden":"true"},"#"),s(" Mails")],-1),m={class:"table-of-contents"},h=s("Setup Laravel Queues for VaahCMS"),b=s("Send mails with Laravel Queues"),v=s("Send a generic mail:"),k=s("To send Laravel Mails"),g=s("To send mail to a user you can use following code:"),f=s("To send Mails to Super Administrators"),_=s("Send mails without Laravel Queues"),x=s("Customizing The Templates"),w=i(`<h2 id="setup-laravel-queues-for-vaahcms" tabindex="-1"><a class="header-anchor" href="#setup-laravel-queues-for-vaahcms" aria-hidden="true">#</a> Setup Laravel Queues for VaahCMS</h2><p>Follow the following steps:</p><ol><li><p>Set <code>QUEUE_CONNECTION</code> to <code>database</code> in your active <code>env</code> file</p></li><li><p>Visit <code>Setting &gt; General &gt; Site Settings &gt; Laravel Queues</code> in your <code>backend dashboard</code> and enable it.</p></li><li><p>Run or setup <code>cron/daemon</code> job for</p><p><code>php artisan queue:work --queue=high,medium,low,default --env=env_filename</code></p><p>If you want to run without cache use following command:</p><p><code>php artisan queue:listen --queue=high,medium,low,default --env=env_filename</code> eg:</p><p><code>php artisan queue:listen --queue=high,medium,low,default --env=develop</code></p></li></ol><p>If you make any changes in code of your <code>Job</code> class, then you must restart the <code>queue:work</code> command.</p><hr><h2 id="send-mails-with-laravel-queues" tabindex="-1"><a class="header-anchor" href="#send-mails-with-laravel-queues" aria-hidden="true">#</a> Send mails with Laravel Queues</h2><p>By default <code>VaahCMS</code> does not use Laravel queues/jobs to schedule the mail. Hence, mails will be send immediately.</p><h3 id="send-a-generic-mail" tabindex="-1"><a class="header-anchor" href="#send-a-generic-mail" aria-hidden="true">#</a> Send a generic mail:</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">VaahMail</span><span class="token operator">::</span><span class="token function">dispatchGenericMail</span><span class="token punctuation">(</span><span class="token variable">$subject</span><span class="token punctuation">,</span> <span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token variable">$to</span><span class="token punctuation">,</span> <span class="token variable">$from_email</span><span class="token punctuation">,</span> 
                              <span class="token variable">$from_name</span><span class="token punctuation">,</span> <span class="token variable">$cc</span><span class="token punctuation">,</span> <span class="token variable">$bcc</span><span class="token punctuation">,</span> <span class="token variable">$priority</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>$subject</code></td><td>Subject of the email</td></tr><tr><td><code>$message</code></td><td>Content of the message, it can have <code>html</code> tags</td></tr><tr><td><code>$to</code></td><td>List of recipients in array format.</td></tr><tr><td><code>$from_email</code></td><td>From email, if it&#39;s not set, then it will try to get the <code>domain</code> from <code>APP_URL</code> and add <code>noreply</code>. Eg: <code>noreply@&lt;domain&gt;</code></td></tr><tr><td><code>$from_name</code></td><td>From name, if it&#39;s not set, the name will be taken from <code>APP_NAME</code></td></tr><tr><td><code>$cc</code></td><td>List of <code>cc</code> recipients in array format.</td></tr><tr><td><code>$bcc</code></td><td>List of <code>bcc</code> recipients in array format.</td></tr></tbody></table><p>Eg: An example of <code>$to</code> , <code>$cc</code> and <code>$bcc</code> is following:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$contacts</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;email@example.com&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;email2@example.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h3 id="to-send-laravel-mails" tabindex="-1"><a class="header-anchor" href="#to-send-laravel-mails" aria-hidden="true">#</a> To send Laravel Mails</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">VaahMail</span><span class="token operator">::</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token variable">$mail</span><span class="token punctuation">,</span> <span class="token variable">$to</span><span class="token punctuation">,</span> <span class="token variable">$cc</span><span class="token punctuation">,</span> <span class="token variable">$bcc</span><span class="token punctuation">,</span> <span class="token variable">$priority</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p><code>$mail</code> should an instance of Laravel Mail <code>Illuminate\\Mail\\Mailable</code> class.</p></li><li><p><code>$to</code> is the array of recipient:</p></li><li><p><code>$priority</code> it is the order of execution of the jobs. You can provide following values <code>high</code>, <code>medium</code> <code>low</code> &amp; <code>default</code></p></li></ul><hr><h3 id="to-send-mail-to-a-user-you-can-use-following-code" tabindex="-1"><a class="header-anchor" href="#to-send-mail-to-a-user-you-can-use-following-code" aria-hidden="true">#</a> To send mail to a user you can use following code:</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">VaahMail</span><span class="token operator">::</span><span class="token function">dispatchToUser</span><span class="token punctuation">(</span><span class="token variable">$mail</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$cc</span><span class="token punctuation">,</span> <span class="token variable">$bcc</span><span class="token punctuation">,</span> <span class="token variable">$priority</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><code>$user</code> is an instance of <code>WebReinvent\\VaahCms\\Entities\\User</code></li></ul><hr><h3 id="to-send-mails-to-super-administrators" tabindex="-1"><a class="header-anchor" href="#to-send-mails-to-super-administrators" aria-hidden="true">#</a> To send Mails to Super Administrators</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">notifySuperAdmins</span><span class="token punctuation">(</span><span class="token variable">$subject</span><span class="token punctuation">,</span> <span class="token variable">$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr><h3 id="send-mails-without-laravel-queues" tabindex="-1"><a class="header-anchor" href="#send-mails-without-laravel-queues" aria-hidden="true">#</a> Send mails without Laravel Queues</h3><p>If you want to send the mails without Laravel queues, you can use following code</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">VaahMail</span><span class="token operator">::</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$mail</span><span class="token punctuation">,</span> <span class="token variable">$to</span><span class="token punctuation">,</span> <span class="token variable">$cc</span><span class="token punctuation">,</span> <span class="token variable">$bcc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="customizing-the-templates" tabindex="-1"><a class="header-anchor" href="#customizing-the-templates" aria-hidden="true">#</a> Customizing The Templates</h2><p>To customize the default Laravel mail &amp; notification template you must publish the asset, using following commands:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>php artisan vendor<span class="token punctuation">:</span>publish <span class="token operator">--</span>tag<span class="token operator">=</span>laravel<span class="token operator">-</span>mail
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>php artisan vendor<span class="token punctuation">:</span>publish <span class="token operator">--</span>tag<span class="token operator">=</span>laravel<span class="token operator">-</span>notifications
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This will publish files under <code>resources/views/vendor/mail</code> directory. To update the UI of the VaahCMS <code>Mails</code>, you can edit following file:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>resources/views/vendor/mail/html/header.blade.php
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>resources/views/vendor/mail/html/footer.blade.php
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>resources/views/vendor/mail/html/themes/default.css
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr>`,36);function $(y,q){const e=o("RouterLink");return l(),p(c,null,[u,a("nav",m,[a("ul",null,[a("li",null,[n(e,{to:"#setup-laravel-queues-for-vaahcms"},{default:t(()=>[h]),_:1})]),a("li",null,[n(e,{to:"#send-mails-with-laravel-queues"},{default:t(()=>[b]),_:1}),a("ul",null,[a("li",null,[n(e,{to:"#send-a-generic-mail"},{default:t(()=>[v]),_:1})]),a("li",null,[n(e,{to:"#to-send-laravel-mails"},{default:t(()=>[k]),_:1})]),a("li",null,[n(e,{to:"#to-send-mail-to-a-user-you-can-use-following-code"},{default:t(()=>[g]),_:1})]),a("li",null,[n(e,{to:"#to-send-mails-to-super-administrators"},{default:t(()=>[f]),_:1})]),a("li",null,[n(e,{to:"#send-mails-without-laravel-queues"},{default:t(()=>[_]),_:1})])])]),a("li",null,[n(e,{to:"#customizing-the-templates"},{default:t(()=>[x]),_:1})])])]),w],64)}var M=r(d,[["render",$]]);export{M as default};
