<template>
  <div>
    <apexchart
      type="bar"
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ApexCharts from 'vue3-apexcharts' // Import ApexCharts

// Chart options for the bar chart
const chartOptions = ref({
  chart: {
    toolbar: {
      show: true
    },
    zoom: {
      enabled: false
    }
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  },
  title: {
    text: 'Monthly Sales Data',
    align: 'center'
  },
  dataLabels: {
    enabled: true
  },
  colors: ['#008FFB', '#00E396', '#FEB019']
})

// Data series for the bar chart
const chartSeries = ref([
  {
    name: 'Sales',
    data: [30, 40, 45, 50, 49, 60, 70]
  },
  {
    name: 'Profit',
    data: [20, 30, 25, 40, 45, 55, 65]
  }
])
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
