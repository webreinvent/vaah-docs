# Generate Theme in Vaah Cms

## Introduction

This is guide to teachs `How to create Theme in VAAH CMS`

### Prerequisites

- node js installed
- vaah project directory


### Step 1: Vaah Cli Installtion

To use Vaah generators to generate themes, install VaahCli Tool using

```terminal command
npm install vaah -g
```
or
```terminal command
npm i vaah -g
```

### Step 2: Installation of Theme

###### Note: For this tutorial, we'll be creating Articles Theme.

Command that is used to generate a theme is:-
```terminal command
npx vaah cms:t
```

After triggering this command, it will ask for some information
regarding the Theme. Like:-


- Name of The Theme you want to create. For example ArticleTheme.
    ```
    ? Enter your theme name:  ArticleTheme  
    ```

- Enter more relevent name for your Theme. Example Theme for Articles etc.
    ```
    ? Enter meaningful title for your theme:  Theme for Articles
    ```

- Detailed Description about the Theme. Example:-
    ```
    ? Enter your theme description:  This theme will be used for Article Section
    ```

- Name of the person creating the Theme. Or press enter to go with default value provided. Like:-
    ```
    ? Enter Author name:  vaah
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

- Enter `true` if you want to run migration for this theme as soon as the theme
  is activated. Else select `false`.
    ```
    ? Do you want to run migration when activated (true/false):  true
    ```

  ###### Note: All the migration files will be found in `root/VaahCms/Themes/<theme-name>/Database/Migrations` directory

- Select `true` if you want to activate this theme with some sample data. Else
  select `false`.

    ```
    ? Will your theme contains sample data (true/false):  true
    ```
  For Sample data seeders SampleDataTableSeeder.

  ###### Note: All the Seeds files will be found in `root/VaahCms/Themes/<theme-name>/Database/Seeds` directory.

After providing all the information, Theme will be generated under `project-root/Vaahcms/Themes`.
<img :src="$withBase('/images/themes/files.png')" alt="theme_path">

`<theme-root-folder>\config\config.php` contains the information that was enter while creating a theme and can be changed by making changes to config.php file.
<img :src="$withBase('/images/themes/config.png')" alt="theme-config-file">

### Step 3: Activating a Theme
Go to:-
```http request
<your-site-url>/backend
```
<img :src="$withBase('/images/themes/login.png')" alt="themes-login">

and login to the backend panel using credentials of the user that was created while the installation of VaahCms.

After that, on the sidebar, click on `Extend` and then click on `Themes`.

```http
<your-site-url>/backend#/vaah/themes/
```
<img :src="$withBase('/images/themes/activation-page.png')" alt="theme-activation-page">

List of all the installed themes will be displayed. From this list,
find your theme and click on `Activate` button present on the right
side of that same theme to activate the theme.

After Successfull activation, theme name will be visible on the
side bar. Click on theme name to access DashBoard of the theme.

<img :src="$withBase('/images//themes/activated-sidebar-icon.png')" alt="activated-theme-sidebar-icon">

###### Note: All migrations of that specific theme will run automatically when the theme is activated .


### Step 4: Directory Structure

<img :src="$withBase('/images/themes/directory-structure.png')" alt="directory-structure">

- Config:
  Config file is present here. Config file contains all the information related to theme, that was provided while creating theme, such as, name, description, `is_migratable`, `is sample data available` etc.
  And this information can be changed in this config file.

  <img :src="$withBase('/images/themes/config.png')" alt="theme-config-file">

- Database:
  All the Factory, Migrations and Seeds files of this themes are present in Database Folder.

    - To generate Migration File:
      ```terminal
       npx vaah cms:t-make migration <theme-folder-name> <migration-name> 
      ```
      example:-
      ```terminal
       npx vaah cms:t-make migration ArticleTheme contact
      ```
        <img :src="$withBase('/images/themes/migration-file.png')" alt="theme-migration-file"> 
      Migration file will be generated under `Database/Migrations`.

  In order to run migrations, `deactivate` and `activate` theme again.

- To generate Seeds File:
  ```terminal
   npx vaah cms:m-make seed <theme-folder-name> <seeder-name>
  ```

  Seeds file will be generated under `Database/Seeders`.
  Or
  we can use json files to seed data into tables.
  Example:
  <img :src="$withBase('/images/themes/json-seed-file.png')" alt="theme-json-seed-file">

  and this json file can be used in SampleDataTableSeeder
  <img :src="$withBase('/images/themes/seed-file1.png')" alt="theme-sample-seeder-file1">

  and to run `SampleDataTableSeeder` file, click on `import sample data` button:-
  <img :src="$withBase('/images/themes/seed-button.png')" alt="theme-sample-seeder-button">

- Http:
  All the Controllers,Middlewares,Requests file related to this theme will be created here.
  command used to create theme controller is:-
    ```terminal-command-for-controller 
        vaah cms:t-make controller <theme-folder-name> <controller-name>
    ```
    ```terminal-command-for-middleware
        vaah cms:t-make middleware <theme-folder-name> <middleware-name>
    ```
  #### Note: All the Controllers must be created in Http/Controllers/Backend for themes.

- Models:
  All the models for this theme will be generated in `<theme-root>/Models` using:
```terminal
    npx vaah cms:t-make model <theme-root> <model-name>
```
- Views:
  All the views for this theme will be generated in `<theme-root>/Resources/Views/backend`
    - this is the first page of the theme `index.blade.php`.

- Vue:
  This folder will contain all the vue files, vuex store, vue routes related to this theme.
    - Vue components will be present under Vue/pages.

      <img :src="$withBase('/images/themes/vue-file.png')" alt="theme vue componentes files">

    - Vue routes will be present under Vue/routes.

      <img :src="$withBase('/images/themes/vue-route-file.png')" alt="themes vue routes file">

    - Vue store will be found under Vue/stores.

      <img :src="$withBase('/images/themes/vue-store-file.png')" alt="theme vue store file">

#### Note: Use `npm install` inside theme root folder to install dependencies for vue, and after that `npm run dev` to display vue components.
