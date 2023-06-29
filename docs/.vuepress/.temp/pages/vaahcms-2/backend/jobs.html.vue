<template><div><h1 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> Jobs</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Through this feature you can monitor the assign jobs. This job section will show you the records of completed jobs only.</p>
<p>Visit following url you will see the Jobs section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/advanced/jobs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is a example of job records.</p>
<img :src="$withBase('/images/job-1.png')">
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="bulk-delete" tabindex="-1"><a class="header-anchor" href="#bulk-delete" aria-hidden="true">#</a> Bulk delete</h4>
<p>By selecting datas one can delete the records. Also there is delete all option for make it empty.</p>
<p><code v-pre>delete by selecting</code></p>
<img :src="$withBase('/images/job-2.png')">
<p><code v-pre>delete all</code></p>
<img :src="$withBase('/images/job-3.png')">
<h4 id="sorting" tabindex="-1"><a class="header-anchor" href="#sorting" aria-hidden="true">#</a> Sorting</h4>
<p>You can sort records by ID and with the date it was created.</p>
<img :src="$withBase('/images/job-4.png')">
<h4 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> Payload</h4>
<p>In payload column there is an eye button present, by clicking it will show the payloads in a popup,</p>
<img :src="$withBase('/images/job-5.png')">
<h2 id="how-to-use-job-in-vaahcms" tabindex="-1"><a class="header-anchor" href="#how-to-use-job-in-vaahcms" aria-hidden="true">#</a> How to use job in VaahCMS</h2>
<h3 id="step-1-configure-the-queue" tabindex="-1"><a class="header-anchor" href="#step-1-configure-the-queue" aria-hidden="true">#</a> Step-1 Configure The Queue</h3>
<p>Let’s take an example for a better understanding. We will create an email queue using the Laravel Queue and store all the email sending jobs in the database driver.</p>
<p><code v-pre>Command “queue:table” helps you to use the database driver for the queue.</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan queue:table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To set a queue driver in environment file open the “.env” file to set the value like below:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>QUEUE_CONNECTION=database
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then open the “config/queue.php” file and add below code:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>‘<span class="token keyword">default</span>’ <span class="token operator">=></span> <span class="token function">env</span><span class="token punctuation">(</span>‘<span class="token constant">QUEUE_CONNECTION</span>’<span class="token punctuation">,</span> ‘sync’<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To create a Queue Job run below command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan make:job MatchSendEmail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In <code v-pre>app/Jobs</code> you can see the code like below:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?PHP</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Jobs</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Queueable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>ShouldQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Foundation<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Dispatchable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>InteractsWithQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>SerializesModels</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MatchSendEmail</span> <span class="token keyword">implements</span> <span class="token class-name">ShouldQueue</span>
<span class="token punctuation">{</span>
     <span class="token keyword">use</span> <span class="token package">Dispatchable</span><span class="token punctuation">,</span> InteractsWithQueue<span class="token punctuation">,</span> Queueable<span class="token punctuation">,</span> SerializesModels<span class="token punctuation">;</span>

       <span class="token doc-comment comment">/**
       * Create a new job instance.
       *
       * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
       */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
               <span class="token comment">//</span>
   <span class="token punctuation">}</span>

       <span class="token doc-comment comment">/**
       * Execute the job.
       *
       * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
       */</span>
     <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">{</span>
            <span class="token comment">//</span>
      <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-2-create-an-email-template-and-mailable" tabindex="-1"><a class="header-anchor" href="#step-2-create-an-email-template-and-mailable" aria-hidden="true">#</a> Step-2 Create An Email Template And Mailable</h3>
<p>To create mailable, run below command:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan make:mail HelloEmail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After this command  the <code v-pre>Mail</code> folder will be created along with the <code v-pre>HelloEmail.php</code> file in the <code v-pre>app</code> folder.
code structure:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Mail</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Queueable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>ShouldQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Mail<span class="token punctuation">\</span>Mailable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>SerializesModels</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">HelloEmail</span> <span class="token keyword">extends</span> <span class="token class-name">Mailable</span>
<span class="token punctuation">{</span>
<span class="token keyword">use</span> <span class="token package">Queueable</span><span class="token punctuation">,</span> SerializesModels<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* Create a new message instance.
*
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* Build the message.
*
* <span class="token keyword">@return</span> $this
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">view</span><span class="token punctuation">(</span>‘view<span class="token operator">.</span>name’<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you need to create a folder called “emails” in the “resources/views” folder and create the file named “hello.blade.php” in the “email” folder. It will contain the simple HTML code below:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span>Welcome to laravel platform<span class="token operator">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you need to change the “view.name” text with the newly created email view file name along with the folder name in “HelloEmail.php” like below:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-></span><span class="token function">view</span><span class="token punctuation">(</span>’emails<span class="token operator">.</span>hello’<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Also, you need to add the email sending logic in the “handle()” method in the <code v-pre>app/Jobs/MatchSendEmail.php</code> file. But first, we need to add “Mail” and “HelloMail” namespaces to use it in the logic.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Jobs</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Mail</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Mail<span class="token punctuation">\</span>HelloEmail</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Queueable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>ShouldQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Foundation<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Dispatchable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>InteractsWithQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>SerializesModels</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MatchSendEmail</span> <span class="token keyword">implements</span> <span class="token class-name">ShouldQueue</span>
<span class="token punctuation">{</span>
<span class="token keyword">use</span> <span class="token package">Dispatchable</span><span class="token punctuation">,</span> InteractsWithQueue<span class="token punctuation">,</span> Queueable<span class="token punctuation">,</span> SerializesModels<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* Create a new job instance.
*
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* Execute the job.
*
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token variable">$email</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HelloEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Mail</span><span class="token operator">::</span><span class="token function">to</span><span class="token punctuation">(</span>‘test@test<span class="token operator">.</span>com’<span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$email</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-3-testing" tabindex="-1"><a class="header-anchor" href="#step-3-testing" aria-hidden="true">#</a> Step-3 Testing</h3>
<p>Add the below line in your <code v-pre>routes/web.php” file.</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span>‘send<span class="token operator">-</span>test<span class="token operator">-</span>email’<span class="token punctuation">,</span> ‘EmailController@sendEmail’<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add a new controller file called “EmailController.php” file in the <code v-pre>app/Http/Controllers/</code> folder. The Code of the file will look like this.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Jobs<span class="token punctuation">\</span>MatchSendEmail</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EmailController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sendEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token variable">$emailJob</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MatchSendEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token variable">$emailJob</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then visit url</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;project_url>/send-test-email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And  it will add the job in the “jobs” table.</p>
</div></template>


