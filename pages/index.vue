<template>
	<div>
		<Hero/>
		<section id="home">
			<!-- introd -->
			<PanelHeader/>
			<!-- end intro -->
			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<!-- intent -->
			<PanelIntent/>
			<!-- end intent -->

			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<!-- parallax -->
			<ParallaxHome/>
			<!-- end parallax -->

			<!-- Panel Focus -->
			<PanelFocus/>
			<!-- end panel focus -->
			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<!-- parallax end -->
			<ParallaxEnd/>
			<!-- end parallax end -->
		</section>
	</div>
</template>

<script>
	import Hero from '~/components/Homepage/Hero.vue'
	import PanelHeader from "~/components/Homepage/PanelHeader.vue"
	import PanelIntent from "~/components/Homepage/PanelIntent.vue"
	import ParallaxHome from '~/components/Homepage/ParallaxHome.vue'
	import PanelFocus from '~/components/Homepage/PanelFocus.vue'
	import ParallaxEnd from '~/components/Homepage/ParallaxEnd.vue'
	
	export default {
		
		components: {
			Hero,
			PanelHeader,
			PanelIntent,
			ParallaxHome,
			PanelFocus,
			ParallaxEnd
		},

	}
</script>

<style scoped>
/*section {
	width: 100%;
}*/
#home{
	width: 100%;
}
/* DESKTOP VERSION */
@media (min-width: 992px) { 
	#home{
		width: 100%;
	}
}
</style>
