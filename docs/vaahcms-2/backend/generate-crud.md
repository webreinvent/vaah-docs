# Vaahcms

[comment]: <> ([[toc]])

## Introduction

This is a guide to generate crud in VaahCms. We are taking an example of Blog site.
Before jumping to crud part project should have generated module and activated.
For the module and theme set up follow below link:-
[https://github.com/webreinvent/vaahcli](https://github.com/webreinvent/vaahcli)

::: warning NOTE
To generate CRUD you will need to mention Module name. If you don't have any Module for the CRUD
[click here](https://docs.vaah.dev/vaahcms-2/backend/generate-module.html)
:::

## Step-1
Firstly need to update VaahCms self update
Use below command for that :
```shell
npm i vaah -g
```

## Step-2
Use the below command to generate CRUD :

```shell
npx vaah cms:crud
```

## Step-3
::: warning NOTE
In this example we are going to use Travel Module and Database table name will be vh_blogs. 
:::
It will ask you following questions, answers is also mentioned here
``` shell
  ? For which you want to create CRUD:
  > Module - Vue3 & PrimeVue...................................................0
    Module - Vue2 & Buefy......................................................1
    Theme......................................................................2
    Custom Path - Vue3 & PrimeVue..............................................3
 ```
``` shell
  ? Enter the Module/Theme/Entity name : Travel
 ```

``` shell
  ? Enter the section name (Backend | Frontend or Folder name):  (Backend)
 ```
``` shell
  ?  Vue folder name/path:  (Vue)
 ```

``` shell
  ?  Enter your database table name:  vh_blogs
 ```

``` shell
  ? Do you want to generate migration file (true/false):  (true)
 ```
``` shell
  ? Enter your model name (singular):  Blog
 ```
``` shell
  ? Enter your controller name (plural):  Blogs
 ```

<img :src="$withBase('/images/crud-generate-2.png')">

## Step-4
Now write migrations according to schema and re-activate module to run the migration.
Below link you can use to go module in your browser
```http request
<public-url>/backend#/vaah/modules/
```
## Step-5
Include the laravel router file in the module's route file

```VaahCms/Modules/Travel/Routes/backend.php```

Add this code in above path

```php
include('backend/routes-blogs.php');
```

## Step-6
Include the vue router file

```VaahCms/Modules/Travel/Vue/routes/routes.js```

Add this code in above path
``` js
import blog from "./vue-routes-blogs";
   
routes = routes.concat(blog);
```

``` js
let routes= [];

import dashboard from "./vue-routes-dashboard";
import blog from "./vue-routes-blogs";

routes = routes.concat(dashboard);
routes = routes.concat(blog);

export default routes;
```

## Step-7
Import the route file of vue

```modules/Travel/vue/store/store-blogs.js```

Make sure that code should be like this
```js
let ajax_url = base_url + "/travel/blogs";
```

```js
let model_namespace = 'VaahCms\\Modules\\Travel\\Models\\Blog';

let base_url = document.getElementsByTagName('base')[0].getAttribute("href");
let ajax_url = base_url + "/travel/blogs";
```
## Step-8
Add Crud link to your Module Dashboard

```modules/Travel/Vue/components/Aside.vue```

Make sure that your code should be like this

```js
const items = ref([
    {
        label: 'Travel',
        items: [
            {
                label: 'Dashboard',
                icon: 'fa-regular fa-chart-bar',
                to: "/"
            },
            {
                label: 'blogs',
                icon: 'fa-regular fa-chart-bar',
                to: "/blogs"
            },

        ]
    },
]);
```
```This video will help you in generating CRUD ```

<figure>
  <iframe width="740" height="393" src="https://www.youtube.com/embed/8yc_OM6pIh8" title="VaahCMS 2.x + Vue3 | How to create CRUD and use pre-configured vue 3 app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
</figure>

::: warning NOTE
If you haven't installed the dependencies for the given module then only you need to follow  step 9,10,11.
:::
## Step-9
Open ```.env & .env.custom``` and paste below code
```
MODULE_TRAVEL_ENV=develop
```
<img :src="$withBase('/images/crud-generate-8-a.png')">
<img :src="$withBase('/images/crud-generate-8-b.png')">

## Step-10

In this step you need to run `npm install` in terminal.
```shell
../<project-name>/vaahcms/Modules/Travel/Vue
```
<img :src="$withBase('/images/crud-generate-9.png')">

## Step-11

After installing dependencies for local, we need to run command `npm run dev` in Vue folder.
```shell
../<project-name>/vaahcms/Modules/Travel/Vue npm run dev
```

<img :src="$withBase('/images/crud-generate-10.png')">

If we are deploying in production server we need to run `npm run build`.



