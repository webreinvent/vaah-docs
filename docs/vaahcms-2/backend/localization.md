# Localization

[comment]: <> ([[toc]])

## Introduction

Localization features provide a convenient way to retrieve strings in various languages, allowing you to easily support multiple languages within your application.

Visit following url you will see the localization section:
```php
<public-url>/backend#/vaah//settings/localization
```
Below Image is an example of localization.

<img :src="$withBase('/images/localization-setting-1.png')">

## Usage

#### Add into localization

For adding into need to scroll down, at the bottom-left corner a field will be visible.
like below image :

<img :src="$withBase('/images/localization-setting-2.png')">

Until the field is null ```Add String``` button will be disabled. Once it filled button will be enabled and after clicking it will add variable to the lists.

<img :src="$withBase('/images/localization-setting-3.png')">

To save the list with newly added variable you need to click on save button
Then a warning confirmation will come just like below :

<img :src="$withBase('/images/localization-setting-4.png')">

Below video for better understanding.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_OAmkBlhFCF.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>



#### Add language localization

On the top-right corner a button is there named `Add Language` by clicking it a form will appear under message section.

Like below image

<img :src="$withBase('/images/localization-setting-5.png')">

Two fields are required to save the language otherwise it will ask ti fill.

After click on save button language will be added in the list and you can see the list of languages by clicking the dropdown on top-left corner.

<img :src="$withBase('/images/localization-setting-6.png')">

Default language is `English (56/57)`, if you want to change language select one from the list then it will filter the values against the language.

Inside the bracket it is written how many fields are filled out of total added fields.

If you want to add field, it will add the field against the selected language from the list.

Below video will help you to understand with example :

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_9HFaHtKvhc.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

#### Add category localization
There is an option vaahCMS provide that to add strings under category which will enhance the user experience in multi-language feature.
User can filter the lists using category and language as well.

Below image is an exmple of add and filter of category:

<img :src="$withBase('/images/localization-setting-7.png')">

`Add New Category` section will be visible after click on `Add Category button` under warning message.

Once put category name in the field and click on `save` button, the new category will be saved and appear in the filter dropdown of category.

Below video will help you to understand with example :

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_CEk9xFYSRC.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

Besides `Category filter dropdown` another dropdown is present which is to filter the list with values or without.

<img :src="$withBase('/images/localization-setting-8.png')">

#### Reset localization filter

At the end of filter row `Reset` button will help to reset all the filters. But after reset `Englist (56/57) will be selected as it is the default language.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_CXayJJCfdu.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

#### Generate Language Files localization
`Generate Language Files` button is there at the bottom-right corner before `save` button. By which You can generate language file in the backend.

<img :src="$withBase('/images/localization-setting-9.png')">













