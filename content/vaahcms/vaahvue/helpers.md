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
|      | ajaxGet                     | `url`  `params`  `callback`                                  | Method is used to make an HTTP `Get` request |
|      | ajax                        | `url`  `params`  `callback`  `query`                         | Method is used to make an HTTP `Post` request|
|      | processResponse             | `response`                                                   | Component to show Error messages in list.                    |
|      | processError                | `error`                                                      | Component to show Success messages in list.                  |
|      | updateRootState             | `state_name`  `state_value`                                  | Component to show Success messages in list.                  |
|      | updateState                 | `update`                                                     | Component to show Success messages in list.                  |
|      | updateFiltersFromURL        | `state_name`  `namespace`  `route`                           | Component to show Success messages in list.                  |
|      | confirmCopiedData           | `data`                                                       | Component to show Success messages in list.                  |
|      | toastSuccess                | `messages`                                                   | Accept messages in array format to show success notification.                  |
|      | toastErrors                 | `messages`                                                   | Accept messages in array format to show error notification.                  |
|      | copy                        | `data`  `confirm=true`                                       | Copy data with notification.                  |
|      | console                     | `data`  `label='--->'`                                       | Print data in console screen when debug is true.                  |
|      | updateCurrentURL            | `query`  `router`                                            | Component to show Success messages in list.                  |
|      | findAndReplaceString        | `find_string`  `replace_string`  `full_string`               | Find and replace substring in string.                  |
|      | findAndReplace              | `arr`  `key`  `data`                                         | Find and replace value in array.                  |
|      | updateArray                 | `array`  `updatedElement`                                    | Component to show Success messages in list.                  |
|      | removeFromArray             | `arr`  `element`                                             | Remove an element from Array.                  |
|      | removeEmpty                 | `obj`                                                        | Component to show Success messages in list.                  |
|      | findInArrayByKey            | `array`  `key`  `value`                                      | Find an element of array by key.                  |
|      | pluckFromObject             | `obj`  `key`                                                 | Component to show Success messages in list.                  |
|      | toggle                      | `item`                                                       | Component to show Success messages in list.                  |
|      | testReturn                  |                                                              | Component to show Success messages in list.                  |
|      | removeInArrayByKey          | `array`  `element`  `key`                                    | Remove an element of array by key.                  |
|      | existInArray                | `array`  `element`                                           | Check whether a given value exists in an array or not.                  |
|      | existInArrayByKey           | `array`  `element`  `key`                                    | Check whether a given value exists in specified key of array or not.                  |
|      | limitString                 | `string`  `characters`                                       | Component to show Success messages in list.                  |
|      | formatDate                  | `value`                                                      | Convert given date string in to `YYYY-MM-DD` format.                |
|      | formatTime                  | `value`                                                      | Convert given date time string in to `HH:mm` format.                     |
|      | formatDateTime              | `value`                                                      | Convert given date time string in to `YYYY-MM-DD HH:mm` format.                  |
|      | fromNow                     | `value`                                                      | Component to show Success messages in list.                  |
|      | currentDate                 |                                                              | Return Current Date in `YYYY-MM-DD` format.                  |
|      | currentDateTime             |                                                              | Return Current Date Time in `YYYY-MM-DD HH:mm:ss` format.                   |
|      | dateForHumans               | `value`                                                      | Convert given date time string in to `ddd, MMM DD, YYYY` format.                  |
|      | dateTimeForHumans           | `value`                                                      | Convert given date time string in to `YYYY-MM-DD hh:mm A` format.                  |
|      | dateTimeForHumansWithDay    | `value`                                                      | Convert given date time string in to `YYYY MMM DD hh:mm A (dddd)` format.                |
|      | hasPermission               | `permissions`  `slug`                                        | Component to show Success messages in list.                  |
|      | paginate                    | `event`  `page`                                              | Component to show Success messages in list.                  |
|      | makePagination              | `data`                                                       | Component to show Success messages in list.                  |
|      | paginateIsActive            | `page`                                                       | Component to show Success messages in list.                  |
|      | toIndianFormat              | `nStr`                                                       | Component to show Success messages in list.                  |
|      | toLabel                     | `str`                                                        | Convert string in to `Title` format.                  |
|      | toUpperCaseWords            | `str`                                                        | Converts the first character of a string to uppercase..                  |
|      | currencyToSymbol            | `currency`                                                   | Convert currency code to symbol.                  |
|      | setCookies                  | `cookie_name`  `value`  `expiry_days`                        | Set Cookie.                  |
|      | getCookies                  | `cookie_name`                                                | Get Cookie.                  |
|      | deleteCookies               | `cookie_name`                                                | Delete Cookie of given name.                  |
|      | shiftToTop                  | `arr`  `key`  `value`                                        | Shift given key of array to Top.                  |
|      | timeDifferenceInSeconds     | `started_at`  `ended_at`                                     | Get Two Time difference in Seconds.                  |
|      | secondsToHoursMinutsSeconds | `seconds`                                                    | Convert Seconds in Hours,Minutes and Seconds.                  |
|      | getTimeDifferenceInHHMMSS   | `started_at`  `ended_at`                                     | Get Two Time difference in `HHMMSS` Format.                  |
|      | secondsToHours              | `seconds`                                                    | Convert Seconds in Hours.                  |
|      | getTimeDifferenceInDays     | `started_at`  `ended_at`                                     | Get Two Time difference in Days.                  |
|      | addTagToOneSignalUser       | `tag_name`  `tag_value`                                      | Component to show Success messages in list.                  |
|      | deleteTagToOneSignalUser    | `tag_name`                                                   | Component to show Success messages in list.                  |
|      | openUrl                     | `event`  `url`                                               | Open url in new Tab.                  |
|      | remainingCharacters         | `event`  `min_characters`  `max_characters`  `target_show_remaining` | Component to show Success messages in list.                  |
|      | randomString                | `length=6`                                                   | Generate random string of given length.                  |
|      | updateDocumentUrlTitle      | `title`  `url`                                               | Component to show Success messages in list.                  |
|      | strToSlug                   | `title`                                                      | Generates a URL friendly `slug` from the given string.                  |
|      | isInt                       | `n`                                                          | Determines whether the passed value is an Integer.|
|      | isFloat                     | `n`                                                          | Determines whether the passed value is a Float.|
|      | fileNameFromUrl             | `url`                                                        | Get File name from URL.|
|      | fileExtensionFromUrl        | `url`                                                        | Get File extension from URL.|
|      | getClipboardValue           |                                                              | Component to show Success messages in list.|
|      | getNonReactiveObject        | `obj`                                                        | Convert Reactive Object to Non Reactive Object.|
|      | pluck                       | `array`  `key`                                               | Return value of specified key from array object.|
|      | pusherAuth                  | `pusher_auth_url`  `pusher_key`  `pusher_cluster`  `params=null`| Convert Reactive Object to Non Reactive Object.|
|      | pusherSubscribe             | `pusher_instance`  `channel_name`  `callback=null`           | Convert Reactive Object to Non Reactive Object.|
|      | pusherListenEvent           | `channel_instance`  `event_name`  `callback=null`           | Convert Reactive Object to Non Reactive Object.|

