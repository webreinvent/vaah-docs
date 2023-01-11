import{_ as r,r as s,o as l,c,a as e,b as a,w as n,d as t,e as d}from"./app.096e9617.js";const h={},p=e("h1",{id:"lib",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lib","aria-hidden":"true"},"#"),t(" Lib")],-1),u={class:"table-of-contents"},m=d(`<h2 id="what-is-this-directory-about" tabindex="-1"><a class="header-anchor" href="#what-is-this-directory-about" aria-hidden="true">#</a> What is this directory about</h2><p>All your app code will reside in the lib folder. Make sure to plan your code structure before starting to develop your app. Otherwise, it can get confusing quickly without proper organization.</p><p>This is the most important folder in the project, used to write most of the dart code. By default, the lib folder contains the main.dart file, which is the application’s entry point, in case of multiple environments lib can have multi main files.</p><p>In our repo you can see following files and directories in lib folder</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>project
│   
└─── lib
    │
    └─── models
    |   | ...
    |
    └─── views
    |   | ...
    |
    └─── controllers
    |   | ...
    |
    └─── resources
    |   | ...
    |
    └─── routes
    |   | ...
    |
    └─── vaahextendflutter
    |   | ...
    |
    └───  app_config.dart
    |
    └───  main.dart
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th><strong>Directory name</strong></th><th><strong>Documentation link</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>models</td><td><a href="../lib/models">check this</a></td><td>This directory is project specific and contains models for the project</td></tr><tr><td>views</td><td><a href="../lib/views">check this</a></td><td>This directory is also project specific and contains UI screens for the project, Checkout <a href="#atomic-design-methodology">Atomic design methodology</a></td></tr><tr><td>controllers</td><td><a href="../lib/controllers">check this</a></td><td>This directory is also project specific and contains logic for handling actions</td></tr><tr><td>resources</td><td><a href="../lib/resources">check this</a></td><td>This directory contains essential resoucrces for app (e.g. stores token locally when user sign in)</td></tr><tr><td>routes</td><td><a href="../lib/routes/routes">check this</a></td><td>This directory contains route handler</td></tr><tr><td><strong><code>vaahextendflutter</code></strong></td><td><a href="../vaahextendflutter">check this</a></td><td><code>This is the most important directory. It contains all essential code needed to use Vaah Essentials</code></td></tr></tbody></table><h3 id="atomic-design-methodology" tabindex="-1"><a class="header-anchor" href="#atomic-design-methodology" aria-hidden="true">#</a> Atomic design methodology</h3><p>For views and vaahextendflutter, we follow <code>Atomic design methodology</code>.</p><p>Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are:</p><ol><li>Atoms</li><li>Molecules</li><li>Organisms</li><li>Templates</li><li>Pages</li></ol><p>Atomic design is not a linear process, but rather a mental model to help us think of our user interfaces as both a cohesive whole and a collection of parts at the same time. Each of the five stages plays a key role in the hierarchy of our interface design systems. Let’s dive into each stage in a bit more detail.</p><h5 id="atoms" tabindex="-1"><a class="header-anchor" href="#atoms" aria-hidden="true">#</a> Atoms</h5><p>The atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic elements like form labels, inputs, buttons, etc.</p><p>In the context of a pattern library, atoms demonstrate all your base styles at a glance, which can be a helpful reference to keep coming back to as you develop and maintain your design system.</p><h5 id="molecules" tabindex="-1"><a class="header-anchor" href="#molecules" aria-hidden="true">#</a> Molecules</h5><p>molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule. The result is a simple, portable, reusable component that can be dropped in anywhere they are needed (e.g. search functionality).</p><p>Creating simple components helps UI designers and developers adhere to the single responsibility principle, an age-old computer science precept that encourages a “do one thing and do it well” mentality. Burdening a single pattern with too much complexity makes software unwieldy. Therefore, creating simple UI molecules makes testing easier, encourages reusability, and promotes consistency throughout the interface.</p><h5 id="organisms" tabindex="-1"><a class="header-anchor" href="#organisms" aria-hidden="true">#</a> Organisms</h5><p>Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.</p><p>The AppBar forms a standalone section of an interface, even though it contains several smaller pieces of interface with their own unique properties and functionality. AppBar organism might consist of dissimilar elements such as a logo image, primary navigation list, and search form, actions.</p><h5 id="templates" tabindex="-1"><a class="header-anchor" href="#templates" aria-hidden="true">#</a> Templates</h5><p>Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.</p><p>Important characteristic of templates is that they focus on the page’s underlying content structure rather than the page’s final content. Design systems must account for the dynamic nature of content, so it’s very helpful to articulate important properties of components like image sizes and character lengths for headings and text passages.</p><p>By defining a page’s skeleton we’re able to create a system that can account for a variety of dynamic content, all while providing needed guardrails for the types of content that populate certain design patterns.</p><h5 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> Pages</h5><p>Pages are specific instances of templates that show what a UI looks like with real representative content in place.</p><h3 id="controllers-state-management" tabindex="-1"><a class="header-anchor" href="#controllers-state-management" aria-hidden="true">#</a> Controllers/ State Management</h3><p>State management is essential in Flutter app development because it allows us to centralize every UI state and control data flow in the application.</p><p>App state is shared across different widgets of your app and is present across complete user sessions. For example, app state appears in the form of login info, user preferences, social app notifications, e-commerce app shopping cart, articles state (read/unread) in a news app, etc.</p><p>If you look at it, then there is no one rule here to use ephemeral or App state. One can change one state to another based on the requirement. You have the power to use both setState() and App State to handle every state of your app.</p><p>When you are handling a global state which is across the App, setState() is not the right type. If you end up using setState() across the entire app, you may face a maintenance glitch, as your state will be everywhere.</p><p>You have to use setState() in the UI code’s class only. This means you can end up mixing business logic and UI, which hampers code quality.</p><h5 id="we-prefer-using-getx-because" tabindex="-1"><a class="header-anchor" href="#we-prefer-using-getx-because" aria-hidden="true">#</a> We prefer using GetX because</h5><p>GetX is a fast, stable, and light state management library in flutter. There are so many State Management libraries in flutter like MobX, BLoC, Redux, Provider, etc. GetX is also a powerful micro framework and using this, we can manage states, make routing, and can perform dependency injection.</p><p>Performance: As compared to other state management libraries, GetX is best because it consumes minimum resources and provides better performance.</p><p>Productivity: GetX’s syntax is easy so it is productive. It saves a lot of time for the developers and increases the speed of the app because it does not use extra resources. It uses only those resources which are currently needed and after its work is done, the resources will free automatically. If all the resources are loaded into the memory then it will not be that productive. So better to use GetX for this.</p><p>Organization: GetX code is organized as View, Logic, navigation, and dependency injection. So we don’t need any more context to navigate to other screen. We can navigate to screen without using the context so we are not dependent on widget tree.</p>`,37),g={href:"https://pub.dev/packages/get",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[t("We have provided more details in "),e("a",{href:"../lib/controllers"},"controllers documentation"),t(".")],-1);function b(v,y){const i=s("router-link"),o=s("ExternalLinkIcon");return l(),c("div",null,[p,e("nav",u,[e("ul",null,[e("li",null,[a(i,{to:"#what-is-this-directory-about"},{default:n(()=>[t("What is this directory about")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#atomic-design-methodology"},{default:n(()=>[t("Atomic design methodology")]),_:1})]),e("li",null,[a(i,{to:"#controllers-state-management"},{default:n(()=>[t("Controllers/ State Management")]),_:1})])])])])]),m,e("p",null,[e("a",g,[t("Official GetX Documentation"),a(o)])]),f])}const x=r(h,[["render",b],["__file","d_lib.html.vue"]]);export{x as default};
