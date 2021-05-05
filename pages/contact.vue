<template>
	<div>
		<Hero/>
		<section id="contact">
			<h1>Evoush Contact</h1>
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
	import Hero from '~/components/Contactpage/Hero'

	export default {
		components: {
			Hero
		}
	}
</script>