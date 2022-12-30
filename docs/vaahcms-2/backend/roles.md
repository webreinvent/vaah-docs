# Roles

[[toc]]

## Purpose
A role is a group of permissions that allow a user who has been given the role to carry out specific tasks. For instance, the system administrator, who can be regarded as the system's owner, is permitted to carry out all tasks in the system. He or she can add users, remove or edit, and do other things.

## Features & Demos

#### Default Roles 

VaahCMS gave you a few default roles that it built during application setup using seeds.

| Field Name    | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Super Administrator | The application's owner is Super Administrator. Users with Super Administrator privileges have full access and control over the data and application. |
| Administrator | Users who have administration roles has all the permissions access and manage the data. Somebody who has access to all the administration features within the application. |
| Manager       | Users who have manage roles can assign a role to user. |
| Editor | Somebody who can publish and manage posts from CMS the section including the posts of other users. |
| Contributor | Somebody who can write and manage their own posts but cannot publish them.|
| Registered    | Users who have registered roles can access only public pages. |
| Guest | Users who have guest roles can access only public pages. |

------


#### Create Roles
To learn how to create a new role, see the video that is included below.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_qDABg3eqi2.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>


####  Assign Permission to Roles
You can view the video attached below to learn how to add permission to a role.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_S5yeP8t3QQ.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

####  Assign Roles to User
You can view the video attached below to learn how to give a role to a User.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_EiAGS8V1Y5.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Permissions

The following permissions are necessary for role management in order to carry out certain actions.

| Permissions          | Description                                           |
| ------------- | ------------------------------------------------------------ |
| Can Manage Roles | This permission grants Roles access to manage Roles. |
| Can Delete Roles | This permission grants Roles access to Delete a Role. |
| Can Update Roles | This permission grants Roles to Update details of a Role. |
| Can Read Roles   | This permission grants Roles to  read all listed Roles of the application. |
| Can Create Roles | This permission grant Roles to create a new Role for the application. |
| Has Access Of Roles Section | This permission grant Roles to access of the Roles Section in the side nav bar of the application. |

## Files

- Laravel Route: `vaahcms/Routes/backend/route-roles.php`
- Laravel Controller: `vaahcms/Http/Controllers/Backend/RolesController.php`
- Laravel Model: `vaahcms/Models/Role.php`
- Vue Route: `vaahcms/Vue/routes/vue-routes-roles.js`
- Vue Store: `vaahcms/Vue/stores/store-roles.js`
- Vue Page Directory: `vaahcms/Vue/pages/roles`

## Methods

Some reusable methods mention bellowed.

**getActiveRoles()**

You can use this method for fetching all active roles of the application.

```php
use WebReinvent\VaahCms\Models\Role;  // Import Role class at the top

$active_roles = Role::getActiveRoles();
```
---

**countUsers($id)**

You can use this method for count users of a role.

```php
use WebReinvent\VaahCms\Models\Role;  // Import Role class at the top

$count_users = Role::countUsers($id);  // you have pass user's id as params
```
---

**countPermissions($id)**

You can use this method for count permissions of a role.

```php
use WebReinvent\VaahCms\Models\Role;  // Import Role class at the top

$count_permissions = Role::countPermissions($id);  // you have pass role's id as params
```
---

**syncRolesWithUsers()**

You can use this method for sync roles with users.

```php
use WebReinvent\VaahCms\Models\Role;  // Import Role class at the top

Role::syncRolesWithUsers(); 
```
---

VaahCMS provide a method to check the User's Role.

```php
if (Auth::user()->hasRole('administrator')) {
    //write your logic here
}
```

## API

VaahCMS has APIs for every method, allowing you to interact with NuxJS or other frameworks.

You can access APIs method from `vaachms/Http/Controllers/Api/RolesController.php` and routes from `vaahcms/Routes/api/api-routes-roles.php`

We mention some methods bellow which help you to understand the structure.

#### Create Role

##### Method: `POST`
##### Action: `creatItem`
##### URL: `<public-url>/api/role/rolese/`

##### Sample Request
```php 
parameter = [
    'name',           //required
    'slug',           //required
    'detalis',        //required
    'is_active'       //required
];
```

##### Sample Response

```json
{
  "data": {
    "item": {
      .............
      .............
    }
  },
  "messages": [
    "Saved successfully."
  ],
  "success": "true"
}
```
---

#### Fetch Roles

###### Method: `GET`
###### Action: `getList`
###### URL: `<public-url>/api/role/rolese/`

##### Sample Request
```php 
parameter = [
    'filter' => [
        'q'            // for search queary (optionl)
        'trashed'      // for include or exclude trashed data (optionl)
        'is_active'    // for fetching ony active or inactive data (optionl)
        'sort'         // for sorting the data (optionl)
    ];  
];
```

##### Sample Response

```json
{
  "data": {
      .............
      .............
  },
  "success": "true",
  "totalPermissions" : "// count of total permissions of the application ",
  "totalUsers" : "// count of total users of the application "
}
```
---

#### Fetch single role

###### Method: `GET`
###### Action: `getItem($id)`
###### URL: `<public-url>/api/role/rolese/{id}`

##### Sample Response

```json
{
  "data": {
      .............
      .............
  },
  "success": "true"
}
```
---

#### Delete Role

###### Method: `DELETE`
###### Action: `delete`
###### URL: `<public-url>/api/role/rolese/{id}`

##### Sample Response

```json
{
  "data": {},
  "message" : [
    "vaahcms-general.action_successful"
  ],
  "success": "true"
}
```
---
