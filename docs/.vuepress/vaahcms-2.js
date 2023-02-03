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
        text: 'BACKEND',
        //link: '/vaahcms/directory-structure.md',
        children: [
            {text: 'Overview', link: '/vaahcms-2/backend/index.md'},
            {text: 'Dashboard', link: '/vaahcms-2/backend/dashboard.md'},
            {text: 'Sample', link: '/vaahcms-2/backend/sample.md'},
            {text: 'Generate CRUD', link: '/vaahcms-2/backend/generate-crud.md'},
            {text: 'User auth', link: '/vaahcms-2/backend/user-auth.md'},
            {text: 'Roles', link: '/vaahcms-2/backend/roles.md'},
            {text: 'Permissions', link: '/vaahcms-2/backend/permissions.md'},
            {text: 'Registration', link: '/vaahcms-2/backend/registrations.md'},
            {text: 'Users', link: '/vaahcms-2/backend/users.md'},
            {text: 'Jobs', link: '/vaahcms-2/backend/jobs.md'},
            {text: 'Taxonomies', link: '/vaahcms-2/backend/taxonomies.md'},
        ]
    },
];

module.exports ={
    sidebar:sidebar,
}
