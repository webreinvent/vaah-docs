<template><div><h1 id="batches" tabindex="-1"><a class="header-anchor" href="#batches" aria-hidden="true">#</a> Batches</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Through this feature you can monitor the assign jobs. This job section will show you the records of completed jobs only.
In this section we can see progress of the Batches of jobs like if batch have failed or batch has completed executing or when has this batch completed or what percentage of the batch has completed etc</p>
<p>Visit following url you will see the Batches section:</p>
<div class="language-http line-numbers-mode" data-ext="http"><pre v-pre class="language-http"><code>&lt;public-url>/backend#/vaah/advanced/batches
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below is an example of Batch records.</p>
<img :src="$withBase('/images//batches/list.png')">
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h4 id="bulk-delete" tabindex="-1"><a class="header-anchor" href="#bulk-delete" aria-hidden="true">#</a> Bulk delete</h4>
<p>By selecting checkbox present at starting of each row one can delete the records. Also there is delete all option for make it empty.</p>
<p><code v-pre>delete by selecting</code></p>
<img :src="$withBase('/images/batches/single-delete.png')">
<p><code v-pre>delete all</code></p>
<img :src="$withBase('/images/batches/delete-bulk.png')">
<h4 id="sorting" tabindex="-1"><a class="header-anchor" href="#sorting" aria-hidden="true">#</a> Sorting</h4>
<p>You can sort records by ID and with the date it was created.</p>
<img :src="$withBase('/images/batches/sort.png')">
<h4 id="details" tabindex="-1"><a class="header-anchor" href="#details" aria-hidden="true">#</a> Details</h4>
<p>In details column information related to the bacth can be seen.</p>
<img :src="$withBase('/images/batches/details.png')">
<h3 id="step-1-create-batch-table" tabindex="-1"><a class="header-anchor" href="#step-1-create-batch-table" aria-hidden="true">#</a> Step-1 Create Batch Table</h3>
<p>Jobs can be batched in order to be executed in bulk.</p>
<p><code v-pre>Command “queue:batches-table” helps you to create migration file forbatching.</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan queue:batches-table 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>create table in database</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>php artisan migrate 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Batch table will contain meta information about your job batches, such as their completion percentage.</p>
<h3 id="step-2-create-batch-class" tabindex="-1"><a class="header-anchor" href="#step-2-create-batch-class" aria-hidden="true">#</a> Step-2 Create Batch Class</h3>
<p>To make a Job Batchable use:-</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Batchable</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in imports of the job class.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
 
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Jobs</span><span class="token punctuation">;</span>
 
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Batchable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Queueable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Contracts<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>ShouldQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Foundation<span class="token punctuation">\</span>Bus<span class="token punctuation">\</span>Dispatchable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>InteractsWithQueue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Queue<span class="token punctuation">\</span>SerializesModels</span><span class="token punctuation">;</span>
 
<span class="token keyword">class</span> <span class="token class-name-definition class-name">ImportCsv</span> <span class="token keyword">implements</span> <span class="token class-name">ShouldQueue</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Batchable</span><span class="token punctuation">,</span> Dispatchable<span class="token punctuation">,</span> InteractsWithQueue<span class="token punctuation">,</span> Queueable<span class="token punctuation">,</span> SerializesModels<span class="token punctuation">;</span>
 
    <span class="token doc-comment comment">/**
     * Execute the job.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-></span><span class="token function">batch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">cancelled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Determine if the batch has been cancelled...</span>
 
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token comment">// Import a portion of the CSV file...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-2-create-a-batch-of-jobs" tabindex="-1"><a class="header-anchor" href="#step-2-create-a-batch-of-jobs" aria-hidden="true">#</a> Step-2 Create a Batch of Jobs</h3>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$batch</span> <span class="token operator">=</span> <span class="token class-name static-context">Bus</span><span class="token operator">::</span><span class="token function">batch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ImportCsv</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ImportCsv</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ImportCsv</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ImportCsv</span><span class="token punctuation">(</span><span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ImportCsv</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Batch</span> <span class="token variable">$batch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// All jobs completed successfully...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Batch</span> <span class="token variable">$batch</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Throwable</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// First batch job failure detected...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Batch</span> <span class="token variable">$batch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// The batch has finished executing...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">return</span> <span class="token variable">$batch</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="note-this-section-contains-infomation-related-to-batches-that-has-been-executed-like-percentage-of-completion-ids-of-failed-jobs-completion-date-or-cancellation-date-etc" tabindex="-1"><a class="header-anchor" href="#note-this-section-contains-infomation-related-to-batches-that-has-been-executed-like-percentage-of-completion-ids-of-failed-jobs-completion-date-or-cancellation-date-etc" aria-hidden="true">#</a> Note:- This section contains infomation related to batches that has been executed. Like percentage of completion, ids of failed jobs, completion date or cancellation date etc.</h4>
</div></template>


