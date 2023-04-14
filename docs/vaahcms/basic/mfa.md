# Multi-Factor Authentication

[comment]: <> ([[toc]])

## Introduction

This is a guide to use `Multi-Factor Authentication` in VaahCms.
Inside general settings presents in settings `Securities` is there.
In securities user can configure MFA.

Visit following url you will see the Securities section:

```
<project-url>/backend#/vaah/settings/general
```

Below Image is an example of Securities.

<img :src="$withBase('/images/1x-mfa-1.png')">

## Usage

Through `Multi-Factor Authentication` user needs to provide password and OTP (Via Email) to `Sign In`.

To apply this feature of VaahCms some configuration needs to be done from `Admin Panel`.

## Feature-1

First feature is admin can set `MFA` for all by choosing the option shown in below image:

<img :src="$withBase('/images/1x-mfa-2.png')">

After choosing click on `save` button to apply.

Below video will help you to understand how it worked.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_FGMlyNXqh7.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

## Feature-2

Second feature is let decide the users to active MFA from the profile.
For that from admin side Third option of `Securities` should be selected.

<img :src="$withBase('/images/1x-mfa-3.png')">

Below video will help you to understand how it worked.

<figure>
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_esjC7ykzT4.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

`Multi-Factor Authentication` can be deactivated by choosing First option in the list.

<img :src="$withBase('/images/1x-mfa-4.png')">
