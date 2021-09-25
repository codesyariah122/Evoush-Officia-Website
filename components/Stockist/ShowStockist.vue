<template>
	<div>
		<div v-if="showStockist" class="row justify-content-center stockist-data mt-5 mb-5">
			<div class="col-lg-8 col-xs-12">
				<div class="card card-stockist">
					<div class="card-header">
						<h4 class="text-center">Stokis Evoush {{ stockistData }}</h4>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">An item</li>
						<li class="list-group-item">A second item</li>
						<li class="list-group-item">A third item</li>
					</ul>
				</div>
			</div>
		</div>

		<div v-else class="row justify-content-center stockist-data mt-5 mb-5">
			<div class="col-lg-8 col-xs-12">
				<h4 class="text-primary text-center">
					Daftar Stokis akan muncul disini setelah marker di klik
				</h4>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props: ['showStockist', 'stockistData']
	}
</script>