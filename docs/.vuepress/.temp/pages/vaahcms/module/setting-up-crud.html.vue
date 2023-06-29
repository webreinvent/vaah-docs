<template><div><h1 id="setting-up-crud-in-the-backend" tabindex="-1"><a class="header-anchor" href="#setting-up-crud-in-the-backend" aria-hidden="true">#</a> Setting up CRUD in the Backend</h1>
<hr>
<h2 id="setup-via-vaahcli" tabindex="-1"><a class="header-anchor" href="#setup-via-vaahcli" aria-hidden="true">#</a> Setup via VaahCLI</h2>
<p>To Generate <code v-pre>CRUD</code> files via <code v-pre>VaahCLI</code>, first you need to install VaahCLI, via following command:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install vaah -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then run following command to generate CRUD files:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>vaah cms:crud or npx vaah cms:crud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It will ask you following questions, answers also mentioned in <code v-pre>BOLD</code>:</p>
<ul>
<li>For which you want to create CRUD: <strong>Module</strong></li>
<li>Enter the Module/Theme folder name: <strong>Articles</strong></li>
<li>Enter the section name (Backend | Frontend or Folder name): <strong>Backend</strong></li>
<li>Vue folder name: <strong>Vue</strong></li>
<li>Enter your database table name: <strong>ar_blogs</strong></li>
<li>Do you want to generate migration file (true/false): <strong>true</strong></li>
<li>Enter your model name (singular): <strong>Blog</strong></li>
<li>Enter your controller name (plural): <strong>Blogs</strong></li>
</ul>
<p>Once this step is complete, it will generate CRUD files at <code v-pre>VaahCMS &gt; Modules &gt; Articles</code></p>
<h5 id="steps-to-include-crud-files" tabindex="-1"><a class="header-anchor" href="#steps-to-include-crud-files" aria-hidden="true">#</a> Steps to include CRUD files</h5>
<ul>
<li>Re-activate module to run migrations</li>
</ul>
<p>Visit following url you will see the module:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Include the laravel router file in the module's route file</li>
</ul>
<p><code v-pre>VaahCms/Modules/Articles/Routes/backend.php</code></p>
<p>Add this code in above path</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>require_once('backend/routes-blogs.php');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Include the vue router file</li>
</ul>
<p><code v-pre>VaahCms/Modules/Articles/Vue/routes/routes.js</code></p>
<p>Add this code in above path</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import blogs from "./vue-routes-blogs";
   
routes = routes.concat(blogs);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Include the vue store file</li>
</ul>
<p><code v-pre>VaahCms/Modules/Articles/Vue/store/store.js</code></p>
<p>Add this code in above path</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import blogs from "./modules/store-blogs";

