const vaahcms_sidebar = [
    {text: 'VaahCMS', 'link': '/vaahcms/'},
    {text: 'Installation', 'link': '/vaahcms/installation'},
];

const vaahcli_sidebar = [
    {text: 'VaahCLI', 'link': '/vaahcli/'},
    {text: 'Installation', 'link': '/vaahcli/installation'}
];


module.exports = {
    title: 'Vaah.dev',
    description: 'Vaah Documentation',
    base: "/vaahcms-docs/",
    markdown: {
        //lineNumbers: true
    },
    themeConfig:{
        nav:[
            {
                text: "VaahCMS",
                link: '/vaahcms/'
            },
            {
                text: "VaahCLI",
                link: '/vaahcli/'
            }
        ],
        sidebar:{
            '/vaahcms/': vaahcms_sidebar,
            '/vaahcli/': vaahcli_sidebar,
        }
    }
}