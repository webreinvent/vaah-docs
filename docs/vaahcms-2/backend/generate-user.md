# VaahCMS

[comment]: <> ([[toc]])

## Introduction

This is a guide to generating user crud in the module of VaahCMS. 
Before jumping to the crud part project should have generated the module and activated it. 
For the module and theme set up follow the below link:
[VaahCLI](https://github.com/webreinvent/vaahcli/tree/develop)


## Step-1
Create a module first. [Create Module](https://docs.vaah.dev/vaahcms-2/backend/generate-module.html).
One module can have many cruds.\
Use the below command to generate users CRUD :

```shell
npx vaah cms:users
```
After pressing enter.

```shell
      This command are only for Vue 3 module      
? For which you want to create CRUD:  (Use arrow keys)
> Module............................................................0
  Theme.............................................................1
  Custom Path.......................................................2
  
  //........................................Press enter on the module
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
? Enter your model name (singular): User 
````

```shell
? Enter your controller name (plural): Users
````

<img :src="$withBase('/images/vaahcms-two/2.x-module-user.png')">


## Step-2
Include the laravel router file in the module's route file

```VaahCms/Modules/Helloworld/Routes/backend.php```

Add this code in the last.
```php
//-------------------------------------------------------
include ("backend/routes-users.php");
//-------------------------------------------------------
```


## Step-3
Include the vue router file.

```VaahCms/Modules/Helloworld/Vue/routes/routes.js```

Add this code to the above path.
```php
//-------------------------------------------------------
import users from "./vue-routes-users";
   
routes = routes.concat(users);
//-------------------------------------------------------
```

## Step-4
Call router file when clicking on the users

```VaahCms/Modules/Helloworld/Vue/components/aside.vue```

Add this code to items of the module (VaahCms/Modules/Helloworld/Vue/components/aside.vue).
```php
//-------------------------------------------------------
           {
                label: 'Users',
                icon: 'fa-regular fa-chart-bar',
                to: "/users"
            }
//-------------------------------------------------------
```

::: warning NOTE
Use `npm install` inside the module root folder to install dependencies for vue, and after that `npm run dev` to display vue components.
:::

All steps are mentioned in this video. 

<figure>
<iframe width="672" height="353" src="https://www.youtube.com/embed/dqfDUU0wfRo" title="VaahCMS 2.x + Vue3 | How to create User CRUD and use pre-configured vue 3 app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</figure>






