<template>
  <div>
    <div id="intents">
      <div class="container mt-5">
        <div v-for="panel in panels" >
          <div v-if="panel.id % 2 == 1">
            <div class="row">
              <div class="col-md-4">
                <div data-aos="zoom-out-right" data-aos-easing="ease-out-sine" data-aos-duration="1500">
                  <h1 v-html="panel.context.header"></h1>
                  <p v-html="panel.context.paragraph"></p>
                </div>
              </div>
              <div class="col-md-6 col-xs-6 col-sm-6">
                <div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                  <div v-if="panel.iframe" class="embed-responsive embed-responsive-1by1">
                    <iframe class="embed-responsive-item" :src="panel.iframe" allowfullscreen></iframe>
                  </div>
                  <div v-else>
                    <img :src="panel.vector" class="img-responsive ganjil-img">
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="p-2">
                <div v-if="panel.anim">
                  <img :src="panel.anim" class="img-responsive anim">
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="row mt-5">
              <div class="col-md-6 col-xs-6 col-sm-6">
                <div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                  <img :src="panel.vector" class="img-responsive intents-img">
                </div>
              </div>
              <div class="col-md-4">
                <div data-aos="zoom-out-right" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                  <h1 v-html="panel.context.header"></h1>
                  <p class="mt-5" v-html="panel.context.paragraph"></p>
                </div>
              </div>
            </div>
            <div class="row justify-content-end mb-5">
              <div class="p-2">
                <div v-if="panel.anim">
                  <img :src="panel.anim" class="img-responsive anim">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import ImgPanelSatu from '~/assets/images/vector_image/vector33.jpg'
  import ImgPanelDua  from '~/assets/images/vector_image/vector28.jpg'
  import Anim1 from '~/assets/images/animated/anim48.gif'
  import Anim2 from '~/assets/images/animated/anim49.gif'

  export default {
    data(){
      return {
        panels: [
          {
            id:1,
            context: {
              header: `<span style="font-family: 'SpringSakura'; color: tomato;"> Selamat Datang </span> Di Kantor Pusat Kami`,
              paragraph: `<b><u>PT. Pineleng Indah Cemerlang</u></b> Sebagai landasan hukum dan rumah yang menaungi bahtera bisnis dengan merk dagang <i class="fas fa-air-freshener" style="font-size: 18px;"></i> <b><u> Evoush </u></b>. Ayo kita bangun bersama semangat dalam meraih kesuksesan dalam bisnis.<i class="far fa-calendar-check text-success"></i>.`
            },
            vector: "",
            iframe: "https://www.youtube.com/embed/4uY11lCCKUs?rel=0"
          },
          {
            id: 2,
            context: {
              header: `Bentuklah team <span style="font-family: Reey Regular; color: tomato;"> Terbaik </span> Anda dan sadari setiap <span style="font-family: Reey Regular; color: crimson;"> Potensi </span> Kesuksesan Bersama di <span style="font-family: 'Walkway'; font-size: 37px; color: #ff3b40; margin-left: 1rem; font-weight: 900;">Evoush</span>`,
              paragraph: `Segala yang dilakukan dengan bersama-sama dengan ketelitian dan keseriusan <i class="fas fa-mobile-alt"></i>, tak ayal semua faktor untuk anda mendapatkan keberhasilan dalam bisnis menjadi semakin terbuka luas. <br/> Seperti cakrawala yang selalu terbuka dengan berbagai pikiran yang meleburkan sayap-sayap impian.`
            },
            vector: ImgPanelDua,
            anim: Anim1
          },
          {
            id: 3,
            context: {
              header: `<span style="font-family: Reey Regular; color: tomato;"> Management </span> <span style="font-family: 'Walkway'; font-size: 37px; color: #ff3b40; margin-left: 1rem; font-weight: 900;">Evoush</span>`,
              paragraph: `Team management kami yang senantiasa memberikan pelayanan terbaik bagi anda <i class="fas fa-mobile-alt"></i>, senantiasa bekerja dengan ketelitian dan keseriusan. <br/> Karena bisnis yang anda bangun di <span style="font-family: Walkway; color: #ff3b40; font-weight: 900;">Evoush</span> adalah prioritas bagi management kami.`
            },
            vector: ImgPanelSatu,
            anim: Anim2
          }
        ]
      }
    }
  }
</script>


<style>
@media only screen and (max-device-width: 812px) {
  #intents{
    width: 100%!important;
    margin-top: -1rem;
  }
  #intents h1{
    margin-left: 1rem;
    text-align: center;
  }
  #intents p{
    text-indent: 21px;
    text-align: justify;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .intents-img{
    width: 320px !important;
    margin-left: -.1rem;
  }

}
/* DESKTOP VERSION */
  @media (min-width: 992px) { 
    #intents{
      width: 100%!important;
    }
  #intents p{
    font-family: 'Poiret One';
    font-size: 21px;
    margin-top: 1rem!important;
    margin-left: 1.3rem;
    text-align: justify;
    text-indent: 18px;
  }
  .intents-img{
    width: 500px !important;
    height: 400px !important;
    margin-left: -.1rem;
  }
  .ganjil-img{
    width: 800px!important;
  }
  .anim{
    width: 600px!important;
  }
}
</style>