<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>	
			<div class="row justify-content-center">
				<div v-for="leader in leaders" class="col-lg-12">
					<img :src="leader.img" class="img-fluid imf-responsive mb-5 mt-3">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		layout: 'pages',
		data(){
			return{
				leaders: [
					{id:1, img: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/top-leaders/endang.jpg'},
					{id:2, img: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/top-leaders/hendri.jpg'},
					{id:3, img: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/top-leaders/saidah.jpg'},
					{id:4, img: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/top-leaders/rahmad.jpg'}
				]
			}
		}
	}
</script>