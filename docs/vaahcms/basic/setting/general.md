# General Setting

The Settings page gives developers the ability to access all backend functionality of the app. Along with accessing this information, developers can further customize the backend functionality of their application.

The Settings page automatically opens under the General tab. Here, you can update `Site Title`, set the format of `Date Time` and do many more things.

Visit following url you will see the Setting section:


```
<project-url>/backend#/vaah/settings/general
```

<img :src="$withBase('/images/general-setting-1.png')" alt="general-setting1">

Settings are divided into 5 section.

- [# Site Settings](https://nuxt.getdemo.dev:48300/cms/docs/basic/settings/general#site-settings)
- [# Date & Time](https://nuxt.getdemo.dev:48300/cms/docs/basic/settings/general#date-and-time)
- [# Social Media & Links](https://nuxt.getdemo.dev:48300/cms/docs/basic/settings/general#social-media-and-links)
- [# Scripts](https://nuxt.getdemo.dev:48300/cms/docs/basic/settings/general#scripts)
- [# Meta Tags](https://nuxt.getdemo.dev:48300/cms/docs/basic/settings/general#meta-tags)

**Note:** `Most of the Setting will work only when you put Setting Code in Project.`

------



##### Site Settings

<img :src="$withBase('/images/general-setting-2.png')" alt="general-setting2">

| Field Name                                             | Description                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| Site Title                                             | Title of Site                                                |
| Meta Description                                       | Content of Meta Description                                  |
| Default Site Language                                  | Current Site Language                                        |
| Search Engine Visibility                               | The site will be discouraged to be indexed by search engines |
| Copyright Text                                         | The Copyright Text                                           |
| Copyright Link                                         | Redirect to this link when click on Copyright Text           |
| Copyright Year                                         | The Copyright year                                           |
| Assign Role(s) on Registration                         | Assign these Roles on new Registration.                      |
| Allowed file types for upload                          | These File Type will be allowed for upload.                  |
| Maintenance Mode                                       | The site will display a maintenance page only.               |
| Password Protection                                    | The site will only be accessing using this password for logged in user. |
| Laravel Queues                                         | This will enable the Laravel Queue feature.                  |
| Redirect after Backend Logout                          | Redirect to this Url after Logout from Backend               |
| Redirect after Frontend Login                          | Redirect to this Url after Login in Frontend                 |
| Maximum number of forgot password attempts per session | Number of Clicks on Forgot Password Button                   |
| Maximum number of login attempts per session           | Number of Clicks on Login Button                             |


**Clear Cache:** This will clear cache of your `Application`. You can also directly visit:

```
<project-url>/clear/cache
```

------



##### Date & Time

<img :src="$withBase('/images/general-setting-3.png')" alt="general-setting3">

| Field Name       | Description             |
| ---------------- | ----------------------- |
| Date Format      | Set Format of Date      |
| Time Format      | Set Format of Time      |
| Date Time Format | Set Format of Date Time |



------



##### Social Media & Links

<img :src="$withBase('/images/general-setting-4.png')" alt="general-setting4">

| Field Name | Description           |
| ---------- | --------------------- |
| Facebook   | Static Facebook Link  |
| Twitter    | Static Twitter Link   |
| Linkedin   | Static Linkedin Link  |
| Youtube    | Static Youtube Link   |
| Instagram  | Static Instagram Link |
| Github     | Static Github Link    |



------



##### Scripts

<img :src="$withBase('/images/general-setting-5.png')" alt="general-setting5">

| Field Name                      | Description                                           |
| ------------------------------- | ----------------------------------------------------- |
| After head tag start (``<head>``)   | Added Scripts visible after head tag start (``<head>``)   |
| After body tag start (``<body>``)   | Added Scripts visible after body tag start (``<body>``)   |
| Before head tag close (``</head>``) | Added Scripts visible before head tag close (``</head>``) |
| Before body tag close (``</body>``) | Added Scripts visible before body tag close (``</body>``) |



------



##### Meta Tags

<img :src="$withBase('/images/general-setting-6.png')" alt="general-setting6">

| Field Name | Description   |
| ---------- | ------------- |
| Meta Tags  | Add Meta Tags |



------



##### How to create Setting

You can create a Setting through `Seeds` and add a field on Setting Form for that Setting.

Create a json file of name `settings.json` at `.../Database/Seeds/json/` this directory.

settings.json

```json
[

    {
        "category": "global",
        "key": "site_title",
        "value": "VaahCMS"
    },
    {
        "category": "global",
        "key": "site_description",
        "value": "Another awesome site on VaahCMS"
    }

]
```

To run this seed, you have to create `seedSetting()` method in DatabaseTableSeeder.php file.

```php
public function seedSettings()
    {


        $list = $this->getListFromJson("settings.json");

        foreach($list as $item)
        {
            $exist = \DB::table( 'vh_settings' )
                ->where( 'category', $item['category'] )
                ->where( 'key', $item['key'] )
                ->first();

            if (!$exist){

                if(isset($item['type']) && $item['type']=='json')
                {
                    $item['value']=json_encode($item['value']);
                }

                \DB::table( 'vh_settings' )->insert( $item );
            } else{
                \DB::table( 'vh_settings' )
                    ->where( 'category', $item['category'] )
                    ->where( 'key', $item['key'] )
                    ->update($item);
            }
        }

    }
```

Now you just have to create a field in `Setting` page at `.../Vue/pages/settings/` directory.

------

