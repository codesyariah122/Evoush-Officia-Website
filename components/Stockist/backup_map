<template>
	<div>
		<h1>Your coordinates : </h1>
		<p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
		<!-- <GMap
			:center="{lat: -6.200000, lng: 106.816666}"
			:zoom="7"
			style="width: 640px; height: 360px;"
		></GMap> -->
	</div>
</template>

<script>
	export default{
		data(){
			return{
				coordinates: {
					lat: 0,
					lng: 0
				}
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