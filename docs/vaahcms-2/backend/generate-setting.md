# Vaahcms

[comment]: <> ([[toc]])

## Introduction

This is a guide to generating setting crud in a module of VaahCMS.
Before jumping to the crud part project should have generated the module and activated it.
For the module and theme set up follow the below link:-
[VaahCLI](https://github.com/webreinvent/vaahcli/tree/develop)


## Step-1
Create a module first. [Create Module](https://docs.vaah.dev/vaahcms-2/backend/generate-module.html). One module can have many cruds.\
Use the below command to generate setting CRUD :

```shell
npx vaah cms:settings
```

After pressing enter.

```shell
 This command is only for Vue 3 module 
? For which you want to create CRUD:  (Use arrow keys)
> Module.........................................................0
  Theme..........................................................1
  Custom Path....................................................2
  
  //.....................................Press enter on the module
```

```shell
? Enter the Module/Theme/Entity name: HelloWorld
````

```shell
? Enter the section name (Backend | Frontend or Folder name):  Backend
````

```shell
? Vue folder name/path:  Vue
````

```shell
? Enter your controller name (plural):  Settings
````

<img :src="$withBase('/images/vaahcms-two/2.x-module-setting.png')">


## Step-2
Include the laravel router file in the module's route file

```VaahCms/Modules/Helloworld/Routes/backend.php```

Add this code in the last.
```php
//-------------------------------------------------------
include ("backend/routes-settings.php");
//-------------------------------------------------------
```


## Step-3
Include the vue router file.

```VaahCms/Modules/Helloworld/Vue/routes/routes.js```

Add this code to the above path.

```php
//-------------------------------------------------------
import settings from "./vue-routes-settings";
   
routes = routes.concat(settings);
//-------------------------------------------------------
```

## Step-4
Call the router file when clicking on the users.

```VaahCms/Modules/Helloworld/Vue/components/aside.vue```

Add this code in items of module (VaahCms/Modules/Helloworld/Vue/components/aside.vue)
```php
//-------------------------------------------------------
        label: 'HelloWorld',
        items: [
            {
                label: 'Settings',
                icon: 'fa-regular fa-chart-bar',
                to: "/settings"
            },
        ]
//-------------------------------------------------------
```

## Step-5
Call the seeder in DatabaseTableSeeder. Add this code to run the function. 

```VaahCms/Modules/Helloworld/Database/Seeds/DatabaseTableSeeder.php```

Add this code to run function.
```php
//-------------------------------------------------------
           {
               $seeder = new SettingTableSeeder();
               $seeder->run();
            }
//-------------------------------------------------------
```

::: warning NOTE
Use `npm install` inside the module root folder to install dependencies for vue, and after that `npm run dev` to display vue components.
:::

All steps are mentioned in this video.

<figure>
<iframe width="733" height="385" src="https://www.youtube.com/embed/egjqkWqCxKQ" title="VaahCMS 2.x + Vue3 | How to create Settings section and use pre-configured vue 3 app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</figure>


