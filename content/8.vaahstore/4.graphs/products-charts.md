
## Overview
In VaahStore, a comprehensive collection of product statistics provides valuable insights into product performance. This data includes metrics that enable better decision-making, tracking product demand, and understanding customer preferences.
## Top Selling Products
The **Top Selling Products** section showcases the most popular products based on sales data. By analyzing this data, VaahStore helps identify which products are most in demand and resonate most with 
customers, offering insights into customer preferences and market trends.
<img src="/images/vaahstore/product-variation/top-selling-products.png" alt="Top Selling Products" style="max-height: 300px; max-width: 100%;"/>


#### Data Sample

```json
{
  "data": {
    "top_selling_products": [
      {
        "id": 6,
        "name": "Samsug-xl/black",
        "slug": "samsug-xlblack",
        "total_sales": "14",
        "image_urls": [
          "storage/media/BfKeH4EIylunVICIT7Xz6ByU1XofLekYJwW2TSK3.jpg"
        ]
      },
      {
        "id": 4,
        "name": "Samsug-xl/blue",
        "slug": "samsug-xlblue",
        "total_sales": "12",
        "image_urls": []
      },
      {
        "id": 1,
        "name": "Product 1-blue",
        "slug": "product-1-blue",
        "total_sales": "4",
        "image_urls": []
      }
    ]
  }
}
  
```



#### Vue Code to Send Request and Fetch Data

```js
// stores/yourStore.js
import { defineStore } from 'pinia';
import {vaah} from 'your-vaah-instance'; // Adjust this import based on your setup

export const useYourStore = defineStore('store', {
  state: () => ({
    top_selling_variations: null,
  }),
  
 actions: {
   async topSellingProducts() {
     const options = {
       method: 'get',
       query: vaah().clone(this.query)
     };
     await vaah().ajax(
       this.ajax_url + '/charts/top-selling-products',
       this.topSellingProductsAfter,
       options
     );
   },
   //---------------------------------------------------

   topSellingProductsAfter(data,res){
     if (data) {
       this.top_selling_variations = data.top_selling_products;
     }
   },

  //---------------------------------------------------
  
}
});
```

**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php
use App\Http\Controllers\YourController;

