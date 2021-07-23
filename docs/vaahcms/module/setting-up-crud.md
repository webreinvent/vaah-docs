# Setting up CRUD in the Backend

------

We'll begin the tutorial with the VaahCMS backend where the CRUD operations are fulfilled. I'll keep this part brief as CRUD is a topic covered extensively elsewhere and I assume you are already familiar with the basics of Laravel.

In summary, we will:

- Set up a database and model
- Set up backend routes
- Define methods in the controller to perform the crud Operations



#####  Set up a database and model

In [Step 4](https://nuxt.getdemo.dev:48300/cms/docs/module/setting-crud#generate-migrations), we already generate migration and set up a database.

Now we are going to create a model for a table. Models typically live in the `app\Models` directory, but you are free to place them anywhere that can be auto-loaded according to your composer.json file. All Eloquent models `extend Illuminate\Database\Eloquent\Model` class.

The easiest way to create a model instance is using the make:model Artisan command:

```
vaah cms:m-make model Articles Content
```


This will generate a model file at `VaahCms/Modules/Articles/Entities/`. Let's edit the model file to following:


```
<?php namespace VaahCms\Modules\Articles\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Content extends Model
{

    use SoftDeletes;

    //-------------------------------------------------
    protected $table = 'art_articles';
    //-------------------------------------------------
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    //-------------------------------------------------
    protected $dateFormat = 'Y-m-d H:i:s';
    //-------------------------------------------------
    protected $fillable = [
        'title',
        'content',
        'is_published',
    ];
}
```



##### Set up Backend routes

Now we set up backend routes that our Vue application will need. All Laravel routes are defined in your route files, which are located in the routes directory. These files are automatically loaded by the framework. In Vaahcms, the `Routes/backend.php` file defines module routes that are for your web interface.

The router allows you to register routes that respond to any HTTP verb:

Let check the `VaahCms/Modules/Articles/Routes/backend.php`



```
Route::group(
    [
        'prefix' => 'backend/articles/contents',
        'namespace'  => 'Backend',
        'middleware' => ['web', 'has.backend.access'],
    ],
    function () {
        //---------------------------------------------------------
        Route::post('/create', 'ContentController@postCreate')
            ->name('backend.articles.contents.create');
        //---------------------------------------------------------
        Route::get('/list', 'ContentController@getList')
            ->name('backend.articles.content.types.list');
        //---------------------------------------------------------
        Route::any('/item/{id}', 'ContentController@getItem')
            ->name('backend.articles.contents.item');
        //---------------------------------------------------------
        Route::post('/item/{id}/store', 'ContentController@postStore')
            ->name('backend.articles.contents.store');
        //---------------------------------------------------------
        Route::post('/destroy', 'ContentController@postDestroy')
            ->name('backend.articles.contents.destroy');
        //---------------------------------------------------------
    });
```



##### Set up and define method in Controller

Controller acts as a directing traffic between Views and Models. In this application, we also define crud methods which is directing traffic to Models.

The easiest way to create a controller instance is using the make:controller Artisan command:

```
vaah cms:m-make controller Articles Content
```


This will generate a Controller file at `VaahCms/Modules/Articles/Http/Controllers/Backend/`. Let's edit the Controller file to following:



```
<?php namespace VaahCms\Modules\Articles\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use VaahCms\Modules\Articles\Entities\Content;

class ContentController extends Controller
{


    //----------------------------------------------------------
    public function __construct()
    {
    }
    //----------------------------------------------------------
    public function postCreate(Request $request)
    {
        $response = Content::postCreate($request);
        return response()->json($response);
    }
    //----------------------------------------------------------
    public function getList(Request $request)
    {

        $response = Content::getList($request);
        return response()->json($response);
    }
    //----------------------------------------------------------
    public function getItem(Request $request, $id)
    {
        $response = Content::getItem($id);
        return response()->json($response);
    }

    //----------------------------------------------------------
    public function postStore(Request $request, $id)
    {

        $response = Content::postStore($request,$id);
        return response()->json($response);
    }

    //----------------------------------------------------------
    public function postDestroy(Request $request)
    {
        $response = Content::postDestroy($request->id);
        return response()->json($response);
    }
    //----------------------------------------------------------


}
```

------
