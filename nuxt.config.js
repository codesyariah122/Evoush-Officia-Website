export default {
  mode: 'universal',

  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Evoush::Official',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
      { name: 'description', content: 'Bisnis Evoush Indonesia'},
      { name: 'keyword', content: 'Bisnis Evoush Bisnis Menjanjikan'},
      { property: 'og-title', content: 'Evoush Indonesia'},
      { property: 'og-description', content: 'Bisnis MultiLevel Zaman Now'},
      { property: 'og-image', content: 'https://evoush.vercel.app/_nuxt/img/vector9.4a85b35.jpg'},
      { property: 'og-url', content: 'https://evoush.vercel.app'}
    ],
    link: [
      { 
        rel: 'icon', type: 'image/png', href: '/fav_evoush.png' 
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poiret+One&family=Poppins:wght@900&family=Quicksand:wght@500&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/aos.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // components:[
  //   '~/components/Headers/', 
  //   '~/components/HomePage/'
  // ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
