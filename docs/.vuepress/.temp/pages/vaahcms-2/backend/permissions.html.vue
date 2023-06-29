<template><div><h1 id="permissions" tabindex="-1"><a class="header-anchor" href="#permissions" aria-hidden="true">#</a> Permissions</h1>
<nav class="table-of-contents"><ul><li><router-link to="#purpose">Purpose</router-link></li><li><router-link to="#features-demos">Features &amp; Demos</router-link></li><li><router-link to="#create-a-permission-via-vaahseeder">Create a Permission via VaahSeeder</router-link></li><li><router-link to="#required-user-permissions-to-access-this-section">Required User Permissions To Access This Section</router-link></li><li><router-link to="#files">Files</router-link></li><li><router-link to="#methods">Methods</router-link></li><li><router-link to="#api">API</router-link></li></ul></nav>
<h2 id="purpose" tabindex="-1"><a class="header-anchor" href="#purpose" aria-hidden="true">#</a> Purpose</h2>
<p>Depending on their roles, the decisions made by the application owner and the system administrator, and other factors, permissions allow users to access particular aspects of the application. Permissions control which actions users are allowed to perform on your application, such as viewing, editing, and changing configuration. Each permission has a name (for example, View published material) and only permits a single activity or a small group of related actions.</p>
<h2 id="features-demos" tabindex="-1"><a class="header-anchor" href="#features-demos" aria-hidden="true">#</a> Features &amp; Demos</h2>
<h4 id="default-permissions" tabindex="-1"><a class="header-anchor" href="#default-permissions" aria-hidden="true">#</a> Default Permissions</h4>
<p>These permissions are created through seeds while set up the application.</p>
<table>
<thead>
<tr>
<th>Permission Name</th>
<th>Section</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Has Access of Dashboard</td>
<td>Dashboard</td>
<td>This will allow user to see the link of dashboard.</td>
</tr>
<tr>
<td>Has Access of Setting Section</td>
<td>Setting</td>
<td>This will allow user to see the link of setting section.</td>
</tr>
<tr>
<td>Can Login In Backend</td>
<td>Backend</td>
<td>This will allow user to login in the backend.</td>
</tr>
<tr>
<td>Has Access Of Users Section</td>
<td>User</td>
<td>This will allow user to see the link of user section.</td>
</tr>
<tr>
<td>Can Create Users</td>
<td>User</td>
<td>This will allow user to add anything in the user section.</td>
</tr>
<tr>
<td>Can Read Users</td>
<td>User</td>
<td>This will allow user to view anything in the user section.</td>
</tr>
<tr>
<td>Can Update Users</td>
<td>User</td>
<td>This will allow user to edit anything in the user section.</td>
</tr>
<tr>
<td>Can Delete Users</td>
<td>User</td>
<td>This will allow user to delete anything in the user section.</td>
</tr>
<tr>
<td>Can Manage Users</td>
<td>User</td>
<td>This will allow user to manage anything in the user section.</td>
</tr>
<tr>
<td>Can See Users Contact Details</td>
<td>User</td>
<td>This will allow user to view contact (email, mobile) detail in the user section.</td>
</tr>
<tr>
<td>Has Access Of Registrations Section</td>
<td>Registration</td>
<td>This will allow user see the link of registration section.</td>
</tr>
<tr>
<td>Can Create Registrations</td>
<td>Registration</td>
<td>This will allow user to add anything in the registration section.</td>
</tr>
<tr>
<td>Can Create Users From Registrations</td>
<td>Registration</td>
<td>This will allow user to add users in the registration section.</td>
</tr>
<tr>
<td>Can Read Registrations</td>
<td>Registration</td>
<td>This will allow user to view anything in the registration section.</td>
</tr>
<tr>
<td>Can Update Registrations</td>
<td>Registration</td>
<td>This will allow user to edit anything in the registration section.</td>
</tr>
<tr>
<td>Can Delete Registrations</td>
<td>Registration</td>
<td>This will allow user to delete anything in the registration section.</td>
</tr>
<tr>
<td>Can Manage Registrations</td>
<td>Registration</td>
<td>This will allow user to manage anything in the registration section.</td>
</tr>
<tr>
<td>Can See Registrations Contact Details</td>
<td>Registration</td>
<td>This will allow user to view contact detail in the registration section.</td>
</tr>
<tr>
<td>Has Access Of Roles Section</td>
<td>Role</td>
<td>This will allow user see the link of role section.</td>
</tr>
<tr>
<td>Can Create Roles</td>
<td>Role</td>
<td>This will allow user to add anything in the role section.</td>
</tr>
<tr>
<td>Can Read Roles</td>
<td>Role</td>
<td>This will allow user to view anything in the role section.</td>
</tr>
<tr>
<td>Can Update Roles</td>
<td>Role</td>
<td>This will allow user to edit anything in the role section.</td>
</tr>
<tr>
<td>Can Delete Roles</td>
<td>Role</td>
<td>This will allow user to delete anything in the role section.</td>
</tr>
<tr>
<td>Can Manage Roles</td>
<td>Role</td>
<td>This will allow user to manage anything in the role section.</td>
</tr>
<tr>
<td>Has Access Of Permissions Section</td>
<td>Permission</td>
<td>This will allow user see the link of permission section.</td>
</tr>
<tr>
<td>Can Read Permissions</td>
<td>Permission</td>
<td>This will allow user to view anything in the permission section.</td>
</tr>
<tr>
<td>Can Update Permissions</td>
<td>Permission</td>
<td>This will allow user to edit anything in the permission section.</td>
</tr>
<tr>
<td>Can Manage Permissions</td>
<td>Permission</td>
<td>This will allow user to manage anything in the permission section.</td>
</tr>
<tr>
<td>Has Access Of Media Section</td>
<td>Media</td>
<td>This will allow user see the link of media section.</td>
</tr>
<tr>
<td>Can Create Media</td>
<td>Media</td>
<td>This will allow user to add anything in the media section.</td>
</tr>
<tr>
<td>Can Read Media</td>
<td>Media</td>
<td>This will allow user to view anything in the media section.</td>
</tr>
<tr>
<td>Can Update Media</td>
<td>Media</td>
<td>This will allow user to edit anything in the media section.</td>
</tr>
<tr>
<td>Can Delete Media</td>
<td>Media</td>
<td>This will allow user to delete anything in the media section.</td>
</tr>
<tr>
<td>Can Manage Media</td>
<td>Media</td>
<td>This will allow user to manage anything in the media section.</td>
</tr>
<tr>
<td>Has Access Of Module Section</td>
<td>Module</td>
<td>This will allow user see the link of module section.</td>
</tr>
<tr>
<td>Can Install Module</td>
<td>Module</td>
<td>This will allow user to install a module.</td>
</tr>
<tr>
<td>Can Delete Module</td>
<td>Module</td>
<td>This will allow user to delete a module.</td>
</tr>
<tr>
<td>Can Deactivate Module</td>
<td>Module</td>
<td>This will allow user to deactivate a module.</td>
</tr>
<tr>
<td>Can Activate Module</td>
<td>Module</td>
<td>This will allow user to activate a module.</td>
</tr>
<tr>
<td>Can Import Sample Data In Module</td>
<td>Module</td>
<td>This will allow user to import sample data in module.</td>
</tr>
<tr>
<td>Can Update Module</td>
<td>Module</td>
<td>This will allow user to update a module.</td>
</tr>
<tr>
<td>Can Read Module</td>
<td>Module</td>
<td>This will allow user to read a module.</td>
</tr>
<tr>
<td>Has Access Of Theme Section</td>
<td>Theme</td>
<td>This will allow user see the link of theme section.</td>
</tr>
<tr>
<td>Can Install Theme</td>
<td>Theme</td>
<td>This will allow user to install a theme.</td>
</tr>
<tr>
<td>Can Delete Theme</td>
<td>Theme</td>
<td>This will allow user to delete a theme.</td>
</tr>
<tr>
<td>Can Deactivate Theme</td>
<td>Theme</td>
<td>This will allow user to deactivate a theme.</td>
</tr>
<tr>
<td>Can Activate Theme</td>
<td>Theme</td>
<td>This will allow user to activate a theme.</td>
</tr>
<tr>
<td>Can Import Sample Data In Theme</td>
<td>Theme</td>
<td>This will allow user to import sample data in theme.</td>
</tr>
<tr>
<td>Can Update Theme</td>
<td>Theme</td>
<td>This will allow user to update a theme.</td>
</tr>
<tr>
<td>Can Read Theme</td>
<td>Theme</td>
<td>This will allow user to read a theme.</td>
</tr>
<tr>
<td>Has Access Of Advanced Section</td>
<td>Advanced</td>
<td>This will allow user see the link of advanced section.</td>
</tr>
</tbody>
</table>
<h2 id="create-a-permission-via-vaahseeder" tabindex="-1"><a class="header-anchor" href="#create-a-permission-via-vaahseeder" aria-hidden="true">#</a> Create a Permission via VaahSeeder</h2>
<p>Through seeds, you can generate permissions. Make a json file called <code v-pre>permissions.json</code> in the directory .<code v-pre>../VaahCms/Modules/{module_name}/Database/Seeds/json/</code>.</p>
<p>In <code v-pre>permissions.json</code> file</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Has Access of Dashboard"</span><span class="token punctuation">,</span>
        <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"&lt;module_name>"</span><span class="token punctuation">,</span>
        <span class="token property">"section"</span><span class="token operator">:</span> <span class="token string">"&lt;module_section_name>"</span><span class="token punctuation">,</span>
        <span class="token property">"details"</span><span class="token operator">:</span> <span class="token string">"This will allow user to see the link of dashboard."</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Has Access of Setting Section"</span><span class="token punctuation">,</span>
        <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"vaahcms"</span><span class="token punctuation">,</span>
        <span class="token property">"section"</span><span class="token operator">:</span> <span class="token string">"Setting"</span><span class="token punctuation">,</span>
        <span class="token property">"details"</span><span class="token operator">:</span> <span class="token string">"This will allow user to see the link of setting section."</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code v-pre>DatabaseTableSeeder.php</code> at <code v-pre>.../VaahCms/Modules/{module_name}&gt;/Database/Seeds/</code> this directory.</p>
