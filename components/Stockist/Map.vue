<template>
	<div>
		<!-- <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p> -->
		<div style="height: 500px; width: 100%; padding:0; margin:0;">
			<client-only >

				<l-map
					ref="myMap"
					:zoom="zoom"
					:center="center"
					>
					<l-marker v-for="coordinate in coordinates" :lat-lng="coordinate" :key="coordinate.id" @click="GetStockist(coordinate.prov)">
						<l-popup>
							<center class="container">
								<span class="font-weight-bold bd-highlight">Evoush Stockist</span><br>
								<span class="badge badge-success">{{ coordinate.prov }}</span>
								<br>
								<img src="https://iconarchive.com/download/i2427/aha-soft/standard-city/post-office.ico" width="35">
							</center>
						</l-popup>
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

		<ShowStockist :showStockist="showStockist" :stockistData="stockistData"/>

	</div>
</template>

<style scoped>
	.leaflet-marker-pane:hover{
		transform: translateY(45deg);
	}
</style>

<script>
	import ShowStockist from './ShowStockist'
	export default {
		components: {
			ShowStockist
		},
		props: ['lon', 'lat', 'city'],
		data () {
			return {
				ip:'',
				showStockist: null,
				stockistData: {},
				coordinates: [],

				url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:
				'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				zoom: 5,
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
			this.GetCoordinate(),
			this.getLocation(this.ip),
			this.setUpMap(),
			this.checkWidth()
		},

		methods: {
			checkMobile(){
				if(this.$isMobile()){
					console.log(this.$isMobile())
					this.zoom = 4.3
				}

			},
			checkWidth(){
				let width = document.documentElement.clientWidth
				// console.log(width)
				if(width < 768){
					this.zoom = 4.3
				}else{
					this.zoom = 5
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
			},

			GetStockist(data){
				this.showStockist = true
				this.$toast(data)
				this.stockistData = data
			},

			GetCoordinate(){
				this.$axios.get('https://evoush-landing-api.herokuapp.com/api/data/coordinate/data')
				.then(res => {
					this.coordinates = res.data.data
				})
				.catch(err => {
					console.log(err.response)
				})
			}
		}
	}
</script>