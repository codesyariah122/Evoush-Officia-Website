export default {
  mode: 'universal',
  loading: {
    color: 'tomato',
    height: '5px'
  },
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: "Evoush::Oficial",
    // description: process.env.SLOGAN,
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'
      },
      {
         src: '//code.tidio.co/dxlufvwtvzz7xt4rwpkahdlzepgacn6q.js'
      },
      {
        src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-609818ffd946e881'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
  plugins: ['~/plugins/commerce.js'],

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
    '@nuxt/content',
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //  extend(config, { isClient }) {
    //   if (isClient) {
    //     config.optimization.splitChunks.maxSize = 200000
    //   }
    // }
  }
}
