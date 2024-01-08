// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 是否開啟SSR
  ssr: true,
  // 調試工具
  devtools: { enabled: true },
  // 應用模塊
  modules: ['@vant/nuxt', 'nuxt-security',],
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'https://i0.hdslb.com'],
      },
    },
  },
})
