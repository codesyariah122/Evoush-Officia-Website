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
		 				<a href="https://www.google.com/maps/uv?pb=!1s0x2dd7e76c380bb085%3A0xde70ecccd2934b8c!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPz2tbqGOYpGWKrYVDp8b7AYf9Iwq0j-JpvrQan%3Dw284-h160-k-no!5sevoush%20pt.pineleng%20indah%20cemerlang%20-%20Penelusuran%20Google!15sCgIgAQ&imagekey=!1e10!2sAF1QipOLXuxd9_2CCaYX10-DtE9VdQVJVGsj8wbKdUh1&hl=id&sa=X&ved=2ahUKEwigwbCotfT0AhXJkNgFHTzXBbkQoip6BAggEAM" target="_blank" class="mt-5  btn btn-primary rounded-pill text-white btn-block btn-sm">
		 					View Location
		 				</a>
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
				customText: "/assets/marker/building-icon.png",
				iconSize: [99,99]

			}
		}
	}
</script>