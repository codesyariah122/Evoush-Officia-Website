<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-3 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>
		</div>

		<Management :managements="managements" :index="index" class="mt-3 mb-5"/>

	</div>
</template>

<script>
	export default {
		layout: 'pages',

		head(){
			return {
				title: "Evoush::Management",
				link: [
					{hid: 'canonical', rel: 'canonical', href: 'https://evoush.com/management'}
				],
				meta: [
					// { hid: 'description', name: 'Evoush Indonesia', content: 'Your Eternal Future' },
					// { hid: 'description', name: 'description', content: 'Bisnis Evoush Indonesia'},
					// { hid: 'keywords', name: 'keywords', content: 'Bisnis Evoush Bisnis Menjanjikan'},
					{ hid: 'description', name: 'description', content: 'Evoush::Official | Management::Page'},
					{ hid: 'keywords', name: 'keywords', content: 'Bisnis Network Marketing Zaman Now Ya Evoush Indonesia'},
					{ hid: 'author', name: 'author' , content: 'Evoush::Indonesia | Official::Website'},
					{ hid: 'og:type', property: 'og:type', content: 'website'},
					{ hid: 'og:url', property: 'og:url', content: 'https://evoush.com/management'},
					{ hid: 'og:title', property: 'og:title', content: 'Evoush Indonesia'},
					{ hid: 'og:site_name', property: 'og:site_name', content: 'Evoush::Official | Evoush::Website'},
					{ hid: 'og:description', property: 'og:description', content: 'Your Eternal Future'},
					{ hid: 'og:image', property: 'og:image', content: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/management/compro(Depan)_00064.jpg'},
					{ hid: 'og:image:width', property: 'og:image:width', content: '600'},
					{ hid: 'og:image:height', property: 'og:image:height', content: '598'}
				],
			}
		},
		data(){
			return{
				managements: [
					{id: 1, name: 'Mayjen TNI H.M. Syafei Kasno', jabatan: 'Komisaris Utama', img: 'https://raw.githubusercontent.com/evoush12/bahan_evoush/main/management/edit2.png', hero: 'https://dvkconsultants.ae/wp-content/uploads/2018/02/DIGITAL-HUMAN-RESOURCE-MANAGEMENT.jpg', popup: 'https://raw.githubusercontent.com/evoush12/bahan-evoush/main/images/management/1QQ.jpg', fb: '', ig: '', twitter: ''},
					{id: 2, name: 'Muslichun Iskandar', jabatan: 'Direktur Utama', img: 'https://github.com/evoush12/bahan_evoush/blob/main/management/Pak%20Mus.png?raw=true', hero: 'https://www.wallpapertip.com/wmimgs/16-169280_human-resource-management-hr.jpg', popup: 'https://raw.githubusercontent.com/evoush12/bahan-evoush/main/images/management/1QQQ.jpg', fb: '', ig: '', twitter: ''}
				],
				index: null
			}
		},
		mounted(){
			// this.$nextTick(() => {
			// 	this.$nuxt.$loading.start()
			// 	setTimeout(() => this.$nuxt.$loading.finish(), 2000)
			// })
		}
	}
</script>


<style scoped>
.underline:after{
	content: '';
	display: block;
	margin: auto;
	margin-top: 15px;
	position: relative;
	margin-bottom:2rem;
	width: 100px;
	height: 2px;
	background:rgb(255, 99, 78);
}

</style>
