## Customers Count Over A Period

::preview{component='<CustomersChart/>' path='./components/store/CustomersChart.vue' }

<div class="flex  justify-center items-center">

:customers-chart{type='bar'}

:customers-chart{type='bar' title='Stacked Monthly Customer Data' height=300  stacked}

</div>

:customers-chart{type='line' title='Monthly Customer Data Line Chart'}

#shortCode

```vue

<CustomersCountBarChart type="bar"/>
<CustomersCountBarChart type="line" title=' Monthly Customer Data Line Chart' />
<CustomersCountBarChart type="bar" title='Stacked Monthly Customer Data' height=300 stacked />


```



#code

[comment]: <> (```vue)

[comment]: <> (<template>)

[comment]: <> (  <div>)

[comment]: <> (    <apexchart)

[comment]: <> (      :type="chartType")

[comment]: <> (      :options="chartOptions")

[comment]: <> (      :series="chartSeries")

[comment]: <> (      height="300")

[comment]: <> (      width="400")

[comment]: <> (    />)

[comment]: <> (  </div>)

[comment]: <> (</template>)

[comment]: <> (<script setup>)

[comment]: <> (import { ref, defineProps } from 'vue')

[comment]: <> (// Define props to make the component dynamic)

[comment]: <> (const props = defineProps&#40;{)

[comment]: <> (  type: {)

[comment]: <> (    type: String,)

[comment]: <> (    default: 'bar' // Default to 'bar' if no type is provided)

[comment]: <> (  })

[comment]: <> (}&#41;)

[comment]: <> (// Chart type prop)

[comment]: <> (const chartType = ref&#40;props.type&#41;)

[comment]: <> (// Chart options for the chart)

[comment]: <> (const chartOptions = ref&#40;{)

[comment]: <> (  chart: {)

[comment]: <> (    toolbar: {)

[comment]: <> (      show: true)

[comment]: <> (    },)

[comment]: <> (    zoom: {)

[comment]: <> (      enabled: false)

[comment]: <> (    })

[comment]: <> (  },)

[comment]: <> (  xaxis: {)

[comment]: <> (    categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'])

[comment]: <> (  },)

[comment]: <> (  title: {)

[comment]: <> (    text: 'Monthly Customers Data',)

[comment]: <> (    align: 'center')

[comment]: <> (  },)

[comment]: <> (  dataLabels: {)

[comment]: <> (    enabled: true)

[comment]: <> (  },)

[comment]: <> (  colors: ['#008FFB', '#00E396', '#FEB019'])

[comment]: <> (}&#41;)

[comment]: <> (// Data series for the chart)

[comment]: <> (const chartSeries = ref&#40;[)

[comment]: <> (  {)

[comment]: <> (    name: 'Old Customers',)

[comment]: <> (    data: [30, 40, 45, 50, 49, 60, 70])

[comment]: <> (  },)

[comment]: <> (  {)

[comment]: <> (    name: 'New Customers',)

[comment]: <> (    data: [20, 30, 25, 40, 45, 55, 65])

[comment]: <> (  })

[comment]: <> (]&#41;)

[comment]: <> (</script>)

[comment]: <> (<style scoped>)

[comment]: <> (/* Add any component-specific styles here */)

[comment]: <> (</style>)

[comment]: <> (```)

[comment]: <> (```php)

[comment]: <> (// routes/api.php)

[comment]: <> (use App\Http\Controllers\YourController;)

[comment]: <> (Route::get&#40;'/charts/data', [YourController::class, 'getChartData']&#41;;)

[comment]: <> (```)

[comment]: <> (```php)

[comment]: <> (// http/Controllers/Your_Controller)

[comment]: <> (public function getChartData&#40;Request $request&#41;)

[comment]: <> (    {)

[comment]: <> (        try{)

[comment]: <> (            return {model_namespace}::getChartData&#40;$request&#41;;)

[comment]: <> (        }catch &#40;\Exception $e&#41;{)

[comment]: <> (            $response = [];)

[comment]: <> (            $response['success'] = false;)

[comment]: <> (            if&#40;env&#40;'APP_DEBUG'&#41;&#41;{)

[comment]: <> (                $response['errors'][] = $e->getMessage&#40;&#41;;)

[comment]: <> (                $response['hint'] = $e->getTrace&#40;&#41;;)

[comment]: <> (            } else{)

[comment]: <> (                $response['errors'][] = trans&#40;"vaahcms-general.something_went_wrong"&#41;;)

[comment]: <> (            })

[comment]: <> (            return $response;)

[comment]: <> (        })

[comment]: <> (    })

[comment]: <> (```)

