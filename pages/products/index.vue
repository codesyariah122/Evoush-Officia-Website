<template>
	<div>
		<h1>Products</h1>
		<product-list :products="products"></product-list>
	</div>
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