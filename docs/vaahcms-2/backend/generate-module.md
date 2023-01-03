# Generate Modules in Vaah Cms

## Introduction

This is guide to teachs `How to create MODULES in VAAH CMS`

### Prerequisites

- node js installed
- vaah project directory


### Step 1: Vaah Cli Installtion

To use Vaah generators to generate modules, install VaahCli Tool using

```terminal command
npm install vaah -g
```
or
```terminal command
npm i vaah -g
```

### Step 2: Installation of Modules

###### Note: For this tutorial, we'll be creating Product Module.

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

- Enter more relevent name for your module. Example Product Managment etc.
    ```
    ? Enter meaningful title for your module:
    ```

- More details of the module. Example Product Managment Module for Admin (or Seller)
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
- Press enter for default value for Author website and Download Url.
    ```
    ? Enter author website:  https://vaah.dev
    ? Enter download url: 
    ```
- Enter `true` if you want to run migration for this module as soon as the module
  is activated. Else select `false`.
    ```
    ? Do you want to run migration on activation (true/false):  true
    ```

    ###### Note: All the migration files will be found in `root/VaahCms/Modules/<module-name>/Migrations` directory

- Select `true` if you want to activate this module with some sample data. Else
select `false`.

    ```
    ? Will your module contains sample data (true/false):  true
    ```
    For Sample data seeders SampleDataTableSeeder.

    ###### Note: All the Seeds files will be found in `root/VaahCms/Modules/<module-name>/Seeds` directory.

After providing all the information, Module will generated under `project-root/Vaahcms/Modules`.
<img :src="$withBase('/images/module_path.png')" alt="module_path">


`<module-root-folder>\config\config.php` contains the information that was enter while creating a module and can be changed by making changes tp config.php file.
<img :src="$withBase('/images/module-config-file.png')" alt="module-config-file">

### Step 3: Activating a module
Go to:-
```http request
<your-site-url>/backend
```
<img :src="$withBase('/images/vaahcms-backend-login.png')" alt="backend-login">

and login to the backend panel using credentials of the user that was created while the installation of VaahCms.

After that, on the sidebar, click on `Extend` and then click on `Modules`.

```http
<your-site-url>/backend#/vaah/modules/
```
<img :src="$withBase('/images/module-activation-page.png')" alt="module-activation-page">

List of all the installed modules will be displayed. From this list, 
find your module and click on `Activate` button present on the right
side of that same module to activate the module.

After Successfull activation, module name will be visible on the 
side bar. Click on module name to access DashBoard of the module.

<img :src="$withBase('/images/module-dashboard-page.png')" alt="module-dashboard-page">

###### Note: All migrations of that specific module will run automatically when the module is activated .
