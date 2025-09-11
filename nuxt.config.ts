// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        optimizeDeps: {disabled: false},
        plugins: [
        ],
        build: {
            commonjsOptions: {
                include: []
            }
        },

    },
    runtimeConfig: {
        public: {
            GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
            SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID,
        }
    },
    imports: {
        dirs: [
            // Scan all-level modules
            'composables/**',
        ]
    },
    devtools: {enabled: true},
    ssr: (process.env.SSR === 'true'),
    // ssr: true,
    app: {
        // cdnURL: 'https://mackolee.github.io/',
        buildAssetsDir: './',
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' }
            ],
						title: 'Macko',
        }
    },
    dir: {
        public: 'public',
    },
    css: ['~/assets/styles/main.css'],

    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/i18n',
        '@nuxt/ui',
        '@nuxtjs/color-mode'
    ],
    plugins: [

    ],
    eslint: {},
    i18n: {
        strategy: 'prefix_and_default',
        defaultLocale: 'ko',
        vueI18n: './i18n.config.ts',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
            },
            {
                code: 'ko',
                iso: 'ko-KR',
            },
        ]
    },

    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
    }

});
