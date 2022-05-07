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

### Registration : -

#### Create

Create new registration with HTTP request. During the creation you can set up attributes.

##### URL
```php
GET/POST <public-url>/api/registrations/create
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "email",                    // required
    "username",
    "password",                 // required
    "display_name",
    "title",
    "designation",
    "first_name",               // required
    "middle_name",
    "last_name",
    "gender",                   // m for male , f for female , o for Other 
    "country_calling_code",
    "phone", 
    "bio",
    "timezone",
    "alternate_email",
    "avatar_url",
    "birth", 
    "country",
    "country_code",
    "status",                  // user-created , email-verified , email-verification-pending
    "activation_code",
    "activation_code_sent_at",
    "activated_ip",
    "invited_by",
    "invited_at",
    "invited_for_key", 
    "invited_for_value", 
    "user_id",
    "user_created_at", 
    "created_ip",
    "registration_id", 
    "meta"                     // json format
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "item": {
            .............
            .............
        }
    },
    "messages": [
        "Saved successfully."
    ]
}
```
#### Get a List

Get a list of the Registration objects and their properties in a list with Pagination.

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | ------------------ | -------------------- |
| q | Value to be search in `first_name`, `middle_name`, `last_name`, `display_name`, `email` and `id` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| from | Initial Date  | String<br />(Y-m-d) |
| to | Final Date | String<br />(Y-m-d) |
| status | Status of Registration and may be either `email-verification-vending`, `email-verified` or `user-created`| String |
| trashed | Set true to show `Trashed (Soft Delete)` data | Boolean | false

##### URL
```php
GET/POST <public-url>/api/registrations
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    'q'                         => 'search_item', 
    'from'                      =>  Y-m-d, 
    'to'                        =>  Y-m-d, 
    'status'                    => 'email-verification-vending / email-verified / user-created', 
    'per_page'                  =>  20,
    'trashed'                   =>  false,          // true, false           
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "list": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
                ..............
            ],
            "first_page_url": "<public-url>/api/registrations?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "<public-url>/api/registrations?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "<public-url>/api/registrations?page=1",
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
            "path": "<public-url>/api/registrations",
            "per_page": 20,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        }
    }
}
```
#### Get Item

Get a Item of the Registration objects. This will retrieves a User by their custom attributes, 
and returns all the properties of Registration.

Column can be id, uuid, email, username or Registration's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/registrations/{column}/{value}
```

##### Request samples
```php
parameter = [

   'api_token'                 => 'xxxxxxxxxxx',   // for authentication
   'trashed'                   => false,          // true, false  
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        .............
        .............
        .............
    }
}
```
####  Update

Simple HTTP request to Registrations API and you can update standard attributes for a user within few seconds!

Column can be id, uuid, email, username or Registration's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/registrations/{column}/{value}/update
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "email",                    // required
    "username",
    "password",                 // required
    "display_name",
    "title",
    "designation",
    "first_name",               // required
    "middle_name",
    "last_name",
    "gender",                   // m for male , f for female , o for Other 
    "country_calling_code",
    "phone", 
    "bio",
    "timezone",
    "alternate_email",
    "avatar_url",
    "birth", 
    "country",
    "country_code",
    "status",                  // required - user-created , email-verified , email-verification-pending
    "activation_code",
    "activation_code_sent_at",
    "activated_ip",
    "invited_by",
    "invited_at",
    "invited_for_key", 
    "invited_for_value", 
    "user_id",
    "user_created_at", 
    "created_ip",
    "registration_id", 
    "meta"                     // json format
];
```

##### Response samples
```php
{
    "status": "success",
    "messages": [
        "Saved"
    ],
    "data": {
        ...........
        ...........
        ...........
    }
}
```
#### Delete

Simple HTTP request to Registration API to delete registration.

