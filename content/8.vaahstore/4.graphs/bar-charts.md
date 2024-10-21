---

customer_count_grouped: [
{
name: 'Customers',
data: [30, 40, 45, 50, 49, 60, 70]
},

{
name: 'Active Customers',
data: [10, 20, 15, 30, 35, 40, 45]
}

]


customer_count_simple: [
{
name: 'Customers',
data: [30, 40, 45, 50, 49, 60, 70]
}

]


xaxis: {
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
datasets by changing the naming conventions and data inputs according to your CRUD operations. For Example->


## Customers Count Over A Period In Bar Chart Component

::preview{component='<CustomersCountBarChart/>' path='./components/store/CustomersChart.vue' }

<div class="flex  justify-center items-center">

:customers-count-bar-chart{type='bar' title='Simple Bar Chart' width=600 :chartOptions="xaxis" :chartSeries="customer_count_simple"}


</div>


#shortCode

```vue

<CustomersCountBarChart type="bar" title='Simple Bar Chart' titleAlign='center' :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }"/>
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
    default: 'bar'
  },
  stacked: false,
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
```





#expandCode

@@@ ./components/store/CustomersCountBarChart.vue

::


**Steps To Backend Data Flow:**

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
    // Extract dynamic parameters from the request
    $date_column = 'created_at'; // Default column
    $count = 'COUNT'; // Default count function
    $group_by_column = 'DATE_FORMAT(created_at, "%m")'; // Group by month

    // Fetch data from the specified model
    $chart_data = {model_name_space}::selectRaw("$group_by_column as month")
        ->selectRaw("$count($date_column) as total_count")
        ->selectRaw("SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active_count")
        ->groupBy('month')
        ->orderBy('month')
        ->get();

    // Prepare data for the chart
    $data = [
        ['name' => 'Customers', 'data' => array_fill(0, 12, 0)],
        ['name' => 'Active Customers', 'data' => array_fill(0, 12, 0)],
    ];

    $labels = [];
    for ($month = 1; $month <= 12; $month++) {
        $labels[] = date('F', strtotime("2024-$month-01")); // Month names
    }

    // Populate data arrays
    foreach ($chart_data as $item) {
        $month_index = (int)$item->month - 1;
        $data[0]['data'][$month_index] = $item->total_count;
        $data[1]['data'][$month_index] = $item->active_count;
    }

    // Return the data and chart options
    return [
        'data' => [
            'series' => $data,
            'labels' => $labels,
        ],
        'newOptions' => [
            'chart' => ['id' => 'dynamic-chart'],
            'xaxis' => ['type' => 'category'],
        ],
    ];
}


```


### Grouped

::preview{component='<CustomersCountBarChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-count-bar-chart{type='bar' width=600 title='Grouped Bar Chart' height=300 :chartOptions="xaxis" :chartSeries="customer_count_grouped"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="bar" title='Grouped Bar Chart' titleAlign='center' width=600 height=300 :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] },
{ name: 'Active Customers', data: [10, 20, 30, 40, 50, 60, 70] }
]" :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" />
```

::

### Stacked

::preview{component='<CustomersCountBarChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-count-bar-chart{type='bar' title='Stacked Bar Chart' stacked  width=600  :chartOptions="xaxis" :chartSeries="customer_count_grouped"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="bar" title='Stacked Bar Chart' titleAlign='center' width=600 height=300 stacked :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] },
{ name: 'Active Customers', data: [10, 20, 30, 40, 50, 60, 70] }
]" :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" />
```

::



### Stacked 100%

::preview{component='<CustomersCountBarChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-count-bar-chart{type='bar' title='100% Stacked Bar Chart' h titleAlign='center' height=300 width=600 stacked stackType='100%'  :chartOptions="xaxis" :chartSeries="customer_count_grouped"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="bar" title='Stacked Bar Chart' titleAlign='center' width=600 height=300 stacked stackType='100%' :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] },
{ name: 'Active Customers', data: [10, 20, 30, 40, 50, 60, 70] }
]" :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" />
```

::

### Line Chart

