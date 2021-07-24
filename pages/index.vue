<template>
	<div>
		<div class="container">
			<div class="row justify-content-center mt-5">
				<div class="col-12 col-lg-12 col-xs-12 col-sm-12">
					<div class="float-right">
						<ColorModePicker/>
					</div>
				</div>
			</div>
		</div>

		<Product :products="results"/>

		<Members :members="members"/>

	</div>
</template>

<script>
	import Product from '~/components/Landing/Product'
	import Members from '~/components/Landing/Members'
	import ColorModePicker from '@/components/ColorModePicker'

	export default {
		async asyncData({$axios, $config}){
			const results = await $axios.$get('/product/all')
			const members = await $axios.$get('/evoush/member-list')
			return { results, members }
		},
		components: {
			Product,
			Members,
			ColorModePicker
		},
		layout: 'default',
		head(){
			return {
				title: "Evoush::Official"
			}
		}
	}
</script>
