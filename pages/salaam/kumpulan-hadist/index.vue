<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-5">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/salaam"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<h4 class="text-muted">Pilih Sumber Hadist</h4>
					<form id="select-hadist">
						<div class="form-group">
							<select name="Select" class="form-control" @change="ChangeHadist">
								<option value="" selected='selected'>-Pilih Hadist-</option>
								<option v-for="hadist in hadists" :value="hadist.endpoint" :data-name="hadist.nama">
									{{ hadist.nama }}
								</option>
							</select>
						</div>

						<!-- <div v-if="show_number" class="form-group">
							<select id="number-hadist" class="form-control" @change="FilterNumber">
								<option value="">-Pilih No Hadist-</option>
								<option v-for="number in numbers" :value="number.number">
									Hadist No - {{ number.number }}
								</option>
							</select>
						</div> -->

					</form>
				</div>
			</div>

			<!-- <pre>
				{{ results }}
			</pre> -->
			<div v-if="loading">
				<img src="https://cfr.lps.go.id/images/Animation/Progressbar.gif" class="img-fluid">
				<small class="blockquote-footer text-info">
					Loading ...
				</small>
			</div>

			<!-- <pre>
				{{ filter }}
			</pre> -->

			<CardHadist v-if="show_number" :results="numbers" :name="hadistName"/>

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
				loading: null,
				hadistName: '',
				endpoint: '',
				hadists: [
					{id:1, nama: 'Bukhari', endpoint: 'bukhari'},
					{id:2, nama: 'Abu Daud', endpoint: 'abu-daud'},
					{id:3, nama: 'Ahmad', endpoint: 'ahmad'},
					{id:4, nama: 'Darimi', endpoint: 'darimi'},
					{id:5, nama: 'Ibnu Majah', endpoint: 'ibnu-majah'},
					{id:6, nama: 'Nasai', endpoint: 'nasai'},
					{id:7, nama: 'Malik', endpoint: 'malik'},
					{id:8, nama: 'Muslim', endpoint: 'muslim'}
				],
				show_number: null,
				numbers: [],
				filter: {}
			}
		},

		// async asyncData({$axios}){
		// 	const defaults = await $axios.get('https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/bukhari')
		// 	// console.log(defaults)
		// 	return {
		// 		defaults
		// 	}
		// },

		methods: {
			ChangeHadist(e){
				this.show_number = false
				this.loading = true
				const name = document.forms['select-hadist'].elements['Select'].options[document.forms['select-hadist'].elements['Select'].selectedIndex].getAttribute('data-name')
				const endpoint = e.target.value
				this.hadistName = name
				this.endpoint = endpoint
				this.$axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${endpoint}`)
				.then(res => {
					this.show_number = true
					this.loading = false
					this.results = res.data
					this.numbers = res.data
					// console.log(this.results)
				})
			},

			FilterNumber(e){
				let key = e.target.value
				this.show_filter = false
				this.loading = true

				this.$axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${this.endpoint}`)
				.then(res => {
					this.loading = false
					this.show_filter = true
					// console.log(res.data)
					const results = res.data
					const result = results.map(data => {return data})
					const find = results.find(({number}) => number === key)
					console.log(find)
				})
			}
		}
	}
</script>