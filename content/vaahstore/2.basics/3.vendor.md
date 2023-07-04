# Basics of Vendor in VaahStore

[[toc]]

## What is Vendor?

A vendor is a person or business that purchases goods and services from distributors and resells these items to consumers or other businesses.

In short, it means that the person or business who sell products to `Store`.

### How to create a Vendor?

After activating `VaahStore`, to create a vendor go into `VaahCMS > Store > Vendors` then click on create button. A form to create Vendor will open.

### Requirement to create a Vendor

| Fields         |      | Descriptions                                      |
| ------------ | ---- | -------------------------------------------- |
| Name    |      | This will contain name of the vendor.    |
| Store         |      | This is to choose Store for the vendor.         |
| Approve By        |      | The user which has approved the vendor. By default it is the current active user.        |
| Owned By   |      | The user who owned the vendor.   |
| Status         |      | This is to set the status of the vendor.         |
| Status Notes   |      | Notes are to describe your decision for any status.   |
| Is Default     |      | This is to make current vendor default option for VaahStore.     |
| Auto Approve Products        |      | To automatically approved product from this vendor.        |
| Is Active         |      | This is to Activate or Deactivate your vendor.         |


## Add product to vendor

After creating a vendor, to add products directly to vendor look into the table where all the listing of vendor is coming.

Over there under the `Product` column you will find the total count of the product to their respective vendors along with an option `+` to add new product, click on that.

<img :src="$withBase('/images/vaahstore/product_link_btn_in_vendor.png')" alt="product linking from vendor">

After that a `Add Product` page will open. 

Inside the `Add Product` page there is a dropdown to select and add product.

<img :src="$withBase('/images/vaahstore/dropdown_to_select_add_product_in_vendor.png')" alt="product linking from vendor">

All the added product will be shown in the below table, and some basic changes to the product can be done in the table and then click on above save button, to save the changes.

## API

### create

#### URL
```php
POST <public-url>/public/api/store/vendors
```

#### Request samples

```php
parameter = [
    "name",                             // String
    "slug",                             // String
    "vh_st_store_id",                   // Id
    "approved_by",                      // Id
    "owned_by",                         // Id
    "taxonomy_id_vendor_status",        // Id
    "status_notes",                     // String
    "is_default",                       // Boolean
    "auto_approve_products",            // Boolean
    "is_active",                        // Boolean
];
```

#### Response sample

```php
{
    "status": "success",
    "messages": [
        "Saved"
    ],
    "data": {
        ...........
        ...........
        ...........
    }
}
```

### Get List

#### URL
```php
GET <public-url>/public/api/store/vendors?rows={number_of_rows}
```

#### Response sample

```php
{
    "success": true,
    "data": {
        ...........
        ...........
        ...........
    }
}
```

### Get Record

#### URL
```php
GET <public-url>/public/api/store/vendors/{record_id}
```

#### Response sample

```php
{
    "success": true,
    "data": {
        ...........
        ...........
        ...........
    }
}
```

### Save Product

#### URL
```php
POST <public-url>/public/api/store/vendors/product
```

#### Request samples

```php
parameter = [
    ..........
    'same as create'
    ..........
    "products": {
        "can_update"                // Boolean
        "id"                        // product id
        "product"                   // Id
        "status"                    // Id
    },
];
```

