<template><div><h1 id="helpers" tabindex="-1"><a class="header-anchor" href="#helpers" aria-hidden="true">#</a> Helpers</h1>
<p><code v-pre>VaahCms</code> includes a variety of global &quot;helper&quot; <code v-pre>Vue</code> Functions and Components. Many of these Functions and Components are used in the Vue component; however, you are free to use them in your own applications if you find them convenient.</p>
<p>There are 2 file in <code v-pre>Helpers</code> directory.</p>
<ul>
<li>GlobalComponents.js</li>
<li>VaahHelper.js</li>
</ul>
<h2 id="how-to-use-helpers" tabindex="-1"><a class="header-anchor" href="#how-to-use-helpers" aria-hidden="true">#</a> How to use Helpers?</h2>
<p>First you have to check that your <code v-pre>Module</code> or <code v-pre>Theme</code> has helpers at <code v-pre>VaahCms/Themes/BlogTheme/Vue/vaahvue/helpers</code>.</p>
<p>If not found then download it from <a href="https://github.com/webreinvent/vaahvue" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
<h2 id="globalcomponents" tabindex="-1"><a class="header-anchor" href="#globalcomponents" aria-hidden="true">#</a> GlobalComponents</h2>
<p>In <code v-pre>GlobalComponents.js</code>, there are components that can be used anywhere in an application, including within other components.</p>
<table>
<thead>
<tr>
<th>Component Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Loader</td>
<td>Component to create Placeholder/Table loading, like Facebook cards loading. Reference Url: <a href="https://www.npmjs.com/package/vue-content-loader" target="_blank" rel="noopener noreferrer">Loader<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>ClickToCopy</td>
<td>Component to copy the content on click. Reference Url: <a href="https://www.npmjs.com/package/vaah-vue-clicktocopy" target="_blank" rel="noopener noreferrer">Click to Copy<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>VueErrors</td>
<td>Component to show Error messages in list.</td>
</tr>
<tr>
<td>VueMessages</td>
<td>Component to show Success messages in list.</td>
</tr>
</tbody>
</table>
<h5 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h5>
<p>This component to create placeholder loading, like Facebook cards loading.</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loader</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Loader</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="clicktocopy" tabindex="-1"><a class="header-anchor" href="#clicktocopy" aria-hidden="true">#</a> ClickToCopy</h5>
<p>Click To Copy Vue.js component</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClickToCopy</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ClickToCopy<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClickToCopy</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Properties</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>Text to display</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>Data to be copied</td>
<td>String</td>
<td></td>
</tr>
</tbody>
</table>
<h5 id="vueerrors" tabindex="-1"><a class="header-anchor" href="#vueerrors" aria-hidden="true">#</a> VueErrors</h5>
<p>The component to display single error message or multiple error messages to user.</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueErrors</span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueErrors</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"list":[
    'Error Message 1',
    'Error Message 2'
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="vuemessages" tabindex="-1"><a class="header-anchor" href="#vuemessages" aria-hidden="true">#</a> VueMessages</h5>
<p>The component to display single message or multiple messages to user.</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueMessages</span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueMessages</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>"list":[
    'Message 1',
    'Message 2'
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vaah-helper" tabindex="-1"><a class="header-anchor" href="#vaah-helper" aria-hidden="true">#</a> Vaah Helper</h2>
<p>In <code v-pre>VaahHelper.js</code>, there are functions that can be used anywhere in <code v-pre>Vue</code> Components.</p>
<p>Example:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//---------------------------------------------------------------------
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th></th>
<th>Function Name</th>
<th>Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>ajaxGet</td>
<td><code v-pre>url</code>  <code v-pre>params</code>  <code v-pre>callback</code></td>
<td>Method is used to make an HTTP <code v-pre>Get</code> request</td>
</tr>
<tr>
<td></td>
<td>ajax</td>
<td><code v-pre>url</code>  <code v-pre>params</code>  <code v-pre>callback</code>  <code v-pre>query</code></td>
<td>Method is used to make an HTTP <code v-pre>Post</code> request</td>
</tr>
<tr>
<td></td>
<td>processResponse</td>
<td><code v-pre>response</code></td>
<td>Component to show Error messages in list.</td>
</tr>
<tr>
<td></td>
<td>processError</td>
<td><code v-pre>error</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>updateRootState</td>
<td><code v-pre>state_name</code>  <code v-pre>state_value</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>updateState</td>
<td><code v-pre>update</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>updateFiltersFromURL</td>
<td><code v-pre>state_name</code>  <code v-pre>namespace</code>  <code v-pre>route</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>confirmCopiedData</td>
<td><code v-pre>data</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>toastSuccess</td>
<td><code v-pre>messages</code></td>
<td>Accept messages in array format to show success notification.</td>
</tr>
<tr>
<td></td>
<td>toastErrors</td>
<td><code v-pre>messages</code></td>
<td>Accept messages in array format to show error notification.</td>
</tr>
<tr>
<td></td>
<td>copy</td>
<td><code v-pre>data</code>  <code v-pre>confirm=true</code></td>
<td>Copy data with notification.</td>
</tr>
<tr>
<td></td>
<td>console</td>
<td><code v-pre>data</code>  <code v-pre>label='---&gt;'</code></td>
<td>Print data in console screen when debug is true.</td>
</tr>
<tr>
<td></td>
<td>updateCurrentURL</td>
<td><code v-pre>query</code>  <code v-pre>router</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>findAndReplaceString</td>
<td><code v-pre>find_string</code>  <code v-pre>replace_string</code>  <code v-pre>full_string</code></td>
<td>Find and replace substring in string.</td>
</tr>
<tr>
<td></td>
<td>findAndReplace</td>
<td><code v-pre>arr</code>  <code v-pre>key</code>  <code v-pre>data</code></td>
<td>Find and replace value in array.</td>
</tr>
<tr>
<td></td>
<td>updateArray</td>
<td><code v-pre>array</code>  <code v-pre>updatedElement</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>removeFromArray</td>
<td><code v-pre>arr</code>  <code v-pre>element</code></td>
<td>Remove an element from Array.</td>
</tr>
<tr>
<td></td>
<td>removeEmpty</td>
<td><code v-pre>obj</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>findInArrayByKey</td>
<td><code v-pre>array</code>  <code v-pre>key</code>  <code v-pre>value</code></td>
<td>Find an element of array by key.</td>
</tr>
<tr>
<td></td>
<td>pluckFromObject</td>
<td><code v-pre>obj</code>  <code v-pre>key</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>toggle</td>
<td><code v-pre>item</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>testReturn</td>
<td></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>removeInArrayByKey</td>
<td><code v-pre>array</code>  <code v-pre>element</code>  <code v-pre>key</code></td>
<td>Remove an element of array by key.</td>
</tr>
<tr>
<td></td>
<td>existInArray</td>
<td><code v-pre>array</code>  <code v-pre>element</code></td>
<td>Check whether a given value exists in an array or not.</td>
</tr>
<tr>
<td></td>
<td>existInArrayByKey</td>
<td><code v-pre>array</code>  <code v-pre>element</code>  <code v-pre>key</code></td>
<td>Check whether a given value exists in specified key of array or not.</td>
</tr>
<tr>
<td></td>
<td>limitString</td>
<td><code v-pre>string</code>  <code v-pre>characters</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>formatDate</td>
<td><code v-pre>value</code></td>
<td>Convert given date string in to <code v-pre>YYYY-MM-DD</code> format.</td>
</tr>
<tr>
<td></td>
<td>formatTime</td>
<td><code v-pre>value</code></td>
<td>Convert given date time string in to <code v-pre>HH:mm</code> format.</td>
</tr>
<tr>
<td></td>
<td>formatDateTime</td>
<td><code v-pre>value</code></td>
<td>Convert given date time string in to <code v-pre>YYYY-MM-DD HH:mm</code> format.</td>
</tr>
<tr>
<td></td>
<td>fromNow</td>
<td><code v-pre>value</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>currentDate</td>
<td></td>
<td>Return Current Date in <code v-pre>YYYY-MM-DD</code> format.</td>
</tr>
<tr>
<td></td>
<td>currentDateTime</td>
<td></td>
<td>Return Current Date Time in <code v-pre>YYYY-MM-DD HH:mm:ss</code> format.</td>
</tr>
<tr>
<td></td>
<td>dateForHumans</td>
<td><code v-pre>value</code></td>
<td>Convert given date time string in to <code v-pre>ddd, MMM DD, YYYY</code> format.</td>
</tr>
<tr>
<td></td>
<td>dateTimeForHumans</td>
<td><code v-pre>value</code></td>
<td>Convert given date time string in to <code v-pre>YYYY-MM-DD hh:mm A</code> format.</td>
</tr>
<tr>
<td></td>
<td>dateTimeForHumansWithDay</td>
<td><code v-pre>value</code></td>
<td>Convert given date time string in to <code v-pre>YYYY MMM DD hh:mm A (dddd)</code> format.</td>
</tr>
<tr>
<td></td>
<td>hasPermission</td>
<td><code v-pre>permissions</code>  <code v-pre>slug</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>paginate</td>
<td><code v-pre>event</code>  <code v-pre>page</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>makePagination</td>
<td><code v-pre>data</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>paginateIsActive</td>
<td><code v-pre>page</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>toIndianFormat</td>
<td><code v-pre>nStr</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>toLabel</td>
<td><code v-pre>str</code></td>
<td>Convert string in to <code v-pre>Title</code> format.</td>
</tr>
<tr>
<td></td>
<td>toUpperCaseWords</td>
<td><code v-pre>str</code></td>
<td>Converts the first character of a string to uppercase..</td>
</tr>
<tr>
<td></td>
<td>currencyToSymbol</td>
<td><code v-pre>currency</code></td>
<td>Convert currency code to symbol.</td>
</tr>
<tr>
<td></td>
<td>setCookies</td>
<td><code v-pre>cookie_name</code>  <code v-pre>value</code>  <code v-pre>expiry_days</code></td>
<td>Set Cookie.</td>
</tr>
<tr>
<td></td>
<td>getCookies</td>
<td><code v-pre>cookie_name</code></td>
<td>Get Cookie.</td>
</tr>
<tr>
<td></td>
<td>deleteCookies</td>
<td><code v-pre>cookie_name</code></td>
<td>Delete Cookie of given name.</td>
</tr>
<tr>
<td></td>
<td>shiftToTop</td>
<td><code v-pre>arr</code>  <code v-pre>key</code>  <code v-pre>value</code></td>
<td>Shift given key of array to Top.</td>
</tr>
<tr>
<td></td>
<td>timeDifferenceInSeconds</td>
<td><code v-pre>started_at</code>  <code v-pre>ended_at</code></td>
<td>Get Two Time difference in Seconds.</td>
</tr>
<tr>
<td></td>
<td>secondsToHoursMinutsSeconds</td>
<td><code v-pre>seconds</code></td>
<td>Convert Seconds in Hours,Minutes and Seconds.</td>
</tr>
<tr>
<td></td>
<td>getTimeDifferenceInHHMMSS</td>
<td><code v-pre>started_at</code>  <code v-pre>ended_at</code></td>
<td>Get Two Time difference in <code v-pre>HHMMSS</code> Format.</td>
</tr>
<tr>
<td></td>
<td>secondsToHours</td>
<td><code v-pre>seconds</code></td>
<td>Convert Seconds in Hours.</td>
</tr>
<tr>
<td></td>
<td>getTimeDifferenceInDays</td>
<td><code v-pre>started_at</code>  <code v-pre>ended_at</code></td>
<td>Get Two Time difference in Days.</td>
</tr>
<tr>
<td></td>
<td>addTagToOneSignalUser</td>
<td><code v-pre>tag_name</code>  <code v-pre>tag_value</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>deleteTagToOneSignalUser</td>
<td><code v-pre>tag_name</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>openUrl</td>
<td><code v-pre>event</code>  <code v-pre>url</code></td>
<td>Open url in new Tab.</td>
</tr>
<tr>
<td></td>
<td>remainingCharacters</td>
<td><code v-pre>event</code>  <code v-pre>min_characters</code>  <code v-pre>max_characters</code>  <code v-pre>target_show_remaining</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>randomString</td>
<td><code v-pre>length=6</code></td>
<td>Generate random string of given length.</td>
</tr>
<tr>
<td></td>
<td>updateDocumentUrlTitle</td>
<td><code v-pre>title</code>  <code v-pre>url</code></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>strToSlug</td>
<td><code v-pre>title</code></td>
<td>Generates a URL friendly <code v-pre>slug</code> from the given string.</td>
</tr>
<tr>
<td></td>
<td>isInt</td>
<td><code v-pre>n</code></td>
<td>Determines whether the passed value is an Integer.</td>
</tr>
<tr>
<td></td>
<td>isFloat</td>
<td><code v-pre>n</code></td>
<td>Determines whether the passed value is a Float.</td>
</tr>
<tr>
<td></td>
<td>fileNameFromUrl</td>
<td><code v-pre>url</code></td>
<td>Get File name from URL.</td>
</tr>
<tr>
<td></td>
<td>fileExtensionFromUrl</td>
<td><code v-pre>url</code></td>
<td>Get File extension from URL.</td>
</tr>
<tr>
<td></td>
<td>getClipboardValue</td>
<td></td>
<td>Component to show Success messages in list.</td>
</tr>
<tr>
<td></td>
<td>getNonReactiveObject</td>
<td><code v-pre>obj</code></td>
<td>Convert Reactive Object to Non Reactive Object.</td>
</tr>
<tr>
<td></td>
<td>pluck</td>
<td><code v-pre>array</code>  <code v-pre>key</code></td>
<td>Return value of specified key from array object.</td>
</tr>
<tr>
<td></td>
<td>pusherAuth</td>
<td><code v-pre>pusher_auth_url</code>  <code v-pre>pusher_key</code>  <code v-pre>pusher_cluster</code>  <code v-pre>params=null</code></td>
<td>Convert Reactive Object to Non Reactive Object.</td>
</tr>
<tr>
<td></td>
<td>pusherSubscribe</td>
<td><code v-pre>pusher_instance</code>  <code v-pre>channel_name</code>  <code v-pre>callback=null</code></td>
<td>Convert Reactive Object to Non Reactive Object.</td>
</tr>
<tr>
<td></td>
<td>pusherListenEvent</td>
<td><code v-pre>channel_instance</code>  <code v-pre>event_name</code>  <code v-pre>callback=null</code></td>
<td>Convert Reactive Object to Non Reactive Object.</td>
</tr>
</tbody>
</table>
</div></template>


