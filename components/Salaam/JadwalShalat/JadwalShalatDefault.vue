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

					<!-- <pre>
						{{ nextShalat }}
					</pre>

					 -->

					 <pre>
					 	{{ shalatSaved }}
					 </pre>
					 <br>

					<ul class="list-group mt-5 mb-5">
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
		},

		methods: {
			getNextShalat(){
				const now = this.timeNow.hours+':'+this.timeNow.minutes

				if(now > this.results.isya){
					this.nextShalat = this.results.subuh
					this.nextNameShalat = "Subuh"
				}else if(now > this.results.subuh){
					this.nextShalat = this.results.terbit
					this.nextNameShalat = "Syuruk"
				}else if(now > this.results.terbit){
					this.nextShalat = this.results.dhuha
					this.nextNameShalat = "Dhuha"
				}else if(now > this.results.dhuha){
					this.nextShalat = this.results.dzuhur
					this.nextNameShalat = "Dzuhur"
				}else if(now > this.results.dzuhur){
					this.nextShalat = this.results.ashar
					this.nextNameShalat = "Ashar"
				}else if(now > this.results.ashar){
					this.nextShalat = this.results.maghrib
					this.nextNameShalat = "Maghrib"
				}else if(now > this.results.maghrib){
					this.nextShalat = this.results.isya
					this.nextNameShalat = "Isya"
				}else{
					console.log("Not Detected")
				}

			},

		}
	}
</script>