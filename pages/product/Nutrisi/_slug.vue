<template>
	<div>
		<!-- ======= Portfolio Details ======= -->
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-end">
					<div class="col-lg-1 col-xs-6 col-sm-6 mb-5">
						<nuxt-link to="/#products" class="btn btn-danger ml-3 mt-3"><i class='bx bx-arrow-back'></i> Kembali</nuxt-link>
					</div>
				</div>

				<div v-for="product in products" class="row">
					<div class="col-lg-8">
						<h2 class="portfolio-title">{{product.title}}</h2>
						<div class="owl-carousel portfolio-details-carousel">
							<div v-for="slider in JSON.parse(product.slider)">
								<img :src="`https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/migration_db/product-sliders/${slider}`" class="img-fluid" alt="">
							</div>
						</div>
						<!-- <img :src="`https://app.evoush.com/storage/${product.cover}`" class="img-fluid img-responsive"> -->
					</div>

					<div class="col-lg-4 portfolio-info">
						<h3>Detail Product</h3>
						<ul>
							<li><strong>Category</strong>: {{product.categories[0].name}}</li>
							<li><strong>Release</strong>: {{formatDate(product.created_at)}}</li>
						</ul>

						<p class="mb-5" v-html="product.description">
						</p>

					</div>
				</div>

				<!-- <div class="row justify-content-center mt-2">
					<div class="col-lg-12 col-xs-12 col-sm-12">
					</div>
				</div> -->

			</div>
		</section><!-- End Portfolio Details -->
	</div>
</template>

<script>

	export default{
		layout: 'product',

		head(){
			return {
				title: `Evoush::Product | ${this.products[0].categories[0].name}::${this.products[0].title}`,
				link: [
					{rel: 'canonical', href: `https://evoush.com/product/${this.products[0].categories[0].name}/${this.products[0].title}`}
				],
				meta:[
					{ hid: 'description', name: 'description', content: 'Evoush::Product | Evoush::Healthy'},
					{ hid: 'keywords', name: 'keywords', content: 'Evoush::Product | Evoush::Healthy'},
					{ hid: 'author', name: 'author' , content: `${this.products[0].title} | ${this.products[0].categories[0].name}`},
					{ hid: 'og:type', property: 'og:type', content: 'website'},
					{ hid: 'og:url', property: 'og:url', content: `https://evoush.com/product/${this.products[0].categories[0].name}/${this.products[0].title}`},
					{ hid: 'og:title', property: 'og:title', content: 'Evoush Indonesia | Evoush::Product'},
					{ hid: 'og:site_name', property: 'og:site_name', content: `${this.products[0].categories[0].name} | ${this.products[0].title}`},
					{ hid: 'og:description', property: 'og:description', content: `${this.products[0].title}`},
					{ hid: 'og:image', property: 'og:image', content: `https://app.evoush.com/storage/${this.products[0].cover}`},
					{ hid: 'og:image:width', property: 'og:image:width', content: '600'},
					{ hid: 'og:image:height', property: 'og:image:height', content: '598'}
				]
			}
		},

		async asyncData({$axios, params}){
			const products = await $axios.$get(`/detail/Nutrisi/${params.slug}`)
			console.log(products)
			return {products}
		},

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