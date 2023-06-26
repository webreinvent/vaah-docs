# Vaahcms

[comment]: <> ([[toc]])

## Introduction

This is a guide to generate setting crud in module of VaahCms.
Before jumping to crud part project should have generated module and activated.
For the module and theme set up follow below link:-
[VaahCLI](https://github.com/webreinvent/vaahcli/tree/develop)


## Step-1
Create module first. [Create Moduel](https://docs.vaah.dev/vaahcms-2/backend/generate-module.html). One module can has many crud.\
Use the below command to generate setting CRUD :

```shell
npx vaah cms:settings
```

## Step-2
Use following procedures to set up CRUD.

- For which you want to create CRUD: Module `This option is to build template`

- Enter the Module/Theme/Entity name: HelloWorld ```Name of the module, so that it will create crud inside it and HelloWorld is my module name here```

- Enter the section name (Backend | Frontend or Folder name): Backend ```For module choose backend, for theme choose frontend```

- Vue folder name/path:(vue) ```The directory name where vue files and component stored```

- Enter your controller name (plural): Settings ```It is asking name of the controller. Use table name as plural for better understanding```



## Step-3
Include the laravel router file in the module's route file

```VaahCms/Modules/Helloworld/Routes/backend.php```

Add this code in the last.
```php
//-------------------------------------------------------
include ("backend/routes-settings.php");
//-------------------------------------------------------
```


## Step-4
Include the vue router file

```VaahCms/Modules/Helloworld/Vue/routes/routes.js```

Add this code in above path
```php
//-------------------------------------------------------
import settings from "./vue-routes-settings";
   
routes = routes.concat(settings);
//-------------------------------------------------------
```

## Step-5
Call router file when click on the users

```VaahCms/Modules/Helloworld/Vue/components/aside.vue```

Add this code in above path
```php
//-------------------------------------------------------
           {
                label: 'settings',
                icon: 'fa-regular fa-chart-bar',
                to: "/settings"
            }
//-------------------------------------------------------
```

## Step-6
Call seeder in DatabaseTableSeeder. Add this code in run function. 

```VaahCms/Modules/Helloworld/Database/Seeds/DatabaseTableSeeder.php```

Add this code in above path
```php
//-------------------------------------------------------
           {
               $seeder = new SettingTableSeeder();
               $seeder->run();
            }
//-------------------------------------------------------
```

## Step-7
Watch video\
How to create setting crud in module VaahCms

<figure>
  <iframe src="" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>