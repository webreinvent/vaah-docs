# Installation

[[toc]]

## Install via VaahCLI

Install [VaahCLI](https://vaah.dev/cli), via following command:

```shell
npm i vaah -g
```

Then run following command to install VaahCMS:

```shell
npx vaah cms:install
```

Then run

```shell
php artisan serve
```

And visit:

```http request
localhost:8080/vaahcms/setup
```
**OR**

If you are using `xampp` or `wamp`, then visit

```http request
<laravel-public-url>/vaahcms/setup
```

::: warning NOTE
If you visit `<laravel-public-url>` before completing the setup then you may get few errors, you can ignore these errors and visit `<laravel-public-url>/vaahcms/setup` to setup the VaahCMS
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

```shell
composer install
```

   

### Setup & Configuration

Once the dependencies are downloaded, you need to publish the assets & config of VaahCMS via following commands:

```shell
php artisan vendor:publish --provider='WebReinvent\VaahCms\VaahCmsServiceProvider' --tag=assets --force
```

```shell
php artisan vendor:publish --provider='WebReinvent\VaahCms\VaahCmsServiceProvider' --tag=config --force
```

If you get this error: `Unable to locate publishable resources`.

Then just run publish command and choose the class that you want to publish.

```shell
php artisan vendor:publish
```


If you're using `XAMPP` or `WAMP`, visit following url to begin the setup:

```http request
<public-url>/vaahcms/setup
```

or

If you have PHP installed locally, and you would like to use PHP's built-in development server to serve your application, you may use the serve Artisan command. This command will start a development server at `<public-url>`. Run following command to start the serving the application:

```shell
php artisan serve
```

and visit:

```http request
localhost:8080/vaahcms/setup
```


This will begin the setup process and easy form wizard to configure your the application. Once you're done with the configuration you will be able to login to the backend (administrative control panel) at following url:

In case of XAMPP or WAMP:

```http request
<public-url>/backend
```
