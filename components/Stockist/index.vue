<template>
	<l-map style="height: 500px" :zoom="zoom" :center="center">
		<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
		<l-marker
			v-for="item in markers"
			:key="item.id"
			:lat-lng="item.position"
			:visible="item.visible"
			:draggable="item.draggable">
			<l-popup>Hello!</l-popup>
		</l-marker>
	</l-map>
</template>

<script>
	export default {
		data () {
			return {
				url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:
				'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				zoom: 4.3,
				center: {
					lat: -6.200000,
					lng: 106.816666,
				},
				bounds: null,
				address: {
					long: '',
					display: '',
				},
				region:[-6.200000, 106.816666],
				markers: [
					{
						id: "m1",
						position: { lat: 51.505, lng: -0.09 },
						draggable: true,
						visible: true
					},
					{
						id: "m2",
						position: { lat: 51.8905, lng: -0.09 },
						draggable: true,
						visible: false
					},
					{
						id: "m3",
						position: { lat: 51.005, lng: -0.09 },
						draggable: true,
						visible: true
					},
					{
						id: "m4",
						position: { lat: 50.7605, lng: -0.09 },
						draggable: true,
						visible: false
					}
				],

			}
		},

		methods: {
			OpenPopup(event){
				Vue.nextTick(() => {
					event.target.openPopup();
				})
			}
		}
	}
</script>