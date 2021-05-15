<template>
	<div>
		<b-carousel
			id="carousel-1"
			v-model="slide"
			:interval="2500"
			controls
			indicators
			background="#ababab"
			img-width="1024"
			img-height="480"
			style="text-shadow: 1px 1px 2px #333;"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
			>

			<!-- Slides with image only -->
			<b-carousel-slide  v-for="asset in assets" :img-src="asset.url"></b-carousel-slide>

			
		</b-carousel>
	</div>
</template>

<script>
	export default {
		props:['assets'],
		data() {
			return {
				slide: 0,
				sliding: null
			}
		},
		methods: {
			onSlideStart(slide) {
				this.sliding = true
			},
			onSlideEnd(slide) {
				this.sliding = false
			}
		}
	}
</script>