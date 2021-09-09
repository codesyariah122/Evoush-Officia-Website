<template>
	<div>
		<ProductView :product="product"/>
	</div>
</template>

<script>
	export default{
		layout: 'product',

		async asyncData({params, $commerce}){
			const {permalink} = params
			const product = await $commerce.products.retrieve(permalink, {
				type: "permalink"
			})

			return {
				product
			}
		}
	}
</script>