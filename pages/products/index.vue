<template>
	<product-list :products="products"></product-list>
</template>


<script>
	export default{
		async asyncData({$commerce}){
			const {data: products} = await $commerce.products.list()
			return {
				products
			}

		}
	}
</script>
