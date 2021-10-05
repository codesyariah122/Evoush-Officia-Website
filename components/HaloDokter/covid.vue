<template>
	<div class="covid-info">
		<center>
			<button class="btn btn-info covid-info-btn mb-5" @click="ShowDataCovid">Informasi Covid-19 Indonesia</button>
		</center>

		<fieldset v-if="showData">
			<legend>Informasi Covid-19 Indonesia</legend>
			<div class="col-lg-12 col-xs-12 col-sm-12 mb-5">
				<ul class="list-group">
					<li class="list-group-item list-group-covid">
						Total Sasaran : <strong>{{ vaksin.totalsasaran }}</strong>
					</li>
					<li class="list-group-item list-group-covid">
						Sasaran Vaksin SDMK : <strong>{{ vaksin.sasaranvaksinsdmk }}</strong>
					</li>
					<li class="list-group-item list-group-covid">
						Sasaran Vaksin Petugas Publik : <strong>{{ vaksin.sasaranvaksinpetugaspublik }}</strong>
					</li>
					<li class="list-group-item list-group-covid">
						Vaksinasi Tahap Ke 1 : <strong>{{ vaksin.vaksinasi1 }}</strong>
					</li>
					<li class="list-group-item list-group-covid">
						Vaksinasi Tahap ke 2 : <strong>{{ vaksin.vaksinasi2 }}</strong>
					</li>
					<li class="list-group-item list-group-covid">
						Last Update : <strong>{{ formatDate(vaksin.lastUpdate)}}</strong>
					</li>
				</ul>

				<div class="col-lg-12 col-xs-12 mt-5">
					<a href="https://www.google.com/search?q=Lokasi+Vaksin+COVID-19+terdekat&source=hp&ei=YpUaYfjRNsv6rQG_2rT4Cw&iflsig=AINFCbYAAAAAYRqjctEk-SsvLRzDr5nF1OkFoilrapbg&oq=Lokasi+Vaksin+COVID-19+terdekat&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB46CAgAELEDEIMBOggIABCABBCxAzoLCAAQgAQQsQMQgwE6BQguEIAEOggILhCABBCxAzoLCAAQgAQQsQMQyQM6EAguELEDEMcBEKMCEAoQkwI6BwguEIAEEAo6BwgAEIAEEAo6BwgAELEDEAo6CggAELEDEIMBEAo6BAgAEAo6DQguEIAEEMcBEK8BEAo6CwguEIAEELEDEJMCOhEILhCABBCxAxCDARDHARCvAToLCC4QgAQQxwEQrwE6CQgAEMkDEBYQHlCrBli9a2DubWgFcAB4AYABvgKIAcgckgEJMjYuMTAuMC4xmAEAoAEBsAEA&sclient=gws-wiz&ved=0ahUKEwj4itGP_rXyAhVLfSsKHT8tDb8Q4dUDCAY&uact=5&utm_source=google&utm_medium=HPP&utm_campaign=covid_location_id_id_desktop&utm_id=covid_location_id_id_desktop" class="btn btn-info" target="_blank">Temukan lokasi vaksin COVID-19 dekat anda</a>
				</div>

			</div>

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
		</fieldset>
	</div>

</template>


<script>
	export default {
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
				vaksin: {},
				showData: false
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
			},

			ShowDataCovid(){
				this.showData = !this.showData
			}
		}
	}
</script>

<style>
	.covid-info fieldset{
		/*background: linear-gradient(to right, coral, lightcoral);*/
		padding: 12px 10px;
	}
	.covid-info legend {
		background-color: coral;
		cursor: pointer;
		box-shadow: 5px 10px #888888;
	}

	.covid-info-btn {
		background: linear-gradient(to right, coral, lightcoral);
		border: 2px solid white;
		box-shadow: 5px 5px silver;
	}

	.covid-info-btn:hover{
		background: linear-gradient(to left, salmon, lightsalmon);
		border: 2px solid #FFFDD0;
	}
</style>


