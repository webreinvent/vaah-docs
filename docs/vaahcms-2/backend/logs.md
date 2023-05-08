# Logs

[comment]: <> ([[toc]])

## Introduction

This features helps  user to view the errors inside the panel instead of terminal if any error approaches during work.

Visit following url you will see the Lobs section:

```http request
<public-url>/backend#/vaah/advanced/logs
```

Below Image is a example of job records.

<img :src="$withBase('/images/logs-1.png')">

## Usage

#### Details view

By default, the view of logs are in list mode. 
If user want to see more about `error` click on `Eye icon` in action column.


<img :src="$withBase('/images/logs-2.png')">


User can directly refresh items by clicking the `Refresh icon`

User can delete logs by clicking `Trash icon` presents individual rows.
Another way is clicking `Delete All`.

<img :src="$withBase('/images/logs-3.png')">
