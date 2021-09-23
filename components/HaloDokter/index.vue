<template>
	<section id="halo-dokter" class="portfolio-details">
		<div class="container" data-aos="fade-up">

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<blockquote class="text-primary blockquote-footer">
						Cuaca {{ location.city }}
					</blockquote>
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

			</div>

			<h1 class="underline" style="margin-top: 15rem;"></h1>

			<Covid :provinces="provinces"/>

		</div>
	</section>
</template>

<script>
	import Covid from './Covid'
	import Dokter from './Dokter'
	import Weather from './Weather'

	export default{
		props: ['provinces', 'location'],
		components: {
			Covid,
			Dokter,
			Weather
		},

		mounted(){
			console.log(this.location)
		}

	}
</script>