<template>
	<div>
		<!-- ======= Hero Section ======= -->
		<section id="hero" class="d-flex flex-column justify-content-center">
			<div class="container content-hero" data-aos="zoom-in" data-aos-delay="100">
				<div class="row justify-content-center">
					<div class="col-lg-8 col-xs-12 col-sm-12">
						<Logo />
						<!-- <WhiteLogo/> -->
					</div>
				</div>
				<div class="row justify-content-start">
					<div class="col-lg-6 col-xs-12 col-sm-12 mt-3 ml-3">
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
					<div class="col-lg-3 col-xs-1 col-sm-1 sachet">
						<img v-if="ShowBox" src="https://github.com/evoush-products/evoush-products.github.io/blob/main/assets/img/products/evost_box.png?raw=true" class="img-fluid" @mouseleave="LeaveMe">
						<img v-else src="https://raw.githubusercontent.com/evoush-products/evoush-products.github.io/main/assets/img/products/sachet.png" class="img-fluid" @mouseover="OverMe">
					</div>
				</div>
			</div>
		</section>
		<!-- End Hero -->
	</div>
</template>

<style scoped>
	.sachet img{
		position: absolute;
		filter: drop-shadow(25px 15px 21px black);
		transform: translateX(-5%);
		cursor: pointer;
	}
	.sachet img:hover{
		transform: translateY(-15px);
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
				ShowBox: false,
				brand: 'evoush official'
			}
		},
		mounted(){
			this.typedHero()
		},

		methods:{
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
			OverMe(){
				this.ShowBox = true
				// this.$toast('Evost SOP 5000 Collagen')
			},
			LeaveMe(){
				this.ShowBox = false
			}
		}
	}
</script>