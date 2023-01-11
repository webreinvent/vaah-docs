# Users

[[toc]]

## Purpose

A system for authenticating users and storing user information is called as user management. Currently, `VaahCMS` offers two login options: `Login via Password` and `Login via OTP`. You can manage every aspect of your user accounts in `VaahCMS`, including altering user properties, resetting passwords, enabling or disabling users, and more.

## Features & Demos

#####  User Listing

Obtain a comprehensive list of all of your users, along with their associated data. All of your users' information is contained in the Users table, and the `VaahCMS` offers all users' administration tools at your fingertips. You have the ability to `add`, `edit`,  and `remove` users. Additionally, you may alter user details and `roles` at the same location where you can `search`, `sort`, and `filters` your users' data.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_TIKvbvuNdu.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

---

##### Create a User 

You can view the video attached below to learn how to create a new user.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_f9KBTI8yTZ.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

---

##### Manage User Roles

You can assign roles to a user in `Users` section. By clicking on `Role` column, a page will open that contain list of Roles along with `Yes/No` Button.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_IUIS4wUJh0.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>


## Required User Permissions To Access This Section


| Permissions          | Description                                           |
| ------------- | ------------------------------------------------------------ |
|Has Access Of Users Section           | This will allow user to see the link of user section.        |
| Can Create Users                      | This will allow user to add anything in the user section.    |
| Can Read Users                        | This will allow user to view anything in the user section.   |
| Can Update Users                      | This will allow user to edit anything in the user section.   |
| Can Delete Users                      | This will allow user to delete anything in the user section. |
| Can Manage Users                      | This will allow user to manage anything in the user section. |
| Can See Users Contact Details         | This will allow user to view contact (email, mobile) detail in the user section. |

## Files

- Laravel Route: `vaahcms/Routes/backend/route-users.php`
- Laravel Controller: `vaahcms/Http/Controllers/Backend/UsersController.php`
- Laravel Model: `vaahcms/Models/User.php`
- Vue Route: `vaahcms/Vue/routes/vue-routes-users.js`
- Vue Store: `vaahcms/Vue/stores/store-users.js`
- Vue Page Directory: `vaahcms/Vue/pages/users`

## Methods

###### Accessors

