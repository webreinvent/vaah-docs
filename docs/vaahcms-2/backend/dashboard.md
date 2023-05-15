# Dashboard

[comment]: <> ([[toc]])

This is the home page of VaahCms. Where you can have the shortcuts of important features.


Visit following url you will see the Dashboard section:

```http request
<public-url>/backend#/vaah
```

Below Image is a example of Dashboard.

<img :src="$withBase('/images/2.x-dashboard-1.png')">

## Purpose & Features

::: warning NOTE
The main use of a dashboard is to show a comprehensive overview of data from different sources. 
Dashboards are useful for monitoring, measuring, and analyzing relevant data in key areas.
:::

#### The features we will discuss below:

On the right side `Getting Started` button is there. It will redirect you to the documentation section if you are new to VaahCms.

<img :src="$withBase('/images/2.x-dashboard-2.png')">

On the left side of `Getting Started` button `Check updates` button is there, which is to check whether update is available or not.
It will redirect to update section of settings.

<img :src="$withBase('/images/2.x-dashboard-3.png')">

Below of these two button two accordion tabs are there `Jobs` & `Laravel Logs`.

<img :src="$withBase('/images/2.x-dashboard-4.png')">

In Jobs tab describes the things related to laravel queue. There is two options 
available `Pending` & `failed` , which will redirects to jobs and failed jobs section respectively.

<img :src="$withBase('/images/2.x-dashboard-5.png')">

Another tab is about error logs of laravel. If any issue happen user can see the log list here.
For the details, user need to click `view` button to go to the details view of the log section.

<img :src="$withBase('/images/2.x-dashboard-6.png')">

At the middle section of Dashboard Two sections are there one is `Manage sites`
another one is `User & access`

<img :src="$withBase('/images/2.x-dashboard-7.png')">

| Buttons            | Use for         |
| -----------------  | --------------- |
| Activate Theme     | Redirect to `List of themes` section to activate one from there |
| View your Site     | Redirect to the `Auther's website` of the activated theme       |
| Manage your module | Redirect to Module section         |
| View Details       | Redirect to the respective section |