<template>
	<ProductDetail :product="product" />
</template>


<script>
	import ProductDetail from '~/components/Productpage/ProductDetail'

	export default {
		components: {
			ProductDetail
		},
		
		async asyncData({ params, $commerce }) {
			const { permalink } = params;
			const product = await $commerce.products.retrieve(permalink, {
				type: "permalink",
			});
			return {
				product,
			};
		},
	}
</script>