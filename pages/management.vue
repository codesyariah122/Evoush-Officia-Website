<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-3 mb-3">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>	
		</div>

		<Management :managements="managements" class="mt-3 mb-5"/>

		<h1 class="underline" style="margin-top: 5rem;"></h1>

		<Contact/>

	</div>
</template>

<script>
	import Content from '@/components/Management/index'
	import Contact from '@/components/Landing/Contact'

	export default {
		layout: 'pages',
		components: {
			Content, 
			Contact
		},
		head(){
			return{
				title: 'Evoush::Management'
			}
		},
		data(){
			return{
				managements: [
					{id: 1, name: 'Muslichun Iskandar', jabatan: 'Direktur Utama', url: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/management/PAK%20MUS.jpg'},
					{id: 2, name: 'Mayjen TNI H.M. Syafei Kasno', jabatan: 'Komisaris Utama', url: 'https://raw.githubusercontent.com/codesyariah122/bahan-evoush/main/images/management/PAK%20SYAFEI.jpg'}
				]
			}
		},
		mounted(){
			this.$nextTick(() => {
				this.$nuxt.$loading.start()
				setTimeout(() => this.$nuxt.$loading.finish(), 2000)
			})
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
