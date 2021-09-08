<template>

	<pre>
		{{ barChartData }}
	</pre>

	<!-- <ChartLineBase :chart-data="barchartData"/> -->

</template>

<script>
	import ChartLineBase from '@/components/ChartLineBase'

	export default{
		props: ['barChartData']
	}
</script>