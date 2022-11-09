# Code

[[toc]]

## Introduction

This is a guide to maintain a consistent and industry stand coding practices.

## Naming conventions

### Variables

- Meaningful / Predictable
- Small letters
- 2 letter much be joined with `underscore` (`_`)

**Wrong Examples:**

```php
$temp_name = "John";
$my_name = "John";
$n1 = "John";
$var = "John";
$n = "John";
$na = "John";
$tempName= "John";
$firstName= "John";
$FirstName= "John";
$getFirstName= "John";
$getfirstname= "John";
$get_first_name= "John";
```

**Correct Examples:**
```php
$first_name = "John";
$last_name = "Leo";
$amount = 34;
$price = 643;
$total = 800;
```

### Constants

- Meaningful / Predictable
- All capital letters
- 2 letter much be joined with `underscore` (`_`)

**Wrong Examples:**

```php
define('db_HOST', 'localhost'); 
define('DBUSER', 'db_user'); 
define('DB_pASS', 'password$%@#');
define('db_name', 'db_app');
```

**Correct Examples:**
```php
define('DB_HOST', 'localhost'); 
define('DB_USER', 'db_user'); 
define('DB_PASS', 'password$%@#');
define('DB_NAME', 'db_app');
```

### Functions

- Meaningful / Predictable
- Camel Cased
- Naming `<action><entity>` eg: `deleteUser`

**Wrong Examples:**

```php
function GetUrl(){};
function Get_Url(){};
function get_Url(){};
function get_Url(){};
function get_url(){};
function geturl(){};
function getu(){};
function namesList(){};
function namesList(){};
```

**Correct Examples:**
```php
function getFirstName(){};
function getName(){};
function setName(){};
function storeName(){};
```


### Classes

- Meaningful / Predictable
- Studly Caps / PascalCase

**Wrong Examples:**

```php
class cart_total(){};
function cartTotal(){};
function cart_Total(){};
function Carttotal(){};
function Cart_total(){};
```

**Correct Examples:**
```php
function CartTotal(){};
function User(){};
function Role(){};
```

### Response

Each `function` or `method` or `api` must return response in following format:

#### Success

```json
{
  "success": true,
  "messages": ["Action was success", "Add more records"],
  "data": {
    "user": {
      "id": 1,
      "name": "John"
    },
    "articles": [
      {
        "id": 1,
        "title": "Article 1"
      },
      {
        "id": 2,
        "title": "Article 2"
      }
    ]
  }
}
```

#### Fail
```json
{
  "success": false,
  "errors": ["Something went wrong", "Try again"],

}
```

#### Optional Response Variables
```json
{
  "hint": "Details to debug the response. Eg: role with slug 'admin' does note exist ",
  "code": 404,
  "meta": {}
}
```
