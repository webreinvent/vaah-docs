# Set up Vue Routes

------

For most Single Page Applications, it’s recommended to use the officially-supported vue-router library. For more details, see vue-router’s [documentation](https://router.vuejs.org/) and you can check out the video explanation:

- [Vue.js Routing with vue-router](https://www.youtube.com/watch?v=mY2MiaYiSdw&t=305s)
- [Vue-Router child components](https://youtu.be/X-cs3UfqfYA)

Now we set up vue routes, all we need to do is map our components to the routes and you can also associate the routes with the Middleware functions.

The concept of Middleware in frameworks like Laravel makes it fairly easy to do things like requiring an authenticated user for specific routes. You can check out the full details [here](https://blog.logrocket.com/vue-middleware-pipelines/).

Add this route to `VaahCms/Modules/Articles/Vue/routes/routes.js`



```
import ContentsList from "./../pages/contents/List";
import ContentsCreate from "./../pages/contents/Create";
import ContentsView from "./../pages/contents/View";
import ContentsEdit from "./../pages/contents/Edit";

routes_list =     {
    path: '/contents',
    component: Backend,
    name: 'contents',
    props: true,
    meta: {
        middleware: [
            
        ]
    },
    children: [
        {
            path: '/',
            name: 'contents.list',
            component: ContentsList,
            props: true,
            meta: {
                middleware: [
                    
                ]
            },
            children: [
                {
                    path: 'create',
                    name: 'contents.create',
                    component: ContentsCreate,
                    props: true,
                    meta: {
                        middleware: [
                            
                        ]
                    },
                },
                {
                    path: 'view/:id',
                    name: 'contents.view',
                    component: ContentsView,
                    props: true,
                    meta: {
                        middleware: [
                            
                        ]
                    },
                },
                {
                    path: 'edit/:id',
                    name: 'contents.edit',
                    component: ContentsEdit,
                    props: true,
                    meta: {
                        middleware: [
                            
                        ]
                    },
                }

            ]
        }

    ]
};

routes.push(routes_list);
```

------