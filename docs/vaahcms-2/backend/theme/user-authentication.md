# Vaahcms

[comment]: <> ([[toc]])

## Introduction

This is a guide to use user auth in vaahcms. Before using auth we need to install module and theme
For the module and theme set up follow below link:-
[https://github.com/webreinvent/vaahcli](https://github.com/webreinvent/vaahcli)

## Step-1
Firstly need to update VaahCms self update
Use below command for that :
```shell
npm install vaah -g
```
Then install theme using below command :
```shell
npx vaah cms:t
```

<img :src="$withBase('/images/user-auth-1.png')">

## Step-2
::: warning NOTE
After completing theme setup and activation we will generate authentication :
Use below command for that :
:::
```shell
npx vaah cms:auth
```

## Step-3
After run this command it will ask a question :

- ? Enter the Theme folder name:  MyTheme ```Answer will be the name of the theme where auth will run.```

```This video will help you to understand how to run auth.```

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_j3WEb0p0h0.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Step-4
Now in terminal it will show some procedure which we have to follow them.

```
Following steps:
1) Include Routes/frontend/routes-auth.php in Routes/frontend.php of the theme
2) Include VueScripts.js in webpack.mix.js, sample code is below:
    //To js minification
    let jses = [
        './Resources/assets/js/VueScripts.js',
    ];

    mix.js(jses,  output_folder+'/build/script.js');
3) Include the CSS in <head> tag of master/default blade layout of the theme if not included:
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://unpkg.com/buefy/dist/buefy.min.css">

4) Include the JS script before </body> tag of master/default blade layout of the theme if not included:
    <script src="https://unpkg.com/jquery@3.6.0/dist/jquery.js"></script>
    <script src="https://unpkg.com/axios@0.21.1/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@2.6.14/dist/vue.js"></script>
    <script src="https://unpkg.com/buefy/dist/buefy.min.js"></script>
    <script src="{{vh_theme_assets_url("MyTheme", "build/script.js")}}"></script>
5) Run npm run dev in the root folder of the theme
6) Now, following routes will be available:
a) <public-url>/signin
b) <public-url>/signup
```

<img :src="$withBase('/images/user-auth-4.png')">

## Step-5
Include route auth file

```VaahCms/Themes/MyTheme/Routes/frontend.php```

Add this code in above path

```php
include("frontend/routes-auth.php");
```
<img :src="$withBase('/images/user-auth-5.png')">

## Step-6
Include VueScripts

```VaahCms/Themes/MyTheme/webpack.mix.js```

Add this code in above path  

```js
let jses = [
        './Resources/assets/js/VueScripts.js',
    ];

    mix.js(jses,  output_folder+'/build/script.js');
```
<img :src="$withBase('/images/user-auth-6.png')">

## Step-7
Include the vue router file

```VaahCms/Themes/MyTheme/Resources/views/frontend/layouts/default.blade.php```

Add this code in above path
```
<script src="{{vh_theme_assets_url("MyTheme", "build/script.js")}}"></script>
```
<img :src="$withBase('/images/user-auth-7.png')">

## Step-8
Then add ```/signup``` ahead of your URL to display sign in page 
```http request
<public-url>/signup
```
<img :src="$withBase('/images/user-auth-8.png')">

```In this video the process of signup where data stored after signin, data flow after activation through link explained.```

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_vU88cIvMDV.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Step-9
Then add ```/signin``` ahead of your URL to display sign in page
```http request
<public-url>/signin
```
<img :src="$withBase('/images/user-auth-9.png')">