const { defaultTheme } = require('@vuepress/theme-default');
const guide = require("./guide");
const vaahcms = require("./vaahcms");
const vaahcli = require("./vaahcli");

module.exports = {
    lang: 'en-US',
    title: 'Vaah.dev',
    description: 'Documentation of Vaah Products',
    base: "/",
    plugins: [
        //['tabs', true]
    ],
    theme: defaultTheme({
        repo: 'webreinvent/vaah-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit',
        logo: 'https://vaah.dev/images/logo-device.svg',
        search: true,
        searchMaxSuggestions: 10,
        searchPlaceholder: 'Search...',
        smoothScroll: true,
        contributors: false,
        navbar: [

            {
                text: "VaahCMS",
                link: "/vaahcms/",
            },
            {
                text: "Guide",
                link: "/guide/",
            },
            /*{
                text: "VaahCLI",
                link: "/vaahcli/",
            }*/
        ],
        sidebar:{
            '/vaahcms/': vaahcms.sidebar,
            '/guide/': guide.sidebar,
            '/vaahcli/': vaahcli.sidebar,
        }
    }),

};
