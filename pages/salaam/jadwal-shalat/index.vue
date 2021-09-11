<template>
	<div>
		<div class="container">
			<div class="row justify-content-end mt-2 mb-5">
				<div class="col-lg-1 col-xs-6 col-sm-6">
					<nuxt-link class="btn btn-danger ml-3 mt-3" to="/#pages"><i class='bx bx-arrow-back'></i>Kembali</nuxt-link>
				</div>
			</div>

			<!-- <div class="row justify-content-center mt-5 mb-5">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<h5>Lihat Jadwal Shalat Kota Lainnya</h5>
				</div>

				<div class="col-lg-12 col-xs-12 col-sm-12">
					<form @submit.prevent="ChangeShalat">
						<div class="form-group">
							<select class="form-control" @change="ChangeCity">
								<option value="">-Pilih Provinsi-</option>
								<option v-for="province in provinces.provinsi" :value="province.id">
									{{ province.nama }}
								</option>
							</select>
						</div>

						<div v-if="show_city" class="form-group">
							<select class="form-control" id="city">
								<option v-for="city in citys" :value="city.nama">
									{{ city.nama }}
								</option>
							</select>
						</div>

						<div class="form-group">
							<button type="submit" class="btn btn-primary btn-lg">Lihat Jadwal Shalat</button>
						</div>
					</form>
				</div>
			</div> -->

			<!-- <ChangeJadwalShalat v-if="show_change" :location="locationChange" :query="queryChange" :timeNow="timeNowChange" :results="resultsChange"/> -->

			<JadwalShalatDefault :location="location" :query="query" :timeNow="timeNow" :results="results"/>

		</div>
	</div>
</template>

<script>
	import JadwalShalatDefault from '@/components/Salaam/JadwalShalat/JadwalShalatDefault'
	import ChangeJadwalShalat from '@/components/Salaam/JadwalShalat/ChangeJadwalShalat'

	export default{
		layout: 'pages',
		components: {
			JadwalShalatDefault,
			ChangeJadwalShalat
		},
		data(){
			return{
				show_change: false,
				show_city: false,
				change_result: null,
				provinces: [],
				citys: [],
				resultsChange: [],
				locationChange: {},
				queryChange: {},
				timeNowChange: ''
			}
		},
		async asyncData({$axios, $config}){
			const time = new Date()
			const apiKey = 'f4330440-77f5-4564-90f1-17a341b7ee2a'
			const ip = await $axios.get('https://api.ipify.org/?format=json')

			const testLocation = await $axios.get(`https://api.ipfind.com?ip=${ip.data.ip}&auth=${apiKey}&lang=id`)

			const location = await $axios.get(`https://ipapi.co/${ip.data.ip}/json/`)
			const kodeKota = await $axios.get(`https://api.banghasan.com/sholat/format/json/kota/nama/${location.data.city}`)
			const kode = kodeKota.data.kota[0].id
			const date = time.getDate() > 9 ? time.getDate() : `0${time.getDate}`
			const month = time.getMonth() > 9 ? time.getMonth()+1 : `0${time.getMonth()+1}`
			const year = time.getFullYear()
			const tglFormat = `${year}-${month}-${date}`

			const shalat = await $axios.get(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${kode}/tanggal/${tglFormat}`)

			const timeNow = {
				hours: time.getHours(),
				minutes: time.getMinutes()
			}

			// console.log(location)

			const results = shalat.data.jadwal.data
			const query = shalat.data.query

			return {
				testLocation,
				location,
				results,
				query,
				timeNow
			}
		},

		mounted(){
			this.getProvince()
		},

		methods: {
			getProvince(){
				this.$axios
				.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
				.then(res => {
					this.provinces = res.data
				})
				.catch(err => console.log(err.response))
			},

			ChangeCity(e){
				const id = e.target.value
				this.$axios
				.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)
				.then(res => {
					console.log(res.data)
					this.show_city = true
					this.citys = res.data.kota_kabupaten
					// console.log(this.citys)
				})
				.catch(err => console.log(err.response))
			},

			ChangeShalat(e){
				e.preventDefault()
				let city = document.querySelector('#city').value
				city = city.split(" ").pop();
				this.getLocation(city)
			},

			getLocation(city){
				this.axios(`https://api.banghasan.com/sholat/format/json/kota/nama/${city}`)
				.then(res => {
					let time = new Date()
					let code = res.data.kota[0].id
					const date = time.getDate() > 9 ? time.getDate() : `0${time.getDate}`
					const month = time.getMonth() > 9 ? time.getMonth()+1 : `0${time.getMonth()+1}`
					const year = time.getFullYear()
					const tglFormat = `${year}-${month}-${date}`
					this.getShalatData(city, code, tglFormat)
				})
				.catch(err => console.log(err.response))
			},

			getShalatData(city, id, tgl){
				this.$axios.get(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${id}/tanggal/${tgl}`)
				.then(res => {
					this.show_change = true
					this.resultsChange = res.jadwal
					this.queryChange = res.query
					this.locationChange = city
					this.timeNowChange = tgl
					console.log(locationChange)
				})
			},

		}
	}
</script>