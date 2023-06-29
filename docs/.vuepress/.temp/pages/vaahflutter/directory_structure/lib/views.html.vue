<template><div><h1 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> Views</h1>
<nav class="table-of-contents"><ul><li><router-link to="#atomic-design-methodology">Atomic design methodology</router-link></li></ul></nav>
<p>Views are all the Widgets and Pages within the Flutter Application. This directory is mostly specific to project.</p>
<p>For views, we follow <code v-pre>Atomic design methodology</code>.</p>
<h3 id="atomic-design-methodology" tabindex="-1"><a class="header-anchor" href="#atomic-design-methodology" aria-hidden="true">#</a> Atomic design methodology</h3>
<p>Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are:</p>
<ol>
<li>Atoms</li>
<li>Molecules</li>
<li>Organisms</li>
<li>Templates</li>
<li>Pages</li>
</ol>
<p>Atomic design is not a linear process, but rather a mental model to help us think of our user interfaces as both a cohesive whole and a collection of parts at the same time. Each of the five stages plays a key role in the hierarchy of our interface design systems. Let’s dive into each stage in a bit more detail.</p>
<h5 id="atoms" tabindex="-1"><a class="header-anchor" href="#atoms" aria-hidden="true">#</a> Atoms</h5>
<p>The atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic elements like form labels, inputs, buttons, etc.</p>
<p>In the context of a pattern library, atoms demonstrate all your base styles at a glance, which can be a helpful reference to keep coming back to as you develop and maintain your design system.</p>
<h5 id="molecules" tabindex="-1"><a class="header-anchor" href="#molecules" aria-hidden="true">#</a> Molecules</h5>
<p>molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule. The result is a simple, portable, reusable component that can be dropped in anywhere they are needed (e.g. search functionality).</p>
<p>Creating simple components helps UI designers and developers adhere to the single responsibility principle, an age-old computer science precept that encourages a “do one thing and do it well” mentality. Burdening a single pattern with too much complexity makes software unwieldy. Therefore, creating simple UI molecules makes testing easier, encourages reusability, and promotes consistency throughout the interface.</p>
<h5 id="organisms" tabindex="-1"><a class="header-anchor" href="#organisms" aria-hidden="true">#</a> Organisms</h5>
<p>Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.</p>
<p>The AppBar forms a standalone section of an interface, even though it contains several smaller pieces of interface with their own unique properties and functionality. AppBar organism might consist of dissimilar elements such as a logo image, primary navigation list, and search form, actions.</p>
<h5 id="templates" tabindex="-1"><a class="header-anchor" href="#templates" aria-hidden="true">#</a> Templates</h5>
<p>Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.</p>
<p>Important characteristic of templates is that they focus on the page’s underlying content structure rather than the page’s final content. Design systems must account for the dynamic nature of content, so it’s very helpful to articulate important properties of components like image sizes and character lengths for headings and text passages.</p>
<p>By defining a page’s skeleton we’re able to create a system that can account for a variety of dynamic content, all while providing needed guardrails for the types of content that populate certain design patterns.</p>
<h5 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> Pages</h5>
<p>Pages are specific instances of templates that show what a UI looks like with real representative content in place.</p>
</div></template>


