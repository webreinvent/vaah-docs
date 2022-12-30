# Generate Modules in Vaah Cms

## Introduction

This is guide to teachs `How to create MODULES in VAAH CMS`

### Prerequisites

- node js installed
- vaah project directory

### Installation

Command that is used to generate a module is:-
```terminal command
npx vaah cms:m
```

After triggering this command, it will ask for some information 
regarding the Module. Like:-

Technology to be used for Frontend:-
``` terminal command
Choose the tech stack of the module:  (Use arrow keys)
> Module - Vue3 & PrimeVue
Module - Vue2 & Buefy
```
Select Vue3 & PrimeVue. or you can change to other option by using arrow key.

After that information related to modules such as name, title, description
etc. of the module.

```
? Choose the tech stack of the module:  Module - Vue3 & PrimeVue
? Enter your module name:  Projects
? Enter meaningful title for your module:  Projects Managment
? Enter your module description:  description
? Enter Author name:  vaah
? Enter Author email:  support@vaah.dev
? Enter author website:  https://vaah.dev
? Enter download url: 
? Do you want to run migration on activation (true/false):  true
? Will your module contains sample data (true/false):  true

``` 
Provide relevent details for module name, title, description like: 

`Blogs` for Module Name.

`Blog Managment` for Title.

`Blog Managment` for Description.

For remaining, provide details by typing in data or just select default details by pressing enter.

Select `true` for `Do you want to run migration on activation`, 
if you want to run migration for this module as soon as the module 
is activated. Else select `false`.


###### Note: All the migration files will be found in `root/VaahCms/Modules/<module-name>/Migrations` directory



Select `true` for `Will your module contains sample data`,
if you want to activate this module with some sample data. Else 
select `false`.

For Sample data seeders would be created.

###### Note: All the Seeds files will be found in `root/VaahCms/Modules/<module-name>/Seeds` directory.
### Installing Dependencies
After generating a Module, go to this modules directory in terminal
and run 
``` terminal command
npm install
```
to install dependencies required for this module.

After installing dependencies, run 
```terminal command
npm run dev
```
### Activating a module
Go to:-
```http request
<your-site-url>/backend
```

and login to the backend panel.

On the sidebar, click on `Extend` and then click on `Modules`.

List of all the installed modules will be displayed. From this list, 
find your module and click on `Activate` button present on the right
side of that same module to activate the module.

After Successfull activation, module name will be visible on the 
side bar. Click on module name to access DashBoard of the module.

All migrations of that specific module will run automatically when we 
activate the module.








