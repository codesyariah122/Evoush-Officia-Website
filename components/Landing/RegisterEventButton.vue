<template>
	<div>
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-center text-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<h2 class="portfolio-title mb-2 mt-2">Anniversary Party</h2>

						<div class="owl-carousel portfolio-details-carousel">
							<img v-for="event in events" :src="event.img" class="img-fluid" alt="">
						</div>

						<p class="mt-2 mb-2">
							Halo evousher, usia kita telah menginjak satu tahun, tentunya banyak moment yang indah ketika meraih sebuah pencapian, keberhasilan dari semangat yang evousher bangun, untuk memeriahkan hari jadi kita, evoush menyelenggarakan event dengan beberapa lomba yang bisa kalian ikuti, ayo jangan sampai ketinggalan. ditunggu pendaftarannya ya evousher.
						</p>
					</div>
				</div>
			</div>

			<nuxt-link to="/event/register" class="btn btn-danger btn-block rounder mt-3 mb-5"><i class='bx bx-qr bx-lg'></i> Daftar Lomba</nuxt-link>

		</section>

	</div>
</template>

<script>
export default{
	data(){
		return{
			events: [
				{id: 1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/event/anniversary.jpeg'},
				{id: 2, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/event/anniversary2.jpeg'},
				{id: 3, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/event/anniversary4.jpeg'},
				{id: 4, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/event/anniversary5.jpeg'}
			]
		}
	}
}
</script>