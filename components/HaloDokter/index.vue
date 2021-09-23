<template>
	<section id="halo-dokter" class="portfolio-details">
		<div class="container" data-aos="fade-up">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div class="section-title">
					<h2 class="portfolio-title">Anda Bertanya Dokter Menjawab</h2>
				</div>
			</div>

			<Dokter/>

			<h1 class="underline" style="margin-top: 15rem;"></h1>

			<Covid :provinces="provinces"/>

		</div>
	</section>
</template>

<script>
	import Covid from './Covid'
	import Dokter from './Dokter'

	export default{
		props: ['provinces'],
		components: {
			Covid,
			Dokter
		},

	}
</script>