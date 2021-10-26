<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
				<h2><u>Peeling Spray</u></h2>

				<div
					class="row portfolio-container"
					data-aos="fade-up"
					data-aos-delay="200">
					<div v-for="sixth in sixths" class="col-lg-4 col-md-6 portfolio-item">
						<div v-if="sixth.format === 'video'">
							<video width="320" height="240" controls>
								<source :src="`https://evoush-landing-api.herokuapp.com${sixth.img}`" type="video/mp4">
								<source src="movie.ogg" type="video/ogg">
								Your browser does not support the video tag.
							</video>
						</div>
						<div v-else class="portfolio-wrap">
							<img
							:src="`https://evoush-landing-api.herokuapp.com${sixth.img}`"
							class="img-fluid"
							alt=""
							/>


							<div class="portfolio-info">
								<p>Peeling Spray Testimony</p>
								<div class="portfolio-links mt-3">
									<a
									:href="`https://evoush-landing-api.herokuapp.com${sixth.img}`"
									data-gall="productGallery"
									class="venobox btn btn-sm btn-primary text-white"
									title="Body Serum Testimoni"
									><i class="bx bx-plus"></i
										>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['sixths']
	}
</script>