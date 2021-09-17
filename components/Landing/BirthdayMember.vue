<template>
	<div>
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-center text-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<h2 class="portfolio-title">Birthday Member Evoush</h2>
						<blockquote class='blockquote-footer'>
							Management evoush mengucapkan selamat berulang tahun kepada member yang di hari ini menginjak usia barunya. Selamat ulang tahun {{ members[0].name }}
						</blockquote>
					</div>

					<div class="col-lg-12">
						<img :src="members[0].img" class="img-fluid">

						<div class="embed-responsive embed-responsive-21by9 mt-5">
							<iframe width="560" height="315" :src="members[0].video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
				members: [
					{name: 'Saidah Laila', img: 'https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/birthday/saidah_laila.jpeg', video:'https://www.youtube.com/embed/1o084CQ6cd4'}
				]
			}
		}
	}
</script>