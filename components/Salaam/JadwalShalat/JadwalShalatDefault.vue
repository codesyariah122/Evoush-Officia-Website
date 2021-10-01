<template>
	<div class="row justify-content-center mb-5">
		<div class="col-lg-12 col-xs-12 col-sm-12">
			<h4>Jadwal Shalat Kota {{ location.data.city }}</h4>
			<small class="text-muted">
				Tanggal : {{ query.tanggal }}
			</small>

			<Weather :city="location.data.city"/>
					<!-- <pre>
						{{ provinces }}
					</pre> -->

					<!-- <pre>
						{{ timeNow }}
					</pre> -->

					<ul class="list-group mt-5 mb-5">
						<div class="container">
							<li class="list-group-item active">
								Shalat selanjutnya : <strong>
									{{ nextNameShalat }} - {{ nextShalat }}
								</strong>
							</li>
						</div>
					</ul>

					<Location :lon="location.data.longitude" :lat="location.data.latitude" :city="location.data.city"/>

					<pre>
						{{ nextShalat }}
					</pre>



					 <!-- <pre>
					 	{{ shalatSaved }}
					 </pre> -->
					 <br>

					<ul class="list-group list-group-shalat mt-5 mb-5">
						<div class="container">
							<li :class="`list-group-item ${timeNow == results.subuh ? 'active' : ''}`" aria-current="true">
								<div class="row justify-content-center">
									<div class="col-lg-6 col-xs-4 col-sm-4">
										Subuh : <strong>{{ results.subuh }}</strong>
									</div>
									<div class="col-lg-6 col-xs-4 col-sm-4">
										<button class="btn btn-sm">
											<span class="badge badge-primary">Set Time</span>
										</button>
									</div>
								</div>
							</li>
							<li :class="`list-group-item ${timeNow == results.terbit ? 'active' : ''}`">
								<div class="row justify-content-center">
									<div class="col-lg-6 col-xs-4 col-sm-4">
										Terbit : <strong>{{ results.terbit }}</strong>
									</div>
									<div class="col-lg-6 col-xs-4 col-sm-4">
										<button class="btn btn-sm">
											<span class="badge badge-primary">Set Time</span>
										</button>
									</div>
								</div>
							</li>
							<li :class="`list-group-item ${timeNow == results.dhuha ? 'active' : ''}`">
								<div class="row justify-content-center">
									<div class="col-lg-6 col-xs-4 col-sm-4">
										Dhuha : <strong>{{ results.dhuha }}</strong>
									</div>
									<div class="col-lg-6 col-xs-4 col-sm-4">
										<button class="btn btn-sm">
											<span class="badge badge-primary">Set Time</span>
										</button>
									</div>
								</div>
							</li>
							<li :class="`list-group-item ${timeNow == results.dzuhur ? 'active' : ''}`">
								<div class="row justify-content-center">
									<div class="col-lg-6 col-xs-4 col-sm-4">
										Dzuhur : <strong>{{ results.dzuhur }}</strong>
									</div>
									<div class="col-lg-6 col-xs-4 col-sm-4">
										<button class="btn btn-sm">
											<span class="badge badge-primary">Set Time</span>
										</button>
									</div>
								</div>
							</li>
							<li :class="`list-group-item ${timeNow == results.ashar ? 'active' : ''}`">
								<div class="row justify-content-center">
									<div class="col-lg-6 col-xs-4 col-sm-4">
										Ashar : <strong>{{ results.ashar }}</strong>
									</div>
									<div class="col-lg-6 col-xs-4 col-sm-4">
										<button class="btn btn-sm">
											<span class="badge badge-primary">Set Time</span>
										</button>
									</div>
								</div>
							</li>
							<li :class="`list-group-item ${timeNow == results.maghrib ? 'active' : ''}`">
								<div class="row justify-content-center">
									<div class="col-lg-6 col-xs-4 col-sm-4">
										Maghrib : <strong>{{ results.maghrib }}</strong>
									</div>
									<div class="col-lg-6 col-xs-4 col-sm-4">
										<button class="btn btn-sm">
											<span class="badge badge-primary">Set Time</span>
										</button>
									</div>
								</div>
							</li>
							<li :class="`list-group-item ${timeNow == results.isya ? 'active' : ''}`">
								<div class="row justify-content-center">
									<div class="col-lg-6 col-xs-4 col-sm-4">
										Isya : <strong>{{ results.isya }}</strong>
									</div>
									<div class="col-lg-6 col-xs-4 col-sm-4">
										<button class="btn btn-sm">
											<span class="badge badge-primary">Set Time</span>
										</button>
									</div>
								</div>
							</li>
							<li :class="`list-group-item ${timeNow == results.imsak ? 'active' : ''}`">
								<div class="row justify-content-center">
									<div class="col-lg-6 col-xs-4 col-sm-4">
										Imsak : <strong>{{ results.imsak }}</strong>
									</div>
									<div class="col-lg-6 col-xs-4 col-sm-4">
										<button class="btn btn-sm">
											<span class="badge badge-primary">Set Time</span>
										</button>
									</div>
								</div>
							</li>
						</div>
					</ul>
				</div>
			</div>
</template>

<style>
/*.list-group{
	background-color: var(--bg-secondary);
	box-shadow: 15px 10px grey;
}*/
</style>

<script>
	import Location from './Location'
	import Weather from './Weather'

	export default{
		props: ['location', 'query', 'timeNow', 'results'],
		components: {
			Location,
			Weather
		},

		data(){
			return{
				nextShalat: '',
				nextNameShalat: '',
				shalat: '',
				shalatSaved: '',
			}
		},

		mounted(){
			this.getNextShalat()
			// console.log(this.nextShalat)
		},

		methods: {
			getNextShalat(){
				const date = new Date()
				const now = this.timeNow.hours

				const split = {
					isya: this.results.isya.split(':'),
					subuh: this.results.subuh.split(':'),
					syuruk: this.results.terbit.split(':'),
					dhuha: this.results.dhuha.split(':'),
					dzuhur: this.results.dzuhur.split(':'),
					ashar: this.results.ashar.split(':'),
					maghrib: this.results.maghrib.split(':')
				}
				const hours = {
					isya: parseInt(split.isya[0]),
					subuh: parseInt(split.subuh[0]),
					syuruk: parseInt(split.syuruk[0]),
					dhuha: parseInt(split.dhuha[0]),
					dzuhur: parseInt(split.dzuhur[0]),
					ashar: parseInt(split.ashar[0]),
					maghrib: parseInt(split.maghrib[0])
				}

				console.log(now < hours.isya)

				if(now < hours.isya){
					this.nextShalat = this.results.subuh
					this.nextNameShalat = "Subuh"
				}else if(now > hours.subuh){
					this.nextShalat = this.results.terbit
					this.nextNameShalat = "Syuruk"
				}else if(now > hours.syuruk){
					this.nextShalat = this.results.dhuha
					this.nextNameShalat = "Dhuha"
				}else if(now > hours.dhuha){
					this.nextShalat = this.results.dzuhur
					this.nextNameShalat = "Dzuhur"
				}else if(now > hours.dzuhur){
					this.nextShalat = this.results.ashar
					this.nextNameShalat = "Ashar"
				}else if(now > hours.ashar){
					this.nextShalat = this.results.maghrib
					this.nextNameShalat = "Maghrib"
				}else if(now > hours.maghrib){
					this.nextShalat = this.results.isya
					this.nextNameShalat = "Isya"
				}else{
					console.log("Not Detected")
				}

			},

		}
	}
</script>