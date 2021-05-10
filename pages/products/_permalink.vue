<template>
	<div>
		<h1> {{product.name}} </h1>
		<p>
			{{product.price.formated_with_symbol}}
		</p>
	</div>
</template>


<script>
	export default {
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