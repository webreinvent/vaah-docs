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
name: 'New Customers',
data: [10, 20, 30, 40, 50, 60, 70]
}

]


data_bar: [
{
name: 'Customers',
data: [30, 40, 45, 50, 49, 60, 70]
}

]

data_axis: {
categories: ['January', 'as', 'March', 'April', 'May', 'June', 'July']
}


---

## Customers Count Over A Period

::preview{component='<CustomersChart/>' path='./components/store/CustomersChart.vue' }

<div class="flex  justify-center items-center">

:customers-chart{type='bar' title='Simple Bar Chart' :chartSeries="data_bar"}

:customers-chart{type='line' title='Monthly Customer Data Line Chart' height=300 :chartSeries="data_bar"}

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
    stacked: props.stacked, 
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

@@@ ./components/store/CustomersChart.vue

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
    $date_column = (); // Default to 'COUNT'
    $date_column = (); // Default to all rows
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
            'y' => $item->count, // Count as Y-axis
        ];
    });

    // Return the data along with dynamic chart options
    return [
        'data' => $data,
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

## Grouped

::preview{component='<CustomersChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-chart{type='bar' title='Grouped Bar Chart' height=300 :chartOptions="data_axis" :chartSeries="data_2"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="bar" title='Grouped Bar Chart' height=300 :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] },
{ name: 'New Customers', data: [10, 20, 30, 40, 50, 60, 70] }
]" :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" />
```

::

## Stacked

::preview{component='<CustomersChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-chart{type='bar' title='Stacked Bar Chart' height=300 stacked :chartOptions="data_axis" :chartSeries="data_2"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="bar" title='Stacked Bar Chart' height=300 stacked :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] },
{ name: 'New Customers', data: [10, 20, 30, 40, 50, 60, 70] }
]" :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" />
```

::




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
