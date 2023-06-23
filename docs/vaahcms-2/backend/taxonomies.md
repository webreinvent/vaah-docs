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
 
### Create Taxonomies and Taxonomy Types via VaahSeeder

Through seeds, you can create `taxonomies` and `taxonomy types`. Make two json files with the names `taxonomies.json` and `taxonomy_types.json` in the directory 

`.../VaahCms/Modules/{module name}/Database/Seeds/json/`.


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
    }
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
    }
]
```

You must add some code to `DatabaseTableSeeder.php` in the directory `.../VaahCms/Modules/{module_name}/Database/Seeds` in order to run these seeds.


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

To view the `Taxonomy` section, go to the following url:

```http request
<project-url>/backend#/vaah/manage/taxonomies/
```

Now you have to create a `Taxonomy` by click on `Create` button. You will see a create page with following field.

Type is the first field, and the options are organised hierarchically. Additionally, you can manage the taxonomy kinds by selecting the `Manage` button. The `Tree View` of Taxonomy Types PopUp with 'CRUD' Operation will now show.

You will notice a new field called `Select a Parent` name with the taxonomies of the parent of the type you have chosen if you choose any of the children types.

Complete every field. Press the `Save` button.

The file is now visible in the `View` Page.

You can view the video attached below for more info:

<figure class="video_container">

  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_F20Ga5vKrX.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>

</figure>


### Update TaxonomyType via Dashboard

Go to the Taxonomy section first, then click the Manage Taxonomy Type button to edit or 
update the TaxonomyType name. To learn more, view the video attachment.

<div style="padding:53.65% 0 0 0;position:relative;">
<iframe src="https://player.vimeo.com/video/802634665?h=e1bd2f4f84&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Update TaxonomyType"></iframe>
</div>

## Permissions
The following permissions are necessary for `Taxonomies` and `Taxonomy Type` management in order to carry out certain actions.

| Permissions          | Description                                           |
| ------------- | ------------------------------------------------------------ |
| Can Manage Taxonomies | This permission enables roles to manage taxonomies. The user can activate, deactivate, update or delete a taxonomy with this access. |
| Can Delete Taxonomies | This permission grants roles access to delete a taxonomy. |
| Can Update Taxonomies | This permission grants roles to update details of a taxonomy. |
| Can Read Taxonomies   | This permission grants roles to read all listed taxonomies of the application. |
| Can Create Taxonomies | This permission grant roles to create a new taxonomy for the application. |
| Has Access Of Taxonomies Section | This permission grant roles to access of the taxonomies section in the side nav bar of the application. |
| Can Manage Taxonomy Types | This permission grant roles to manage or perform `CRUD` operation on the `Taxonomy Type`. |

## Files

- Laravel Route: `vaahcms/Routes/backend/route-texonomies.php`
- Laravel Controller: `vaahcms/Http/Controllers/Backend/TaxonomiesController.php`
- Laravel Model: `vaahcms/Models/Taxonomy.php`
- Vue Route: `vaahcms/Vue/routes/vue-routes-taxonomies.js`
- Vue Store: `vaahcms/Vue/stores/store-taxonomies.js`
- Vue Page Directory: `vaahcms/Vue/pages/taxonomies`


## Methods

Some reusable method of `Taxonomy` and `TaxonomyType` mentioned bellowed:

#### TaxonomyType::getTaxonomyByType($type)

You can use this method to retrieve all taxonomies that are currently active under given `TaxonomyType` by just giving the desired `TaxonomyType` slug.

```php
use WebReinvent\VaahCms\Models\Taxonomy;  // Import Taxonomy class at the top

$taxonomy_type_slug = 'cities';
return $active_taxonomies = Taxonomy::getTaxonomyByType($taxonomy_type_slug);
```
---

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
