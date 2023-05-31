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
            { text: 'Product', link: '/vaahstore/basics/product.md' },
        ]
    },
];

module.exports = {
    sidebar: sidebar,
}