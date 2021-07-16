const vaahcms = require("./vaahcms");
const vaahcli = require("./vaahcli");

module.exports = {
    lang: 'en-US',
    title: 'Vaah.dev Docs',
    description: 'Documentation of Vaah Products',
    base: "/",
    plugins: [

    ],
    themeConfig: {
        repo: 'webreinvent/vaah-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit',
        logo: 'https://vaah.dev/images/logo.svg',
        navbar: [
            {
                text: "VaahCMS",
                link: "/vaahcms/",
            },
            {
                text: "VaahCLI",
                link: "/vaahcli/",
            }
        ],
        sidebar:{
            '/vaahcms/': vaahcms.sidebar,
            '/vaahcli/': vaahcli.sidebar,
        }
    },

}