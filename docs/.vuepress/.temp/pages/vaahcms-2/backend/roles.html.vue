<template><div><h1 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles</h1>
<nav class="table-of-contents"><ul><li><router-link to="#purpose">Purpose</router-link></li><li><router-link to="#features-demos">Features &amp; Demos</router-link></li><li><router-link to="#permissions">Permissions</router-link></li><li><router-link to="#files">Files</router-link></li><li><router-link to="#methods">Methods</router-link></li><li><router-link to="#api">API</router-link></li></ul></nav>
<h2 id="purpose" tabindex="-1"><a class="header-anchor" href="#purpose" aria-hidden="true">#</a> Purpose</h2>
<p>A role is a group of permissions that allow a user who has been given the role to carry out specific actions. For instance, the super administrator, who can be regarded as the application's owner, is permitted to carry out all tasks in the application. They can add users, remove or edit, and do other things.</p>
<h2 id="features-demos" tabindex="-1"><a class="header-anchor" href="#features-demos" aria-hidden="true">#</a> Features &amp; Demos</h2>
<h4 id="default-roles" tabindex="-1"><a class="header-anchor" href="#default-roles" aria-hidden="true">#</a> Default Roles</h4>
<p>VaahCMS gave you a few default roles that it built during application setup using seeds.</p>
<table>
<thead>
<tr>
<th>Roles</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Super Administrator</td>
<td>The application's owner is super administrator. Users with super administrator privileges have full access and control over the data and application.</td>
</tr>
<tr>
<td>Administrator</td>
<td>Users who have administration roles has all the permissions access and manage the data. Somebody who has access to all the administration features within the application.</td>
</tr>
<tr>
<td>Manager</td>
<td>Users who have manage roles can assign a role to user.</td>
</tr>
<tr>
<td>Editor</td>
<td>Somebody who can publish and manage posts from the <code v-pre>CMS</code> section including the posts of other users.</td>
</tr>
<tr>
<td>Contributor</td>
<td>Somebody who can write and manage their own posts but cannot publish them.</td>
</tr>
<tr>
<td>Registered</td>
<td>Users who have registered roles can access only public pages.</td>
</tr>
<tr>
<td>Guest</td>
<td>Users who have guest roles can access only public pages.</td>
</tr>
</tbody>
</table>
<hr>
<h4 id="create-new-role" tabindex="-1"><a class="header-anchor" href="#create-new-role" aria-hidden="true">#</a> Create New Role</h4>
<p>You can view the video attached below to learn how to create a new role.</p>
<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_qDABg3eqi2.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="assign-permission-to-roles" tabindex="-1"><a class="header-anchor" href="#assign-permission-to-roles" aria-hidden="true">#</a> Assign Permission to Roles</h4>
<p>You can view the video attached below to learn how to add permission to a role.</p>
<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_S5yeP8t3QQ.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h4 id="assign-roles-to-user" tabindex="-1"><a class="header-anchor" href="#assign-roles-to-user" aria-hidden="true">#</a> Assign Roles to User</h4>
<p>You can view the video attached below to learn how to give a role to a user.</p>
<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_EiAGS8V1Y5.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h2 id="permissions" tabindex="-1"><a class="header-anchor" href="#permissions" aria-hidden="true">#</a> Permissions</h2>
<p>The following permissions are necessary for roles management in order to carry out certain actions.</p>
<table>
<thead>
<tr>
<th>Permissions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Can Manage Roles</td>
<td>This permission enables roles to manage other roles. The user can activate, deactivate, update or delete a role with this access.</td>
</tr>
<tr>
<td>Can Delete Roles</td>
<td>This permission grants roles access to delete a role.</td>
</tr>
<tr>
<td>Can Update Roles</td>
<td>This permission grants roles to update details of a role.</td>
</tr>
<tr>
<td>Can Read Roles</td>
<td>This permission grants roles to  read all listed roles of the application.</td>
</tr>
<tr>
<td>Can Create Roles</td>
<td>This permission grant roles to create a new role for the application.</td>
</tr>
<tr>
<td>Has Access Of Roles Section</td>
<td>This permission grant roles to access of the roles section in the side nav bar of the application.</td>
</tr>
</tbody>
</table>
<h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h2>
<ul>
<li>Laravel Route: <code v-pre>vaahcms/Routes/backend/route-roles.php</code></li>
<li>Laravel Controller: <code v-pre>vaahcms/Http/Controllers/Backend/RolesController.php</code></li>
<li>Laravel Model: <code v-pre>vaahcms/Models/Role.php</code></li>
<li>Vue Route: <code v-pre>vaahcms/Vue/routes/vue-routes-roles.js</code></li>
<li>Vue Store: <code v-pre>vaahcms/Vue/stores/store-roles.js</code></li>
<li>Vue Page Directory: <code v-pre>vaahcms/Vue/pages/roles</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<p>Some reusable methods mention bellowed.</p>
<h4 id="role-getactiveroles" tabindex="-1"><a class="header-anchor" href="#role-getactiveroles" aria-hidden="true">#</a> Role::getActiveRoles()</h4>
<p>You can use this method for fetching all active roles of the application.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Role</span><span class="token punctuation">;</span>  <span class="token comment">// Import Role class at the top</span>

