# VaahCMS

[comment]: <> ([[toc]])

## Introduction

This is a guide to generating taxonomies crud in the module of VaahCMS.
Before jumping to the crud part project should have generated the module and activated it.
For the module and theme set up follow the below link:
[VaahCLI](https://github.com/webreinvent/vaahcli/tree/develop)


## Step-1
Create a module first. [Create Module](https://docs.vaah.dev/vaahcms-2/backend/generate-module.html).
One module can have many cruds.\
Use the below command to generate users CRUD :

```shell
npx vaah cms:taxonomies
```
After pressing enter.

```shell
      This command are only for Vue 3 module      
? For which you want to create CRUD:  (Use arrow keys)
> Module............................................................0
  Theme.............................................................1
  Custom Path.......................................................2
  
  //........................................Press enter on the module
```

```shell
? For which you want to create CRUD:  Module
````

```shell
? Enter the Module/Theme/Entity name:  HelloWorld
````

```shell
? Enter the section name (Backend | Frontend or Folder name):  Backend
````

```shell
? Vue folder name/path:  Vue
````

```shell
? Do you want to generate migration file (true/false):  true
````

```shell
? Enter your taxonomy database table name:  vh_taxonomies
```

```shell
? Enter your taxonomy type database table name:  vh_taxonomy_types
```

```shell
? Enter your taxonomy type database table name (singular):  vh_taxonomy_type
```

```shell
? Enter your Taxonomy model name (singular):  Taxonomy
```

```shell
? Enter your Taxonomy type model name (singular):  TaxonomyType
```

```shell
? Enter your controller name (plural):  Taxonomies
```