// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    strict: true,
    shim: false,
    typeCheck: true,
  },
  runtimeConfig: {},
});
