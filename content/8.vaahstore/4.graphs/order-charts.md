---
customer_count_grouped: [
{
name: 'Total Orders',
data: [30, 40, 50, 45, 70, 80, 90, 60, 50, 70, 30, 20 ]
},

{
name: 'Completed Orders',
data: [20, 30, 15, 30, 35, 25, 30, 40, 50, 45, 35, 15]
}

]

xaxis: {
categories: ['January', 'febraury', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
}

data_pie: [30, 40, 45]



data_labels: {
labels: [ 'Placed','Shipped', 'Delivered'],
}

data_donut: {
labels: ['Placed', 'Shipped', 'Delivered'],
chart: {
id: 'donut-chart',
type: 'donut',
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

chartOptions: {
xaxis: {
categories: [
'January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October',
'November', 'December'
],
},
stroke: {
curve: 'smooth', 
width: 4,
},
title: {
text: 'Orders Count',
align: 'center',
style: {
fontSize: '16px',
fontWeight: 'bold',
color: '#263238'
}
},
tooltip: {
enabled: true,
shared: true,
style: {
fontSize: '14px'
}
},
legend: {
position: 'top',
horizontalAlign: 'center',
floating: false,
fontSize: '14px',

}
}

---




## Orders Statuses Distribution

### Pie Chart

::preview{component='<Charts/>' path='./components/store/Charts.vue' }

<div class="flex  justify-center items-center">



:customers-count-bar-chart{type='pie' :chartOptions="data_donut" title='Order Status Distribution' height=300  :chartSeries="data_pie"}

</div>

#shortCode

```vue

<Charts type="pie" title='Order Status Distribution' height=400 titleAlign='center' :chartSeries="[30, 40, 45]" :chartOptions="{ labels: ['Placed', 'Shipped', 'Delivered']}"/>
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
    async fetchOrdersPieChartData()
    {
        const options = {
            method: 'post',
            query: vaah().clone(this.query)
        };
        await vaah().ajax(
            this.ajax_url + '/charts/data',
            this.fetchOrdersPieChartDataAfter,
            options
        );
    },

  //---------------------------------------------------
  fetchOrdersPieChartDataAfter(data,res){
    if (!data || !Array.isArray(data.chart_series)) {
      return;
    }
    this.updatePieChartSeries(data.chart_series?.orders_statuses_pie_chart);

    const updated_pie_chart_options = {
      ...data.chart_options, // Merge existing options
      title: {
        text: 'Order Status Distribution', // Add your chart title here
        align: 'center', // You can adjust alignment: 'left', 'center', 'right'
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#263238'
        }
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
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#263238',
              },
              value: {
                show: true,  // Show value
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#000',  // Color for the value
                formatter: function(val) {
                  return val; // Return only the value without percentage
                }
              },
            },
          },
        },
      },
    };

    this.updatePieChartOptions(updated_pie_chart_options);

  },
  //---------------------------------------------------
  updatePieChartOptions(newOptions) {
    this.pieChartOptions = newOptions;
  },

  //---------------------------------------------------
  updatePieChartSeries(newSeries) {
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
  store.fetchOrdersPieChartData(); // Calls the method to fetch data
});
</script>

```


**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php
use App\Http\Controllers\YourController;

Route::post ('/charts/data', [YourController::class, 'fetchOrdersPieChartData']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function fetchOrdersPieChartData(Request $request)
    {
        try{
            return {model_namespace}::fetchOrdersPieChartData($request);
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
public static function fetchOrdersPieChartData(Request $request)
    {
        
        $group_by_column = 'order_status';
        $orders_statuses_count = self::select($group_by_column)
            ->selectRaw('COUNT(*) as count')
            ->groupBy($group_by_column);

        $orders_statuses_count = self::appliedFilters($orders_statuses_count, $request);

        $order_status_counts_pie_chart_data = $orders_statuses_count
        ->pluck('count', $group_by_column)->toArray();

        return [
            'data' => [
                'chart_series' => [
                    'orders_statuses_pie_chart'=>
                    array_values($order_status_counts_pie_chart_data),
                    ],
                'chart_options' => [
                    'labels' => array_keys($order_status_counts_pie_chart_data),
                ],
            ],

        ];
    }
    //----------------------------------------------------------------------------------
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


### Donut Chart

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

:customers-count-bar-chart{type='donut' :chartOptions="data_donut" title='Order Status Distribution' height=300  :chartSeries="data_pie"}

</div>

#shortCode

```vue
<Charts type="donut" title='Order Status Distribution' height=400 titleAlign='center' :chartSeries="[30, 40, 45]" :chartOptions="{ labels: ['Placed', 'Shipped', 'Delivered']}"/>

```

::

### Line Chart

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

[comment]: <> (:customers-count-bar-chart{type='donut' :chartOptions="data_donut" title='Order Status Distribution' height=300  :chartSeries="data_pie"})

:charts{type='line' :chartOptions="chartOptions" title='Orders Count' height=400 width=600 :chartSeries="customer_count_grouped"}


</div>

#shortCode


```vue
<Charts
  type="line"
  title='Orders Count'
  titleAlign='center'
  height=400
  width=600
  :chartOptions="{
        xaxis: {
            categories: [
                'January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August', 
                'September', 'October', 'November', 'December'
            ]
        },
        stroke: {
            curve: 'smooth', // Set the curve to smooth for smoother lines
            width: 2, // Set the stroke width
            colors: ['#FF5733', '#33FF57'] // Example colors for the lines
        },
        title: {
            text: 'Orders Count',
            align: 'center',
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#263238'
            }
        },
        tooltip: {
            enabled: true,
            shared: true,
            style: {
                fontSize: '14px'
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            floating: false,
            fontSize: '14px',
            formatter: function (val, opts) {
                return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
            }
        }
    }"
  :chartSeries="[
        { name: 'Total Orders', data: [30, 40, 50, 45, 70, 80, 90, 60, 50, 70, 30, 20] },
        { name: 'Completed Orders', data: [30, 40, 50, 45, 70, 80, 90, 60, 50, 70, 30, 20] }
    ]"
/>

```

::


### Area Chart

::preview{component='<Charts />'}

<div class="flex flex-wrap gap-3 justify-center items-center">

[comment]: <> (:customers-count-bar-chart{type='donut' :chartOptions="data_donut" title='Order Status Distribution' height=300  :chartSeries="data_pie"})

:charts{type='area' :chartOptions="chartOptions" title='Orders Count' height=400 width=600 :chartSeries="customer_count_grouped"}


</div>