<span class="token variable">$active_roles</span> <span class="token operator">=</span> <span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token function">getActiveRoles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="role-countusers-id" tabindex="-1"><a class="header-anchor" href="#role-countusers-id" aria-hidden="true">#</a> Role::countUsers($id)</h4>
<p>You can use this method for count users of a role.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Role</span><span class="token punctuation">;</span>  <span class="token comment">// Import Role class at the top</span>

<span class="token variable">$count_users</span> <span class="token operator">=</span> <span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token function">countUsers</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Role ID must be provided as parameters.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="role-countpermissions-id" tabindex="-1"><a class="header-anchor" href="#role-countpermissions-id" aria-hidden="true">#</a> Role::countPermissions($id)</h4>
<p>You can use this method for count permissions of a role.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Role</span><span class="token punctuation">;</span>  <span class="token comment">// Import Role class at the top</span>

<span class="token variable">$count_permissions</span> <span class="token operator">=</span> <span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token function">countPermissions</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Role ID must be provided as parameters.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="role-syncroleswithusers" tabindex="-1"><a class="header-anchor" href="#role-syncroleswithusers" aria-hidden="true">#</a> Role::syncRolesWithUsers();</h4>
<p>You can use this method for sync roles with users. After creating a new role you have to call this method to sync role count with users.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">WebReinvent<span class="token punctuation">\</span>VaahCms<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Role</span><span class="token punctuation">;</span>  <span class="token comment">// Import Role class at the top</span>

