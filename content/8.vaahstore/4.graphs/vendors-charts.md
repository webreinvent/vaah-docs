---

line_chart_options: {
chart: {
id: 'vendor-sales-line-chart',
type: 'line',
background: '#fff',
toolbar: { show: false },
zoom: { enabled: true }
},
xaxis: {
type: 'datetime',
categories: ['2024-11-04','2024-11-05', '2024-11-06', '2024-11-07']
},
dataLabels: {
enabled: false,
},
stroke: { curve: 'smooth', width: 4 },
title: {
text: 'Vendor Sales Over Selected Date Range',
align: 'center',
style: { fontSize: '16px', fontWeight: 'bold', color: '#263238' }
},
tooltip: {
enabled: true,
shared: true,
style: { fontSize: '14px' }
},
legend: {
position: 'top',
horizontalAlign: 'center',
floating: false,
fontSize: '14px'
}
}

line_chart_options_with_labels: {
chart: {
id: 'vendor-sales-line-chart',
type: 'line',
background: '#fff',
toolbar: { show: false },
zoom: { enabled: true }
},
xaxis: {
type: 'datetime',
categories: ['2024-11-04','2024-11-05', '2024-11-06', '2024-11-07']
},
dataLabels: {
enabled: true,
},
stroke: { curve: 'smooth', width: 4 },
title: {
text: 'Vendor Sales Over Selected Date Range',
align: 'center',
style: { fontSize: '16px', fontWeight: 'bold', color: '#263238' }
},
tooltip: {
enabled: true,
shared: true,
style: { fontSize: '14px' }
},
legend: {
position: 'top',
horizontalAlign: 'center',
floating: false,
fontSize: '14px'
}
}

data_line_chart: [
{
name: 'Vendor 1',
data: [
{ x: '2024-11-04', y: 0 },
{ x: '2024-11-05', y: 10 },
{ x: '2024-11-06', y: 60 },
{ x: '2024-11-07', y: 20 }
]
},
{
name: 'Vendor 2',
data: [
{ x: '2024-11-04', y: 0 },
{ x: '2024-11-05', y: 20 },
{ x: '2024-11-06', y: 70 },
{ x: '2024-11-07', y: 30 }
]
},
{
name: 'Vendor 3',
data: [
{ x: '2024-11-04', y: 0 },
{ x: '2024-11-05', y: 30 },
{ x: '2024-11-06', y: 80 },
{ x: '2024-11-07', y: 40 }
]
},
{
name: 'Vendor 4',
data: [
{ x: '2024-11-04', y: 0 },
{ x: '2024-11-05', y: 40 },
{ x: '2024-11-06', y: 90 },
{ x: '2024-11-07', y: 50 }
]
}
]



---




## Vendor Sales Over Selected Date Range
The Vendor Sales Over Selected Date Range feature allows users to query and visualize the sales performance of vendors within a specific date range.

**Example Usage:**
In Vendors List, a user can select a start and end date (e.g., from 2024-11-04 to 2024-11-07) and see a line chart showing the total quantity sold for each vendor during this period.

### Line Chart

::preview{component='<Charts/>' path='./components/store/Charts.vue' }

<div class="flex  justify-center items-center">

:charts{type='line' :chartOptions="line_chart_options" title='Vendor By Sales' height=300 width=600 :chartSeries="data_line_chart"}

</div>




#shortCode

