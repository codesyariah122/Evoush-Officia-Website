<template>
	<div>
		<Hero/>
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

			<product-list :products="products"></product-list>
			<h1 class="underline" style="margin-top: 1rem;"></h1>

			<ParallaxProduct/>
		</section>
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
	import Hero from '~/components/Productpage/Hero'
	import PanellHeader from '~/components/Productpage/PanellHeader'
	import ParallaxProduct from '~/components/Productpage/ParallaxProduct'

	export default {
		data(){
			return {
				title: 'Evoush::Product'
			}
		},
		components: {
			Hero,
			PanellHeader,
			ParallaxProduct
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