<template>
  <div id="app">
    <NewWorkOut v-on:WorkOut-added="NewWorkOutAdded"></NewWorkOut>
    <WorkOutRecord v-bind:WorkOuts="WorkOuts"></WorkOutRecord>
    <WorkOutSummary v-if="dataLoaded" v-bind:chartData="WorkOutsChartData" v-bind:options="options"></WorkOutSummary>
  

  </div>
 

</template>

<script>
import NewWorkOut from './components/NewWorkOut.vue'
import WorkOutRecord from './components/WorkOutRecord.vue'
import WorkOutSummary from './components/WorkOutSummary.vue'

export default {
  name: 'app',
  data() {
    return{
      WorkOuts: [],
      WorkOutsChartData: {},
      dataLoaded:true
    }

  },
  components: {
    NewWorkOut,
    WorkOutRecord,
    WorkOutSummary
  },
    methods: {
    NewWorkOutAdded(WorkOut) {
      this.WorkOuts.push(WorkOut)
   /* this is were the name of the workout and the amount of times they did it */
    let labels = this.WorkOuts.map( w => w.type )  // but you need to put data from this.Workouts in this array
    let data = this.WorkOuts.map(w => w.reps)    // and the numbers go in in this array
  
  this.WorkOutsChartData = {
    labels: labels,
    datasets: [{
      label: "Workout",
      data: data
    }]
     
  }

  

      },
      loadWorkOutData(){
        this.WorkOuts = work 
        let lables = this.WorkOuts.map(work => work.when)
      }
    
    
  }
}

</script>

<style>

 

</style>
