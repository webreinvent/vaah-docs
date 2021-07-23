# Blocks

This section provides information about the `Blocks` in `CMS` modules

Blocks are the boxes of content that are displayed in Layout Regions (such as footer or sidebar) on your page. Everything on a Web Page (with rare exceptions) is a block. Any block can be placed in any region and can be placed multiple times.


##### Block structure in the CMS
<br/>
<img :src="$withBase('/images/reusable-1.png')" alt="reusable-1">


Viewed on the front end, blocks are built of the following parts

- **Block name** - Block name is very important, It is use as a title in code on the Front-End. Name and slug should be unique.
- **Block content** - The main display content of the block. For example, the Main menu block’s content is the menu links.
- **Block Theme** - Blocks will visible to the selected Theme.
- **Block Location** - Location determine the position of block in Web Pages. Eg:- Header, Sidebar etc.
- **Block Sort** - When blocks fetch by location name, it will be in order according to this.

<img :src="$withBase('/images/reusable-2.png')" alt="reusable-2">

**Content Editor:** This Editor allows for both text and multimedia to be edited and styled within a single area. There is option of `change mode` in Editor so that You can change into html code editor and add custom `classes` and `css`.

------


##### Code

Blocks will be fetched on frontend by two codes:

##### By Block slug

```php
{!! vh_block('header-button') !!}
```


##### By Location name

```php
{!! vh_location_blocks('top') !!}
```


You have to paste these codes in Web Pages.

------

