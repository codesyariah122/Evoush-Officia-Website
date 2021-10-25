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

					<div class="col-lg-12 col-xs-12 col-sm-12 mt-5 mb-5">
						<SocialSharing :socials="socials"/>
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
	import SocialSharing from '@/components/global/socialsharing'

	export default {
		props: ['product'],
		components: {
			SocialSharing
		},

		data(){
			return {
				socials: [
				{
					id: 1,
					icon: 'bx bxl-twitter bx-lg',
					network: 'twitter',
					url: 'https://evoush.com/',
					title: 'Evoush::Official',
					description: 'Evoush Official Website.',
					quote: 'Sukses berbisnis network marketing di era pandemi.',
					image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
					hashtags: 'Your Eternal Future',
					twitterUser: 'EvoushOfficial'
				},
				{
					id: 2,
					icon: 'bx bxl-facebook-circle bx-lg',
					network: 'facebook',
					url: 'https://evoush.com/',
					title: 'Evoush::Official',
					description: 'Evoush Official Website.',
					quote: 'Sukses berbisnis network marketing di era pandemi.',
					image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
					hashtags: 'Your Eternal Future'
				},
				{
					id: 3,
					icon: 'bx bxl-whatsapp bx-lg',
					network: 'whatsapp',
					url: 'https://evoush.com/event',
					title: 'Evoush::Official',
					description: 'Evoush Official Website.',
					quote: 'Sukses berbisnis network marketing di era pandemi.',
					image: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/about/3.jpg',
					hashtags: 'Your Eternal Future'
				}
				]
			}
		},

		head(){
			return {
				title: `Evoush::Product | ${this.product.categories[0].name} - ${this.product.name}`,
				meta: [
				{ property: "og:site_name", content: "Evoush::Official" },
				{ hid: "og:type", property: "og:type", content: "website" },
				{
					hid: "apple-mobile-web-app-title",
					name: "apple-mobile-web-app-title",
					content: `Evoush::Product | ${this.product.seo.description}`
				},
				{
					hid: 'description',
					name: 'description',
					content: `Evoush::Product | ${this.product.seo.description}`
				},
				{
					hid: "og:site_name",
					name: "og:site_name",
					property: "og:site_name",
					content:  `Evoush::Product | ${this.product.seo.title}`
				},
				{
					hid: "og:url",
					property: "og:url",
					content: `https://evoush.com/product/${this.product.name}`,
				},
				{
					hid: "og:title",
					property: "og:title",
					content:  `Evoush::Product | ${this.product.seo.title}`,
				},
				{
					hid: "og:description",
					property: "og:description",
					content: `Evoush::Product | ${this.product.seo.description}`,
				},
				{
					hid: "og:image",
					property: "og:image",
					content: this.product.assets[0].url,
				},
				{ property: "og:image:width", content: "740" },
				{ property: "og:image:height", content: "300" },
				]
			}
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


<style>
	.portfolio-info p{
		text-align: justify;
	}
</style>