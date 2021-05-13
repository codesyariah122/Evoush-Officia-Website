<template>
	<div class="card mb-3" style="max-width: 500px;">
		<div class="row no-gutters">
			<div class="col-md-4">
				<img :src="product.assets[0].url" :alt="product.name" class="img-responsive">
			</div>
			<div class="col-md-6">
				<div class="card-body">
					<h5 class="card-title"> {{product.name}} </h5> 
					<n-link
					:to="{
						name: 'products-permalink',
						params: { permalink: product.permalink },
					}" class="btn btn-success btn-sm"
					> View Product </n-link>
					<p class="card-text"><small class="text-muted">
						Category : {{product.categories[0].name}}
					</small></p>
					<p class="card-text" v-html="product.seo.description"></p>
					
					<footer>
						<div class="row">
							<div class="col-md-4">
								<h4 class="card-text"><small class="text-muted">
									{{product.price.formatted_with_symbol}}
								</small></h4>
							</div>
							<div class="col-md-8">
								<a :href="product.checkout_url.display" class="btn btn-primary btn-sm"> 
									Order Now
								</a>	
							</div>
					</div>
				</footer>
			</div>
		</div>
	</div>
</div>	

</template>

<script>
export default {
  props: ["product"],
};
</script>