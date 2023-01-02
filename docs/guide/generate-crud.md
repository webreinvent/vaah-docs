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
Use the below command to generate CRUD
Use below command for that :
```
npx vaah cms:crud
```
<img :src="$withBase('/images/step-2.png')">

## Step-3
Use following procedures to set up CRUD

- For which you want to create CRUD: vue3 & PrimeVue

- Enter the Module/Theme/Entity name: Blog

- Enter the section name (Backend | Frontend or Folder name): (For module choose backend, for theme choose frontend)

- Vue folder name/path:(vue)

- Enter your database table name:(Enter the table name for which you are genrating crud)

- Do you want to generate migration file (true/false):  (true) (We have to write true so that migration file will be genrated)

- Enter your model name (singular): (use table name as singular for better understanding)

- Enter your controller name (plural): (use table name as plular for better understanding)

<img :src="$withBase('/images/step-3.png')">

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/cmd_T6jUDyV82j.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Step-4
Now write migrations according to schema and re-activate module to run the migration.
Below link you can use to go module in your browser
```
http://127.0.0.1:8000/backend#/vaah/modules/
```

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_j3WEb0p0h0.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Step-5
Include the laravel router file in the module's route file

```VaahCms/Modules/Blog/Routes/backend.php```

Add this code in above path

```
require_once('backend/routes-blog.php');
```
<img :src="$withBase('/images/step-5.png')">

## Step-6
Go to below path

```module/http/controller/Backendcontroller.php```

```
comment this:
return view('blog::backend.pages.index');
uncomment this:
return view('blog::backend.pages.app');
```
<img :src="$withBase('/images/step-6.png')">

## Step-7
Include the vue router file

```VaahCms/Modules/Blog/Vue/routes/routes.js```

Add this code in above path
```
import Blogs from "./vue-routes-blog";
   
routes = routes.concat(Blogs);
```
<img :src="$withBase('/images/step-7.png')">

## Step-8
Import the route file of vue

```modules/vue/store/store-blog.js```

Paste ```/backend```

```
Make sure that code should be like this
let ajax_url = base_url + "/backend/blog/blogs";
```
<img :src="$withBase('/images/step-8.png')">

## Step-9
Open ```.env & custom.env``` and paster below code
```
MODULE_BLOG_ENV=develop
```
<img :src="$withBase('/images/step-9-a.png')">
<img :src="$withBase('/images/step-9-b.png')">