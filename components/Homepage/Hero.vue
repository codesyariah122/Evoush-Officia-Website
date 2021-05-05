<template>
	<div class="jumbotron jumbotron-fluid jumbotron-content" :style="image">
		<div class="container">
			<div class="row no-gutters justify-content-center">
				<div class="col-md-6 col-xs-12 col-sm-12">
					<h1 class="display-4 text-center" style='font-family:SpringSakura;'>
						<nuxt-link to="/">
							<Logo/>
						</nuxt-link> {{home.title}}
					</h1>
					<p class="blockquote-text text-center" style="font-size: 18px; font-family:Reey Regular;color: firebrick;"> 
						<span style="font-family:'Poiret One'; font-size: 21px; color: white;"> Official Website </span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeroImg from '~/assets/images/banner/evoush_banner.jpg'
	import LogoEvoush from '../Logo.vue'

	export default{
		data(){
			return {
				Logo: LogoEvoush,
				image: {
					backgroundImage: `url(${HeroImg})`
				},
				home: {
					title: "Indonesia"

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
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  background-size: cover;
  position: relative;
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
  font-size: 35px;
  color: #FFFFF0;
  font-family: "Poiret One", cursive;
  font-weight: bold;
}

/* DESKTOP VERSION */
@media (min-width: 992px) { 
	/* jumbotron */
	.jumbotron{
		margin-top: -75px;
		height: 840px;
	}
	.jumbotron .display-4{
		text-transform: capitalize;
	}
}
</style>