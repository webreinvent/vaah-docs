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
        ]
    },
];

module.exports ={
    sidebar:sidebar,
}
