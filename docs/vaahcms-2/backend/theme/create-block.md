# Create Block

------

Blocks are the boxes of content that are displayed in Layout Regions (such as footer or sidebar) on your page. For more details, see CMS Blocks's [documentation](/vaahcms/cms/blocks.md)

For creating block, you need to follow some steps:

**1. Create Location through seeds.**

Create a json file of name `theme_locations.json` at `../<project-name>/VaahCms/Themes/<theme-name>/Database/Seeds/json/` this directory.

```json
[
    
    {
        "type": "block",
        "name": "Top",
        "excerpt": "Top of every page"
    }
]
      ├── BlogTheme
          ├── Database/
              ├── Seeds/
                  ├── DatabaseTableSeeder.php
                  ├── SampleDataTableSeeder.php
                  ├── json/
                      ├── theme_locations.json


      
    
```

To run this seed, you have to add some code in `DatabaseTableSeeder.php` file.



```php
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


        $file = __DIR__.'/json/theme_locations.json';
        CmsSeeder::themeLocations($theme_slug, $file);
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */


}
```

Now, you just need to reactivate the theme by visiting this url:

```php
<public-url>/backend#/vaah/themes/
```



Once, the theme is activated, Location will also be created.

**2. Create a Block.**

To create Block, visit this url:

```php
<public-url>/backend/cms#/blocks/
```

<img :src="$withBase('/images/create-block-1.png')" alt="create-block-1">


- Enter the name
- Select Theme
- Select Location
- Enter Sort in number, this will work when you call blocks by location name.
- Enter content in Editor. You can edit in HTML Editor also.
- Click on Save button.

<img :src="$withBase('/images/create-block-2.png')" alt="create-block-2">

Blocks will be fetched on frontend by two Codes:

##### By Block slug

```php+HTML
{!! vh_block('logo') !!}
```



##### By Location name

```php+HTML
{!! vh_location_blocks('top') !!}
```

You have to paste these codes in Web Pages.

<img :src="$withBase('/images/create-block-3.png')" alt="create-block-3">

Now, you can copy this code and paste it in home blade file. Remove hard code of logo.


```php+HTML
<a class="navbar-item" href="../">
                            
                            {{--<img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">--}}
                            
                            {!! vh_block('logo') !!}
                            
                        </a>
```

Now, You can see the Cms Block.

<img :src="$withBase('/images/create-block-4.png')" alt="create-block-4">