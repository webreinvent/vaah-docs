# VaahCMS

[[toc]]

## Introduction
Reusable components are super important in VueJS. It helps you save so much time and when done right, really makes your project more readable and maintainable.

One of the key phrases that developers love using is Don’t Repeat Yourself (DRY). In VueJS, there are lots of cases where reusable code is useful: a scroll functionality, a header component.



## Components

### AutoComplete

Extended input that provide suggestions while the user types. Use with Field to access all functionalities

```vue
<AutoComplete :options="options"
              :selected_value="value">

</AutoComplete>
```

Data Format : 

```
"options" = {
    [
      'id': 1,                
      'name': 'XYZ',        
      'slug': 'xyz'
    ],
    [
      'id': 2,  
      'name': 'ABC',         
      'slug': 'abc'
    ]
},

"value" = 'XYZ'

```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| selected_value | Value of that `field_name` passes in Options | String, Number |
| options | Options / suggestions | Array, Object | `Required` |
| field_name | Property of the object (if data is array of objects) to use as display text, and to keep track of selected option | String | name |
| search_fields | Fields that are searchable | Array | ["name"] |
| icon | Icon name to be added | String | search |
| open_on_focus | Open dropdown list on focus | Boolean | false |
| placeholder | Field placeholder, displayed when there's no value. | String | Search


### AutoCompleteAjax

Extended input that provide suggestions while the user types. The options/suggestions will be fetch from ajax url.

```vue
<AutoCompleteAjax :options="options"
              :ajax_url="ajax_url"
              :selected_value="value">

</AutoCompleteAjax>
```

Data Format : 

```
"options" = {
    [
      'id': 1,                
      'name': 'XYZ',        
      'slug': 'xyz'
    ],
    [
      'id': 2,  
      'name': 'ABC',         
      'slug': 'abc'
    ]
},

"value" = 'XYZ'

```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| selected_value | Value of that `display_column` passes in Options | String |
| label | Options / suggestions | String | Search |
| ajax_url | Ajax Url | String | `Required`
| display_column | Fields that are searchable | String | name |
| unique_column | Column's value display in field option's modal | String | id |


### AutoCompleteUsers

Extended input that provide suggestions of `VaahCms Users` while the user types. Use with Field to access all functionalities

```vue
<AutoCompleteUsers @onSelect="setUser"
                   :selected_value="value">

</AutoCompleteUsers>
```

```
setUser: function (user){
   // ----------
   // ----------
}
```


| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| selected_value | Binding value | String, Number |


### ButtonMeta

Button to show Classic modal overlay to include any content you may need

```vue
<ButtonMeta :value="value"></ButtonMeta>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| type | Type (color) of the button	 | String | is-default |
| label | Button label | String | View |
| value | Modal Content | Object, String |


### ClickToCopy

Click To Copy Vue.js component

```vue
<ClickToCopy :text="label" :data="value"></ClickToCopy>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| text | Text to display | String |
| data | Data to be copied | String |


### DatePicker

An input with a simple dropdown/modal for selecting a date, uses native datepicker for mobile

```vue
<DatePicker :selected_value="value"></DatePicker>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| icon | Icon name to be added | Array | calendar-alt |
| selected_value | Laravel Pagination Object | String |
| placeholder | Laravel Pagination Object | String | Type or select a date... |


### FileUploader

Component that can upload anything you throw at it, optimizes images for faster uploads, and offers a great, accessible, silky smooth user experience.

```vue
<FileUploader></FileUploader>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| value | Laravel Pagination Object | Array |
| upload_url | Laravel Pagination Object | String |
| folder_path | Laravel Pagination Object | String | public/media |
| file_input_name | Laravel Pagination Object | String | file |
| file_name | Laravel Pagination Object | String |
| uid | Laravel Pagination Object | String | uid-image-group-current-date |
| custom_class | Laravel Pagination Object | String | is-primary |
| label | Laravel Pagination Object | String | Drop your image here or click to upload. |
| icon | Icon name to be added | String | search |
| aspect_ratio | Laravel Pagination Object | String |
| allow_multiple | Laravel Pagination Object | Boolean | true |
| allowed_types | Laravel Pagination Object | String | image/jpeg, image/png, image/gif |
| max_size | Laravel Pagination Object | String | 2MB |
| remove_after_upload | Laravel Pagination Object | Boolean | true |
| show_allowed_types | Laravel Pagination Object | Boolean | true |
| instant_upload | Laravel Pagination Object | Boolean | true |
| app_url | Laravel Pagination Object | String |

