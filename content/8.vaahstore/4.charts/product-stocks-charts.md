

## Highest And Lowest Stocks
This card provides insights into the highest and lowest stock levels over a specified date range, which can be adjusted in the `VaahStore>settings`.

- **Highest Stock:** Represents the maximum stock level for items with stock quantities greater than 10.
- **Lowest Stock:** Reflects the minimum stock level for items with stock quantities between 0 and 10.

This visualization helps track product availability and identify items with low or surplus stock levels.
<img src="/images/vaahstore/product-stocks/stocks-charts.png" alt="Stocks Stats" />

In the top right corner of the card, there is an "**All**" menu button. When clicked, this button filters the view to display all
available stocks, organized into "Highest" and "Lowest" categories.
This feature provides a comprehensive look at stock levels, helping users quickly identify and manage inventory status.


```php
/**
     * stock stats within date range
     */
    Route::post('/charts/stocks-data', 'ProductStocksController@getStocksChartData')
        ->name('vh.backend.store.productstocks.charts.stocks_stats');
```


**Model Method for Get the Highest & Lowest Stocks**

```php
public static function getStocksChartData($request)
{
    $start_date = isset($request->start_date) ? Carbon::parse($request->start_date)->startOfDay() : Carbon::now()->startOfDay();
    $end_date = isset($request->end_date) ? Carbon::parse($request->end_date)->endOfDay() : Carbon::now()->endOfDay();

    // Fetch highest product stocks with quantity > 10
   $highest_stocks = self::where('quantity', '>', 10)
            ->whereBetween('updated_at', [$start_date, $end_date])
            ->orderBy('quantity', 'desc')
            ->take(1)
            ->with(['product', 'productVariation', 'vendor', 'productVariation.medias'])
            ->get(['id', 'quantity', 'vh_st_product_id', 'vh_st_vendor_id', 'vh_st_product_variation_id']);

    // Fetch lowest product stocks with quantity between 0 and 10
    $lowest_stocks = self::whereBetween('quantity', [0, 10])
            ->whereBetween('updated_at', [$start_date, $end_date])
            ->orderBy('quantity', 'asc')
            ->take(1)
            ->with(['product', 'productVariation', 'vendor', 'productVariation.medias'])
            ->get(['id', 'quantity', 'vh_st_product_id', 'vh_st_vendor_id', 'vh_st_product_variation_id']);

    $all_stocks = ProductStock::whereBetween('updated_at', [$start_date, $end_date])->sum('quantity');

    $map_stocks = function ($stocks) use ($all_stocks) {
        return $stocks->map(function ($stock) use ($all_stocks) {
            $product_variation = $stock->productVariation;
            $product_media_ids = $product_variation->medias->pluck('pivot.product_media_id');
            $image_urls = self::getImageUrls($product_media_ids);

            $stock_percentage = $all_stocks > 0 ? ($stock->quantity / $all_stocks) * 100 : 0;

            return (object)[
                'id' => $stock->id,
                'stock' => $stock->quantity,
                'vendor' => $stock->vendor,
                'product' => $stock->product,
                'productVariation' => $stock->productVariation,
                'image_urls' => $image_urls,
                'stock_percentage' => round($stock_percentage, 2),
            ];
        });
    };

    $top_stocks = $map_stocks($highest_stocks)->toArray();
    $lowest_stocks_data = $map_stocks($lowest_stocks)->toArray();

    $highest_stock_quantity = $highest_stocks->first()->quantity ?? 0;
    $lowest_stock_quantity = $lowest_stocks->first()->quantity ?? 0;

    $highest_stock_percentage = $all_stocks > 0 ? ($highest_stock_quantity / $all_stocks) * 100 : 0;
    $lowest_stock_percentage = $all_stocks > 0 ? ($lowest_stock_quantity / $all_stocks) * 100 : 0;

    return [
        'data' => [
            'top_stocks' => $top_stocks,
            'lowest_stocks' => $lowest_stocks_data,
            'all_stocks' => $all_stocks,
            'highest_stock_percentage' => round($highest_stock_percentage, 2),
            'lowest_stock_percentage' => round($lowest_stock_percentage, 2),
        ],
    ];
}

// Helper function to get image URLs for product media
private static function getImageUrls($product_media_ids)
{
    $image_urls = [];
    foreach ($product_media_ids as $product_media_id) {
        $product_media_image = ProductMediaImage::where('product_media_id', $product_media_id)->first(); // Update field name if necessary
        if ($product_media_image) {
            $image_urls[] = $product_media_image->url;
        }
    }
    return $image_urls;
}

```


#### Key Adaptable Areas:
- **Model Name:** _Replace ProductStock::_ with your actual model name, like _InventoryStock::_ or _ProductStocks::_.
- **Field and Relationship Names:** Update fields like product_id, vendor_id, quantity, etc., to reflect your actual database schema.
- **Pivot Table Relationships:** If your pivot table fields or relationships differ, ensure that they match the actual relationship fields and table names in your project.
