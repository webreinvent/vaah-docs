# Laravel

[[toc]]

## Introduction

This is a guide to maintain a consistent and industry stand code in Laravel.


## Laravel Routes

- Meaningful / Predictable
- All small letter
- 2 words must be joined with `hyphen` (`-`)

This is an example of for `articles`

## CRUD Routes

### HTML listing page

```http request
GET /articles/index
Content-Type: application/xhtml+xml
Controller-Method: ArticleController@index
Model-Method: ""
```

### Listing
```http request
GET /articles
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```

### Bulk Create
```http request
POST /articles
Content-Type: application/json
Controller-Method: ArticleController@createItems
Model-Method: Article::createItems
```

### Bulk Update (status change)
```http request
PUT /articles
PATCH /articles
Content-Type: application/json
Controller-Method: ArticleController@updateItems
Model-Method: Article::updateItems
```

### Bulk Delete
```http request
DELETE /articles
Content-Type: application/json
Controller-Method: ArticleController@deteleItems
Model-Method: Article::deteleItems
```

###### Create a record
```http request
POST /articles/1
Content-Type: application/json
Controller-Method: ArticleController@createItem
Model-Method: Article::createItem
```


### Read a record
```http request
GET /articles/1
Content-Type: application/json
Controller-Method: ArticleController@getItem
Model-Method: Article::getItem
```

### Update a record (update, soft delete, status change etc)
```http request
PUT /articles/1
PATCH /articles/1
Content-Type: application/json
Controller-Method: ArticleController@updateItem
Model-Method: Article::updateItem
```

### Delete a record (hard deleted)
```http request
DELETE /articles/1
Content-Type: application/json
Controller-Method: ArticleController@deteleItem
Model-Method: Article::deteleItem
```

### Fetch a relation of a record
```http request
GET /articles/1/relationships/author
Content-Type: application/json
Controller-Method: ArticleController@getItemAuthor
Model-Method: Article::getItemAuthor
```

### Attach a relation to a record
```http request
POST /articles/1/relationships/author
Content-Type: application/json
Controller-Method: ArticleController@attachItemAuthor
Model-Method: Article::attachItemAuthor
```

### Update a relation to a record
```http request
PUT /articles/1/relationships/author
PATCH /articles/1/relationships/author
Content-Type: application/json
Controller-Method: ArticleController@updateItemAuthor
Model-Method: Article::updateItemAuthor
```

### Delete a relation to a record
```http request
DELETE /articles/1/relationships/author
Content-Type: application/json
Controller-Method: ArticleController@deleteItemAuthor
Model-Method: Article::deleteItemAuthor
```

### Fetch list of relations
```http request
GET /articles/1/relationships/comments
Content-Type: application/json
Controller-Method: ArticleController@getItemComments
Model-Method: Article::getItemComments
```

### Update list of relations
```http request
PUT /articles/1/relationships/comments
PATCH /articles/1/relationships/comments
Content-Type: application/json
Controller-Method: ArticleController@updateItemComments
Model-Method: Article::updateItemComments
```

### Delete list of relations
```http request
DELETE /articles/1/relationships/comments
Content-Type: application/json
Controller-Method: ArticleController@deleteItemComments
Model-Method: Article::deleteItemComments
```

### Include relations
```http request
GET /articles?include=comments
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```

### Include relation's relations
```http request
GET /articles?include=comments.created_by
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```

### Sorting
```http request
GET /articles?sort=title,created_by
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```

###### Sorting in descending order of `created_by`, use `:desc` in front of parameter
```http request
GET /articles?sort=title,created_by:desc
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```


## Query Operators

|MySql Operator| Query Parameter | Purpose |
|--|--|--|
|=|eq| Equal to
|!=|not| Not equal to
|<|lt| Less than
|<=|lte| Less than or equal to
|>|gt| Greater than
|>=|gte| Greater than or equal to
|like|like|  Like search query
|between|btw|  Between

## API Routes

#### Get list of articles with pagination
```http request

GET /api/articles
```

### Specify page number

```http request
GET /api/articles?page=5
```

### Limit the results
```http request
GET /api/articles?limit=10
```


### Sort By ascending order of title then created_by
```http request
GET /api/articles?sort=title,created_by
```

### Sort By in ascending order of title then descending order created_by
```http request
GET /api/articles?sort=title,created_by:desc,price
```

### Include comment in the article (relationship)
```http request
GET /api/articles?include=comments
```

### Include comment with created_by relationship
```http request
GET /api/articles?include=comments.created_by
```

### Examples of filters with operators
```http request
GET /api/articles?filter[is_active]=true
GET /api/articles?filter[created_by]=eq:5
GET /api/articles?filter[title]=like:hello
GET /api/articles?filter[price]=gt:5
GET /api/articles?filter[date]=btw:5|7

GET /api/articles?filter[is_active]=true&filter[created_by]=eq:5&filter[date]=btw:5|7
```


### Multiple operators
```http request
GET /api/articles?filter[price]=gt:5|AND|lt:10
```


### Get single record of article
```http request
GET /api/articles/1
```

### To create single article
```http request
POST /api/articles
```

### Update single record of article
```http request
PUT /api/articles/1
PATCH /api/articles/1
```

### Delete single record of article
```http request
DELETE /api/articles/1
```


### Get single record of article with it's author
```http request
GET /api/articles/1/relationships/author
```

### Attach author (relationship) to the article
```http request
POST /api/articles/1/relationships/author
```

### Update author (relationship)
```http request
PUT /api/articles/1/relationships/author
PATCH /api/articles/1/relationships/author
```

### Delete author (relationship)
```http request
DELETE /api/articles/1/relationships/author
```



### Get article with multiple comments (relationships)
```http request
GET /api/articles/1/relationships/comments
```

### Create/Attach comments (relationships)
```http request
POST /api/articles/1/relationships/comments
```

### Update article with multiple comments (relationships)
```http request
PUT /api/articles/1/relationships/comments
PATCH /api/articles/1/relationships/comments
```

### Delete multiples comments (relationships)
```http request
DELETE /api/articles/1/relationships/comments
```

