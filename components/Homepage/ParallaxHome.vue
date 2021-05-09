<template>
	<div>	
		<div class="parallax-home" :style="parallax.style">
			<div class="row justify-content-center">
				<div class="caption-parallax-home">
          <p v-html="parallax.context.paragraph" class="mt-2"></p>
					<h2 v-html="parallax.context.title"></h2>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import ParallaxImg from '~/assets/images/banner/reduce/model1.jpg'

	export default {
		data(){
			return {
				parallax: {
					style: {
						'background-image': `url('${ParallaxImg}')`,
					},
					context: {
            title: `<span style="font-family: Walkway; color: red;">Evoush</span> <span style="font-family:'Reey Regular'; color: #fff">Indonesia</span>`,
            paragraph: '<span style="font-family: Walkway;">Your Eternal</span> <span style="font-family: Reey Regular; color: red;">Future</span>.'
          }
				}
			}
		}
	}
</script>

<style>
	
  .parallax-home{
    min-height: 600px; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin:0;
  }

  .caption-parallax-home {
    background:rgba(255,255,255,0.3);
    /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
    position: absolute;
    margin-top: 20rem!important;
    width: 50%;
    text-align: center;
    color: #fff;
  }
  .caption-parallax-home h2 {
    font-family: 'Poiret One', cursive;font-weight:bold;
    text-shadow: 0 3px 20px rgba(0, 0, 0, 1.7);
    margin-bottom: .9rem;
    font-size: 18px;
  }
  .caption-parallax-home p{
    text-shadow: 0 3px 20px rgba(0, 0, 0, 1.7);
    font-weight: 700;
    width: 90%;
    font-size: 14px;
    text-align: center;
  }
  .caption-parallax-home a{
    font-size: 18px;
  }
  @media only screen and (max-device-width: 812px) {
    .parallax {
      background-attachment: scroll;
    }
/*    .caption-parallax-home{
      margin-top: 22rem!important;
    }*/
  }
 /*DESKTOP VERSION*/
@media (min-width: 992px) { 
	  /* all parallax top and bottom */
    .parallax-home{
      min-height: 500px; 
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin:0;
    }

    .caption-parallax-home {
      background:rgba(255,255,255,0.3);
      /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
      position: absolute;
      margin-top: 16.5rem;
      width: 75%;
      text-align: center;
      color: #fff;
    }
    .caption-parallax-home h2 {
      font-family:SpringSakura !important;
      font-weight:600;
      text-shadow: 0 3px 20px rgba(0, 0, 0, 1.7);
      margin-bottom: .9rem;
      font-size: 41px;
      margin-top: 1rem;
    }
    .caption-parallax-home a{
      font-size: 18px;
    }
    .caption-parallax-home p{
    font-size: 31px;
    text-align: center;
    text-shadow: 0 3px 20px rgba(0, 0, 0, 1.7);
  }
}
</style>