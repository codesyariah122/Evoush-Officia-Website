<template>
	<div>
		<!-- ======= Hero Section ======= -->
		<section id="hero" class="d-flex flex-column justify-content-center">
			<div class="container" data-aos="zoom-in" data-aos-delay="100">
				<h1 style="font-family: 'Walkway';"><Logo/></h1>
				<p>
					Your
					<span
					class="typed"
					data-typed-items="Eternal Future, Healthiness, Beautiness"
					></span>
				</p>
				<div class="social-links">
					<a href="https://twitter.com/EvoushOfficial" class="twitter"><i class="bx bxl-twitter"></i></a>
					<a href="https://www.facebook.com/evoush.evoush.12" class="facebook"><i class="bx bxl-facebook"></i></a>
					<a href="https://www.instagram.com/evoush.official" class="instagram"><i class="bx bxl-instagram"></i></a>
					<a href="https://www.youtube.com/channel/UCIzNgeNDD58z8XNppkopwzw" class="linkedin"><i class="bx bxl-youtube"></i></a>
					<a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
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