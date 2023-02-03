# Taxonomies

[[toc]]

## Purpose

Although taxonomies are a crucial component of categorising the material on your application, the phrase frequently confuses newcomers because `Taxonomy` isn't a term that most of us use on a daily basis. Taxonomy are really just a technique to group similar posts entries (or other types of content) together. That's it! It's a large term, but it's not as hard to understand as it would seem.

For example, if you manage a sports blog, you could create taxonomies for every sport (basketball, cricket, football, etc.) and assign relevant posts to each taxonomy.

Taxonomies are advantageous because they make it simpler for readers to locate relevant content (and also because they provide your content some context, though that is a secondary advantage).


## Default Taxonomy Types

By default, `VaahCMS` have following types of `Taxonomies`:

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
        VaahSeeder::taxonomyTypes(__DIR__.'/json/taxonomy_types.json');
        VaahSeeder::taxonomies(__DIR__.'/json/taxonomies.json');
    }

}
```

------

### Create Taxonomies and TaxonomyType via Dashboard

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

Some reusable method of `Taxonomy` and `TaxonomyType` mentioned bellowed:

#### TaxonomyType::getTaxonomyByType($type)

You can use this method to retrieve all taxonomies that are currently active under given `TaxonomyType` by just giving the desired `TaxonomyType` slug.

```php
use WebReinvent\VaahCms\Models\Taxonomy;  // Import Taxonomy class at the top

$taxonomy_type_slug = 'cities';
return $active_taxonomies = Taxonomy::getTaxonomyByType($taxonomy_type_slug);
```
User::addRole();
```

| Permissions          | Description                                           |
| ------------- | ------------------------------------------------------------ |
| Can Manage Taxonomies | This permission enables roles to manage taxonomies. The user can activate, deactivate, update or delete a taxonomy with this access. |
| Can Delete Taxonomies | This permission grants roles access to delete a taxonomy. |
| Can Update Taxonomies | This permission grants roles to update details of a taxonomy. |
| Can Read Taxonomies   | This permission grants roles to read all listed taxonomies of the application. |
| Can Create Taxonomies | This permission grant roles to create a new taxonomy for the application. |
| Has Access Of Taxonomies Section | This permission grant roles to access of the taxonomies section in the side nav bar of the application. |
| Can Manage Taxonomy Types | This permission grant roles to manage or perform `CRUD` operation on the `Taxonomy Type`. |

## API
VaahCMS has APIs for every method, allowing you to interact with `NuxJS` or other frameworks.

You can access APIs method from `vaachms/Http/Controllers/Api/TaxonomiesController.php` and routes from `vaahcms/Routes/api/api-routes-taxonomies.php`

We mention some methods bellow which help you to understand the structure.

#### Create Taxonomy

##### Method: `POST`
##### Action: `creatItem`
##### URL: `<public-url>/api/vaah/manage/taxonomies/`

##### Sample Request
```php 
parameter = [
    'type',              //required
    'name',              //required
    'slug',              //required
    'is_active'          //required
    'note',              //optional
    'seo_title'          //optional
    'seo_keywords'       //optional
    'seo_description'    //optional
];
```

##### Sample Response

```json
{
  "data": {
    "item": {
      ...
    }
  },
  "messages": [
    "Saved successfully."
  ],
  "success": "true"
}
```
---

#### Fetch Taxonomies

###### Method: `GET`
###### Action: `getList`
###### URL: `<public-url>/api/vaah/manage/taxonomies/`

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
    "data" : {
      ...
    }
  }
}
```
---

#### Fetch Single Taxonomy

###### Method: `GET`
###### Action: `getItem`
###### URL: `<public-url>/api/vaah/manage/taxonomies/{id}`

##### Sample Response

```json
{
  "data": {
      ...
  },
  "success": "true"
}
```
---
