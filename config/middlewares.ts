export default [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'script-src': ['https://cdn.ckeditor.com'],
                    'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 's3.eu-central-1.amazonaws.com'],
                    'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 's3.eu-central-1.amazonaws.com'],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
