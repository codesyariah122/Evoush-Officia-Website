<template>
	<div>
		<div id="focus">
			<div class="panel panel-default">
				<div class="panel-body">
					<div v-for="panel in panels">
						<div v-if="panel.id % 2 == 1">
							<div class="row">
								<div class="col-md-3">
									<div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
										<img :src="panel.vector" class="img-responsive">
									</div>
								</div>
								<div class="col-md-4 mx-auto">
									<div data-aos="zoom-out-right" data-aos-easing="ease-out-sine" data-aos-duration="1500">
										<h1 v-html="panel.context.header"></h1>
										<p v-html="panel.context.paragraph"></p>
									</div>
								</div>
							</div>
						</div>

						<div v-else>
							<div class="row">
								<div class="col-md-3">
									<div data-aos="zoom-out-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
										<h1 v-html="panel.context.header"></h1>
										<p v-html="panel.context.paragraph"></p>
									</div>
								</div>
								<div class="col-md-4 mx-auto">
									<div data-aos="zoom-out-right" data-aos-easing="ease-out-sine" data-aos-duration="1500">
										<img :src="panel.vector" class="img-responsive">
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
/* DESKTOP VERSION */
@media (min-width: 992px) { 
	#focus img{
		width: 500px!important;
		height: 300px!important;
	}
	#focus .panel-body h1, p{

	}
}
</style>

<script>
	import Vector1 from '~/assets/images/vector_image/vector9.jpg'
	import Vector2 from '~/assets/images/vector_image/vector8.jpg'
	import Vector3 from '~/assets/images/vector_image/vector7.jpg'
	import Vector4 from '~/assets/images/vector_image/vector22.jpg'

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