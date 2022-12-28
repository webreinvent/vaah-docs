# Roles

[[toc]]

## Purpose
A role is a group of permissions that allow a user who has been given the role to carry out specific tasks. For instance, the system administrator, who can be regarded as the system's owner, is permitted to carry out all tasks in the system. He or she can add users, remove or edit, and do other things.

## Features & Demos

#### Create Roles
To learn how to create a new role, see the video that is included below.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_qDABg3eqi2.mp4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

https://img-v4.getdemo.dev/screenshot/chrome_qDABg3eqi2.mp4

####  Assign Permission to Roles
You can view the video attached below to learn how to add permission to a role.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_S5yeP8t3QQ.mp4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

https://img-v4.getdemo.dev/screenshot/chrome_S5yeP8t3QQ.mp4

####  Assign Roles to User
You can view the video attached below to learn how to give a role to a User.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_EiAGS8V1Y5.mp4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

## Permissions

The following permissions are necessary for role management in order to carry out certain actions.

 - Can Manage Roles
 - Can Delete Roles
 - Can Update Roles
 - Can Read Roles
 - Can Create Roles
 - Has Access Of Roles Section

## Files

REMOVE THIS COMMENT
List of all the files responsible for this pages

- Laravel Route: `vaahcms/routes/backend/route-roles.php`
- Laravel Controller: `vaahcms/Http/Controllers/Backend/RolesController.php`
- Laravel Model: `vaahcms/Models/Role.php`
- Vue Route: `vaahcms/Vue/routes/vue-routes-roles.js`
- Vue Store: `vaahcms/Vue/stores/store-roles.js`
- Vue Page Director: `vaahcms/Vue/pages/roles`

## Methods
Some reusable methods mention bellowed.

`Role::getRolePermission($request, $id)`

`Role::getRoleUser($request, $id)`

VaahCms provide a method to check the User's Role.

```php
if (Auth::user()->hasRole('administrator')) {
    //write your logic here
}
```

## API
<!-- 
REMOVE THIS COMMENT

Example

### Create permission

##### Method: `post`
##### URL: `<public-url>/api/permission/create`
##### Request Parameters
List all request params like https://docs.vaah.dev/vaahcms/basic/api.html#get-a-list 
##### Response Parameters
##### Sample Request
##### Sample Response
-->