<span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token function">syncRolesWithUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>VaahCMS provide a method to check the user's role.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'administrator'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//write your logic here</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>VaahCMS has APIs for every method, allowing you to interact with <code v-pre>NuxJS</code> or other frameworks.</p>
<p>You can access APIs method from <code v-pre>vaachms/Http/Controllers/Api/RolesController.php</code> and routes from <code v-pre>vaahcms/Routes/api/api-routes-roles.php</code></p>
<p>We mention some methods bellow which help you to understand the structure.</p>
<h4 id="create-role" tabindex="-1"><a class="header-anchor" href="#create-role" aria-hidden="true">#</a> Create Role</h4>
<h5 id="method-post" tabindex="-1"><a class="header-anchor" href="#method-post" aria-hidden="true">#</a> Method: <code v-pre>POST</code></h5>
<h5 id="action-creatitem" tabindex="-1"><a class="header-anchor" href="#action-creatitem" aria-hidden="true">#</a> Action: <code v-pre>creatItem</code></h5>
<h5 id="url-public-url-api-role-roles" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-role-roles" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/role/roles/</code></h5>
<h5 id="sample-request" tabindex="-1"><a class="header-anchor" href="#sample-request" aria-hidden="true">#</a> Sample Request</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'name'</span><span class="token punctuation">,</span>           <span class="token comment">//required</span>
    <span class="token string single-quoted-string">'slug'</span><span class="token punctuation">,</span>           <span class="token comment">//required</span>
    <span class="token string single-quoted-string">'detalis'</span><span class="token punctuation">,</span>        <span class="token comment">//required</span>
    <span class="token string single-quoted-string">'is_active'</span>       <span class="token comment">//required</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sample-response" tabindex="-1"><a class="header-anchor" href="#sample-response" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      .............
      .............
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"Saved successfully."</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token string">"true"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="fetch-roles" tabindex="-1"><a class="header-anchor" href="#fetch-roles" aria-hidden="true">#</a> Fetch Roles</h4>
<h6 id="method-get" tabindex="-1"><a class="header-anchor" href="#method-get" aria-hidden="true">#</a> Method: <code v-pre>GET</code></h6>
<h6 id="action-getlist" tabindex="-1"><a class="header-anchor" href="#action-getlist" aria-hidden="true">#</a> Action: <code v-pre>getList</code></h6>
<h6 id="url-public-url-api-role-roles-1" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-role-roles-1" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/role/roles/</code></h6>
<h5 id="sample-request-1" tabindex="-1"><a class="header-anchor" href="#sample-request-1" aria-hidden="true">#</a> Sample Request</h5>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code>parameter <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'filter'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'q'</span>            <span class="token comment">// for search queary (optionl)</span>
        <span class="token string single-quoted-string">'trashed'</span>      <span class="token comment">// for include or exclude trashed data (optionl)</span>
        <span class="token string single-quoted-string">'is_active'</span>    <span class="token comment">// for fetching only active or inactive data (optionl)</span>
        <span class="token string single-quoted-string">'sort'</span>         <span class="token comment">// for sorting the data (optionl)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>  
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="sample-response-1" tabindex="-1"><a class="header-anchor" href="#sample-response-1" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      .............
      .............
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
  <span class="token property">"totalPermissions"</span> <span class="token operator">:</span> <span class="token string">"// count of total permissions of the application "</span><span class="token punctuation">,</span>
  <span class="token property">"totalUsers"</span> <span class="token operator">:</span> <span class="token string">"// count of total users of the application "</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="fetch-single-role" tabindex="-1"><a class="header-anchor" href="#fetch-single-role" aria-hidden="true">#</a> Fetch single role</h4>
<h6 id="method-get-1" tabindex="-1"><a class="header-anchor" href="#method-get-1" aria-hidden="true">#</a> Method: <code v-pre>GET</code></h6>
<h6 id="action-getitem-id" tabindex="-1"><a class="header-anchor" href="#action-getitem-id" aria-hidden="true">#</a> Action: <code v-pre>getItem($id)</code></h6>
<h6 id="url-public-url-api-role-roles-id" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-role-roles-id" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/role/roles/{id}</code></h6>
<h5 id="sample-response-2" tabindex="-1"><a class="header-anchor" href="#sample-response-2" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      .............
      .............
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token string">"true"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="delete-role" tabindex="-1"><a class="header-anchor" href="#delete-role" aria-hidden="true">#</a> Delete Role</h4>
<h6 id="method-delete" tabindex="-1"><a class="header-anchor" href="#method-delete" aria-hidden="true">#</a> Method: <code v-pre>DELETE</code></h6>
<h6 id="action-delete" tabindex="-1"><a class="header-anchor" href="#action-delete" aria-hidden="true">#</a> Action: <code v-pre>delete</code></h6>
<h6 id="url-public-url-api-role-roles-id-1" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-role-roles-id-1" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/role/roles/{id}</code></h6>
<h5 id="sample-response-3" tabindex="-1"><a class="header-anchor" href="#sample-response-3" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"vaahcms-general.action_successful"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token string">"true"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


