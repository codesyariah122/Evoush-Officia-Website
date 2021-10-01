<template>
	<div>
		<div style="height: 450px; width: 100%">
			<client-only>
					<l-map
					ref="myMap"
					:zoom="zoom"
					:center="center"
					>
					<l-marker :lat-lng="regionCenter">
						<l-popup>
							Jadwal Shalat <b>{{ city }}</b> <br>
							<center>
								<img src="https://img2.pngdownload.id/20190210/srp/kisspng-sultan-salahuddin-abdul-aziz-mosque-khanqah-5c6003e7b0d0d5.0809716515497963277243.jpg" class="img-fluid" width="50">
							</center>
						</l-popup>
					</l-marker>
					<l-polyline
					:lat-lngs="polyline.latlngs"
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
		}
	}
</script>