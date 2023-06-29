# User settings

[comment]: <> ([[toc]])

## Introduction
User setting is basically deals with the fields and data we are asking to user at the time of registration or user create. Here we can manipulate the fields' visibility.

Below image is the example of user-settings:

<img :src="$withBase('/images/user-settings-1.png')">

## Usage

There are two accordion named as `Fields` and `Custom Fields` available, 
One can open them using clicking on them or using button `Expand all` button and close them by clicking again on open `Accordion` or `Collapse all` button. 

<img :src="$withBase('/images/user-settings-2.png')">

#### Fields

Inside this section some predefined fields are there. By default, the fields are visible in `user create form`.
If you want to hide in `user create form` just om the toggle present in the `Is Hidden` column.

Below image will help you to find the column :

<img :src="$withBase('/images/user-settings-3.png')">

In below image You can see where it will affect  :

<img :src="$withBase('/images/user-settings-4.png')">

If you want to hide in `user registration form` you need to `check` `Apply To Registration`
column.

Below image will help you to find the column :

<img :src="$withBase('/images/user-settings-5.png')">

In below image You can see where it will affect  :

<img :src="$withBase('/images/user-settings-6.png')">

Control of `Fields` into respective area is shown in below video :

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_7SPozdalzj.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

#### Custom Fields

This feature is for extra requirement. Suppose we need Adhar Number for which there is no field, in that case we can create it and use it in desired forms.

Below image is of `Custom Fields` :

<img :src="$withBase('/images/user-settings-7.png')">

You can see a dropdown in above image on bottom-left corner, select field type and press add button to add.

After `Add` newly added field will be like below image :

<img :src="$withBase('/images/user-settings-8.png')">

In the above image 3 buttons and 1 text fields are there.
First button from left side is to drag as the sections are draggable.

<img :src="$withBase('/images/user-settings-9.png')">

Second button `Cog icon` is to expand collapse of field options.

<img :src="$withBase('/images/user-settings-10.png')">

Third `Trash` button is to remove added fields form the `Custom Fields` list.

The text field present is to write the name of the field so that it will dispaly in form with that name dynamically.

<img :src="$withBase('/images/user-settings-11.png')">

More configuration are there, after save with configuration it will appear in the form. 

Below video will explain the flow :

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_NJVUbFZDuA.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

