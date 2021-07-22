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
            {text: 'General', link: '/vaahcms/general-setting.md'},
            {text: 'Manage Env Variables', link: '/vaahcms/manage-env.md'},
            {text: 'Localization', link: '/vaahcms/localization.md'},
            {text: 'Notifications', link: '/vaahcms/notifications.md'},
            {text: 'Mails', link: '/vaahcms/mails.md'},
            {text: 'Reset Application', link: '/vaahcms/reset-application.md'},
        ]
    },

];

module.exports ={
    sidebar:sidebar,
}