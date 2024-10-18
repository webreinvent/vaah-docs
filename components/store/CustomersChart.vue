<!--<template>-->
<!--  <div>-->
<!--    <client-only>-->
<!--      <apexchart-->
<!--        type="bar"-->
<!--        :options="chartOptions"-->
<!--        :series="chartSeries"-->
<!--        height="300"-->
<!--        width="400"-->
<!--      />-->
<!--    </client-only>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue'-->
<!--import { onMounted } from 'vue'-->

<!--const chartOptions = ref({-->
<!--  chart: {-->
<!--    toolbar: {-->
<!--      show: true-->
<!--    },-->
<!--    zoom: {-->
<!--      enabled: false-->
<!--    }-->
<!--  },-->
<!--  xaxis: {-->
<!--    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']-->
<!--  },-->
<!--  title: {-->
<!--    text: 'Monthly Customers',-->
<!--    align: 'center'-->
<!--  },-->
<!--  dataLabels: {-->
<!--    enabled: true-->
<!--  },-->
<!--  colors: ['#008FFB', '#00E396', '#FEB019']-->
<!--})-->

<!--const chartSeries = ref([-->
<!--  {-->
<!--    name: 'Customers',-->
<!--    data: [30, 40, 45, 50, 49, 60, 70]-->
<!--  }-->
<!--  // ,-->
<!--  // {-->
<!--  //   name: 'Profit',-->
<!--  //   data: [20, 30, 25, 40, 45, 55, 65]-->
<!--  // }-->
<!--])-->

<!--onMounted(() => {-->
<!--  // Make sure everything initializes only after mounting-->
<!--})-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Add any component-specific styles here */-->
<!--</style>-->


<template>
  <div>
    <apexchart
      :type="chartType"
      :options="chartOptions"
      :series="chartSeries"
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
  }
})

// Chart type prop
const chartType = ref(props.type)

// Chart options for the chart
const chartOptions = ref({
  chart: {
    toolbar: {
      show: true
    },
    zoom: {
      enabled: false
    },
    stacked: props.stacked, // Use the stacked prop

  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  },
  labels: [],
  title: {
    text: props.title, // Use the title prop
    align: 'center'
  },
  dataLabels: {
    enabled: true
  },
  colors: ['#008FFB', '#00E396', '#FEB019']
})


watch(() => props.type, (newType) => {
  if (newType === 'pie' || newType === 'donut') {
    // Remove x-axis for pie and donut charts
    chartOptions.value.xaxis.categories = [];
    chartOptions.value.labels = ['Customers', 'New Customers']; // Set pie labels
  } else {
    // Reset categories for bar charts
    chartOptions.value.xaxis.categories = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    chartOptions.value.labels = []; // Clear labels for non-pie charts
  }
});


// Data series for the chart
const chartSeries = ref([
  {
    name: 'Customers',
    data: [30, 40, 45, 50, 49, 60, 70]
  },
  {
    name: 'New Customers',
    data: [2,4,6,8,10,12,14]
  }
])
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
