# Notifications

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

### How to create new notification?

There are two way to create notifications:

1) Using `Backend > Settings > Notifications`
2) Use `Seeds`

#### 1. Create notification from Backend

Login to `Backend Administrator Control Panel` (`<public-url`/backend), then navigate to `Settings > Notifications`. 

<img :src="$withBase('/images/notification-5.png')" alt="notification-5">

Here you will be able create new `notifications` which can be used in your code.

<img :src="$withBase('/images/notification-6.png')" alt="notification-6">

#### 2. Create notification via Seeds

You need to create **two** `json ` files in your `module` or `theme` at following locations:

`<theme-or-module-path>/Database/Seeders/json/notifications.json` with following content:

```json
[
    {
        "name": "<notification-name>",
        "via_mail": 1,
        "via_sms": 0,
        "via_push": 0,
        "via_backend": 1,
        "via_frontend": 0
    }
]
```

You can choose the various `via` by which you want to send the `notification`.

`<theme-or-module-path>/Database/Seeders/json/notification_contents.json`

In this file `slug` is coming from the `<notification-name>` and each `{}` object represent the a `line` for the notification. 

```json
[
    {
        "slug": "<notification-name-slug>",
        "via": "mail",
        "sort": 0,
        "key": "subject",
        "value": "Welcome Email"
    },
    {
        "slug": "<notification-name-slug>",
        "via": "mail",
        "sort": 1,
        "key": "from",
        "meta": {
            "name": "#!ENV:MAIL_FROM_NAME!#"
        },
        "value": "#!ENV:MAIL_FROM_ADDRESS!#"
    },
    {
        "slug": "<notification-name-slug>",
        "via": "mail",
        "sort": 2,
        "key": "line",
        "value": "Hello #!USER:NAME!#"
    },
    {
        "slug": "<notification-name-slug>",
        "via": "backend",
        "sort": 0,
        "key": "content",
        "value": "Lorem ipsum #!ENV:APP_NAME!#. Thanks!"
    },
    {
        "slug": "<notification-name-slug>",
        "via": "backend",
        "sort": 1,
        "key": "action",
        "value": "Click",
        "meta": {
            "action":"#!ROUTE:VH.VERIFICATION!#"
        }
    }
]
```



| Name    | Description                                                  |
| ------- | ------------------------------------------------------------ |
| `slug`  | It is the slug of the notification name.                     |
| `via`   | Represent that this `{}` object belong to how the notification will be sent. |
| `sort`  | Index or sequence of the each object.                        |
| `key`   | This represent the type of object.<br />**mail** can have following keys : `greeting`, `line`, `action`, `from`, `subject`<br />**backend** can have following keys: `content`, `action` |
| `value` | Value contain the actual content of the `key`. This can have dynamic values like `#!ENV:APP_NAME!#` will be replace by the `APP_NAME` |
| meta    | Any additional information required. Eg: For key `action` it requires `Label` and `Link` like a hyperlink requires a `Label` and `Link` |

Now to these notification should be created, whenever the `module` or `theme` gets activated. So, now we need to use `DatabaseTableSeeder.php` , add following methods to seed these notifications:

```php
...
public function run()
{
        $this->seedNotifications();
        $this->seedNotificationContent();
}

public function seedNotifications()
{
    $list = \VaahSeeder::getListFromJson(__DIR__."/json/notifications.json");
    \VaahSeeder::storeSeedsWithUuid('vh_notifications', $list);
}


public function seedNotificationContent()
{
    $list = \VaahSeeder::getListFromJson(__DIR__."notification_contents.json");

    foreach($list as $item)
    {
        $notification = \DB::table( 'vh_notifications' )
            ->where( 'slug', $item['slug'] )
            ->first();

        $exist = \DB::table( 'vh_notification_contents' )
            ->where( 'vh_notification_id', $notification->id )
            ->where('sort',  $item['sort'])
            ->where('via',  $item['via'])
            ->first();

        $item['vh_notification_id'] = $notification->id;

        if(isset($item['meta'])){
            $item['meta'] = json_encode($item['meta']);
        }

        unset($item['slug']);


        if(!$exist)
        {
            DB::table('vh_notification_contents')->insert($item);
        } else{
            DB::table('vh_notification_contents')
                ->where( 'vh_notification_id', $notification->id )
                ->where('sort',  $item['sort'])
                ->where('via',  $item['via'])
                ->update($item);
        }
    }
}
...
```



### How to show notification variables?

If you want to show variables name in notification sidebar.

<img :src="$withBase('/images/notification-1.png')" alt="notification-1">

You need to add `getNotificationVariables` method in `ExtendController` of your `Theme` or `Module`.

