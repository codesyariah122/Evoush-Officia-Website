<template>
	<div>
		<section id="management-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-center">
					<div class="col-lg-12 col-xs-12 col-sm-12 text-center">
						<div class="section-title">
							<h2 class="portfolio-title">Event Evoush</h2>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div v-for="event in events" class="col-lg-12 col-xs-12 col-sm-12 mb-5 mt-2" :key="event.id">
						<div class="embed-responsive embed-responsive-21by9">
							<iframe class="embed-responsive-item" :src="event.src"></iframe>
						</div>
					</div>
				</div>

			</div>
		</section>
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				events: [

					{id:1, src: 'https://www.youtube.com/embed/ENpbFbB5xr4'},
					{id:2, src: 'https://www.youtube.com/embed/MOe-JZhB1yo'},
					{id:3, src: 'https://www.youtube.com/embed/sthDx1cCqNM'}

				]
			}
		}
	}
</script>