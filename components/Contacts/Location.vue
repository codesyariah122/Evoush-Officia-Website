<template>
	 <div style="height: 250px; width: 100%">
	 	<client-only>
	 		<l-map
		 		ref="myMap"
		 		:zoom="zoom"
		 		:center="center"
		 		>
		 		<l-marker :lat-lng="regionCenter">
		 			<l-popup class="mt-5">
		 				<center>
			 				<span class="bd-highlight font-weight-bold">PT. Pineleng Indah Cemerlang</span><br>
			 					<span class="badget badge-primary">Evoush Office</span><br>
			 				<img src="https://www.freeiconspng.com/thumbs/building-icon/building-icon-3.png" width="35">
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
</template>

<script>
	export default {
		data () {
			return {
				url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:
				'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				zoom: 14,
				center: {
					lat: -7.46097,
					lng: 112.74037,
				},
				bounds: null,
				regionCenter: [-7.46097, 112.74037],
				address: {
					long: '',
					display: '',
				},
				polyline: {
					color: 'red',
					latlngs: [],
				},

				staticAnchor: [16, 37],
				customText: "/assets/marker/map_marker.png",
				iconSize: 64

			}
		}
	}
</script>