<p>In <code v-pre>DatabaseTableSeeder.php</code> file</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> VaahCms\Modules\<span class="token operator">&lt;</span>module_name<span class="token operator">></span>\Database\Seeds<span class="token punctuation">;</span>


<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Seeder</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Facades<span class="token punctuation">\</span>DB</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Support<span class="token punctuation">\</span>Str</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Libraries<span class="token punctuation">\</span>VaahSeeder</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DatabaseTableSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the database seeds.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">VaahSeeder</span><span class="token operator">::</span><span class="token function">permissions</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">'/json/permissions.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You need to reactivate the <code v-pre>Module</code> in order to run Seeder. Watched attached video for more information.</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_ZrgTJAsPgb.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="assign-permissions-to-role" tabindex="-1"><a class="header-anchor" href="#assign-permissions-to-role" aria-hidden="true">#</a> Assign Permissions to Role</h4>
<p>You can add permissions to a role in permissions section. By clicking on role column, a page will open that contain list of roles along with <code v-pre>Yes/NO</code> button.</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_aORDueFf3G.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h2 id="required-user-permissions-to-access-this-section" tabindex="-1"><a class="header-anchor" href="#required-user-permissions-to-access-this-section" aria-hidden="true">#</a> Required User Permissions To Access This Section</h2>
<p>The following permissions are necessary for permissions management in order to carry out certain actions.</p>
<table>
<thead>
<tr>
<th>Permissions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Has Access Of Permissions Section</td>
<td>This will enable users to access the permission section link in the application's left navigation bar.</td>
</tr>
<tr>
<td>Can Read Permissions</td>
<td>This will allow user to view anything in the permission section.</td>
</tr>
<tr>
<td>Can Update Permissions</td>
<td>This will allow user to edit anything in the permission section.</td>
</tr>
<tr>
<td>Can Manage Permissions</td>
<td>This will allow user to manage anything in the permission section.</td>
</tr>
</tbody>
</table>
<h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h2>
<ul>
<li>Laravel Route: <code v-pre>vaahcms/Routes/backend/route-permissions.php</code></li>
<li>Laravel Controller: <code v-pre>vaahcms/Http/Controllers/Backend/PermissionsController.php</code></li>
<li>Laravel Model: <code v-pre>vaahcms/Models/Permission.php</code></li>
<li>Vue Route: <code v-pre>vaahcms/Vue/routes/vue-routes-permissions.js</code></li>
<li>Vue Store: <code v-pre>vaahcms/Vue/stores/store-permissions.js</code></li>
<li>Vue Page Directory: <code v-pre>vaahcms/Vue/pages/permissions</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<p>Some reusable methods mention bellowed.</p>
<h4 id="permission-getactiveitems" tabindex="-1"><a class="header-anchor" href="#permission-getactiveitems" aria-hidden="true">#</a> Permission::getActiveItems()</h4>
<p>You can use this method for fetching all active permissions of the application.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Permission</span><span class="token punctuation">;</span>    <span class="token comment">// Import permission class at top</span>

