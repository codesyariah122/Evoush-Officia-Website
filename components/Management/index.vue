<template>
	<div>
		<!-- ======= Portfolio Details ======= -->
		<section id="management-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row">
					<div class="col-lg-12">
						<h2 class="portfolio-title">Management Evoush</h2>
						<div v-for="management in managements">
							<img :src="management.url" class="img-fluid img-responsive mb-3">
						</div>
					</div>
				</div>
			</div>
		</section><!-- End Portfolio Details -->
	</div>
</template>


<script>
	export default {
		props: ['managements']
	}
</script>