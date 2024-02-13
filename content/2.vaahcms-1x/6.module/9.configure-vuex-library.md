# Configuring Vuex Library

------

Vuex provides that single source of truth for us. As we begin to store state within it, our state becomes a lot cleaner, and a lot easier to reason about. Now, every component that relies on our Global State can have direct access to it.

When one component updates the Vuex State, other components can be listening for when that State changes, then they can reactively respond based off that state-change (and the new State value they receive). For more details, see vuex's [documentation](https://vuex.vuejs.org/)

Now we will configure the Vuex library inside Vue application. So now first of all go to modules folder at `VaahCms/Modules/Articles/Vue/store/modules/`

Now make another file inside the module folder called as `contents.js` which will have the getters,actions,mutations as shown below

Let check the `Vue/store/modules/contents.js`



```js
import {VaahHelper as Vaah} from "../../vaahvue/helpers/VaahHelper";

//---------Variables
let base_url = document.getElementsByTagName('base')[0].getAttribute("href");
let debug = document.getElementById('debug').getAttribute('content');
//---------/Variables

let json_url = base_url+"/backend/articles/json";
let ajax_url = base_url+"/backend/articles/contents";
export default {
    namespaced: true,
    state: {
        debug: debug,
        content_slug: null,
        base_url: base_url,
        ajax_url: ajax_url,
        json_url: json_url,
        assets: null,
        assets_is_fetching: null,
        assets_reload: false,
        list: null,
        selected_id: null,
        status_list: null,
        list_is_empty: false,
        is_list_loading: false,
        list_view: true,
        active_item: null,
        is_item_loading: false,
        show_filters: false,
        query_string: {
            page: 1,
        },
        new_item:{
            title: null,
            content: null,
            is_published: null,
        },

    },
    mutations:{
        updateState: function (state, payload) {
            state[payload.key] = payload.value;
        },
    },
    actions:{
        updateStore({ state, commit, dispatch, getters }, payload) {
            let list_view;
            let update;

            if(payload && payload.name && payload.name == 'contents.list')
            {
                list_view = 'large';

                update = {
                    key: 'active_item',
                    value: null
                };

                commit('updateState', update);

            }

            if(payload.name == 'contents.create' || payload.name == 'contents.view' || payload.name == 'contents.edit')
            {
                list_view = 'small';
            };

            let view = {
                key: 'list_view',
                value: list_view
            };

            commit('updateState', view);

        },

    },
    getters:{
        state(state) {return state;},
        assets(state) {return state.assets;},
        is_logged_in(state) {return state.is_logged_in;},
    }

}
```

Now this file will be import in `Vue/store/store.js` which is shown below.



```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import root from './modules/root';
import contents from './modules/contents';

export const store = new Vuex.Store({
    modules: {
        root: root,
        contents: contents,
    }
});
```