<span class="token variable">$active_permissions</span> <span class="token operator">=</span> <span class="token class-name static-context">Permission</span><span class="token operator">::</span><span class="token function">getActiveItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="permission-syncpermissionswithroles" tabindex="-1"><a class="header-anchor" href="#permission-syncpermissionswithroles" aria-hidden="true">#</a> Permission::syncPermissionsWithRoles()</h4>
<p>You can use this method for sync permissions with roles. After creating a new permission you have to call this method to sync permissions count with roles.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Permission</span><span class="token punctuation">;</span>  <span class="token comment">// Import Role class at the top</span>

<span class="token class-name static-context">Permission</span><span class="token operator">::</span><span class="token function">syncPermissionsWithRoles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="permission-getpermissionroles-id" tabindex="-1"><a class="header-anchor" href="#permission-getpermissionroles-id" aria-hidden="true">#</a> Permission::getPermissionRoles($id)</h4>
<p>You can use this method to retrieve roles that are associated with this permission.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Permission</span><span class="token punctuation">;</span>  <span class="token comment">// Import Role class at the top</span>

<span class="token class-name static-context">Permission</span><span class="token operator">::</span><span class="token function">getPermissionRoles</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// Permission ID must be provided as parameters.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>VaahCMS has APIs for every method, allowing you to interact with <code v-pre>NuxJS</code> or other frameworks.</p>
<p>You can access APIs method from <code v-pre>vaachms/Http/Controllers/Api/PermissionsController.php</code> and routes from <code v-pre>vaahcms/Routes/api/api-routes-permissions.php</code></p>
<p>We mention some methods bellow which help you to understand the structure.</p>
<h4 id="fetch-permissions" tabindex="-1"><a class="header-anchor" href="#fetch-permissions" aria-hidden="true">#</a> Fetch Permissions</h4>
<h5 id="method-get" tabindex="-1"><a class="header-anchor" href="#method-get" aria-hidden="true">#</a> Method: <code v-pre>GET</code></h5>
<h5 id="action-permissionscontroller-getlist" tabindex="-1"><a class="header-anchor" href="#action-permissionscontroller-getlist" aria-hidden="true">#</a> Action: <code v-pre>PermissionsController@getList</code></h5>
<h5 id="url-public-url-api-vaah-permissions" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-vaah-permissions" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/vaah/permissions/</code></h5>
<h4 id="sample-axios-request" tabindex="-1"><a class="header-anchor" href="#sample-axios-request" aria-hidden="true">#</a> Sample Axios Request</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">async</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token function">vaah</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ajax_url<span class="token punctuation">,</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>afterGetList<span class="token punctuation">,</span>
        options
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token keyword">async</span> <span class="token function">getListAfter</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sample-laravel-request" tabindex="-1"><a class="header-anchor" href="#sample-laravel-request" aria-hidden="true">#</a> Sample Laravel Request</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'filter'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'q'</span>            <span class="token comment">// for search queary (optionl)</span>
        <span class="token string single-quoted-string">'trashed'</span>      <span class="token comment">// for include or exclude trashed data (optionl)</span>
        <span class="token string single-quoted-string">'is_active'</span>    <span class="token comment">// for fetching only active or inactive data (optionl)</span>
        <span class="token string single-quoted-string">'sort'</span>         <span class="token comment">// for sorting the data (optionl)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>  
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sample-response" tabindex="-1"><a class="header-anchor" href="#sample-response" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="delete-permission" tabindex="-1"><a class="header-anchor" href="#delete-permission" aria-hidden="true">#</a> Delete Permission</h4>
<h6 id="method-delete" tabindex="-1"><a class="header-anchor" href="#method-delete" aria-hidden="true">#</a> Method: <code v-pre>DELETE</code></h6>
<h6 id="action-permissionscontroller-deleteitem" tabindex="-1"><a class="header-anchor" href="#action-permissionscontroller-deleteitem" aria-hidden="true">#</a> Action: <code v-pre>PermissionsController@deleteItem</code></h6>
<h6 id="url-public-url-api-vaah-permissions-id" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-vaah-permissions-id" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/vaah/permissions/{id}</code></h6>
<h5 id="sample-response-1" tabindex="-1"><a class="header-anchor" href="#sample-response-1" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"Action was successful."</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="fetch-single-permission" tabindex="-1"><a class="header-anchor" href="#fetch-single-permission" aria-hidden="true">#</a> Fetch single Permission</h4>
<h6 id="method-get-1" tabindex="-1"><a class="header-anchor" href="#method-get-1" aria-hidden="true">#</a> Method: <code v-pre>GET</code></h6>
<h6 id="action-permissionscontroller-getitem-id" tabindex="-1"><a class="header-anchor" href="#action-permissionscontroller-getitem-id" aria-hidden="true">#</a> Action: <code v-pre>PermissionsController@getItem($id)</code></h6>
<h6 id="url-public-url-api-vaah-permissions-id-1" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-vaah-permissions-id-1" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/vaah/permissions/{id}</code></h6>
<h4 id="sample-axios-request-1" tabindex="-1"><a class="header-anchor" href="#sample-axios-request-1" aria-hidden="true">#</a> Sample Axios Request</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
 <span class="token keyword">async</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span>
            ajax_url<span class="token operator">+</span><span class="token string">'/'</span><span class="token operator">+</span>id<span class="token punctuation">,</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>getItemAfter
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
 
<span class="token keyword">async</span> <span class="token function">afterGetItem</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'permissions.index'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getFormMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sample-response-2" tabindex="-1"><a class="header-anchor" href="#sample-response-2" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