Route::get ('/charts/top-selling-products', [YourController::class, 'topSellingProducts']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function topSellingProducts(Request $request)
    {
        try{
            return {model_namespace}::topSellingProducts($request);
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
 public static function topSellingProducts($request)
    {
        $limit = 5;
        $query = OrderItem::query();
        // Model NameSpace where the quantity with product available

        if (isset($request->filter)) {
            $query = $query->quickFilter($request->filter);
        }
          // Define the relation based on the user's request
            $relation = 'medias'; 
        $top_selling_variations = $query
            ->select('vh_st_product_variation_id')
            ->with(['productVariation' => function ($q) {
                $q->with($relation); // Dynamically load the requested relation
            }])
            ->groupBy('vh_st_product_variation_id')
            ->get();

        // Map and process top-selling product by variants
        $top_selling_variations = $top_selling_variations->map(function ($item) use ($request) {
            $sales_query = OrderItem::where('vh_st_product_variation_id', $item
            ->vh_st_product_variation_id);

            if (isset($request->filter)) {
                $sales_query = $sales_query->quickFilter($request->filter);
            }

            $total_sales = $sales_query->sum('quantity');
            $product_variation = $item->productVariation;
            $product_media_ids = $product_variation->medias->map(function ($media) {
                return $media->pivot->vh_st_product_media_id;
            });
            $image_urls = self::getImageUrls($product_media_ids);

            return [
                'id' => $product_variation->id,
                'name' => $product_variation->name,
                'slug' => $product_variation->slug,
                'total_sales' => $total_sales,
                'image_urls' => $image_urls,
            ];
        })
            ->sortByDesc('total_sales');

        if (!isset($request->filter['time']) || $request->filter['time'] !== 'all') {
            $top_selling_variations = $top_selling_variations->take($limit);
        }

        return [
            'data' => [
                'top_selling_products'=>$top_selling_variations->values(),]
        ];
    }
    //----------------------------------------------------------------------------------
    

```




## Top Brands
The **Top Brand**s section highlights the most popular brands based on sales data. By analyzing this data, VaahStore helps identify which brands resonate most with customers, providing insights into 
brand preferences and trends in the market.
<img src="/images/vaahstore/product-variation/top-brands.png" alt="Top Brands" style="max-height: 300px; max-width: 100%;"/>


#### Data Sample

```json
{
  "data": {
    "top_selling_brands": [
      {
        "id": 6,
        "name": "Nike",
        "slug": "nike",
        "total_sales": "32"
      },
      {
        "id": 4,
        "name": "Samsug",
        "slug": "samsung",
        "total_sales": "8"
      }
    ]
  }
}
  
```





**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php
use App\Http\Controllers\YourController;

Route::get ('/charts/top-selling-brands', [YourController::class, 'topSellingBrands']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function topSellingBrands(Request $request)
    {
        try{
            return {model_namespace}::topSellingBrands($request);
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

**Model Method for Return Top Brands List Data**

```php
 public static function topSellingBrands($request)
    {
        $limit = 5;
        $query = OrderItem::query();

        if (isset($request->filter)) {
            $query = $query->quickFilter($request->filter);
        }

        $top_brands_by_product = $query
            ->select('vh_st_product_id')
            ->with(['product' => function ($query) {
                $query->with('brand');
            }])
            ->groupBy('vh_st_product_id')
            ->get();

        $top_brands_by_product = $top_brands_by_product->map(function ($item) use ($request) {
            $sales_query = OrderItem::where('vh_st_product_id', $item->vh_st_product_id);

            if (isset($request->filter)) {
                $sales_query = $sales_query->quickFilter($request->filter);
            }
            // Calculate total sales for the product
            $total_sales = $sales_query->sum('quantity');
            $product = $item->product;

            if ($product) {
                $brand = $product->brand;

                return [
                    'total_sales' => $total_sales,
                    'id' => $brand?->id,
                    'name' => $brand?->name,
                    'slug' => $brand?->slug,
                ];
            }
            return null;
        })
            ->filter()
            ->sortByDesc('total_sales');

        if (!isset($request->filter['time']) || $request->filter['time'] !== 'all') {
            $top_brands_by_product = $top_brands_by_product->take($limit);
        }
        return [
            'data' => [
                'top_selling_brands' => $top_brands_by_product->values(),
            ]
        ];
    }
    //----------------------------------------------------------------------------------
    

```



## Top Categories
The **Top Categories** section highlights the highest-performing product categories based on sales data. By analyzing this data, VaahStore helps identify which categories are most popular 
among customers, providing valuable insights into trends and customer preferences.
<img src="/images/vaahstore/product-variation/top-categories.png" alt="Top Categories" style="max-height: 300px; max-width: 100%;"/>


#### Data Sample

```json
{
  "data": {
    "top_selling_products": [
      {
        "id": 6,
        "name": "Electricals",
        "slug": "electricals"
      },
      {
        "id": 4,
        "name": "Electronics",
        "slug": "electronics"
      },
      {
        "id": 1,
        "name": "Mens",
        "slug": "mens"
      }
    ]
  }
}
  
```





**Steps To Backend Data Flow:**

**API Endpoint**

```php
// routes/api.php
use App\Http\Controllers\YourController;

Route::get ('/charts/top-selling-categories', [YourController::class, 'topSellingCategories']);
```

**Controller Method to Retrieve Chart Data**

```php
// http/Controllers/Your_Controller
public function topSellingCategories(Request $request)
    {
        try{
            return {model_namespace}::topSellingCategories($request);
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

**Model Method for Return Top Categories List Data**

```php
 public static function topSellingCategories($request)
    {
        $limit = 5;
        $query = OrderItem::query();

        // Apply filters if provided in the request
        if (isset($request->filter)) {
            $query = $query->quickFilter($request->filter);
        }

        // Get the top-selling categories by product, with all categories and their parents
        $top_categories_by_product = $query
            ->select('vh_st_product_id')
            ->with(['product' => function ($query) {
                // Load all categories for the product along with their parent categories
                $query->with('productCategories.parentCategory');
            }])
            ->groupBy('vh_st_product_id')
            ->get();

        // Process each product to gather all unique final parent categories
        $top_categories_by_product = $top_categories_by_product->map(function ($item) {
            $product = $item->product;

            if ($product) {
                // Map through each category to find its final parent category
                $parent_categories = $product->productCategories->map(function ($category) {
                    $final_parent = $category;
                    while ($final_parent && $final_parent->parentCategory) {
                        $final_parent = $final_parent->parentCategory;
                    }
                    return $final_parent;
                })->unique('id'); // Ensure unique final parent categories

                // Structure the output data for each unique final parent category
                return $parent_categories->map(function ($parent_category) {
                    return [
                        'id' => $parent_category?->id,
                        'slug' => $parent_category?->slug,
                        'name' => $parent_category?->name,
                    ];
                });
            }

            return null;
        })
            ->filter() // Remove null values
            ->flatten(1) // Flatten the result to a single-level array
            ->take($limit); // Limit to top categories if not set to 'all'

        return [
            'data' => [
                'top_selling_categories' => $top_categories_by_product->values(),
            ]
        ];
    }
    //----------------------------------------------------------------------------------
    

```

