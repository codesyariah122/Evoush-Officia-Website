<template>
	<div>
		<Hero/>
		<section id="about">
			<h1>About Evoush</h1>
		</section>
	</div>
</template>

<style scoped>
#about{
	width: 100%;
}
/* DESKTOP VERSION */
@media (min-width: 992px) { 
	#about{
		width: 100%;
	}
}
</style>

<script>
	import Hero from '~/components/Aboutpage/Hero'

	export default {
		components: {
			Hero
		}
	}
</script>