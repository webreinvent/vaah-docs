# Registrations

Registration and authentication are mandatory in any application when you have little concern about privacy.


## Purpose 

In VaahCms, the purpose of `Registration` is to prevent `duplicate` entries in `Users` table.

`Registration` page will display the all valid `Users` and a form to create and update the `Users` with the following features:

- Create New `User`
- Edit/Update the details of already exists `Users`.
- Deleting exists `Users`.
- Deleting temporary/Trashing already exists `Users`.
- List All existing `Users`.
- Filtering the `Users` list by searching using different `fields`. 
- Filtering the `Users` list by different status, trashed `Users`.
- Sorting the `Users` with ascending/descending order.
- Clone the `User` details. 
- Autofill the `User` field. 
- Bulk Actions to status change,trash,delete



## Features & Demos

#### Create New `User`
- New user registration  will take place by filling the field and click on `Create & New` button as shown here:
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/Registration%20-%20Create%20New%20User%20.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

#### Edit/Update the details of already exists `Users`
- To update the details of `User` by filling or replacing it with new value in the field and click on `Save` button as shown here-
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_s8gj2HwjmC.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>

#### Deleting exists `Users`
-To deleting the `User` there are 2 way to delete `User` -
1. from the `view/form`(edit) page
2. from the `User` list and selecting the delete `action`

<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_eHIo2Khroq.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>

#### Deleting temporary/Trashing already exists `Users`
- To deleting temporary the `User` there are 2 way to temporary delete the `User` -
1. from the `view/form`(edit) page
2. from the `User` list and selecting the `trash` action
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_V1dankQPpv.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>

#### List All existing `Users`
- list of the `Users` who are already exist will be shown- 
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_7pC5B37hJP.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>

#### Filtering the `Users` list by searching using different `fields`
- Filtering the `Users` list by searching with fields like first name,middle name,last name,email id, `user's id` etc
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_t8PpwWFVQN.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>

#### Filtering the `Users` list by different status of `Users`, trashed `Users`
- Filtering the `Users` list by `User` different status(email verification pending, user created, email verified) and by including/excluding the trashed `User`
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_QGqx9EsID8.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>

#### Sorting the `Users` with ascending/descending order
- List can be sort in different way, like by selecting the order(Ascending/Descending) and by list's each column's different order
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_XKT1jEqHgJ.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>

#### Clone the `User` details
- Already exist fields data can be cloned at the time of `create a new user` and `updating user` details, in order to `create a new User` with similar data.
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_OhQBlHmcg7.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>

#### Autofill the `User` field
- Some field can be auto filled by dummy data/random data on selecting the `fill` option , at the time of `create a new user` or `updating user` details, in order to `create a fresh new user`
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_yh6ynI6gYN.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>



#### Bulk Actions to status change, trash, delete
- Bulk Action can be performed on the existing `Users` list on selecting the ` Bulk Actions` type i.e trash all, re-store all, delete all etc. and changing the `Users` status(email verified,email verification pending,user create)
- Bulk action can also be performed on only limited or on selected `users` by and selecting `Actions` i.e trash, re-store, delete etc and changing the `Users` status(email verified,email verification pending,user create)
<figure>
    <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_6F755WQERL.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"></iframe>
</figure>


## Permission

Permissions allow users to access certain features of a course or project site, depending on their roles, and on the decisions made by the site owner and the system administrator. The ability to do actions on your site (including viewing content, editing content, and changing configuration) is governed by permissions. Each permission has a name (such as View published content) and covers one action or a small subset of actions.


| Field Name                            | Section      | Description                                                  |
| ------------------------------------- | ------------ | ------------------------------------------------------------ |
| Has Access Of Registrations Section   | Registration | This will allow user see the link of registration section.   |
| Can Create Registrations              | Registration | This will allow user to add anything in the registration section. |
| Can Create Users From Registrations   | Registration | This will allow user to add users in the registration section. |
| Can Read Registrations                | Registration | This will allow user to view anything in the registration section. |
| Can Update Registrations              | Registration | This will allow user to edit anything in the registration section. |
| Can Delete Registrations              | Registration | This will allow user to delete anything in the registration section. |
| Can Manage Registrations              | Registration | This will allow user to manage anything in the registration section. |
| Can See Registrations Contact Details | Registration | This will allow user to view contact detail in the registration section. |



------


## Files

List of all the files responsible for this pages


