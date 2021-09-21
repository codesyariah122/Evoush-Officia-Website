<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>

			<div class="row justify-content-center mt-5">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="section-title">
						<h2>Evoush Stockist</h2>
					</div>
				</div>
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<blockquote class="blockquote-footer">
						Berikut list stokist yang kami sajikan dalam bentuk peta map indonesia, list stokist yang tersedia merupakan stokist yang telah resmi tergabung dan terdaftar sebagai stokist evoush
					</blockquote>
				</div>
			</div>

		</div>


		<div class="row justify-content-center mt-5">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<!-- <img :src="map" class="img-fluid img-responsive"> -->
				<Stockist/>
			</div>
		</div>

	</div>
</template>


<script>
	import Stockist from '@/components/Stockist/index'

	export default {
		components: {
			Stockist
		},
		layout: 'pages',
		data(){
			return {
				map: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/bahan-stokis/img/Indonesia-Political-Map.jpg'
			}
		}
	}
</script>