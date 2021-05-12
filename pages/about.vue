<template>
	<div>
		<Hero/>
		<section id="about">
			<!-- intro -->
			<h1 class="text-center underline"></h1>
			
			<!-- intent -->
			<PanelIntent/>
			
			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<!-- Parallax Home -->
			<ParallaxAbout/>

			<h1 class="underline" style="margin-top: 5rem;"></h1>
			<!-- focus -->
			<PanelFocus/>
			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<!-- parallax end -->
			<ParallaxEnd/>



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
	import Hero from '~/components/Aboutpage/Hero.vue'
	import PanelIntent from "~/components/Aboutpage/PanelIntent.vue"
	import PanelFocus from "~/components/Aboutpage/PanelFocus.vue"
	import ParallaxAbout from '~/components/Aboutpage/ParallaxAbout.vue'
	import ParallaxEnd from '~/components/Aboutpage/ParallaxEnd.vue'

	export default {
		data(){
			return {
				title: 'About::Evoush'
			}
		},
		components: {
			Hero,
			ParallaxAbout,
			PanelIntent,
			PanelFocus,
			ParallaxEnd
		},
		head(){
			return {
				title: this.title,
				meta: [
				{ hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
				{ name: 'description', content: 'Bisnis Evoush Indonesia'},
				{ name: 'keyword', content: 'Bisnis Evoush Bisnis Menjanjikan'},
				{ property: 'og-title', content: 'Evoush Indonesia'},
				{ property: 'og-description', content: 'Your Eternal Future'},
				{ property: 'og-image', content: 'https://evoush.vercel.app/_nuxt/img/vector8.a653b7c.jpg'},
				{ property: 'og-url', content: 'https://evoush.vercel.app'}
				]
			}
		},
	}
</script>