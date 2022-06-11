# Helpers

`VaahCms` includes a variety of global "helper" `Vue` Functions and Components. Many of these Functions and Components are used in the Vue component; however, you are free to use them in your own applications if you find them convenient.

There are 2 file in `Helpers` directory.

- GlobalComponents.js
- VaahHelper.js


## How to use Helpers?
First you have to check that your `Module` or `Theme` has helpers at `VaahCms/Themes/BlogTheme/Vue/vaahvue/helpers`.

If not found then download it from [here](https://github.com/webreinvent/vaahvue).


## GlobalComponents

In `GlobalComponents.js`, there are components that can be used anywhere in an application, including within other components.

| Component Name | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| Loader         | Component to create Placeholder/Table loading, like Facebook cards loading. Reference Url: [Loader](https://www.npmjs.com/package/vue-content-loader) |
| ClickToCopy    | Component to copy the content on click. Reference Url: [Click to Copy](https://www.npmjs.com/package/vaah-vue-clicktocopy) |
| VueErrors      | Component to show Error messages in list.                    |
| VueMessages    | Component to show Success messages in list.                  |

##### Loader
This component to create placeholder loading, like Facebook cards loading.

```vue
<Loader></Loader>
```
##### ClickToCopy
Click To Copy Vue.js component

```vue
<ClickToCopy text="ClickToCopy" :data="value"></ClickToCopy>
```

| Properties | Description                                                  | Type            | Default              |
| ---- | ------------------------------------------------------------ | --------------- | -------------------- |
| text | Text to display | String |
| data | Data to be copied | String |


##### VueErrors
The component to display single error message or multiple error messages to user.

```vue
<VueErrors :list="list"></VueErrors>
```

```
"list":[
    'Error Message 1',
    'Error Message 2'
]
```
##### VueMessages
The component to display single message or multiple messages to user.

```vue
<VueMessages :list="list"></VueMessages>
```

```
"list":[
    'Message 1',
    'Message 2'
]
```


## Vaah Helper

In `VaahHelper.js`, there are functions that can be used anywhere in `Vue` Components.

Example:

```
//---------------------------------------------------------------------
getList: function () {
    let url = this.ajax_url + '/list';
    let params = {
        q:'search'
    };
    // ajaxGet(url, params, callback)
    this.$vaah.ajaxGet(url, params, this.getListAfter);
},
//---------------------------------------------------------------------
getListAfter: function (data, res) {

},
//---------------------------------------------------------------------
```


|      | Function Name               | Parameter                                                    | Description                                                  |
| ---- | --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
|      | ajaxGet                     | `url`  `params`  `callback`                                  | Component to create Placeholder/Table loading, like Facebook cards loading. Reference Url: [Loader](https://www.npmjs.com/package/vue-content-loader) |
|      | ajax                        | `url`  `params`  `callback`  `query`                         | Component to copy the content on click. Reference Url: [Click to Copy](https://www.npmjs.com/package/vaah-vue-clicktocopy) |
|      | processResponse             | `response`                                                   | Component to show Error messages in list.                    |
|      | processError                | `error`                                                      | Component to show Success messages in list.                  |
|      | updateRootState             | `state_name`  `state_value`                                  | Component to show Success messages in list.                  |
|      | updateState                 | `update`                                                     | Component to show Success messages in list.                  |
|      | updateFiltersFromURL        | `state_name`  `namespace`  `route`                           | Component to show Success messages in list.                  |
|      | confirmCopiedData           | `data`                                                       | Component to show Success messages in list.                  |
|      | toastSuccess                | `messages`                                                   | Component to show Success messages in list.                  |
|      | toastErrors                 | `messages`                                                   | Component to show Success messages in list.                  |
|      | copy                        | `data`  `confirm=true`                                       | Component to show Success messages in list.                  |
|      | console                     | `data`  `label='--->'`                                       | Component to show Success messages in list.                  |
|      | updateCurrentURL            | `query`  `router`                                            | Component to show Success messages in list.                  |
|      | findAndReplaceString        | `find_string`  `replace_string`  `full_string`               | Component to show Success messages in list.                  |
|      | findAndReplace              | `arr`  `key`  `data`                                         | Component to show Success messages in list.                  |
|      | updateArray                 | `array`  `updatedElement`                                    | Component to show Success messages in list.                  |
|      | removeFromArray             | `arr`  `element`                                             | Component to show Success messages in list.                  |
|      | removeEmpty                 | `obj`                                                        | Component to show Success messages in list.                  |
|      | findInArrayByKey            | `array`  `key`  `value`                                      | Component to show Success messages in list.                  |
|      | pluckFromObject             | `obj`  `key`                                                 | Component to show Success messages in list.                  |
|      | toggle                      | `item`                                                       | Component to show Success messages in list.                  |
|      | testReturn                  |                                                              | Component to show Success messages in list.                  |
|      | removeInArrayByKey          | `array`  `element`  `key`                                    | Component to show Success messages in list.                  |
|      | existInArray                | `array`  `element`                                           | Component to show Success messages in list.                  |
|      | existInArrayByKey           | `array`  `element`  `key`                                    | Component to show Success messages in list.                  |
|      | limitString                 | `string`  `characters`                                       | Component to show Success messages in list.                  |
|      | formatDate                  | `value`                                                      | Component to show Success messages in list.                  |
|      | formatTime                  | `value`                                                      | Component to show Success messages in list.                  |
|      | formatDateTime              | `value`                                                      | Component to show Success messages in list.                  |
|      | fromNow                     | `value`                                                      | Component to show Success messages in list.                  |
|      | currentDate                 |                                                              | Component to show Success messages in list.                  |
|      | currentDateTime             |                                                              | Component to show Success messages in list.                  |
|      | dateForHumans               | `value`                                                      | Component to show Success messages in list.                  |
|      | dateTimeForHumans           | `value`                                                      | Component to show Success messages in list.                  |
|      | dateTimeForHumansWithDay    | `value`                                                      | Component to show Success messages in list.                  |
|      | hasPermission               | `permissions`  `slug`                                        | Component to show Success messages in list.                  |
|      | paginate                    | `event`  `page`                                              | Component to show Success messages in list.                  |
|      | makePagination              | `data`                                                       | Component to show Success messages in list.                  |
|      | paginateIsActive            | `page`                                                       | Component to show Success messages in list.                  |
|      | toIndianFormat              | `nStr`                                                       | Component to show Success messages in list.                  |
|      | toLabel                     | `str`                                                        | Component to show Success messages in list.                  |
|      | toUpperCaseWords            | `str`                                                        | Component to show Success messages in list.                  |
|      | currencyToSymbol            | `currency`                                                   | Component to show Success messages in list.                  |
|      | setCookies                  | `cookie_name`  `value`  `expiry_days`                        | Component to show Success messages in list.                  |
|      | getCookies                  | `cookie_name`                                                | Component to show Success messages in list.                  |
|      | deleteCookies               | `cookie_name`                                                | Component to show Success messages in list.                  |
|      | shiftToTop                  | `arr`  `key`  `value`                                        | Component to show Success messages in list.                  |
|      | timeDifferenceInSeconds     | `started_at`  `ended_at`                                     | Component to show Success messages in list.                  |
|      | secondsToHoursMinutsSeconds | `seconds`                                                    | Component to show Success messages in list.                  |
|      | getTimeDifferenceInHHMMSS   | `started_at`  `ended_at`                                     | Component to show Success messages in list.                  |
|      | secondsToHours              | `seconds`                                                    | Component to show Success messages in list.                  |
|      | getTimeDifferenceInDays     | `started_at`  `ended_at`                                     | Component to show Success messages in list.                  |
|      | addTagToOneSignalUser       | `tag_name`  `tag_value`                                      | Component to show Success messages in list.                  |
|      | deleteTagToOneSignalUser    | `tag_name`                                                   | Component to show Success messages in list.                  |
|      | openUrl                     | `event`  `url`                                               | Component to show Success messages in list.                  |
|      | remainingCharacters         | `event`  `min_characters`  `max_characters`  `target_show_remaining` | Component to show Success messages in list.                  |
|      | randomString                | `length=6`                                                   | Component to show Success messages in list.                  |
|      | updateDocumentUrlTitle      | `title`  `url`                                               | Component to show Success messages in list.                  |
|      | strToSlug                   | `title`                                                      | Component to show Success messages in list.                  |
|      | isInt                       | `n`                                                          | Component to show Success messages in list.                  |
|      | isFloat                     | `n`                                                          | Component to show Success messages in list.                  |
|      | fileNameFromUrl             | `url`                                                        | Component to show Success messages in list.                  |
|      | fileExtensionFromUrl        | `url`                                                        | Component to show Success messages in list.                  |
|      | getClipboardValue           |                                                              | Component to show Success messages in list.                  |
|      | getNonReactiveObject        | `obj`                                                        | Component to show Success messages in list.                  |

