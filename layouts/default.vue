<template>
	<div>
		<main>
			<Header/>
			<Nuxt/>
			<Footer/>
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