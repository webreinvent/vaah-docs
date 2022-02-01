# Mails

[[toc]]

## Setup Laravel Queues for VaahCMS

Follow the following steps:

1. Set `QUEUE_CONNECTION` to `database` in your active `env` file

2. Visit `Setting > General > Site Settings > Laravel Queues` in your `backend dashboard` and enable it.

3. Run or setup `cron/daemon` job for 

   ```php artisan queue:work --queue=high,medium,low,default --env=env_filename```

   If you want to run without cache use following command:

   ```php artisan queue:listen --queue=high,medium,low,default --env=env_filename```
   eg:

    `php artisan queue:listen --queue=high,medium,low,default --env=develop`


If you make any changes in code of your `Job` class, then you must restart the `queue:work` command.

---

## Send mails with Laravel Queues

By default `VaahCMS` does not use Laravel queues/jobs to schedule the mail. Hence, mails will be send immediately.

### Send a generic mail:

```php
VaahMail::dispatchGenericMail($subject, $message, $to, $from_email, 
                              $from_name, $cc, $bcc, $priority);
```

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `$subject`    | Subject of the email                                         |
| `$message`    | Content of the message, it can have `html` tags              |
| `$to`         | List of recipients in array format.                          |
| `$from_email` | From email, if it's not set, then it will try to get the `domain` from `APP_URL` and add `noreply`. Eg: `noreply@<domain>` |
| `$from_name`  | From name, if it's not set, the name will be taken from `APP_NAME` |
| `$cc`         | List of `cc` recipients in array format.                     |
| `$bcc`        | List of `bcc` recipients in array format.                    |

Eg: An example of `$to` , `$cc` and `$bcc` is following:

```php
$contacts = [
  ['email' => 'email@example.com', 'name' => 'name'],
  ['email' => 'email2@example.com'],
]
```



---

### Send Laravel mails 

```php
VaahMail::dispatch($mail, $to, $cc, $bcc, $priority);
```

- `$mail` should an instance of Laravel Mail `Illuminate\Mail\Mailable` class.

- `$to` is the array of recipient:

- `$priority` it is the order of execution of the jobs. You can provide following values `high`, `medium` `low` & `default`

------

### Send mail to a user:

```php
$user = User::find(1);
VaahMail::dispatchToUser($mail, $user, $cc, $bcc, $priority);
```

- `$user` is an instance of `WebReinvent\VaahCms\Entities\User`

---

### Send a mail to Super Administrators 

```php
User::notifySuperAdmins($subject, $message);
```



---

### Send mails without Laravel Queues

If you want to send the mails without Laravel queues, you can use following code

```php
VaahMail::send($mail, $to, $cc, $bcc);
```



## Customizing The Templates

To customize the default Laravel mail & notification template you must publish the asset, using following commands:

```php
php artisan vendor:publish --tag=laravel-mail
```

```php
php artisan vendor:publish --tag=laravel-notifications
```




This will publish files under `resources/views/vendor/mail` directory. To update the UI of the VaahCMS `Mails`, you can edit following file:

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

