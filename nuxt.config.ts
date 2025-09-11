// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "ko",
    locales: [
      { code: "ko", name: "Korean", file: "ko.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-07-16",
});
