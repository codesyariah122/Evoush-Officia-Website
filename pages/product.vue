<template>
	<div>
		<Navigation/>
		<Hero/>

		<!-- <div class="container">
			<div class="row justify-content-center">
				<div class="col-12">
					<pre>
						{{products}}
					</pre>
				</div>
			</div>
		</div> -->

		<section id="product">
			<!-- <div class="col-12 ml-5">
				<pre>
					{{JSON.stringify(merchant, null, 2)}}
				</pre>
				<pre>
					{{JSON.stringify(products, null, 2)}}
				</pre>
				<pre>
					{{JSON.stringify(categories, null, 2)}}
				</pre>
			</div> -->

			<PanellHeader :merchant="merchant"/>

			<h1 class="underline mb-5" style="margin-top: 5rem;"></h1>

			<PanelCosmetic/>
			<h1 class="underline mb-5" style="margin-top: 5rem;"></h1>

			<ParallaxBeauty/>

			<cosmetic-list :products="products"></cosmetic-list>
			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<PanelNutrisi/>
			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<ParallaxHealthy/>

			<nutrisi-list :products="products"></nutrisi-list>
			<h1 class="underline" style="margin-top: 5rem;"></h1>

			<ParallaxProduct/>			
		</section>
		<Footer/>
	</div>
</template>

<style scoped>
#product{
	width: 100%;
}
/* DESKTOP VERSION */
@media (min-width: 992px) { 
	#product{
		width: 100%;
	}
}
</style>

<script>
	import Navigation from '~/components/Headers/Navigation'
	import Hero from '~/components/Productpage/Hero'
	import PanellHeader from '~/components/Productpage/PanellHeader'
	import PanelCosmetic from '~/components/Productpage/PanelCosmetic'
	import ParallaxBeauty from '~/components/Productpage/ParallaxBeauty'
	import PanelNutrisi from '~/components/Productpage/PanelNutrisi'
	import ParallaxHealthy from '~/components/Productpage/ParallaxHealthy'
	import ParallaxProduct from '~/components/Productpage/ParallaxProduct'
	import Footer from '~/components/molecules/Footer'

	export default {
		data(){
			return {
				title: 'Evoush::Product'
			}
		},
		components: {
			Navigation,
			Hero,
			PanellHeader,
			PanelCosmetic,
			ParallaxBeauty,
			PanelNutrisi,
			ParallaxHealthy,
			ParallaxProduct,
			Footer
		},

		async asyncData({ $commerce }) {
			const merchant = await $commerce.merchants.about();
			const { data: categories } = await $commerce.categories.list();
			const { data: products } = await $commerce.products.list();
			return {
				merchant,
				categories,
				products,
			};
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
	}
</script>