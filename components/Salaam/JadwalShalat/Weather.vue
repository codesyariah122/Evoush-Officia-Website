<template>
	<div>
		<div class="row justify-content-start">
			<div class="col-md-4 weather">
				<h6 class="mt-5">Cuaca : Kota {{ city }}</h6>
				<img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" class="img-fluid" width="100" height="100">
				<span :class="main.temp < 30 ? 'badge badge-success' : 'badge badge-primary'">{{ weather.description }} &nbsp; {{ main.temp }}&deg;C <br>
					<small v-if="main.temp < 28">Cuaca sedang nyaman selamat menikmati hari ini</small>
					<small v-else-if="main.temp > 28">
						Cuaca sedang panas, penuhi nutrisi tubuh dengan product nutrisi evoush.
					</small>
					<small v-else>
						Cuaca cukup hangat saatnya memanjakan diri dengan perawatan kulit <br> menggunakan product kosmetik evoush.
					</small>
				</span>
				<h6 v-if="main" class="text-info">

				</h6>
			</div>

			<!-- <pre>
				{{ weather }}
			</pre>
 -->

		</div>
	</div>
</template>

<script>
	export default{
		props: ['city'],

		data(){
			return{
				apiKey: '172033330b26104e83475e409303f1d7',
				weather: {},
				main: {
					temp: ''
				}
			}
		},

		mounted(){
			this.getWeather(this.city, this.apiKey)
		},

		methods: {
			getWeather(city, apiKey){
				this.$axios.get(`https://evoush-landing-api.herokuapp.com/api/data/check/weather/${apiKey}/${city}/EVOUSH.COM`)
				.then(res=>{
					console.log(res.data)
					this.weather = res.data.data.weather[0]
					this.main.temp = this.getCelcius(res.data.data.main.temp)
				})
			},

			getCelcius(num){
				num = parseFloat(num)
				return Math.ceil((num - 32) / 1.8)
			}
		}

	}
</script>

<style>
	.weather img{
		filter: drop-shadow(15px 15px 21px black);
	}
	.weather h6{
		margin-top: -1rem;
		margin-left: 1rem;
	}
</style>