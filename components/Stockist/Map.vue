<template>
	<div>
		<h1>Your coordinates : </h1>
		<p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
		<div style="height: 450px; width: 100%">
			<client-only>
					<l-map
					ref="myMap"
					:zoom="zoom"
					:center="coordinates"
					>
					<l-marker :lat-lng="coordinates">
						<l-popup>{{ city }}</l-popup>
					</l-marker>
					<l-polyline
					:lat-lngs="coordinates"
					:color="polyline.color"
					></l-polyline>
					<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
				</l-map>
			</client-only>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['lon', 'lat', 'city'],
		data () {
			return {
				coordinates: {
					lat: 0,
					lng: 0
				},
				url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:
				'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				zoom: 10,
				center: {
					lat: this.lat,
					lng: this.lon,
				},
				bounds: null,
				regionCenter: [this.lat, this.lon],
				address: {
					long: '',
					display: '',
				},
				polyline: {
					color: 'red',
					latlngs: [],
				},

			}
		},
		created(){
			// get users coordinates
			this.$getLocation({})
			.then(coordinates => {
				console.log(coordinates)
				this.coordinates = coordinates
			})
			.catch(err => alert(err))
		}
	}
</script>