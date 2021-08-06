<template>
	<div>
		{{audio}}
		<audio id="my_Audio" controls>
			<source :src="audio" type="audio/mp3">
		</audio>
	</div>
</template>

<script>
	export default {
		props: ['audio'],

		mounted(){
			document.getElementById("my_Audio").load();
		}
	}
</script>