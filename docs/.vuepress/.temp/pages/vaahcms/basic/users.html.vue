<template><div><h1 id="users" tabindex="-1"><a class="header-anchor" href="#users" aria-hidden="true">#</a> Users</h1>
<p>User Management is a system for authenticating users and storing user data. As of now, VaahCms has two Login option: <code v-pre>Login via Password</code> and <code v-pre>Login via OTP</code>. In <code v-pre>VaahCms</code>, you can manage all aspects of your user accounts such as changing user properties, reset passwords, enable or disable users, and more.</p>
<p>Visit following url you will see the Users section:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;project-url>/backend#/vaah/users/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img :src="$withBase('/images/user-1.png')" alt="user1">
<hr>
<h5 id="user-listing" tabindex="-1"><a class="header-anchor" href="#user-listing" aria-hidden="true">#</a> User Listing</h5>
<p>Get a list of all your users, and their data in one place. The Users table contains all of your user data and the <code v-pre>VaahCms</code> puts all user management functions right at your fingertips. You have the ability to <code v-pre>add</code>, <code v-pre>edit</code>, and <code v-pre>delete</code> users. You can also <code v-pre>search</code>, <code v-pre>sort</code>, and <code v-pre>filter</code> your user data and modify user information and <code v-pre>roles</code>, all in the same place.</p>
<img :src="$withBase('/images/user-2.png')" alt="user2">
<hr>
<h5 id="create-new-users" tabindex="-1"><a class="header-anchor" href="#create-new-users" aria-hidden="true">#</a> Create New Users</h5>
<p>You can create new user accounts within your app in <code v-pre>Users</code> section. <code v-pre>VaahCms</code> give you total control over how users get created. You decide the level of access they receive within your app.</p>
<img :src="$withBase('/images/user-3.png')" alt="user3">
<hr>
<h5 id="password-reset" tabindex="-1"><a class="header-anchor" href="#password-reset" aria-hidden="true">#</a> Password Reset</h5>
<p>Your users need the ability to change their password without contacting you, the <code v-pre>Administrator</code>. Don’t waste time manually assisting users that lose or forget their password. If you need to handle a password change yourself, you can do it from Backend.</p>
<img :src="$withBase('/images/user-4.png')" alt="user4">
<hr>
<h5 id="manage-roles" tabindex="-1"><a class="header-anchor" href="#manage-roles" aria-hidden="true">#</a> Manage Roles</h5>
<p>You can assign roles to a user in <code v-pre>Users</code> section. By clicking on <code v-pre>Role</code> column, a page will open that contain list of Roles along with <code v-pre>Yes/No</code> Button.</p>
<img :src="$withBase('/images/user-5.png')" alt="user1">
<hr>
<h5 id="available-methods" tabindex="-1"><a class="header-anchor" href="#available-methods" aria-hidden="true">#</a> Available Methods</h5>
<hr>
<h6 id="accessors" tabindex="-1"><a class="header-anchor" href="#accessors" aria-hidden="true">#</a> Accessors</h6>
<p>To know about <code v-pre>Accessors</code>, see <a href="https://laravel.com/docs/8.x/eloquent-mutators#defining-an-accessor" target="_blank" rel="noopener noreferrer">Laravel Documentation<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>getAvatarAttribute</td>
<td>Get value of <code v-pre>avatar_url</code> column from database or <code v-pre>Gravatar</code> url. To know about Gravatar, <a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">click here<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>getMetaAttribute</td>
<td>Get value of <code v-pre>meta</code> column in JSON</td>
</tr>
<tr>
<td>getNameAttribute</td>
<td>Get value of <code v-pre>display_name</code> column or joined string of <code v-pre>first_name</code>, <code v-pre>middle_name</code> and <code v-pre>last_name</code> column from database.</td>
</tr>
</tbody>
</table>
<hr>
<h6 id="mutators" tabindex="-1"><a class="header-anchor" href="#mutators" aria-hidden="true">#</a> Mutators</h6>
<p>To know about <code v-pre>Mutators</code>, see <a href="https://laravel.com/docs/8.x/eloquent-mutators#defining-a-mutator" target="_blank" rel="noopener noreferrer">Laravel Documentation<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>setMetaAttribute</td>
<td><code v-pre>$value</code></td>
<td>Set json encoded value in <code v-pre>meta</code> column</td>
</tr>
<tr>
<td>setFirstNameAttribute</td>
<td><code v-pre>$value</code></td>
<td>Set first character of First Name capitalized</td>
</tr>
<tr>
<td>setMiddleNameAttribute</td>
<td><code v-pre>$value</code></td>
<td>Set first character of Middle Name capitalized</td>
</tr>
<tr>
<td>setLastNameAttribute</td>
<td><code v-pre>$value</code></td>
<td>Set first character of Last Name capitalized</td>
</tr>
<tr>
<td>setPasswordAttribute</td>
<td><code v-pre>$value</code></td>
<td>Hashing of Password. <code v-pre>prevent_password_attr_set</code> This variable is defined to ignore this mutator.</td>
</tr>
<tr>
<td>setLoginOtpAttribute</td>
<td><code v-pre>$value</code></td>
<td>Hashing of Login OTP code</td>
</tr>
</tbody>
</table>
<hr>
<h6 id="scopes" tabindex="-1"><a class="header-anchor" href="#scopes" aria-hidden="true">#</a> Scopes</h6>
<p>To know about <code v-pre>Scopes</code>, see <a href="https://laravel.com/docs/8.x/eloquent#dynamic-scopes" target="_blank" rel="noopener noreferrer">Laravel Documentation<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>scopeIsActive</td>
<td><code v-pre>$query</code></td>
<td>Return Active User (is-active == 1)</td>
</tr>
<tr>
<td>scopeBetweenDates</td>
<td><code v-pre>$query</code>  <code v-pre>$from</code>  <code v-pre>$to</code></td>
<td>Return User which is created between <code v-pre>$from</code> date &amp; <code v-pre>$to</code> date</td>
</tr>
<tr>
<td>scopeExclude</td>
<td><code v-pre>$query</code>  <code v-pre>$columns</code></td>
<td>The array in <code v-pre>$columns</code> parameter is exclude from select query.</td>
</tr>
</tbody>
</table>
<hr>
<h6 id="relationships" tabindex="-1"><a class="header-anchor" href="#relationships" aria-hidden="true">#</a> Relationships</h6>
<p>To know about <code v-pre>Relationships</code>, see <a href="https://laravel.com/docs/8.x/eloquent-relationships#defining-relationships" target="_blank" rel="noopener noreferrer">Laravel Documentation<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>createdByUser</td>
<td>Return data of <code v-pre>User</code> model that has an id which matches the <code v-pre>created_by</code> column of User.</td>
</tr>
<tr>
<td>updatedByUser</td>
<td>Return data of <code v-pre>User</code> model that has an id which matches the <code v-pre>updated_by</code> column of User.</td>
</tr>
<tr>
<td>deletedByUser</td>
<td>Return data of <code v-pre>User</code> model that has an id which matches the <code v-pre>deleted_by</code> column of User.</td>
</tr>
<tr>
<td>roles</td>
<td>Return data of <code v-pre>Role</code> model with <code v-pre>Pivot</code> that is assigned to Users.</td>
</tr>
</tbody>
</table>
<hr>
<h6 id="non-static" tabindex="-1"><a class="header-anchor" href="#non-static" aria-hidden="true">#</a> Non Static</h6>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>getTableColumns</td>
<td></td>
<td>Get array of all columns name in User table.</td>
</tr>
<tr>
<td>getFormFillableColumns</td>
<td></td>
<td>Get array of some column name in User table.</td>
</tr>
<tr>
<td>activeRoles</td>
<td></td>
<td>Return active Roles of User.</td>
</tr>
<tr>
<td>hasRole</td>
<td><code v-pre>$role_slug</code></td>
<td>Return <code v-pre>true</code> if role in <code v-pre>$role_slug</code> is active.</td>
</tr>
<tr>
<td>isAdmin</td>
<td></td>
<td>Return <code v-pre>true</code> if <code v-pre>Administrator</code> role is active.</td>
</tr>
<tr>
<td>hasPermission</td>
<td><code v-pre>$permission_slug</code>  <code v-pre>$details</code></td>
<td>Return <code v-pre>true</code> if permission in <code v-pre>$permission_slug</code> is active and their associated role is active.</td>
</tr>
</tbody>
</table>
<hr>
<h6 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> Static</h6>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>findByUsername</td>
<td><code v-pre>$username</code>  <code v-pre>$columns = array('*')</code></td>
<td>The <code v-pre>findByUsername</code> method find users only by the <code v-pre>username</code> and return given columns.</td>
</tr>
<tr>
<td>findByEmail</td>
<td><code v-pre>$email</code>  <code v-pre>$columns = array('*')</code></td>
<td>The <code v-pre>findByEmail</code> method find users only by the <code v-pre>email</code> and return given columns.</td>
</tr>
<tr>
<td>countAdministrators</td>
<td></td>
<td>The <code v-pre>countAdministrators</code> method return number of users which has <code v-pre>Administrator</code> role.</td>
</tr>
<tr>
<td>getByRoles</td>
<td><code v-pre>$array_role_slugs</code></td>
<td>The <code v-pre>getByRoles</code> method return a list of the users which has a role exists in <code v-pre>$array_role_slugs</code>.</td>
</tr>
<tr>
<td>getByRolesOnlyIds</td>
<td><code v-pre>$array_role_slugs</code></td>
<td>The <code v-pre>getByRolesOnlyIds</code> method return only <code v-pre>id</code> of the users which has a role exists in <code v-pre>$array_role_slugs</code>.</td>
</tr>
<tr>
<td>getByRolesOnlyEmails</td>
<td><code v-pre>$array_role_slugs</code></td>
<td>The <code v-pre>getByRolesOnlyEmails</code> method return only <code v-pre>email</code> of the users which has a role exists in <code v-pre>$array_role_slugs</code>.</td>
</tr>
<tr>
<td>rulesAdminCreate</td>
<td></td>
<td>The <code v-pre>rulesAdminCreate</code> method return the array of validation rules for User.</td>
</tr>
<tr>
<td>isLastAdmin</td>
<td></td>
<td>The <code v-pre>isLastAdmin</code> method return <code v-pre>true</code> if Application has only one User of Administrator role.</td>
</tr>
<tr>
<td>getAvatarById</td>
<td><code v-pre>$id</code></td>
<td>The <code v-pre>getAvatarById</code> method find users only by the <code v-pre>id</code> and return avatar url.</td>
</tr>
<tr>
<td>getUsersForAssets</td>
<td></td>
<td>The <code v-pre>getUsersForAssets</code> method return list of <code v-pre>active</code> users with following columns: <code v-pre>id</code>, <code v-pre>first_name</code>, <code v-pre>middle_name</code>, <code v-pre>last_name</code></td>
</tr>
</tbody>
</table>
<ul>
<li><a href="#create"># create</a></li>
<li><a href="#poststore"># postStore</a></li>
<li><a href="#validation"># validation</a></li>
<li><a href="#getlist"># getList</a></li>
<li><a href="#getitem"># getItem</a></li>
<li><a href="#getitemroles"># getItemRoles</a></li>
<li><a href="#bulkstatuschange"># bulkStatusChange</a></li>
<li><a href="#bulktrash"># bulkTrash</a></li>
</ul>
<hr>
<h6 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h6>
<p><strong>Parameters:</strong> <code v-pre>$request</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">'new_item'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">'alternate_email'</span>       <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'avatar_url'</span>            <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'bio'</span>                   <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'birth'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'country'</span>               <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'country_calling_code'</span>  <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'country_code'</span>          <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'designation'</span>           <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'display_name'</span>          <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'email'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
                    <span class="token string single-quoted-string">'first_name'</span>            <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
                    <span class="token string single-quoted-string">'gender'</span>                <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'is_active'</span>             <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required       //true:false:0:1</span>
                    <span class="token string single-quoted-string">'last_name'</span>             <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'middle_name'</span>           <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'password'</span>              <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'phone'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'status'</span>                <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required       //active:inactive</span>
                    <span class="token string single-quoted-string">'timezone'</span>              <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'title'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'username'</span>              <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'website'</span>               <span class="token operator">=></span> <span class="token constant">null</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Creates a new user for the database on which the method is run. <code v-pre>\WebReinvent\VaahCms\Entities\User::create($request);</code> returns a duplicate user error if the email already exists in the <code v-pre>User</code> table.</p>
