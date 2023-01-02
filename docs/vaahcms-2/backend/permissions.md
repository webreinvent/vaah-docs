# Permissions

[[toc]]

## Purpose
Depending on their roles, the decisions made by the application owner and the system administrator, and other factors, permissions allow users to access particular aspects of the application. Permissions control which actions users are allowed to perform on your application, such as viewing, editing, and changing configuration. Each permission has a name (for example, View published material) and only permits a single activity or a small group of related actions.

## Features & Demos

#### Default Permissions

These permissions are created through seeds while set up the application.

| Permission Name           | Section      | Description                  |
| ------------------------------------- | ------------ | ------------------------------------------------------------ |
| Has Access of Dashboard               | Dashboard    | This will allow user to see the link of dashboard.           |
| Has Access of Setting Section         | Setting      | This will allow user to see the link of setting section.     |
| Can Login In Backend                  | Backend      | This will allow user to login in the backend.                |
| Has Access Of Users Section           | User         | This will allow user to see the link of user section.        |
| Can Create Users                      | User         | This will allow user to add anything in the user section.    |
| Can Read Users                        | User         | This will allow user to view anything in the user section.   |
| Can Update Users                      | User         | This will allow user to edit anything in the user section.   |
| Can Delete Users                      | User         | This will allow user to delete anything in the user section. |
| Can Manage Users                      | User         | This will allow user to manage anything in the user section. |
| Can See Users Contact Details         | User         | This will allow user to view contact (email, mobile) detail in the user section. |
| Has Access Of Registrations Section   | Registration | This will allow user see the link of registration section.   |
| Can Create Registrations              | Registration | This will allow user to add anything in the registration section. |
| Can Create Users From Registrations   | Registration | This will allow user to add users in the registration section. |
| Can Read Registrations                | Registration | This will allow user to view anything in the registration section. |
| Can Update Registrations              | Registration | This will allow user to edit anything in the registration section. |
| Can Delete Registrations              | Registration | This will allow user to delete anything in the registration section. |
| Can Manage Registrations              | Registration | This will allow user to manage anything in the registration section. |
| Can See Registrations Contact Details | Registration | This will allow user to view contact detail in the registration section. |
| Has Access Of Roles Section           | Role         | This will allow user see the link of role section.           |
| Can Create Roles                      | Role         | This will allow user to add anything in the role section.    |
| Can Read Roles                        | Role         | This will allow user to view anything in the role section.   |
| Can Update Roles                      | Role         | This will allow user to edit anything in the role section.   |
| Can Delete Roles                      | Role         | This will allow user to delete anything in the role section. |
| Can Manage Roles                      | Role         | This will allow user to manage anything in the role section. |
| Has Access Of Permissions Section     | Permission   | This will allow user see the link of permission section.     |
| Can Read Permissions                  | Permission   | This will allow user to view anything in the permission section. |
| Can Update Permissions                | Permission   | This will allow user to edit anything in the permission section. |
| Can Manage Permissions                | Permission   | This will allow user to manage anything in the permission section. |
| Has Access Of Media Section           | Media        | This will allow user see the link of media section.          |
| Can Create Media                      | Media        | This will allow user to add anything in the media section.   |
| Can Read Media                        | Media        | This will allow user to view anything in the media section.  |
| Can Update Media                      | Media        | This will allow user to edit anything in the media section.  |
| Can Delete Media                      | Media        | This will allow user to delete anything in the media section. |
| Can Manage Media                      | Media        | This will allow user to manage anything in the media section. |
| Has Access Of Module Section          | Module       | This will allow user see the link of module section.         |
| Can Install Module                    | Module       | This will allow user to install a module.                    |
| Can Delete Module                     | Module       | This will allow user to delete a module.                     |
| Can Deactivate Module                 | Module       | This will allow user to deactivate a module.                 |
| Can Activate Module                   | Module       | This will allow user to activate a module.                   |
| Can Import Sample Data In Module      | Module       | This will allow user to import sample data in module.        |
| Can Update Module                     | Module       | This will allow user to update a module.                     |
| Can Read Module                       | Module       | This will allow user to read a module.                       |
| Has Access Of Theme Section           | Theme        | This will allow user see the link of theme section.          |
| Can Install Theme                     | Theme        | This will allow user to install a theme.                     |
| Can Delete Theme                      | Theme        | This will allow user to delete a theme.                      |
| Can Deactivate Theme                  | Theme        | This will allow user to deactivate a theme.                  |
| Can Activate Theme                    | Theme        | This will allow user to activate a theme.                    |
| Can Import Sample Data In Theme       | Theme        | This will allow user to import sample data in theme.         |
| Can Update Theme                      | Theme        | This will allow user to update a theme.                      |
| Can Read Theme                        | Theme        | This will allow user to read a theme.                        |
| Has Access Of Advanced Section        | Advanced     | This will allow user see the link of advanced section.       |

