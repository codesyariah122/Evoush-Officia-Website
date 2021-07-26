<template>
	<div>
		<!-- ======= Portfolio Details ======= -->
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">

				<div v-for="product in products" class="row">

					<div class="col-lg-8">
						<h2 class="portfolio-title">{{product.title}}</h2>
						<!-- <div class="owl-carousel portfolio-details-carousel">
							<img src="assets/img/portfolio/portfolio-details-1.jpg" class="img-fluid" alt="">
							<img src="assets/img/portfolio/portfolio-details-2.jpg" class="img-fluid" alt="">
							<img src="assets/img/portfolio/portfolio-details-3.jpg" class="img-fluid" alt="">
						</div> -->
						<img :src="`https://app.evoush.com/storage/${product.cover}`" class="img-fluid img-responsive">
					</div>

					<div class="col-lg-4 portfolio-info">
						<h3>Detail Product</h3>
						<ul>
							<li><strong>Category</strong>: {{product.categories[0].name}}</li>
							<li><strong>Release</strong>: {{formatDate(product.created_at)}}</li>
						</ul>

						<p v-html="product.description">
						</p>
					</div>

					<nuxt-link to="/" class="btn btn-danger ml-3 mt-3"><i class='bx bx-arrow-back'></i> Kembali</nuxt-link>

				</div>

			</div>
		</section><!-- End Portfolio Details -->
	</div>
</template>

<script>
	export default{
		layout: 'product',
		async asyncData({$axios, params}){
			const products = await $axios.$get(`/detail/Kosmetik/${params.slug}`)
			console.log(products)
			return {products}
		},

		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			}
		}
	}
</script>