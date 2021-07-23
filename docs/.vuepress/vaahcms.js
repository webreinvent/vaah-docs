let sidebar;

sidebar = [

    {
        text: 'PROLOGUE',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'The VaahCMS', link: '/vaahcms/'},
        ]
    },
    {
        text: 'GETTING STARTED',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Installation', link: '/vaahcms/installation.md'},
            {text: 'Configuration', link: '/vaahcms/configuration.md'},
            {text: 'Directory Structure', link: '/vaahcms/directory-structure.md'},
        ]
    },
    {
        text: 'THE BASICS',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'The Concept', link: '/vaahcms/the-concept.md'},
            {text: 'Routing', link: '/vaahcms/routing.md'},
            {text: 'Permission', link: '/vaahcms/permission.md'},
            {text: 'Roles', link: '/vaahcms/roles.md'},
            {text: 'Registration', link: '/vaahcms/registrations.md'},
            {text: 'Users', link: '/vaahcms/users.md'},
            {text: 'Access Control List (ACL)', link: '/vaahcms/acl.md'},
            {text: 'Modules', link: '/vaahcms/modules.md'},
            {text: 'Themes', link: '/vaahcms/themes.md'},
            {text: 'Media', link: '/vaahcms/media.md'},
            {
                text: 'SETTING',
                //link: '/vaahcms/directory-structure.md',
                children: [
                    {text: 'General', link: '/vaahcms/setting/general.md'},
                    {text: 'Manage Env Variables', link: '/vaahcms/setting/manage-env.md'},
                    {text: 'Localization', link: '/vaahcms/setting/localization.md'},
                    {text: 'Notifications', link: '/vaahcms/setting/notifications.md'},
                    {text: 'Mails', link: '/vaahcms/setting/mails.md'},
                    {text: 'Reset Application', link: '/vaahcms/setting/reset-application.md'},
                ]
            },
        ]
    },
    {
        text: 'VAAHVUE',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Helpers', link: '/vaahcms/helpers.md'},
            {text: 'Reusable', link: '/vaahcms/reusable.md'},
        ]
    },
    {
        text: 'MODULE',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Introduction',                  link: '/vaahcms/module/introduction.md'},
            {text: 'Directory Structure',           link: '/vaahcms/module/directory-structure.md'},
            {text: 'Configuration',                 link: '/vaahcms/module/configuration.md'},
            {text: 'Develop Module',                link: '/vaahcms/module/develop-module.md'},
            {text: 'Migration & Seeds',             link: '/vaahcms/module/migration-and-seed.md'},
            {text: 'Extend VaahCMS Sidebar',        link: '/vaahcms/module/extends-vaahcms.md'},
            {text: 'Configure Vue & Vuex',          link: '/vaahcms/module/configure-vue-vuex.md'},
            {text: 'Setting up CRUD in Backend',    link: '/vaahcms/module/setting-up-crud.md'},
            {text: 'Configuring Vuex Library',      link: '/vaahcms/module/configure-vuex-library.md'},
            {text: 'Creating Vue.js Application',   link: '/vaahcms/module/creating-application.md'},
            {text: 'Setup Vue Routes',              link: '/vaahcms/module/setup-routes.md'},
            {text: 'Add to Aside Menu',             link: '/vaahcms/module/add-to-aside.md'},
            {text: 'Define Method in Model',        link: '/vaahcms/module/define-method.md'},
        ]
    },
    {
        text: 'CMS',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Introduction', link: '/vaahcms/cms/introduction.md'},
            {text: 'Content Type', link: '/vaahcms/cms/content-type.md'},
            {text: 'Menus',        link: '/vaahcms/cms/menus.md'},
            {text: 'Blocks',       link: '/vaahcms/cms/blocks.md'},
        ]
    },
    {
        text: 'THEME',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Introduction',          link: '/vaahcms/theme/introduction.md'},
            {text: 'Directory Structure',   link: '/vaahcms/theme/directory-structure.md'},
            {text: 'Configuration',         link: '/vaahcms/theme/configuration.md'},
            {text: 'Develop Theme',         link: '/vaahcms/theme/develop-theme.md'},
            {text: 'Configure Blade File',  link: '/vaahcms/theme/configure-blade.md'},
            {text: 'Activate CMS Module',   link: '/vaahcms/theme/activate-cms-module.md'},
            {text: 'Create Content Types',  link: '/vaahcms/theme/create-content-type.md'},
            {text: 'Create Content',        link: '/vaahcms/theme/create-content.md'},
            {text: 'Create Menu',           link: '/vaahcms/theme/create-menu.md'},
            {text: 'Create Block',          link: '/vaahcms/theme/create-block.md'},
            {text: 'Import Sample Data',    link: '/vaahcms/theme/import-data.md'},

        ]
    },

];

module.exports ={
    sidebar:sidebar,
}