<template>
	<div>
		<Hero/>
		<section id="contact">
			<h1>Evoush Product</h1>
		</section>
	</div>
</template>

<style scoped>
#contact{
	width: 100%;
}
/* DESKTOP VERSION */
@media (min-width: 992px) { 
	#contact{
		width: 100%;
	}
}
</style>

<script>
	import Hero from '~/components/Productpage/Hero'

	export default {
		components: {
			Hero
		}
	}
</script>