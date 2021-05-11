<template>
	<div class="jumbotron jumbotron-fluid jumbotron-content" :style="image">
		<div class="container">
			<div class="row no-gutters justify-content-center">
				<div class="col-md-6 col-xs-12 col-sm-12">
					<nuxt-link to="/">
						<h1 class="display-4 text-center" style="font-family:'Walkway'; text-transform: lowercase!important; color: red; font-weight: 900;">
							<BrandIcon/>{{home.brand}} <span style="font-family: 'Reey Regular'; text-transform: capitalize; color: #fff;"> {{home.country}} </span>
						</h1>
					</nuxt-link>
					<p class="blockquote-text text-center" style="font-family:Reey Regular;color: firebrick;"> 
						<!-- <span style="font-family: SpringSakura;color:#ffcccc;">]</span> -->
							<span style="font-family:'Poiret One'; color: white;"> Official Website </span>
						<!-- <span style="font-family: SpringSakura;color:#ffcccc;">[</span> -->
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeroImg from '~/assets/images/banner/evoush_banner.jpg'
	import BrandIcon from '../Headers/brand.vue'

	export default{
		components: {
			BrandIcon
		},
		data(){
			return {
				image: {
					backgroundImage: `url(${HeroImg})`
				},
				home: {
					brand: "evoush",
					country: "Indonesia"

				}
			}
		}
	}
</script>

<style scoped>
/* jumbotron */
.jumbotron-content {
  /* background-size: cover;
  height: 540px; */
  text-align: center;
  position: relative;
  background-color: #17234E;
  min-height: 100vh;
  width: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  position: relative;
  clip-path: polygon(50% 0%, 100% 0, 100% 89%, 92% 92%, 84% 94%, 50% 100%, 0 100%, 0 59%, 0 0);
  z-index: -1!important;
}

.jumbotron-content .container {
  z-index: 1;
  position: relative;
}

.jumbotron-content::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;
  /*margin-left: -0.7rem;*/
}

.jumbotron-content .display-4 {
  color: white;
  text-align: center;
  margin-top: 9rem;
  font-weight: 200;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
}

.jumbotron-content .display-4 span {
  font-weight: 500;
  color: tomato;
}

.jumbotron-content p {
  font-weight: 500;
  font-size: 21px;
  color: #FFFFF0;
  font-family: "Poiret One", cursive;
  font-weight: bold;
}

/* DESKTOP VERSION */
@media (min-width: 992px) { 
	/* jumbotron */
	.jumbotron-content{
		margin-top: -75px;
		height: 840px;
		z-index: -1!important;
	}
	.jumbotron-content .display-4{
		text-transform: capitalize;
	}
	.jumbotron-content p{
		font-size: 31px!important;
	}
}
</style>