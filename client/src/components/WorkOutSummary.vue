<script>    
// The Chart.js formate was provide by James, Clara L
import {Bar, mixins} from 'vue-chartjs'
const { reactiveProp} = mixins 


export default {
    extends: Bar, 
    mixins: [ reactiveProp],
    props: {
        options:Object
    },
    mounted() {
        console.log(this.chartData)
        this.renderChart(this.chartData, this.options)
    }
}


</script>