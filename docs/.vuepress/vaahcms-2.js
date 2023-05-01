let sidebar;

sidebar = [

    {
        text: 'PROLOGUE',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'The VaahCMS 2.x', link: '/vaahcms-2/'},
        ]
    },
    {
        text: 'GETTING STARTED',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Overview', link: '/vaahcms-2/backend/index.md'},


            {text: 'Sample', link: '/vaahcms-2/backend/sample.md'},
            {text: 'Generate Module', link: '/vaahcms-2/backend/generate-module.md'},
            {text: 'Generate CRUD', link: '/vaahcms-2/backend/generate-crud.md'},
            // {text: 'Generate Theme', link: '/vaahcms-2/backend/generate-themes.md'},
            // {text: 'User auth', link: '/vaahcms-2/backend/user-auth.md'},
        ]
    },
    {
        text: 'THE BASICS',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Dashboard', link: '/vaahcms-2/backend/dashboard.md'},
            {text: 'Setup', link: '/vaahcms-2/backend/setup.md'},
            {text: 'Api', link: '/vaahcms-2/backend/api.md'},
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
];

module.exports ={
    sidebar:sidebar,
}