Column can be id, uuid, email, username or Registration's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/registrations/{column}/{value}/delete
```

##### Response samples
```php
{
    "status": "success",
    "data": [],
    "messages": [
        "Action was successful"
    ]
}
```
#### Create User

Simple HTTP request to Registration API to create User.

##### URL
```php
GET/POST <public-url>/api/registrations/{column}/{value}/create-user
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "user": {
            ...........
            ...........
            ...........
        }
    },
    "messages": [
        "User is created."
    ]
}
```

### Users

The [User](/vaahcms/basic/users.md) API provides operations to manage users in your organization.

#### Create user

Create new user with HTTP request. During the creation you can set up attributes.

##### URL

```
GET <public-url>/api/users/create?api_token=xxxxxxxxxxx
```

##### Request samples
```
POST <public-url>/api/users/create
 
param = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "email",                    // required
    "username",
    "password",                 // required
    "display_name",
    "title",
    "designation",
    "first_name",               // required
    "middle_name",
    "last_name",
    "gender",                   // m for male , f for female , o for Other 
    "country_calling_code",
    "phone", 
    "bio",
    "timezone",
    "alternate_email",
    "avatar_url",
    "birth", 
    "country",
    "country_code",
    "is_active",                // required       true , false
    "status",                   // required       active , in-active
    "activation_code",
    "activation_code_sent_at",
    "activated_ip",
    "invited_by",
    "invited_at",
    "invited_for_key", 
    "invited_for_value", 
    "user_id",
    "user_created_at", 
    "created_ip",
    "registration_id", 
    "meta"                     // json format
];

```

##### Response samples

```
{
    "status": "success",
    "data": {
        "item": {
           ..........
           ..........
           ..........
        }
    },
    "messages": [
        "Saved successfully."
    ]
}
```

#### Get a List of Users

Get a list of the `User` objects and their properties in a list with `Pagination`.

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | ------------------ | -------------------- |
| q | Value to be search in `first_name`, `middle_name`, `last_name`, `display_name`, `email` and `id` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| from | Initial Date  | String<br />(Y-m-d) |
| to | Final Date | String<br />(Y-m-d) |
| status | Status of User and may be either `active` or `inactive`| String |
| trashed | Set true to show `Trashed (Soft Delete)` data | Boolean | false

##### URL

```
GET <public-url>/api/users?api_token=xxxxxxxxxxx
```

##### Request samples
```
POST <public-url>/api/users
 
param = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    'q'                         => 'search_item', 
    'from'                      =>  Y-m-d, 
    'to'                        =>  Y-m-d, 
    'status'                    => 'active / inactive', 
    'per_page'                  =>  20,
    'trashed'                   =>  false,          // true, false        
];

```

##### Response samples

```
{
    "status": "success",
    "data": {
        "list": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
                ..............
            ],
            "first_page_url": "<public-url>/api/users?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "<public-url>/api/users?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "<public-url>/api/users?page=1",
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
            "path": "<public-url>/api/users",
            "per_page": 20,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        }
    }
}
```

#### Get User Item

Get a Item of the `User` objects .
This will retrieves a `User` by their `custom attributes`, and returns all the properties of User.

Column can be `id`, `uuid`, `email`, `username` or User's attribute and their value.

##### URL
```
<public-url>/api/cms/users/{column}/{value}`
```

##### Request samples

```
parameter = [

   'trashed'                   => false,          // true, false  
];
```

##### Response samples

```
{
    "status": "success",
    "data": {
        .............
        .............
        .............
    }
}
```
#### Update

Simple HTTP request to Users API and you can update standard attributes for a user within few seconds! 

