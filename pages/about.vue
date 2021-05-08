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
		data(){
			return {
				title: 'About::Evoush'
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
				{ property: 'og-description', content: 'Your Eternal Future'},
				{ property: 'og-image', content: '~/assets/images/vector_image/vector8.jpg'},
				{ property: 'og-url', content: 'https://evoush.vercel.app'}
				]
			}
		},
		components: {
			Hero
		}
	}
</script>