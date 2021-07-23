# Import Sample Data

------

Dummy data is mock data generated at random as a substitute for live data in testing environments. In other words, dummy data acts as a placeholder for live data.

You can add while doing a fresh setup of Project. For that you just create following seeds.

```
      ├── BlogTheme
          ├── Database/
              ├── Seeds/
                  ├── DatabaseTableSeeder.php
                  ├── SampleDataTableSeeder.php
                  ├── json/
                      ├── content_types.json
                      ├── sample/
                          ├── menus.json
                          ├── blocks.json
                          ├── blogs.json


      
    
```

**menus.json**


```
[
    {
        "name": "Blog 1",
        "type": "content",
        "parent": null,
        "menu_slug": "top-menu",
        "theme_location": "top",
        "is_home": true
    }

    ]
```

**blocks.json**


```
[
    {
        "name": "Logo",
        "content": "<img src=\"#!PUBLIC:THEME_URL!#/storage/cms/media/2021/06/7pOicvBEwEWepwO2qAuFyrBMqj5agNZCqsIlI5ZI.jpg\">",
        "theme_location": "top"
    }
]
```

**content_types.json**


```
[
    {
        "content": {
            "name": "Blogs",
            "slug": "blogs",
            "plural": "Blogs",
            "plural_slug": "blogs",
            "singular": "Blog",
            "singular_slug": "blog",
            "excerpt": "Web Blogs",
            "is_published": 1,
            "is_commentable": null,
            "content_statuses": [
                "draft",
                "published"
            ]
        },
        "groups": [
            {
                "name": "Default",
                "slug": "default",
                "fields": [
                    {
                        "name": "Title",
                        "type": {
                            "slug": "title"
                        }
                    },
                    {
                        "name": "Content",
                        "type": {
                            "slug": "editor"
                        }
                    }
                ]
            }
        ]
    }
    
    ]
```

**blogs.json**


```
[
    {
        "name": "Blog 1",
        "template_slug": "home",
        "permalink": "blog-1",
        "content": {
            "default": {
                "title": "Blog 1",
                "content": "This is Dummy data"
            }
        }
    }
    
    ]
```

To run this seed, you have to add some code in `SampleDataTableSeeder.php` and `DatabaseTableSeeder.php` file.

**DatabaseTableSeeder.php**

This seeder file will be called whenever you will activate the module from the backend of the VaahCMS.


```
<?php
namespace VaahCms\Themes\BlogTheme\Database\Seeds;


use Illuminate\Database\Seeder;
use VaahCms\Modules\Cms\Libraries\CmsSeeder;

class DatabaseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $theme_slug = 'blogtheme';


        $file = __DIR__ . '/json/content_types.json';
        CmsSeeder::contentTypes($file);
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */


}
```

**SampleDataTableSeeder.php**

This seeder file will be called whenever you will click on "Import Sample Data" button of the module.


```
<?php
namespace VaahCms\Themes\BlogTheme\Database\Seeds;


use Illuminate\Database\Seeder;
use VaahCms\Modules\Cms\Libraries\CmsSeeder;
use WebReinvent\VaahCms\Entities\Theme;

class SampleDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->theme = Theme::where('slug', 'blogtheme')
            ->first();

        if(!$this->theme)
        {
            return false;
        }

        $this->seeds();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    function seeds()
    {

        $theme_slug = 'blogtheme';

        $file = __DIR__.'/json/sample/blogs.json';
        CmsSeeder::createSampleField($theme_slug, $file);

        $file = __DIR__.'/json/sample/menus.json';
        CmsSeeder::menus($theme_slug, $file);

        $file = __DIR__.'/json/sample/blocks.json';
        CmsSeeder::blocks($theme_slug, $file);


    }


}
```

Now, you just need to `reactivate` the theme and click on `Import Sample Data` button by visiting this url:

```
<project-url>/backend#/vaah/themes/
```


<img :src="$withBase('/images/import-data-1.png')" alt="import-data-1">
