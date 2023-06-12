# General settings

[[toc]]

## Introduction

Those configurations are used to manage vaahCMS can be set in this `General settings` section.
Here controls are segregated in 5 parts in accordion, will discuss one by one.

Visit following url you will see the General settings section:

```http request
<public-url>/backend#/vaah/advanced/general
```

Below Image is a example of General settings.

<img :src="$withBase('/images/general-settings-1.png')">

## Site Settings

In this setting we are configuring the behavior of the application.

Below Image is a example of Site settings.

<img :src="$withBase('/images/general-settings-2.png')">

Follow the lists below to know about site settings 

| Title         | Description                                           |
| ------------- | ------------------------------------------------------------ |
| Site Title                            | The value in this field will reflect as a title in frontend application.        |
| Default Site Language                 | The value in this field  wii be set as default through out application.        |
| Redirect after Frontend Login         | This will allow user to redirect after login in frontend side.|
| Meta Description                      | Short description of the application.   |
| Search Engine Visibility              | This is known as seo visibility.   |
| Assign Role(s) on Registration        | This value will be the status of a user after registration. |
| Allowed file types for upload         | This will allow user to upload files of particular types. |
| Copyright Text                        | This will show in footer. Custom option is there one can show it's own words. |
| Copyright Link                        | This will show in footer. Custom option is there one can show effective link|
| Copyright Year                        | This will show in footer. Custom year option is there. |
| Max number of forgot password attempts| This will allow user to attempt forgot password. If the number of attempts exceeds from given number it will take action. |
| Maximum number of login attempts      | This will allow user to fixed login attempt. If the number of attempts exceeds from given number it will take action. |
| Password Protection                   | This will help to masking password at the time of login or registered. |
| Laravel Queues                        | This will enable the queue feature of laravel in vaahCMS. |
| Maintenance Mode                      | This will show a message for maintenance if it is enabled. |
| Redirect after Backend Logout         | After logout where should it redirect, login page, frontend  or other this feature is for. |

After set all the configuration you need to click on `Save Setting` button to achieve those effect.
There is also `Clear Cache` button which will help user to clear by pressing a button, after that it will log out and take to the login page.

Below video will help to understand about site settings :

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_2aMY72cHW6.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Date & Time

This setting is to set the format of the date, time and date&time. Each format get a dropdown,
 where some fixed formats are there. Also there is custom option available to avail user defined format.

Below image is of `Date & Time` settings.

<img :src="$withBase('/images/general-settings-3.png')">

After set the format of the Date and Time you need to click on the `Save`.

## Social Media & Links

This is for managing social media and its links.

Below image is of `Social Media & Links` settings.

<img :src="$withBase('/images/general-settings-4.png')">

Here one can add new social media link also remove old one if not useful.
 Watch the video below to know How to `Manage social media & its links` :

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_FRxckDhd8J.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Scripts

In this section you can put `Google Analytics` script tags. Here we can put tags in two parts, one inside head and another one inside body.

Below image is of `Scripts` settings.

<img :src="$withBase('/images/general-settings-5.png')">

After put tags inside these four fields click on `Save` to store the configuration for `Script Tag`

## Meta Tags

VahhCMS has meta tag updating section where we can add our custom meta tag. VaahCMS presents two meta tags, which is
`Google Webmaster` & `Open Graph(Facebook)`.


Below image is for reference:

<img :src="$withBase('/images/general-settings-6.png')">

One can add a tag by clicking  `Add Meta Tag` button. It will add a tag there you need to define some property.

Below video will help you to understand how to add a `Meta Tag`:

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_ls71HjXLXM.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

If you want to add VaahCMS `Meta Tags` watch below video :

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_5N1FXxuZ31.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>