Column can be `id`, `uuid`, `email`, `username` or User's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/users/{column}/{value}/update
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "email",                    // required
    "username",
    "password",                 // required
    "display_name",
    "title",
    "designation",
    "first_name",               // required
    "middle_name",
    "last_name",
    "gender",                   // m for male , f for female , o for Other 
    "country_calling_code",
    "phone", 
    "bio",
    "website",
    "timezone",
    "alternate_email",
    "avatar_url",
    "birth", 
    "country",
    "country_code",
    "last_login_at",
    "last_login_ip",
    "remember_token",
    "login_otp",
    "api_token",
    "api_token_used_at",
    "api_token_used_ip",
    "is_active",
    "activated_at",
    "status",                  // required - user-created , email-verified , email-verification-pending
    "affiliate_code",
    "affiliate_code_used_at",
    "reset_password_code",
    "reset_password_code_sent_at",
    "reset_password_code_used_at",
    "foreign_user_id",
    "meta"                     // json format
    "created_ip"
];
```

##### Response samples
```php
{
    "status": "success",
    "messages": [
        "Saved"
    ],
    "data": {
        ...........
        ...........
        ...........
    }
}
```
#### Delete

Simple HTTP request to Users API to delete user.

Column can be `id`, `uuid`, `email`, `username` or User's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/users/{column}/{value}/delete
```

##### Response samples
```php
{
    "status": "success",
    "data": [],
    "messages": [
        "Action was successful"
    ]
}
```
#### Get User's Roles

Get `user's roles` via GET/POST request.

Column can be `id`, `uuid`, `email`, `username` or User's attribute and their value.


##### URL
```php
GET/POST <public-url>/api/users/{column}/{value}/roles
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'per_page'                  =>  20,
];
```

##### Response samples
```php
{
    "data": {
        "user": {
            .............
            .............
            .............
        },
        "roles": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
            ],
            "first_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles?page=1",
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
            "path": "http://localhost/vikram/vaahcms-dev-env/public/api/users/id/2/roles",
            "per_page": 20,
            "prev_page_url": null,
            "to": 3,
            "total": 3
        }
    },
    "status": "success"
}
```
#### User has Role

API to check if an user has a specific role.

Column can be `id`, `uuid`, `email`, `username` or User's attribute and their value.


##### URL
```php
GET/POST <public-url>/api/users/{column}/{value}/roles/{role_slug}
```

##### Response samples
```php
{
    "data": true/false,
    "status": "success"
}
```
#### Get User's Permissions

Get `user's permissions` via GET/POST request.

Column can be `id`, `uuid`, `email`, `username` or User's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/users/{column}/{value}/permissions
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'per_page'                  =>  20,
];
```

##### Response samples
```php
{
    "data": {
        "user": {
            .............
            .............
            .............
        },
        "permissions": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
            ],
            "first_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions?page=1",
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
            "path": "http://localhost/vikram/vaahcms-dev-env/public/api/users/{column}/{value}/permissions",
            "per_page": 20,
            "prev_page_url": null,
            "to": 3,
            "total": 3
        }
    },
    "status": "success"
}
```
#### User has Permission

API to check if an user has a specific permission.

Column can be `id`, `uuid`, `email`, `username` or User's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/users/{column}/{value}/permissions/{permission_slug}
```

##### Response samples
```php
{
    "data": true/false,
    "status": "success"
}
```

### Roles : -

#### Create

Create new role with HTTP request. During the creation you can set up attributes.

##### URL
```php
GET/POST <public-url>/api/roles/create
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "name",                     // required
    "slug",                     // required
    "details",                  // required
    "is_active",                // required
    "type",                     // backend, frontend
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "item": {
           ..........
           ..........
           ..........
        }
    },
    "messages": [
        "Saved successfully."
    ]
}
```
#### Get a List

Get a list of the Role objects and their properties in a list with Pagination.

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | ------------------ | -------------------- |
| q | Value to be search in `name` and `slug` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| from | Initial Date  | String<br />(Y-m-d) |
| to | Final Date | String<br />(Y-m-d) |
| filter | Status of Role and may be either `active`, `inactive`, `frontend` or `backend`| String |
| trashed | Set true to show `Trashed (Soft Delete)` data | Boolean | false

