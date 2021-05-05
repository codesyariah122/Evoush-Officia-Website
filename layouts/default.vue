<template>
  <div>
    <Navigation/>
    <Nuxt />
    <!-- Scroll Top -->
    <BackToTop/>
    <!-- End Scroll Top -->

    <Footer/>
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
      AOS.init(),
      this.scrollNav()
    },

    methods: {
      scrollNav(){
        window.addEventListener('scroll', function(){
          let scrollPos = window.scrollY
          let nav = document.querySelector('.navbar')
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
@font-face {
  font-family: "SpringSakura";
  src: local("SpringSakura"), url("https://codesyariah122.github.io/assets/fonts/SpringSakura-3z1m8.woff") format("woff");
}
@font-face {
  font-family: "Reey Regular";
  src: local("Reey Regular"), url("https://codesyariah122.github.io/assets/fonts/Reey-Regular.woff") format("woff");
}
/*
Design by Puji Ermanto 
Made With Love
*/
#home h1, h2 {
  font-family:'Poiret One' !important;
  font-weight: 700;
}
/*panel*/
.panel{
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-top: -5rem;
  padding: 12px;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-content: justify-content-center;
  /*width: 80%;*/
}
.panel-body {
  margin-top: 1rem;
  padding: 5px;
}
.panel-body img{
  width: 150px;
  height: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important; color: rgb(255,228,181);border-radius:0%;
  margin-bottom: 2rem;
}
.panel-body h1{
  margin-top: 2rem;
  margin-left: -1rem;
  font-family: 'SpringSakura';
  font-size: 21px;
}
.panel-body p{
  line-height: 25px;
  font-size: 12px;
  text-indent: 21px;
  text-align: justify;
  margin-left: .1rem!important;
  width: 100%;
}
.panel-body a {
  margin-left: 5rem;
  margin-bottom: 2rem;
}
.panel-body .anim{
  width: 220px;
  height: 200px;
  /*border-radius: 50%;*/
}
/*end panel;*/

/* info-panel */
.info-panel{
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-top: -100px;
  background-color: white;
  padding: 30px;
}

.info-panel img{
  height: 95px;
  width: 100px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.info-panel h4{
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 5px;
}

.info-panel p {
  font-size: 12px;
  color: #ACACAC;
  margin-top: -5px;
  font-weight: 200;
}

/* content page */


/*intents*/
#intents {
  margin-top: 7rem;
  width: 100%;
}
/*end intents*/

/* polaroid */
.polaroid{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
  margin-top:2rem;
}
.weather{
 width: 150px;
 height: 150px;
 margin-top: -1rem
}
.polaroid img{
  width: 350px;
  height: 300px;
  margin-top: 1rem;
}
.polaroid-body p{
  padding: 15px;
  color:black;
  font-family: 'Poiret One', cursive;font-weight:bold;
  font-size: 25px; 
}

.polaroid-body h2{
  padding: 25px;
  color:black;
  font-family: 'Poiret One', cursive;font-weight:bold;
  font-size: 25px;
}
/* end polaroid */


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
    .parallax {
      background-attachment: scroll;
    }
  }

  /* DESKTOP VERSION */
  @media (min-width: 992px) { 

    /*panel*/
    .panel{
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
      border-radius: 12px;
      margin-top: -5rem;
      padding: 12px;
      background-color: white;
      margin-left: 3rem;
      width: 80%;
      /*height: 50vh;*/
      margin-left: .1rem;
    }
    .panel-body {
      margin-top: .1rem;
      padding: 15px;
    }
    .panel-body img{
      width: 400px;
      height: 500px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important; color: rgb(255,228,181);
    }
    .panel-body h1{
      margin-left: 3rem;
      font-family: 'SpringSakura';
    }
    .panel-body p{
      margin-left: 5rem !important;
      font-size: 16px;
      text-align: justify;
    }
    .panel-body a {
      margin-left: 5rem;
    }
    .panel-body .anim{
      width: 330px;
      height: 300px;
      margin-left: 3rem;
      margin-top: -.7rem;
    }
    /*end panel;*/
    /* content */

    /*polaroid*/
    .polaroid{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
      color: rgba(0,0,0,0.7);
      position: relative;
      text-align: center;
      margin-bottom: 3rem;
      margin-top:2rem;
    }

    .polaroid-body h2{
      padding: 15px;
      color:black;
      font-family: 'Poiret One', cursive;font-weight:bold;
      font-size: 25px;
    }

    .polaroid-body p{
      padding: 15px;
      color:black;
      font-family: 'Poiret One', cursive;font-weight:bold;
      font-size: 25px; 
    }

    .polaroid-vector{
      width: 500px;
      height: 600px;
      margin-top: 1rem;
      margin-left: .1rem;
    }
    /*end polaroid*/

  }

  @media screen and (max-width: 760px) {
   ul.navbar-nav li.nav-item{display: block;}
 }

</style>
