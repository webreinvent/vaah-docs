<template><div><h1 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h1>
<p>Routing is one of the essential concepts. It allows you to route all your application requests to its appropriate controller. The main and primary routes acknowledge and accept a URI (Uniform Resource Identifier) along with a closure, given that it should have to be a simple and expressive way of routing.</p>
<p>The following figure illustrates the Routing process.</p>
<img :src="$withBase('/images/routing.jpg')" alt="routing">
<p>All routes are defined in your route files, which are located in the routes directory. For more details, see Laravel's <a href="https://laravel.com/docs/8.x/routing" target="_blank" rel="noopener noreferrer">documentation<ExternalLinkIcon/></a></p>
<hr>
<h5 id="routing-in-vaahcms" tabindex="-1"><a class="header-anchor" href="#routing-in-vaahcms" aria-hidden="true">#</a> Routing in VaahCms</h5>
<p>In VaahCms, there are three type of route files;</p>
<ul>
<li><code v-pre>api.php</code>: The routes in <code v-pre>Routes/api.php</code> are stateless and are assigned the api middleware group.</li>
<li><code v-pre>backend.php</code>: The routes in <code v-pre>Routes/backend.php</code> are generally use for Backend or Module.</li>
<li><code v-pre>frontend.php</code>: The routes in <code v-pre>Routes/frontend.php</code> are generally use for Frontend or Theme.</li>
</ul>
</div></template>


