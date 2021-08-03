<template>
	<div>
		<!-- ======= Hero Section ======= -->
		<section id="hero" class="d-flex flex-column justify-content-center">
			<div class="container content-hero" data-aos="zoom-in" data-aos-delay="100">
				<div class="row justify-content-center">
					<div class="col-lg-4 col-xs-12 col-sm-12">
						<Logo />
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-lg-8 col-xs-12 col-sm-12 mt-3 ml-3">
						<h1 style="font-family: 'Walkway';"><span style="font-weight: 800; margin-top:.5rem; font-size: 4rem;" v-html="brand"></span></h1>
						<!-- <p>
							Your
							<span
							class="typed"
							data-typed-items="Eternal Future, Healthiness, Beautiness"
							></span>
						</p> -->
						<p>
							<!-- evoush -->
							<span
							class="typed"
							data-typed-items="Sehat Untuk Indonesia, Your Eternal Future, Your Healthiness, Your Beautiness"
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
				</div>
			</div>
		</section>
		<!-- End Hero -->
	</div>
</template>

<script>
	import Logo from '~/components/molecules/Logo'

	export default {
		components: {
			Logo
		},
		data(){
			return {
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
			}
		}
	}
</script>