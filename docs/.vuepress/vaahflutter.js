let sidebar;

sidebar = [
    {
        text: 'PROLOGUE',
        children: [
            { text: 'VaahFlutter', link: '/vaahflutter/' },
        ]
    },
    {
        text: 'Basics',
        children: [
            { text: 'Getting Started', link: '/vaahflutter/basics/getting-started.md' },
            { text: 'Running and Building', link: '/vaahflutter/basics/running-and-building.md' },
            { text: 'Update Basic Configs', link: '/vaahflutter/basics/update-basic-configs.md' },
            { text: 'Raise an issue', link: '/vaahflutter/basics/raiseanissue.md' },
            { text: 'Raise a PR', link: '/vaahflutter/basics/raiseapr.md' },
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
            { text: 'Logs and Performance Monitoring', link: '/vaahflutter/core/logs_and_performance.md' },
            { text: 'Theme', link: '/vaahflutter/core/theme.md' },
            { text: 'Debug Panel', link: '/vaahflutter/core/debugpanel.md' },
            { text: 'API/ AJAX', link: '/vaahflutter/core/api.md' },
            { text: 'Firebase Setup', link: '/vaahflutter/core/firebase-setup.md' },
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
                            {
                                text: 'Logging Library',
                                collapsible: true,
                                children: [
                                    { text: 'Logging Library', link: '/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/logging_library.md' },
                                    {
                                        text: '_local', children: [
                                            { text: 'console_service', link: '/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_local/console_service.md' },
                                            { text: 'local_device_service', link: '/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_local/local_device_service.md' },
                                        ],
                                    },
                                    {
                                        text: '_cloud', children: [
                                            { text: 'logging_service', link: '/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/logging_service.md' },
                                            { text: 'sentry_logging_service', link: '/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/sentry_logging_service.md' },
                                            { text: 'firebase_logging_service', link: '/vaahflutter/directory_structure/vaahextendflutter/services/logging_library/_cloud/firebase_logging_service.md' },
                                        ],
                                    }
                                ]
                            },
                            {
                                text: 'Notifications',
                                collapsible: true,
                                children: [
                                    { text: 'basics', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/basics.md' },
                                    {
                                        text: 'Internal Notifications',
                                        children: [
                                            { text: 'notification', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/notification.md' },
                                            { text: 'notification_view', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/notification_view.md' },
                                            {
                                                text: 'Services', children: [
                                                    { text: 'base_service', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/services/base_service.md' },
                                                    { text: 'firebase', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/services/firebase.md' },
                                                    { text: 'pusher', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/services/pusher.md' },
                                                    { text: 'custom', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/services/custom.md' },
                                                    { text: 'no_service', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/services/no_service.md' },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        text: 'Push Notifications', children: [
                                            { text: 'notification', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/notification.md' },
                                            {
                                                text: 'Services', children: [
                                                    { text: 'local', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/services/local.md' },
                                                    { text: 'remote', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/services/remote.md' },
                                                ],
                                            },
                                            {
                                                text: 'configurations', children: [
                                                    { text: 'p12 certificate', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/configurations/p12_certificate.md' },
                                                    { text: 'p8 key', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/configurations/p8_key.md' },
                                                ],
                                            },
                                        ],
                                    }
                                ]
                            },
                            { text: 'Performance Monitoring', link: '/vaahflutter/directory_structure/vaahextendflutter/services/performance_monitoring.md' },
                            { text: 'api', link: '/vaahflutter/directory_structure/vaahextendflutter/services/api.md' },
                            { text: 'api self sign', link: '/vaahflutter/directory_structure/vaahextendflutter/services/self-sign.md' },
                            { text: 'dynamic links', link: '/vaahflutter/directory_structure/vaahextendflutter/services/dynamic-links.md' },
                            { text: 'notification', link: '/vaahflutter/directory_structure/vaahextendflutter/services/notification.md' },
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
                                    { text: 'tabs', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/tab-options.md' },
                                    { text: 'container with rounded corners', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/container-with-rounded-corners.md' },
                                    { text: 'buttons', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/buttons.md' },
                                    { text: 'radio buttons', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/button-radio.md' },
                                    { text: 'checkbox buttons', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/button-checkbox.md' },
                                    { text: 'rating bar', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/button-rating-bar.md' },
                                    { text: 'expansion panel', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/app-expansion-panel.md' },
                                    { text: 'input text', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/input-text.md' },
                                    { text: 'input auto complete', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/input-auto-complete.md' },
                                    { text: 'input date time', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/input-date-time.md' },
                                    { text: 'input file picker', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/input-file-picker.md' },
                                    { text: 'input slider', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/atoms/input-slider.md' },
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
                            { text: 'debug', link: '/vaahflutter/directory_structure/vaahextendflutter/widgets/debug.md' },
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