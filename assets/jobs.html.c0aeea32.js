import{_ as a,o as s,c as d,a as e,e as l,d as n}from"./app.096e9617.js";const t={},u=l(`<h1 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> Jobs</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Through this feature you can monitor the assign jobs. This job section will show you the records of completed jobs only.</p><p>Visit following url you will see the Jobs section:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project-url&gt;/backend#/vaah/advanced/jobs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Below Image is a example of job records.</p>`,6),r=["src"],c=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),n(" Usage")],-1),v=e("h4",{id:"bulk-delete",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bulk-delete","aria-hidden":"true"},"#"),n(" Bulk delete")],-1),o=e("p",null,"By selecting datas one can delete the records. Also there is delete all option for make it empty.",-1),m=e("p",null,[e("code",null,"delete by selecting")],-1),b=["src"],h=e("p",null,[e("code",null,"delete all")],-1),p=["src"],g=e("h4",{id:"sorting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sorting","aria-hidden":"true"},"#"),n(" Sorting")],-1),x=e("p",null,"You can sort records by ID and with the date it was created.",-1),f=["src"],w=e("h4",{id:"payload",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#payload","aria-hidden":"true"},"#"),n(" Payload")],-1),_=e("p",null,"In payload column there is an eye button present, by clicking it will show the payloads in a popup,",-1),Q=["src"],j=l(`<h2 id="how-to-use-job-in-vaahcms" tabindex="-1"><a class="header-anchor" href="#how-to-use-job-in-vaahcms" aria-hidden="true">#</a> How to use job in VaahCMS</h2><h3 id="step-1-configure-the-queue" tabindex="-1"><a class="header-anchor" href="#step-1-configure-the-queue" aria-hidden="true">#</a> Step-1 Configure The Queue</h3><p>Let’s take an example for a better understanding. We will create an email queue using the Laravel Queue and store all the email sending jobs in the database driver.</p><p><code>Command “queue:table” helps you to use the database driver for the queue.</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan queue:table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To set a queue driver in environment file open the “.env” file to set the value like below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>QUEUE_CONNECTION=database
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then open the “config/queue.php” file and add below code:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>‘default’ =&gt; env(‘QUEUE_CONNECTION’, ‘sync’)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To create a Queue Job run below command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:job MatchSendEmail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In <code>app/Jobs</code> you can see the code like below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?PHP
namespace App\\Jobs;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;

class MatchSendEmail implements ShouldQueue
{
     use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

       /**
       * Create a new job instance.
       *
       * @return void
       */
    public function __construct()
  {
               //
   }

       /**
       * Execute the job.
       *
       * @return void
       */
     public function handle()
     {
            //
      }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-2-create-an-email-template-and-mailable" tabindex="-1"><a class="header-anchor" href="#step-2-create-an-email-template-and-mailable" aria-hidden="true">#</a> Step-2 Create An Email Template And Mailable</h3><p>To create mailable, run below command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:mail HelloEmail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After this command the <code>Mail</code> folder will be created along with the <code>HelloEmail.php</code> file in the <code>app</code> folder. code structure:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
namespace App\\Mail;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Mail\\Mailable;
use Illuminate\\Queue\\SerializesModels;

class HelloEmail extends Mailable
{
use Queueable, SerializesModels;

/**
* Create a new message instance.
*
* @return void
*/
public function __construct()
{
//
}

/**
* Build the message.
*
* @return $this
*/
public function build()
{
return $this-&gt;view(‘view.name’);
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you need to create a folder called “emails” in the “resources/views” folder and create the file named “hello.blade.php” in the “email” folder. It will contain the simple HTML code below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;Hello,&lt;/h1&gt;
&lt;p&gt;Welcome to laravel platform.&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you need to change the “view.name” text with the newly created email view file name along with the folder name in “HelloEmail.php” like below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return $this-&gt;view(’emails.hello’);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Also, you need to add the email sending logic in the “handle()” method in the <code>app/Jobs/MatchSendEmail.php</code> file. But first, we need to add “Mail” and “HelloMail” namespaces to use it in the logic.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Jobs;

use Mail;
use App\\Mail\\HelloEmail;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;

class MatchSendEmail implements ShouldQueue
{
use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

/**
* Create a new job instance.
*
* @return void
*/
public function __construct()
{
//
}

/**
* Execute the job.
*
* @return void
*/
public function handle()
{
$email = new HelloEmail();
Mail::to(‘test@test.com’)-&gt;send($email);
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-3-testing" tabindex="-1"><a class="header-anchor" href="#step-3-testing" aria-hidden="true">#</a> Step-3 Testing</h3><p>Add the below line in your <code>routes/web.php” file.</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(‘send-test-email’, ‘EmailController@sendEmail’);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add a new controller file called “EmailController.php” file in the <code>app/Http/Controllers/</code> folder. The Code of the file will look like this.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use App\\Jobs\\MatchSendEmail;

class EmailController extends Controller
{
public function sendEmail()
{
$emailJob = new MatchSendEmail();
dispatch($emailJob);
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then visit url</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project_url&gt;/send-test-email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And it will add the job in the “jobs” table.</p>`,32);function E(i,I){return s(),d("div",null,[u,e("img",{src:i.$withBase("/images/job-1.png")},null,8,r),c,v,o,m,e("img",{src:i.$withBase("/images/job-2.png")},null,8,b),h,e("img",{src:i.$withBase("/images/job-3.png")},null,8,p),g,x,e("img",{src:i.$withBase("/images/job-4.png")},null,8,f),w,_,e("img",{src:i.$withBase("/images/job-5.png")},null,8,Q),j])}const y=a(t,[["render",E],["__file","jobs.html.vue"]]);export{y as default};
