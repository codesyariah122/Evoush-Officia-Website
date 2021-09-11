<template>
	<div class="row justify-content-center mb-5">
		<div class="col-lg-12 col-xs-12 col-sm-12">
			<h4>Jadwal Shalat Kota {{ location.data.city }}</h4>
			<small class="text-muted">
				Tanggal : {{ query.tanggal }}
			</small>

					<!-- <pre>
						{{ provinces }}
					</pre> -->

					<!-- <pre>
						{{ timeNow }}
					</pre> -->

					<Location :lon="location.data.longitude" :lat="location.data.latitude" :city="location.data.city"/>

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
	export default{
		props: ['location', 'query', 'timeNow', 'results'],
		components: {
			Location
		}
	}
</script>