<template>
	<section id="halo-dokter" class="portfolio-details">
		<div class="container" data-aos="fade-up">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div class="section-title">
					<h2 class="portfolio-title">Halo Dokter Evoush</h2>
				</div>
			</div>

			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div v-if="country_name == 'Indonesia'">
					<div class="row mt-5">
						<div class="col-lg-12 col-xs-12 col-sm-12">
							<p>Data covid 19 Indonesia Terupdate</p>
							<small class="text-danger">
								<i class='bx bx-shield-alt-2'></i> Waspadai hoax dalam penyebaran informasi data digital
							</small>
							<blockquote class="blockquote-footer">
								Pilih provinsi yang ingin anda cek data terupdatenya
							</blockquote>
						</div>
						<div class="col-lg-12 col-xs-12 col-sm-12 mt-2">
							<label for="exampleFormControlSelect1">Pilih Provinsi</label>
							<select class="form-control" id="exampleFormControlSelect1" @change="changeProvince">
								<option value="">-Pilih Province-</option>
								<option v-for="(item, index) in provinces" v-bind:value="index" >{{item.provinsi}}</option>
							</select>
						</div>


						<div class="col-lg-12 col-xs-12 col-sm-12 mt-5 mb-3">
							<BarChart :result="result"/>
							<pre>
								{{result}}
							</pre>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
	import BarChart from '@/components/HaloDokter/BarChart'

	export default{
		components: {
			BarChart
		},
		data(){
			return{
				ip: '',
				country_name: '',
				provinces:[],
				result: {
					
				}
			}
		},

		mounted(){
			this.getLocation(this.ip),
			this.getProvinsi()
		},

		methods: {
			getIp(){
				this.$axios
				.get('https://api.ipify.org/?format=json')
				.then(res => {
		        	// console.log(res)
		        	this.ip = res.data.ip
        		})
        		.catch(err => console.log(err.message))
			},
			getLocation(ip){
				this.$axios
				.get(`https://ipapi.co/${ip}/json/`)
				.then(res => {
					// console.log(res)
					this.country_name = res.data.country_name
				})
				.catch(err => console.log(err.message))
			},
			getProvinsi(){
				// this.$axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
				// .then(res => {
				// 	// console.log(res.data.provinsi)
				// 	this.provinces = res.data.provinsi
				// })
				this.$axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi/',  { crossdomain: true })
				.then(res => {
					const results = res.data.data
					const objData = Object.keys(results).map((key) => results[key])
					this.provinces = objData
				})
				.catch(err=>err.response)
			},
			changeProvince(event){
				let provinsi = event.target.value
				console.log(provinsi)
				
				this.$axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi/',  { crossdomain: true })
				.then(res => {
					// console.log(res.data.data)
					const results = res.data.data
					this.result = results[provinsi]

				})
				.catch(err => console.log(err.response))
			}
		}
	}
</script>