<hr>
<h6 id="poststore" tabindex="-1"><a class="header-anchor" href="#poststore" aria-hidden="true">#</a> postStore</h6>
<p><strong>Parameters:</strong> <code v-pre>$request</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">'new_item'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">'alternate_email'</span>       <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'avatar_url'</span>            <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'bio'</span>                   <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'birth'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'country'</span>               <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'country_calling_code'</span>  <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'country_code'</span>          <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'designation'</span>           <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'display_name'</span>          <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'email'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
                    <span class="token string single-quoted-string">'first_name'</span>            <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
                    <span class="token string single-quoted-string">'gender'</span>                <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'id'</span>                    <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
                    <span class="token string single-quoted-string">'is_active'</span>             <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required       //true:false:0:1</span>
                    <span class="token string single-quoted-string">'last_name'</span>             <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'middle_name'</span>           <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'password'</span>              <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'phone'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'status'</span>                <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required       //active:inactive</span>
                    <span class="token string single-quoted-string">'timezone'</span>              <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'title'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'username'</span>              <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">'website'</span>               <span class="token operator">=></span> <span class="token constant">null</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Update an existing user in the database. <code v-pre>\WebReinvent\VaahCms\Entities\User::postStore($request);</code> returns a duplicate user error if the updated email id already exists in the <code v-pre>User</code> table.</p>
