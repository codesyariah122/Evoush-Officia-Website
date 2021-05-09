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
		data(){
			return {
				title: 'Evoush::Contact'
			}
		},
		components: {
			Hero
		},
		head(){
			return {
				title: this.title,
				meta: [
				{ hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
				{ name: 'description', content: 'Bisnis Evoush Indonesia'},
				{ name: 'keyword', content: 'Bisnis Evoush Bisnis Menjanjikan'},
				{ property: 'og-title', content: 'Evoush Indonesia'},
				{ property: 'og-description', content: 'Kami akan selalu terhubung untuk anda dan bisnis anda bersama evoush'},
				{ property: 'og-image', content: 'https://evoush.vercel.app/_nuxt/img/vector22.938bebb.jpg'},
				{ property: 'og-url', content: 'https://evoush.vercel.app'}
				]
			}
		},
		components: {
			Hero
		}
	}
</script>