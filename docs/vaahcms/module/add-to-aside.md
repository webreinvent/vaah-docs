# Add to Aside Menu

------

<img :src="$withBase('/images/aside-menu.png')" alt="aside-menu">


At `VaahCms/Modules/Articles/Vue/layouts/partials/` folder you will find a files:

AsideMenu.vue: In which we directly set the new menu items.

To extend the sidebar, we need to edit `AsideMenu.vue`:



```
<template>

    <b-menu class="is-light">
        <b-menu-list label="Manage">
            <b-menu-item label="Content"
                         icon="cog"
                         :href="root.current_url+'#/contents'"
                         tag="a"
                         :active="!!($route.path.includes('/contents'))"
            >
            </b-menu-item>

        </b-menu-list>
    </b-menu>

</template>

<script>
export default {
    computed:{
        root() {return this.$store.getters['root/state']},
        assets() {return this.$store.getters['root/state'].assets},
    },
    components:{

    },
    data()
    {
        let obj = {
        };

        return obj;
    },
    watch: {
        
    },
    mounted() {

        //---------------------------------------------------------------------

    },
    methods: {
        //---------------------------------------------------------------------
    }
}
</script>
```