import Vue from 'vue'
import { Bar, Doughnut, Line, Pie, } from 'vue-chartjs'

const registerComponent = function(name, originalComponent) {
    Vue.component(
        name,
        {
            extends: originalComponent,
            props: ['data', 'options'],
            mounted() {
                this.renderChart(this.data, this.options)
            },
        }
    )
}

registerComponent('BarChart', Bar);
registerComponent('DoughnutChart', Doughnut);
registerComponent('LineChart', Line);
registerComponent('PieChart', Pie);