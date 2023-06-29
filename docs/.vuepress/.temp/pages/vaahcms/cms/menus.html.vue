<template><div><h1 id="menus" tabindex="-1"><a class="header-anchor" href="#menus" aria-hidden="true">#</a> Menus</h1>
<p>This section provides information about the <code v-pre>Menus</code> in <code v-pre>CMS</code> modules</p>
<p>Menus are a collection of links (menu items) used to navigate a website. Menus are primarily displayed as a hierarchical list of links using Backdrop blocks. Each menu automatically creates a block of the same name.</p>
<p>Menus can be &quot;flat&quot; or may be hierarchical (multilevel) A multilevel menu has one or more “leaf” menu items.</p>
<h5 id="menu-structure-in-the-cms" tabindex="-1"><a class="header-anchor" href="#menu-structure-in-the-cms" aria-hidden="true">#</a> Menu structure in the CMS</h5>
<br/>
<img :src="$withBase('/images/cms-menu-1.png')" alt="cms-menu-1">
<ol>
<li>Menu will visible to the selected Theme.</li>
<li>Location determine the position of menu in Web Pages. Eg:- Top, Bottom etc</li>
<li>You can select a existing Menu or create a new menu</li>
</ol>
<hr>
<h5 id="adding-a-content-item-to-a-menu-as-a-new-link" tabindex="-1"><a class="header-anchor" href="#adding-a-content-item-to-a-menu-as-a-new-link" aria-hidden="true">#</a> Adding a content item to a menu as a new link</h5>
<p>Say you are creating a new &quot;About Us&quot; page and wish to have a menu item in your main menu so that visitor can click this link to find out all about you.</p>
<img :src="$withBase('/images/cms-menu-2.png')" alt="cms-menu-2">
<p>You could drag a <code v-pre>Content</code> of <code v-pre>About Us</code> Page to Menu Block. You can update the link title.</p>
<p>By <code v-pre>dragging</code> the Content or Custom fields to Menu Block, you can arrange the menu according to your order. You can also add as a Sub-Menu by drag below the menu.</p>
<p>They are of two Types:</p>
<ul>
<li>Content</li>
<li>Custom</li>
</ul>
<p>In Content, There are the list of content that created in Content Types. you can directly add in to menu.</p>
<p>In Custom, There are two menu items: 1. Internal link 2. External link</p>
<hr>
<h5 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h5>
<p>You have to paste this code in Web Pages and it will fetch according to their location name.</p>
<div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre v-pre class="language-php+HTML"><code>{!! vh_location('top', true) !!}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
</div></template>


