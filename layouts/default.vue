<template>
	<div>
		<main>
			<Header/>
			<Nuxt/>
			<Footer/>

			<a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
			<!-- <div id="preloader"></div> -->

		</main>
	</div>
</template>


<script>
	import Header from '~/components/layouts/Header'
	import Footer from '~/components/layouts/Footer'

	export default {
		components: {
			Header,
			Footer
		}
	}
</script>


<style>
	:root {
		--primary-color: #fff;
	}
</style>