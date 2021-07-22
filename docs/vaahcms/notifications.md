# Notifications

[[toc]]

### Setup Notifications with queues

Follow the following steps:

1. Set `QUEUE_CONNECTION` to `database` in your active `env` file
2. Visit `Setting > General > Site Settings > Laravel Queues` in your `backend dashboard` and enable it.
3. Run or setup cron job for `php artisan queue:work --queue=high,medium,low,default --env=env_filename`



If you make any changes in code of your `Job` class, then must restart the `queue:work` command.



### Sending Notifications

By default `VaahCMS` does not use laravel queues/jobs to schedule the notification.

To send notification you can use following code:

Notification::dispatch($notification, $user, $inputs, $priority)



| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `$notifiable` | is the instance of `WebReinvent\VaahCms\Entities\Notification` |
| `$user`       | is the instance of `WebReinvent\VaahCms\Entities\User`       |
| `$inputs`     | is the a data array contain values of strings. Eg. If the notification contains `#!USER:NAME!#` string and then the `$input` array must be:  <code>$inputs = [  "user" => [    "name" => "John"  ] ]</code> This will replace the string with value provided in the inputs. |
| `$priority`   | it is the order of execution of the jobs. You can provide following values high medium low default |



### Sending Without Queues

If you want to send the notification without laravel queues, you can use following code

```
Notification::send($notification, $user, $inputs)
```
