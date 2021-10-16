# API

When building an  [API](https://laravel.com/docs/8.x/eloquent-resources#introduction), you may need a transformation layer that sits between your 
Eloquent models and the JSON responses that are actually returned to your application's users. 
For example, you may wish to display certain attributes for a subset of 
users and not others, or you may wish to always include certain relationships in the 
JSON representation of your models. Eloquent's resource classes allow you to expressively 
and easily transform your models and model collections into JSON.

Of course, you may always convert Eloquent models or collections to JSON using 
their toJson methods; however, Eloquent resources provide more granular and robust 
control over the JSON serialization of your models and their relationships.


### Authentication

VaahCms supports [API authentication](https://laravel.com/docs/5.8/api-authentication). 
This allows you to protect the URLs on your web server so that only you can access them. 
In order to authenticate with HTTP, you may provide a `API Token` with the following URL format:

```
<public-url>/api/users?api_token=XXXXXXXXXXXX
```

You can ask to Admin for assigning you a `API Token`.


### Users

Content Type is the structure or blueprint of a page or a section that your Web Page will display.

#### Get a List of Users

Get a list of the `Content Type` objects and their properties in a list.
This API retrieves a specific field of `Content Types`, and returns all the properties of the Content Types with `Pagination`.

###### HTTP request
`GET/POST <public-url>/api/cms/contents-types` 

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| q | Value to be search in `Name`, `Slug`, `Plural Slug` and `Singular Slug` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| order | Sort the results of the list by a given column | String | id |
| order_by | Direction of the sort and may be either `asc` or `desc` | String | desc |
| filters | Column name passes as a `key` and Value passes as a `key's value`. Columns: `is_published`, `is_commentable` | Array |

##### URL

```
GET <public-url>/api/cms/contents-types?page=1&per_page=1&
q=pag&order=asc&order_by=updated_at&filters[is_published]=0
```

##### Request samples
```
POST <public-url>/api/cms/contents-types
 
$param = [
   'q'                         => 'search_item', 
   'per_page'                  => 5,               
   'order'                     => 'name',                  
   'order_by'                  => 'asc',              
   'filters'                   => [
       'is_published'          => 1  
   ]
];

```

##### Response samples

```
{
    "status": "success",
    "data": {
        "current_page": 1,
        "data": [
            ``````````
            ``````````
        ],
        "first_page_url": "<public-url>/api/cms/contents-types?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "<public-url>/api/cms/contents-types?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "<public-url>/api/cms/contents-types?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "<public-url>/api/cms/contents-types",
        "per_page": 20,
        "prev_page_url": null,
        "to": null,
        "total": 0
    }
}
```

#### Get Content Type

Get a Item of the `Content Type` objects and relationships of a Content Type object.
This will retrieves a `Content Type` by `slug` value, and returns all the properties / Field Structure of Content Type.

###### HTTP request
`GET/POST <public-url>/api/cms/contents-types/{column}/{value}` 

Column can be `id`, `uuid`, `name`, `slug`, `plural_slug`, `singular_slug` and their value.

##### URL
```
<public-url>/api/cms/contents-types/slug/blog
```

##### Response samples

```
{
    "status": "success",
    "data": {
        "id": 1,
        "uuid": "1ee83ff4-892d-44eb-b236-acbbc44fbcb3",
        "name": "Blog",
        "slug": "blog",
        "plural": "Blogs",
        "plural_slug": "blogs",
        "singular": "Blog",
        "singular_slug": "blog",
        "excerpt": "Simple blog",
        "is_published": 1,
        "is_commentable": 1,
        "content_statuses": [
            "draft",
            "published"
        ],
        "total_records": null,
        "published_records": null,
        "total_comments": null,
        "meta": null,
        "created_by": null,
        "updated_by": 1,
        "deleted_by": null,
        "created_at": null,
        "updated_at": "2021-08-17 12:06:40",
        "deleted_at": null,
        "groups": {}
    }
}
```

### Contents

#### Get a List of Content

Get a list of the `Content` objects and their properties in a list.
This API retrieves a specific field of `Content`, and returns all the properties of the Contents with `Pagination`.

###### HTTP request
`GET/POST <public-url>/api/cms/contents/{plural_slug}` 

This will retrieves a list of `Content` by `plural_slug` of `Content Type` , and returns all the `Groups` and their `Fields` of Contents.

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| q | Value to be search in `Name`, `Slug`, `Plural Slug` and `Singular Slug` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| order | Sort the results of the list by a given column | String | id |
| order_by | Direction of the sort and may be either `asc` or `desc` | String | desc |
| include_groups | Input `Group slugs` that you want to include | Array |
| exclude_groups | Input `Group slugs` that you want to exclude | Array |


##### URL

```
GET <public-url>/api/cms/contents/blogs?page=1&per_page=20&
exclude_groups=header&include_groups=default&api_token=fsfsfsfsfsfsdfsfsdfsdfsdf
```

##### Request samples

```
POST <public-url>/api/cms/contents/blogs
 
$param = [
   'q'                         => 'search_item', 
   'per_page'                  => 5,               
   'order'                     => 'name',                  
   'order_by'                  => 'asc',              
   'include_groups'            => ['default'],                  // group_slug
   'exclude_groups'            => ['header'],                   // group_slug
];
```

##### Response samples

```
{
    "status": "success",
    "data": {
        "current_page": 1,
        "data": [],
        "first_page_url": "<public-url>/api/cms/contents-types?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "<public-url>/api/cms/contents-types?page=1",
        "links": [
            {
   {
       "status": "success",
       "data": {
           "current_page": 1,
           "data": [
               ``````````
               ``````````
           ],
           "first_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=1",
           "from": 1,
           "last_page": 2964,
           "last_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2964",
           "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2",
                    "label": "Next &raquo;",
                    "active": false
                }
           ],
           "next_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs?page=2",
           "path": "http://localhost/vikram/vaahcms-dev-env/public/api/cms/contents/blogs",
           "per_page": 20,
           "prev_page_url": null,
           "to": 20,
           "total": 59268
        }
    }
```

#### Get Content Type

Get a Item of the `Content` objects and relationships of a Content object.
This will retrieves a `Content` by two params: 

- singular_slug : `singular_slug` value of Content Type
- content_slug : `slug` value of Content

###### HTTP request
`GET/POST <public-url>/api/cms/contents/{singular_slug}/{content_slug}` 

##### URL

```
GET <public-url>/api/cms/contents/blogs/xxxxxxxxxxxx
?include_groups=default&exclude_groups=header
```

##### Request samples
```
POST <public-url>/api/cms/contents/blogs/xxxxxxxxxxxx
 
$param = [             
   'include_groups'            => ['default'],                  // group_slug
   'exclude_groups'            => ['header'],                   // group_slug
];
```

##### Response samples

```
{
    "status": "success",
    "data": {
        "id": 100,
        "uuid": "09047dab-e1bc-4f3c-a35b-2a881b488d7b",
        "parent_id": null,
        "vh_cms_content_type_id": 1,
        "vh_theme_id": 2,
        "vh_theme_template_id": 5,
        "name": "xxxxxxxxxxxx",
        "slug": "xxxxxxxxxxxx",
        "permalink": "xxxxxxxxxxxx",
        "author": null,
        "is_published_at": "2021-08-27 12:52:04",
        "status": "published",
        "total_comments": null,
        "meta": null,
        "created_by": 1,
        "updated_by": 1,
        "deleted_by": null,
        "created_at": "2021-08-27 12:52:04",
        "updated_at": "2021-08-27 12:52:04",
        "deleted_at": null,
        "content_fields": {},
        "template_fields": {},
        "link_prefix": "http://localhost/vikram/vaahcms-dev-env/public/blog/",
        "link": "http://localhost/vikram/vaahcms-dev-env/public/blog/xxxxxxxxxxxx",
        "content_type": {}
    }
}
```


------
