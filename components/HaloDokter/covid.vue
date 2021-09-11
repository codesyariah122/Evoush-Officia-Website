<template>
	<section id="halo-dokter" class="portfolio-details">
		<div class="container" data-aos="fade-up">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<div class="section-title">
					<h2 class="portfolio-title">Halo Dokter Evoush</h2>
				</div>
			</div>

			<!-- <pre>
				{{ vaksin }}
			</pre> -->

			<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
				<h4 class="text-muted">Data Vaksinasi Indonesia</h4>
				<ul class="list-group">
					<li class="list-group-item">
						Total Sasaran : <strong>{{ vaksin.totalsasaran }}</strong>
					</li>
					<li class="list-group-item">
						Sasaran Vaksin SDMK : <strong>{{ vaksin.sasaranvaksinsdmk }}</strong>
					</li>
					<li class="list-group-item">
						Sasaran Vaksin Petugas Publik : <strong>{{ vaksin.sasaranvaksinpetugaspublik }}</strong>
					</li>
					<li class="list-group-item">
						Vaksinasi Tahap Ke 1 : <strong>{{ vaksin.vaksinasi1 }}</strong>
					</li>
					<li class="list-group-item">
						Vaksinasi Tahap ke 2 : <strong>{{ vaksin.vaksinasi2 }}</strong>
					</li>
					<li class="list-group-item">
						Last Update : <strong>{{ formatDate(vaksin.lastUpdate)}}</strong>
					</li>
				</ul>
			</div>

		<!-- 	<pre>
				{{ provinces }}
			</pre> -->

			<div v-if="country_name == 'Indonesia'">
				<div class="row mt-5">
					<div class="col-lg-12 col-xs-12 col-sm-12">
						<h4 class="text-muted">Data covid 19 Indonesia Terupdate</h4>
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
							<option v-for="(item, index) in provinces.data.data" v-bind:value="index" >{{item.provinsi}}</option>
						</select>
					</div>


					<div class="col-lg-12 col-xs-12 col-sm-12 mt-5 mb-3">

						<blockquote class="blockquote-footer mt-3 mb-5">
							<ul>
								<li style="text-transform: capitalize;">Provinsi : {{ results.provinsi }}</li>
								<li>Kasus Meninggal : <b>{{ results.kasusMeni }}</b></li>
								<li>Kasus Positif : <b>
									{{ results.kasusPosi }}
								</b></li>
								<li>Kasus Sembuh : <b>
									{{ results.kasusSemb }}
								</b></li>
							</ul>
						</blockquote>

						<div v-if="show">
							<!-- <bar-chart :data="barChartData" :options="barChartOptions" :height="200"></bar-chart> -->
							<!-- <ChartLineBase :bar-chart-data="barChartData"/> -->
							<ChartLineBase class="mt-5" :chartData="chartData" :height="130"/>
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
	</section>
</template>

<script>

	export default{
		props: ['provinces'],
		data(){
			return{
				ip: '',
				country_name: '',
				provinces:[],
				results: {},
				show: false,
				barChartData: null,
				barChartOptions: null,
				chartData: null,
				data: {
					value: [],
				},
				labels: {
					value: [],
				},
				radio: "value",
				vaksin: {}
			}
		},

		mounted(){
			this.getLocation(this.ip),
			// this.getProvinsi(),
			this.dataVaksin()
		},

		methods: {
			dataVaksin(){
				this.$axios
				.get('https://vaksincovid19-api.vercel.app/api/vaksin')
				.then(res => {
					this.vaksin = res.data
				})
				.catch(err => console.log(err.response))
			},
			formatDate(date) {
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},
			getIp(){
				this.$axios
				.get('https://api.ipify.org/?format=json')
				.then(res => {
		        	// console.log(res)
		        	this.ip = res.data.ip
		        	// this.getLocation(this.ip)
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
					this.results = results.data[provinsi]
					// this.getChartData(results.data[provinsi])
					this.fillData(results.data[provinsi])
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
			},

			fillData(data) {

				console.log(data)

				const labels = [
					{id:1, label: 'Kasus Meninggal', value: data.kasusMeni},
					{id:2, label: 'Kasus Positif', value: data.kasusPosi},
					{id:3, label: 'Kasus Sembuh', value: data.kasusSemb}
				]

				this.labels.value = labels.map(d => {
					return d.label
				})

				this.data.value = labels.map(d => {
					return d.value
				})

				this.chartData = {
					labels: this.labels[this.radio],
					datasets: [
						{
							label: data.provinsi,
							data: this.data[this.radio],
							borderWidth: 1,
							borderColor: 'salmon'
						}
					],
				}
			},
			updateChart() {
				this.$nextTick(() => {
					this.fillData();
				});
			}
		}
	}
</script>