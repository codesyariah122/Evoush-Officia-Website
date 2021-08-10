<template>
	<div>
		<br><br><br>
		<bar-chart :data="barChartData" :options="barChartOptions" :height="200" />
	</div>
</template>


<script>
	// import {Bar} from 'vue-chartjs'
	export default{
		props: ['result'],
		data(){
			return {
				barChartData: {
					labels: [
						'Kasus Positif',
						'Kasus Sembuh',
						'Kasus Meninggal'
					],
					datasets: [
					{
						label: 'Positif',
						data: [this.result.kasusPosi],
						backgroundColor: '#003f5c'
					},
					{
						label: 'Sembuh',
						data: [this.result.kasusSemb],
						backgroundColor: '#2f4b7c'
					},
					{
						label: 'Meninggal',
						data: [this.result.kasusMeni],
						backgroundColor: '#665191'
					}
					]
				},
				barChartOptions: {
					responsive: true,
					legend: {
						display: true
					},
					title: {
						display: true,
						text: this.result.provinsi,
						fontSize: 24,
						fontColor: '#6b7280'
					},
					tooltips: {
						backgroundColor: '#17BF62'
					},
					scales: {
						xAxes: [
						{
							gridLines: {
								display: true
							}
						}
						],
						yAxes: [
						{
							ticks: {
								beginAtZero: true
							},
							gridLines: {
								display: true
							}
						}
						]
					}
				}
			}
		},

	}
</script>