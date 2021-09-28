<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-lg-12 col-xs-12 col-sm-12">

				<h2><u>Gilcam Propolis</u></h2>

				<div
				class="row portfolio-container"
				data-aos="fade-up"
				data-aos-delay="200">
					<div v-for="first in reverse" class="col-lg-4 col-md-6 portfolio-item">
						<div class="portfolio-wrap">
							<img
							:src="`https://evoush-landing-api.herokuapp.com${first.img}`"
							class="img-fluid"
							alt=""
							/>
							<div class="portfolio-info">
								<h4>Testimoni Product</h4>
								<p>Gilcam Propolis</p>
								<div class="portfolio-links mt-3">
									<a
									:href="`https://evoush-landing-api.herokuapp.com${first.img}`"
									data-gall="productGallery"
									class="venobox btn btn-sm btn-primary text-white"
									title="Gilcam Propolis Testimoni"
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
		props: ['reverse']
	}
</script>