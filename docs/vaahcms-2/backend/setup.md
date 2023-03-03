# Setup

[[toc]]

## Purpose

You must navigate to the "Setup" page to configure the 
entire application after installing all the dependencies.
For setting up the database, email clients, 
and first "Super Administrator" account, we provided a GUI. 
This setup page makes it simple to set up the fundamental procedure 
and begin work.

`<public_url>/backend#/setup`

## Setup Process

#### Step - 1

Click on the installation button to start the procedure.

<img :src="$withBase('/images/vaahcms-two/setup/install-btn.png')">


#### Step - 2

When you click the installation button, a form with the fields listed bellowed opens.


##### Database Configuration

| Columns    | Type  | Description                                                  |
| ------------- | -----|------------------------------------------------------- |
| Debug | Drop-down | From this drop-down selection, you must choose your application's "debug" mode. |
| Time-zone | Searchable Drop-down | You may look up and select your application's time zone using this drop-down. |
| App/Website Name| Input | You have to enter the name of your application or website here. |
| Database Type | Drop-down | You must select the database for your application from this drop-down selection. |
| Database Host | Input | Enter the IP address of your database host here. |
| Database Port | Input | Enter the active port for your database here. |
| Database Name | Input |Enter the database name for your application here. |
| Database Username | Input | Enter your database's username here. |
| Database Password | Input | Enter your database's password here. |

After fill-up the form you click on the `Test Database Connection` button to ensure that your given credentials are right.

##### Mail Configuration

| Columns    | Type  | Description                                                  |
| ------------- | -----|------------------------------------------------------- |
| Mail Provider | Drop-down | From thin drop-down selection you must chose your mail provider client. |
| Mail Driver | Input | Enter your mail driver here. |
| Mail Host | Input | Enter your mail provider's host here. |
| Mail Port | Input | Enter your mail provider's port here. |
| Mail Username | Input | Enter your username here. |
| Mail Password | Input | Enter your password here. |
| Mail Encryption | Drop-down | From this drop-down selection you must chose your mail's encryption type. |
| From Name | Input | Enter your from name here. |
| From Email | Input | Enter your from email here. |

After fill-up the form you click on the `Test Mail Configuration` button to ensure that your given credentials are right.

For more understanding you can watch bellowed attached video.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_MQWp0lyUkn.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>

#### Step - 3

Click `Migrate & Run Seed` button for run the migration and seeds.

For more understanding you can watch bellowed attached video.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/chrome_xQZgIoVjc4.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>


#### Step - 4 

Now create a new `super administrator` account. 

For more understanding you can watch bellowed attached video.

<figure class="video_container">
  <iframe src="https://img-v4.getdemo.dev/screenshot/msedge_Y9hmmPuegS.mp4" frameborder="0" allowfullscreen="true" style="width: 100%; aspect-ratio: 16/9;"> </iframe>
</figure>
