# Content Types

This section provides information about the `Content Types` in `CMS` modules

Content Type is the structure or blueprint of a page or a section that your Web Page will display. It lets you define the overall schema of this blueprint by adding fields and setting its properties. Content Type is a pre-defined collection of data types (Fields).

In essence, creating a content type is like creating a mold or cast that lets you create several objects (entries) of the same nature and pattern. Content types, however, should be created after you model your content appropriately.



##### Content Type structure in the CMS


<img :src="$withBase('/images/content-types-structure-1.png')" alt="content-types-structure-1">

<img :src="$withBase('/images/content-types-structure-2.png')" alt="content-types-structure-2">


Here is the structure of a “Blog” Content Type that has a “Title,” “Thumbnail Image,” “Content,” and “SEO Meta Tags” fields. Once this content type is ready, you can create an entry for it.

------



##### Adding fields to a content type

If you create `Content Types`, you will continue on to `Content Structure` page where you can determine what information you wish to collect. This creates a form which they can complete and when saved will display the information on your Frontend site.

##### Add a new field

You can drag the fields from `Content Fields` to `Content Structure` Page. Enter the name for the field. You can only use numbers, lower-case letters and the underscore character (_).

In the field type list, select one of the following types:

| Field Name    | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Address       | Has seven text fields (Address Line 1, Address Line 2, Landmark, City, State, Country, Zip Code) |
| Boolean       | Has one of two values (for example: "yes/no" or "true/false") |
| Currency Code | Has dropdown contain currency code                           |
| Date          | Choose a date using the calendar                                                       |
| Date Time     | Choose a datetime using the calendar                                             |
| Editor        | Write a Long text with html tag                                      |
| Email         | Write a complete and valid email address.                                    |
| Facebook Card | Social meta fields                                           |
| Image         | Add image file such as GIF, JPG, PNG                         |
| Image Group   | Add multiple image file such as GIF, JPG, PNG                |
| Json          | Write your content, in JSON format, in the code textbox.                                       |
| List          | Add text in list format                                      |
| Markdown      | Add text in markdown format                                  |
| Media         | Add file                                                     |
| Number        | A number that allows exact decimal values; often used for price or cost |
| Password      | Write a password. Click the eye icon, displayed on the right of the box, to show the password.                                 |
| Phone Number  | Write your number in the textbox. Up and down arrows, displayed on the right of the box, allow to increase or decrease the current number indicated in the textbox.                                   |
| Price         | A number that allows exact decimal values; often used for price or cost |
| Relation      | Relation with Table                                  |
| Slug          | Slug text (no space)                                         |
| SEO Meta tags | SEO meta field                                               |
| Select        | Select Field (Add Option in Field Option)                    |
| Tags          | Tag input field                                              |
| Text          | Short text such as a name (limited to 255 characters)        |
| Textarea      | Long, multi-line alphanumeric text such as a biography       |
| Time          | A Time field                                                 |
| Title         | Short text such as a name (limited to 255 characters)        |
| Twitter Card  | Twitter meta fields                                          |
| UUID          | Write a unique identifier in the textbox. A "Regenerate" button, displayed on the right of the box, allows to automatically generate a UUID .                                |
| Visual Editor | Visual Editor                                                |

------

##### Configuring fields

##### Is Repeatable
This feature is used for both fields and groups. Is Repeatable allow you to repeat a `field` and `group of custom fields` as many times as needed.

Content Type :

<img :src="$withBase('/images/content-types-structure-4.png')" alt="content-types-structure-4">

Content :

<img :src="$withBase('/images/content-types-structure-5.png')" alt="content-types-structure-5">

##### Is Searchable
This feature is enable allow you to search that field's content by Helper Method.

<img :src="$withBase('/images/content-types-structure-7.png')" alt="content-types-structure-7">

##### Is Multiple
This feature is visible in Select and Relation Field. It Enable the multiple attributes or you can select multiple options. 

<img :src="$withBase('/images/content-types-structure-8.png')" alt="content-types-structure-8">

##### Is Hidden
You can hide fields from appearing in Frontend

<img :src="$withBase('/images/content-types-structure-6.png')" alt="content-types-structure-6">

##### Type
This feature is visible in Relation Field. You can add options in type field from extend method `getCmsContentRelations` in `ExtendController`.

