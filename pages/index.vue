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
		data(){
			return {
				title: 'Evoush::Official'
			}
		},
		head(){
			return {
				title: this.title,
				meta: [
					{ charset: 'utf-8' },
					{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
					{ hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
					{ name: 'description', content: 'Bisnis Evoush Indonesia'},
					{ name: 'keyword', content: 'Bisnis Evoush Bisnis Menjanjikan'},
					{ property: 'og-title', content: 'Evoush Indonesia'},
					{ property: 'og-description', content: 'Bisnis MultiLevel Zaman Now'},
					{ property: 'og-image', content: 'https://evoush.vercel.app/_nuxt/img/vector9.4a85b35.jpg'},
					{ property: 'og-url', content: 'https://evoush.vercel.app'}
				]
			}
		},
		
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
