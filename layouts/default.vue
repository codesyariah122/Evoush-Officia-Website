<template>
  <div>
    
    <!-- <Navigation/> -->
    <Nuxt />
    <!-- Scroll Top -->
    <BackToTop/>
    <!-- End Scroll Top -->

    <!-- <Footer/> -->
  </div>
</template>

<script>
  import Navigation from '~/components/Headers/Navigation'
  import BackToTop from '~/components/molecules/BackToTop'
  import Footer from '~/components/molecules/Footer'

  export default {
    components: {
      Navigation,
      BackToTop,
      Footer
    },
    mounted(){
      AOS.init({disable: 'mobile'}),
      this.scrollNav()
    },

    methods: {
      scrollNav(){
        window.addEventListener('scroll', function(){
          let scrollPos = window.scrollY
          let nav = document.querySelector('.navbar-evoush')
          let isDesktop = window.matchMedia('only screen and (min-width: 992px)').matches;
          // console.log(scrollPos)
          if(!isDesktop){
            nav.classList.add('mobileNav')
            if(scrollPos > 150){
              nav.classList.remove('navbar-light')
              nav.classList.add('navbar-light')
              nav.classList.add('transition')
              if(scrollPos > 400){
                nav.classList.add('bg-white')
              }else{
                nav.classList.remove('bg-white')
                nav.classList.add('transparent-nav')
              }
            }else{
              nav.classList.remove('transparent-nav')
              nav.classList.remove('bg-white')
              nav.classList.remove('transition')
            }
          }else{
            nav.classList.remove('mobileNav')
            if(scrollPos > 150){
              nav.classList.remove('transparent-nav')
              nav.classList.add('transition')
              if(scrollPos > 400){
                nav.classList.add('bg-dark')
              }else{
                nav.classList.remove('bg-dark')
                nav.classList.add('transparent-nav')
              }
            }else{
              nav.classList.remove('transparent-nav')
              nav.classList.remove('bg-dark')
              nav.classList.remove('transition')
            }
          }
        })
      }

    }
  }
</script>

<style>
/*Setup Web Font*/
@font-face {
  font-family: "SpringSakura";
  src: local("SpringSakura"), url("https://codesyariah122.github.io/assets/fonts/SpringSakura-3z1m8.woff") format("woff");
}
@font-face {
  font-family: "Reey Regular";
  src: local("Reey Regular"), url("https://codesyariah122.github.io/assets/fonts/Reey-Regular.woff") format("woff");
}
@font-face {
   font-family: 'Walkway';
    src:  url('~/assets/fonts/walkway/Walkway.ttf.woff') format('woff'); 
    font-weight: normal;
    font-style: normal;
}
/* End Setup */
/*
Design by Puji Ermanto 
Made With Love
*/
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
#home h1, h2 {
  font-family:'Poiret One' !important;
  font-weight: 700;
}

/* content page */
.underline:after{
  content: '';
  display: block;
  margin: auto;
  margin-top: 15px;
  position: relative;
  margin-bottom:2rem;
  width: 100px;
  height: 2px;
  background:rgb(255, 99, 78);
}


@media only screen and (max-device-width: 812px) {
  body{
    width: 100%!important;
  }
}
</style>
