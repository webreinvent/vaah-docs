# Failed Jobs

[comment]: <> ([[toc]])

## Introduction

Sometimes our que job will fail For that reason we have a failed-jobs feature, where user can know the details about jobs which is broken in queue.

Visit following url you will see the Jobs section:

```
<project-url>/backend#/vaah/advanced/failedjobs
```

Below Image is a example of job records.

<img :src="$withBase('/images/failedjobs-1.png')">

## Usage

#### Bulk delete

By selecting datas one can delete the records. Also there is delete all option for make it empty.

```delete by selecting```

<img :src="$withBase('/images/failedjobs-2.png')">

```delete all```

<img :src="$withBase('/images/failedjobs-3.png')">

#### Sorting
You can sort records by `ID` and with the `date it was created`.

<img :src="$withBase('/images/failedjobs-4.png')">

#### Payload
In `payload` column there is an eye button present, by clicking it will show the `payloads` in a popup,

<img :src="$withBase('/images/failedjobs-5.png')">

#### Exception
In `Exception` column there is an eye button present, by clicking it will show the `exception` in a popup,

<img :src="$withBase('/images/failedjobs-6.png')">

#### Reload
At top-right corner there is a `Refresh` icon there by clicking it data list will be reloaded.

<img :src="$withBase('/images/failedjobs-7.png')">