##### URL
```php
GET/POST <public-url>/api/roles
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'from'                      =>  Y-m-d', 
    'to'                        =>  Y-m-d, 
    'filter'                    => 'active / inactive / frontend / backend', 
    'per_page'                  =>  20,
    'trashed'                   =>  false,          // true, false        
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "list": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
                ..............
            ],
            "first_page_url": "<public-url>/api/roles?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "<public-url>/api/roles?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "<public-url>/api/roles?page=1",
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
            "path": "<public-url>/api/roles",
            "per_page": 20,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        }
    }
}
```
#### Get Item

Get a Item of the Role objects . This will retrieves a Role by their custom attributes,
 and returns all the properties of Role.

Column can be id, uuid, email, username or Role's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/roles/{column}/{value}
```

##### Request samples
```php
parameter = [

   'api_token'                 => 'xxxxxxxxxxx',   // for authentication
   'trashed'                   => false,          // true, false  
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        .............
        .............
        .............
    }
}
```
#### Update

Simple HTTP request to Role API and you can update standard attributes for a role within few seconds!

Column can be id, uuid, email, username or Role's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/roles/{column}/{value}/update
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "name",                     // required
    "slug",                     // required
    "details",                  // required
    "is_active",                // required
    "type",                     // backend, frontend
];
```

##### Response samples
```php
{
    "status": "success",
    "messages": [
        "Saved"
    ],
    "data": {
        ...........
        ...........
        ...........
    }
}
```
#### Delete

Simple HTTP request to Role API to delete user.

Column can be id, uuid, email, username or Role's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/roles/{column}/{value}/delete
```

##### Response samples
```php
{
    "status": "success",
    "data": [],
    "messages": [
        "Action was successful"
    ]
}
```
#### Get Role's Users

Get role's users via GET/POST request.

Column can be id, uuid, email, username or Role's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/roles/{column}/{value}/users
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'per_page'                  =>  20,
];
```

##### Response samples
```php
{
    "data": {
        "role": {
            .............
            .............
            .............
        },
        "users": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
            ],
            "first_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users?page=1",
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
            "path": "http://localhost/vikram/vaahcms-dev-env/public/api/roles/id/2/users",
            "per_page": 20,
            "prev_page_url": null,
            "to": 3,
            "total": 3
        }
    },
    "status": "success"
}
```
#### Get Role's Permissions

Get role's permissions via GET/POST request.

Column can be id, uuid, email, username or Role's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/roles/{column}/{value}/permissions
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'per_page'                  =>  20,
];
```

##### Response samples
```php
{
    "data": {
        "role": {
            .............
            .............
            .............
        },
        "permissions": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
            ],
            "first_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions?page=1",
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
            "path": "http://localhost/vikram/vaahcms-dev-env/public/api/roles/{column}/{value}/permissions",
            "per_page": 20,
            "prev_page_url": null,
            "to": 3,
            "total": 3
        }
    },
    "status": "success"
}
```

### Permission : -

#### Get a List

Get a list of the Permission objects and their properties in a list with Pagination.

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | ------------------ | -------------------- |
| q | Value to be search in `name` and `slug` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| from | Initial Date  | String<br />(Y-m-d) |
| to | Final Date | String<br />(Y-m-d) |
| filter | Status of Permission and may be either `active`, `inactive` or `{module_name}`| String |
| section | if filter = {module_name} | String |
| trashed | Set true to show `Trashed (Soft Delete)` data | Boolean | false

##### URL
```php
GET/POST <public-url>/api/permissions
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'from'                      =>  DateTime', 
    'to'                        =>  DateTime, 
    'filter'                    => 'active / inactive / {module_name}', 
    'section'                   => '',     // if filter = {module_name}
    'per_page'                  =>  20,
    'trashed'                   =>  false,          // true, false        
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "list": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
                ..............
            ],
            "first_page_url": "<public-url>/api/permissions?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "<public-url>/api/permissions?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "<public-url>/api/permissions?page=1",
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
            "path": "<public-url>/api/permissions",
            "per_page": 20,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        }
    }
}
```
#### Get Item

Get a Item of the Permission objects . This will retrieves a User by their custom attributes, and returns all the properties of Permission.

Column can be id, uuid, email, username or Permission's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/permissions/{column}/{value}
```

