<template>
	<div>
		<div
		class="row portfolio-container"
		data-aos="fade-up"
		data-aos-delay="200"
		>
		<div v-for="product in cosmetics.slice().reverse()" :class="`${product.categories.map(d => d.name === 'Nutrisi' ? 'col-lg-4 portfolio-item filter-nutrisi' : 'col-lg-4 portfolio-item filter-kosmetik')}`">
			<div class="portfolio-wrap">
				<img
				:src="product.assets[0].url"
				class="img-fluid"
				:alt="product.name"
				/>
				<div class="portfolio-info">
					<h4>{{product.name}}</h4>
					<p v-for="category in product.categories">
					{{category.name}}</p>
					<div class="portfolio-links mt-3">
						<a
						:href="product.assets[0].url"
						data-gall="productGallery"
						class="venobox btn btn-sm btn-primary text-white"
						:title="product.name"
						><i class="bx bx-plus"></i
							></a>
							<nuxt-link
							:to="{name: `product-permalink`, params: {permalink: product.permalink}}"
							data-gall="portfolioDetailsGallery"
							data-vbtype="iframe"
							class="venobox btn btn-sm btn-success text-white"
							:title="`Detail ${product.name}`"
							><i class='bx bx-window-open'></i> Lihat</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['cosmetics']
	}
</script>