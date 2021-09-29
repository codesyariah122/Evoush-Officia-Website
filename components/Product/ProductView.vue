<template>
	<div>

		<!-- <pre>
			{{ product }}
		</pre> -->

		<!-- ======= Portfolio Details ======= -->
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-end">
					<div class="col-lg-1 col-xs-6 col-sm-6 mb-5">
						<nuxt-link to="/#products" class="btn btn-danger ml-3 mt-3"><i class='bx bx-arrow-back'></i> Kembali</nuxt-link>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-8">
						<h2 class="portfolio-title">{{product.name}}</h2>
						<div class="owl-carousel portfolio-details-carousel">
							<img v-for="slider in product.assets" :src="slider.url" class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-4 portfolio-info">
						<h3>Detail Product</h3>
						<ul>
							<li v-for="category in product.categories"><strong>Category</strong>: {{category.name}}</li>
							<li v-if="product.thank_you_url">
								<span class="badge badge-success">Landing Page : </span>
								<a :href="product.thank_you_url" class="btn btn-link">{{ product.name }}</a>
							</li>
							<li v-else>
								<span class="badge badge-danger">
									No landing page
								</span>
							</li>
						</ul>

						<p class="mb-5" v-html="product.description">
						</p>

					</div>
				</div>

				<div class="row justify-content-end mt-5">
					<div class="col-lg-4 col-xs-12 col-sm-12">
						<a :href="product.checkout_url.checkout" class="mt-3 mb-5 btn btn-primary btn-block" target="_blank">
							Check Out
						</a>
					</div>
				</div>

			</div>
		</section>
			<!-- End Portfolio Details -->

		<!-- <pre>
			{{ product }}
		</pre> -->

	</div>
</template>

<script>
	export default {
		props: ['product'],

		mounted(){
			this.getCarousel()
		},

		methods: {
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},
			getCarousel(){
				 // Portfolio details carousel
				 $(".portfolio-details-carousel").owlCarousel({
				 	autoplay: true,
				 	dots: true,
				 	loop: true,
				 	items: 1
				 });

				}
			}
		}
</script>


<style>
	.portfolio-info p{
		text-align: justify;
	}
</style>