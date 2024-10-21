---
data: [
{
name: 'Orders',
data: [30, 40, 45, 50, 49, 60, 70]
},

{
name: 'New Orders',
data: [10, 20, 30, 40, 50, 60, 70]
}

]


data_2: [
{
name: 'Customers',
data: [30, 40, 45, 50, 49, 60, 70]
},

{
name: 'Active Customers',
data: [10, 20, 30, 40, 50, 60, 70]
}

]


data_bar: [
{
name: 'Customers',
data: [30, 40, 45, 50, 49, 60, 70]
}

]

data_pie: [30, 40, 45, 50, 49, 60, 70]

data_axis: {
categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
}

data_labels: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
}


---

## Overview
The Bar Chart is an essential visualization tool for displaying categorical data. In this documentation, we will 
focus on how to effectively represent customer count data using a bar chart, allowing for easy comparison across different time periods or categories.

## Reusable  Components
The bar chart is designed as a reusable component. This means you can easily adapt it for different
datasets by changing the naming conventions and data inputs according to your CRUD operations.


## Customers Count Over A Period In Bar Chart Component

::preview{component='<CustomersCountBarChart/>' path='./components/store/CustomersChart.vue' }

<div class="flex  justify-center items-center">

:customers-count-bar-chart{type='bar' title='Simple Bar Chart' :chartSeries="data_bar"}


:customers-count-bar-chart{type='line' :chartOptions="data_axis" title='Monthly Customer Data Line Chart' height=300 :chartSeries="data_bar"}

</div>


#shortCode

```vue

<CustomersCountBarChart type="bar" title='Simple Bar Chart'  :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }"/>
<CustomersCountBarChart type="line" title='Simple Line Chart'  :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }"
                        :chartSeries="[ { name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] }]" />
```


#code

```vue


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
  },
  stacked: false 
  ,
  stackType: {
    type: String,
    },
  title: {
    type: String
  },
  height: {
    type: Number
  },
  width: {
    type: Number,
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
    default: () => [],
  },
  labels: {
    type: Array,
    default: () => [],
  }
})

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
      horizontal: false,
      stacked: props.stacked,
      dataLabels: {
        position: 'top' 
      }
    },
  },
  xaxis: {
    categories: props.chartOptions.categories || []
  },
  labels: props.labels, 
  title: {
    text: props.title, 
    align: 'center'
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



```





#expandCode

@@@ ./components/store/CustomersCountBarChart.vue

::


**API Endpoint**

```php
// routes/api.php

use App\Http\Controllers\YourController;

Route::get('/charts/data', [YourController::class, 'getChartData']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function getChartData(Request $request)
    {
        try{
            return {model_namespace}::getChartData($request);
        }catch (\Exception $e){
            $response = [];
            $response['success'] = false;
            if(env('APP_DEBUG')){
                $response['errors'][] = $e->getMessage();
                $response['hint'] = $e->getTrace();
            } else{
                $response['errors'][] = trans("vaahcms-general.something_went_wrong");
            }
            return $response;
        }
    }
```

**Model Method**

```php
public static function getChartData(Request $request)
{
    // Extract model namespace and other dynamic parameters from the request
    $date_column = () // Default to 'created_at'
    $count = (); // Default to 'COUNT'
    $rows = (); // Default to all rows
    $group_by_column = (); // Default to grouping by date

    

    // Fetch data dynamically from the specified model
    $chartData = {model_name_space}::select($date_column)
        ->selectRaw("$group_by_column as date") // Dynamically apply group-by column
        ->selectRaw("$date_column($date_column) as count") // Dynamic aggregate function and column
        ->groupBy('date') // Group by date (or other field passed)
        ->orderBy('date') // Order by date
        ->get();

    // Prepare the data for the chart in the desired format
    $data = $chart_data->map(function ($item) {
        return [
            'x' => $item->date, // Date as X-axis
            'y' => [$item->total_count, $item->active_count] // specified format for simple bar and stcked, grouped bar chart
        ];
    });

    // Return the data along with dynamic chart options
    return [
        'data' => $data, // Use 'data' key to match the specified format
        'newOptions' => [
            'chart' => [
                'id' => 'dynamic-chart', // Dynamic chart ID
            ],
            'xaxis' => [
                'type' => 'datetime', // Set x-axis type based on date
            ],
        ],
    ];
}

```

### Grouped

::preview{component='<CustomersCountBarChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-count-bar-chart{type='bar' width=600 title='Grouped Bar Chart' height=300 :chartOptions="data_axis" :chartSeries="data_2"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="bar" title='Grouped Bar Chart' width=600 height=300 :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] },
{ name: 'Active Customers', data: [10, 20, 30, 40, 50, 60, 70] }
]" :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" />
```

::

### Stacked

::preview{component='<CustomersCountBarChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-count-bar-chart{type='bar' title='100% Stacked Bar Chart' width=300 stacked stackType='100%'  :chartOptions="data_axis" :chartSeries="data_2"}
:customers-count-bar-chart{type='bar' title='Stacked Bar Chart' stacked  width=300  :chartOptions="data_axis" :chartSeries="data_2"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="bar" title='Stacked Bar Chart' width=600 height=300 stacked stackType='100%' :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] },
{ name: 'Active Customers', data: [10, 20, 30, 40, 50, 60, 70] }
]" :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" />
```

::


>Note-> For Read More About Bar Chart [Visit Here](https://apexcharts.com/){_target_blank}.

## Props

<div class="relative overflow-x-auto rounded-lg border dark:border-0">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Default
                </th>
                <th scope="col" class="px-6 py-3 min-w-72 w-full">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">type</code>
                </th>
                <td class="px-6 py-4">
                    <code>string</code>
                </td>
                <td class="px-6 py-4">
                    <code>'line'</code>
                </td>
                <td class="px-6 py-4">
                    The chart type which is a mandatory prop to specify
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">series</code>
                </th>
                <td class="px-6 py-4">
                    <code>Array</code>
                </td>
                <td class="px-6 py-4">
                    <code>undefined</code>
                </td>
                <td class="px-6 py-4">
                    The data which you want to display in the chart
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">width</code>
                </th>
                <td class="px-6 py-4">
                    <code>String || Number</code>
                </td>
                <td class="px-6 py-4">
                    <code>'100%'</code>
                </td>
                <td class="px-6 py-4">
                    Width of the chart
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">height</code>
                </th>
                <td class="px-6 py-4">
                    <code>String || Number</code>
                </td>
                <td class="px-6 py-4">
                    <code>'auto'</code>
                </td>
                <td class="px-6 py-4">
                    Height of the chart
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">options</code>
                </th>
                <td class="px-6 py-4">
                    <code>Object</code>
                </td>
                <td class="px-6 py-4">
                    <code>{}</code>
                </td>
                <td class="px-6 py-4">
                    All the optional configuration of the chart goes in this property
                </td>
            </tr>
        </tbody>
    </table>
</div>