::preview{component='<CustomersCountBarChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-count-bar-chart{type='line' :chartOptions="xaxis" title='Monthly Customer Data Line Chart' height=300 width=600 :chartSeries="customer_count_simple"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="line" title='Simple Line Chart' titleAlign='center' height=300 width=600  :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" :chartSeries="[ { name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] }]" />
```

::


### Grouped Line Chart 

::preview{component='<CustomersCountBarChart />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-count-bar-chart{type='line' :chartOptions="xaxis" title='Monthly Customer Data Line Chart' height=300 width=600 :chartSeries="customer_count_grouped"}

</div>

#shortCode

```vue
<CustomersCountBarChart type="line" title='Simple Line Chart' titleAlign='center' height=300 width=600  :chartOptions="{ categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July'] }" :chartSeries="[ { name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70] }]" />
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
                    <code>String</code>
                </td>
                <td class="px-6 py-4">
                    <code>'bar'</code>
                </td>
                <td class="px-6 py-4">
                    Specifies the type of chart, e.g., <code>bar</code>, <code>line</code>, etc.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">stacked</code>
                </th>
                <td class="px-6 py-4">
                    <code>Boolean</code>
                </td>
                <td class="px-6 py-4">
                    <code>false</code>
                </td>
                <td class="px-6 py-4">
                    Determines whether the chart is stacked.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">stackType</code>
                </th>
                <td class="px-6 py-4">
                    <code>String</code>
                </td>
                <td class="px-6 py-4">
                    <code>undefined</code>
                </td>
                <td class="px-6 py-4">
                    Defines the type of stacking (e.g., <code>'100%'</code>).
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">title</code>
                </th>
                <td class="px-6 py-4">
                    <code>String</code>
                </td>
                <td class="px-6 py-4">
                    <code>undefined</code>
                </td>
                <td class="px-6 py-4">
                    The title of the chart.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">height</code>
                </th>
                <td class="px-6 py-4">
                    <code>String | Number</code>
                </td>
                <td class="px-6 py-4">
                    <code>'auto'</code>
                </td>
                <td class="px-6 py-4">
                    The height of the chart. Defaults to <code>'auto'</code>.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">width</code>
                </th>
                <td class="px-6 py-4">
                    <code>String | Number</code>
                </td>
                <td class="px-6 py-4">
                    <code>'100%'</code>
                </td>
                <td class="px-6 py-4">
                    The width of the chart. Defaults to <code>'100%'</code>.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">chartOptions</code>
                </th>
                <td class="px-6 py-4">
                    <code>Object</code>
                </td>
                <td class="px-6 py-4">
                    <code>{}</code>
                </td>
                <td class="px-6 py-4">
                    Additional chart options configuration.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">chartSeries</code>
                </th>
                <td class="px-6 py-4">
                    <code>Array</code>
                </td>
                <td class="px-6 py-4">
                    <code>undefined</code>
                </td>
                <td class="px-6 py-4">
                    The series data to display on the chart.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">colors</code>
                </th>
                <td class="px-6 py-4">
                    <code>Array</code>
                </td>
                <td class="px-6 py-4">
                    <code>[]</code>
                </td>
                <td class="px-6 py-4">
                    Defines custom colors for chart series.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">labels</code>
                </th>
                <td class="px-6 py-4">
                    <code>Array</code>
                </td>
                <td class="px-6 py-4">
                    <code>[]</code>
                </td>
                <td class="px-6 py-4">
                    Labels for the chart data.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">titleAlign</code>
                </th>
                <td class="px-6 py-4">
                    <code>String</code>
                </td>
                <td class="px-6 py-4">
                    <code>'center'</code>
                </td>
                <td class="px-6 py-4">
                    Sets the alignment of the chart title. Acceptable values are <code>left</code>, <code>center</code>, or <code>right</code>.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">horizontal</code>
                </th>
                <td class="px-6 py-4">
                    <code>Boolean</code>
                </td>
                <td class="px-6 py-4">
                    <code>false</code>
                </td>
                <td class="px-6 py-4">
                    Determines if the bars are displayed horizontally.
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <code class="prop">dataLabelsPosition</code>
                </th>
                <td class="px-6 py-4">
                    <code>String</code>
                </td>
                <td class="px-6 py-4">
                    <code>'top'</code>
                </td>
                <td class="px-6 py-4">
                    Specifies the position of data labels on the bars.
                </td>
            </tr>
        </tbody>
    </table>
</div>


