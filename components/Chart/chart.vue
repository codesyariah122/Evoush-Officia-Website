<template>
	<div>
		<ChartLine/>
	</div>
</template>


<script>
	import ChartLine from '@/components/ChartLineBase'
	export default {
		components: {
			ChartLine
		}
	}
</script>

<style>
.grid {
	display: grid;
	gap: 2rem;
}
@media (min-width: 768px) {
	grid-template-columns: 1fr 1fr;
}
</style>