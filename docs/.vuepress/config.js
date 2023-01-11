import { defaultTheme } from '@vuepress/theme-default'
const guide = require("./guide");
const vaahcms2 = require("./vaahcms-2");
const vaahcms = require("./vaahcms");
const vaahcli = require("./vaahcli");
const vaahflutter = require("./vaahflutter");

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
                text: "VaahCMS 2.x",
                link: "/vaahcms-2/",
            },
            {
                text: "VaahCMS 1.x",
                link: "/vaahcms/",
            },
            {
                text: "VaahFlutter",
                link: "/vaahflutter/",
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
        sidebar: {
            '/vaahcms-2/': vaahcms2.sidebar,
            '/vaahcms/': vaahcms.sidebar,
            '/guide/': guide.sidebar,
            '/vaahcli/': vaahcli.sidebar,
            '/vaahflutter/': vaahflutter.sidebar,
        }
    }),

};
