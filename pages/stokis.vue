<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>	

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<img :src="map" class="img-fluid img-responsive">
				</div>
			</div>
			
		</div>
	</div>
</template>


<script>
	export default {
		layout: 'pages',
		data(){
			return {
				map: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan-stokis/img/Indonesia-Political-Map.jpg'
			}
		}
	}
</script>