
<template>
  <div>
    <apexchart
      :type="chartType"
      :options="chartOptions"
      :series="chartSeries ?? []"
      :height="height"
      :width="width"

    />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

// Define props to make the component dynamic
const props = defineProps({
  type: {
    type: String,
    default: 'bar' // Default to 'bar' if no type is provided
  },
  stacked: false // Default to false if not provided
  ,
  stackType: {
    type: String,
    default: '',},
  title: {
    type: String,
    default: 'Monthly Customers Data' // Default title if not provided
  },
  height: {
    type: Number,
    default: 300 // Default height if not provided
  },
  width: {
    type: Number,
    default: 400 // Default width if not provided
  },
  chartOptions: {
    type: Object,
    default: () => ({}),
  },
  chartSeries: {
    type: Array,
    required: true,
  },
  colors: {
    type: Array,
    default: () => ['#008FFB', '#00E396', '#FEB019'],
  },
  labels: {
    type: Array,
    default: () => [],
  }
})

// Chart type prop
const chartType = ref(props.type)

// Chart options using props to make it dynamic
const chartOptions = ref({
  chart: {
    toolbar: {
      show: true
    },
    zoom: {
      enabled: false
    },
    stacked: props.stacked, // Use the stacked prop dynamically
    stackType: props.stackType, // Use the stacked prop dynamically
  },
  plotOptions: {
    bar: {
      horizontal: false,
      // Set stacking type based on props
      stacked: props.stacked,
      // Setting the type of stacking
      dataLabels: {
        position: 'top' // Position of data labels
      }
    },
  },
  xaxis: {
    categories: props.chartOptions.categories || []
  },
  labels: props.labels, // Dynamically bind labels
  title: {
    text: props.title, // Use the title prop
    align: 'center'
  },
  dataLabels: {
    enabled: true
  },
  colors: props.colors, // Use the colors prop
});

</script>

<style scoped>
/* Add any component-specific styles here */
</style>
