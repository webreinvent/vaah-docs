# API

An API content management system (CMS) is an evolution to the traditional CMS. 

API CMS allows you to manage and access content from your applications using an API. Unlike a traditional CMS, with an API CMS you have full control of the presentation of your content with your own code. 


### Content Types

Content Type is the structure or blueprint of a page or a section that your Web Page will display.

#### Get a List of Content Types

Get a list of the `Content Type` objects and their properties in a list.
This API retrieves a specific field of `Content Types`, and returns all the properties of the Content Types in `Pagination` format.

###### HTTP request
`GET <public-url>/api/cms/contents-types` 

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| q | Value to be search in `Name`, `Slug`, `Plural Slug` and `Singular Slug` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| order | Sort the results of the list by a given column | String | id |
| order_by | Direction of the sort and may be either `asc` or `desc` | String | desc |
| status | Column name passes as a `key` and Value passes as a `key's value` | Array |

```
status => [
    column_name => value
];
```

#### Get Content Type

Get a Item of the `Content Type` objects and relationships of a Content Type object.
This will retrieves a `Content Type` by `slug` value, and returns all the properties / Field Structure of Content Type.

###### HTTP request
`GET <public-url>/api/cms/contents-types/{slug}` 


### Contents

#### Get a List of Content

Get a list of the `Content` objects and their properties in a list.
This API retrieves a specific field of `Content`, and returns all the properties of the Contents in `Pagination` format.

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

```
status => [
    column_name => value
];
```

#### Get Content Type

Get a Item of the `Content` objects and relationships of a Content object.
This will retrieves a `Content` by two params: 

- singular_slug : `singular_slug` value of Content Type
- content_slug : `slug` value of Content

###### HTTP request
`GET <public-url>/api/cms/contents/{singular_slug}/{content_slug}` 




------
