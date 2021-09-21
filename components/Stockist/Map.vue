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
					<l-marker v-for="coordinate in coordinates" :lat-lng="coordinate" :key="coordinate.id">
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
						id:1,
						lat: -7.536064,
						lng: 112.238402,
						prov: 'Jawa Timur'
					},
					// jawa tengah
					{
						id:2,
						lat: -7.150975,
						lng: 110.140259,
						prov: 'Jawa Tengah'
					},

					// jawa barat
					{
						id:3,
						lat: -7.090911,
						lng: 107.668887,
						prov: 'Jawa Barat'
					},

					// Jayapura
					{
						id:4,
						lat: -2.533333,
						lng: 140.716667,
						prov: 'Jayapura'
					},
					// Papua
					{
						id:5,
						lat: -4.269928,
						lng: 138.080353,
						prov: "Papua"
					},
					// Central Sulawesi
					{
						id:6,
						lat: -2.1333328,
						lng: 120.2833322,
						prov: "Central Sulawesi"
					},
					// Central Borneo
					{
						id:7,
						lat: 0.961883,
						lng: 114.554850,
						prov: "Central Borneo"
					},
					// Kalimantan Selatan
					{
						id:8,
						lat: -3.092642,
						lng: 115.283758,
						prov: "Kalimantan Selatan"
					},
					// Kalimantan Tengah
					{
						id:9,
						lat: -1.681488,
						lng: 113.382355,
						prov: "Kalimantan Tengah"
					},
					// Ambon
					{
						id:10,
						lat: -3.6553932,
						lng: 128.1907723,
						prov: "Ambon"
					},
					// Maluku
					{
						id:11,
						lat: -3.238462,
						lng: 130.145273,
						prov: "Maluku"
					},

					// Maluku utara
					{
						id: 12,
						lat: 1.570999,
						lng: 127.808769,
						prov: "Maluku Utara"
					},

					// Nort Sulawesi
					{
						id:13,
						lat: 1.474830,
						lng: 124.842079,
						prov: "North Sulawesi"
					},

					// South Sulawesi
					{
						id:14,
						lat: -5.147665,
						lng: 119.432731,
						prov: "South Sulawesi"
					},

					// ntb
					{
						id:15,
						lat: -8.652933,
						lng: 117.361648,
						prov: "Nusa Tenggara Barat"
					},
					// ntt
					{
						id:16,
						lat: -8.657382,
						lng: 121.079370,
						prov: "Nusa Tenggara Timur"
					},
					// bali
					{
						id:17,
						lat: -8.409518,
						lng: 115.188916,
						prov: "Bali"
					},
					// sumatera selatan
					{
						id:18,
						lat: -3.319437,
						lng: 103.914399,
						prov: "Sumatera Selatan"
					},
					// sumatera barat
					{
						id:19,
						lat: -0.739940,
						lng: 100.800005,
						prov: "Sumatera Barat"
					},
					// sumatera utara
					{
						id:20,
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
			this.checkMobile(),
			console.log(this.coordinates[0].zoom)
		},

		methods: {
			checkMobile(){
				if(this.$isMobile()){
					console.log(this.$isMobile())
					this.coordinates[0].zoom = 4.3
				}

			},
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
					// console.log(res)
				})
				.catch(err => console.log(err.message))
			},

			setUpMap(){
				const maps = this.coordinates.map(d => {
					// console.log(d)
					this.coordinate_data = d
				})
			}
		}
	}
</script>