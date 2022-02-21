# Laravel

[[toc]]

## Introduction

This is a guide to maintain a consistent and industry stand code in Laravel.


### Laravel Routes

- Meaningful / Predictable
- All small letter
- 2 words must be joined with `hyphen` (`-`)

This is an example of for `articles`

##### CRUD Routes

###### To show html page with listing of database records of blog

```http request
GET /articles/index
Content-Type: application/xhtml+xml
Controller-Method: ArticleController@index
Model-Method: ""
```

###### To show html page with listing of database records of blog
```http request
GET /articles
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```




###### Fetch specific record
```http request
GET /articles/1
Content-Type: application/json
Controller-Method: ArticleController@getItem
Model-Method: Article::getItem
```

###### Create a record
```http request
POST /articles/1
Content-Type: application/json
Controller-Method: ArticleController@createItem
Model-Method: Article::createItem
```

###### Update a record
```http request
PUT /articles/1
Content-Type: application/json
Controller-Method: ArticleController@updateItem
Model-Method: Article::updateItem
```

###### Delete a record
```http request
DELETE /articles/1
Content-Type: application/json
Controller-Method: ArticleController@deteleItem
Model-Method: Article::deteleItem
```

###### Fetch a relation of a record
```http request
GET /articles/1/relationships/author
Content-Type: application/json
Controller-Method: ArticleController@getItemAuthor
Model-Method: Article::getItemAuthor
```

###### Update a record's relationship
```http request
PATCH /articles/1/relationships/author
Content-Type: application/json
Controller-Method: ArticleController@updateItemAuthor
Model-Method: Article::updateItemAuthor
```

###### Delete a record's relationship
```http request
DELETE /articles/1/relationships/author
Content-Type: application/json
Controller-Method: ArticleController@deleteItemAuthor
Model-Method: Article::deleteItemAuthor
```

###### Fetch relations list of a record
```http request
GET /articles/1/relationships/comments
Content-Type: application/json
Controller-Method: ArticleController@getItemComments
Model-Method: Article::getItemComments
```

###### Update many relations of a record
```http request
PATCH /articles/1/relationships/comments
Content-Type: application/json
Controller-Method: ArticleController@updateItemComments
Model-Method: Article::updateItemComments
```

###### Delete many relations of a record
```http request
DELETE /articles/1/relationships/comments
Content-Type: application/json
Controller-Method: ArticleController@deleteItemComments
Model-Method: Article::deleteItemComments
```

###### Include a relation with a record
```http request
GET /articles/1?include=comments
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```

###### Include a relation's relation with a record
```http request
GET /articles/1?include=comments.created_by
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```

###### Sorting
```http request
GET /articles/1?sort=title,created_by
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```

###### Sorting in descending order of `created_by`, use minus `-` in front of parameter
```http request
GET /articles/1?sort=title,-created_by
Content-Type: application/json
Controller-Method: ArticleController@getList
Model-Method: Article::getList
```

##### API Routes
```http request
GET /api/articles

//----------------------------------------------

GET /api/articles/1

PATCH /api/articles/1

DELETE /api/articles/1

//----------------------------------------------

GET /api/articles/1/relationships/author

PATCH /api/articles/1/relationships/author

DELETE /api/articles/1/relationships/author

//----------------------------------------------

GET /api/articles/1/relationships/comments

PATCH /api/articles/1/relationships/comments

DELETE /api/articles/1/relationships/comments

//----------------------------------------------

GET /api/articles/1?include=comments

GET /api/articles/1?include=comments.created_by

GET /api/articles/1?sort=title,created_by

GET /api/articles/1?sort=title,-created_by

```

