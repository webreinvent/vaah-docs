# Creating Vue.js Application

------

I'll show you how to set up a full-stack Vue application with backend including each of the CRUD operations (Create, Read, Update and Delete). AJAX is key to this architecture, so we'll use Axios as the HTTP client.

We'll begin by creating a components to display our Cruds in the directory at `VaahCms/Modules/Articles/Vue/pages/contents/`

In `Articles module:`

```
      Config/
      Database/
      Entities/
      Helpers/
      Http/
      Libraries/
      mode_modules/
      Providers/
      Resources/
      Routes/
      Tests/
      Vue/
      ├── layouts/
          ├── Backend.vue
          ├── BackendJs.js
          ├── partials/
              ├── AsideMenu.vue

      ├── pages/
          ├── contents/
              ├── Create.vue
              ├── CreateJs.js
              ├── Edit.vue
              ├── EditJs.js
              ├── List.vue
              ├── ListJs.js
              ├── View.vue
              ├── ViewJs.js
              ├── partials/
                  ├── ListLargeView.vue
                  ├── ListLargeViewJs.js
                  ├── ListSmallView.vue
                  ├── ListSmallViewJs.js

      ├── store/
          ├── store.js
          ├── modules/
              ├── contents.js
              ├── root.js

      ├── routes/
          ├── routes.js
          ├── config/
              ├── middlewarePipeline.js
              ├── router.js
          ├── middleware/
              ├── GetAssets.js

      ├── vaahvue/
          ├── helpers/
              ├── VaahHelper.js

      ├── app.js
      composer.json
      package.json
      package-lock.json
      README.md
      webpack.mix.js


      
    
```



