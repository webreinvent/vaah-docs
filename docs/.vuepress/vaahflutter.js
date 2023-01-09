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
];

module.exports = {
    sidebar: sidebar,
}