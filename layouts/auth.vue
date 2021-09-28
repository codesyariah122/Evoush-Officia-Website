<template>
	<div>
		<main>
			<Nuxt/>
		</main>
	</div>
</template>


<script>
	export default {
		mounted(){
			$crisp.push(['do', 'chat:hide'])
		}
	}
</script>


<style>
	:root {
		--primary-color: #fff;
	}
</style>