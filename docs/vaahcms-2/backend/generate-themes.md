# Generate Themes in Vaah Cms

## Introduction

This is guide to teachs `How to create Themes in VAAH CMS`

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

###### Note: For this tutorial, we'll be creating Blog Theme.

Command that is used to generate a theme is:-
```terminal command
npx vaah cms:t
```

After triggering this command, it will ask for some information
regarding the Theme. Like:-

- Name of The Theme you want to create. For example BlogTheme.
    ```
    ? Enter your theme name:-  BlogTheme
    ```

- More relevent name for your Theme. Example, Blog Theme etc.
    ```
    ? Enter meaningful title for your theme: Blog Theme
    ```
                                                                                
- More details of the theme that explains more about what this theme contains and provides. Example, Blog Theme with Auth Page.
    ```
    ? Enter your theme description: Blog Theme with Auth Page
    ```

- Name of the person creating the Theme. Or press enter to go with default value provided.
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
- Enter `true` if you want to run seeder for this theme. Else select `false`.
    ```
    ? Will your theme contains sample data (true/false):  false
    ```

  ###### Note: All the seed files will be found in `root/VaahCms/Themes/<theme-name>/Database/Seeds` directory.


After providing all the information, Theme will generated under `project-root/Vaahcms/Themes.`.

`<theme-root-folder>\config\config.php` contains the information that was enter while creating a theme and can be changed by making changes to config.php file.
<img :src="$withBase('/images/theme-config-file.png')" alt="theme-config-file">

### Step 3: Activating a Theme
Go to:-
```http request
<your-site-url>/backend
```
<img :src="$withBase('/images/vaahcms-backend-login.png')" alt="backend-login">

and login to the backend panel using credentials of the user that was created while the installation of VaahCms.

After that, on the sidebar, click on `Extend` and then click on `Modules`.

Or visit:-
```http
<your-site-url>/backend#/vaah/themes/
```
to access `Theme Activation Page` directly.

<img :src="$withBase('/images/theme-activation-page.png')" alt="module-activation-page">

List of all the installed themes will be displayed. From this list,
find your theme and click on `Activate` button present on the right
side of that same theme to activate the theme.

After successfull activation, theme name will be visible on the
side bar. Click on theme name to access DashBoard of the theme.

<img :src="$withBase('/images/theme-dashboard-page.png')" alt="theme-dashboard-page">

###### Note: All migrations of that specific theme will run automatically when the theme is activated .