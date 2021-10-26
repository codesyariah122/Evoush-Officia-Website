<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-lg-12 col-xs-12 col-sm-12 mt-5">
				<h2><u>Klev Whitening Serum</u></h2>

				<div
				class="row portfolio-container"
				data-aos="fade-up"
				data-aos-delay="200">
				<div v-for="eight in eights" class="col-lg-4 col-md-6 portfolio-item">
					<div v-if="eight.format === 'video'">
						<video width="320" height="240" controls>
								<source :src="`https://evoush-landing-api.herokuapp.com${eight.img}`" type="video/mp4">
								<source src="movie.ogg" type="video/ogg">
									Your browser does not support the video tag.
						</video>
					</div>
					<div v-else class="portfolio-wrap mt-2">
						<br/>
								<img
								:src="`https://evoush-landing-api.herokuapp.com${eight.img}`"
								class="img-fluid"
								alt=""
								/>


								<div class="portfolio-info">
									<p>Klev Whitening Serum Testimony</p>
									<div class="portfolio-links mt-3">
										<a
										:href="`https://evoush-landing-api.herokuapp.com${eight.img}`"
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
		props: ['eights']
	}
</script>