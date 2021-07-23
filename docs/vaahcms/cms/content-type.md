# Content Types

This section provides information about the `Content Types` in `CMS` modules

Content Type is the structure or blueprint of a page or a section that your Web Page will display. It lets you define the overall schema of this blueprint by adding fields and setting its properties. Content Type is a pre-defined collection of data types (Fields).

In essence, creating a content type is like creating a mold or cast that lets you create several objects (entries) of the same nature and pattern. Content types, however, should be created after you model your content appropriately.



##### Content Type structure in the CMS


<img :src="$withBase('/images/content-types-structure-1.png')" alt="content-types-structure-1">

<img :src="$withBase('/images/content-types-structure-2.png')" alt="content-types-structure-2">


Here is the structure of a “Blog” Content Type that has a “Title,” “Thumbnail Image,” “Content,” and “SEO Meta Tags” fields. Once this content type is ready, you can create an entry for it.

------



##### Adding fields to a content type

If you create `Content Types`, you will continue on to `Content Structure` page where you can determine what information you wish to collect. This creates a form which they can complete and when saved will display the information on your Frontend site.

##### Add a new field

You can drag the fields from `Content Fields` to `Content Structure` Page. Enter the name for the field. You can only use numbers, lower-case letters and the underscore character (_).

In the field type list, select one of the following types:

| Field Name    | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Address       | Has seven text fields (Address Line 1, Address Line 2, Landmark, City, State, Country, Zip Code) |
| Boolean       | Has one of two values (for example: "yes/no" or "true/false") |
| Currency Code | Has dropdown contain currency code                           |
| Date          | A date                                                       |
| Date Time     | A date with time                                             |
| Editor        | Long text with html tag                                      |
| Email         | Input Field of type email                                    |
| Facebook Card | Social meta fields                                           |
| Image         | Add image file such as GIF, JPG, PNG                         |
| Image Group   | Add multiple image file such as GIF, JPG, PNG                |
| Json          | Text in json format                                          |
| List          | Add text in list format                                      |
| Markdown      | Add text in markdown format                                  |
| Media         | Add file                                                     |
| Number        | A number that allows exact decimal values; often used for price or cost |
| Password      | Input Field of type Password                                 |
| Phone Number  | Input Field of type Number                                   |
| Price         | A number that allows exact decimal values; often used for price or cost |
| Relation      | Relation between two field                                   |
| Slug          | Slug text (no space)                                         |
| SEO Meta tags | SEO meta field                                               |
| Select        | Select Field (Add Option in Field Option)                    |
| Tags          | Tag input field                                              |
| Text          | Short text such as a name (limited to 255 characters)        |
| Textarea      | Long, multi-line alphanumeric text such as a biography       |
| Time          | A Time field                                                 |
| Title         | Short text such as a name (limited to 255 characters)        |
| Twitter Card  | Twitter meta fields                                          |
| UUID          | Unique code field                                            |
| Visual Editor | Visual Editor                                                |

------



##### Terminologies

- **Entry**: After you define a content type, you can add data to your content type by creating an entry.
- **Fields**: These are the building blocks/component of your structured content. You can control which data you want to add by configuring fields and its properties in a content type.

------



##### Examples

1. If you want to create a simple blog page on your site, you will define a “Blog” content type that has “title,” “date,” and “body” fields.
2. If you want to create the homepage of your site, you will define a “Pages” content type that has “header,” “footer,” “banner-image,” “title,” and “body” fields.

------



##### Customizing a Content Type

- CMS allows you to customize a content type to meet your requirements. If you want to create a Content Type for your webpage(s), you can define the content types in seeds.
- You can divide the fields in to different groups.

------

# Contents

------



##### Placing Content of a Given Content Type on a Page

<img :src="$withBase('/images/content-types-structure-3.png')" alt="content-types-structure-3">


In Contents, There are two types fields:

**Content Fields**

These fields can be managed from "Content Types" sections.

**Template Fields**

Templates can be used to specify which Content Types will be allowed in different areas on a Page. You can add some fields that means that fields are template specific and will be shown when you select that Template

In Pages, they have a different different structures, and we can't create different content types for each page. So in that case, we use other groups of field called Templates. Templates can be create through seeds.



##### Code

Contents will be fetch on frontend by two Codes:

##### By Content Field

```
{!! get_field($data, 'title') !!}
```


##### By Template name

```
{!! get_field($data, 'title', 'header', 'template') !!}
```


You have to paste these codes in Web Pages.