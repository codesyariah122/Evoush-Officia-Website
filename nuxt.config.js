require('dotenv').config()
console.log(process.env.config_production)
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  mode: 'spa',
  loading: {
    color: '#ff3b40',
    height: '11px'
  },
  // loading: '~/components/LoadingBar.vue',
  target: 'static',
  ssr: false,
  body: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/global.css'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/bootstrap/css/bootstrap.min.css'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/icofont/icofont.min.css'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/boxicons/css/boxicons.min.css'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/venobox/venobox.css'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/owl.carousel/assets/owl.carousel.min.css'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/aos/aos.css'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css'},
    ],


    script: [
    {
      src: 'https://cdn.popt.in/pixel.js?id=146a60e91cb08',
      async: 'true',
      id: 'pixel-script-poptin'
    },
    {
      src: 'https://cdn.tiny.cloud/1/36xbwrnfekuspwhfv02z1kuwy3sz4nbehpqkb3x7bh8tek86/tinymce/5/tinymce.min.js',
      type: 'text/javascript',
      referrerpolicy: 'origin'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0',
      type: 'text/javascript'
    },
    {
      src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-609818ffd946e881',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/jquery/jquery.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/jquery.easing/jquery.easing.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/php-email-form/validate.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/waypoints/jquery.waypoints.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/counterup/counterup.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/isotope-layout/isotope.pkgd.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/venobox/venobox.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/owl.carousel/owl.carousel.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/typed.js/typed.min.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/vendor/aos/aos.js',
      type: 'text/javascript'
    },
    {
      src: '/assets/js/main.js',
      type: 'text/javascript'
    }
    ]
  },


   pwa: {
      meta: {
        title: 'Evoush::Official',
        author: 'Evoush',
        icon: true
      },
      manifest: {
        name: 'Evoush::Official',
        short_name: 'Evoush::Indonesia',
        start_url: '/',
        lang: 'en',
        display: 'standalone',
        theme_color: '#a2466c',
        background_color: '#f7f0eb',
        icons: [
          {
            src:'/icon.png',
            size:"256x256",
            type:"image/png"
          }
        ]
      },
    },

   workbox: {
    runtimeCaching: [
      {
        urlPattern: '/assets/vendor/bootstrap/css/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/icofont/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/boxicons/css/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/venobox/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/owl.carousel/assets/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/aos/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/css/.*',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/jquery/jquery.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: '/assets/vendor/jquery.easing/jquery.easing.min.js',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/pwa-update', mode: 'client'},
    {src: '~/plugins/plugins_vue-chartjs', ssr: false},
    {src: '~/plugins/vue-social-sharing'},
    {src: '~/plugins/bootstrap-vue'},
    {src: '~/plugins/disqus'},
    { src: '~/plugins/tawk', ssr: false },
    { src: '~/plugins/sweetalert2', ssr: false},
    { src: '~/plugins/axios', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  '@nuxtjs/color-mode',
  '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-MGR7PP9' }],
    ['@nuxtjs/google-adsense', 
      {id: 'ca-pub-8390872078103831'}
    ],
  ],

  
  oneSignal: {
    init: {
      appId: 'e8eb39f3-f332-437f-aa61-6de803147842',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },

  // markdown content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://app.evoush.com/api'
    baseUrl: 'https://app.evoush.com/api',
    proxy: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  performance: {
    hints: false
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