##### Request samples
```php
parameter = [

   'api_token'                 => 'xxxxxxxxxxx',   // for authentication
   'trashed'                   => false,          // true, false  
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        .............
        .............
        .............
    }
}
```
#### Delete

Simple HTTP request to Users API to delete permission.

Column can be id, uuid, email, username or Permission's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/roles/{column}/{value}/delete
```

##### Response samples
```php
{
    "status": "success",
    "data": [],
    "messages": [
        "Action was successful"
    ]
}
```
#### Get Permission's Users

Get permission's users via GET/POST request.

Column can be id, uuid, email, username or Role's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/permissions/{column}/{value}/users
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'per_page'                  =>  20,
];
```

##### Response samples
```php
{
    "data": {
        "role": {
            .............
            .............
            .............
        },
        "users": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
            ],
            "first_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users?page=1",
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
            "path": "http://localhost/vikram/vaahcms-dev-env/public/api/permissions/id/2/users",
            "per_page": 20,
            "prev_page_url": null,
            "to": 3,
            "total": 3
        }
    },
    "status": "success"
}
```
#### Get Permission's Roles

Get permission's roles via GET/POST request.

##### URL
```php
GET/POST <public-url>/api/permissions/{column}/{value}/roles
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'per_page'                  =>  20,
];
```

##### Response samples
```php
{
    "data": {
        "role": {
            .............
            .............
            .............
        },
        "permissions": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
            ],
            "first_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles?page=1",
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
            "path": "http://localhost/vikram/vaahcms-dev-env/public/api/permissions/{column}/{value}/roles",
            "per_page": 20,
            "prev_page_url": null,
            "to": 3,
            "total": 3
        }
    },
    "status": "success"
}
```

### Taxonomy : -

#### Create

Create new Create with HTTP request. During the creation you can set up attributes.

##### URL
```php
GET/POST <public-url>/api/taxonomies/create
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "name",                     // required
    "slug",                     // required
    "type",                     // required   {type_slug}
    "parent",                   // {parent_slug}
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "item": {
           ..........
           ..........
           ..........
        }
    },
    "messages": [
        "Saved successfully."
    ]
}
```

#### Get a List

Get a list of the Taxonomy objects and their properties in a list with Pagination.

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | ------------------ | -------------------- |
| q | Value to be search in `name` and `slug` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| from | Initial Date  | String<br />(Y-m-d) |
| to | Final Date | String<br />(Y-m-d) |
| status | Status of taxonomy and may be either `active` or `inactive`| String |
| trashed | Set true to show `Trashed (Soft Delete)` data | Boolean | false

##### URL
```php
GET/POST <public-url>/api/taxonomies
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'from'                      =>  DateTime', 
    'to'                        =>  DateTime, 
    'status'                    => 'active / inactive', 
    'types'                    =>  []   {type_slugs}
    'per_page'                  =>  20,
    'trashed'                   =>  false,          // true, false        
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "list": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
                ..............
            ],
            "first_page_url": "<public-url>/api/taxonomies?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "<public-url>/api/taxonomies?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "<public-url>/api/taxonomies?page=1",
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
            "path": "<public-url>/api/taxonomies",
            "per_page": 20,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        }
    }
}
```
#### Get Item

Get a Item of the Taxonomy objects . This will retrieves a User by their custom attributes, 
and returns all the properties of Taxonomy.

Column can be id, uuid, email, username or Taxonomy's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/taxonomies/{column}/{value}
```

##### Request samples
```php
parameter = [

   'api_token'                 => 'xxxxxxxxxxx',   // for authentication
   'trashed'                   => false,          // true, false  
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        .............
        .............
        .............
    }
}
```
#### Update

Simple HTTP request to Taxonomy API and you can update standard attributes for a user within few seconds!

Column can be id, uuid, email, username or Taxonomy's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/taxonomies/{column}/{value}/update
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "name",                     // required
    "slug",                     // required
    "type",                     // required   {type_slug}
    "parent",                   // {parent_slug}
];
```