## Create a Permission via VaahSeeder

Through seeds, you can generate permissions. Make a json file called `permissions.json` in the directory .`../VaahCms/Modules/{module_name}/Database/Seeds/json/`.

In `permissions.json` file
```json
[

    {
        "name": "Has Access of Dashboard",
        "module": "<module_name>",
        "section": "<module_section_name>",
        "details": "This will allow user to see the link of dashboard."
    },
    {
        "name": "Has Access of Setting Section",
        "module": "vaahcms",
        "section": "Setting",
        "details": "This will allow user to see the link of setting section."
    }
]
```

To run this seed, you have to add some code in `DatabaseTableSeeder.php` at `.../VaahCms/Modules/{module_name}>/Database/Seeds/` this directory.



In `DatabaseTableSeeder.php` file

```php
<?php
namespace VaahCms\Modules\<module_name>\Database\Seeds;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use WebReinvent\VaahCms\Libraries\VaahSeeder;

class DatabaseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        VaahSeeder::permissions(__DIR__.'/json/permissions.json');
    }

}
```

You need to reactivate the `Module` in order to run Seeder. Watched attached video for more information.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_ZrgTJAsPgb.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

#### Assign Permissions to Role

You can add permissions to a role in permissions section. By clicking on role column, a page will open that contain list of roles along with `Yes/NO` button.


<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_aORDueFf3G.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>


## Required User Permissions To Access This Section
The following permissions are necessary for permissions management in order to carry out certain actions.

| Permissions          | Description                                           |
| ------------- | ------------------------------------------------------------ |
| Has Access Of Permissions Section | This will enable users to access the permission section link in the application's left navigation bar. |
| Can Read Permissions | This will allow user to view anything in the permission section. |
| Can Update Permissions | This will allow user to edit anything in the permission section. |
| Can Manage Permissions | This will allow user to manage anything in the permission section. |

## Files

- Laravel Route: `vaahcms/Routes/backend/route-permissions.php`
- Laravel Controller: `vaahcms/Http/Controllers/Backend/PermissionsController.php`
- Laravel Model: `vaahcms/Models/Permission.php`
- Vue Route: `vaahcms/Vue/routes/vue-routes-permissions.js`
- Vue Store: `vaahcms/Vue/stores/store-permissions.js`
- Vue Page Directory: `vaahcms/Vue/pages/permissions`

## Methods

Some reusable methods mention bellowed.

**getActiveItems()**

You can use this method for fetching all active permissions of the application.

```php 
use WebReinvent\VaahCms\Models\Permission;    // Import permission class at top

$active_permissions = Permission::getActiveItems();
```
---

**syncRolesWithUsers()**

You can use this method for sync permissions with roles. After creating a new permission you have to call this method to sync permissions count with roles.

```php
use WebReinvent\VaahCms\Models\Permission;  // Import Role class at the top

Permission::syncPermissionsWithRoles(); 
```
---

**getPermissionRoles($id)**

You can use this method to retrieve roles that are associated with this permission.

```php
use WebReinvent\VaahCms\Models\Permission;  // Import Role class at the top

Permission::getPermissionRoles($id);        // Permission ID must be provided as parameters.
```

## API

VaahCMS has APIs for every method, allowing you to interact with `NuxJS` or other frameworks.

You can access APIs method from `vaachms/Http/Controllers/Api/PermissionsController.php` and routes from `vaahcms/Routes/api/api-routes-permissions.php`

We mention some methods bellow which help you to understand the structure.

#### Fetch Permissions

##### Method: `GET`
##### URL: `<public-url>/api/vaah/permissions/`

##### Sample Request
```php 
parameter = [
    'filter' => [
        'q'            // for search queary (optionl)
        'trashed'      // for include or exclude trashed data (optionl)
        'is_active'    // for fetching only active or inactive data (optionl)
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
  "success": "true"
}
```
---

#### Delete Permission

###### Method: `DELETE`
###### Action: `deleteItem`
###### URL: `<public-url>/api/vaah/permissions/{id}`

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

#### Fetch single Permission

###### Method: `GET`
###### Action: `getItem($id)`
###### URL: `<public-url>/api/vaah/permissions/{id}`

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
