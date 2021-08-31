<template>
	<div>
		<section id="portfolio-details" class="portfolio-details">
			<div class="container" data-aos="fade-up">
				<div class="row justify-content-center text-center">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<h2 class="portfolio-title">New Promo</h2>
						<blockquote class='blockquote-footer'>
							<!-- Rekomendasi terbaik bagi anda, yang mendambakan kulit sehat, terjaga dan awet muda -->.
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
					// {id: 1, img: 'https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/bahan_gallery/image/new_products/1.jpeg'},
					// {id: 2, img: 'https://github.com/evoush-products/bahan_evoush/blob/main/bahan_gallery/image/new_products/2.jpeg?raw=true'}
					{id:1, img: 'https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/promo/promo_new1.jpeg'},
					{id:2, img: 'https://raw.githubusercontent.com/evoush-products/bahan_evoush/main/promo/promo_new2.jpeg'}
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