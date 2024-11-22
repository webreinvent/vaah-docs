---

customer_count_grouped: [
{
name: 'Customers',
data: [30, 40, 45, 50, 49, 60, 70,80,85,60,70,100]
},

{
name: 'Active Customers',
data: [10, 20, 15, 30, 35, 40, 45,50,55,60,65,70]
}

]


customer_count_simple: [
{
name: 'Customers',
data: [30, 40, 45, 50, 49, 60, 70,54,25,60,45,90]
}

]




data_labels: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
}


chartOptions: {
chart: {
background: '#ffffff',
toolbar: {
show: false,
},
},
xaxis: {
type: 'datetime',
categories: [
'2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01',
'2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01', '2024-10-01',
'2024-11-01', '2024-12-01'
],},

}
---

## Overview
The Bar Chart is an essential visualization tool for displaying categorical data. In this documentation, we will 
focus on how to effectively represent customer count data using a bar chart, allowing for easy comparison across different time periods or categories.

## Reusable  Components
The bar chart is designed as a reusable component. This means you can easily adapt it for different
datasets by changing the naming conventions and data inputs according to your CRUD operations. For Example->


##  Monthly Customer Count Bar Chart Component



::preview{component='<Charts/>' path='./components/store/Charts.vue' }

<div class="flex  justify-center items-center">

:charts{type='bar' title='Customer Count Bar Chart' height=350 width=600 :chartOptions="chartOptions" :chartSeries="customer_count_simple"}


</div>


#shortCode

```vue

<Charts type="bar" title='Customer Count Bar Chart' height=400 width=600 titleAlign='center' :chartSeries="[{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70,54,34,56,78,30] }]" :chartOptions="{ xaxis:{categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'] }}"/>
```


#code


```vue
<template>
  <div>
    <apexchart
      :options="chartOptions"
      :series="chartSeries"
      v-bind="$attrs"

    />
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';

defineOptions({
  inheritAttrs: false,
})
// Define props to make the component dynamic
const props = defineProps({
  stacked: {
    type: Boolean,
    default: false
  },
  stackType: {
    type: String,
  },
  title: {
    type: String,
    default: 'Bar Chart'
  },

  chartOptions: {
    type: Object,
    default: () => ({}),
  },
  chartSeries: {
    type: Array,
    required: true,
  },

  titleAlign: {
    type: String,
    default: 'center'
  },

});

// Chart options and series using refs to make them reactive
const chartOptions = ref({
  chart: {
    stacked: props.stacked,
    stackType: props.stackType,
  },
  plotOptions: {
    bar: { },
  },
  xaxis: {
    categories: props.chartOptions.categories || []
  },
  yaxis: {
    title: {
      text: props.chartOptions.yaxisTitle ,
    },
  },
  title: {
    text: props.title,
    align: props.titleAlign
  },

});

// Define chartSeries as a reactive ref
const chartSeries = ref(props.chartSeries);

// Watch for prop changes to update chart options and series dynamically
watch(() => props.chartOptions, (newOptions) => {
  chartOptions.value = { ...chartOptions.value, ...newOptions };
}, { immediate: true });

watch(() => props.chartSeries, (newSeries) => {
  chartSeries.value = newSeries; // Update the chart series reactively
}, { immediate: true });


</script>

<style scoped>
/* Add any component-specific styles here */
</style>




```





#expandCode

@@@ ./components/store/Charts.vue

::

#### Vue Store Code to Send Request and Fetch Data

The **sample data** will be in the following format:

```json
{
  // For Simple Bar Chart
  "data": {
    "chart_series": [{
        "data": [value1, value2, ...],  // Replace with actual values
        "name": "Name 1"  // Replace with the actual name/value for this series
      }]
      }
  "chart_options":{
    "xaxis":{
      "categories":["Label 1","Label 2","Label 3"] //e.g ["Jan","Feb",..]
      "type":"string" //category-months
    },
    "chart":{[ 'type'=>'bar']},
    // other chart options
  }
  /----------------------------------------------------------------------------


```

