# Vaahcms

[comment]: <> ([[toc]])

## Introduction

This is a guide to generate crud in VaahCms.
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
vaah cms:crud or npx vaah cms:crud
```
## Step-3
Use following procedures to set up CRUD

- For which you want to create CRUD: (Choose desired template using upper and lower arrow key then press enter)

- Enter the Module/Theme/Entity name: (Enter generated module name)

- Enter the section name (Backend | Frontend or Folder name): (For module choose backend, for theme choose frontend)

- Vue folder name/path:(vue)

- Enter your database table name:(Enter the table name for which you are genrating crud)

- Do you want to generate migration file (true/false):  (true)

- Enter your model name (singular): (use table name as singular for better understanding)

- Enter your controller name (plural): (use table name as plular for better understanding)
```
CRUD is genrated with below message :
==================================================================
Now, follow following steps:
0) Re-activate module to run migrations
1) Include the laravel router file in the module's route file
2) Include the vue router file
3) Add vue router link to you menu
==================================================================
```
## Step-4
Now write migrations according to schema and re-activate module to run the migration.
Below link you can use to go module in your browser
```
<project-url>/backend#/vaah/modules/
```
## Step-5
Include the laravel router file in the module's route file

```VaahCms/Modules/< Your Module >/Routes/backend.php```

Add this code in above path

```
require_once('backend/routes-< your module name >.php');
```

## Step-6
Go to below path

```module/http/controller/Backendcontroller.php```

```
comment this:
return view('practice::backend.pages.index');
uncomment this:
return view('practice::backend.pages.app');
```

## Step-7
Include the vue router file

```VaahCms/Modules/Articles/Vue/routes/routes.js```

Add this code in above path
```
import blogs from "./vue-routes-< xyz >";
   
routes = routes.concat(xyz);
```
## Step-8
Import the route file of vue

```modules/vue/store/store-< xyz >.js```

Paste ```/backend```

```
Make sure that code should be like this
let ajax_url = base_url + "/backend/helloworld/articles";
```
## Step-9
Open ```.env & custom.env``` and paster below code
```
MODULE_<module Nmae>_ENV=develop
```