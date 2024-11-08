---

shipment_chart_options: {
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
text: 'Orders Shipment Over Date Range',
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
text: 'Orders Shipment Over Date Range',
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

shipment_data_chart: [
{
name: 'Pending Orders Shipment',
data: [
{ x: '2024-11-04', y: 0 },
{ x: '2024-11-05', y: 20 },
{ x: '2024-11-06', y: 70 },
{ x: '2024-11-07', y: 30 }
]
},
{
name: 'Orders Shipped',
data: [
{ x: '2024-11-04', y: 0 },
{ x: '2024-11-05', y: 10 },
{ x: '2024-11-06', y: 60 },
{ x: '2024-11-07', y: 20 }
]
}
]

shipped_quantity_status_data: [
{
name: 'Item Qty.',
data: [3033, 4033, 4533, 5033, 5523]
}

]


shipped_quantity_status_chart_options: {
xaxis: {
categories: ['Partially Shipped', 'Shipped', 'Delivered', 'Partially Delivered', 'In Transit'],
},

title: {
text: 'Shipped Quantity Status',
align: 'center',
offsetY: 12,
style: {
fontSize: '16px',
fontWeight: 'bold',
color: '#263238',
},
},
dataLabels: {
enabled: true,
textAnchor: 'start',
style: {
colors: ['#000'],
},
offsetX: 0,
dropShadow: {
enabled: false,
},
},
yaxis: {
labels: {
show: true,
},
},
plotOptions: {
bar: {
barHeight: '80%',
distributed: true,
horizontal: true,
dataLabels: {
position: 'bottom',
},
},
},
tooltip: {
theme: 'dark',
},
legend: {
show: false,
}
}

---




## Orders Shipment Over Date Range
The Orders Shipment Over Date Range feature allows users to query and visualize the shipment performance over a specific date range.

**Example Usage:**
In the Shipments section, a user can select a start and end date (e.g., from 2024-11-04 to 2024-11-07) and see a line chart 
displaying the cumulative orders entered on shipment each day during this period. 
This visualization helps track shipment progress and pending orders over the selected date range.
### Line Chart

::preview{component='<Charts/>' path='./components/store/Charts.vue' }

<div class="flex  justify-center items-center">

:charts{type='line' :chartOptions="shipment_chart_options" title='Vendor By Sales' height=300 width=600 :chartSeries="shipment_data_chart"}

</div>




#shortCode

```vue

<template>
  <div class="flex justify-center items-center">
    <Charts
      type="line"
      :chartOptions="order_shipped_chart_options"
      title=""
      height="300"
      :chartSeries="order_shipped_data"
    />
  </div>
</template>

<script setup>
const order_shipped_chart_options = {
  chart: {
    id: 'shipped-orders-chart',
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

const order_shipped_data = [
  {
    name: 'Pending Orders Shipment',
    data: [
      { x: '2024-11-04', y: 0 },
      { x: '2024-11-05', y: 20 },
      { x: '2024-11-06', y: 70 },
      { x: '2024-11-07', y: 30 }
    ],
  },
  {
    name: 'Orders Shipped',
    data: [
      { x: '2024-11-04', y: 0 },
      { x: '2024-11-05', y: 10 },
      { x: '2024-11-06', y: 60 },
      { x: '2024-11-07', y: 20 }
    ],
  }
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
    order_shipped_chart_options: {},
    order_shipped_data: [],
  }),
  
 actions: {
   async ordersShipmentByDateRange() {


     let params = {

       start_date: this.filter_start_date ?? null,
       end_date: this.filter_end_date ?? null,

     }
     let options = {
       params: params,
       method: 'POST'
     }
     await vaah().ajax(
       this.ajax_url + '/charts/orders-shipments-by-range',
       this.ordersShipmentByDateRangeAfter,
       options
     );
   },
   //---------------------------------------------------

   ordersShipmentByDateRangeAfter(data,res){
     // this.updateDateFilter();
     const series_data = data.chart_series.map(series => ({
       name: series.name,
       data: Array.isArray(series.data) ? series.data : [],
     }));

     this.updateChartSeries(series_data);

     const updated_area_chart_options = {
       ...data.chart_options, // Merge existing options
       stroke: {
         curve: 'smooth',
         width: 3,
       },
       title: {
         text: 'Orders Shipment Over Date Range', // Chart title
         align: 'center', // Title alignment
       },
       chart: {
         toolbar: {
           show: false, // This should be under the chart key
         },
       },

       legend: {
         show: false,
       },
       dataLabels: {
         enabled: true,
       },
       tooltip: {
         enabled: true,
         shared: true,
         style: { fontSize: '14px' },
       },
       grid: {
         show: false,
       }
     };

     this.updateChartOptions(updated_area_chart_options);
   },
   //---------------------------------------------------

   updateChartOptions(newOptions) {
     this.order_shipped_chart_options = newOptions;
   },

   //---------------------------------------------------
   updateChartSeries(newSeries) {
     // Ensure chartSeries is updated reactively
     this.order_shipped_data = [...newSeries]; // Shallow copy to trigger reactivity
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
      :chartOptions="store.order_shipped_chart_options"
      :chartSeries="store.order_shipped_data"
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
  store.ordersShipmentByDateRange(); // Calls the method to fetch data
});
</script>

```


**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php
use App\Http\Controllers\YourController;

Route::post ('/charts/orders-shipments-by-range', [YourController::class, 'ordersShipmentByDateRange']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function ordersShipmentByDateRange(Request $request)
    {
        try{
            return {model_namespace}::ordersShipmentByDateRange($request);
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

**Model Method for Return Orders Status Distribution Data**

```php
 public static function ordersShipmentByDateRange($request)
    {
        $inputs = $request->all();
        // Define start and end dates
        $start_date = Carbon::parse($inputs['start_date'] ?? Carbon::now())->startOfDay();
        $end_date = Carbon::parse($inputs['end_date'] ?? Carbon::now())->endOfDay();
        // Generate date labels for x-axis
        $labels = [];
        foreach (new \DatePeriod($start_date, new \DateInterval('P1D'), $end_date->copy()->addDay()) as $date) {
            $labels[] = $date->format('Y-m-d');
        }
        // Query shipment data and count shipped orders by date
        $shipment_data = ShipmentItem::whereBetween('created_at', [$start_date, $end_date])
            ->selectRaw('DATE(created_at) as shipment_date, COUNT(DISTINCT vh_st_order_id) as shipped_orders')
            ->groupBy('shipment_date')
            ->orderBy('shipment_date')
            ->get()
            ->keyBy('shipment_date');

        // Get total shipped orders
        $overall_order_shipped = ShipmentItem::distinct('vh_st_order_id')->count('vh_st_order_id');
        $total_orders = Order::count(); // Total orders for the range

        // Prepare data for the chart
        $shipped_orders_so_far = 0;
        $formatted_shipped_data = [];
        $formatted_pending_data = [];

        foreach ($labels as $index => $date_string) {
            $shipped_orders = $shipment_data[$date_string]->shipped_orders ?? 0;
            $shipped_orders_so_far += $shipped_orders;

            // Calculate pending orders
            $pending_orders = ($inputs['end_date'] == $inputs['start_date'] && $index === 0)
                ? $overall_order_shipped - $shipped_orders_so_far
                : $total_orders - $shipped_orders_so_far;

            // Store formatted data for chart
            $formatted_shipped_data[] = ['x' => $date_string, 'y' => $shipped_orders];
            $formatted_pending_data[] = ['x' => $date_string, 'y' => $pending_orders];
        }

        return [
            'data' => [
                'chart_series' => [
                    ['name' => 'Pending Orders Shipment', 'data' => $formatted_pending_data],
                    ['name' => 'Orders Shipped', 'data' => $formatted_shipped_data],
                ],
                'chart_options' => [
                    'xaxis' => ['type' => 'datetime', 'categories' => $labels],
                ],
            ]
        ];
    }
    //----------------------------------------------------------------------------------
    

```

### Area Chart with datalabels
The dataLabels configuration has been added to the shipment_chart_options prop:

**enabled**: true: Activates data labels for each point on the chart.

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:charts{type='area' :chartOptions="line_chart_options_with_labels" title='Vendor By Sales' height=300 width=600 :chartSeries="shipment_data_chart"}

</div>

::

### Bar Chart
#### Shipped Quantity Status

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:charts{type='bar' :chartOptions="shipped_quantity_status_chart_options" title='Shipped Quantity Status' height=300 width=600  :chartSeries="shipped_quantity_status_data"}

</div>

#shortCode

```vue

<Charts type="bar" title='Stocks Available In Warehouse'
        height=300 width=600 titleAlign='center'
        :chartSeries="[{ name: 'Item Qty.', data: [3033, 4033, 4533, 5033, 5523] }]"
        :chartOptions="{ 
          xaxis:
          {
            categories: ['Partially Shipped', 'Shipped', 'Delivered', 'Partially Delivered', 'In Transit']
          },
          title: {
            text: 'Shipped Quantity Status',
            align: 'center',
            offsetY: 12,
            style: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#263238',
                }
          },
          dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
          colors: ['#000'],
          },
          offsetX: 0,
          dropShadow: {
          enabled: false,
              },
          },
          yaxis: {
          labels: {
          show: true,
              },
          },
          plotOptions: {
            bar: {
            barHeight: '80%',
            distributed: true,
            horizontal: true,
            dataLabels: {
            position: 'bottom',
              },
            },
          },
          tooltip: {
                    theme: 'dark',
                },
          legend: {
          show: false,
          }
        }
"/>

```