Below is the example code for fetch the customer count data over months.

```js
// stores/yourStore.js
import { defineStore } from 'pinia';
import {vaah} from 'your-vaah-instance'; // Adjust this import based on your setup

export const useYourStore = defineStore('store', {
  state: () => ({
    chartOptions: {},
    chartSeries: [],
  }),
  
  actions: {
    async fetchCustomersCountData() {
      const options = {
        method: 'post',
      };
      await vaah().ajax(
        this.ajax_url + '/charts/data',
        this.fetchCustomersCountDataAfter,
        options
      );
    },
    //---------------------------------------------------
    fetchCustomersCountDataAfter(data,res){
      if (!data || !Array.isArray(data.chart_series)) {
        return; 
      }
      const seriesData = data.chart_series.map(series => ({
        name: series.name ,
        data: Array.isArray(series.data) ? series.data : [],
      }));
      this.updateChartSeries(seriesData);
      const updatedOptions = {
        ...res.data.chart_options, // Merge existing options
        title: {
          ...res.data.chart_options.title, // Retain existing title settings if they exist
          // If you want to add or modify sections like title,yaxis, grid, etc., you can do it here
          text: 'Your Desired Title', // Set the new title
          // You can also add other title properties if needed
        },
      };
      this.updateChartOptions(updatedOptions);
      
    },
    //---------------------------------------------------
    updateChartOptions(newOptions) {
      this.chartOptions = newOptions;
    },
    //---------------------------------------------------
    updateChartSeries(newSeries) {
      // Ensure chartSeries is updated reactively
      this.chartSeries = [...newSeries]; // Shallow copy to trigger reactivity
    },
    //---------------------------------------------------
  },
});

```

#### Usage in a Vue Component

```vue

<template>
  <div>
    <Charts
      type="bar"
      :chartOptions="store.chartOptions"
      :chartSeries="store.chartSeries"
      height=300 width=600
      title="Customer Count Bar Chart"
      titleAlign="center"
    />
  </div>
</template>

<script setup>
import {useYourStore} from '@/stores/yourStore'; // Adjust the path as needed
import {onMounted} from 'vue';
import Charts from "./Charts";
const store = useYourStore(); // Use the store
// Fetch data when the component mounts
onMounted(() => {
  store.fetchCustomersCountData(); // Calls the method to fetch data
});
</script>

```

**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php

use App\Http\Controllers\YourController;

