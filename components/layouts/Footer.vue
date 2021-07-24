<template>
	<div>
		<h4>Evoush::Official&copy;{{date}}</h4>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				date: new Date().getFullYear()
			}
		}
	}
</script>