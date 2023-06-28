# Roles

A role represents a group of tasks that a user that is assigned the role is allowed to perform. For example, the system administrator can be regarded as the owner of the system and as such, is permitted to perform all the tasks in the system. He/she can create users, delete and edit products, etc.

------



##### Default Roles

These roles are created through seeds while setup a project.

| Field Name    | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Administrator | Users who have admin roles has all the permission access and manage the data.Somebody who has access to all the administration features within a single site |
| Manager       | Users who have manage roles can assign a role to user.       |
| Registered    | Users who have registered roles can access only public website. |

------



##### Create a Role

Roles can be created in following ways:-

##### Manually:

User can create a role directly from the Role Section in User & Access.

<img :src="$withBase('/images/role-1.png')" alt="role1">

##### Create a Roles via VaahSeeder

User can create a role through seeds. Create a json file of name `roles.json` at `.../VaahCms/Modules/{module_name}>/Database/Seeds/json/` this directory.

`roles.json`

```json
[

    {
        "name": "Clients",
        "details": "Can login to backend dashboard"       
    },
    {
        "name": "Customers",
        "details": "Frontend user to manage account"
    }
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
        VaahSeeder::roles(__DIR__.'/json/roles.json');
    }

}
```



------



##### Manage Users

You can assign roles to a user in `Roles` section. By clicking on `User` column, a page will open that contain list of Users along with `Yes/No` Button.

<img :src="$withBase('/images/role-2.png')" alt="role-2">

------



#####  Manage Permission

You can add permissions in a role in `Roles` section. By clicking on `Permission` column, a page will open that contain list of Permissions along with `Yes/No` Button.

<img :src="$withBase('/images/role-3.png')" alt="role-3">

------

VaahCms provide a method to check the User's permission.

```php
if(\Auth::user()->hasRole('administrator')){

}
```
