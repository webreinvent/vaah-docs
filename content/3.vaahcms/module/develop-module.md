# Develop Module



##### Introduction

The purpose of this tutorial is to develop a VaahCMS Module for the management of articles with CRUD operations in the backend of the VaahCMS.



##### Step 1: Install VaahCMS

Steps to install VaahCMS is available at [Getting Started > Installation](/vaahcms/installation.md)



##### Step 2: Install VaahCLI

Install NodeJs package `VaahCLI` globally, instructions are available at [VaahCLI](https://www.npmjs.com/package/vaah).

```js
npm i vaah -g
```



VaahCLI will help you to quickly generate `Module` & `Theme` scaffolding.

You can effectively use the tool with `Command Generator` at [Generators](/vaahcms/generators.md).



##### Step 3: Generate Module

Lets call the module as `Articles`. Open the command line tool & navigate to the project root folder or in PHPStorm open `Terminal` and to generate scaffolding for the module, use following command:

```
npx vaah cms:module
```

It will ask you following questions, answers also mentioned in `red` color:

- Enter your module name: `Articles`
- Enter meaningful title for your module: `Module for Articles Management`
- Enter your module description: `Manage Articles`
- Enter Author name: `Vaah`
- Enter Author email: `support@vaah.dev`
- Enter author website: `https://vaah.dev`
- Enter download URL: (don't enter anything, just press enter)
- Do you want to run migration when activated (true/false): `true`
- Will your module contains sample data (true/false): `true`

Once this step is complete, it will generate a new folder at `VaahCMS > Articles` or visit following url you will see the module:

```
<project-url>/backend#/vaah/modules/
```



------

