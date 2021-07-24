export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Evoush::Official',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css'}
    ],

    script: [
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://app.evoush.com/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
