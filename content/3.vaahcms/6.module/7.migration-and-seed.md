# Migrations and Seeds



##### Generate Migrations

Let's assume there is only one table required for this module which is `art_articles`, here `art` is prefix for the module, so if you need to create more tables, you should always use prefix for all the tables to determine which table belongs to which module.

To generate migration use following command:

```php
vaah cms:m-make migration Articles art_articles
```



This will generate a migration file at `VaahCms/Modules/Articles/Database/Migrations/`. Let's edit the migration file to following:

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ArtArticles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('art_articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->text('content')->nullable();
            $table->boolean('is_published')->default(0);
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {
        Schema::dropIfExists('art_articles');
    }
}
```



##### Setup Seeds

Seeds are used to generate necessary data or sample data for the module. At `VaahCms/Modules/Articles/Database/Seeds` folder you will find two files:

- `DatabaseTableSeeder.php`: This seeder file will be called whenever you will activate the module from the backend of the VaahCMS.
- `SampleDataTableSeeder.php`: This seeder file will be called whenever you will click on "Import Sample Data" button of the module.

In this tutorial, let's assume that we want to add 15 articles by default whenever the module is activated, hence we'll be editing `DatabaseTableSeeder.php` file.

```php
<?php
namespace VaahCms\Modules\Articles\Database\Seeds;

use Faker\Factory;
use Illuminate\Database\Seeder;

class DatabaseTableSeeder extends Seeder
{

    public function run()
    {
        $this->seeds();
    }
    
    function seeds()
    {

        $this->seedArticles();

    }

    function seedArticles()
    {
        $faker = Factory::create();
        $num_articles = 15;

        $list = [];
        for ( $i = 0; $i < $num_articles; $i ++ ) {
            $list[$i] = [
                'title'         => $faker->sentence,
                'content'       => $faker->text,
                'is_published'  => 1,
                'created_at'    => \Carbon::now()->format( 'Y-m-d H:i:s' ),
                'updated_at'    => \Carbon::now()->format( 'Y-m-d H:i:s' ),
            ];
            $exist = \DB::table( 'art_articles' )
                ->where( 'title', $list[$i]['title'] )
                ->first();
            if($exist)
            {
                continue;
            }
        }

        if(count($list) > 0 )
        {
            \DB::table( 'art_articles' )->insert( $list );
        }
    }
}
```

