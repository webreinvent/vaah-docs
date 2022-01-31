# Mails

[[toc]]

### Setup Laravel Queues for VaahCMS

Follow the following steps:

1. Set `QUEUE_CONNECTION` to `database` in your active `env` file

2. Visit `Setting > General > Site Settings > Laravel Queues` in your `backend dashboard` and enable it.

3. Run or setup cron job for 

   ```php artisan queue:work --queue=high,medium,low,default --env=env_filename```

   If you want to run without cache use following command:

   ```php artisan queue:listen --queue=high,medium,low,default --env=env_filename```
   eg:

    `php artisan queue:listen --queue=high,medium,low,default --env=develop`


If you make any changes in code of your `Job` class, then you must restart the `queue:work` command.



### Send mails with Laravel Queues

By default `VaahCMS` does not use laravel queues/jobs to schedule the mail. Hence, mails will be send immediately.

**To send mail you can use following code:**

```php
VaahMail::dispatch($mail, $to, $priority)
```

- `$mail` should an instance of Laravel Mail class.

- `$to` is the array of recipient:

  ```php
  $inputs = [
    ['email' => 'email@example.com', 'name' => 'name'],
    ['email' => 'email2@example.com', 'name' => 'name 2'],
  ]
  ```

- `$priority` it is the order of execution of the jobs. You can provide following values high medium low default

------

**To send mail to a user you can use following code:**

```php
$user = User::find(1);
VaahMail::dispatchToUser($mail, $user, $priority)
```

- `$user` is an instance of `WebReinvent\VaahCms\Entities\User`



------

**To send a generic mail to a user you can use following code:**

```php
VaahMail::dispatchGenericMail($content, $user, $priority)
```

- `$content` is the html code you want to send to the user
- `$user` is an instance of `WebReinvent\VaahCms\Entities\User`



### Send mails without Laravel Queues

If you want to send the mails without Laravel queues, you can use following code

```php
VaahMail::send($mail, $user, $inputs)
```



### Customizing The Templates

To customize the default Laravel mail & notification template you must publish the asset, using following commands:

```php
php artisan vendor:publish --tag=laravel-mail
```

```php
php artisan vendor:publish --tag=laravel-notifications
```




This will publish files under `resources/views/vendor/mail` directory. To affect the VaahCMS `Mails`, you can edit following file:

```
resources/views/vendor/mail/html/header.blade.php
```

```
resources/views/vendor/mail/html/footer.blade.php
```

```
resources/views/vendor/mail/html/themes/default.css
```

------

