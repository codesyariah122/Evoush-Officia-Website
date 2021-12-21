<template>
	<section id="halo-dokter" class="portfolio-details">
		<div class="container" data-aos="fade-up">

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<h6 class="mt-5">
						Cuaca : Kota {{ location.city }}
					</h6>
					<Weather :city="location.city" />

					<!-- <pre>
						{{ location }}
					</pre> -->

				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="section-title">
						<h2 class="portfolio-title">Anda Bertanya Dokter Menjawab</h2>
					</div>
				</div>

				<Dokter/>

				<!-- <div class="elfsight-app-4fe66309-309b-4aef-9acd-70f7d530b4ca"></div> -->

			</div>

			<h1 class="underline" style="margin-top: 15rem;"></h1>


		</div>
	</section>
</template>

<script>
	import Dokter from './Dokter'
	import Weather from './Weather'

	export default{
		props: ['provinces', 'location'],
		components: {
			Dokter,
			Weather
		},

		mounted(){
			// console.log(this.location)
		}

	}
</script>