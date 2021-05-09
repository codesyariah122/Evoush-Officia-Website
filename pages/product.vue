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
		data(){
			return {
				title: 'Evoush::Product'
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
				{ property: 'og-description', content: 'Rangkaian Produk-Produk Terbaik Evoush Yang Siap menjadi amunisi handal untuk kemajuan dalam perjalanan berbisnis anda di Evoush'},
				{ property: 'og-image', content: 'https://evoush.vercel.app/_nuxt/img/anim33.bb6a8af.gif'},
				{ property: 'og-url', content: 'https://evoush.vercel.app'}
				]
			}
		},
		components: {
			Hero
		}
	}
</script>