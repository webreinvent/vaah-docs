# Configure Vue & Vuex

------



At `VaahCms/Modules/Articles/Http/Controllers/Backend/BackendController.php` file you will find index method and update `articles::backend.pages.index` change in to `articles::backend.pages.app` which will display the view from `VaahCms/Modules/Articles/Resources/views/backend/pages/app.blade.php` .



```
<?php namespace VaahCms\Modules\Articles\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

class BackendController extends Controller
{


    public function __construct()
    {

    }

    public function index()
    {
        return view('articles::backend.pages.app');
    }

    public function getAssets(Request $request)
    {
        $data=[];

        $response['status'] = 'success';
        $response['data'] = $data;

        return response()->json($response);

    }

}
```

Now, you also need to install the Vue.js dependencies at `VaahCms/Modules/Articles` from npm using the following command:

```
npm install
```


You should have node and npm installed in your system. You can use the following NPM command to track the changes in your application and compile the components and other required files.

```
npm run watch-poll
```


In this app, all the necessary Vue Js component found at the `VaahCms/Modules/Articles/Vue`.

Let check the `Vue/layouts/Backend.vue`



```
<script src="./BackendJs.js"></script>

<template>

    <!--sections-->
    <section class="section">
        <div class="container">

            <!--columns-->
            <div class="columns">
                <div class="column is-2">
                    <AsideMenu/>
                </div>

                <div class="column is-10">

                    <router-view></router-view>

                </div>
            </div>
            <!--/columns-->

        </div>
    </section>
    <!--sections-->


</template>
```

