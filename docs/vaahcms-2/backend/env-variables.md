# Environment variables

[comment]: <> ([[toc]])

## Introduction

Environment variables are values that impact the processes and behavior of vaahCMS, it may access the values for configuration purposes.

Visit following url you will see the Env-variables section:
```
<project-url>/backend#/vaah//settings/env-variables
```
Below Image is an example of Env-variables values.

<img :src="$withBase('/images/env-setting-1.png')">

## Usage

#### Add variables

For adding a variable need to scroll down, at the bottom-right corner a field will be visible.
like below image :

<img :src="$withBase('/images/env-setting-2.png')">

Until the field is null ```Add Env Variable``` button will be disabled. Once it filled button will be enabled and after clicking it will add variable to the lists.

<img :src="$withBase('/images/env-setting-3.png')">

To save the list with newly added variable you need to click on save butto
Then a warning confirmation will come just like below :

<img :src="$withBase('/images/env-setting-4.png')">

Below video for better understanding.

<figure>
  <iframe src="https://drive.google.com/file/d/1L8dVvzSphmi6OqrI0HL25aw5uVp1L3D-/view?usp=share_link" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

You can observe every letter and spaces are converted to uppercase and "_" respectively to reduce error during using as it will affect environment of the project.

#### Other features

In the blue colour tag active env file name is written.

<img :src="$withBase('/images/env-setting-5.png')">

At the top-right corner a download button will be visible, by clicking it .env file be downloaded.

<img :src="$withBase('/images/env-setting-6.png')">

Besides `Download button` a refresh button is there, through which you can reload the data.