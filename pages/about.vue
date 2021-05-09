<template>
	<div>
		<Hero/>
		<section id="about">
			<!-- intro -->
			<h1 class="text-center">About Evoush</h1>
			
			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<!-- intents -->
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<h2>Images</h2>
					</div>

					<div class="col-md-6">
						<h2>Title</h2>
						<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					</div>
				</div>
			</div>

			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<!-- Parallax Home -->
			<ParallaxAbout/>

			<!-- intents -->
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<h2>Images</h2>
					</div>

					<div class="col-md-6">
						<h2>Title</h2>
						<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					</div>
				</div>
			</div>

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
	import ParallaxAbout from '~/components/Aboutpage/ParallaxAbout.vue'

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