##### Response samples
```php
{
    "status": "success",
    "messages": [
        "Saved"
    ],
    "data": {
        ...........
        ...........
        ...........
    }
}
```
#### Delete

Simple HTTP request to Users API to delete taxonomy.

Column can be id, uuid, email, username or Taxonomy's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/taxonomies/{column}/{value}/delete
```

##### Response samples
```php
{
    "status": "success",
    "data": [],
    "messages": [
        "Action was successful"
    ]
}
```

### Taxonomy Type : -

#### Create

Create new Taxonomy Type with HTTP request. During the creation you can set up attributes.

##### URL
```php
GET/POST <public-url>/api/taxonomy-types/create
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "name",                     // required
    "slug",                     // required
    "parent",                   // {parent_slug}
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "item": {
           ..........
           ..........
           ..........
        }
    },
    "messages": [
        "Saved successfully."
    ]
}
```

#### Get a List

Get a list of the Taxonomy Type objects and their properties in a list with Pagination.

This method supports some of the query parameters to help customize the response.

| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | ------------------ | -------------------- |
| q | Value to be search in `name` and `slug` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| from | Initial Date  | String<br />(Y-m-d) |
| to | Final Date | String<br />(Y-m-d) |
| with_children | When true, get Response with children attribute | Boolean | false
| trashed | Set true to show `Trashed (Soft Delete)` data | Boolean | false

##### URL
```php
GET/POST <public-url>/api/taxonomy-types
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',   // for authentication
    'q'                         => 'search_item', 
    'from'                      =>  DateTime', 
    'to'                        =>  DateTime, 
    'per_page'                  =>  20,
    'trashed'                   =>  false,          // true, false        
    'with_children'             =>  false,          // true, false        
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        "list": {
            "current_page": 1,
            "data": [
                ..............
                ..............
                ..............
                ..............
            ],
            "first_page_url": "<public-url>/api/taxonomy-types?page=1",
            "from": 1,
            "last_page": 1,
            "last_page_url": "<public-url>/api/taxonomy-types?page=1",
            "links": [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": "<public-url>/api/taxonomy-types?page=1",
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
            "path": "<public-url>/api/taxonomy-types",
            "per_page": 20,
            "prev_page_url": null,
            "to": 2,
            "total": 2
        }
    }
}
```
#### Get Item

Get a Item of the Taxonomy Type objects . This will retrieves a User by their custom attributes, 
and returns all the properties of Taxonomy Type.

Column can be id, uuid, email, username or Taxonomy Type's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/taxonomy-types/{column}/{value}
```

##### Request samples
```php
parameter = [

   'api_token'                 => 'xxxxxxxxxxx',   // for authentication
   'trashed'                   => false,          // true, false  
];
```

##### Response samples
```php
{
    "status": "success",
    "data": {
        .............
        .............
        .............
    }
}
```
#### Update

Simple HTTP request to Taxonomy type API and you can update standard attributes for a user within few seconds!

Column can be id, uuid, email, username or Taxonomy type's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/taxonomy-types/{column}/{value}/update
```

##### Request samples
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    "name",                     // required
    "slug",                     // required
    "parent",                   // {parent_slug}
];
```

##### Response samples
```php
{
    "status": "success",
    "messages": [
        "Saved"
    ],
    "data": {
        ...........
        ...........
        ...........
    }
}
```
#### Delete

Simple HTTP request to Users API to delete taxonomy type.

Column can be id, uuid, email, username or Taxonomy type's attribute and their value.

##### URL
```php
GET/POST <public-url>/api/taxonomy-types/{column}/{value}/delete
```

##### Response samples
```php
{
    "status": "success",
    "data": [],
    "messages": [
        "Action was successful"
    ]
}
```



------
