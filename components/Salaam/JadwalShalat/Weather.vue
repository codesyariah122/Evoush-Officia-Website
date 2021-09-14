<template>
	<div>
		<div class="row justify-content-start">
			<div class="col-md-4 weather">
				<img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" class="img-fluid" width="100" height="100">
				<small class="text-primary">{{ weather.description }}</small>
				<h6 v-if="main" class="text-info">
					{{ main.temp }}&deg;C
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

				this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
				.then(res=>{
					console.log(res.data)
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