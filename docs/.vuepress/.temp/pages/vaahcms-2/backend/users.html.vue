<template><div><h1 id="users" tabindex="-1"><a class="header-anchor" href="#users" aria-hidden="true">#</a> Users</h1>
<nav class="table-of-contents"><ul><li><router-link to="#purpose">Purpose</router-link></li><li><router-link to="#features-demos">Features &amp; Demos</router-link></li><li><router-link to="#required-user-permissions-to-access-this-section">Required User Permissions To Access This Section</router-link></li><li><router-link to="#files">Files</router-link></li><li><router-link to="#methods">Methods</router-link></li><li><router-link to="#generate-new-api-token">Generate new API Token</router-link></li><li><router-link to="#api">API</router-link></li></ul></nav>
<h2 id="purpose" tabindex="-1"><a class="header-anchor" href="#purpose" aria-hidden="true">#</a> Purpose</h2>
<p>A system for authenticating users and storing user information is called as user management. Currently, <code v-pre>VaahCMS</code> offers two login options: <code v-pre>Login via Password</code> and <code v-pre>Login via OTP</code>. You can manage every aspect of your user accounts in <code v-pre>VaahCMS</code>, including altering user properties, resetting passwords, enabling or disabling users, and more.</p>
<h2 id="features-demos" tabindex="-1"><a class="header-anchor" href="#features-demos" aria-hidden="true">#</a> Features &amp; Demos</h2>
<h5 id="user-listing" tabindex="-1"><a class="header-anchor" href="#user-listing" aria-hidden="true">#</a> User Listing</h5>
<p>Obtain a comprehensive list of all of your users, along with their associated data. All of your users' information is contained in the Users table, and the <code v-pre>VaahCMS</code> offers all users' administration tools at your fingertips. You have the ability to <code v-pre>add</code>, <code v-pre>edit</code>,  and <code v-pre>remove</code> users. Additionally, you may alter user details and <code v-pre>roles</code> at the same location where you can <code v-pre>search</code>, <code v-pre>sort</code>, and <code v-pre>filters</code> your users' data.</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_TIKvbvuNdu.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<hr>
<h5 id="create-a-user" tabindex="-1"><a class="header-anchor" href="#create-a-user" aria-hidden="true">#</a> Create a User</h5>
<p>You can view the video attached below to learn how to create a new user.</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_f9KBTI8yTZ.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<hr>
<h5 id="manage-user-roles" tabindex="-1"><a class="header-anchor" href="#manage-user-roles" aria-hidden="true">#</a> Manage User Roles</h5>
<p>You can assign roles to a user in <code v-pre>Users</code> section. By clicking on <code v-pre>Role</code> column, a page will open that contain list of Roles along with <code v-pre>Yes/No</code> Button.</p>
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_IUIS4wUJh0.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
<h2 id="required-user-permissions-to-access-this-section" tabindex="-1"><a class="header-anchor" href="#required-user-permissions-to-access-this-section" aria-hidden="true">#</a> Required User Permissions To Access This Section</h2>
<table>
<thead>
<tr>
<th>Permissions</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Has Access Of Users Section</td>
<td>This will allow user to see the link of user section.</td>
</tr>
<tr>
<td>Can Create Users</td>
<td>This will allow user to add anything in the user section.</td>
</tr>
<tr>
<td>Can Read Users</td>
<td>This will allow user to view anything in the user section.</td>
</tr>
<tr>
<td>Can Update Users</td>
<td>This will allow user to edit anything in the user section.</td>
</tr>
<tr>
<td>Can Delete Users</td>
<td>This will allow user to delete anything in the user section.</td>
</tr>
<tr>
<td>Can Manage Users</td>
<td>This will allow user to manage anything in the user section.</td>
</tr>
<tr>
<td>Can See Users Contact Details</td>
<td>This will allow user to view contact (email, mobile) detail in the user section.</td>
</tr>
</tbody>
</table>
<h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h2>
<ul>
<li>Laravel Route: <code v-pre>vaahcms/Routes/backend/route-users.php</code></li>
<li>Laravel Controller: <code v-pre>vaahcms/Http/Controllers/Backend/UsersController.php</code></li>
<li>Laravel Model: <code v-pre>vaahcms/Models/User.php</code></li>
<li>Vue Route: <code v-pre>vaahcms/Vue/routes/vue-routes-users.js</code></li>
<li>Vue Store: <code v-pre>vaahcms/Vue/stores/store-users.js</code></li>
<li>Vue Page Directory: <code v-pre>vaahcms/Vue/pages/users</code></li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h6 id="accessors" tabindex="-1"><a class="header-anchor" href="#accessors" aria-hidden="true">#</a> Accessors</h6>
<p>To know about <code v-pre>Accessors</code>, see <a href="https://laravel.com/docs/9.x/eloquent-mutators#defining-an-accessor" target="_blank" rel="noopener noreferrer">Laravel Documentation<ExternalLinkIcon/></a></p>
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
<p>To know about <code v-pre>Mutators</code>, see <a href="https://laravel.com/docs/9.x/eloquent-mutators#defining-a-mutator" target="_blank" rel="noopener noreferrer">Laravel Documentation<ExternalLinkIcon/></a></p>
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
<p>To know about <code v-pre>Scopes</code>, see <a href="https://laravel.com/docs/9.x/eloquent#dynamic-scopes" target="_blank" rel="noopener noreferrer">Laravel Documentation<ExternalLinkIcon/></a></p>
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
<p>To know about <code v-pre>Relationships</code>, see <a href="https://laravel.com/docs/9.x/eloquent-relationships#defining-relationships" target="_blank" rel="noopener noreferrer">Laravel Documentation<ExternalLinkIcon/></a></p>
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
<td>User::findByUsername</td>
<td><code v-pre>$username</code>  <code v-pre>$columns = array('*')</code></td>
<td>The <code v-pre>findByUsername</code> method find users only by the <code v-pre>username</code> and return given columns.</td>
</tr>
<tr>
<td>User::findByEmail</td>
<td><code v-pre>$email</code>  <code v-pre>$columns = array('*')</code></td>
<td>The <code v-pre>findByEmail</code> method find users only by the <code v-pre>email</code> and return given columns.</td>
</tr>
<tr>
<td>User::countAdministrators</td>
<td></td>
<td>The <code v-pre>countAdministrators</code> method return number of users which has <code v-pre>Administrator</code> role.</td>
</tr>
<tr>
<td>User::getByRoles</td>
<td><code v-pre>$array_role_slugs</code></td>
<td>The <code v-pre>getByRoles</code> method return a list of the users which has a role exists in <code v-pre>$array_role_slugs</code>.</td>
</tr>
<tr>
<td>User::getByRolesOnlyIds</td>
<td><code v-pre>$array_role_slugs</code></td>
<td>The <code v-pre>getByRolesOnlyIds</code> method return only <code v-pre>id</code> of the users which has a role exists in <code v-pre>$array_role_slugs</code>.</td>
</tr>
<tr>
<td>User::getByRolesOnlyEmails</td>
<td><code v-pre>$array_role_slugs</code></td>
<td>The <code v-pre>getByRolesOnlyEmails</code> method return only <code v-pre>email</code> of the users which has a role exists in <code v-pre>$array_role_slugs</code>.</td>
</tr>
<tr>
<td>User::rulesAdminCreate</td>
<td></td>
<td>The <code v-pre>rulesAdminCreate</code> method return the array of validation rules for User.</td>
</tr>
<tr>
<td>User::isLastAdmin</td>
<td></td>
<td>The <code v-pre>isLastAdmin</code> method return <code v-pre>true</code> if Application has only one User of Administrator role.</td>
</tr>
<tr>
<td>User::getAvatarById</td>
<td><code v-pre>$id</code></td>
<td>The <code v-pre>getAvatarById</code> method find users only by the <code v-pre>id</code> and return avatar url.</td>
</tr>
<tr>
<td>User::getUsersForAssets</td>
<td></td>
<td>The <code v-pre>getUsersForAssets</code> method return list of <code v-pre>active</code> users with following columns: <code v-pre>id</code>, <code v-pre>first_name</code>, <code v-pre>middle_name</code>, <code v-pre>last_name</code></td>
</tr>
</tbody>
</table>
<h2 id="generate-new-api-token" tabindex="-1"><a class="header-anchor" href="#generate-new-api-token" aria-hidden="true">#</a> Generate new API Token</h2>
<p>To use api of VaahCMS you need to pass the <code v-pre>Token</code> in Authorization. To generate
this toke you need to click <code v-pre>Genenrate new API Token</code> option which is presents
in the <code v-pre>Detail view</code> of the item.</p>
<p>Just like below image:</p>
<img :src="$withBase('/images/2.x-generate_token.png')">
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>VaahCMS has APIs for every method, allowing you to interact with <code v-pre>NuxJS</code> or other frameworks.</p>
<p>You can access APIs method from <code v-pre>vaachms/Http/Controllers/Api/UsersController.php</code> and routes from <code v-pre>vaahcms/Routes/api/api-routes-users.php</code></p>
<p>We mention some methods bellow which help you to understand the structure.</p>
<h6 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create</h6>
<h5 id="method-post" tabindex="-1"><a class="header-anchor" href="#method-post" aria-hidden="true">#</a> Method: <code v-pre>POST</code></h5>
<h5 id="url-public-url-api-users-users" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-users-users" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/users/users/</code></h5>
<h5 id="sample-request" tabindex="-1"><a class="header-anchor" href="#sample-request" aria-hidden="true">#</a> Sample Request</h5>
<p><strong>Parameters:</strong> <code v-pre>$request</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$request</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
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
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Creates a new user for the database on which the method is run. <code v-pre>\WebReinvent\VaahCms\Models\User::create($request);</code> returns a duplicate user error if the email already exists in the <code v-pre>User</code> table.</p>
<h5 id="sample-response" tabindex="-1"><a class="header-anchor" href="#sample-response" aria-hidden="true">#</a> Sample Response</h5>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"data"</span><span class="token operator">:</span>  <span class="token punctuation">{</span>
    <span class="token property">"item"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ...
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token string">"Saved successfully."</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h5 id="get-list" tabindex="-1"><a class="header-anchor" href="#get-list" aria-hidden="true">#</a> Get List</h5>
<h5 id="method-get" tabindex="-1"><a class="header-anchor" href="#method-get" aria-hidden="true">#</a> Method: <code v-pre>GET</code></h5>
<h5 id="url-public-url-api-users-users-1" tabindex="-1"><a class="header-anchor" href="#url-public-url-api-users-users-1" aria-hidden="true">#</a> URL: <code v-pre>&lt;public-url&gt;/api/users/users/</code></h5>
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
      ...
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h6 id="validation" tabindex="-1"><a class="header-anchor" href="#validation" aria-hidden="true">#</a> validation</h6>
<p><strong>Parameters:</strong> <code v-pre>$inputs</code></p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'first_name'</span> <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
    <span class="token string single-quoted-string">'email'</span>      <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required</span>
    <span class="token string single-quoted-string">'is_active'</span>  <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required       //true:false:0:1</span>
    <span class="token string single-quoted-string">'status'</span>     <span class="token operator">=></span> <span class="token constant">null</span><span class="token punctuation">,</span>    <span class="token comment">// required       //active:inactive</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This function uses the <a href="https://laravel.com/docs/9.x/validation#validation-quickstart" target="_blank" rel="noopener noreferrer">Laravel Validator<ExternalLinkIcon/></a> to validate the user's following columns: <code v-pre>first_name</code>, <code v-pre>email</code>, <code v-pre>is_active</code>, and <code v-pre>status</code>.</p>
</div></template>