To know about `Accessors`, see [Laravel Documentation](https://laravel.com/docs/9.x/eloquent-mutators#defining-an-accessor)

| Method Name        | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| getAvatarAttribute | Get value of `avatar_url` column from database or `Gravatar` url. To know about Gravatar, [click here](https://en.gravatar.com/) |
| getMetaAttribute   | Get value of `meta` column in JSON                           |
| getNameAttribute   | Get value of `display_name` column or joined string of `first_name`, `middle_name` and `last_name` column from database. |


------

###### Mutators

To know about `Mutators`, see [Laravel Documentation](https://laravel.com/docs/9.x/eloquent-mutators#defining-a-mutator)

| Method Name            | Parameter | Description                                                  |
| ---------------------- | --------- | ------------------------------------------------------------ |
| setMetaAttribute       | `$value`  | Set json encoded value in `meta` column                      |
| setFirstNameAttribute  | `$value`  | Set first character of First Name capitalized                |
| setMiddleNameAttribute | `$value`  | Set first character of Middle Name capitalized               |
| setLastNameAttribute   | `$value`  | Set first character of Last Name capitalized                 |
| setPasswordAttribute   | `$value`  | Hashing of Password. `prevent_password_attr_set` This variable is defined to ignore this mutator. |
| setLoginOtpAttribute   | `$value`  | Hashing of Login OTP code                                    |

------

###### Scopes

To know about `Scopes`, see [Laravel Documentation](https://laravel.com/docs/9.x/eloquent#dynamic-scopes)

| Method Name       | Parameter                | Description                                                  |
| ----------------- | ------------------------ | ------------------------------------------------------------ |
| scopeIsActive     | `$query`                 | Return Active User (is-active == 1)                          |
| scopeBetweenDates | `$query`  `$from`  `$to` | Return User which is created between `$from` date & `$to` date |
| scopeExclude      | `$query`  `$columns`     | The array in `$columns` parameter is exclude from select query. |

------

###### Relationships

To know about `Relationships`, see [Laravel Documentation](https://laravel.com/docs/9.x/eloquent-relationships#defining-relationships)

| Method Name   | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| createdByUser | Return data of `User` model that has an id which matches the `created_by` column of User. |
| updatedByUser | Return data of `User` model that has an id which matches the `updated_by` column of User. |
| deletedByUser | Return data of `User` model that has an id which matches the `deleted_by` column of User. |
| roles         | Return data of `Role` model with `Pivot` that is assigned to Users. |



------



###### Non Static

| Method Name            | Parameter                      | Description                                                  |
| ---------------------- | ------------------------------ | ------------------------------------------------------------ |
| getTableColumns        |                                | Get array of all columns name in User table.                 |
| getFormFillableColumns |                                | Get array of some column name in User table.                 |
| activeRoles            |                                | Return active Roles of User.                                 |
| hasRole                | `$role_slug`                   | Return `true` if role in `$role_slug` is active.             |
| isAdmin                |                                | Return `true` if `Administrator` role is active.             |
| hasPermission          | `$permission_slug`  `$details` | Return `true` if permission in `$permission_slug` is active and their associated role is active. |



------



###### Static

| Method Name          | Parameter                            | Description                                                  |
| -------------------- | ------------------------------------ | ------------------------------------------------------------ |
| User::findByUsername       | `$username`  `$columns = array('*')` | The `findByUsername` method find users only by the `username` and return given columns. |
| User::findByEmail          | `$email`  `$columns = array('*')`    | The `findByEmail` method find users only by the `email` and return given columns. |
| User::countAdministrators  |                                      | The `countAdministrators` method return number of users which has `Administrator` role. |
| User::getByRoles           | `$array_role_slugs`                  | The `getByRoles` method return a list of the users which has a role exists in `$array_role_slugs`. |
| User::getByRolesOnlyIds    | `$array_role_slugs`                  | The `getByRolesOnlyIds` method return only `id` of the users which has a role exists in `$array_role_slugs`. |
| User::getByRolesOnlyEmails | `$array_role_slugs`                  | The `getByRolesOnlyEmails` method return only `email` of the users which has a role exists in `$array_role_slugs`. |
| User::rulesAdminCreate     |                                      | The `rulesAdminCreate` method return the array of validation rules for User. |
| User::isLastAdmin          |                                      | The `isLastAdmin` method return `true` if Application has only one User of Administrator role. |
| User::getAvatarById        | `$id`                                | The `getAvatarById` method find users only by the `id` and return avatar url. |
| User::getUsersForAssets    |                                      | The `getUsersForAssets` method return list of `active` users with following columns: `id`, `first_name`, `middle_name`, `last_name` |


## API

VaahCMS has APIs for every method, allowing you to interact with `NuxJS` or other frameworks.

You can access APIs method from `vaachms/Http/Controllers/Api/UsersController.php` and routes from `vaahcms/Routes/api/api-routes-users.php`

We mention some methods bellow which help you to understand the structure.

###### create

##### Method: `POST`
##### URL: `<public-url>/api/users/users/`

##### Sample Request

**Parameters:** `$request`

```php
$request =  new Request([
    'new_item' => [
        'alternate_email'       => null,
        'avatar_url'            => null,
        'bio'                   => null,
        'birth'                 => null,
        'country'               => null,
        'country_calling_code'  => null,
        'country_code'          => null,
        'designation'           => null,
        'display_name'          => null,
        'email'                 => null,    // required
        'first_name'            => null,    // required
        'gender'                => null,
        'is_active'             => null,    // required       //true:false:0:1
        'last_name'             => null,
        'middle_name'           => null,
        'password'              => null,
        'phone'                 => null,
        'status'                => null,    // required       //active:inactive
        'timezone'              => null,
        'title'                 => null,
        'username'              => null,
        'website'               => null
    ]
]);
```

Creates a new user for the database on which the method is run. `\WebReinvent\VaahCms\Models\User::create($request);` returns a duplicate user error if the email already exists in the `User` table.

##### Sample Response

```json
{
  "data":  {
    "item": {
      ...
    }
  },
  "messages": "Saved successfully.",
  "success": true
}
```

------

##### Get List

##### Method: `GET`
##### URL: `<public-url>/api/users/users/`

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
      ...
  },
  "success": true
}
```
---

###### validation

**Parameters:** `$inputs`

```php 
$inputs = [
    'first_name' => null,    // required
    'email'      => null,    // required
    'is_active'  => null,    // required       //true:false:0:1
    'status'     => null,    // required       //active:inactive
];
```

This function uses the [Laravel Validator](https://laravel.com/docs/9.x/validation#validation-quickstart) to validate the user's following columns: `first_name`, `email`, `is_active`, and `status`.
