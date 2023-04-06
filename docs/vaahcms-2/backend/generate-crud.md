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
```
npm install vaah -g
```

## Step-2
Use the below command to generate CRUD :
```
npx vaah cms:crud
```
<img :src="$withBase('/images/crud-generate-2.png')">

## Step-3
Use following procedures to set up CRUD.

- For which you want to create CRUD: vue3 & PrimeVue ```This option is to build template```

- Enter the Module/Theme/Entity name: Blog ```Name of the module, so that it will create crud inside it```

- Enter the section name (Backend | Frontend or Folder name): Backend ```For module choose backend, for theme choose frontend```

- Vue folder name/path:(vue) ```The directory name where vue files and component stored```

- Enter your database table name: blog ```Enter the table name for which you are generating crud```

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
```
http://127.0.0.1:8000/backend#/vaah/modules/
```
```This video will help you to understand how to re-activate module.```

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_j3WEb0p0h0.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Step-5
Include the laravel router file in the module's route file

```VaahCms/Modules/Blog/Routes/backend.php```

Add this code in above path

```
include('backend/routes-blog.php');
```
<img :src="$withBase('/images/crud-generate-5.png')">

## Step-6
Include the vue router file

```VaahCms/Modules/Blog/Vue/routes/routes.js```

Add this code in above path
```
import blog from "./vue-routes-blogs";
   
routes = routes.concat(blog);
```
<img :src="$withBase('/images/crud-generate-6.png')">

## Step-7
Import the route file of vue

```modules/vue/store/store-blog.js```

Paste ```/backend```

```
Make sure that code should be like this
let ajax_url = base_url + "/backend/blog/blogs";
```
<img :src="$withBase('/images/crud-generate-7.png')">

## Step-8
If you are generating crud `First time inside module` then only follow this step.

Open ```.env & .env.custom``` and paste below code
```
MODULE_TRAVEL_ENV=develop
```
<img :src="$withBase('/images/crud-generate-8-a.png')">
<img :src="$withBase('/images/crud-generate-8-b.png')">

## Step-9

In this step you need run `npm install` in terminal.
```
F:\xampp8018\htdocs\vaah_abinash\vaahcms\Modules\Travel>
```
<img :src="$withBase('/images/crud-generate-9.png')">

## Step-10

After install dependencies for local needs to run dev server `npm run dev`.
```
F:\xampp8018\htdocs\vaah_abinash\vaahcms\Modules\Travel>npm run dev
```

<img :src="$withBase('/images/crud-generate-10.png')">

If we are deploying in production server we need to run `npm run build`.