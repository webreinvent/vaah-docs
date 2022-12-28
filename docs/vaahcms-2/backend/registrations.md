# Registrations

Registration and authentication are mandatory in any application when you have little concern about privacy.


## Purpose 

In VaahCms, the purpose of `Registration` is to prevent `duplicate` entries in `Users` table.

`Registration` page will display the all valid `Users` and a form to create and update the `Users`.

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
**[Demo Video](https://img-v4.getdemo.dev/screenshot/Registration%20-%20Create%20New%20User%20.mp4)**

#### Edit/Update the details of already exists `Users`
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_s8gj2HwjmC.mp4)**

#### Deleting exists `Users`
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_eHIo2Khroq.mp4)**

#### Deleting temporary/Trashing already exists `Users`
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_V1dankQPpv.mp4)**

#### List All existing `Users`
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_7pC5B37hJP.mp4)**

#### Filtering the `Users` list by searching using different `fields`
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_t8PpwWFVQN.mp4)**

#### Filtering the `Users` list by different status of `Users`, trashed `Users`
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_QGqx9EsID8.mp4)**

#### Sorting the `Users` with ascending/descending order
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_XKT1jEqHgJ.mp4)**

#### Clone the `User` details
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_OhQBlHmcg7.mp4)**

#### Autofill the `User` field
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_yh6ynI6gYN.mp4)**

#### Autofill the `User` field
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_RvexbAkNnm.mp4)**

#### Bulk Actions to status change, trash, delete
**[Demo Video](https://img-v4.getdemo.dev/screenshot/chrome_6F755WQERL.mp4)**


## Permission
<!-- 
REMOVE THIS COMMENT
List the permissions & details for this page in table format 
-->

## Files

List of all the files responsible for this pages


- Laravel Route: `packages/vaahcms/Routes/backend/routes-registrations.php` 
- Laravel Controller: `packages/vaahcms/Http/Controllers/Backend/RegistrationsController.php`
- Laravel Model: `packages/vaahcms/Models/Registration.php`
- Vue Route: `packages/vaahcms/Vue/vaahtwo/routes/vue-routes-registrations.js`
- Vue Store: `packages/vaahcms/Vue/vaahtwo/stores/store-registrations.js`
- Vue Page Director: `packages/vaahcms/Vue/vaahtwo/pages/registrations`


## Packages


### Laravel Packages

- `creativeorange/gravatar`: Write purpose of the package


### Vue Packages
- `@grapoza/vue-tree`: To provide common tree options
- `axios`: To make HTTP requests
- `moment-timezone`: To change the default time zone
- `pinia`: To share a state across components/pages
- `primeflex`: To accompany Prime UI libraries and static webpages as well
- `primevue`: To offers a complete UI building solution ,easy theming, and great documentation.
- `qs`: To create nested objects
- `vue`: To build user interfaces
- `vue-router`: To sync URLs 
- `vue3-highlightjs`: To Vue.js 3.x syntax highlighting made easy
- `vuejs-tree`: To render hierarchical data in a nested tree structure
----
- `vitejs/plugin-vu`: To set up a development environment
- `@vue/compiler-sfc`: To encapsulate the template, logic, and styling 
- `laravel-mix`: To build assets
- `resolve-url-loader`: To distributed set SCSS files and assets
- `sass`: To converting your code to CSS
- `sass-loader`: To compiling SCSS/Sass files
- `unplugin-auto-import`: To provides more user-friendly config APIs and capability like resolvers
- `vite`: To  set up a development environment





## Methods

List important methods which can be reused. 


```
Registration::getList();
```

```
Registration::updateList();
```


```
Registration::listAction();
```

```
Registration::deleteList();
```

```
Registration::createItem();
```

```
Registration::getItem();
```

```
Registration::updateItem();
```

```
Registration::deleteItem();
```

```
Registration::itemAction();
```


## Events
<!-- 
REMOVE THIS COMMENT
List events for this section in table format 
-->
 

## API
<!-- 
REMOVE THIS COMMENT

Example

### Create permission

##### Method: `post`
##### URL: `<public-url>/api/permission/create`
##### Request Parameters
List all request params like https://docs.vaah.dev/vaahcms/basic/api.html#get-a-list 
##### Response Parameters
##### Sample Request
##### Sample Response
-->
