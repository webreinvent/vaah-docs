# Generators

Improve your productivity via quick command generator

Make sure you have install VaahCLI from following command:

```
npm i vaah -g
```


Use following command to generate `module`:

```
vaah cms:m
```


Use following command to generate `theme`:

```
vaah cms:t
```

:::: code-group
::: code-group-item Module

::: tip Module
| Type         |      | Command                                      |
| ------------ | ---- | -------------------------------------------- |
| migration    |      | `vaah cms:m-make migration <module> <name>`    |
| seed         |      | `vaah cms:m-make seed <module> <name>`         |
| model        |      | `vaah cms:m-make model <module> <name>`        |
| controller   |      | `vaah cms:m-make controller <module> <name>`   |
| view         |      | `vaah cms:m-make view <module> <name>`         |
| middleware   |      | `vaah cms:m-make middleware <module> <name>`   |
| observer     |      | `vaah cms:m-make observer <module> <name>`     |
| trait        |      | `vaah cms:m-make trait <module> <name>`        |
| test         |      | `vaah cms:m-make test <module> <name>`         |
| event        |      | `vaah cms:m-make event <module> <name>`        |
| listener     |      | `vaah cms:m-make listener <module> <name>`     |
| mail         |      | `vaah cms:m-make mail <module> <name>`         |
| notification |      | `vaah cms:m-make notification <module> <name>` |

:::

:::
::: code-group-item Theme
::: tip Theme

| Type         |      | Command                                      |
| ------------ | ---- | -------------------------------------------- |
| migration    |      | `vaah cms:t-make migration <module> <name>`    |
| seed         |      | `vaah cms:t-make seed <module> <name>`         |
| model        |      | `vaah cms:t-make model <module> <name>`        |
| controller   |      | `vaah cms:t-make controller <module> <name>`   |
| view         |      | `vaah cms:t-make view <module> <name>`         |
| middleware   |      | `vaah cms:t-make middleware <module> <name>`   |
| observer     |      | `vaah cms:t-make observer <module> <name>`     |
| trait        |      | `vaah cms:t-make trait <module> <name>`        |
| test         |      | `vaah cms:t-make test <module> <name>`         |
| event        |      | `vaah cms:t-make event <module> <name>`        |
| listener     |      | `vaah cms:t-make listener <module> <name>`     |
| mail         |      | `vaah cms:t-make mail <module> <name>`         |
| notification |      | `vaah cms:t-make notification <module> <name>` |

:::

:::
::: code-group-item Route

```php
Route::group(
[
 'prefix' => 'name',
 'middleware' => ['web'],
],
function () {
 //---------------------------------------------------------
 Route::get('/', 'NameController@getIndex')
->name('name.index');
 //---------------------------------------------------------
 Route::any('/assets', 'NameController@getAssets')
->name('name.assets');
 //---------------------------------------------------------
 Route::post('/create', 'NameController@postCreate')
->name('name.create');
 //---------------------------------------------------------
 Route::any('/list', 'NameController@getList')
->name('name.list');
 //---------------------------------------------------------
 Route::any('/item/{uuid}', 'NameController@getItem')
->name('name.item');
 //---------------------------------------------------------
 Route::post('/store/{uuid}', 'NameController@postStore')
->name('name.store');
 //---------------------------------------------------------
 Route::post('/actions/{action_name}', 'NameController@postActions')
->name('name.actions');
 //---------------------------------------------------------
});

```

:::

::::
