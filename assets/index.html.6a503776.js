import{r as l,o as p,c as r,a,b as s,w as e,F as o,d as n,e as u}from"./app.52016828.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const i={},c=a("h1",{id:"vaahcms",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vaahcms","aria-hidden":"true"},"#"),n(" VaahCMS")],-1),b={class:"table-of-contents"},m=n("Introduction"),h=n("Components"),g=n("AutoComplete"),k=n("AutoCompleteAjax"),v=n("AutoCompleteUsers"),q=n("ButtonMeta"),f=n("ClickToCopy"),x=n("DatePicker"),y=n("FileUploader"),_=n("Loader"),T=n("Pagination"),w=n("TableTrActedBy"),S=n("TableTrDateTime"),D=n("TableTrActedBy"),A=n("TableTrMeta"),C=n("TableTrStatus"),P=n("TableTrTag"),j=n("TableTrUrl"),F=n("TableTrView"),B=n("TableTrYesNo"),V=n("TagInputs"),U=n("TreeSelect"),M=n("TreeView"),E=n("VaahVueEditor"),O=n("VueErrors"),I=n("VueMessages"),N=n("Content Fields"),z=u(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Reusable components are super important in VueJS. It helps you save so much time and when done right, really makes your project more readable and maintainable.</p><p>One of the key phrases that developers love using is Don\u2019t Repeat Yourself (DRY). In VueJS, there are lots of cases where reusable code is useful: a scroll functionality, a header component.</p><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><h3 id="autocomplete" tabindex="-1"><a class="header-anchor" href="#autocomplete" aria-hidden="true">#</a> AutoComplete</h3><p>Extended input that provide suggestions while the user types. Use with Field to access all functionalities</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoComplete</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:selected_value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AutoComplete</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;options&quot; = {
    [
      &#39;id&#39;: 1,                
      &#39;name&#39;: &#39;XYZ&#39;,        
      &#39;slug&#39;: &#39;xyz&#39;
    ],
    [
      &#39;id&#39;: 2,  
      &#39;name&#39;: &#39;ABC&#39;,         
      &#39;slug&#39;: &#39;abc&#39;
    ]
},

&quot;value&quot; = &#39;XYZ&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>selected_value</td><td>Value of that <code>field_name</code> passes in Options</td><td>String, Number</td><td></td></tr><tr><td>options</td><td>Options / suggestions</td><td>Array, Object</td><td><code>Required</code></td></tr><tr><td>field_name</td><td>Property of the object (if data is array of objects) to use as display text, and to keep track of selected option</td><td>String</td><td>name</td></tr><tr><td>search_fields</td><td>Fields that are searchable</td><td>Array</td><td>[&quot;name&quot;]</td></tr><tr><td>icon</td><td>Icon name to be added</td><td>String</td><td>search</td></tr><tr><td>open_on_focus</td><td>Open dropdown list on focus</td><td>Boolean</td><td>false</td></tr><tr><td>placeholder</td><td>Field placeholder, displayed when there&#39;s no value.</td><td>String</td><td>Search</td></tr></tbody></table><h3 id="autocompleteajax" tabindex="-1"><a class="header-anchor" href="#autocompleteajax" aria-hidden="true">#</a> AutoCompleteAjax</h3><p>Extended input that provide suggestions while the user types. The options/suggestions will be fetch from ajax url.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoCompleteAjax</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:ajax_url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ajax_url<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:selected_value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AutoCompleteAjax</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Data Format :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;options&quot; = {
    [
      &#39;id&#39;: 1,                
      &#39;name&#39;: &#39;XYZ&#39;,        
      &#39;slug&#39;: &#39;xyz&#39;
    ],
    [
      &#39;id&#39;: 2,  
      &#39;name&#39;: &#39;ABC&#39;,         
      &#39;slug&#39;: &#39;abc&#39;
    ]
},