[comment]: <> (```php)

[comment]: <> (public static function getChartData&#40;Request $request&#41;)

[comment]: <> (    {)

[comment]: <> (        // Fetch customers grouped by date and count without filtering)

[comment]: <> (        $customer_chart_data = model_namespace::select&#40;'created_at'&#41; // Select the created_at field)

[comment]: <> (        ->selectRaw&#40;'DATE&#40;created_at&#41; as date'&#41; // Extracting just the date part)

[comment]: <> (        ->selectRaw&#40;'COUNT&#40;*&#41; as count'&#41; // Counting customers for each date)

[comment]: <> (        ->groupBy&#40;'date'&#41; // Group by date)

[comment]: <> (        ->orderBy&#40;'date'&#41; // Order by date)

[comment]: <> (        ->get&#40;&#41;;)


[comment]: <> (        // Prepare the data for the chart in the desired format)

[comment]: <> (        $data = $customer_chart_data->map&#40;function &#40;$item&#41; {)

[comment]: <> (            return [)

[comment]: <> (                'x' => $item->date, // Format the date as a string)

[comment]: <> (                'y' => $item->count, // Count for y-axis)

[comment]: <> (            ];)

[comment]: <> (        }&#41;;)

[comment]: <> (        return [)

[comment]: <> (            'data' => $data, // Use 'data' key to match the specified format)

[comment]: <> (            'newOptions' => [)

[comment]: <> (                'chart' => [)

[comment]: <> (                    'id' => 'customer-bar-chart',)

[comment]: <> (                ],)

[comment]: <> (                'xaxis' => [)

[comment]: <> (                    'type' => 'datetime', // Specify x-axis type if using timestamps)

[comment]: <> (                ],)

[comment]: <> (            ],)

[comment]: <> (        ];)


[comment]: <> (    })

[comment]: <> (```)

```php
public static function getChartData(Request $request)
{
    // Extract model namespace and other dynamic parameters from the request
    $modelNamespace = $request->input('model_namespace'); // e.g., "App\\Models\\User"
    $dateColumn = $request->input('date_column', 'created_at'); // Default to 'created_at'
    $aggregateFunction = $request->input('aggregate_function', 'COUNT'); // Default to 'COUNT'
    $aggregateColumn = $request->input('aggregate_column', '*'); // Default to all rows
    $groupByColumn = $request->input('group_by_column', 'DATE(' . $dateColumn . ')'); // Default to grouping by date

    // Validate the model namespace
    if (!class_exists($modelNamespace)) {
        return [
            'success' => false,
            'errors' => ['Invalid model namespace provided.']
        ];
    }

    // Fetch data dynamically from the specified model
    $chartData = $modelNamespace::select($dateColumn)
        ->selectRaw("$groupByColumn as date") // Dynamically apply group-by column
        ->selectRaw("$aggregateFunction($aggregateColumn) as count") // Dynamic aggregate function and column
        ->groupBy('date') // Group by date (or other field passed)
        ->orderBy('date') // Order by date
        ->get();

    // Prepare the data for the chart in the desired format
    $data = $chartData->map(function ($item) {
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

[comment]: <> (@@@ ./components/store/CustomersChart.vue)



#expandCode

@@@ ./components/store/CustomersChart.vue

::

**VUE Component**

```vue
<template>
  <div>
    <apexchart
      :type="chartType"
      :options="chartOptions"
      :series="chartSeries"
      height="300"
      width="400"

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
  title: {
    text: props.title, // Use the title prop
    align: 'center'
  },
  dataLabels: {
    enabled: true
  },
  colors: ['#008FFB', '#00E396', '#FEB019']
})

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

```

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





[comment]: <> (:customers-chart{type='bar' title='Stacked Monthly Customer Data' height=300  stacked})

</div>

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
