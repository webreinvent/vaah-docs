<template><div><h1 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles</h1>
<p>A role represents a group of tasks that a user that is assigned the role is allowed to perform. For example, the system administrator can be regarded as the owner of the system and as such, is permitted to perform all the tasks in the system. He/she can create users, delete and edit products, etc.</p>
<hr>
<h5 id="default-roles" tabindex="-1"><a class="header-anchor" href="#default-roles" aria-hidden="true">#</a> Default Roles</h5>
<p>These roles are created through seeds while setup a project.</p>
<table>
<thead>
<tr>
<th>Field Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Administrator</td>
<td>Users who have admin roles has all the permission access and manage the data.Somebody who has access to all the administration features within a single site</td>
</tr>
<tr>
<td>Manager</td>
<td>Users who have manage roles can assign a role to user.</td>
</tr>
<tr>
<td>Registered</td>
<td>Users who have registered roles can access only public website.</td>
</tr>
</tbody>
</table>
<hr>
<h5 id="create-a-role" tabindex="-1"><a class="header-anchor" href="#create-a-role" aria-hidden="true">#</a> Create a Role</h5>
<p>Roles can be created in following ways:-</p>
<h5 id="manually" tabindex="-1"><a class="header-anchor" href="#manually" aria-hidden="true">#</a> Manually:</h5>
<p>User can create a role directly from the Role Section in User &amp; Access.</p>
<img :src="$withBase('/images/role-1.png')" alt="role1">
<h5 id="create-a-roles-via-vaahseeder" tabindex="-1"><a class="header-anchor" href="#create-a-roles-via-vaahseeder" aria-hidden="true">#</a> Create a Roles via VaahSeeder</h5>
<p>User can create a role through seeds. Create a json file of name <code v-pre>roles.json</code> at <code v-pre>.../VaahCms/Modules/{module_name}&gt;/Database/Seeds/json/</code> this directory.</p>
<p><code v-pre>roles.json</code></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>

    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Clients"</span><span class="token punctuation">,</span>
        <span class="token property">"details"</span><span class="token operator">:</span> <span class="token string">"Can login to backend dashboard"</span>       
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Customers"</span><span class="token punctuation">,</span>
        <span class="token property">"details"</span><span class="token operator">:</span> <span class="token string">"Frontend user to manage account"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To run this seed, you have to add some code in <code v-pre>DatabaseTableSeeder.php</code> at <code v-pre>.../VaahCms/Modules/{module_name}&gt;/Database/Seeds/</code> this directory.</p>
<p>DatabaseTableSeeder.php</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> VaahCms\Modules\<span class="token punctuation">{</span>module_name<span class="token punctuation">}</span>\Database\Seeds<span class="token punctuation">;</span>


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
        <span class="token class-name static-context">VaahSeeder</span><span class="token operator">::</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token operator">.</span><span class="token string single-quoted-string">'/json/roles.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h5 id="manage-users" tabindex="-1"><a class="header-anchor" href="#manage-users" aria-hidden="true">#</a> Manage Users</h5>
<p>You can assign roles to a user in <code v-pre>Roles</code> section. By clicking on <code v-pre>User</code> column, a page will open that contain list of Users along with <code v-pre>Yes/No</code> Button.</p>
<img :src="$withBase('/images/role-2.png')" alt="role-2">
<hr>
<h5 id="manage-permission" tabindex="-1"><a class="header-anchor" href="#manage-permission" aria-hidden="true">#</a> Manage Permission</h5>
<p>You can add permissions in a role in <code v-pre>Roles</code> section. By clicking on <code v-pre>Permission</code> column, a page will open that contain list of Permissions along with <code v-pre>Yes/No</code> Button.</p>
<img :src="$withBase('/images/role-3.png')" alt="role-3">
<hr>
<p>VaahCms provide a method to check the User's permission.</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'administrator'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


