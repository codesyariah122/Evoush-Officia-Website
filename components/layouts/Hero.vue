<template>
	<div>
		<!-- ======= Hero Section ======= -->
		<section id="hero" class="d-flex flex-column justify-content-center">
			<div class="container content-hero" data-aos="zoom-in" data-aos-delay="100">
				<div class="row justify-content-center mt-5">
					<div class="col-lg-8 col-xs-12 col-sm-12">
						<Logo />
						<!-- <WhiteLogo/> -->
					</div>
				</div>
				<div class="row justify-content-start">
					<div class="col-lg-6 col-xs-12 col-sm-12 mt-3 ml-5">
						<h1 style="font-family: 'Walkway';"><span style="font-weight: 800; margin-top:.5rem; font-size: 4rem;" v-html="brand"></span></h1>
						<p>
							<!-- evoush -->
							<span
							class="typed"
							data-typed-items="Sehat Untuk Indonesia, Your Eternal Future, Your Healthy, Your Beauty"
							></span>
						</p>
						<div class="social-links">
							<a href="https://twitter.com/EvoushOfficial" class="twitter"><i class="bx bxl-twitter"></i></a>
							<a href="https://www.facebook.com/evoush.evoush.12" class="facebook"><i class="bx bxl-facebook"></i></a>
							<a href="https://www.instagram.com/evoush.official" class="instagram"><i class="bx bxl-instagram"></i></a>
							<a href="https://www.youtube.com/channel/UCIzNgeNDD58z8XNppkopwzw" class="linkedin"><i class="bx bxl-youtube"></i></a>
							<!-- <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> -->
						</div>
					</div>

					<div class="col-lg-4 col-xs-12 col-sm-12">
						<div class="row justify-content-center interactive-product">
							<div class="col-lg-4">
								<img :src="imgBox" class="img-fluid">
							</div>
						</div>

							<div class="col-md-2 box-sachet">
								<ul class="sachet" style="list-style: none;">
									<li v-for="(image, index) in images">
										<img id="sachet" :src="image.src" :data-id="image.id" :key="image.id" class="img-fluid" @click="ClickMe(boxes[index].src)">
									</li>
								</ul>
							</div>
					</div>

				</div>
			</div>
		</section>
		<!-- End Hero -->
	</div>
</template>

<style scoped>
	.interactive-product{
		margin-top: 1rem;
	}

	.interactive-product img{
		filter: drop-shadow(25px 15px 21px black);
		max-width: 250px;
		transform: translateY(5%);
	}

	.sachet{
		position: absolute;
		left: 20%;
		bottom: -5rem;
		transform: translateX(-7%);
		display: flex;
	}

	.sachet ul li{
		list-style: none!important;
		display: inline-block;
		cursor: pointer;
		margin-top: 2rem;
	}
	.sachet img{
		filter: drop-shadow(25px 15px 21px black);
		margin: 0 -15px;
		max-width: 100px;
		cursor: pointer;
	}
	.sachet img:hover{
		transform: translateY(5px);
	}

	@media (min-width: 992px) {
		.interactive-product img{
			max-width: 800px;
			margin-top: -7rem;
		}
		.box-sachet{
			margin-top: 10rem;
			margin-bottom: 5rem;
		}
		.sachet{
			margin-top: -15rem;
			transform: translateX(-10%);
		}
		.sachet img{
			filter: drop-shadow(15px 13px 18px black);
			margin: 0 -20px;
			max-width: 250px;
			cursor: pointer;
		}
	}
</style>

<script>
	import Logo from '~/components/molecules/Logo'
	import WhiteLogo from '~/components/molecules/WhiteLogo'

	export default {
		components: {
			Logo,
			WhiteLogo
		},
		data(){
			return {
				ShowBox: null,
				ShoBoxAgain: null,
				brand: 'evoush official',
				images: [
					{id:1, src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/material/evost_material.png'},
					{id:2, src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/material/kileon_material.png'},
					{id:3, src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/material/gilcam_material.png'}
				],
				boxes: [
					{
						id:1, src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/sachet.png'
					},
					{
						id:2, src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/kileon_product.png'
					},
					{
						id:3, src: 'https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/gilcam2.png'
					}
				],
				imgBox: ''
			}
		},
		mounted(){
			this.typedHero(),
			this.getHeroCarousel(),
			this.ClickMe(this.boxes[0].src)
		},

		methods:{
			getHeroCarousel(){
				// Testimonials carousel (uses the Owl Carousel library)
				$(".hero-carousel").owlCarousel({
					autoplay: true,
					dots: true,
					loop: true,
					items: 1
				});
			},
			typedHero(){
				if ($('.typed').length) {
					var typed_strings = $(".typed").data('typed-items');
					typed_strings = typed_strings.split(',')
					new Typed('.typed', {
						strings: typed_strings,
						loop: true,
						typeSpeed: 100,
						backSpeed: 50,
						backDelay: 2000
					});
				}
			},
			ClickMe(imgBox){
				this.ShowBox = true
				this.imgBox = imgBox
				console.log(imgBox)
			}
		}
	}
</script>