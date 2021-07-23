# Mails

[[toc]]


### Setup Mails with queues

Follow the following steps:

1. Set `QUEUE_CONNECTION` to `database` in your active `env` file
2. Visit `Setting > General > Site Settings > Laravel Queues` in your `backend dashboard` and enable it.
3. Run or setup cron job for `php artisan queue:work --queue=high,medium,low,default --env=env_filename`



If you make any changes in code of your `Job` class, then must restart the `queue:work` command.



### Sending Mails

By default `VaahCMS` does not use laravel queues/jobs to schedule the mail. Hence, mails will be send immediately.

**To send mail you can use following code:**

VaahMail::dispatch($mail, $to, $priority)



- `$mail` should an instance of Laravel Mail class.

- `$to` is the array of recipient:

  ```
  $inputs = [
    ['email' => 'email@example.com', 'name' => 'name'],
    ['email' => 'email2@example.com', 'name' => 'name 2'],
  ]
  ```

- `$priority` it is the order of execution of the jobs. You can provide following values high medium low default

------

**To send mail to a user you can use following code:**

```
VaahMail::dispatchToUser($mail, $user, $priority)
```





- `$user` is an instance of `WebReinvent\VaahCms\Entities\User`



------

**To send a generic mail to a user you can use following code:**

```
VaahMail::dispatchGenericMail($content, $user, $priority)
```





- `$content` is the html code you want to send to the user
- `$user` is an instance of `WebReinvent\VaahCms\Entities\User`



### Sending Without Queues

If you want to send the notification without laravel queues, you can use following code

```
VaahMail::send($notification, $user, $inputs)
```







### Customizing The Templates

To customize the default laravel mail & notification template you must publish the asset, using following commands:

```
php artisan vendor:publish --tag=laravel-mail
```

```
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

