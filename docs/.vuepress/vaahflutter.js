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
            {
                text: 'vaahextendflutter',
                collapsible: true,
                children: [
                    {
                        text: 'base',
                        collapsible: true,
                        children: [
                            { text: 'controller', link: '/vaahflutter/directory_structure/vaahextendflutter/base/controller.md' },
                            { text: 'theme', link: '/vaahflutter/directory_structure/vaahextendflutter/base/theme.md' },
                        ],
                    },
                    { text: 'environments', link: '/vaahflutter/directory_structure/vaahextendflutter/env.md' },
                    { text: 'app theme', link: '/vaahflutter/directory_structure/vaahextendflutter/apptheme.md' },
                    {
                        text: 'helpers',
                        collapsible: true,
                        children: [
                            { text: 'alerts', link: '/vaahflutter/directory_structure/vaahextendflutter/helpers/alerts.md' },
                            { text: 'console', link: '/vaahflutter/directory_structure/vaahextendflutter/helpers/console.md' },
                            { text: 'constants', link: '/vaahflutter/directory_structure/vaahextendflutter/helpers/constants.md' },
                            { text: 'datetime', link: '/vaahflutter/directory_structure/vaahextendflutter/helpers/datetime.md' },
                            { text: 'input formatters', link: '/vaahflutter/directory_structure/vaahextendflutter/helpers/input-formatters.md' },
                            { text: 'responsive', link: '/vaahflutter/directory_structure/vaahextendflutter/helpers/responsive.md' },
                            { text: 'styles', link: '/vaahflutter/directory_structure/vaahextendflutter/helpers/styles.md' },
                        ],
                    },
                    {
                        text: 'services',
                        collapsible: true,
                        children: [
                            { text: 'api', link: '/vaahflutter/directory_structure/vaahextendflutter/services/api.md' },
                            { text: 'api self sign', link: '/vaahflutter/directory_structure/vaahextendflutter/services/self-sign.md' },
                        ],
                    },
                    {
                        text: 'widgets',
                        collapsible: true,
                        children: [
                            {
                                text: 'atoms',
                                collapsible: true,
                                children: [
                                    { text: 'expansion panel', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/app-expansion-panel.md' },
                                    { text: 'container with rounded corners', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/container-with-rounded-corners.md' },
                                    { text: 'inputs', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/inputs.md' },
                                    { text: 'auto complete input', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/auto-complete-input.md' },
                                    { text: 'date time input', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/date-time-input.md' },
                                    { text: 'file picker', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/file-picker.md' },
                                    { text: 'slider input', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/slider-input.md' },
                                ],
                            },
                            {
                                text: 'molecules',
                                collapsible: true,
                                children: [
                                ],
                            },
                            {
                                text: 'organisms',
                                collapsible: true,
                                children: [
                                ],
                            },
                        ],
                    },
                    { text: 'docs', link: '/vaahflutter/directory_structure/vaahextendflutter/docs.md' },
                ]
            },
        ]
    },
];

module.exports = {
    sidebar: sidebar,
}