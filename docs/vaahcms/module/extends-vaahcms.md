# Extend VaahCMS Sidebar

------

<img :src="$withBase('/images/extend-sidebar-1.png')" alt="extends-sidebar-1">
<br/>
At `VaahCms/Modules/Articles/Http/Controllers/Backend` folder you will find three files:

- `BackendController.php`: Default controller for the module.
- `ExtendController.php`: This controller file contains methods which extends the backend view of the VaahCMS.
- `SetupController.php`: This controller file contains methods which are being called during activation & deactivation of the module.

To extend the sidebar, we need to edit `ExtendController.php`:


```php
<?php  namespace VaahCms\Modules\Articles\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class ExtendController extends Controller
{
    //----------------------------------------------------------
    public function __construct()
    {
    }
    //----------------------------------------------------------
    public static function topLeftMenu()
    {
        $links = [];
        $response['status'] = 'success';
        $response['data'] = $links;
        return $response;

    }
    //----------------------------------------------------------
    public static function topRightUserMenu()
    {
        $links = [];
        $response['status'] = 'success';
        $response['data'] = $links;
        return $response;
    }

    //----------------------------------------------------------
    public static function sidebarMenu()
    {
        $list[0] = [
            'link' => route('vh.backend.articles'),
            'icon' => 'newspaper',
            'label'=> 'Articles'
        ];
        $response['status'] = 'success';
        $response['data'] = $list;
        return $response;
    }
    //----------------------------------------------------------
}
```

`sidebarMenu` method contains a variable `$list` contains link details. You can find icons from [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free).

Now, you actually activate the module by visiting following url:

```
<project-url>/backend#/vaah/modules/
```



Once, the module is activated, you will be able to see the "Articles" menu item in the `Sidebar`. You can click on the menu item and you will see the view generated from the following `blade` file:

```php+HTML
VaahCms/Modules/Articles/Resources/views/backend/pages/dashboard.blade.php
```



------