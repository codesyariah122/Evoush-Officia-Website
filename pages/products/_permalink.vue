<template>
	<div>

		<div class="container">
			<div class="row justify-content-center">
				<!-- <pre>
					{{product}}
				</pre> -->
				<div class="col-12">
					<div class="card mb-3">
						<img :src="product.assets[2].url" class="card-img-top" :alt="product.name" :style="card.style.imgTop">
						<div class="card-body">
							<h3 class="card-title" style="font-family: Walkway; font-weight: 900;"> Evoush {{product.name}}</h3>
							<p class="card-text" v-html="product.description"></p>

							<div class="container">
								<div class="row">
									<div class="col-md-4" v-for="img in product.assets">
										<img :src="img.url" class="img-responsive">
									</div>
								</div>
								<div class="row">
									<div class="col-md-4">
										<p class="text-info">
											Category : {{product.categories[0].name}}
										</p>
									</div>
									<div class="col-md-4">
										<div v-if="product.inventory.managed == true">
											<p v-if="product.inventory.available > 1" class="text-success">
												Stock : {{product.inventory.available}}
											</p>
										</div>
									</div>
								</div>
							</div>

							<p class="card-text"><small class="text-muted">Harga : {{product.price.formatted_with_symbol}}</small></p>	
						</div>
					</div>
				</div>
			</div>

			<div class="row justify-content-center mb-5 mt-3">
				<div class="col-4">
					<n-link to="/product" class="btn btn-info">Kembali</n-link>
				</div>
				<div class="col-6">
					<a :href="product.checkout_url.checkout" class="btn btn-primary"> 
						Check Out
					</a>
				</div>
			</div>

		</div>

	</div>
</template>


<script>
	export default {
		data(){
			return{
				card: {
					style: {
						imgTop:{
							'width': '100%!important',
							'height': '100vh!important'
						}
					}
				}
			}
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