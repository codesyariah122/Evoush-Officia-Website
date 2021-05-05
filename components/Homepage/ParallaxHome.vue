<template>
	<div>	
		<div class="parallax" :style="parallax.style">
			<div class="row justify-content-center">
				<div class="caption">
          <p v-html="parallax.context.paragraph" class="ml-3"></p>
					<h2 v-html="parallax.context.title"></h2>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>

<script>
	import ParallaxImg from '~/assets/images/banner/model1.jpg'

	export default {
		data(){
			return {
				parallax: {
					style: {
						'background-image': `url('${ParallaxImg}')`,
					},
					context: {
            title: `<span style="font-family: SpringSakura; color: tomato;">Evoush Indonesia</span>`,
            paragraph: '<span style="font-family: Poiret One;">Tuangkan ide dan strategi anda dan kuatkan jalinan sesama, menjadi cemerlang dalam perjalanan bisnis di </span> <span style="font-family: SpringSakura; color: crimson;">Evoush</span> <span style="font-family: Poiret One;">dengan tambahan nilai kebersamaan</span>.'
          }
				}
			}
		}
	}
</script>

<style>
	
  .parallax{
    min-height: 500px; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin:0;
  }

  .caption {
    background:rgba(255,255,255,0.3);
    /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
    position: absolute;
    margin-top: 10rem;
    width: 50%;
    text-align: center;
    color: #fff;
  }
  .caption h2 {
    font-family: 'Poiret One', cursive;font-weight:bold;
    text-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
    margin-bottom: .9rem;
    font-size: 21px;
  }
  .caption p{
    text-shadow: 0 3px 20px rgba(0, 0, 0, 0.9);
    font-weight: 700;
    width: 90%;
    font-size: 31px;
    text-align: justify;
  }
  .caption a{
    font-size: 18px;
  }

 /*DESKTOP VERSION*/
@media (min-width: 992px) { 
	  /* all parallax top and bottom */
    .parallax{
      min-height: 500px; 
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin:0;
    }

    .caption {
      background:rgba(255,255,255,0.3);
      /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
      position: absolute;
      margin-top: 17.5rem;
      width: 75%;
      text-align: center;
      color: tomato;
    }
    .caption h2 {
      font-family:SpringSakura !important;
      font-weight:600;
      text-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
      margin-bottom: .9rem;
      font-size: 41px;
      margin-top: -2rem;
    }
    .caption a{
      font-size: 18px;
    }
}
</style>