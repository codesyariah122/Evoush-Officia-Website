<template>
	<div>
		<ProductView :product="product"/>

		<div class="row justify-content-center">
			<fieldset class="mb-5">
				<legend>Rating</legend>
				<ul class="rating">
					<li v-for="(index, rating) in 5" class="ml-3" :key="index" @click="getRating(index)">
						<i class='bx bx-star'></i> <br>
						<small class="text-success ml-3">{{ rating }}</small>
					</li>
				</ul>
			</fieldset>
		</div>

	</div>
</template>

<script>
	export default{
		layout: 'product',

		data(){
			return {
				rating: 0
			}
		},

		async asyncData({params, $commerce}){
			const {permalink} = params
			const product = await $commerce.products.retrieve(permalink, {
				type: "permalink"
			})

			return {
				product
			}
		},

		methods: {
			getRating(index){
				alert(index)
			}
		}
	}
</script>

<style>
	.rating{
		display: flex!important;
		flex-direction: column;
		list-style: none;
		padding: 25px;
		flex-direction: row;
	}
	.rating i {
		font-size: 45px;
	}
	.rating li:hover{
		color:gold!important;
	}
</style>