# Vaahcms

[comment]: <> ([[toc]])

## Introduction

This is a guide to generate crud in VaahCms. We are taking an example of Blog site.
Before jumping to crud part project should have generated module and activated.
For the module and theme set up follow below link:-
[https://github.com/webreinvent/vaahcli](https://github.com/webreinvent/vaahcli)

## Step-1
Firstly need to update VaahCms self update
Use below command for that :
```shell
npm install vaah -g
```

## Step-2
Use the below command to generate CRUD :

```shell
npx vaah cms:crud
```
<img :src="$withBase('/images/crud-generate-2.png')">

## Step-3
::: warning NOTE
In this example we are going to use Travel Module and Database table name will be vh_blogs. 
:::
Use following procedures to set up CRUD.

- For which you want to create CRUD: vue3 & PrimeVue ```This option is to build template```

- Enter the Module/Theme/Entity name: Travel ```Name of the module, so that it will create crud inside it```

- Enter the section name (Backend | Frontend or Folder name): Backend ```For module choose backend, for theme choose frontend```

- Vue folder name/path:(vue) ```The directory name where vue files and component stored```

- Enter your database table name: vh_blogs ```Enter the table name for which you are generating crud```

- Do you want to generate migration file (true/false):  (true) ```We have to write true so that migration file will be generated```

- Enter your model name (singular): Blog ```It is asking name of the model. Use table name as singular for better understanding```

- Enter your controller name (plural): Blogs ```It is asking name of the controller. Use table name as plural for better understanding```

```This video will help you to understand the generation of CRUD.```
<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/cmd_NiBc9DdrDM.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Step-4
Now write migrations according to schema and re-activate module to run the migration.
Below link you can use to go module in your browser
```http request
<public-url>/backend#/vaah/modules/
```
```This video will help you to understand how to re-activate module.```

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_j3WEb0p0h0.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

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

## Step-9

::: warning NOTE
If you are generating crud `First time inside module` then only follow this step.

Open ```.env & .env.custom``` and paste below code
:::

```
MODULE_TRAVEL_ENV=develop
```
<img :src="$withBase('/images/crud-generate-8-a.png')">
<img :src="$withBase('/images/crud-generate-8-b.png')">

## Step-10

In this step you need to run `npm install` in terminal.
```shell
../<project-name>/vaahcms/Modules/<module-name>
```
<img :src="$withBase('/images/crud-generate-9.png')">

## Step-11

After install dependencies for local needs to run dev server `npm run dev`.
```shell
../<project-name>/vaahcms/Modules/<module-name>npm run dev
```

<img :src="$withBase('/images/crud-generate-10.png')">

If we are deploying in production server we need to run `npm run build`.

