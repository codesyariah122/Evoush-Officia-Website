<template>
	<div>
		<div class="row justify-content-start">
			<div v-if="main.temp < 30" class="col-md-8">
				<small class="text-danger">Jaga kondisi tubuh</small>
			</div>
		</div>
		<div class="row justify-content-start">
			<div class="col-md-4 weather">
				<img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" class="img-fluid" width="100" height="100">
				<span :class="main.temp < 30 ? 'badge badge-success mr-3' : 'badge badge-primary mr-3'"></span  >
				<h3 v-if="main" :class="main.temp < 30 ? 'badge badge-success' : 'badge badge-primary'">{{ weather.description }}
					&nbsp;{{ main.temp }}&deg;C
				</h3>
			</div>

			<!-- <pre>
				{{ weather }}
			</pre> -->


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

				this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
				.then(res=>{
					// console.log(res.data)
					this.weather = res.data.weather[0]
					this.main.temp = this.getCelcius(res.data.main.temp)
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