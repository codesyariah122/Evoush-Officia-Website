<template>
	<div>
		<!-- <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p> -->
		<div style="height: 500px; width: 100%; padding:0; margin:0;">
			<client-only >
				<!-- <pre>
					{{ center }}
				</pre> -->
				<l-map
					ref="myMap"
					:zoom="zoom"
					:center="center"
					>
					<l-marker v-for="coordinate in coordinates" :lat-lng="coordinate">
						<l-popup>{{ coordinate.prov }}</l-popup>
					</l-marker>
					<l-polyline
					:lat-lngs="coordinate"
					:color="polyline.color"
					></l-polyline>
					<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
				</l-map>
				<!-- <div v-for="coordinate in coordinates">
					{{ coordinate.lng }}
				</div> -->
			</client-only>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['lon', 'lat', 'city'],
		data () {
			return {
				ip:'',
				coordinates: [
					// jawa timur
					{
						lat: -7.536064,
						lng: 112.238402,
						prov: 'Jawa Timur'
					},
					// jawa tengah
					{
						lat: -7.150975,
						lng: 110.140259,
						prov: 'Jawa Tengah'
					},

					// jawa barat
					{
						lat: -7.090911,
						lng: 107.668887,
						prov: 'Jawa Barat'
					},

					// Papua
					{
						lat: -2.533333,
						lng: 140.716667,
						prov: 'Papua'
					},
					// Central Sulawesi
					{
						lat: -2.1333328,
						lng: 120.2833322,
						prov: "Central Sulawesi"
					},
					// Central Borneo
					{
						lat: 0.961883,
						lng: 114.554850,
						prov: "Central Borneo"
					},
					// Maluku
					{
						lat: -3.238462,
						lng: 130.145273,
						prov: "Maluku"
					},

					// Maluku utara
					{
						lat: 1.570999,
						lng: 127.808769,
						prov: "Maluku Utara"
					},

					// Nort Sulawesi
					{
						lat: 1.474830,
						lng: 124.842079,
						prov: "North Sulawesi"
					},

					// South Sulawesi
					{
						lat: -5.147665,
						lng: 119.432731,
						prov: "South Sulawesi"
					},

					// ntb
					{
						lat: -8.652933,
						lng: 117.361648,
						prov: "Nusa Tenggara Barat"
					},
					// ntt
					{
						lat: -8.657382,
						lng: 121.079370,
						prov: "Nusa Tenggara Timur"
					},
					// bali
					{
						lat: -8.409518,
						lng: 115.188916,
						prov: "Bali"
					},
					// sumatera selatan
					{
						lat: -3.319437,
						lng: 103.914399,
						prov: "Sumatera Selatan"
					},
					// sumatera barat
					{
						lat: -0.739940,
						lng: 100.800005,
						prov: "Sumatera Barat"
					},
					// sumatera utara
					{
						lat: 2.010856,
						lng: 98.978489,
						prov: "Sumatera Utara"
					}

				],

				url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:
				'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				zoom: 5.3,
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
			// this.$getLocation({})
			// .then(coordinates => {
			// 	console.log(coordinates)
			// 	this.coordinates = coordinates
			// })
			// .catch(err => alert(err))
			this.getLocation(this.ip),
			this.setUpMap(),
			console.log(this.lat)
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
					console.log(res)
				})
				.catch(err => console.log(err.message))
			},

			setUpMap(){
				const maps = this.coordinates.map(d => {
					console.log(d)
					this.coordinate_data = d
				})
			}
		}
	}
</script>