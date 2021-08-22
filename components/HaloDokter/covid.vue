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
							<div v-if="show">
								<bar-chart :data="barChartData" :options="barChartOptions" :height="200"></bar-chart>
							</div>
							<div v-else>
								<small class="text-danger">
									Pilih nama provinsi
								</small>
							</div>
						</div>


					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>

	export default{

		data(){
			return{
				ip: '',
				country_name: '',
				provinces:[],
				results: {},
				show: false,
				barChartData: null,
				barChartOptions: null
			}
		},

		created(){
			this.getProvinsi()
		},

		mounted(){
			this.getLocation(this.ip)
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
				// console.log(provinsi)

				// console.log(provinsi)

				this.$axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi/',  { crossdomain: true })
				.then(res => {
					this.show = true
					const results = res.data
					// this.results = results.data[provinsi]
					this.getChartData(results.data[provinsi])
				})
				.catch(err => console.log(err.response))
			},

			getChartData(data){
				this.barChartData = {
					labels: [
						`provinsi : ${data.provinsi}`
					],
					datasets: [
					{
						label: 'Positif',
						data: [data.kasusPosi],
						backgroundColor: '#003f5c'
					},
					{
						label: 'Sembuh',
						data: [data.kasusSemb],
						backgroundColor: '#2f4b7c'
					},
					{
						label: 'Meninggal',
						data: [data.kasusMeni],
						backgroundColor: '#665191'
					}
					]
				}

				this.barChartOptions = {
					responsive: true,
					legend: {
						display: false
					},
					title: {
						display: true,
						text: data.provinsi,
						fontSize: 24,
						fontColor: '#6b7280'
					},
					tooltips: {
						backgroundColor: '#17BF62'
					},
					scales: {
						xAxes: [
						{
							gridLines: {
								display: true
							}
						}
						],
						yAxes: [
						{
							ticks: {
								beginAtZero: false
							},
							gridLines: {
								display: false
							}
						}
						]
					}
				}
			}
		}
	}
</script>