```vue

<template>
  <div class="flex justify-center items-center">
    <Charts
      type="line"
      :chartOptions="line_chart_options"
      title="Vendor By Sales"
      height="300"
      :chartSeries="data_line_chart"
    />
  </div>
</template>

<script setup>
const line_chart_options = {
  chart: {
    id: 'vendor-sales-line-chart',
    type: 'line',
    background: '#fff',
    toolbar: { show: true },
    zoom: { enabled: true },
  },
  xaxis: {
    type: 'datetime',
    categories: ['2024-11-05', '2024-11-06', '2024-11-07'],
  },
  dataLabels: {
    enabled: true,
  },
  stroke: { curve: 'smooth', width: 4 },
  title: {
    text: 'Vendor Sales Over Selected Date Range',
    align: 'center',
    style: { fontSize: '16px', fontWeight: 'bold', color: '#263238' },
  },
  tooltip: {
    enabled: true,
    shared: true,
    style: { fontSize: '14px' },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    floating: false,
    fontSize: '14px',
  },
};

const data_line_chart = [
  {
    name: 'Vendor 1',
    data: [
      { x: '2024-11-05', y: 0 },
      { x: '2024-11-06', y: 0 },
      { x: '2024-11-07', y: 0 },
    ],
  },
  {
    name: 'Vendor 2',
    data: [
      { x: '2024-11-05', y: 13 },
      { x: '2024-11-06', y: 0 },
      { x: '2024-11-07', y: 0 },
    ],
  },
  {
    name: 'Vendor 3',
    data: [
      { x: '2024-11-05', y: 50 },
      { x: '2024-11-06', y: 0 },
      { x: '2024-11-07', y: 0 },
    ],
  },
  {
    name: 'Vendor 4',
    data: [
      { x: '2024-11-05', y: 100 },
      { x: '2024-11-06', y: 0 },
      { x: '2024-11-07', y: 0 },
    ],
  },
];
</script>
```

#code

@@@ ./components/store/Charts.vue

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

#### Vue Code to Send Request and Fetch Data

```js
// stores/yourStore.js
import { defineStore } from 'pinia';
import {vaah} from 'your-vaah-instance'; // Adjust this import based on your setup

export const useYourStore = defineStore('store', {
  state: () => ({
    line_chart_options: {},
    data_line_chart: [],
  }),
  
 actions: {
   async vendorSalesByRange() {
     let params = {
       start_date: this.filter_start_date ?? null,
       end_date: this.filter_end_date ?? null,
     }
     let options = {
       params: params,
       method: 'POST'
     }
     await vaah().ajax(
       this.ajax_url + '/charts/sales-by-range',
       this.vendorSalesByRangeAfter,
       options
     );
   },
   //---------------------------------------------------

   vendorSalesByRangeAfter(data,res){
    
     const series_data = data.chart_series.map(series => ({
       name: series.name,
       data: Array.isArray(series.data) ? series.data : [],
     }));

     this.updateChartSeries(series_data);

     const updated_line_chart_options = {
       ...data.chart_options, // Merge existing options
       stroke: {
         curve: 'smooth',
         width: 3,
       },
       title: {
         text: 'Vendor Sales Over Selected Date Range', // Chart title
         align: 'center', // Title alignment
         offsetY: 12, // Add margin between title and chart/toolbar
         style: {
           fontSize: '16px',
           fontWeight: 'bold',
           color: '#263238'
         }
       },
       chart: {
         toolbar: {
           show: false, // This should be under the chart key
         },
         background: '#ffffff',
       },
       legend: {
         show: false,
         position: 'bottom',
         horizontalAlign: 'center',
         floating: false,
         fontSize: '14px',
         
       },
       dataLabels: {
         enabled: false,
       },
       grid: {
         show: false,
       }
     };

     this.updateChartOptions(updated_line_chart_options);
   },
   //---------------------------------------------------

   updateChartOptions(newOptions) {
     this.line_chart_options = newOptions;
   },

   //---------------------------------------------------
   updateChartSeries(newSeries) {
     // Ensure chartSeries is updated reactively
     this.data_line_chart = [...newSeries]; // Shallow copy to trigger reactivity
   },

  //---------------------------------------------------
  
}
});
```


#### Usage in a Component

```vue

<template>
  <div>
    <Charts
      type="pie"
      :chartOptions="store.line_chart_options"
      :chartSeries="store.data_line_chart"
      height=400 width=600
      titleAlign="center"

    />
  </div>
</template>

<script setup>
import {useYourStore} from '@/stores/yourStore'; // Adjust the path as needed
import {onMounted} from 'vue';
import Charts  from "./Charts ";
const store = useYourStore(); // Use the store
// Fetch data when the component mounts
onMounted(() => {
  store.vendorSalesByRange(); // Calls the method to fetch data
});
</script>

```


**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php
use App\Http\Controllers\YourController;