Route::post ('/charts/data', [YourController::class, 'fetchCustomersCountData']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function fetchCustomersCountData(Request $request)
    {
        try{
            return {model_namespace}::fetchCustomersCountData($request);
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

**Model Method for Return Monthly Customer Counts**

```php
public static function fetchCustomersCountData(Request $request)
    {
        $start_date = isset($request->start_date) ? Carbon::parse($request->start_date)->startOfDay()
         : Carbon::now()->startOfDay();
        $end_date = isset($request->end_date) ? Carbon::parse($request->end_date)->endOfDay()
         : Carbon::now()->endOfDay();
        // Extract dynamic parameters from the request
        $date_column = 'created_at';// Default column
        $count = 'COUNT';// Default count function
        // Start with the User query filtering by active customer roles
        $list = User::whereHas('activeRoles', function ($query) {
            $query->where('slug', 'customer');
        });

        // Fetch data from the specified model
        $chart_data_query = $list
            ->whereBetween($date_column, [$start_date, $end_date])
            ->selectRaw("DATE($date_column) as date")
            ->selectRaw("$count($date_column) as total_count")
            ->selectRaw("SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active_count")
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        $total_customers = $chart_data_query->sum('total_count');

        $data = [
            ['name' => 'Customers', 'data' => []],
            ['name' => 'Active Customers', 'data' => []],
        ];

        // Generate labels dynamically based on date range
        $labels = [];
        foreach ($chart_data_query as $item) {
            $date = Carbon::parse($item->date);
            $labels[] = $date->format('Y-m-d');

            $data[0]['data'][] = $item->total_count;
            $data[1]['data'][] = $item->active_count;
        }

        // Return the data and chart options
        return [
            'data' => [
                'chart_series' => $data,
                'chart_options' => [
                    'chart' => [
                        'id' => 'dynamic-chart',
                        'toolbar' => ['show' => true],
                        'zoom' => ['enabled' => false],
                    ],
                    'xaxis' => [
                        'type' => 'category',
                        'categories' => $labels,
                    ],                    
                    'title' => [
                        'text' => 'Customer Count Bar Chart',
                        'align' => 'center',
                    ],
                ],
            ],

        ];
    }
    //-------------------------------------------------------------------------------------------------------
    private static function appliedFilters($list, $request)
    {
        if (isset($request->filter)) {
            $list = $list->isActiveFilter($request->filter);
            $list = $list->dateRangeFilter($request->filter);
            $list = $list->customerGroupFilter($request->filter);
        }
        return $list;
    }



### Grouped

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:charts{type='bar' width=600 title='Grouped Bar Chart' height=400 :chartOptions="chartOptions" :chartSeries="customer_count_grouped"}

</div>

#shortCode

```vue
<Charts type="bar" title='Grouped Bar Chart' titleAlign='center' width=600 height=400 :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70,80,85,60,70,100] },
{ name: 'Active Customers', data: [10, 20, 15, 30, 35, 40, 45,50,55,60,65,70] }
]" :chartOptions="{ xaxis:{categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'] }}" />
```

::


**Sample Data For Grouped Chart**
```json
  //For Grouped Chart
  "data": {
    "chart_series": [
      {
        "data": [value1, value2, ...],  // Replace with actual values
        "name": "Name 1"  // Replace with the actual name/value for this series
      },
      {
        "data": [value3, value4, ...],  // Another series
        "name": "Name 2"  // Name/value for this series
      }
      // Add more series as needed
    ],
    
  }
  "chart_options":{
  "xaxis":{ 
     "categories":["Label 1","Label 2","Label 3"] //e.g ["Jan","Feb",..]
     "type":"string" //category-months
    },
  "chart":{},
    // other chart options
  }
}
```

**Backend Method For Return Bar Data For Grouped Bar Charts**

```php
public static function fetchCustomersCountData(Request $request)
    {
        $date_column = 'created_at';
        $count = 'COUNT';
        $group_by_column = 'DATE_FORMAT(created_at, "%m")';

        $list = User::whereHas('activeRoles', function ($query) {
            $query->where('slug', 'customer');
        });

        // Applied filters
        $filtered_data = self::appliedFilters($list, $request);

        // Prepare the chart data query
        $chart_data_query = $filtered_data->selectRaw("$group_by_column as month")
            ->selectRaw("$count($date_column) as total_count")
            ->selectRaw("SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active_count");

        // Group by month and order the result
        $chart_data = $chart_data_query->groupBy('month')->orderBy('month')->get();

        // Calculate the total customer count
        $total_customers = $chart_data->sum('total_count');

        $data = [
            ['name' => 'Total Customers', 'data' => array_fill(0, 12, 0)],
            ['name' => 'Active Customers', 'data' => array_fill(0, 12, 0)],
        ];

        $labels = [];
        for ($month = 1; $month <= 12; $month++) {
            $labels[] = date('F', strtotime("2024-$month-01"));
        }

        foreach ($chart_data as $item) {
            $month_index = (int)$item->month - 1;
            foreach ($data as $key => $series) {
                $data[$key]['data'][$month_index] = match ($key) {
                    0 => $item->total_count,
                    1 => $item->active_count,
                };
            }
        }

        // Return the filtered data along with chart options
        return [
            'data' => [
                'chart_series' => $data,
            ],
            'chart_options' => [
                'chart' => [
                    'id' => 'dynamic-chart',
                    'background' => '#fff',
                    'toolbar' => ['show' => true],
                    'zoom' => ['enabled' => false],
                ],
                'xaxis' => [
                    'type' => 'category',
                    'categories' => $labels,
                ],
                'yaxis' => [
                    'title' => [
                        'text' => 'Customers Count',
                        'color' => '#008FFB',
                    ],
                ],
                'title' => [
                    'text' => 'Total Customers: ' .  $total_customers,
                    'align' => 'center',
                ],
                'legend' => [
                    'position' => 'top',
                    'horizontalAlign' => 'center',
                    'onItemClick' => [
                        'toggleDataSeries' => true,
                    ],
                ],
                'grid' => [
                    'borderColor' => '#e0e0e0',
                    'strokeDashArray' => 0,
                    'position' => 'back',
                    'xaxis' => [
                        'lines' => [
                            'show' => false,
                        ],
                    ],
                    'yaxis' => [
                        'lines' => [
                            'show' => false,
                        ],
                    ],
                    'padding' => [
                        'top' => 0,
                        'right' => 0,
                        'bottom' => 0,
                        'left' => 0,
                    ],
                ],
            ],
        ];
    }
    //-------------------------------------------------------------------------------------------------------
    private static function appliedFilters($list, $request)
    {
        if (isset($request->filter)) {
            $list = $list->isActiveFilter($request->filter);
            $list = $list->dateRangeFilter($request->filter);
            $list = $list->customerGroupFilter($request->filter);
        }
        return $list;
    }


```


### Stacked

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:charts{type='bar' title='Stacked Bar Chart' stacked  width=600 height=400  :chartOptions="chartOptions" :chartSeries="customer_count_grouped"}

</div>

#shortCode

```vue
<Charts type="bar" title='Stacked Bar Chart' titleAlign='center' width=600 height=400 stacked :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70,80,85,60,70,100] },
{ name: 'Active Customers', data: [10, 20, 15, 30, 35, 40, 45,50,55,60,65,70] }
]" :chartOptions="{ xaxis:{categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'] }}" />
```

::



### Stacked 100%

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:charts{type='bar' title='100% Stacked Bar Chart' h titleAlign='center' height=400 width=600 stacked stackType='100%'  :chartOptions="chartOptions" :chartSeries="customer_count_grouped"}

</div>

#shortCode

```vue
<Charts type="bar" title='Stacked Bar Chart' titleAlign='center' width=600 height=400 stacked stackType='100%' :chartSeries="[
{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70,80,85,60,70,100] },
{ name: 'Active Customers', data: [10, 20, 15, 30, 35, 40, 45,50,55,60,65,70] }
]" :chartOptions="{ xaxis:{categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'] }}" />
```

::

### Line Chart

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:charts{type='line' :chartOptions="chartOptions" title='Monthly Customer Data Line Chart' height=400 width=600 :chartSeries="customer_count_simple"}

</div>

#shortCode

```vue
<Charts type="line" title='Simple Line Chart' titleAlign='center' height=400 width=600  :chartOptions="{ xaxis:{categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'] }}" :chartSeries="[ { name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70,54,34,56,78,30] }]" />
```

::


### Grouped Line Chart 

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:charts{type='line' :chartOptions="chartOptions" title='Monthly Customer Data Line Chart' height=400 width=600 :chartSeries="customer_count_grouped"}

</div>

#shortCode

```vue
<Charts type="line" title='Simple Line Chart' titleAlign='center' height=400 width=600  :chartOptions="{ xaxis:{categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'] }}" :chartSeries="[{ name: 'Customers', data: [30, 40, 45, 50, 49, 60, 70,80,85,60,70,100] },
{ name: 'Active Customers', data: [10, 20, 15, 30, 35, 40, 45,50,55,60,65,70] }
]" />
```

::


### Props

>Note-> For Read More About Apexchart Props [Visit Here](https://apexcharts.com/){_target_blank}.

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


