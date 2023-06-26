let sidebar;

sidebar = [

    {
        text: 'PROLOGUE',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'The VaahCMS 2.x', link: '/vaahcms-2/'},
        ]
    },
    {text: 'GENERATORS', link: '/vaahcms-2/backend/generators.md'},
    {
        text: 'GETTING STARTED',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Installation', link: '/vaahcms-2/backend/installation.md'},
            {text: 'Configuration', link: '/vaahcms-2/backend/configuration.md'},
            {text: 'Directory Structure', link: '/vaahcms-2/backend/directory-structure.md'},
            {text: 'Database', link: '/vaahcms-2/backend/database.md'},
            {text: 'Generate Module', link: '/vaahcms-2/backend/generate-module.md'},
            {text: 'Generate CRUD', link: '/vaahcms-2/backend/generate-crud.md'},
            {text: 'Generate Theme', link: '/vaahcms-2/backend/generate-themes.md'},
            {text: 'Generate User', link: '/vaahcms-2/backend/generate-user.md'},
            {text: 'Generate Setting', link: '/vaahcms-2/backend/generate-setting.md'},
        ]
    },

    {
        text: 'THE BASICS',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Setup', link: '/vaahcms-2/backend/setup.md'},
            {text: 'Dashboard', link: '/vaahcms-2/backend/dashboard.md'},
            {text: 'API Authentication', link: '/vaahcms-2/backend/api-authentication.md'},
            {
                text: 'USER & ACCESS',
                //link: '/vaahcms/directory-structure.md',
                children: [
                    {text: 'Registration', link: '/vaahcms-2/backend/registrations.md'},
                    {text: 'Users', link: '/vaahcms-2/backend/users.md'},
                    {text: 'Roles', link: '/vaahcms-2/backend/roles.md'},
                    {text: 'Permissions', link: '/vaahcms-2/backend/permissions.md'},
                ]
            },
            {
                text: 'EXTEND',
                //link: '/vaahcms/directory-structure.md',
                children: [
                    {text: 'Modules', link: '/vaahcms-2/backend/modules.md'},
                    {text: 'Themes', link: '/vaahcms-2/backend/themes.md'},
                ]
            },
            {
                text: 'SETTING',
                //link: '/vaahcms/directory-structure.md',
                children: [
                    {text: 'General settings', link: '/vaahcms-2/backend/general-settings.md'},
                    {text: 'User settings', link: '/vaahcms-2/backend/user-settings.md'},
                    {text: 'Env variables', link: '/vaahcms-2/backend/env-variables.md'},
                    {text: 'Localization', link: '/vaahcms-2/backend/localization.md'},
                    {text: 'Notification', link: '/vaahcms-2/backend/notification.md'},
                    {text: 'Update', link: '/vaahcms-2/backend/update.md'},
                ]
            },
            {
                text: 'ADVANCED',
                //link: '/vaahcms/directory-structure.md',
                children: [
                    {text: 'Logs', link: '/vaahcms-2/backend/logs.md'},
                    {text: 'Batches', link: '/vaahcms-2/backend/batches.md'},
                    {text: 'Jobs', link: '/vaahcms-2/backend/jobs.md'},
                    {text: 'Failed Jobs', link: '/vaahcms-2/backend/failed-jobs.md'},
                ]
            },
            {
                text: 'MANAGE',
                //link: '/vaahcms/directory-structure.md',
                children: [
                    {text: 'Media', link: '/vaahcms-2/backend/media.md'},
                    {text: 'Taxonomies', link: '/vaahcms-2/backend/taxonomies.md'},
                ]
            },
        ]
    },
    {
        text: 'BEYOND BASICS',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Mail', link: '/vaahcms-2/backend/mails.md'},
            {text: 'Access Control List (ACL)', link: '/vaahcms-2/backend/acl.md'},

        ]
    },
    {
        text: 'THEME',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Introduction',          link: '/vaahcms-2/backend/theme/introduction.md'},
            {text: 'Directory Structure',   link: '/vaahcms-2/backend/theme/directory-structure.md'},
            {text: 'Configuration',         link: '/vaahcms-2/backend/theme/configuration.md'},
            {text: 'Develop Theme',         link: '/vaahcms-2/backend/theme/develop-theme.md'},
            {text: 'Configure Blade File',  link: '/vaahcms-2/backend/theme/configure-blade.md'},
            {text: 'Activating Theme',   link: '/vaahcms-2/backend/theme/activating-theme.md'},
            {text: 'Create Content Types',  link: '/vaahcms-2/backend/theme/create-content-type.md'},
            {text: 'Create Content',        link: '/vaahcms-2/backend/theme/create-content.md'},
            {text: 'Create Menu',           link: '/vaahcms-2/backend/theme/create-menu.md'},
            {text: 'Create Block',          link: '/vaahcms-2/backend/theme/create-block.md'},
            {text: 'Import Sample Data',    link: '/vaahcms-2/backend/theme/import-data.md'},
            {text: 'User Authentication',    link: '/vaahcms-2/backend/theme/user-authentication.md'},

        ]
    },
];

module.exports ={
    sidebar:sidebar,
}
