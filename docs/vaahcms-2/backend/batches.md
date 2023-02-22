# Batches

[comment]: <> ([[toc]])

## Introduction

Through this feature you can monitor the assign jobs. This job section will show you the records of completed jobs only.
In this section we can see progress of the Batches of jobs like if batch have failed or batch has completed executing or when has this batch completed or what percentage of the batch has completed etc

Visit following url you will see the Batches section:

```
<project-url>/backend#/vaah/advanced/batches
```

Below is an example of Batch records.

<img :src="$withBase('/images//batches/list.png')">

## Usage

#### Bulk delete

By selecting checkbox present at starting of each row one can delete the records. Also there is delete all option for make it empty.

```delete by selecting```

<img :src="$withBase('/images/batches/single-delete.png')">

```delete all```

<img :src="$withBase('/images/batches/delete-bulk.png')">

#### Sorting
You can sort records by ID and with the date it was created.

<img :src="$withBase('/images/batches/sort.png')">

#### Details
In details column information related to the bacth can be seen.

<img :src="$withBase('/images/batches/details.png')">

### Step-1 Create Batch Table

Jobs can be batched in order to be executed in bulk.

```Command “queue:batches-table” helps you to create migration file forbatching.```
```
php artisan queue:batches-table 
```

```create table in database```
```
php artisan migrate 
```

Batch table will contain meta information about your job batches, such as their completion percentage.

### Step-2 Create Batch Class
To make a Job Batchable use:-
```
use Illuminate\Bus\Batchable;
```
in imports of the job class.

```
<?php
 
namespace App\Jobs;
 
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
 
class ImportCsv implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
 
    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->batch()->cancelled()) {
            // Determine if the batch has been cancelled...
 
            return;
        }
 
        // Import a portion of the CSV file...
    }
}
```
### Step-2 Create a Batch of Jobs

```
$batch = Bus::batch([
    new ImportCsv(1, 100),
    new ImportCsv(101, 200),
    new ImportCsv(201, 300),
    new ImportCsv(301, 400),
    new ImportCsv(401, 500),
])->then(function (Batch $batch) {
    // All jobs completed successfully...
})->catch(function (Batch $batch, Throwable $e) {
    // First batch job failure detected...
})->finally(function (Batch $batch) {
    // The batch has finished executing...
})->dispatch();
 
return $batch->id;
```


#### Note:- This section contains infomation related to batches that has been executed. Like percentage of completion, ids of failed jobs, completion date or cancellation date etc. 