### Loader

This component to create placeholder loading, like Facebook cards loading.

```vue
<Loader></Loader>
```

### Pagination

This component is responsive and flexible pagination.

```vue
<Pagination :list="list">
</Pagination>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| list | Laravel Pagination Object | 


### TableTrActedBy

This component can be used to show `User name` in tabular format.

```vue
<TableTrActedBy :label="label" 
                 :value="value">
</TableTrActedBy>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |


### TableTrDateTime

This component can be used to show `Date Time` in tabular format.

```vue
<TableTrDateTime :label="label" 
                 :value="value" 
                 :is_upper_case="false">
</TableTrDateTime>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |
| is_upper_case | Whether to show value in Uppercase format |

### TableTrActedBy

This component can be used to show `User name` in tabular format.

```vue
<TableTrDateTime :label="label" 
                 :value="value">
</TableTrDateTime>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |


### TableTrMeta

This component can be used to visualize `view` button to show Object or Array data in `modal`.

```vue
<TableTrMeta :label="label" 
             :value="value">
</TableTrMeta>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |


### TableTrStatus

This component can be used to show value as `status` in tabular format.

```vue
<TableTrStatus :label="label" 
               :value="value">
</TableTrStatus>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |


### TableTrTag

This component can be used to show value as `tag` in tabular format.

```vue
<TableTrTag :label="label" 
            :value="value"
            :is_copiable="false"
            :is_hashed="false">
</TableTrTag>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |
| is_copiable | Set true to allow copy that value |
| is_hashed | Whether to show `#` as prefix with value  |



### TableTrUrl

This component can be used to visualize Url in tabular format. “URL link” columns are used to render hyperlinks that can be clicked to open pages within your website, or in external websites.

```vue
<TableTrUrl :label="label" 
               :value="value">
</TableTrUrl>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |


### TableTrView

This component can be used to visualize data value in tabular format.

```vue
<TableTrView :label="label" 
               :value="value" 
               :is_copiable="false" 
               :is_upper_case="true">

</TableTrView>
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |
| is_copiable | Set true to allow copy that value |
| is_upper_case | Whether to show value in Uppercase format |


### TableTrYesNo

This component can be used to visualize `Boolean` value in tabular format.

```vue
<TableTrYesNo :label="label" :value="value">

</TableTrYesNo>
```


| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| label | Table Heading | 
| value | Table Data |


### TagInputs

A simple tag input field that can have autocomplete functionality

```vue
<TagInputs :selected_value="value" :options="options">

</TagInputs>
```

```
"options" = {
    [
      'id': 1,                
      'name': 'XYZ',        
      'slug': 'xyz'
    ],
    [
      'id': 2,  
      'name': 'ABC',         
      'slug': 'abc'
    ]
},

"value" = {
    [
        'id': 1,                
         'name': 'XYZ',        
         'slug': 'xyz'
    ]
}

```


| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| selected_value | Binding value | Array |
| options | Array of available options. | Array |
| field_name | Property of the object (if data is array of objects) to use as display text | String | name |
| search_fields | Fields that are searchable | Array | ["name", "slug"] |
| icon | Icon name to be added | String | search |
| open_on_focus | Opens a dropdown with choices when the input field is focused | Boolean | false |
| allow_new | When autocomplete, it allow to add new tags | Boolean | false |
| placeholder | Field placeholder, displayed when there's no value. | String | Search |



### TreeSelect

TreeSelect is a multi-select component with hierarchical options support for Vue.js.

