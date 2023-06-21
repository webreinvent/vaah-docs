# Generate Modules in Vaah Cms

## Introduction

This guide teaches `How to create MODULES in VAAH CMS`

### Prerequisites

- Node
- VaahCMS project directory


### Step 1: VaahCli Installation

To use VaahCLI generators for generating modules, install VaahClI Tool using following command

```terminal command
npm i vaah -g
```

### Step 2: Installation of Modules

###### Note: In this tutorial, we'll be creating Product Module.

Command that is used to generate a module is:-
```terminal command
npx vaah cms:m
```

After triggering this command, it will ask for some information 
regarding the Module. Like:-

Technology to be used for Frontend:-
```
? Choose the tech stack of the module:  Module - Vue3 & PrimeVue
```

You can change the option by using arrow key.

Vue3 & PrimeVue will provide primevue components with vue3 for the frontend.
Vue2 & Buefy will provide Buefy components (using Bulma css) with vue2 for the frontend.

After that information related to modules such as name, title, description
etc. of the module.

- Name of The Module you want to create. For example Products.
    ```
    ? Enter your module name:  
    ```

- Enter more relevant name for your module. Example Product Management etc.
    ```
    ? Enter meaningful title for your module:
    ```

- More details of the module. Example Product Management Module for Admin (or Seller)
    ```
    ? Enter your module description:
    ```

- Name of the person creating the module. Or press enter to go with default value provided.
    ```
    ? Enter Author name: vaah
    ```

- Email of the author. Or press enter to enter default value.
    ```
    ? Enter Author email:  support@vaah.dev
    ```
  - Press Enter for default value for Author website and Download Url.
      ```
      ? Enter author website:  https://vaah.dev
      ? Enter download url: 
      ```
    - Enter `true` if you want to run migration for this module as soon as the module
      is activated. Else select `false`.
        ```
        ? Do you want to run migration on activation (true/false):  true
        ```
  ::: warning NOTE
  All the migration files will be found in `root/VaahCms/Modules/<module-name>/Migrations` directory
  :::
- Select `true` if you want to activate this module with some sample data. Else
select `false`.

    ```
    ? Will your module contains sample data (true/false):  true
    ```
    Use SampleDataTableSeeder for seeding Sample data.
  ::: warning NOTE
    All the Seeds files will be found in `root/VaahCms/Modules/<module-name>/Database/Seeds` directory.
  :::
After providing all the information, Module will be generated under `project-root/Vaahcms/Modules`.
<img :src="$withBase('/images/module_path.png')" alt="module_path">


`<module-root-folder>\config\config.php` contains the information that was entered while creating a module and can be changed by making changes to config.php file.
<img :src="$withBase('/images/module-config-file.png')" alt="module-config-file">

### Step 3: Activating a module
Go to:-
```http request
<public-url>/backend
```
<img :src="$withBase('/images/vaahcms-backend-login.png')" alt="backend-login">

and login to the backend panel using credentials of the user that was created while the installation of VaahCms.

After that, on the sidebar, click on `Extend` and then click on `Modules`.

```http
<public-url>/backend#/vaah/modules/
```
<img :src="$withBase('/images/module-activation-page.png')" alt="module-activation-page">

List of all the installed modules will be displayed. From this list, 
find your module and click on `Activate` button present on the right
side of that same module to activate the module.

After Successful activation, module name will be visible on the 
sidebar.

<img :src="$withBase('/images/module-dashboard-page.png')" alt="module-dashboard-page">

::: warning NOTE
 All migrations of that specific module will run automatically when the module is activated if `is_migratable` is set to true in config file.
:::

### Step 4: After activation of module, open ```.env & .env.custom``` and paste below code
```
MODULE_PRODUCT_ENV=develop
```
### Step 5: Install the dependencies
```shell
Run 'npm install' at VaahCms/Modules/Product/Vue folder
Now run 'npm run dev' at VaahCms/Modules/Product/Vue folder
```
### Step 6: Go to following url to access dashboard of product
```http request
<public-url>/backend/product#/
```

### Step 7: This video will help you to understand how to generate module.

<figure>
<iframe width="740" height="393" src="https://www.youtube.com/embed/8aNtxlLY-xE" title="VaahCMS 2.x + Vue3 | How to create module and use pre-configured vue 3 app" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</figure>

### Step 8: Directory Structure

<img :src="$withBase('/images/module-directory-structure.png')" alt="module-directory-structure">

- Config:
  Config file is present here. Config file contains all the information related to module, that was provided while creating module, such as, name, description, `is_migratable`, `is sample data available` etc.
  And this information can be changed in this config file.

  <img :src="$withBase('/images/module-config-file.png')" alt="module-config-file">

- Database:
  All the Factory, Migrations and Seeds files of this module are present in Database Folder.

  - To generate Migration File:
    ```terminal
     npx vaah cms:m-make migration <module-folder-name> <migration-name> 
    ```
      <img :src="$withBase('/images/module-migration-file.png')" alt="module-migration-file"> 
    Migration file will be generated under `Database/Migrations`.

  In order to run migrations, `deactivate` and `activate` module again.

- To generate Seeds File:
  ```terminal
   npx vaah cms:m-make seed <module-folder-name> <seeder-name>
  ```

  Seeds file will be generated under `Database/Seeders`. Or we can use json files to seed data into tables.
  To use a json file, create a json file under `<module-folder>/Database/Seeds/json` folder.
  Example:
  <img :src="$withBase('/images/module-json-seed-file.png')" alt="module-json-seed-file">

  and this json file can be used in SampleDataTableSeeder
  <img :src="$withBase('/images/module-sample-seeder-file1.png')" alt="module-sample-seeder-file1">

  and
  <img :src="$withBase('/images/module-sample-seeder-file2.png')" alt="module-sample-seeder-file2">

  and to run `SampleDataTableSeeder` file, click on `import sample data` button:-
  <img :src="$withBase('/images/module-sample-seeder-button.png')" alt="module-sample-seeder-button">
  ::: warning NOTE
  In order to run seeds, `is_sample_data_available` must be set to true in config file.
- :::
- Http:
  All the Controllers,Middlewares,Requests file related to this module will be created here.
  command used to create module controller is:-
    ```terminal-command-for-controller 
        vaah cms:t-make controller <module-folder-name> <controller-name>
    ```
    ```terminal-command-for-middleware
        vaah cms:t-make middleware <module-folder-name> <middleware-name>
  ::: warning NOTE
  All the Controllers must be created in Http/Controllers/Backend for modules.
  :::
  
- Models:
  All the models for this module will be generated in `<module-root>/Models` using:
```terminal
    npx vaah cms:t-make model <module-root> <model-name>
```
- Views:
  All the views for this module will be generated in `<module-root>/Resources/Views/backend`
  - this is the first page of the module `index.blade.php`.

- Vue:
  This folder will contain all the vue files, vuex store, vue routes related to this module.
  - Vue components will be present under Vue/pages.
    <img :src="$withBase('/images/module-vue-components-files.png')" alt="module vue components files">

  - Vue routes will be present under Vue/routes.
    <img :src="$withBase('/images/module-vue-routes-file.png')" alt="modules vue routes file">

  - Vue store will be found under Vue/stores.
    <img :src="$withBase('/images/module-vue-store-file.png')" alt="module vue store file">
  