&quot;value&quot; = &#39;XYZ&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>selected_value</td><td>Value of that <code>display_column</code> passes in Options</td><td>String</td><td></td></tr><tr><td>label</td><td>Field Label</td><td>String</td><td>Search</td></tr><tr><td>ajax_url</td><td>Ajax Url</td><td>String</td><td><code>Required</code></td></tr><tr><td>display_column</td><td>Fields that are searchable</td><td>String</td><td>name</td></tr><tr><td>unique_column</td><td>Column&#39;s value display in field option&#39;s modal</td><td>String</td><td>id</td></tr></tbody></table><table><thead><tr><th>Events</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>onSelect</td><td>Triggers when an option is selected or unset</td><td>option: String</td></tr></tbody></table><h3 id="autocompleteusers" tabindex="-1"><a class="header-anchor" href="#autocompleteusers" aria-hidden="true">#</a> AutoCompleteUsers</h3><p>Extended input that provide suggestions of <code>VaahCms Users</code> while the user types. Use with Field to access all functionalities</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoCompleteUsers</span> <span class="token attr-name">@onSelect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setUser<span class="token punctuation">&quot;</span></span>
                   <span class="token attr-name">:selected_value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AutoCompleteUsers</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setUser: function (user){
   // ----------
   // ----------
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>selected_value</td><td>Binding value</td><td>String, Number</td><td></td></tr></tbody></table><table><thead><tr><th>Events</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>onSelect</td><td>Triggers when an option is selected or unset</td><td>option: String</td></tr></tbody></table><h3 id="buttonmeta" tabindex="-1"><a class="header-anchor" href="#buttonmeta" aria-hidden="true">#</a> ButtonMeta</h3><p>Button to show Classic modal overlay to include any content you may need</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ButtonMeta</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ButtonMeta</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Type (color) of the button</td><td>String</td><td>is-default</td></tr><tr><td>label</td><td>Button label</td><td>String</td><td>View</td></tr><tr><td>value</td><td>Modal Content</td><td>Object, String</td><td></td></tr></tbody></table><h3 id="clicktocopy" tabindex="-1"><a class="header-anchor" href="#clicktocopy" aria-hidden="true">#</a> ClickToCopy</h3><p>Click To Copy Vue.js component</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClickToCopy</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClickToCopy</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Text to display</td><td>String</td><td></td></tr><tr><td>data</td><td>Data to be copied</td><td>String</td><td></td></tr></tbody></table><h3 id="datepicker" tabindex="-1"><a class="header-anchor" href="#datepicker" aria-hidden="true">#</a> DatePicker</h3><p>An input with a simple dropdown/modal for selecting a date, uses native datepicker for mobile</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">:selected_value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatePicker</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>icon</td><td>Icon name to be added</td><td>Array</td><td>calendar-alt</td></tr><tr><td>selected_value</td><td>Binding Value</td><td>String</td><td></td></tr><tr><td>placeholder</td><td>Field placeholder, displayed when there&#39;s no value.</td><td>String</td><td>Type or select a date...</td></tr></tbody></table><table><thead><tr><th>Events</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>onSelect</td><td>Triggers when an date is selected</td><td>option: Object, event: $event</td></tr></tbody></table><h3 id="fileuploader" tabindex="-1"><a class="header-anchor" href="#fileuploader" aria-hidden="true">#</a> FileUploader</h3><p>Component that can upload anything you throw at it, optimizes images for faster uploads, and offers a great, accessible, silky smooth user experience.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileUploader</span> <span class="token attr-name">max_size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200KB<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Upload user avatar<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">aspect_ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1:1<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:allow_multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:upload_url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload_url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FileUploader</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Binding Value</td><td>Array</td><td></td></tr><tr><td>upload_url</td><td>Url to upload a file</td><td>String</td><td></td></tr><tr><td>folder_path</td><td>Path of Folder where to upload files</td><td>String</td><td>public/media</td></tr><tr><td>file_input_name</td><td>The input field name to use</td><td>String</td><td>file</td></tr><tr><td>file_name</td><td>File Name append in ajax request</td><td>String</td><td></td></tr><tr><td>uid</td><td>Unique Id for files</td><td>String</td><td>uid-image-group-current-date</td></tr><tr><td>custom_class</td><td>Field Class</td><td>String</td><td>is-primary</td></tr><tr><td>label</td><td>Field Label</td><td>String</td><td>Drop your image here or click to upload.</td></tr><tr><td>icon</td><td>Icon name to be added</td><td>String</td><td>search</td></tr><tr><td>aspect_ratio</td><td>Image Crop Aspect Ratio - Set a forced aspect ratio for the FilePond drop area. Useful to make the drop area take up a fixed amount of space.</td><td>String</td><td></td></tr><tr><td>allow_multiple</td><td>Enable or disable adding multiple files</td><td>Boolean</td><td>true</td></tr><tr><td>allowed_types</td><td>File types that allowed for upload</td><td>String</td><td>image/jpeg, image/png, image/gif</td></tr><tr><td>max_size</td><td>The maximum size of a uploaded file</td><td>String</td><td>2MB</td></tr><tr><td>remove_after_upload</td><td>Set <code>true</code> to remove file after upload</td><td>Boolean</td><td>true</td></tr><tr><td>show_allowed_types</td><td>Set <code>true</code> to show File Type Hint</td><td>Boolean</td><td>true</td></tr><tr><td>instant_upload</td><td>Immediately upload new files</td><td>Boolean</td><td>true</td></tr></tbody></table><table><thead><tr><th>Events</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>afterUpload</td><td>Triggers when an file is uploaded</td><td>option: Object, event: $event</td></tr></tbody></table><h3 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h3><p>This component to create placeholder loading, like Facebook cards loading.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loader</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Loader</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h3><p>This component is responsive and flexible pagination.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Pagination</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
   &quot;total&quot;: 50,
   &quot;per_page&quot;: 15,
   &quot;current_page&quot;: 1,
   &quot;last_page&quot;: 4,
   &quot;first_page_url&quot;: &quot;http://laravel.app?page=1&quot;,
   &quot;last_page_url&quot;: &quot;http://laravel.app?page=4&quot;,
   &quot;next_page_url&quot;: &quot;http://laravel.app?page=2&quot;,
   &quot;prev_page_url&quot;: null,
   &quot;path&quot;: &quot;http://laravel.app&quot;,
   &quot;from&quot;: 1,
   &quot;to&quot;: 15,
   &quot;data&quot;:[
        {
            // Record...
        },
        {
            // Record...
        }
   ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>list</td><td>Laravel Pagination Object</td><td></td><td></td></tr></tbody></table><h3 id="tabletractedby" tabindex="-1"><a class="header-anchor" href="#tabletractedby" aria-hidden="true">#</a> TableTrActedBy</h3><p>This component can be used to show <code>User name</code> in tabular format.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrActedBy</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> 
                 <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrActedBy</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr></tbody></table><h3 id="tabletrdatetime" tabindex="-1"><a class="header-anchor" href="#tabletrdatetime" aria-hidden="true">#</a> TableTrDateTime</h3><p>This component can be used to show <code>Date Time</code> in tabular format.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrDateTime</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> 
                 <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> 
                 <span class="token attr-name">:is_upper_case</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrDateTime</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr><tr><td>is_upper_case</td><td>Whether to show value in Uppercase format</td><td></td><td></td></tr></tbody></table><h3 id="tabletractedby-1" tabindex="-1"><a class="header-anchor" href="#tabletractedby-1" aria-hidden="true">#</a> TableTrActedBy</h3><p>This component can be used to show <code>User name</code> in tabular format.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrDateTime</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> 
                 <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrDateTime</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr></tbody></table><h3 id="tabletrmeta" tabindex="-1"><a class="header-anchor" href="#tabletrmeta" aria-hidden="true">#</a> TableTrMeta</h3><p>This component can be used to visualize <code>view</code> button to show Object or Array data in <code>modal</code>.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrMeta</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> 
             <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrMeta</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr></tbody></table><h3 id="tabletrstatus" tabindex="-1"><a class="header-anchor" href="#tabletrstatus" aria-hidden="true">#</a> TableTrStatus</h3><p>This component can be used to show value as <code>status</code> in tabular format.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrStatus</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> 
               <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrStatus</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr></tbody></table><h3 id="tabletrtag" tabindex="-1"><a class="header-anchor" href="#tabletrtag" aria-hidden="true">#</a> TableTrTag</h3><p>This component can be used to show value as <code>tag</code> in tabular format.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrTag</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> 
            <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is_copiable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:is_hashed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrTag</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr><tr><td>is_copiable</td><td>Set true to allow copy that value</td><td></td><td></td></tr><tr><td>is_hashed</td><td>Whether to show <code>#</code> as prefix with value</td><td></td><td></td></tr></tbody></table><h3 id="tabletrurl" tabindex="-1"><a class="header-anchor" href="#tabletrurl" aria-hidden="true">#</a> TableTrUrl</h3><p>This component can be used to visualize Url in tabular format. \u201CURL link\u201D columns are used to render hyperlinks that can be clicked to open pages within your website, or in external websites.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrUrl</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> 
               <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrUrl</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr></tbody></table><h3 id="tabletrview" tabindex="-1"><a class="header-anchor" href="#tabletrview" aria-hidden="true">#</a> TableTrView</h3><p>This component can be used to visualize data value in tabular format.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrView</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> 
               <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> 
               <span class="token attr-name">:is_copiable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> 
               <span class="token attr-name">:is_upper_case</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrView</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr><tr><td>is_copiable</td><td>Set true to allow copy that value</td><td></td><td></td></tr><tr><td>is_upper_case</td><td>Whether to show value in Uppercase format</td><td></td><td></td></tr></tbody></table><h3 id="tabletryesno" tabindex="-1"><a class="header-anchor" href="#tabletryesno" aria-hidden="true">#</a> TableTrYesNo</h3><p>This component can be used to visualize <code>Boolean</code> value in tabular format.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableTrYesNo</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableTrYesNo</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>Table Heading</td><td></td><td></td></tr><tr><td>value</td><td>Table Data</td><td></td><td></td></tr></tbody></table><h3 id="taginputs" tabindex="-1"><a class="header-anchor" href="#taginputs" aria-hidden="true">#</a> TagInputs</h3><p>A simple tag input field that can have autocomplete functionality</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TagInputs</span> <span class="token attr-name">:selected_value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TagInputs</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;options&quot; = {
    [
      &#39;id&#39;: 1,                
      &#39;name&#39;: &#39;XYZ&#39;,        
      &#39;slug&#39;: &#39;xyz&#39;
    ],
    [
      &#39;id&#39;: 2,  
      &#39;name&#39;: &#39;ABC&#39;,         
      &#39;slug&#39;: &#39;abc&#39;
    ]
},

&quot;value&quot; = {
    [
        &#39;id&#39;: 1,                
         &#39;name&#39;: &#39;XYZ&#39;,        
         &#39;slug&#39;: &#39;xyz&#39;
    ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>selected_value</td><td>Binding value</td><td>Array</td><td></td></tr><tr><td>options</td><td>Array of available options.</td><td>Array</td><td></td></tr><tr><td>field_name</td><td>Property of the object (if data is array of objects) to use as display text</td><td>String</td><td>name</td></tr><tr><td>search_fields</td><td>Fields that are searchable</td><td>Array</td><td>[&quot;name&quot;, &quot;slug&quot;]</td></tr><tr><td>icon</td><td>Icon name to be added</td><td>String</td><td>search</td></tr><tr><td>open_on_focus</td><td>Opens a dropdown with choices when the input field is focused</td><td>Boolean</td><td>false</td></tr><tr><td>allow_new</td><td>When autocomplete, it allow to add new tags</td><td>Boolean</td><td>false</td></tr><tr><td>placeholder</td><td>Field placeholder, displayed when there&#39;s no value.</td><td>String</td><td>Search</td></tr></tbody></table><h3 id="treeselect" tabindex="-1"><a class="header-anchor" href="#treeselect" aria-hidden="true">#</a> TreeSelect</h3><p>TreeSelect is a multi-select component with hierarchical options support for Vue.js.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeSelect</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type_id<span class="token punctuation">&quot;</span></span>
             <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select a Type<span class="token punctuation">&quot;</span></span>
             <span class="token attr-name">:is_clearable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
             <span class="token attr-name">:is_multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> 
             <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TreeSelect</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>options: [ 
            {
               id: &#39;a&#39;,
               name: &#39;a&#39;,
               children: [ 
                   {
                      id: &#39;aa&#39;,
                      name: &#39;aa&#39;,
                   }, 
                   {
                      id: &#39;ab&#39;,
                      name: &#39;ab&#39;,
                   } 
               ],
            }, 
            {
               id: &#39;b&#39;,
               name: &#39;b&#39;,
            }, 
            {
               id: &#39;c&#39;,
               name: &#39;c&#39;,
            } 
         ],
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>The value of the control. Should be id or node object when <code>:is_multiple=&quot;false&quot;</code>, or an array of id or node object when <code>:multiple=&quot;true&quot;</code>.</td><td>String, Number, Array, Object</td><td></td></tr><tr><td>options</td><td>Array of available options.</td><td>Array, Object</td><td></td></tr><tr><td>ajax_url</td><td>Ajax Url</td><td>String, Number</td><td></td></tr><tr><td>custom_class</td><td>Field classes</td><td>String</td><td></td></tr><tr><td>label</td><td>Field label</td><td>String</td><td></td></tr><tr><td>labelPosition</td><td>Field label position</td><td>String</td><td></td></tr><tr><td>placeholder</td><td>Field placeholder, displayed when there&#39;s no value.</td><td>String</td><td></td></tr><tr><td>is_multiple</td><td>Set true to allow selecting multiple options (a.k.a., multi-select mode).</td><td>Boolean</td><td>false</td></tr><tr><td>is_clearable</td><td>Whether to show an &quot;\xD7&quot; button that resets value.</td><td>Boolean</td><td>false</td></tr><tr><td>show_count</td><td>Whether to show a children count next to the label of each branch node.</td><td>Boolean</td><td>true</td></tr></tbody></table><h3 id="treeview" tabindex="-1"><a class="header-anchor" href="#treeview" aria-hidden="true">#</a> TreeView</h3><p>The TreeView displays hierarchical data in a traditional tree structure.</p><p>It supports user interaction through mouse or touch events and performs re-ordering operations by using the drag-and-drop functionality.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeView</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TreeView</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> data: [
          {
            name: &#39;Node 1&#39;,
            id: 1,
            pid: 0,
            children: [
              {
                name: &#39;Node 1-2&#39;,
                id: 2,
                isLeaf: true,
                pid: 1
              }
            ]
          },
          {
            name: &#39;Node 2&#39;,
            id: 3,
            pid: 0,
            disabled: true
          },
          {
            name: &#39;Node 3&#39;,
            id: 4,
            pid: 0
          }
        ]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>ajax_list_url</td><td>Url to get list of options</td><td>String</td><td></td></tr><tr><td>options</td><td>Binding options</td><td>Array, Object</td><td></td></tr><tr><td>ajax_delete_url</td><td>Url to delete</td><td>String</td><td></td></tr></tbody></table><h3 id="vaahvueeditor" tabindex="-1"><a class="header-anchor" href="#vaahvueeditor" aria-hidden="true">#</a> VaahVueEditor</h3><p>This is a <code>TipTap</code> Editor. Tiptap gives you full control about every single aspect of your text editor experience.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VaahVueEditor</span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VaahVueEditor</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>content</td><td>Content or Data property you wish to bind it to</td><td></td><td></td></tr></tbody></table><h3 id="vueerrors" tabindex="-1"><a class="header-anchor" href="#vueerrors" aria-hidden="true">#</a> VueErrors</h3><p>The component to display single error message or multiple error messages to user.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueErrors</span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueErrors</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;list&quot;:[
    &#39;Error Message 1&#39;,
    &#39;Error Message 2&#39;
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>list</td><td>Array of Messages</td><td>Array, Object</td><td></td></tr></tbody></table><h3 id="vuemessages" tabindex="-1"><a class="header-anchor" href="#vuemessages" aria-hidden="true">#</a> VueMessages</h3><p>The component to display single message or multiple messages to user.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueMessages</span> <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueMessages</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;list&quot;:[
    &#39;Message 1&#39;,
    &#39;Message 2&#39;
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>list</td><td>Array of Messages</td><td>Array, Object</td><td></td></tr></tbody></table><h3 id="content-fields" tabindex="-1"><a class="header-anchor" href="#content-fields" aria-hidden="true">#</a> Content Fields</h3><p>One component applicable to multiple elements. This component is basically use for Cms module but you can use it as an other reusable component.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import ContentFieldAll from &#39;../../../vaahvue/reusable/content-fields/All&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ContentFieldAll :label=&quot;label&quot;
     :field_slug=&quot;field_slug&quot;    // text, slug, textarea, number, phone-number, boolean, 
                                 editor, code-mirror, select, date, time, date-time, 
                                 user, email, password, uuid, currency-code, list, image,
                                  media, image-group, phone-number, address, relation, 
                                 tags, json, seo-meta-tags, twitter-card, facebook-card, 
     :meta=&quot;meta&quot;
     :placeholder=&quot;placeholder&quot;
     :labelPosition=&quot;label_position&quot;
     v-model=&quot;value&quot;&gt;
&lt;/ContentFieldAll&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="value-structure" tabindex="-1"><a class="header-anchor" href="#value-structure" aria-hidden="true">#</a> Value Structure</h4><h5 id="common-attributes" tabindex="-1"><a class="header-anchor" href="#common-attributes" aria-hidden="true">#</a> Common Attributes</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value: null

type: null

size: null                        

custom_class : null                 // Field classes

label : null                        // Field label

labelPosition : null                // Field label position

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h5 id="seo-meta-tags" tabindex="-1"><a class="header-anchor" href="#seo-meta-tags" aria-hidden="true">#</a> Seo Meta Tags</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value:{
    seo_description: {
        content: null
        maxlength: 200
        message: &quot;Description of content (maximum 200 characters)&quot;
        name: &quot;SEO Meta Description&quot;
        type: &quot;textarea&quot;
    }
    seo_keywords: {
        content: null
        maxlength: 200
        name: &quot;SEO Meta Keywords&quot;
        type: &quot;textarea&quot;
    }
    seo_title: {
        content: null
        maxlength: 70
        name: &quot;SEO Title&quot;
        type: &quot;text&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h5 id="twitter-card" tabindex="-1"><a class="header-anchor" href="#twitter-card" aria-hidden="true">#</a> Twitter Card</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value:{
    &quot;twitter_site&quot;:{
        name: &quot;twitter:site&quot;,
        message: &quot;@username of website. Either twitter:site or twitter:site:id is required.&quot;,
        maxlength: 70,
        type: &#39;text&#39;,
        content: null
    },
    &quot;twitter_title&quot;:{
        name: &quot;twitter:title&quot;,
        type: &#39;text&#39;,
        message: &quot;Title of content (max 70 characters).&quot;,
        maxlength: 70,
        content: null
    },
    &quot;twitter_description&quot;:{
        name: &quot;twitter:description&quot;,
        type: &#39;textarea&#39;,
        message: &quot;Description of content (maximum 200 characters)&quot;,
        maxlength: 200,
        content: null
    },
    &quot;twitter_image&quot;:{
        name: &quot;twitter:image&quot;,
        type: &#39;text&#39;,
        message: &quot;URL of image to use in the card. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported.&quot;,
        maxlength: 200,
        content: null
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h5 id="facebook-card" tabindex="-1"><a class="header-anchor" href="#facebook-card" aria-hidden="true">#</a> Facebook Card</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value:{
    &quot;og_title&quot;:{
        name: &quot;og:title&quot;,
        type: &#39;text&#39;,
        message: &quot;Title of content (max 70 characters).&quot;,
        maxlength: 70,
        content: null
    },
    &quot;og_description&quot;:{
        name: &quot;og:description&quot;,
        type: &#39;textarea&#39;,
        message: &quot;Description of content (maximum 200 characters)&quot;,
        maxlength: 200,
        content: null
    },
    &quot;og_image&quot;:{
        name: &quot;og:image&quot;,
        type: &#39;text&#39;,
        message: &quot;URL of image to use in the card. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported.&quot;,
        maxlength: 200,
        content: null
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h5 id="address" tabindex="-1"><a class="header-anchor" href="#address" aria-hidden="true">#</a> Address</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value:{
    &quot;address_line_1&quot;: {
        name: &quot;Address Line 1&quot;,
        type: &#39;text&#39;,
        maxlength: 50,
        content: null
    },
    &quot;address_line_2&quot;:{
        name: &quot;Address Line 2&quot;,
        type: &#39;text&#39;,
        maxlength: 50,
        content: null
    },
    &quot;landmark&quot;:{
        name: &quot;Landmark&quot;,
        type: &#39;text&#39;,
        maxlength: 50,
        content: null
    },
    &quot;city&quot;:{
        name: &quot;City&quot;,
        type: &#39;text&#39;,
        maxlength: 50,
        content: null
    },
    &quot;state&quot;:{
        name: &quot;State&quot;,
        type: &#39;text&#39;,
        maxlength: 50,
        content: null
    },
    &quot;country&quot;:{
        name: &quot;Country&quot;,
        type: &#39;text&#39;,
        maxlength: 20,
        content: null
    },
    &quot;zip_code&quot;: {
        name: &quot;Zip Code&quot;,
        type: &#39;text&#39;,
        maxlength: 20,
        content: null
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h5 id="code-mirror" tabindex="-1"><a class="header-anchor" href="#code-mirror" aria-hidden="true">#</a> Code Mirror</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
type: &quot;text/html&quot;               // mode of code mirror

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> Select</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>meta : {
    option: {}                 // array , object
    is_multiple: true / false
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> Tags</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ajax_url  : null               //     Ajax Url

display_column : &quot;name&quot;        // Fields that are searchable	

unique_column : &quot;email&quot;        // Column&#39;s value display in field option&#39;s modal	

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="relation" tabindex="-1"><a class="header-anchor" href="#relation" aria-hidden="true">#</a> Relation</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
app_url  : null               

meta : {
    is_multiple: true / false
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h5 id="image-image-group-media" tabindex="-1"><a class="header-anchor" href="#image-image-group-media" aria-hidden="true">#</a> Image / Image Group / Media</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
app_url  : null       // Base Url      

upload_url : null     // Url to upload a file	

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table><thead><tr><th>Properties</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>field_slug</td><td>Array of Messages</td><td>String</td><td></td></tr><tr><td>value</td><td>Binding Value</td><td>String, Number, Array, Object</td><td></td></tr><tr><td>type</td><td>Type (color) of the field</td><td>String</td><td></td></tr><tr><td>size</td><td>Size of the field</td><td>String</td><td></td></tr><tr><td>custom_class</td><td>Field classes</td><td>String</td><td></td></tr><tr><td>label</td><td>Field label</td><td>String</td><td></td></tr><tr><td>labelPosition</td><td>Field label position</td><td>String</td><td></td></tr><tr><td>placeholder</td><td>Field placeholder, displayed when there&#39;s no value.</td><td>String</td><td></td></tr><tr><td>ajax_url</td><td>Ajax Url</td><td>String</td><td></td></tr><tr><td>app_url</td><td>Url to get Relation&#39;s Options</td><td>String</td><td></td></tr><tr><td>upload_url</td><td>Url to upload a file</td><td>String</td><td></td></tr><tr><td>currency_options</td><td>Options for Currency Code</td><td>Array</td><td></td></tr><tr><td>meta</td><td>Meta value</td><td>Array, Object</td><td></td></tr><tr><td>display_column</td><td>Fields that are searchable / visible in field</td><td>String</td><td>name</td></tr><tr><td>unique_column</td><td>Column&#39;s value display in tag input&#39;s modal</td><td>String</td><td>email</td></tr><tr><td>is_simple</td><td>Set <code>true</code> to visible all features / buttons</td><td>Boolean</td><td>false</td></tr></tbody></table><table><thead><tr><th>Events</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>onInput</td><td>Triggers when value is changed</td><td>Number</td></tr><tr><td>onChange</td><td>Triggers when an option is selected or unset</td><td>option: String</td></tr><tr><td>onBlur</td><td>Triggers when input has lost focus</td><td>event: $event</td></tr><tr><td>onFocus</td><td>Triggers when input has received focus</td><td>event: $event</td></tr></tbody></table>`,141);function L(R,Y){const t=l("RouterLink");return p(),r(o,null,[c,a("nav",b,[a("ul",null,[a("li",null,[s(t,{to:"#introduction"},{default:e(()=>[m]),_:1})]),a("li",null,[s(t,{to:"#components"},{default:e(()=>[h]),_:1}),a("ul",null,[a("li",null,[s(t,{to:"#autocomplete"},{default:e(()=>[g]),_:1})]),a("li",null,[s(t,{to:"#autocompleteajax"},{default:e(()=>[k]),_:1})]),a("li",null,[s(t,{to:"#autocompleteusers"},{default:e(()=>[v]),_:1})]),a("li",null,[s(t,{to:"#buttonmeta"},{default:e(()=>[q]),_:1})]),a("li",null,[s(t,{to:"#clicktocopy"},{default:e(()=>[f]),_:1})]),a("li",null,[s(t,{to:"#datepicker"},{default:e(()=>[x]),_:1})]),a("li",null,[s(t,{to:"#fileuploader"},{default:e(()=>[y]),_:1})]),a("li",null,[s(t,{to:"#loader"},{default:e(()=>[_]),_:1})]),a("li",null,[s(t,{to:"#pagination"},{default:e(()=>[T]),_:1})]),a("li",null,[s(t,{to:"#tabletractedby"},{default:e(()=>[w]),_:1})]),a("li",null,[s(t,{to:"#tabletrdatetime"},{default:e(()=>[S]),_:1})]),a("li",null,[s(t,{to:"#tabletractedby-1"},{default:e(()=>[D]),_:1})]),a("li",null,[s(t,{to:"#tabletrmeta"},{default:e(()=>[A]),_:1})]),a("li",null,[s(t,{to:"#tabletrstatus"},{default:e(()=>[C]),_:1})]),a("li",null,[s(t,{to:"#tabletrtag"},{default:e(()=>[P]),_:1})]),a("li",null,[s(t,{to:"#tabletrurl"},{default:e(()=>[j]),_:1})]),a("li",null,[s(t,{to:"#tabletrview"},{default:e(()=>[F]),_:1})]),a("li",null,[s(t,{to:"#tabletryesno"},{default:e(()=>[B]),_:1})]),a("li",null,[s(t,{to:"#taginputs"},{default:e(()=>[V]),_:1})]),a("li",null,[s(t,{to:"#treeselect"},{default:e(()=>[U]),_:1})]),a("li",null,[s(t,{to:"#treeview"},{default:e(()=>[M]),_:1})]),a("li",null,[s(t,{to:"#vaahvueeditor"},{default:e(()=>[E]),_:1})]),a("li",null,[s(t,{to:"#vueerrors"},{default:e(()=>[O]),_:1})]),a("li",null,[s(t,{to:"#vuemessages"},{default:e(()=>[I]),_:1})]),a("li",null,[s(t,{to:"#content-fields"},{default:e(()=>[N]),_:1})])])])])]),z],64)}var G=d(i,[["render",L]]);export{G as default};
