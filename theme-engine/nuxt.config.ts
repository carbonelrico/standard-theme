export default defineNuxtConfig({

  css: [
    '~/assets/tokens.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    config: {
      presets: [
        require('./tailwind.preset')
      ]
    }
  }

})