# Taxonomies

[[toc]]

## Purpose

Although taxonomies are a crucial component of categorising the material on your website, the phrase frequently confuses newcomers because `Taxonomy` isn't a term that most of us use on a daily basis. Taxonomies are really just a technique to group similar posts entries (or other types of content) together. That's it! It's a large term, but it's not as hard to understand as it would seem.

If you run a sports blog, for instance, you could make taxonomies for each sport (basketball, cricket, football, etc.) and assign pertinent entries to each taxonomy.

Taxonomies are advantageous because they make it simpler for readers to locate relevant content (and also because they provide your content some context, though that is a secondary advantage).


## Default Taxonomy Types

By default, `VaahCMS` have following types of `Taxonomy`:

1. Countries
2. Registrations
3. Roles

## Features & Demos
<!-- 
##### Create Taxonomies and Taxonomy Types via VaahSeeder

User can create a taxonomies and taxonomy types through seeds. Create json files of name `taxonomies.json` and `taxonomy_types.json` at `.../VaahCms/Modules/{module_name}>/Database/Seeds/json/` this directory.

`taxonomies.json`

```json
[

    {
        "type_slug": "roles",
        "name": "Backend"
    },
    {
        "type_slug": "roles",
        "name": "Frontend"
    },
    {
        "type_slug": "registrations",
        "name": "Email Verification Pending"
    },
    .........
]
```

`taxonomy_types.json`

```json
[

    {
        "name": "Countries"
    },

    {
        "name": "Cities",
        "parent_slug": "countries"
    },

    {
        "name": "Roles"
    },
    .........
]
```

To run these seeds, you have to add some code in `DatabaseTableSeeder.php` at `.../VaahCms/Modules/{module_name}>/Database/Seeds/` this directory.



`DatabaseTableSeeder.php`

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
        VaahSeeder::taxonomyTypes(__DIR__.'/json/taxonomy_types.json');
        VaahSeeder::taxonomies(__DIR__.'/json/taxonomies.json');
    }

}
```

------

-->

## Permissions
<!-- 
REMOVE THIS COMMENT
List the permissions & details for this page in table format 
-->

## Files
<!-- 
REMOVE THIS COMMENT
List of all the files responsible for this pages

- Laravel Route: `routes/backend/route-example.php`
- Laravel Controller: 
- Laravel Model: 
- Vue Route: 
- Vue Store: 
- Vue Page Directory: 

-->

## Packages
<!-- 
REMOVE THIS COMMENT

### Laravel Packages

- `creativeorange/gravatar`: Write purpose of the package


### Vue Packages
- `laravel-mix`: To build assets

-->


## Methods
<!-- 
REMOVE THIS COMMENT
List important methods which can be reused. 

Eg:
```
User::addRole();
```

-->

## Events
<!-- 
REMOVE THIS COMMENT
List events for this section in table format 
-->


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
