# Permission

Permissions allow users to access certain features of a course or project site, depending on their roles, and on the decisions made by the site owner and the system administrator. The ability to do actions on your site (including viewing content, editing content, and changing configuration) is governed by permissions. Each permission has a name (such as View published content) and covers one action or a small subset of actions.

------



#####  Default Permissions

These permissions are created through seeds while setup a project.

| Field Name                            | Section      | Description                                                  |
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

------



##### Create a Permission

User can create a permission through seeds. Create a json file of name `permissions.json` at `.../VaahCms/Modules/{module_name}>/Database/Seeds/json/` this directory.



permissions.json

```json
[

    {
        "name": "Has Access of Dashboard",
        "module": "vaahcms",
        "section": "dashboard",
        "details": "This will allow user to see the link of dashboard."
    },

    {
        "name": "Has Access of Setting Section",
        "module": "vaahcms",
        "section": "Setting",
        "details": "This will allow user to see the link of setting section."
    },

    {
        "name": "Can Login In Backend",
        "module": "vaahcms",
        "section": "backend",
        "details": "This will allow user to login in the backend."
    },
    {
        "name": "Has Access Of Users Section",
        "module": "vaahcms",
        "section": "user",
        "details": "This will allow user to see the link of user section."
    },
    {
        "name": "Can Create Users",
        "module": "vaahcms",
        "section": "user",
        "details": "This will allow user to add anything in the user section."
    },
    {
        "name": "Can Read Users",
        "module": "vaahcms",
        "section": "user",
        "details": "This will allow user to view anything in the user section."
    },
    .........
    .........
    .........
]
```

To run this seed, you have to add some code in `DatabaseTableSeeder.php` at `.../VaahCms/Modules/{module_name}>/Database/Seeds/` this directory.



DatabaseTableSeeder.php

```php
<?php
namespace VaahCms\Modules\{module_name}\Database\Seeds;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->seedPermissions();
    }
    //---------------------------------------------------------------
    public function getListFromJson($json_file_name)
    {
        $json_file = __DIR__."/json/".$json_file_name;
        $jsonString = file_get_contents($json_file);
        $list = json_decode($jsonString, true);
        return $list;
    }
    //---------------------------------------------------------------
    public function seedPermissions()
    {
        $list = $this->getListFromJson("permissions.json");
        $this->storeSeedsWithUuid('vh_permissions', $list);
    }
    //---------------------------------------------------------------
    public function storeSeedsWithUuid($table, 
                                       $list,
                                       $has_active=true, 
                                       $primary_key='slug', 
                                       $create_slug=true, 
                                       $create_slug_from='name')
    {
        foreach ($list as $item)
        {
            if($create_slug)
            {
                $item['slug'] = Str::slug($item[$create_slug_from]);
            }

            $item['uuid'] = Str::uuid();

            if($has_active){
                $item['is_active'] = 1;
            }

            $record = DB::table($table)
                ->where($primary_key, $item[$primary_key])
                ->first();


            if(!$record)
            {
                DB::table($table)->insert($item);
            } else{
                DB::table($table)->where($primary_key, $item[$primary_key])
                    ->update($item);
            }
        }
    }


}
```

------



#####  Manage Roles

You can add permissions in a role in `Permissions` section. By clicking on `Role` column, a page will open that contain list of Roles along with `Yes/NO` Button.

<img :src="$withBase('/images/permissions.png')" alt="permission">

------

VaahCms provide a method to check the User's permission.

```php
\Auth::user()->hasPermission('has-access-of-users-section')
```



------