```vue
 <TreeSelect v-model="type_id"
             placeholder="Select a Type"
             :is_clearable="false"
             :is_multiple="false" 
             :options="options" >

</TreeSelect>
```

```
options: [ 
            {
               id: 'a',
               name: 'a',
               children: [ 
                   {
                      id: 'aa',
                      name: 'aa',
                   }, 
                   {
                      id: 'ab',
                      name: 'ab',
                   } 
               ],
            }, 
            {
               id: 'b',
               name: 'b',
            }, 
            {
               id: 'c',
               name: 'c',
            } 
         ],
```


| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| v-model | The value of the control. Should be id or node object when `:is_multiple="false"`, or an array of id or node object when `:multiple="true"`.  | String, Number, Array, Object |
| options | Array of available options. | Array, Object |
| ajax_url | Ajax Url | String, Number |
| custom_class | Field classes | String |
| label | Field label | String |
| labelPosition | Field label position | String |
| placeholder | Field placeholder, displayed when there's no value. | String |
| is_multiple | Set true to allow selecting multiple options (a.k.a., multi-select mode). | Boolean | false |
| is_clearable | Whether to show an "×" button that resets value. | Boolean | false |
| show_count | Whether to show a children count next to the label of each branch node. | Boolean | true |


### TreeView

The TreeView displays hierarchical data in a traditional tree structure.

It supports user interaction through mouse or touch events and performs re-ordering operations by using the drag-and-drop functionality.

```vue
<TreeView :options="options">

</TreeView>
```

```
 data: [
          {
            name: 'Node 1',
            id: 1,
            pid: 0,
            children: [
              {
                name: 'Node 1-2',
                id: 2,
                isLeaf: true,
                pid: 1
              }
            ]
          },
          {
            name: 'Node 2',
            id: 3,
            pid: 0,
            disabled: true
          },
          {
            name: 'Node 3',
            id: 4,
            pid: 0
          }
        ]
```


| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| ajax_list_url | Url to get list of options | String |
| options | Binding options | Array, Object |
| ajax_delete_url | Url to delete | String |



### VaahVueEditor

This is a `TipTap` Editor. Tiptap gives you full control about every single aspect of your text editor experience.

```vue
<VaahVueEditor :content="content">

</VaahVueEditor>
```


| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| content | Content or Data property you wish to bind it to |



### VueErrors

The component to display single error message or multiple error messages to user.

```vue
<VueErrors :list="list">

</VueErrors>
```

```
"list":[
    'Error Message 1',
    'Error Message 2'
]
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| list | Array of Messages | Array, Object |


### VueMessages

The component to display single message or multiple messages to user.

```vue
<VueMessages :list="list">

</VueMessages>
```

```
"list":[
    'Message 1',
    'Message 2'
]
```

| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| list | Array of Messages | Array, Object |


### Content Fields

```
<ContentFieldAll :label="label"
     :field_slug="field_slug"    // text, slug, textarea, number, phone-number, boolean, 
                                 editor, code-mirror, select, date, time, date-time, 
                                 user, email, password, uuid, currency-code, list, image,
                                  media, image-group, phone-number, address, relation, 
                                 tags, json, seo-meta-tags, twitter-card, facebook-card, 
     :meta="meta"
     :placeholder="placeholder"
     :labelPosition="label_position"
     v-model="value">
</ContentFieldAll>
```


| Name | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| field_slug | Array of Messages | String |
| value | Binding Value | String, Number, Array, Object |
| type | Type (color) of the field | String |
| size | Size (color) of the field | String |
| custom_class | Field classes | String |
| label | Field label | String |
| labelPosition | Field label position | String |
| placeholder | Field placeholder, displayed when there's no value. | String |
| ajax_url | Ajax Url | String |
| app_url | Url to get Relation's Options  | String |
| upload_url | Url to upload a file | String |
| currency_options | Options for Currency Code | Array |
| meta | Meta value | Array, Object |
| display_column | Fields that are searchable / visible in field | String | name |
| unique_column | Column's value display in tag input's modal | String | email |
| is_simple | Set `true` to visible all features / buttons | Boolean | false |

