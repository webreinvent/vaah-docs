# Installation

[[toc]]

## Install via VaahCLI

Install [VaahCLI](https://vaah.dev/cli), via following command:

```js
npm install vaah -g
```

Then run following command to install VaahCMS:

```sh
npx vaah cms:install
```

Then run

```shell
php artisan serve
```

And visit:

```
http://127.0.0.1:8000/vaahcms/setup
```

::: warning NOTE
If you visit http://127.0.0.1:8000 before completing the setup then you may get few errors, you can ignore these errors and visit http://127.0.0.1:8000/vaahcms/setup to setup the VaahCMS

:::

## Manual Download & Installation

### Download VaahCMS

You can manually download the setup files, from following link:

[Download VaahCMS](https://github.com/webreinvent/vaahcms-ready/archive/master.zip)

### Install Dependencies

VaahCMS utilizes [Composer](https://getcomposer.org/) to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.

1. Extract the downloaded VaahCMS folder.

2. Open terminal or command prompt and open the root folder of VaahCMS files.

3. Run following command to install the dependencies:

```php
composer install
```

   

### Setup & Configuration

Once the dependencies are downloaded, you need to publish the assets & config of VaahCMS via following commands:

```php
php artisan vendor:publish --provider='WebReinvent\VaahCms\VaahCmsServiceProvider' --tag=assets --force
```

```php
php artisan vendor:publish --provider='WebReinvent\VaahCms\VaahCmsServiceProvider' --tag=config --force
```

If you get this error: `Unable to locate publishable resources`.

Then just run publish command and choose the class that you want to publish.

```php
php artisan vendor:publish
```




If you're using XAMPP or WAMP, visit following url to begin the setup:

```
<project-url>/vaahcms/setup
```

or

If you have PHP installed locally and you would like to use PHP's built-in development server to serve your application, you may use the serve Artisan command. This command will start a development server at `http://localhost:8000`. Run following command to start the serving the application:

```php
php artisan serve
```




and visit:

```
http://localhost:8000/vaahcms/setup
```


This is will begin setup and easy form wizard to configure your the application. Once you're done with the configuration you will be able to login to the admin control panel at following url:

In case of XAMPP or WAMP:

```
<project-url>/backend
```


In case of development server:

```
http://localhost:8000/backend
```