```php

    //----------------------------------------------------------
    public static function getCmsContentRelations()
    {

        $arr = [
            [
                "name" => "Taxonomy",
                "namespace" => "WebReinvent\\VaahCms\\Entities\\Taxonomy",
                "options" => TaxonomyType::getListInTreeFormat(),
                "filter_by" => 'vh_taxonomy_type_id',
                "add_url" => route('vh.backend')."#/vaah/manage/taxonomies/create",
                "has_children" => true
            ],
            [
                "name" => "Role",
                "namespace" => "WebReinvent\\VaahCms\\Entities\\Role",
                "display_column" => 'name',
                "filters" => [
                    [
                        "query" => 'where',
                        "column" => 'is_active',
                        "condition" => '=',
                        "value" => 1,
                    ],
                ],

            ]
        ];


        return $arr;

    }
```

<img :src="$withBase('/images/content-types-structure-9.png')" alt="content-types-structure-9">

##### Tags
These tags are used to show the field's content within these tags. There are four tag field:
                                                                
- Opening Tag
- Closing Tag
- Container opening Tag
- Container closing Tag

<img :src="$withBase('/images/content-types-structure-10.png')" alt="content-types-structure-10">

##### Terminologies

- **Entry**: After you define a content type, you can add data to your content type by creating an entry.
- **Fields**: These are the building blocks/component of your structured content. You can control which data you want to add by configuring fields and its properties in a content type.

------



##### Examples

1. If you want to create a simple blog page on your site, you will define a “Blog” content type that has “title,” “date,” and “body” fields.
2. If you want to create the homepage of your site, you will define a “Pages” content type that has “header,” “footer,” “banner-image,” “title,” and “body” fields.

------



##### Customizing a Content Type

- CMS allows you to customize a content type to meet your requirements. If you want to create a Content Type for your webpage(s), you can define the content types in seeds.
- You can divide the fields in to different groups.

------

# Contents

------



##### Placing Content of a Given Content Type on a Page

<img :src="$withBase('/images/content-types-structure-3.png')" alt="content-types-structure-3">


In Contents, There are two types fields:

**Content Fields**

These fields can be managed from "Content Types" sections.

**Template Fields**

Templates can be used to specify which Content Types will be allowed in different areas on a Page. You can add some fields that means that fields are template specific and will be shown when you select that Template

In Pages, they have a different different structures, and we can't create different content types for each page. So in that case, we use other groups of field called Templates. Templates can be create through seeds.


## Helper Methods

##### Content
```blade
{!! get_content($data) !!}                      //   return HTML format

{!! get_the_content($data) !!}                  //   return DATA format
```

```php
get_content(Content $content, $type=null)

$type = content/template;
```

##### Content List
```blade
{!! get_contents('page') !!}                      //   return HTML format

{!! get_the_contents('page') !!}                  //   return DATA format
```

```php
get_contents($content_type_slug='pages', array $args = null,$has_pagination = true)

$args = [

    'q'                         => 'search_item', 
    'per_page'                  => 20,           // default = 20
    'include_groups'            => [],           // group_slug
    'exclude_groups'            => [],           // group_slug   
    'order'                     => 'name',       // default = id      
    'order_by'                  => 'asc',        // default = desc    asc/desc/ASC/DESC
    'status'                    => 'all',        // default = published    all/draft
    'has_pagination'            => true / false,  // default = true
    'has_simple_paginate'       => false,
    'take'                      => 1,2,3,4, ..... n,
    'container_opening_tag'     => '<div class="columns is-multiline">',
    'container_closing_tag'     => '</div>',
    'content_opening_tag'       => '<div class="column is-4">',
    'content_closing_tag'       => '</div>'               

];
```

##### Field
```blade
{!! get_field($data, 'title', 'default') !!}        //   return HTML format

{!! get_the_field($data, 'title', 'default') !!}    //   return DATA format
```

```php
get_field(Content $content, $field_slug,
         $group_slug='default', $type='content',
         $group_index = 0 , $field_index = null)

$type = content/template;

$group_index = 0/1/2/3/4/.....
$field_index = 0/1/2/3/4/.....
```

##### Group
```blade
{!! get_group($data ,'default' ) !!}            //   return HTML format

{!! get_the_group($data ,'default' ) !!}        //   return DATA format
```

```php
get_group(Content $content, $group_slug='default', 
            $type='content, $group_index = null)

$type = content/template;

$group_index = 0/1/2/3/4/.....
```

## Frontend Routes

```php
<public-url>/{permalink}

<public-url>/{content_type}/{permalink}

<public-url>/taxonomies/{taxonomy_type_slug}/{taxonomy_slug}

<public-url>/search
```

