<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-5">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<h4 class="text-muted">Pilih Sumber Hadist</h4>
					<form @submit.prevent="ChangeHadist">
						<div class="form-group">
							<select class="form-control">
								<option v-for="hadist in hadists" :value="hadist.nama">
									{{ hadist.nama }}
								</option>
							</select>
						</div>
					</form>
				</div>
			</div>

			<CardHadist :results="resultsDefaults.data"/>

		</div>
	</div>
</template>

<script>
	import CardHadist from '@/components/Salaam/Hadists/CardHadist'

	export default {
		components: {
			CardHadist
		},
		layout: 'pages',
		data(){
			return {
				results: [],
				hadists: [
				{id:1, nama: 'Bukhari', endpoint: 'bukhari'},
				{id:2, nama: 'Abu Daud', endpoint: 'abu-daud'},
				{id:3, nama: 'Ahmad', endpoint: 'ahmad'},
				{id:4, nama: 'Darimi', endpoint: 'darimi'},
				{id:5, nama: 'Ibnu Majah', endpoint: 'ibnu-majah'},
				{id:6, nama: 'Nasai', endpoint: 'nasai'},
				{id:7, nama: 'Malik', endpoint: 'malik'},
				{id:8, nama: 'Muslim', endpoint: 'muslim'}
				]
			}
		},

		async asyncData({$axios}){
			const resultsDefaults = await $axios.get('https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/bukhari')
			console.log(resultsDefaults)
			return {
				resultsDefaults
			}
		},
		methods: {

		}
	}
</script>