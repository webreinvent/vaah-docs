---


data_pie: [30, 40, 45]

data_donut: {
labels: [ 'COD','Credit Card', 'Paypal'],
chart: {
id: 'donut-chart',
type: 'pie',
background: '#fff',
toolbar: {
show: true
},
zoom: {
enabled: false
}
},
plotOptions: {
donut: {
size: '70%',
labels: {
show: true,
name: {
show: true,
fontSize: '14px',
fontWeight: 'bold',
color: '#263238'
},
value: {
show: true,
fontSize: '16px',
fontWeight: 'bold',
color: '#000'
}
}
}
},
dataLabels: {
enabled: true,
style: {
fontSize: '14px'
}
},
stroke: {
show: true,
width: 2,
colors: ['#fff']
},
legend: {
position: 'bottom',
horizontalAlign: 'center',
floating: false,
fontSize: '14px'
},
tooltip: {
enabled: true,
shared: true,
style: {
fontSize: '14px'
}
}
}
---



## Payment Methods Used
The **Payment Methods** Used chart provides a visual breakdown of the different payment methods utilized by customers for placing orders within a specified time frame.
It helps businesses monitor and analyze the distribution of payment methods, such as "**Credit Card**", "**PayPal**", "**COD**", and others.
### Pie Chart

::preview{component='<Charts/>' path='./components/store/Charts.vue' }

<div class="flex  justify-center items-center">



:charts{type='pie' :chartOptions="data_donut" title='Payment Methods Used' height=300  :chartSeries="data_pie"}

</div>

#shortCode

```vue

<Charts type="pie" title='Payment Methods Used' height=400 titleAlign='center' :chartSeries="[30, 40, 45]" :chartOptions="{ labels: ['COD','Credit Card', 'Paypal']}"/>
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
    pieChartOptions: {},
    pieChartSeries: [],
  }),
  
 actions: {
    async paymentMethodsPieChartData()
    {
        const options = {
            method: 'post',
            query: vaah().clone(this.query)
        };
        await vaah().ajax(
            this.ajax_url + '/charts/payment-methods-pie-chart-data',
            this.paymentMethodsPieChartDataAfter,
            options
        );
    },

  //---------------------------------------------------
   paymentMethodsPieChartDataAfter(data,res){
     // this.updateDateFilter();
     this.updateChartSeries(data.chart_series?.payment_methods_pie_chart);

     const updated_pie_chart_options = {
       ...data.chart_options, // Merge existing options
       title: {
         text: 'Payment Methods Used', // Add your chart title here
         align: 'center', // You can adjust alignment: 'left', 'center', 'right'
         style: {
           fontSize: '16px',
           fontWeight: 'bold',
           color: '#263238'
         }
       },
       chart: {
         background: '#fff',
         toolbar: {
           show: false, // Ensure toolbar is set to false here
         },
       },
       legend: {
         position: 'bottom',
         horizontalAlign: 'center',
         floating: false,
         fontSize: '12px',
         formatter: function (val, opts) {
           return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
         },
       },
     };

     this.updateChartOptions(updated_pie_chart_options);
   },
  //---------------------------------------------------
   updateChartOptions(newOptions) {
     this.pieChartOptions = newOptions;
   },

   //---------------------------------------------------
   updateChartSeries(newSeries) {
     // Ensure chartSeries is updated reactively
     this.pieChartSeries = [...newSeries]; // Shallow copy to trigger reactivity
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
      :chartOptions="store.pieChartOptions"
      :chartSeries="store.pieChartSeries"
      height=400 width=400
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
  store.paymentMethodsPieChartData(); // Calls the method to fetch data
});
</script>

```


**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php
use App\Http\Controllers\YourController;

Route::post ('/charts/payment-methods-pie-chart-data', [YourController::class, 'paymentMethodsPieChartData']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function paymentMethodsPieChartData(Request $request)
    {
        try{
            return {model_namespace}::paymentMethodsPieChartData($request);
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

**Model method for get the payment methods pie chart data used**

```php
public static function paymentMethodsPieChartData()
    {
        $start_date = isset($request->start_date) ? Carbon::parse($request->start_date)->startOfDay()
         : Carbon::now()->startOfDay();
        $end_date = isset($request->end_date) ? Carbon::parse($request->end_date)->endOfDay()
         : Carbon::now()->endOfDay();
        $group_by_column = 'vh_st_payment_method_id';
        $relation = 'paymentMethod'; // Define the relation dynamically
        
        $payment_data = {model_name_space}::query()
        ->selectRaw("$group_by_column, COUNT(*) as total") 
         ->when($start_date && $end_date, function ($query) use ($start_date, $end_date) {
                $query->whereBetween('created_at', [$start_date, $end_date]);
            })
        // Use double quotes to interpolate the variable
        ->groupBy($group_by_column) 
        ->with("{$relation}:id,name")
        ->get();

        $order_status_counts_pie_chart_data = [];

        foreach ($payment_data as $data) {
            $order_status_counts_pie_chart_data[$data->{$relation}->name ?? 'Unknown']
             = (int) $data->total;
        }
        return [
            'data' => [
                'chart_series' => [
                    'payment_methods_pie_chart' 
                    => array_values($order_status_counts_pie_chart_data),
                ],
                'chart_options' => [
                    'labels' => array_keys($order_status_counts_pie_chart_data),
                ],
            ]
        ];
    }
```
