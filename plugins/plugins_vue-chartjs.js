import Vue from 'vue'
import { Bar, Doughnut, Line, Pie, mixins} from 'vue-chartjs'

const registerComponent = function(name, originalComponent) {
    Vue.component(
        name,
        {
            extends: originalComponent,
            props: ['data', 'options'],
            mixins: [mixins.reactiveProp],
            mounted() {
                this.renderChart(this.data, this.options)
            },
            watch: {
               options () {
                this.renderChart(this.data, this.options);
                }
            }
        }
    )
}

registerComponent('BarChart', Bar);
registerComponent('DoughnutChart', Doughnut);
registerComponent('LineChart', Line);
registerComponent('PieChart', Pie);