<hr>
<h6 id="validation" tabindex="-1"><a class="header-anchor" href="#validation" aria-hidden="true">#</a> validation</h6>
<p><strong>Parameters:</strong> <code v-pre>$inputs</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$input</span> <span class="token operator">=</span>  <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">'email'</span>                 <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
                    <span class="token string single-quoted-string">'first_name'</span>            <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
                    <span class="token string single-quoted-string">'is_active'</span>             <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required       //true:false:0:1</span>
                    <span class="token string single-quoted-string">'status'</span>                <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required       //active:inactive</span>
                <span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a method for validate user's following columns: <code v-pre>email</code>, <code v-pre>first_name</code>, <code v-pre>is_active</code>, <code v-pre>status</code> which use Laravel Validator.</p>
<hr>
<h6 id="getlist" tabindex="-1"><a class="header-anchor" href="#getlist" aria-hidden="true">#</a> getList</h6>
<p><strong>Parameters:</strong> <code v-pre>$request</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">'new_item'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">'page'</span>          <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>        <span class="token comment">// 1,2,3,4.....</span>
                    <span class="token string single-quoted-string">'q'</span>             <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>        <span class="token comment">// search_input</span>
                    <span class="token string single-quoted-string">'trashed'</span>       <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>        <span class="token comment">// true,false</span>
                    <span class="token string single-quoted-string">'status'</span>        <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>        <span class="token comment">// 01,10</span>
                    <span class="token string single-quoted-string">'from'</span>          <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>        <span class="token comment">// date</span>
                    <span class="token string single-quoted-string">'to'</span>            <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>        <span class="token comment">// date</span>
                    <span class="token string single-quoted-string">'roles'</span>         <span class="token operator">=></span> <span class="token punctuation">[</span>
                        <span class="token string double-quoted-string">"administrator"</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This <code v-pre>getList</code> method that returns a list of Users, total number of roles in <code v-pre>vh_roles</code> table and status of method. The list of User are <code v-pre>Paginated.</code> There is one parameter <code v-pre>$request</code> which has following values:</p>
<ul>
<li><strong>page:</strong> This contain numbers which is used to get data of that page number in pagination.</li>
<li><strong>q:</strong> This contain string which is used to search in <code v-pre>vh_users</code> table by <code v-pre>id</code>, <code v-pre>email</code>, <code v-pre>first_name</code>, <code v-pre>middle_name</code>, <code v-pre>last_name</code></li>
<li><strong>trashed:</strong> This contain boolean values. If trashed value is true, it will return list of all Users including trashed User.</li>
<li><strong>status:</strong> This contain string. If status value is 01, it will return list of all Active Users.</li>
<li><strong>from,to:</strong> Both contain date. If there value is set, it will return list of Users who is created in between these dates.</li>
<li><strong>roles:</strong> This contain array of role slug. If there is some role in this array, it will return list of Users who has that role.</li>
</ul>
<hr>
<h6 id="getitem" tabindex="-1"><a class="header-anchor" href="#getitem" aria-hidden="true">#</a> getItem</h6>
<p><strong>Parameters:</strong> <code v-pre>$id</code></p>
<p>This <code v-pre>getItem</code> method find user only by the <code v-pre>id</code> and relation with <code v-pre>createdByUser</code>. <code v-pre>updatedByUser</code>. <code v-pre>deletedByUser</code> method. If someone is logged in and that user has <code v-pre>can-see-users-contact-details</code> permission then you will get some extra columns: <code v-pre>email</code>, <code v-pre>alternate_email</code>, <code v-pre>phone</code></p>
<hr>
<h6 id="getitemroles" tabindex="-1"><a class="header-anchor" href="#getitemroles" aria-hidden="true">#</a> getItemRoles</h6>
<p><strong>Parameters:</strong> <code v-pre>$request</code>, <code v-pre>$id</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">'page'</span>          <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>        <span class="token comment">// 1,2,3,4.....</span>
                <span class="token string single-quoted-string">'q'</span>             <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>        <span class="token comment">// search_input</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This <code v-pre>getItemRoles</code> method find user by the <code v-pre>id</code> and get the list of their associated roles. There is a parameter <code v-pre>$request</code> which has following values:</p>
<ul>
<li><strong>page:</strong> This contain numbers which is used to get data of that page number in pagination.</li>
<li><strong>q:</strong> This contain string which is used to search in <code v-pre>vh_roles</code> table by <code v-pre>name</code>, <code v-pre>slug</code>.</li>
</ul>
<hr>
<h6 id="bulkstatuschange" tabindex="-1"><a class="header-anchor" href="#bulkstatuschange" aria-hidden="true">#</a> bulkStatusChange</h6>
<p><strong>Parameters:</strong> <code v-pre>$request</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code> <span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">"inputs"</span> <span class="token operator">=></span>  <span class="token punctuation">[</span>
                    <span class="token number">0</span> <span class="token operator">=></span> <span class="token number">1</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"data"</span> <span class="token operator">=></span>  <span class="token punctuation">[</span>
                    <span class="token string double-quoted-string">"status"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"1"</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"action"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"bulk-change-status"</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method is used to change the status of Users. There is one parameter <code v-pre>$request</code> which has following values:</p>
<ul>
<li><strong>inputs:</strong> This contain array of User's id which is used to find user by the <code v-pre>id</code> and update status.</li>
<li><strong>data:</strong> This is also a array which has one value <code v-pre>status</code>. It has new updated status of User</li>
<li><strong>action:</strong> This is a action name which is used to check restricted action.</li>
</ul>
<hr>
<h6 id="bulktrash" tabindex="-1"><a class="header-anchor" href="#bulktrash" aria-hidden="true">#</a> bulkTrash</h6>
<p><strong>Parameters:</strong> <code v-pre>$request</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code> <span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">"inputs"</span> <span class="token operator">=></span>  <span class="token punctuation">[</span>
                    <span class="token number">0</span> <span class="token operator">=></span> <span class="token number">1</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"data"</span> <span class="token operator">=></span>  <span class="token punctuation">[</span>
                    
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"action"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"bulk-trash"</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method is used to soft delete the Users. There is one parameter <code v-pre>$request</code> which has following values:</p>
<ul>
<li><strong>inputs:</strong> This contain array of User's id which is used to find user by the <code v-pre>id</code> and update status.</li>
<li><strong>data:</strong> This is also a array which has one value <code v-pre>status</code>. It has new updated status of User</li>
<li><strong>action:</strong> This is a action name which is used to check restricted action.</li>
</ul>
<hr>
<h6 id="bulkrestore" tabindex="-1"><a class="header-anchor" href="#bulkrestore" aria-hidden="true">#</a> bulkRestore</h6>
<p><strong>Parameters:</strong> <code v-pre>$request</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code> <span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">"inputs"</span> <span class="token operator">=></span>  <span class="token punctuation">[</span>
                    <span class="token number">0</span> <span class="token operator">=></span> <span class="token number">1</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"data"</span> <span class="token operator">=></span>  <span class="token punctuation">[</span>
                    
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"action"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"bulk-trash"</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method is used to restore the Users. There is one parameter <code v-pre>$request</code> which has following values:</p>
<ul>
<li><strong>inputs:</strong> This contain array of User's id which is used to find user by the <code v-pre>id</code> and update status.</li>
<li><strong>data:</strong> This is also a array which has one value <code v-pre>status</code>. It has new updated status of User</li>
<li><strong>action:</strong> This is a action name which is used to check restricted action.</li>
</ul>
<hr>
<h6 id="bulkdelete" tabindex="-1"><a class="header-anchor" href="#bulkdelete" aria-hidden="true">#</a> bulkDelete</h6>
<p><strong>Parameters:</strong> <code v-pre>$request</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code> <span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">"inputs"</span> <span class="token operator">=></span>  <span class="token punctuation">[</span>
                    <span class="token number">0</span> <span class="token operator">=></span> <span class="token number">1</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"data"</span> <span class="token operator">=></span>  <span class="token punctuation">[</span>
                    
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">"action"</span> <span class="token operator">=></span> <span class="token string double-quoted-string">"bulk-trash"</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method is used to permanently delete the Users. There is one parameter <code v-pre>$request</code> which has following values:</p>
<ul>
<li><strong>inputs:</strong> This contain array of User's id which is used to find user by the <code v-pre>id</code> and update status.</li>
<li><strong>data:</strong> This is also a array which has one value <code v-pre>status</code>. It has new updated status of User</li>
<li><strong>action:</strong> This is a action name which is used to check restricted action.</li>
</ul>
<hr>
<hr>
</div></template>


