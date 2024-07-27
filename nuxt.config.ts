// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/test-utils/module", "@nuxtjs/supabase"],
  runtimeConfig: {
    public: {
      debug: process.env.DEBUG === "true",
    }
  }
})