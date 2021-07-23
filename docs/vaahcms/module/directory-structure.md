# Directory Structure

- [# Introduction](https://nuxt.getdemo.dev:48300/cms/docs/module/directory-structure#introduction)



#### Introduction

```
      Config/
      ├── config.php
      Database/
      ├── Factories/
      ├── Migrations/
      ├── Seeds/
          ├── json/
          ├── DatabaseTableSeeder.php
          ├── SampleDataTableSeeder.php
      Helpers/
      Http/
      ├── Requests/
      ├── Middleware/
      ├── Controllers/
          ├── Backend/
              ├── BackendController.php
              ├── ExtendController.php
              ├── SetupController.php
          ├── Frontend/
      Libraries/
      Models/
      node_modules/
      Providers/
      Resources/
      ├── assets/
          ├── css/
          ├── js/
          ├── sass/
      ├── lang/
      ├── views/
          ├── backend/
              ├── pages/
                  ├── app.blade.php
                  ├── index.blade.php
      Routes/
      ├── api.php
      ├── backend.php
      ├── frontend.php
      Tests/
      Vue/
      ├── layouts/
          ├── Backend.vue
          ├── BackendJs.js
          ├── partials/
              ├── AsideMenu.vue

      ├── pages/
          ├── contents/
              ├── Create.vue
              ├── CreateJs.js
              ├── Edit.vue
              ├── EditJs.js
              ├── List.vue
              ├── ListJs.js
              ├── View.vue
              ├── ViewJs.js
              ├── partials/
                  ├── ListLargeView.vue
                  ├── ListLargeViewJs.js
                  ├── ListSmallView.vue
                  ├── ListSmallViewJs.js

      ├── store/
          ├── store.js
          ├── modules/
              ├── contents.js
              ├── root.js

      ├── routes/
          ├── routes.js
          ├── config/
              ├── middlewarePipeline.js
              ├── router.js
          ├── middleware/
              ├── GetAssets.js

      ├── vaahvue/
          ├── helpers/
              ├── VaahHelper.js

      ├── app.js
      composer.json
      package.json
      package-lock.json
      README.md
      webpack.mix.js


      
    
```

------



##### Seeds

Seeds are used to generate necessary data or sample data for the module. At `VaahCms/Modules/Articles/Database/Seeds` folder you will find two files:

- `DatabaseTableSeeder.php`: This seeder file will be called whenever you will activate the module from the backend of the VaahCMS.
- `SampleDataTableSeeder.php`: This seeder file will be called whenever you will click on "Import Sample Data" button of the module.

------



##### Assets

In the simplest form, assets means JavaScript, CSS, and images which lie directly under the public directory and are publicly accessible using a URL.

Laravel provides a helper function, `asset()`, which generates a URL for your assets. You can use this in blade syntax, e.g.

```
<script type='text/javascript' src='{ { asset('js/jquery.js') } }'></script>
```



------



##### Compiling Assets

A mix is a configuration layer on top of Webpack, so to run the Mix tasks you only need to execute one of the NPM scripts that are included with the default Laravel `package.json` file.

```
// Run all Mix tasks...
npm run dev
OR
npm run watch
```

It will compile our CSS and JS files and put the build inside a public folder.

```
// Run all Mix tasks and minify output...
npm run production
```

If you run `npm run production` it will actually minify everything and not create a source map for the files. However since it's modified the files are smaller and harder to read.

In VaahCms, Publish path for assets is different from `npm run dev` & `npm run watch`. Assets are stored in `VaahCms/Themes/BlogTheme/Resources/assets` directory and when you reactivate `Theme`, assets will add to public folder.

We then include this CSS and JS files inside our master blade file. You can see the code inside the file webpack.mix.js file. The webpack.mix.js file resides in the `Module` and `Theme` folder.

```
const mix = require('laravel-mix');
var fs = require('fs');
const fs_extra = require('fs-extra');



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let publish_folder;
let output_folder;
let source_vue_folder;

source_vue_folder = __dirname+'/Vue';


if (mix.inProduction()) {
    /*
     |--------------------------------------------------------------------------
     | Only in Production
     |--------------------------------------------------------------------------
     */
    console.log('---------------------');
    console.log('IN PRODUCTION MODE');
    console.log('---------------------');

    publish_folder = './Resources/assets/';
    output_folder = "./";

    mix.setPublicPath(publish_folder);
    mix.js(source_vue_folder+"/app.js",  output_folder+'/build/app.js').vue();

} else {

    publish_folder = './../../../public/vaahcms/modules/';
    output_folder = "./articles/assets/";

    mix.setPublicPath(publish_folder);

    mix.js(source_vue_folder+"/app.js",  output_folder+'/build/app.js').vue();

}



mix.webpackConfig({
    watchOptions: {
        aggregateTimeout: 2000,
        poll: 20,
        ignored: [
            '/Config/',
            '/Database/',
            '/Entities/',
            '/Helpers/',
            '/Http/',
            '/Providers/',
            '/Resources/',
            '/Routes/',
            '/node_modules/',
            '/vendor/',

        ]
    }
});
```



------