- Laravel Route: `packages/vaahcms/Routes/backend/routes-registrations.php` 
- Laravel Controller: `packages/vaahcms/Http/Controllers/Backend/RegistrationsController.php`
- Laravel Model: `packages/vaahcms/Models/Registration.php`
- Vue Route: `packages/vaahcms/Vue/vaahtwo/routes/vue-routes-registrations.js`
- Vue Store: `packages/vaahcms/Vue/vaahtwo/stores/store-registrations.js`
- Vue Page Director: `packages/vaahcms/Vue/vaahtwo/pages/registrations`



## Methods

 some methods which can be reused. 
- This method can be used for particular item to action like `restore`,`trash`

``` 
    packages/vaahcms/Models/Registration.php  
    
    Registration::itemAction($request,$id,$type);
```
where `$request` is HTTP request,`$id` is Items's id,`$type` is action type.

- This methods can be  used for different actions on a list

```
    packages/vaahcms/Models/Registration.php
    
    Registration::listAction($request,$id,$type);
```
where `$request` is HTTP request,`$id` is Items's id,`$type` is action type.


## API

### Create User

##### Method: `post`
##### URL: `<public-url>/api/vaah/registrations/form`
##### Request Parameters
| Parameter                         | Description |Type    |Dafault |
| --------------------------------- | ------------|--------|--------|
|api_token|  API Token id for authentication|String  | |
|avatar_url|  User's Avtar Image URL | Image | |
|bio|User's bio  |  String | |
|birth|  User's Date of birth| Date | |
|country|  User's Country| String | |
|country_calling_code| User country's Calling code  |  Number| |
|country_code| User's Country code | String | |
|created_by| Admin Id | Number | |
|deleted_by| Admin Id| Number | |
|designation| User's designation | String | |
|display_name|  User's Display name to be seen |  String| |
|email|required User's | String | |
|first_name|required User's | String | |
|gender|  m for male , f for female , o for Other User's | String |  |
|last_name| User's | String | |
|middle_name|  User's| String | |
|password|required  User's| String | |
|phone| User's | Number | |
|status|  user-created , email-verified , email-verification-pending  User's| String | |
|timezone|  User's preferred area bases timezone| String  | |
|title| User's Title i.e Mr/Mrs/Miss/Ms |  String| |
|updated_by| Admin's Id who has updated the details| Number | |
|username| User's | String | |
|uuid| User's Unique Identifier ID  | String | |
##### Response Parameters
| Parameter | Description    | Type            |
| --------- | ---------------| ----------------|
| success| Set true if list accessible |Boolean|
| data| data that get stored successfully | Object |
| message| message on successfully date saved | Text |
##### Sample Request
```php
    {
        "alternate_email": "vfunk@yahoo.com"
        "avatar_url": "png.pngtree/ourmid/image_1541962.jpg"
        "bio": "Cum iusto at corporis."
        "birth": "2023-01-01T18:30:00.000Z"
        "country": "India"
        "country_calling_code": "91"
        "country_code": "IN"
        "created_by": null
        "deleted_by": null
        "designation": "Autem voluptas omnis et."
        "display_name": "solon.hickle"
        "email": "liliane17@tillman.biz"
        "first_name": "Hailey"
        "gender": "m"
        "last_name": "Pollich"
        "middle_name": "Dach"
        "password": "&FJmi.Z,zup\"/hv"
        "phone": "8222282222"
        "status": "email-verification-pending"
        "timezone": "Pacific/Midway"
        "title": "Mr"
        "updated_by": null
        "username": "grace24"
        "uuid": null
    }

```
##### Sample Response
```php
{
    "status": true,
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
----

### Get a List

##### Method: `get`
##### URL: `<public-url>/api/vaah/registrations`
##### Request Parameters
| Parameter | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | ------------------ | -------------------- |
| q | Value to be search in `first_name`, `middle_name`, `last_name`, `display_name`, `email` and `id` Column | String |
| per_page | `N` Item Per Page | Number | 20 |
| status | Status of Registration and may be either `email-verification-vending`, `email-verified` or `user-created`| String |
| trashed | Set true to show `Trashed (Soft Delete)` data | Boolean | false
| sort | Ascending or Descending sort list| String |
##### Response Parameters
| Parameter | Description    | Type            |
| --------- | ---------------| ----------------|
| success| Set true if list accessible |Boolean|
| data| all the matched data with query or the data available | Object |
| first_page_url| url for first page | Url |
| from | User count starts with  | Number|  |
| last_page | Max number of page in pagination | Number |
| last_page_url | Url for last page | Url |
| links | previous and next page `links`,`active`,`label` | Object |
| next_page_url | Url for next page | Url |
| path | Url for page |Url |
| per_page| Users count to show at a time | Number|
| prev_page_url |Url for previous page  | Url |
| to | Max number of users accessed |Number |
| total | Count users  | Number|
##### Sample Request
```php
parameter = [

    'api_token'                 => 'xxxxxxxxxxx',  // for authentication
    'q'                         => 'search_item', 
    'status'                    => 'email-verification-vending / email-verified / user-created', 
    'per_page'                  =>  20,
    'trashed'                   =>  false,          // true, false           
    'updated_at'                =>            // asc, desc           
];
```
##### Sample Response
```php
{
  "success": true,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "uuid": "07052497-c12f-4e21-a119-edf20d51f3ad",
        "email": "ekoelpin@yahoo.com",
        "username": "ekoelpin",
        ............
        ............
        ............
      },
      {
        "id": 2,
        "uuid": "a119-edf20d51f3ad-07052497-c12f-4e21",
        "email": "lenaoe@gmail.com",
        "username": "lenaoe",
        ............
        ............
        ............
      }
    ],
    "first_page_url": "<public-url>/backend\/vaah\/registrations?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "<public-url>/backend\/vaah\/registrations?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "<public-url>\/backend\/vaah\/registrations?page=1",
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
    "path": "<public-url>\/backend\/vaah\/registrations",
    "per_page": 20,
    "prev_page_url": null,
    "to": 2
    "total": 2
  }
}
```

----
### Get Item

##### Method: `get`
##### URL: `<public-url>/api/registrations/{form/view}/{id}`
##### Request Parameters
| Parameter | Description               | Type            |
| --------- | --------------------------| ----------------|
| id| User's id  | Number |
| api_token| for authentication  | String |
| trashed| true, false  | Boolean |
##### Response Parameters
| Parameter                                 | Description               | Type            |
| ----------------------------------------- | --------------------------| ----------------|
| success| Set true if list accessible |Boolean|
| data| All the matched data with request used Id   | Object |
##### Sample Request
```php
parameter = [

   'api_token'                 => 'xxxxxxxxxxx',   // for authentication
   'trashed'                   => false,          // true, false  
];
```
##### Sample Response
```php
{
    "status": true,
    "data": {
        "id": 1,
        "uuid": "07052497-c12f-4e21-a119-edf20d51f3ad",
        "email": "lturcotte@yahoo.com",
        "username": "ekoelpin",
        .............
        .............
        .............
        },
}
```

----
### Update

##### Method: `PUT`
##### URL: `<public-url>/api/registrations/{id}`
##### Request Parameters
| Parameter                         | Description                                       | Type            |
| --------------------------------- | --------------------------------------------------| ----------------|
| api_token| for authentication  | String |
| email | required  |String  |
| username|    | String |
| id| required  | Number |
| password| required  | String  |
| display_name|   | Number |
| title|   | String  |
| designation|   | String | 
| first_name|   |String  |
| middle_name|   | String |
| last_name|   |String  |
| gender| m for male , f for female , o for Other   |String  |
| country_calling_code|   | Number |
| bio|   |String  |
| timezone|   |String  |
| alternate_email|   |String  |
| avatar_url|   | String |
| birth|   | Date  |
| country|   |String  |
| country_code|   |Number |
| status| required - (user-created , email-verified , email-verification-pending)  | String |
| activation_code|   |String  |
| activation_code_sent_at|   |String  |
| activated_ip|   |String  |
| invited_by|   |String  |
| invited_at|   | Date |
| invited_for_key|   | String  |
| invited_for_value|   | String  |
| user_id|   | Number |
| user_created_at|   | Date |
| created_ip|   | String |
| vh_user_id|   | Number  |
| meta|   | Json |
##### Response Parameters
| Parameter                         | Description                                       | Type            |
| --------------------------------- | --------------------------------------------------| ----------------|
| Success| response type  | Boolean |
| data | all requested  parameters with some value inside data object |Object  |
| messages| response type message   | String |
##### Sample Request
```php
parameter = [

    "activated_at": null
    "activated_ip": null
    "activation_code": null
    "activation_code_sent_at": null
    "alternate_email": "grobel@dicki.com"
    "avatar_url": "png.pngtree/ourmid/image_1541962.jpg"
    "belong_id": null
    "belong_type": null
    "bio": "Omnis suscipit qui tenetur nisi."
    "birth": "2022-12-28"
    "country": "India"
    "country_calling_code": "91"
    "country_code": "Ea ut reprehenderit a."
    "created_at": "2022-12-28 18:33:53"
    "created_by": 1
    "created_by_user":
          {
            "id": 1,
            "uuid": "034d5c4b-0a0d-4ec6-a20c-5d69b70889e1",
            "first_name": "Webreinvent",
            "last_name": "Team",
             …………………
             …………………
             …………………
      }
    "email": "we@webreinvent.com"
    "first_name": "Webreinvent"id: 1
    "last_name": "Team"
    "name": "Webreinvent Team"
    "uuid": "034d5c4b-0a0d-4ec6-a20c-5d69b70889e1"
    "created_ip": null
    "deleted_at": null
    "deleted_by": null
    "deleted_by_user": null
    "designation": "Ad quia quo ipsa."
    "display_name": "kovacek.ursula"
    "email": "jammie12@hotmail.com"
    "first_name": "Edward"
    "gender": "m"
    "id": 88
    "invited_at": null
    "invited_by": null
    "invited_for_key": null
    "invited_for_value": null
    "last_name": "Witting"
    "meta": {}
    "middle_name": "Hyatt"
    "phone": "8585858585"
    "status": "user-created"
    "timezone": "Atlantic/Madeira"
    "title": "Dolor et natus ut."
    "updated_at": "2023-01-02 19:08:59"
    "updated_by": 1
    "updated_by_user":
       {
        "id": 1,
        "uuid": "034d5c4b-0a0d-4ec6-a20c-5d69b70889e1",
        "first_name": "Webreinvent",
        "last_name": "Team",
         …………………
         …………………
         …………………
      }
    "email": "we@webreinvent.com"
    "first_name": "Webreinvent"
    "id": 1
    "last_name": "Team"
    "name": "Webreinvent Team"
    "uuid": "034d5c4b-0a0d-4ec6-a20c-5d69b70889e1"
    "user_created_at": null
    "username": "destiney72"
    "uuid": "416b81fc-f273-4dd0-8f18-e301f5c677dd"
    "vh_user_id": null        // json format
];
```
##### Sample Response
```php
{
  "success": true,
  "data": {
    "item": {
      "id": 88,
      "uuid": "416b81fc-f273-4dd0-8f18-e301f5c677dd",
      "email": "jammie12@hotmail.com",
      "username": "destiney72",
      "display_name": "kovacek.ursula",
      "title": "Dolor et natus ut.",
      "designation": "Ad quia quo ipsa.",
      "first_name": "Edward",
      "middle_name": "Hyatt",
      "last_name": "Witting",
      "gender": "m",
      "country_calling_code": "",
      "phone": null,
      "bio": "Omnis suscipit qui tenetur nisi.",
      "timezone": "Atlantic\/Madeira",
      "alternate_email": "grobel@dicki.com",
      "avatar_url": "png.pngtree/ourmid/image_1541962.jpg"
      "birth": "2022-12-28",
      "country": "Quis odio velit tenetur.",
      "country_code": "Ea ut reprehenderit a.",
      "status": "user-created",
      "activation_code": null,
      "activation_code_sent_at": null,
      "activated_at": null,
      "activated_ip": null,
      "invited_by": null,
      "invited_at": null,
      "invited_for_key": null,
      "invited_for_value": null,
      "belong_type": null,
      "belong_id": null,
      "vh_user_id": null,
      "user_created_at": null,
      "meta": {
        
      },
      "created_ip": null,
      "created_by": 1,
      "updated_by": 1,
      "deleted_by": null,
      "created_at": "2022-12-28 18:33:53",
      "updated_at": "2023-01-02 19:09:10",
      "deleted_at": null,
      "created_by_user": {
        "id": 1,
        "uuid": "034d5c4b-0a0d-4ec6-a20c-5d69b70889e1",
        "first_name": "Webreinvent",
        "last_name": "Team",
        "email": "we@webreinvent.com",
        "name": "Webreinvent Team"
      },
      "updated_by_user": {
        "id": 1,
        "uuid": "034d5c4b-0a0d-4ec6-a20c-5d69b70889e1",
        "first_name": "Webreinvent",
        "last_name": "Team",
        "email": "we@webreinvent.com",
        "name": "Webreinvent Team"
      },
      "deleted_by_user": null
    }
  },
  "messages": [
    "Saved successfully."
  ]
}
```
----

----
### Delete

##### Method: `delete`
##### URL: `<public-url>/api/registrations/{id}`
##### Response Parameters
| Parameter                         | Description                                       | Type            |
| --------------------------------- | --------------------------------------------------| ----------------|
| success| response type | Boolean |
| data | null  |   |
| messages | response message   |String  |
##### Sample Response
```php
{
  "success": true,
  "data": [
    
  ],
  "messages": [
    "Record has been deleted"
  ]
}
```






