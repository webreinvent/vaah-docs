let sidebar;

sidebar = [
    {
        text: 'PROLOGUE',
        children: [
            { text: 'VaahFlutter', link: '/vaahflutter/' },
        ]
    },
    {
        text: 'About',
        children: [
            { text: 'Getting Started', link: '/vaahflutter/about/getting-started.md' },
            { text: 'Update Basic Configs', link: '/vaahflutter/about/update-basic-configs.md' },
            { text: 'Raise an issue', link: '/vaahflutter/about/raiseanissue.md' },
            { text: 'Raise a PR', link: '/vaahflutter/about/raiseapr.md' },
        ]
    },
    {
        text: 'Essentials',
        children: [
            { text: 'App Configuration', link: '/vaahflutter/essentials/app.md' },
            { text: 'Environments', link: '/vaahflutter/essentials/environments.md' },
        ]
    },
    {
        text: 'Core',
        children: [
            { text: 'Logs', link: '/vaahflutter/core/log.md' },
            { text: 'Theme', link: '/vaahflutter/core/theme.md' },
            { text: 'Debug Panel', link: '/vaahflutter/core/debugpanel.md' },
            { text: 'API/ AJAX', link: '/vaahflutter/core/api.md' },
        ]
    },
    {
        text: 'Directory structure',
        collapsible: true,
        children: [
            {
                text: 'Root',
                collapsible: true,
                children: [
                    { text: 'assets', link: '/vaahflutter/directory_structure/root/d_assets.md' },
                    { text: 'android', link: '/vaahflutter/directory_structure/root/d_android.md' },
                    { text: 'ios', link: '/vaahflutter/directory_structure/root/d_ios.md' },
                    { text: 'lib', link: '/vaahflutter/directory_structure/root/d_lib.md' },
                    { text: 'test', link: '/vaahflutter/directory_structure/root/d_test.md' },
                    { text: '.gitignore', link: '/vaahflutter/directory_structure/root/gitignore.md' },
                    { text: '.metadata', link: '/vaahflutter/directory_structure/root/metadata.md' },
                    { text: 'analysis_option.yaml', link: '/vaahflutter/directory_structure/root/analysis_option.md' },
                    { text: 'pubspec.lock', link: '/vaahflutter/directory_structure/root/pubspec.lock.md' },
                    { text: 'pubspec.yaml', link: '/vaahflutter/directory_structure/root/pubspec.yaml.md' },
                ]
            },
            {
                text: 'lib',
                collapsible: true,
                children: [
                    { text: 'models', link: '/vaahflutter/directory_structure/lib/models.md' },
                    { text: 'views', link: '/vaahflutter/directory_structure/lib/views.md' },
                    { text: 'controllers', link: '/vaahflutter/directory_structure/lib/controllers.md' },
                    { text: 'resources', link: '/vaahflutter/directory_structure/lib/resources.md' },
                    {
                        text: 'routes', collapsible: true,
                        children: [
                            { text: 'middleware', link: '/vaahflutter/directory_structure/lib/routes/middleware.md' },
                            { text: 'routes', link: '/vaahflutter/directory_structure/lib/routes/routes.md' },
                        ],
                    },
                ]
            },
        ]
    },
];

module.exports = {
    sidebar: sidebar,
}