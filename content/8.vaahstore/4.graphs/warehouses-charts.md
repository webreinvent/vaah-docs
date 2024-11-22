---
customer_count_simple: [
{
name: 'Stock Available',
data: [3033, 4033, 4533, 5033, 5523]
}

]

xaxis: {
categories: ['Warehouse A', 'Warehouse B', 'Warehouse C', 'Warehouse D', 'May', 'June', 'July','August','September','October','November','December'],
}

chartOptions: {
xaxis: {
categories: ['Warehouse A', 'Warehouse B', 'Warehouse C', 'Warehouse D', 'Warehouse E'],
},

title: {
text: 'Stocks Available In Warehouse',
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
legend: {
show: false,
}
}


---


## Stocks In Warehouses
The Stocks In Warehouses chart provides a visual representation of the available stock quantities in each warehouse within a specified timeframe. It helps businesses monitor and analyze inventory levels across various warehouses, identifying those with the highest or lowest stock. This overview assists in making informed decisions for stock redistribution, restocking, and inventory optimization.
### Bar Chart
#### Stocks Available In Warehouse
::preview{component='<Charts/>' path='./components/store/Charts.vue' }

<div class="flex  justify-center items-center">



:charts{type='bar' :chartOptions="chartOptions" title='Stocks Available In Warehouse' height=300 width=600  :chartSeries="customer_count_simple"}

</div>

#shortCode

```vue

<Charts type="bar" title='Stocks Available In Warehouse'
        height=300 width=600 titleAlign='center'
        :chartSeries="[{ name: 'Stock Available', data: [3033, 4033, 4533, 5033, 5523] }]"
        :chartOptions="{ 
          xaxis:
          {
            categories: ['Warehouse A', 'Warehouse B', 'Warehouse C', 'Warehouse D', 'Warehouse E']
          },
          title: {
            text: 'Stocks Available In Warehouse',
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
          legend: {
          show: false,
          }
        }
"/>

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
    warehouse_stock_bar_chart_options:{},
    warehouse_stock_bar_chart_series:[],
  }),
  
 actions: {
   async warehouseStockInBarChart() {


     let params = {

       start_date: this.filter_start_date ?? null,
       end_date: this.filter_end_date ?? null,

     }
     let options = {
       params: params,
       method: 'POST'
     }
     await vaah().ajax(
       this.ajax_url + '/charts/warehouse-stocks-bar-chart-data',
       this.warehouseStockInBarChartAfter,
       options
     );
   },

   //---------------------------------------------------------------------
   warehouseStockInBarChartAfter(data,res){
     // this.updateDateFilter();
     const series_data = [{
       name: 'Stocks Available',
       data: Array.isArray(data.chart_series?.quantity_data) ?
         data.chart_series?.quantity_data : [],
     }];
     this.updateWarehouseStocksBarChartSeries(series_data);

     const updated_bar_chart_options = {
       ...data.chart_options, // Merge existing options
       title: {
         text: 'Stocks Available In Warehouse',
         align: 'center',
         offsetY: 12,
         style: {
           fontSize: '16px',
           fontWeight: 'bold',
           color: '#263238',
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
       legend: {
         show: false,
       },
       yaxis: {
         labels: {
           show: false,
         },
       },
       dataLabels: {
         enabled: true,
         textAnchor: 'center',
         style: {
           colors: ['#000'],
         },
         formatter: function (val, opt) {
           const category = opt.w.config.xaxis.categories[opt.dataPointIndex] || 'Unknown';
           return `${category}: ${val}`;
         },
         offsetX: 0,
         dropShadow: {
           enabled: false,
         },
       },

     };

     this.updateWarehouseStocksBarChartOptions(updated_bar_chart_options);
   },
  //---------------------------------------------------
   updateWarehouseStocksBarChartOptions(newOptions) {
     this.warehouse_stock_bar_chart_options = newOptions;
   },

   //---------------------------------------------------
   updateWarehouseStocksBarChartSeries(newSeries) {
     // Ensure chartSeries is updated reactively
     this.warehouse_stock_bar_chart_series = [...newSeries]; // Shallow copy to trigger reactivity
   },
}
});
```


#### Usage in a Component

```vue

<template>
  <div>
    <Charts
      type="pie"
      :chartOptions="store.warehouse_stock_bar_chart_options"
      :chartSeries="store.warehouse_stock_bar_chart_series"
      height=300 width=600
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
  store.warehouseStockInBarChart(); // Calls the method to fetch data
});
</script>

```


**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php
use App\Http\Controllers\YourController;

Route::post ('/charts/warehouse-stocks-bar-chart-data', [YourController::class, 'warehouseStockInBarChart']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function warehouseStockInBarChart(Request $request)
    {
        try{
            return {model_namespace}::warehouseStockInBarChart($request);
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

**Model method for get the stocks available in the warehouses in Bar Chart**

```php
public static function warehouseStockInBarChart($request)
    {
        $inputs = $request->all();

        $start_date = Carbon::parse($inputs['start_date'] ?? Carbon::now())->startOfDay();
        $end_date = Carbon::parse($inputs['end_date'] ?? Carbon::now())->endOfDay();
        $warehouse_foreign_key = 'vh_st_warehouse_id', // use your foreign key
        $quantity_column = 'quantity' // use your column contain stocks
         
        // Retrieve the product stock data for each warehouse, ordered by total quantity in descending order,
          $stock_data = {Your_Stocks_Model}::select($warehouse_foreign_key)
        ->selectRaw("SUM($quantity_column) as total_quantity")
        ->groupBy($warehouse_foreign_key)
        ->whereBetween('created_at', [$start_date, $end_date])
        ->orderBy('total_quantity', 'asc')
        ->get();
        
        // Prepare chart data
        $chart_series = [];
        $chart_categories = [];
    
        // Loop through each stock entry to build chart data
        foreach ($stock_data as $stock) {
            $warehouse = self::find($stock->vh_st_warehouse_id);

            if ($warehouse) {
                $chart_series[] = [
                    'name' => $warehouse->name,
                    'data' => [(int)$stock->total_quantity]
                ];
                $chart_categories[] = $warehouse->name;
            }
        }
    
        // Return data for the bar chart
        return [
            'data' => [
                'chart_series' => [
                    'quantity_data' => $stock_data->pluck('total_quantity'),
                ],
                'chart_options' => [
                    'xaxis' => [
                        'categories' => $chart_categories,
                    ],
                ],
            ],
        ];
}
```