```php

public function getNotificationVariables()
{
    
    $list = [
        [
            'name'=>'#!USER:NAME!#',
            'details'=>'Will be replaced with name.',
        ],
        [
            'name'=>'#!USER:DISPLAY_NAME!#',
            'details'=>'Will be replaced with display name.',
        ],
        [
            'name'=>'#!USER:EMAIL!#',
            'details'=>'Will be replaced with email.',
        ],
        [
            'name'=>'#!USER:PHONE!#',
            'details'=>'Will be replaced with phone.',
        ]
    ];

    $response['status'] = 'success';
    $response['data'] = $list;

    return $response;
}

```


### How to add notification actions?

If you want to add action variables in notification.

<img :src="$withBase('/images/notification-2.png')" alt="notification-2">

You need to add `getNotificationActions` method in `ExtendController` of your `Theme` or `Module`.

```php

public function getNotificationActions()
{
    
    $list = [
        [
            'name'=>'#!ROUTE:VH.LOGIN!#'
        ],
        [
            'name'=>'#!ROUTE:VH.REGISTER!#'
        ],
        [
            'name'=>'#!ROUTE:VH.RESET!#'
        ],
        [
            'name'=>'#!ROUTE:VH.VERIFICATION!#'
        ]
    ];

    $response['status'] = 'success';
    $response['data'] = $list;

    return $response;
}

```

### How to use variable strings?

There are three types of variable strings.

1. `#!USER:VARIABLE_NAME!#` : If the notification contains #!USER:NAME!# string and then the $input array must be: $inputs = [ "user_id" => X ]. This will replace the string with value provided in the User Entity.

2. `#!PARAM:VARIABLE_NAME!#` : If the notification contains #!PARAM:NAME!# string and then the $input array must be: $inputs = [ "name" => "John" ]. This will replace the string with value provided in the inputs.

3. `#!ROUTE:VARIABLE_NAME!#` :  If the notification contains #!ROUTE:VH.LOGIN!# string. This will replace the string with `url` of that `route name` provided in the `PHP Routes`.

```php
$notification = WebReinvent\VaahCms\Entities\Notification::where('slug', "<notification-slug>")->first();

if($notification)
{
    
    $inputs = [
            "user_id" => xxx,
            "notification_id" => xxx,
        ];

    WebReinvent\VaahCms\Entities\Notification::send(
    	$notification, $user, $inputs
	);
}

```

### Sending without Laravel Queues

If you want to send the notification without Laravel queues, you can use following code

```php
$notification = WebReinvent\VaahCms\Entities\Notification::where('slug', "<notification-slug>")->first();

if($notification)
{
    
    $inputs = [
            "user_id" => xxx,
            "notification_id" => xxx,
        ];
    
    WebReinvent\VaahCms\Entities\Notification::send(
    	$notification, $user, $inputs
	);
}

```

### Sending notifications with Laravel Queues

**Note:** By default `VaahCMS` does not use Laravel queues/jobs to send the notification. You must enable it, read `Setup Notifications with queues` section to know more

To send notification with Laravel Queues, you can use following code:

```php
$notification = WebReinvent\VaahCms\Entities\Notification::where('slug', "<notification-slug>")->first();

if($notification)
{

    $inputs = [
            "user_id" => xxx,
            "notification_id" => xxx,
        ];

    WebReinvent\VaahCms\Entities\Notification::dispatch(
    	$notification, $user, $inputs, $priority
	);
}

```

| Name            | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `$notification` | is the instance of `WebReinvent\VaahCms\Entities\Notification` |
| `$user`         | is the instance of `WebReinvent\VaahCms\Entities\User`       |
| `$inputs`       | is the a data array contain values of strings. `user_id` and `notification_id` are required params. <br />Eg. <br />1. If the notification contains `#!PARAM:NAME!#` string and then the `$input` array must be:  <code>$inputs =  [ "name" => "John" ]</code> This will replace the string with value provided in the inputs. <br />2. If the notification contains `#!USER:NAME!#` string and then the `$input` array must be:  <code>$inputs =  [ "user_id" => X ]</code> This will replace the string with value provided in the `User` Entity. |
| `$priority`     | it is the order of execution of the jobs. You can provide following values: `high` ,`medium`, `low`, & `default` |

### Example

In this example, we register a greeting, a line of text, a call to action, and then another line of text. 

<img :src="$withBase('/images/notification-3.png')" alt="notification-3">

Use following code to send a Notification.

```php
$notification = WebReinvent\VaahCms\Entities\Notification::where('slug', "send-welcome-email")->first();

if($notification)
{
    
    $inputs = [
            "user_id" => xxx,
            "notification_id" => xxx,
        ];
    
    WebReinvent\VaahCms\Entities\Notification::send(
    	$notification, $user, $inputs
	);
}
```

The notification channel will then translate the message components into a beautiful, responsive HTML email template with a plain-text counterpart. Here is an example of an email generated by the notification:

<img :src="$withBase('/images/notification-4.png')" alt="notification-4">

**Note:** When sending notifications, be sure to set the `APP_NAME` in your `env` file. This value will be used in the `header` and `footer` of your mail notification messages.
