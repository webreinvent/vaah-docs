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
];

module.exports = {
    sidebar: sidebar,
}