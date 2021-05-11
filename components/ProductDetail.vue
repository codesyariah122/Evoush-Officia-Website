
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