<template><div><h1 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h1>
<nav class="table-of-contents"><ul><li><router-link to="#major-changes">Major changes</router-link></li><li><router-link to="#minor-changes">Minor changes</router-link></li></ul></nav>
<h2 id="major-changes" tabindex="-1"><a class="header-anchor" href="#major-changes" aria-hidden="true">#</a> Major changes</h2>
<ul>
<li>Implement VaahFlutter as a package.</li>
<li>Research to remove/ replace state management package we are using.</li>
<li>CI/ CD and tests</li>
<li>Implement local DB.</li>
<li>Implement mechanism to improve initial load time when app fetches api data. (Please refer rough diagrams for now)</li>
</ul>
<img :src="$withBase('/images/flutter/planning/reducing-response-time.png')">
<h2 id="minor-changes" tabindex="-1"><a class="header-anchor" href="#minor-changes" aria-hidden="true">#</a> Minor changes</h2>
<ul>
<li>Add formatters (helpers &gt; input-formatters)</li>
<li>Remove responsive helper(helpers &gt; responsive)</li>
<li>Add visual demos for api (services &gt; api | at every place where api is documented)</li>
<li>Pass controller value back (widgets &gt; atoms &gt; input-auto-complete)</li>
<li>Fix to allow negative input (widgets &gt; atoms &gt; input-slider)</li>
</ul>
</div></template>


