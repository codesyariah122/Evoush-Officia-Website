<template>
	<section id="halo-dokter" class="portfolio-details">
		<div class="container" data-aos="fade-up">

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<blockquote class="text-primary blockquote-footer">
						Cuaca {{ city }}
					</blockquote>
					<Weather :city="city" />
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-12 col-xs-12 col-sm-12">
					<div class="section-title">
						<h2 class="portfolio-title">Anda Bertanya Dokter Menjawab</h2>
					</div>
				</div>

				<Dokter/>

			</div>

			<h1 class="underline" style="margin-top: 15rem;"></h1>

			<Covid :provinces="provinces"/>

		</div>
	</section>
</template>

<script>
	import Covid from './Covid'
	import Dokter from './Dokter'
	import Weather from './Weather'

	export default{
		props: ['provinces'],
		components: {
			Covid,
			Dokter,
			Weather
		},

		data(){
			return {
				ip: '',
				city: ''
			}
		},

		mounted(){
			this.getIp(),
			this.getLocation(this.ip)
		},

		methods: {
			getIp(){
				this.$axios
				.get('http://ip-api.com/json/')
				.then(res => {
					this.ip = res.data.query
    				// console.log(res)
    			})
    			.catch(err => console.log(err.message))
			},
			getLocation(ip){
				this.$axios
				.get(`https://ipapi.co/${ip}/json/`)
				.then(res => {
					this.country = res.data.country_name
					this.city = res.data.city
				})
				.catch(err => console.log(err.message))
			}
		}

	}
</script>