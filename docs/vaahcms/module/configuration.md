# Configuration

- [# Introduction](#introduction)



#### Introduction

All of the configuration/Information of Vaahcms's `Modules` are stored in the `config.php` file, which is in the `VaahCms\Modules\Articles\Config\` directory.

```php
<?php

return [
    "name"=> "Articles",
    "title"=> "Module for Articles Management",
    "slug"=> "articles",
    "thumbnail"=> "https://placehold.jp/300x160.png",
    "excerpt"=> "Manage Articles",
    "description"=> "Manage Articles",
    "download_link"=> "",
    "author_name"=> "articles",
    "author_website"=> "https://vaah.dev",
    "version"=> "0.0.1",
    "is_migratable"=> true,
    "is_sample_data_available"=> true,
    "db_table_prefix"=> "vh_articles_",
    "providers"=> [
        "\\VaahCms\\Modules\\Articles\\Providers\\ArticlesServiceProvider"
    ],
    "aside-menu-order"=> null
];
```

- Allow them to update their Name, Title, Slug, Description.
- Allow them to update their version.
- Allow them to upload their own logo.
- Allow them to enable or disable the `is_migratable` features.
- Allow them to enable or disable the `is_sample_data_available` features. This features allows you to import sample data through seeds.

------

