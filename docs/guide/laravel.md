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

### Create one or many records
```http request
POST /articles
Content-Type: application/json
Controller-Method: ArticleController@createList
Model-Method: Article::createList
```

If an array is passed, multiple records will be created or else single record will be
created.

Eg: Single Record
```php
$inputs = [
  "first_name" => 'John'
  "last_name" => 'Leo'
]
```

Eg: Multiple Records

```php
$inputs = [
  [
  "first_name" => 'John'
  "last_name" => 'Leo'
  ],
  [
  "first_name" => 'David'
  "last_name" => 'Leo'
  ]
]
```



### Bulk Update (eg: bulk status change)
```http request
PUT /articles
PATCH /articles
Content-Type: application/json
Controller-Method: ArticleController@updateList
Model-Method: Article::updateList
```

### Bulk Delete
```http request
DELETE /articles
Content-Type: application/json
Controller-Method: ArticleController@deteleList
Model-Method: Article::deteleList
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

## Laravel Community Guidelines for Good Coding Practices

### Shorter and readable syntax

- Use shorter and more readable syntax where possible

**Bad Examples**
```php
$request->session()->get('cart');
$request->input('name');
```

**Good Example**
```php 
session('cart');
$request->name;
```

**More Examples**    
|Common syntax | Shorter and more readable syntax |  
|:--|:--|  
|Session::get('cart') | session('cart') |  
|$request->session()->get('cart') |  session('cart') |
|Session::put('cart', $data)  |  session(['cart' => $data]) |  
|$request->input('name'), Request::get('name') | $request->name, request('name') |
|return Redirect::back()  |  return back() |
|is_null($object->relation) ? null : $object->relation->id | optional($object->relation)->id |  
|return view('index')->with('title', $title)->with('client', $client) |  return view('index', compact('title', 'client')) |  
|$request->has('value') ? $request->value : 'default'; | $request->get('value', 'default') |
|Carbon::now(), Carbon::today() | now(), today() |
|App::make('Class') | app('Class') |
|->where('column', '=', 1) | ->where('column', 1) |
|->orderBy('created_at', 'desc')  |  ->latest() |  
|->orderBy('age', 'desc')  | ->latest('age') |
|->orderBy('created_at', 'asc') | ->oldest() |
|->select('id', 'name')->get() | ->get(['id', 'name']) |
|->first()->name  |  ->value('name') |

### Avoid Fat Methods
- Avoid fat controllers and write frequent queries in model.
- DB related logic should be in `Eloquent models` or in `Repository`/`Helper` classes.
- Do not include business logic in Controllers. They should be in `Repository`/`Helper` classes.
- Methods and Classes should adhere to the `Single Responsibility Principle`.
- Don't use extensive if-else nesting. Instead, check for negative conditions first.
- Do not keep commented code in methods or classes.

**Bad Examples**
```php 
public static function getItem($id)
{
    
    if(!Auth::user()->hasPermission('hrc-can-read-customers')
        && !EqCustomerUser::hasPermission(\Auth::user(),'hrc-can-read-customers')) // check Permissions
    {
        if(Auth::user()){
            $item = self::where('id', $id)
            ->withTrashed()
            ->first();
    
    
            $response['status'] = 'success';
            $response['data'] = $item;
        
            return $response;
        }
        else{
            $response['status'] = 'failed';
            $response['errors'][] = 'User not found';
    
            return $response;
        }
    }
    else{
        $response['status'] = 'failed';
        $response['errors'][] = trans("vaahcms::messages.permission_denied");
        return $response;
    }
    
    // $user = Auth::user();
    // if(!$user) {
    //    $response['status'] = 'failed';
    //    $response['errors'][] = 'User not found';
    //
    //    return $response;
    // }

}

```


**Good Examples**
```php 
// Add this method to Helper/Repository class
public static checkPermission($permission_slug){
    if(!Auth::user()->hasPermission('hrc-can-read-customers')){
        $response['status'] = 'failed';
        $response['errors'][] = trans("vaahcms::messages.permission_denied");
        return $response;
    }
    
    $response['status'] = 'success';
    $response['messages'][] = 'Action is successful';
}


// this code will be in model
public static function getItem($id)
{
    $permission_response = Helper::checkPermission('hrc-can-read-customers');
    if($permission_response['status'] !== 'success') return $permission_response;
    
    $user = Auth::user();
    if(!$user) {
        $response['status'] = 'failed';
        $response['errors'][] = 'User not found';

        return $response;
    }

    $item = self::where('id', $id)
        ->withTrashed()
        ->first();

    $response['status'] = 'success';
    $response['data'] = $item;
    return $response;
}
```

### Prefer to use Eloquent over raw SQL queries

- Prefer to use Eloquent over using Query Builder and raw SQL queries. Prefer collections to arrays.
- Eloquent allows you to write readable and maintainable code. Also, Eloquent has great built-in tools like soft deletes, events, scopes etc.

**Bad Example**

```php 
SELECT *
FROM `articles`
WHERE EXISTS (SELECT *
FROM `users`
WHERE `articles`.`user_id` = `users`.`id`
AND EXISTS (SELECT *
FROM `profiles`
WHERE `profiles`.`user_id` = `users`.`id`)
AND `users`.`deleted_at` IS NULL)
AND `verified` = '1'
AND `active` = '1'
ORDER BY `created_at` DESC
```

**Good Example**

```php 
Article::has('user.profile')->verified()->latest()->get();
```