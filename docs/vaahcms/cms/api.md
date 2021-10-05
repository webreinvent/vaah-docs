# API

This is known as a `headless CMS`, is a relatively new approach to content 
management with many advantages, allow you to build websites and apps that are decoupled from their 
content management tools and integrated via API. This gives you the flexibility to build your front-end using 
your preferred tools.

An API-based approach can save a team significant time and 
 money in the initial implementation as well as ongoing maintenance.
 With an API you have full control of the presentation of your content with your own code. 


### Authentication

VaahCms supports [API authentication](https://laravel.com/docs/5.8/api-authentication). 
This allows you to protect the URLs on your web server so that only you can access them. 
In order to authenticate with HTTP, you may provide a `API Token` with the following URL format:

```
<public-url>/api/cms/contents-types?api_token=XXXXXXXXXXXX
```

You can ask to Admin for assigning you a `API Token`.


### Content Types

Content Type is the structure or blueprint of a page or a section that your Web Page will display.

#### Get a List of Content Types

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

##### Request samples
```
GET <public-url>/api/cms/contents-types?page=1&per_page=1&
q=pag&order=asc&order_by=updated_at&filters[is_published]=0

---------------------------------------------------------------

POST <public-url>/api/cms/contents-types
 
$param = [
   'q'                         => 'search_item', 
   'per_page'                  => 5,               
   'order'                     => 'name',                  
   'order_by'                  => 'asc',              
   'filters'                   => [
       'is_published'          => 1  
   ]
]
   

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
`GET <public-url>/api/cms/contents-types/{column}/{value}` 


### Contents

#### Get a List of Content

Get a list of the `Content` objects and their properties in a list.
This API retrieves a specific field of `Content`, and returns all the properties of the Contents with `Pagination`.

###### HTTP request
`GET <public-url>/api/cms/contents/{plural_slug}` 

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


#### Get Content Type

Get a Item of the `Content` objects and relationships of a Content object.
This will retrieves a `Content` by two params: 

- singular_slug : `singular_slug` value of Content Type
- content_slug : `slug` value of Content

###### HTTP request
`GET <public-url>/api/cms/contents/{singular_slug}/{content_slug}` 




------
