let sidebar;

sidebar = [
    {
        text: 'PROLOGUE',
        children: [
            { text: 'VaahStore', link: '/vaahstore/' },
        ]
    },
    {
        text: 'Basics',
        children: [
            { text: 'Getting Started', link: '/vaahstore/basics/getting-started.md' },
            { text: 'Store', link: '/vaahstore/basics/store.md' },
            { text: 'Vendor', link: '/vaahstore/basics/vendor.md' },
            // { text: 'Update Basic Configs', link: '/vaahflutter/basics/update-basic-configs.md' },
            // { text: 'Raise an issue', link: '/vaahflutter/basics/raiseanissue.md' },
            // { text: 'Raise a PR', link: '/vaahflutter/basics/raiseapr.md' },
        ]
    },
];

module.exports = {
    sidebar: sidebar,
}