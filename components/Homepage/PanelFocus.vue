<template>
	<div>
		<div id="focus">
			<div class="panel panel-default panel-focus">
				<div class="panel-body panel-body-focus">
					<div v-for="panel in panels">
						<div v-if="panel.id % 2 == 1">
							<div class="row">
								<div class="col-md-4 col-xs-12 col-sm-12">
									<div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
										<img :src="panel.vector" class="img-responsive" style="width: 500px;">
									</div>
								</div>
								<div class="col-md-6 col-xs-12 col-sm-12 content ganjil">
									<div data-aos="zoom-out-right" data-aos-easing="ease-out-sine" data-aos-duration="1500">
										<h1 v-html="panel.context.header"></h1>
										<p class="ml-1" v-html="panel.context.paragraph"></p>
									</div>
								</div>
							</div>

							<div v-if="panel.anim" class="row justify-content-end mt-2 mb-2">
								<div class="p-2">
									<img :src="panel.anim" class="img-responsive anim">
								</div>
							</div>
							<h1 class="underline"></h1>
						</div>

						<div v-else class="mb-5">
							<div class="row">
								<div class="genap col-md-6 col-xs-12 col-sm-12">
									<div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
										<h1 v-html="panel.context.header"></h1>
										<p v-html="panel.context.paragraph"></p>
									</div>
								</div>
								<div class="col-md-6 col-xs-12 col-sm-12 content">
									<div data-aos="zoom-out-right" data-aos-easing="ease-out-sine" data-aos-duration="1500">
										<img :src="panel.vector" class="img-responsive" style="width: 500px;">
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
/*panel*/
.panel-focus{
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-top: -1.7rem;
  padding: 12px;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-content: justify-content-center;
  width: 90%;
  margin-left: 1.2rem;
}
.panel-body-focus {
  margin-top: 1rem;
  padding: 5px;
}
.panel-body-focus img{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important; color: rgb(255,228,181);border-radius:0%;
}
.panel-body-focus h1{
  margin-left: .3rem;
  font-family: 'SpringSakura';
  font-size: 21px;
  margin-top: 1rem;
}
.panel-body-focus p{
  line-height: 25px;
  font-size: 12px;
  text-indent: 21px;
  text-align: justify;
  margin-left: .1rem!important;
  width: 100%;
}
.panel-body-focus a {
  margin-left: 5rem;
  margin-bottom: 2rem;
}
/*end panel;*/
/* polaroid */
.polaroid{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
  margin-top:2rem;
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

/*mobile setup*/
@media only screen and (max-device-width: 812px) {
	.panel-focus img{
		width: 290px!important;
		height: 270px!important;
	}
}
/*end mobile*/

/* DESKTOP VERSION */
  @media (min-width: 992px) { 

    /*panel*/
    .panel-focus{
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);
      border-radius: 12px;
      margin-top: -5rem;
      padding: 12px;
      background-color: white;
      margin-left: 3.5rem;
      width: 90%;
      /*height: 50vh;*/
    }
    .panel-body-focus {
      margin-top: .1rem;
      padding: 15px;
    }
    .panel-body-focus img{
      height: 400px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)!important; color: rgb(255,228,181);
    }
    .panel-body-focus h1{
      margin-left: 5rem;
      font-family: 'SpringSakura';
      font-size: 31px;
    }
    .panel-body-focus p{
      font-size: 18px;
      font-weight: 400;
      text-align: justify;
    }
    .panel-body-focus a {
      margin-left: 5rem;
    }
    .panel-body-focus .anim{
      width: 550px;
    }

    /*end panel;*/

    .genap h1{
    	margin-left: -.1rem!important;
    }
    .genap p{
    	margin-left: -.1rem!important;
    }
    .genap a{
    	margin-left: -.1rem!important;
    }

    .ganjil h1{
    	margin-left: 8.7rem !important;
    }
    .ganjil p{
    	margin-left: 8.7rem !important;
    }
    .ganjil a{
    	margin-left: 7rem !important;
    }
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
</style>

<script>
	import Vector1 from '~/assets/images/vector_image/vector9.jpg'
	import Vector2 from '~/assets/images/vector_image/vector8.jpg'
	import Vector3 from '~/assets/images/vector_image/vector7.jpg'
	import Vector4 from '~/assets/images/vector_image/vector22.jpg'
	import Anim1 from '~/assets/images/animated/anim37.gif'
	import Anim2 from '~/assets/images/vector_image/vector15.jpg'

	export default {
		data(){
			return {
				panels: [
					{
						id:1,
						context: {
							header: `Focus1 <span style="font-family: 'SpringSakura'; color: tomato;"> Label </span> title content 1`,
							paragraph: `<b><u>Lorem ipsum</u></b> dolor sit amet <i class="fas fa-air-freshener" style="font-size: 18px;"></i> consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.<i class="far fa-calendar-check text-success"></i>.`
						},
						anim: Anim1,
						vector: Vector1,
					},
					{
						id:2,
						context: {
							header: `Focus2 <span style="font-family: 'SpringSakura'; color: tomato;"> Label </span> title content 2`,
							paragraph: `<b><u>Lorem ipsum</u></b> dolor sit amet <i class="fas fa-air-freshener" style="font-size: 18px;"></i> consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.<i class="far fa-calendar-check text-success"></i>.`
						},
						vector: Vector2,
					},
					{
						id:3,
						context: {
							header: `Focus3 <span style="font-family: 'SpringSakura'; color: tomato;"> Label </span> title content 3`,
							paragraph: `<b><u>Lorem ipsum</u></b> dolor sit amet <i class="fas fa-air-freshener" style="font-size: 18px;"></i> consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.<i class="far fa-calendar-check text-success"></i>.`
						},
						anim: Anim2,
						vector: Vector3,
					},
					{
						id:4,
						context: {
							header: `Focus4 <span style="font-family: 'SpringSakura'; color: tomato;"> Label </span> title content 4`,
							paragraph: `<b><u>Lorem ipsum</u></b> dolor sit amet <i class="fas fa-air-freshener" style="font-size: 18px;"></i> consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.<i class="far fa-calendar-check text-success"></i>.`
						},
						vector: Vector4,
					}
				]
			}
		}
	}
</script>