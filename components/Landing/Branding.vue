<template>
	<div>
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-center text-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<h2 class="portfolio-title">Our New Product</h2>
						<blockquote class='blockquote-footer'>
							Rekomendasi terbaik bagi anda, yang mendambakan kulit sehat, terjaga dan awet muda.
						</blockquote>
						
						<div class="owl-carousel portfolio-details-carousel">
							<img v-for="branding in brandings" :src="branding.img" class="img-fluid" alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="container mt-5 mb-5">
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				brandings: [
					{id: 1, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/6.jpeg'},
					{id: 2, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/5.jpeg'},
					{id: 3, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/WhatsApp%20Image%202021-08-09%20at%2014.42.32.jpeg'},
					{id: 4, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/WhatsApp%20Image%202021-08-09%20at%2014.42.32%20(1).jpeg'},
					{id: 5, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/WhatsApp%20Image%202021-08-02%20at%2016.48.28.jpeg'},
					{id: 6, img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan_gallery/image/new_products/639ee5eb-264b-433a-8924-b3622c7e2390.jpg'},
				],
			}
		},

		mounted(){
			this.getBrandingImg()
		},

		methods: {
			getBrandingImg(){
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