
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
    default: 'bar'
  },
  stacked: false
  ,
  stackType: {
    type: String,
    },
  title: {
    type: String,
    default: 'Bar Chart'
  },
  height: {
    type: [Number, String],
    default: 'auto'
  },
  width: {
    type: Number,
    default: '100%'
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

  },
  labels: {
    type: Array,

  },
  titleAlign: {
    type: String,
    default: 'center'
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  dataLabelsPosition: {
    type: String,
    default: 'top',
  },
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
    stacked: props.stacked,
    stackType: props.stackType,
  },
  plotOptions: {
    bar: {
      horizontal: props.horizontal,
      stacked: props.stacked,
      dataLabels: {
        position: props.dataLabelsPosition,
      },
    },
  },
  xaxis: {
    categories: props.chartOptions.categories || []
  },
  labels: props.labels || [],
  title: {
    text: props.title,
    align: props.titleAlign
  },
  dataLabels: {
    enabled: true
  },
  colors: props.colors,
});

</script>

<style scoped>
/* Add any component-specific styles here */
</style>
