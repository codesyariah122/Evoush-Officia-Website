<template>
	 <div style="height: 250px; width: 100%">
	 	<client-only>
	 		<l-map
		 		ref="myMap"
		 		:zoom="zoom"
		 		:center="center"
		 		>
		 		<l-marker :lat-lng="regionCenter">
		 			<l-popup>PT. Pineleng Indah Cemerlang (Evoush Office)</l-popup>
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
				zoom: 15,
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

			}
		}
	}
</script>