In component, we have used [Bulma](https://bulma.io/) and [Buefy](https://buefy.org/) library. This is not compulsory to use these library, you can simply plain html code.

`List.vue`



```vue
<script src="./ListJs.js"></script>
<template>
    <div class="form-page-v1-layout">


        <div class="container" >

            <div class="columns">

                <!--left-->
                <div class="column"
                     :class="{'is-12': page.list_view == 'large',
                     'is-6': page.list_view == 'small',
                     }">

                    <!--card-->
                    <div class="card" v-if="page.list">

                        <!--header-->
                        <div class="card-header">


                            <div class="card-header-title">
                                Contents
                            </div>

                            <div class="card-header-buttons">
                                <div class="field has-addons is-pulled-right">

                                    <p class="control">
                                        <b-button type="is-light"
                                                  @click="toCreate()"
                                                  icon-left="plus">
                                            Create
                                        </b-button>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <!--/header-->

                        <!--content-->
                        <div class="card-content">

                                <!--list-->
                                <div class="block ">

                                    <div class="block" style="margin-bottom: 0px;" >

                                        <div v-if="page.list_view == 'small'">
                                            <ListSmallView @eReloadList="getList"/>
                                        </div>

                                        <div v-else>
                                            <ListLargeView @eReloadList="getList"/>
                                        </div>

                                    </div>

                                    <hr style="margin-top: 0;"/>

                                    <div class="block" v-if="page.list">
                                        <vh-pagination  :limit="1" :data="page.list"
                                                        @onPageChange="paginate">
                                        </vh-pagination>
                                    </div>

                                </div>

                        </div>
                        <!--/content-->

                    </div>
                    <!--/card-->

                </div>
                <!--/left-->

                <router-view @eReloadList="getList"></router-view>

            </div>


        </div>

    </div>
</template>
```

`List.js`

```js
import ListLargeView from './partials/ListLargeView';
import ListSmallView from './partials/ListSmallView';

let namespace = 'contents';

export default {
    computed:{
        root() {return this.$store.getters['root/state']},
        page() {return this.$store.getters[namespace+'/state']},
        ajax_url() {return this.$store.getters[namespace+'/state'].ajax_url},
        query_string() {return this.$store.getters[namespace+'/state'].query_string},
    },
    components:{
        ListLargeView,
        ListSmallView,
    },
    data()
    {
        return {
            namespace: namespace,
            is_content_loading: false,
            is_btn_loading: false,
            ids: [],
            moduleSection: null,
        }
    },
    watch: {
        $route(to, from) {
                this.updateStore();
                this.updateActiveItem();
        }
    },
    mounted() {
        this.onLoad();
    },
    methods: {
        //---------------------------------------------------------------------
        update: function(name, value)
        {
            let update = {
                state_name: name,
                state_value: value,
                namespace: this.namespace,
            };
            this.$vaah.updateState(update);
        },
        //---------------------------------------------------------------------
        updateStore: function()
        {
            this.$store.dispatch(this.namespace+'/updateStore', this.$route);
            this.getList();
        },
        //---------------------------------------------------------------------
        onLoad: function()
        {
            this.updateStore();
        },
        //---------------------------------------------------------------------
        toCreate: function()
        {
            this.update('active_item', null);
            this.$router.push({name:'contents.create'});
        },
        //---------------------------------------------------------------------
        paginate: function(page=1)
        {
            this.query_string.page = page;
            this.update('query_string', this.query_string);
            this.getList();
        },
        //---------------------------------------------------------------------
        getList: function () {
            this.$Progress.start();
            let url = this.ajax_url+'/list';
            this.$vaah.ajaxGet(url, this.query_string, this.getListAfter);
        },
        //---------------------------------------------------------------------
        getListAfter: function (data, res) {

            this.update('is_list_loading', false);

            if(data){

                this.update('list', data.list);

                this.update('status_list', res.data.status.content_statuses);

                if(data.list.total === 0)
                {
                    this.update('list_is_empty', true);
                }else{
                    this.update('list_is_empty', false);
                }

                this.is_btn_loading = false;
            }

            this.$Progress.finish();

        },
        //---------------------------------------------------------------------
        updateActiveItem: function () {

            if(this.$route.fullPath.includes('contents/?')){
                this.update('active_item', null);
            }
        },
        //---------------------------------------------------------------------
    }
}
```

In List.js, we have import two component for showing list.

- ListLargeView
- ListSmallView

`ListLargeView.vue`

```vue
<script src="./ListLargeViewJs.js"></script>
<template>
    <div>
        <b-table :data="page.list_is_empty ? [] : page.list.data"
                 :checkable="false"
                 :hoverable="true">

            <template>
                <b-table-column field="id" v-slot="props" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="title" v-slot="props" label="Title">
                    {{ props.row.title }}
                </b-table-column>

                <b-table-column width="150px" v-slot="props" field="status" label="Published">

                            <b-tag v-if="props.row.is_published == 1"
                                class="is-success">
                                <span>Yes</span>
                            </b-tag>

                            <b-tag v-else
                                class="is-dark">
                                <span>No</span>
                            </b-tag>

                </b-table-column>

                <b-table-column width="150px" v-slot="props" field="updated_at" label="Updated At">
                    <span>
                        {{$vaah.fromNow(props.row.updated_at)}}
                    </span>
                </b-table-column>

                <b-table-column field="actions" v-slot="props" label=""
                                width="100">

                    <b-tooltip label="Delete" type="is-dark">
                        <b-button size="is-small"
                                  type="is-danger"
                                  @click="destroy(props.row)"
                                  icon-left="trash-alt">
                        </b-button>
                    </b-tooltip>

                    <b-tooltip label="Edit" type="is-dark">
                        <b-button size="is-small"
                                  @click="toEdit(props.row)"
                                  icon-left="pencil-alt">
                        </b-button>
                    </b-tooltip>

                    <b-tooltip label="View" type="is-dark">
                        <b-button size="is-small"
                                  @click="setActiveItem(props.row)"
                                  icon-left="chevron-right">
                        </b-button>
                    </b-tooltip>


                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>

        </b-table>
    </div>
</template>
```

`ListLargeViewJs.js`


```js
let namespace = 'contents';
export default {
    computed: {
        root() {return this.$store.getters['root/state']},
        page() {return this.$store.getters[namespace+'/state']},
        ajax_url() {return this.$store.getters[namespace+'/state'].ajax_url},
        query_string() {return this.$store.getters[namespace+'/state'].query_string},
    },
    components:{

    },

    data()
    {
        let obj = {
            namespace: namespace,
            icon_copy: "<b-icon icon='envelope' size='is-small'></b-icon>"
        };

        return obj;
    },
    created() {
    },
    mounted(){

    },

    watch: {

    },
    methods: {
        //---------------------------------------------------------------------
        update: function(name, value)
        {
            let update = {
                state_name: name,
                state_value: value,
                namespace: this.namespace,
            };
            this.$vaah.updateState(update);
        },
        //---------------------------------------------------------------------
        setActiveItem: function (item) {
            this.update('active_item', item);
            this.$router.push({name: 'contents.view', params:{id:item.id}})
        },
        //---------------------------------------------------------------------
        copiedData: function (data) {

            this.$vaah.toastSuccess(['copied']);

            this.$vaah.console(data, 'copied data');

        },
        //---------------------------------------------------------------------
        toEdit: function (item) {
            this.update('active_item', item);
            this.$router.push({name:'contents.edit', params:{id:item.id}});

        },
        //---------------------------------------------------------------------
        destroy: function(item)
        {
            let self = this;
            this.$buefy.dialog.confirm({
                title: 'Deleting record',
                message: 'Are you sure you want to <b>delete</b> the record? This action cannot be undone.',
                confirmText: 'Delete',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: function () {
                    let params = item;
                    let url = self.ajax_url+'/destroy';
                    this.$vaah.ajax(url, params, self.destroyAfter);
                }
            })
        },
        //---------------------------------------------------------------------
        destroyAfter: function(data, res)
        {
            if(data){
                this.$emit('eReloadList');
            }

        },
    }
}
```


`ListSmallView.vue`

```vue
<script src="./ListSmallViewJs.js"></script>
<template>
    <div>
        <b-table :data="page.list_is_empty ? [] : page.list.data"
                 :checkable="false"
                 :hoverable="true"
                 :row-class="setRowClass">

            <template>
                <b-table-column field="id" v-slot="props" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="title" v-slot="props" label="Title">
                    {{ props.row.title }}
                </b-table-column>

                <b-table-column width="100px" v-slot="props" field="updated_at" label="Updated At">
                    <span>
                        {{$vaah.fromNow(props.row.updated_at)}}
                    </span>
                </b-table-column>

                <b-table-column field="actions" v-slot="props" label=""
                                width="80">

                    <b-tooltip label="Edit" type="is-dark">
                        <b-button size="is-small"
                                  @click="toEdit(props.row)"
                                  icon-left="pencil-alt">
                        </b-button>
                    </b-tooltip>

                    <b-tooltip label="View" type="is-dark">
                        <b-button size="is-small"
                                  @click="setActiveItem(props.row)"
                                  icon-left="chevron-right">
                        </b-button>
                    </b-tooltip>

                </b-table-column>

            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>

        </b-table>
    </div>
</template>
```

`ListSmallViewJs.js`

```js
let namespace = 'contents';
export default {
    computed: {
        root() {return this.$store.getters['root/state']},
        page() {return this.$store.getters[namespace+'/state']},
        ajax_url() {return this.$store.getters[namespace+'/state'].ajax_url},
        query_string() {return this.$store.getters[namespace+'/state'].query_string},
    },
    components:{

    },

    data()
    {
        let obj = {
            namespace: namespace,
            icon_copy: "<b-icon icon='envelope' size='is-small'></b-icon>"
        };

        return obj;
    },
    created() {
    },
    mounted(){

    },

    watch: {

    },
    methods: {
        //---------------------------------------------------------------------
        update: function(name, value)
        {
            let update = {
                state_name: name,
                state_value: value,
                namespace: this.namespace,
            };
            this.$vaah.updateState(update);
        },
        //---------------------------------------------------------------------
        setActiveItem: function (item) {
            this.update('active_item', item);
            this.$router.push({name: 'contents.view', params:{id:item.id}})
        },
        //---------------------------------------------------------------------
        copiedData: function (data) {

            this.$vaah.toastSuccess(['copied']);
            
            this.$vaah.console(data, 'copied data');

        },
        //---------------------------------------------------------------------
        toEdit: function (item) {
            this.update('active_item', item);
            this.$router.push({name:'contents.edit', params:{id:item.id}});

        }
    }
}
```

`Create.vue`

```vue
<script src="./CreateJs.js"></script>
<template>
    <div class="column" >

        <div class="columns">
            <div class="column">

                <div class="card">

                    <!--header-->
                    <header class="card-header">

                        <div class="card-header-title">
                            <span>Create </span>
                        </div>

                        <div class="card-header-buttons">

                            <div class="field has-addons is-pulled-right">

                                <p class="control">
                                    <b-button icon-left="save"
                                              type="is-light"
                                              :loading="is_btn_loading"
                                              @click="create()">
                                        Save
                                    </b-button>
                                </p>

                                <p class="control">
                                    <b-button tag="router-link"
                                              type="is-light"
                                              :to="{name: 'contents.list'}"
                                              icon-left="times">
                                    </b-button>
                                </p>

                            </div>
                        </div>
                    </header>
                    <!--/header-->

                    <!--content-->
                    <div class="card-content">

                        <b-field label="Title" :label-position="labelPosition">
                            <b-input v-model="new_item.title"></b-input>
                        </b-field>

                        <b-field label="Content" :label-position="labelPosition">
                            <b-input v-model="new_item.content"></b-input>
                        </b-field>

                        <b-field label="Is Published" :label-position="labelPosition">
                            <b-radio-button v-model="new_item.is_published"
                                            :native-value=1>
                                <span>Yes</span>
                            </b-radio-button>

                            <b-radio-button type="is-danger"
                                            v-model="new_item.is_published"
                                            :native-value=0>
                                <span>No</span>
                            </b-radio-button>
                        </b-field>

                    </div>
                    <!--/content-->
                    
                </div>

            </div>
        </div>

    </div>
</template>
```

`CreateJs.js`

```js
let namespace = 'contents';

export default {
    computed:{
        root() {return this.$store.getters['root/state']},
        page() {return this.$store.getters[namespace+'/state']},
        assets() {return this.$store.getters[namespace+'/state'].assets},
        ajax_url() {return this.$store.getters[namespace+'/state'].ajax_url},
        new_item() {return this.$store.getters[namespace+'/state'].new_item},
    },
    components:{

    },
    data()
    {
        return {
            namespace: namespace,
            is_content_loading: false,
            is_btn_loading: null,
            labelPosition: 'on-border',
            params: {},
            local_action: null,
            title: null,
            new_status: null,
            disable_status_editing: true,
            edit_status_index: null,
        }
    },
    watch: {
        $route(to, from) {
            this.updateStore()
        },


    },
    mounted() {
        this.onLoad();
    },
    methods: {
        //---------------------------------------------------------------------
        //---------------------------------------------------------------------
        update: function(name, value)
        {
            let update = {
                state_name: name,
                state_value: value,
                namespace: this.namespace,
            };
            this.$vaah.updateState(update);
        },
        //---------------------------------------------------------------------
        updateNewItem: function()
        {
            let update = {
                state_name: 'new_item',
                state_value: this.new_item,
                namespace: this.namespace,
            };
            this.$vaah.updateState(update);
        },
        //---------------------------------------------------------------------
        updateStore: function()
        {
            this.$store.dispatch(this.namespace+'/updateStore', this.$route);
        },
        //---------------------------------------------------------------------
        onLoad: function()
        {
            this.is_content_loading = true;
            this.updateStore();
        },
        //---------------------------------------------------------------------

        //---------------------------------------------------------------------
        create: function () {
            let params = this.new_item;

            let url = this.ajax_url+'/create';
            this.$vaah.ajax(url, params, this.createAfter);
        },
        //---------------------------------------------------------------------
        createAfter: function (data, res) {
            this.$Progress.finish();

            if(data)
            {
                this.$emit('eReloadList');

                this.saveAndNew();

            }
        },
        //---------------------------------------------------------------------
        saveAndNew: function () {
            this.update('active_item', null);
            this.resetNewItem();
        },
        //---------------------------------------------------------------------
        resetNewItem: function()
        {
            let new_item = this.getNewItem();
            this.update('new_item', new_item);
        },
        //---------------------------------------------------------------------
        getNewItem: function()
        {
            let new_item = {
                title: null,
                content: null,
                is_published: null,
            };
            return new_item;
        },
        //---------------------------------------------------------------------
    }
}
```

`View.vue`

```vue
<script src="./ViewJs.js"></script>
<template>
    <div class="column">

        <div class="card" v-if="item">

            <!--header-->
            <header class="card-header">

                <div class="card-header-title">
                    <span>{{$vaah.limitString(item.name, 15)}}</span>
                </div>

                <div class="card-header-buttons">

                    <div class="field has-addons is-pulled-right">
                        <p class="control">
                            <b-button @click="$vaah.copy(item.id)"  type="is-light">
                                <small><b>#{{item.id}}</b></small>
                            </b-button>
                        </p>


                        <p class="control">
                            <b-button type="is-light"
                                      @click="resetActiveItem()"
                                      icon-left="times">
                            </b-button>
                        </p>

                    </div>

                </div>

            </header>
            <!--/header-->

            <b-notification type="is-danger"
                            :closable="false"
                            class="is-light is-small"
                            v-if="item.deleted_at"
            >
                Deleted {{$vaah.fromNow(item.deleted_at)}}
            </b-notification>

            <!--content-->
            <div class="card-content is-paddingless ">

                <div class="block" >

                    <div class="b-table">

                        <div class="table-wrapper">
                            <table class="table is-hoverable">

                                <tbody>
                                <template v-for="(value, label) in item">
                                        <tr v-if="label == 'is_published'">
                                            <th width="130" align="right">{{label.charAt(0).toUpperCase() + label.slice(1)}}</th>
                                            <td>
                                                <span v-if="value == 1">Yes</span>
                                                <span v-else>No</span>
                                            </td>
                                        </tr>
                                        <tr v-else>
                                            <th width="130" align="right">{{label.charAt(0).toUpperCase() + label.slice(1)}}</th>
                                            <td>
                                                <span>{{value}}</span>
                                            </td>
                                        </tr>
                                </template>

                                </tbody>
                                
                            </table>
                        </div>

                    </div>


                </div>
            </div>
            <!--/content-->

        </div>

    </div>
</template>
```

`ViewJs.js`

```js
let namespace = 'contents';

export default {
    computed:{
        root() {return this.$store.getters['root/state']},
        page() {return this.$store.getters[namespace+'/state']},
        ajax_url() {return this.$store.getters[namespace+'/state'].ajax_url},
        item() {return this.$store.getters[namespace+'/state'].active_item},
    },
    components:{

    },
    data()
    {
        return {
            namespace: namespace,
            is_btn_loading: false,
            is_content_loading: false,
        }
    },
    watch: {
        $route(to, from) {
            this.updateStore();
            this.getItem();
        }
    },
    mounted() {
        //----------------------------------------------------
        this.onLoad();
        //----------------------------------------------------
        this.$root.$on('eReloadItem', this.getItem);
        //----------------------------------------------------
    },
    methods: {
        //---------------------------------------------------------------------
        update: function(name, value)
        {
            let update = {
                state_name: name,
                state_value: value,
                namespace: this.namespace,
            };
            this.$vaah.updateState(update);
        },
        //---------------------------------------------------------------------
        updateStore: function()
        {
            this.$store.dispatch(this.namespace+'/updateStore', this.$route);

        },
        //---------------------------------------------------------------------
        onLoad: function()
        {
            this.is_content_loading = true;
            this.updateStore();
            this.getItem();
        },

        //---------------------------------------------------------------------
        getItem: function () {
            this.$Progress.start();
            this.params = {};
            let url = this.ajax_url+'/item/'+this.$route.params.id;
            this.$vaah.ajaxGet(url, this.params, this.getItemAfter);
        },
        //---------------------------------------------------------------------
        getItemAfter: function (data, res) {
            this.$Progress.finish();
            this.is_content_loading = false;

            if(data && data)
            {
                this.update('active_item', data);
            } else
            {
                //if item does not exist or delete then redirect to list
                this.update('active_item', null);
                this.$router.push({name: 'contents.list'});
            }
        },
        //---------------------------------------------------------------------
        confirmDelete: function()
        {
            let self = this;
            this.$buefy.dialog.confirm({
                title: 'Deleting record',
                message: 'Are you sure you want to <b>delete</b> the record? This action cannot be undone.',
                confirmText: 'Delete',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: function () {
                    self.actions('bulk-delete');
                }
            })
        },
        //---------------------------------------------------------------------
        resetActiveItem: function () {
            this.update('active_item', null);
            this.$router.push({name:'contents.list'});
        },
        //---------------------------------------------------------------------

        //---------------------------------------------------------------------
    }
}
```

`Edit.vue`

```vue
<script src="./EditJs.js"></script>
<template>
    <div class="column" v-if="item && page">

        <div class="columns">

            <div class="column">

                <div class="card">

                    <!--header-->
                    <header class="card-header">

                        <div class="card-header-title">
                            <span>Edit</span>
                        </div>


                        <div class="card-header-buttons">

                            <div class="field has-addons is-pulled-right">

                                <p class="control">
                                    <b-button icon-left="save"
                                              type="is-light"
                                              :loading="is_btn_loading"
                                              @click="store()">
                                        Save
                                    </b-button>
                                </p>

                                <p class="control">


                                    <b-dropdown aria-role="list" position="is-bottom-left">
                                        <button class="button is-light"
                                                slot="trigger">
                                            <b-icon icon="caret-down"></b-icon>
                                        </button>

                                        <b-dropdown-item aria-role="listitem"
                                                         @click="setLocalAction('save-and-close')">
                                            <b-icon icon="check"></b-icon>
                                            Save & Close
                                        </b-dropdown-item>

                                        <b-dropdown-item aria-role="listitem"
                                                         @click="setLocalAction('save-and-new')">
                                            <b-icon icon="plus"></b-icon>
                                            Save & New
                                        </b-dropdown-item>

                                    </b-dropdown>


                                </p>

                                <p class="control">
                                    <b-button type="is-light"
                                              @click="resetActiveItem()"
                                              icon-left="times">
                                    </b-button>
                                </p>



                            </div>


                        </div>

                    </header>
                    <!--/header-->

                    <!--content-->
                    <div class="card-content">

                        <b-field label="Title" :label-position="labelPosition">
                            <b-input v-model="item.title"></b-input>
                        </b-field>

                        <b-field label="Content" :label-position="labelPosition">
                            <b-input v-model="item.content"></b-input>
                        </b-field>

                        <b-field label="Is Published" :label-position="labelPosition">
                            <b-radio-button v-model="item.is_published"
                                            :native-value=1>
                                <span>Yes</span>
                            </b-radio-button>

                            <b-radio-button type="is-danger"
                                            v-model="item.is_published"
                                            :native-value=0>
                                <span>No</span>
                            </b-radio-button>
                        </b-field>


                    </div>
                    <!--/content-->


                </div>

            </div>
        </div>


    </div>
</template>
```

`EditJs.js`

```js
let namespace = 'contents';

export default {
    props: ['id'],
    computed:{
        root() {return this.$store.getters['root/state']},
        page() {return this.$store.getters[namespace+'/state']},
        assets() {return this.$store.getters[namespace+'/state'].assets},
        ajax_url() {return this.$store.getters[namespace+'/state'].ajax_url},
        item() {return this.$store.getters[namespace+'/state'].active_item},
    },
    components:{
    },
    data()
    {
        return {
            namespace: namespace,
            is_content_loading: false,
            is_btn_loading: null,
            labelPosition: 'on-border',
            params: {},
            local_action: null,
            title: null,
            groups: null,
            theme_sync_loader: false
        }
    },
    watch: {
        $route(to, from) {
            this.updateStore();
            this.getItem();
        }
    },
    mounted() {
        this.onLoad();
    },
    methods: {
        //---------------------------------------------------------------------
        update: function(name, value)
        {
            let update = {
                state_name: name,
                state_value: value,
                namespace: this.namespace,
            };
            this.$vaah.updateState(update);
        },
        //---------------------------------------------------------------------
        updateStore: function()
        {
            this.$store.dispatch(this.namespace+'/updateStore', this.$route);
        },
        //---------------------------------------------------------------------
        onLoad: function()
        {
            this.is_content_loading = true;
            this.updateStore();
            this.getItem();
        },
        //---------------------------------------------------------------------
        getItem: function () {
            this.$Progress.start();
            this.params = {};
            let url = this.ajax_url+'/item/'+this.$route.params.id;
            this.$vaah.ajax(url, this.params, this.getItemAfter);
        },
        //---------------------------------------------------------------------
        getItemAfter: function (data, res) {
            this.$Progress.finish();
            this.is_content_loading = false;

            if(data)
            {
                this.update('active_item', data);
            } else
            {
                //if item does not exist or delete then redirect to list
                this.update('active_item', null);
                this.$router.push({name: 'contents.list', params:{slug: this.page.content_slug}});
            }
        },
        //---------------------------------------------------------------------
        store: function () {
            this.$Progress.start();

            let params = this.item;
            console.log('--->', params);

            let url = this.ajax_url+'/item/'+this.item.id+'/store';
            this.$vaah.ajax(url, params, this.storeAfter);
        },
        //---------------------------------------------------------------------
        storeAfter: function (data, res) {

            this.$Progress.finish();

            if(data)
            {
                this.$emit('eReloadList');

                if(this.local_action === 'save-and-close')
                {
                    this.saveAndClose();
                }else if(this.local_action === 'save-and-new'){
                    this.saveAndNew();
                }

            }

        },
        //---------------------------------------------------------------------
        setLocalAction: function (action) {
            this.local_action = action;
            this.store();
        },
        //---------------------------------------------------------------------
        saveAndClose: function () {
            this.update('active_item', null);
            this.$router.push({name:'contents.list'});
        },
        //---------------------------------------------------------------------
        saveAndNew: function () {
            this.update('active_item', null);
            this.$router.push({name:'contents.create'});
        },
        //---------------------------------------------------------------------
        resetActiveItem: function () {
            this.update('active_item', null);
            this.$router.push({name:'contents.list'});
        },
        //---------------------------------------------------------------------
    }
}
```