<template>
	<div class="jumbotron jumbotron-fluid jumbotron-content" :style="image">
		<div class="container">
			<div class="row no-gutters justify-content-center">
				<div class="col-md-4 col-xs-4 col-sm-4">
					<h1 class="display-4 text-center" style='font-family:SpringSakura;'>
						<div v-html="home.brand"></div>
					</h1>
					<p class="blockquote-text text-justify" style="font-family:'Poiret One'; font-size: 21px; color: white;" v-html="home.context"> </p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeroImg from '~/assets/images/kantor/Masuk.jpg'

	export default{
		data(){
			return {
				image: {
					backgroundImage: `url(${HeroImg})`
				},
				home: {
					brand: ` <span style="font-family: SpringSakura; color: red;">About</span> <span style="font-family: Walkway; color: #fff; font-weight: 900;">Evoush</span>`,
					title: "Product",
					context: `<span style="font-family: Walkway; color: red; font-weight: 900;">Evoush</span> adalah merupakan sebuah merk dagang dari <br> 
          <span style="font-family: Walkway;">PT. Pineleng Indah Cemerlang</span>.`

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
  /*text-align: center;*/
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
  margin-top: 2rem;
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
  /*text-align: center;*/
  margin-top: 9rem;
  font-weight: 200;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1.9);
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
	.jumbotron-content{
		margin-top: -75px;
		height: 840px;
	}
  .jumbotron-content .container{
    margin-top: 3.5rem;
  }
	.jumbotron-content .display-4{
		text-transform: capitalize;
     text-shadow: 0 3px 20px rgba(0, 0, 0, 1.9)
	}
}
</style>