export const store = new Vuex.Store({

    modules: {

        .........
        .........
        blogs: blogs,

    }

});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Add vue router link to your menu</li>
</ul>
<p><code v-pre>VaahCms/Modules/Articles/Http/Controllers/Backend/ExtendController.php</code></p>
<p>Add this code in <code v-pre>sidebarMenu</code> method at above path</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public static function sidebarMenu()
    {
        $links = [];
        $links[0] = [
            'link' => route('vh.backend').'/articles#/blogs',
            'icon' => 'flag',
            'label' => 'Blogs'
        ];
       
        $response['status'] = 'success';
        $response['data'] = $links;
        return $response;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Visit following url you will see the blog CRUD:</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend/articles#/blogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note</strong> : Run <code v-pre>npm run watch-poll</code> command to track the changes in your application
and compile the components and other required files.</p>
<h2 id="manual-setup" tabindex="-1"><a class="header-anchor" href="#manual-setup" aria-hidden="true">#</a> Manual Setup</h2>
<p>We'll begin the tutorial with the VaahCMS backend where the CRUD operations are fulfilled. I'll keep this part brief as CRUD is a topic covered extensively elsewhere and I assume you are already familiar with the basics of Laravel.</p>
<p>In summary, we will:</p>
<ul>
<li>Set up a database and model</li>
<li>Set up backend routes</li>
<li>Define methods in the controller to perform the crud Operations</li>
</ul>
<h5 id="set-up-a-database-and-model" tabindex="-1"><a class="header-anchor" href="#set-up-a-database-and-model" aria-hidden="true">#</a> Set up a database and model</h5>
<p>In <RouterLink to="/vaahcms/module/migration-and-seed.html#generate-migrations">Step 4</RouterLink>, we already generate migration and set up a database.</p>
<p>Now we are going to create a model for a table. Models typically live in the <code v-pre>app\Models</code> directory, but you are free to place them anywhere that can be auto-loaded according to your composer.json file. All Eloquent models <code v-pre>extend Illuminate\Database\Eloquent\Model</code> class.</p>
<p>The easiest way to create a model instance is using the make:model Artisan command:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>vaah cms<span class="token punctuation">:</span>m<span class="token operator">-</span>make model Articles Content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will generate a model file at <code v-pre>VaahCms/Modules/Articles/Entities/</code>. Let's edit the model file to following:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Modules<span class="token punctuation">\</span>Articles<span class="token punctuation">\</span>Entities</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>SoftDeletes</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Content</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>

    <span class="token keyword">use</span> <span class="token package">SoftDeletes</span><span class="token punctuation">;</span>

    <span class="token comment">//-------------------------------------------------</span>
    <span class="token keyword">protected</span> <span class="token variable">$table</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'art_articles'</span><span class="token punctuation">;</span>
    <span class="token comment">//-------------------------------------------------</span>
    <span class="token keyword">protected</span> <span class="token variable">$dates</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'created_at'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'updated_at'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'deleted_at'</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//-------------------------------------------------</span>
    <span class="token keyword">protected</span> <span class="token variable">$dateFormat</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'Y-m-d H:i:s'</span><span class="token punctuation">;</span>
    <span class="token comment">//-------------------------------------------------</span>
    <span class="token keyword">protected</span> <span class="token variable">$fillable</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'title'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'content'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'is_published'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="set-up-backend-routes" tabindex="-1"><a class="header-anchor" href="#set-up-backend-routes" aria-hidden="true">#</a> Set up Backend routes</h5>
<p>Now we set up backend routes that our Vue application will need. All Laravel routes are defined in your route files, which are located in the routes directory. These files are automatically loaded by the framework. In Vaahcms, the <code v-pre>Routes/backend.php</code> file defines module routes that are for your web interface.</p>
<p>The router allows you to register routes that respond to any HTTP verb:</p>
<p>Let check the <code v-pre>VaahCms/Modules/Articles/Routes/backend.php</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">group</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'prefix'</span> <span class="token operator">=></span> <span class="token string single-quoted-string">'backend/articles/contents'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'namespace'</span>  <span class="token operator">=></span> <span class="token string single-quoted-string">'Backend'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'middleware'</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'web'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'has.backend.access'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//---------------------------------------------------------</span>
        <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'/create'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ContentController@postCreate'</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'backend.articles.contents.create'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//---------------------------------------------------------</span>
        <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'/list'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ContentController@getList'</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'backend.articles.content.types.list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//---------------------------------------------------------</span>
        <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'/item/{id}'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ContentController@getItem'</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'backend.articles.contents.item'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//---------------------------------------------------------</span>
        <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'/item/{id}/store'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ContentController@postStore'</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'backend.articles.contents.store'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//---------------------------------------------------------</span>
        <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'/destroy'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'ContentController@postDestroy'</span><span class="token punctuation">)</span>
            <span class="token operator">-></span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'backend.articles.contents.destroy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//---------------------------------------------------------</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="set-up-and-define-method-in-controller" tabindex="-1"><a class="header-anchor" href="#set-up-and-define-method-in-controller" aria-hidden="true">#</a> Set up and define method in Controller</h5>
<p>Controller acts as a directing traffic between Views and Models. In this application, we also define crud methods which is directing traffic to Models.</p>
<p>The easiest way to create a controller instance is using the make:controller Artisan command:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>vaah cms<span class="token punctuation">:</span>m<span class="token operator">-</span>make controller Articles Content
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will generate a Controller file at <code v-pre>VaahCms/Modules/Articles/Http/Controllers/Backend/</code>. Let's edit the Controller file to following:</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Modules<span class="token punctuation">\</span>Articles<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Controllers<span class="token punctuation">\</span>Backend</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Http<span class="token punctuation">\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Routing<span class="token punctuation">\</span>Controller</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">VaahCms<span class="token punctuation">\</span>Modules<span class="token punctuation">\</span>Articles<span class="token punctuation">\</span>Entities<span class="token punctuation">\</span>Content</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ContentController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>


    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">postCreate</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">Content</span><span class="token operator">::</span><span class="token function">postCreate</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getList</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">Content</span><span class="token operator">::</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getItem</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">Content</span><span class="token operator">::</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">postStore</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">Content</span><span class="token operator">::</span><span class="token function">postStore</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">,</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//----------------------------------------------------------</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">postDestroy</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token class-name static-context">Content</span><span class="token operator">::</span><span class="token function">postDestroy</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-></span><span class="token property">id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//----------------------------------------------------------</span>


<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


