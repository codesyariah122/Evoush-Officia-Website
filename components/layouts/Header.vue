<template>
	<div>
		<!-- ======= Mobile nav toggle button ======= -->
		<button type="button" class="mobile-nav-toggle d-xl-none">
			<i class="icofont-navigation-menu"></i>
		</button>
		<!-- ======= Header ======= -->
		<header id="header" class="d-flex flex-column justify-content-center">
			<Navigation/>
		</header>
		<Hero/>
	</div>
</template>

<script>
	import Navigation from './Navigation'
	import Hero from './Hero'

	export default {
		components: {
			Navigation,
			Hero
		},
		data(){
			return {
				background: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/banner/jumbotron5.jpg'
			}
		}
	}
</script>