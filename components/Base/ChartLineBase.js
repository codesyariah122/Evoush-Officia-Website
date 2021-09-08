import { Line, mixins } from 'vue-chartjs'

const {reactiveProp} = mixins

export default {
	extends : Line,
	mixins: [reactiveProp],
	props: ["ChartData"],

	data(){
		return {
		 	options: {
		 		scales: {
		 			yAxes: [
		 			{
		 				ticks: {
		 					beginAtZero: true
		 				}
		 			}
		 			]
		 		},
		 		responsive: true
		 	}
		}
	},

	mounted(){
		this.renderChart(this.chartData, this.options)
	}
}