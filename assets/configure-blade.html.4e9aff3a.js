import{_ as n,o as t,c as i,e as s}from"./app.60a653af.js";const l={},e=s(`<h1 id="configure-blade-file" tabindex="-1"><a class="header-anchor" href="#configure-blade-file" aria-hidden="true">#</a> Configure Blade File</h1><hr><p>At <code>VaahCms/Themes/BlogTheme/Resources/views/frontend/</code> directory you will find 3 blade file.</p><ul><li><strong>Default</strong>: When the link has no content or page, you can call this file.</li><li><strong>Home</strong>: This file represent the Home Page.</li><li><strong>Welcome</strong>: This file will shown only in new setup.</li></ul><p>At <code>VaahCms/Themes/BlogTheme/Http/Controllers/Frontend/FrontendController.php</code> file you will find index method and update <code>blogtheme::frontend.pages.index</code> change in to <code>blogtheme::frontend.home</code> at <code>line 18</code> which will display the view from <code>VaahCms/Themes/BlogTheme//Resources/views/frontend/home.blade.php</code> .</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">namespace</span> <span class="token package">VaahCms<span class="token punctuation">\\</span>Themes<span class="token punctuation">\\</span>BlogTheme<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>Frontend</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Routing<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">FrontendController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;blogtheme::frontend.home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you also need to update <code>home.blade.php</code> file.</p><div class="language-php+HTML line-numbers-mode" data-ext="php+HTML"><pre class="language-php+HTML"><code>@extends(&quot;blogtheme::frontend.layouts.default&quot;)

@section(&#39;vaahcms_extend_frontend_head&#39;)

@endsection

@section(&#39;vaahcms_extend_frontend_css&#39;)
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/bulma@0.9.0/css/bulma.min.css&quot; /&gt;
@endsection

@section(&#39;vaahcms_extend_frontend_scripts&#39;)

@endsection

@section(&#39;content&#39;)

    &lt;section class=&quot;hero is-info is-medium is-bold&quot;&gt;
        &lt;div class=&quot;hero-head&quot;&gt;
            &lt;nav class=&quot;navbar&quot;&gt;
                &lt;div class=&quot;container&quot;&gt;
                    &lt;div class=&quot;navbar-brand&quot;&gt;
                        &lt;a class=&quot;navbar-item&quot; href=&quot;../&quot;&gt;
                            &lt;img src=&quot;http://bulma.io/images/bulma-type-white.png&quot; alt=&quot;Logo&quot;&gt;
                        &lt;/a&gt;
                        &lt;span class=&quot;navbar-burger burger&quot; data-target=&quot;navbarMenu&quot;&gt;
                                &lt;span&gt;&lt;/span&gt;
                                &lt;span&gt;&lt;/span&gt;
                                &lt;span&gt;&lt;/span&gt;
                            &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div id=&quot;navbarMenu&quot; class=&quot;navbar-menu&quot;&gt;
                        &lt;div class=&quot;navbar-end&quot;&gt;
                            &lt;div class=&quot;tabs is-right&quot;&gt;
                                &lt;ul&gt;
                                    &lt;li class=&quot;is-active&quot;&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Examples&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Features&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Team&lt;/a&gt;&lt;/li&gt;
                                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Help&lt;/a&gt;&lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;span class=&quot;navbar-item&quot;&gt;
                                        &lt;a class=&quot;button is-white is-outlined&quot; 
                                           href=&quot;https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html&quot;&gt;
                                            &lt;span class=&quot;icon&quot;&gt;
                                                &lt;i class=&quot;fa fa-github&quot;&gt;&lt;/i&gt;
                                            &lt;/span&gt;
                                            &lt;span title=&quot;Hello from the other side&quot;&gt;View Source&lt;/span&gt;
                                        &lt;/a&gt;
                                    &lt;/span&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/nav&gt;
        &lt;/div&gt;
        &lt;div class=&quot;hero-body&quot;&gt;
            &lt;div class=&quot;container has-text-centered&quot;&gt;
                &lt;h1 class=&quot;title&quot;&gt;
                    The new standard in &amp;lt;insert industry here&amp;gt;
                &lt;/h1&gt;
                &lt;h2 class=&quot;subtitle&quot;&gt;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                &lt;/h2&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;
    &lt;div class=&quot;box cta&quot;&gt;
        &lt;p class=&quot;has-text-centered&quot;&gt;
            &lt;span class=&quot;tag is-primary&quot;&gt;
                New&lt;/span&gt; Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;section class=&quot;container&quot;&gt;
        &lt;div class=&quot;columns features&quot;&gt;
            &lt;div class=&quot;column is-4&quot;&gt;
                &lt;div class=&quot;card is-shady&quot;&gt;
                    &lt;div class=&quot;card-image has-text-centered&quot;&gt;
                        &lt;i class=&quot;fa fa-paw&quot;&gt;&lt;/i&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;card-content&quot;&gt;
                        &lt;div class=&quot;content&quot;&gt;
                            &lt;h4&gt;Tristique senectus et netus et. &lt;/h4&gt;
                            &lt;p&gt;Purus semper eget duis at tellus at urna condimentum mattis.
                                Non blandit massa enim nec. Integer enim neque volutpat ac
                                tincidunt vitae semper quis. Accumsan tortor posuere ac ut
                                consequat semper viverra nam.&lt;/p&gt;
                            &lt;p&gt;&lt;a href=&quot;#&quot;&gt;Learn more&lt;/a&gt;&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column is-4&quot;&gt;
                &lt;div class=&quot;card is-shady&quot;&gt;
                    &lt;div class=&quot;card-image has-text-centered&quot;&gt;
                        &lt;i class=&quot;fa fa-empire&quot;&gt;&lt;/i&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;card-content&quot;&gt;
                        &lt;div class=&quot;content&quot;&gt;
                            &lt;h4&gt;Tempor orci dapibus ultrices in.&lt;/h4&gt;
                            &lt;p&gt;Ut venenatis tellus in metus vulputate. Amet consectetur
                                adipiscing elit pellentesque. Sed arcu non odio euismod
                                lacinia at quis risus. Faucibus turpis in eu mi bibendum
                                neque egestas cmonsu songue. Phasellus vestibulum lorem
                                sed risus.&lt;/p&gt;
                            &lt;p&gt;&lt;a href=&quot;#&quot;&gt;Learn more&lt;/a&gt;&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;column is-4&quot;&gt;
                &lt;div class=&quot;card is-shady&quot;&gt;
                    &lt;div class=&quot;card-image has-text-centered&quot;&gt;
                        &lt;i class=&quot;fa fa-apple&quot;&gt;&lt;/i&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;card-content&quot;&gt;
                        &lt;div class=&quot;content&quot;&gt;
                            &lt;h4&gt; Leo integer malesuada nunc vel risus. &lt;/h4&gt;
                            &lt;p&gt;Imperdiet dui accumsan sit amet nulla facilisi morbi.
                                Fusce ut placerat orci nulla pellentesque dignissim enim.
                                Libero id faucibus nisl tincidunt eget nullam.
                                Commodo viverra maecenas accumsan lacus vel facilisis.&lt;/p&gt;
                            &lt;p&gt;&lt;a href=&quot;#&quot;&gt;Learn more&lt;/a&gt;&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;
    &lt;footer class=&quot;footer&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
            &lt;div class=&quot;columns&quot;&gt;
                &lt;div class=&quot;column is-3 is-offset-2&quot;&gt;
                    &lt;h2&gt;&lt;strong&gt;Category&lt;/strong&gt;&lt;/h2&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Lorem ipsum dolor sit amet&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Vestibulum errato isse&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Lorem ipsum dolor sit amet&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Aisia caisia&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-3&quot;&gt;
                    &lt;h2&gt;&lt;strong&gt;Category&lt;/strong&gt;&lt;/h2&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Labore et dolore magna aliqua&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Kanban airis sum eschelor&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Modular modern free&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;The king of clubs&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-4&quot;&gt;
                    &lt;h2&gt;&lt;strong&gt;Category&lt;/strong&gt;&lt;/h2&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Objects in space&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Playing cards with coyote&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Goodbye Yellow Brick Road&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;#&quot;&gt;The Garden of Forking Paths&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;content has-text-centered&quot;&gt;
                &lt;p&gt;
                    &lt;a class=&quot;icon&quot; href=&quot;https://github.com/BulmaTemplates/bulma-templates&quot;&gt;
                        &lt;i class=&quot;fa fa-github&quot;&gt;&lt;/i&gt;
                    &lt;/a&gt;
                &lt;/p&gt;
                &lt;div class=&quot;control level-item&quot;&gt;
                    &lt;a href=&quot;https://github.com/BulmaTemplates/bulma-templates&quot;&gt;
                        &lt;div class=&quot;tags has-addons&quot;&gt;
                            &lt;span class=&quot;tag is-dark&quot;&gt;Bulma Templates&lt;/span&gt;
                            &lt;span class=&quot;tag is-info&quot;&gt;MIT license&lt;/span&gt;
                        &lt;/div&gt;
                    &lt;/a&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;script src=&quot;../js/bulma.js&quot;&gt;&lt;/script&gt;
    &lt;/footer&gt;

@endsection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Copy this code and paste it in <code>home.blade.php</code> file.</p><hr>`,10),a=[e];function d(u,o){return t(),i("div",null,a)}const v=n(l,[["render",d],["__file","configure-blade.html.vue"]]);export{v as default};