Route::post ('/charts/sales-by-range', [YourController::class, 'vendorSalesByRange']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function vendorSalesByRange(Request $request)
    {
        try{
            return {model_namespace}::vendorSalesByRange($request);
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

**Model Method for Return Different Vendors By Sales Over Specific Dates**

```php
public static function vendorSalesByRange(Request $request)
    {
        $inputs = $request->all();

        $start_date = isset($inputs['start_date']) ? Carbon::parse($inputs['start_date'])
        ->startOfDay() : Carbon::now()->startOfDay();
        $end_date = isset($inputs['end_date']) ? Carbon::parse($inputs['end_date'])
        ->endOfDay() : Carbon::now()->endOfDay();

        // Generate date labels for x-axis
        $period = new \DatePeriod($start_date, new \DateInterval('P1D'), $end_date->addDay());
        $labels = [];
        foreach ($period as $date) {
            $labels[] = $date->format('Y-m-d');
        }

        // Query vendor sales data
        $vendor_sales = OrderItem::select('vh_st_vendor_id')
            ->groupBy('vh_st_vendor_id')
            ->with('vendor') // Load the vendor relationship
            ->get()
            ->map(function ($item) use ($start_date, $end_date, $request, $labels) {
                // Get sales data per day for the vendor within the date range
                $sales_data = OrderItem::where('vh_st_vendor_id', $item->vh_st_vendor_id)
                    ->whereBetween('created_at', [$start_date, $end_date])                   
                    ->selectRaw('DATE(created_at) as sales_date')
                    ->selectRaw('SUM(quantity) as total_sales')
                    ->groupBy('sales_date')
                    ->orderBy('sales_date')
                    ->get()
                    ->keyBy('sales_date'); // Key by date for easy lookup

                // Generate sales data with zero values for missing dates
                $formatted_data = [];
                foreach ($labels as $date_string) {
                    $formatted_data[] = [
                        'x' => $date_string, // Date in ms for ApexCharts
                        'y' => isset($sales_data[$date_string]) 
                        ? (int) $sales_data[$date_string]->total_sales : 0,
                         // Use 0 if no sales
                    ];
                }

                return [
                    'name' => $item->vendor->name,
                    'data' => $formatted_data,
                ];
            });

        return [
            'data' => [
                'chart_series' => $vendor_sales,
                'chart_options' => [
                    'xaxis' => [
                        'type' => 'datetime',
                        'categories' => $labels,
                    ],
                ],
            ],
        ];
    }
    //----------------------------------------------------------------------------------
    

```

### Line Chart with datalabels
The dataLabels configuration has been added to the line_chart_options:

**enabled**: true: Activates data labels for each point on the chart.

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:charts{type='line' :chartOptions="line_chart_options_with_labels" title='Vendor By Sales' height=300 width=600 :chartSeries="data_line_chart"}

</div>

::

## Top Vendors List By Sales
This represents the sum of all sales generated by a vendor. By analyzing total sales, we can quickly determine top-performing vendors.
<img src="/images/vaahstore/Vendors/vendor-by-sales-list.png" alt="Top Vendors" style="max-height: 300px; max-width: 100%;"/>

**Model Method for Get the Top Vendors By Sales List**

```php
public static function topSellingVendorsData($request)
    {
        $limit = 5;
        $query = OrderItem::query();
        if (isset($request->filter)) {
            $query = $query->quickFilter($request->filter);
        }
        $top_selling_vendors = $query
            ->select('vh_st_vendor_id')
            ->groupBy('vh_st_vendor_id')
            ->with(['vendor']) // Load the vendor relationship
            ->get()
            ->map(function ($item) use ($request) {
                $total_sales = OrderItem::where('vh_st_vendor_id', $item->vh_st_vendor_id)
                    ->when(isset($request->filter), function ($query) use ($request) {
                        return $query->quickFilter($request->filter);
                    })
                    ->sum('quantity');

                return [
                    'id' => $item->vendor->id,
                    'name' => $item->vendor->name,
                    'slug' => $item->vendor->slug,
                    'total_sales' => $total_sales,
                ];
            })
            ->sortByDesc('total_sales');

        if (!isset($request->filter['time']) || $request->filter['time'] !== 'all') {
            $top_selling_vendors = $top_selling_vendors->take($limit);
        }

        return [
            'data' => $top_selling_vendors->values(),
        ];
    }
```
