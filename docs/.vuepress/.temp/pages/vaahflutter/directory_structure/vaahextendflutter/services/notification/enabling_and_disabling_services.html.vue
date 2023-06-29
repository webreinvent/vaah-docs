<template><div><h1 id="enabling-and-disabling-services" tabindex="-1"><a class="header-anchor" href="#enabling-and-disabling-services" aria-hidden="true">#</a> Enabling and Disabling Services</h1>
<nav class="table-of-contents"><ul><li><router-link to="#env-variables">Env variables</router-link></li><li><router-link to="#push-notifications">Push notifications</router-link><ul><li><router-link to="#pushnotificationsservicetype-remote">PushNotificationsServiceType.remote</router-link></li><li><router-link to="#pushnotificationsservicetype-local">PushNotificationsServiceType.local</router-link></li><li><router-link to="#pushnotificationsservicetype-both">PushNotificationsServiceType.both</router-link></li><li><router-link to="#pushnotificationsservicetype-none">PushNotificationsServiceType.none</router-link></li></ul></li><li><router-link to="#internal-in-app-notifications">Internal (in-app) notifications</router-link><ul><li><router-link to="#internalnotificationsservicetype-firebase">InternalNotificationsServiceType.firebase</router-link></li><li><router-link to="#internalnotificationsservicetype-pusher">InternalNotificationsServiceType.pusher</router-link></li><li><router-link to="#internalnotificationsservicetype-custom">InternalNotificationsServiceType.custom</router-link></li><li><router-link to="#internalnotificationsservicetype-none">InternalNotificationsServiceType.none</router-link></li></ul></li></ul></nav>
<h2 id="env-variables" tabindex="-1"><a class="header-anchor" href="#env-variables" aria-hidden="true">#</a> Env variables</h2>
<p>For Push notifications and Internal notifications we can set what service we want to use.</p>
<h2 id="push-notifications" tabindex="-1"><a class="header-anchor" href="#push-notifications" aria-hidden="true">#</a> Push notifications</h2>
<ul>
<li>
<p>To enable push notifications you need to update <code v-pre>pushNotificationsServiceType</code> variable in env file for your environment.</p>
</li>
<li>
<p>Possible values of the variable are:</p>
<ol>
<li>PushNotificationsServiceType.remote</li>
<li>PushNotificationsServiceType.local</li>
<li>PushNotificationsServiceType.both</li>
<li>PushNotificationsServiceType.none</li>
</ol>
</li>
<li>
<p>Here for context, remote service is used when dev wants to implement notifications for chat like notifications, and local service is used when dev wants to implement notifications for reminder like notifications.</p>
</li>
</ul>
<h3 id="pushnotificationsservicetype-remote" tabindex="-1"><a class="header-anchor" href="#pushnotificationsservicetype-remote" aria-hidden="true">#</a> PushNotificationsServiceType.remote</h3>
<ul>
<li>If developer sets env variable value equals to <code v-pre>PushNotificationsServiceType.remote</code> then they have to add one more variable, because to enable remote notifications we rely on <code v-pre>Onesignal</code>. They can follow <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/services/remote.html#onesignal-setup-and-env-variables">this section</RouterLink> and do the configuration for one signal. When they find the one signal app id. Developer can add it using <code v-pre>oneSignalConfig: const OneSignalConfig(appId: 'your-app-id'),</code>.</li>
</ul>
<h3 id="pushnotificationsservicetype-local" tabindex="-1"><a class="header-anchor" href="#pushnotificationsservicetype-local" aria-hidden="true">#</a> PushNotificationsServiceType.local</h3>
<ul>
<li>If developer sets env variable value equals to <code v-pre>PushNotificationsServiceType.local</code> then they can push any local notification without any additional configuration.</li>
</ul>
<h3 id="pushnotificationsservicetype-both" tabindex="-1"><a class="header-anchor" href="#pushnotificationsservicetype-both" aria-hidden="true">#</a> PushNotificationsServiceType.both</h3>
<ul>
<li>If developer sets env variable value equals to <code v-pre>PushNotificationsServiceType.both</code> then they can push any local notification without any additional configuration. But for remote they need to do setup for onesignal as mentioned in <a href="#pushnotificationsservicetyperemote">this section</a>. And both kind of services will be available.</li>
</ul>
<h3 id="pushnotificationsservicetype-none" tabindex="-1"><a class="header-anchor" href="#pushnotificationsservicetype-none" aria-hidden="true">#</a> PushNotificationsServiceType.none</h3>
<ul>
<li>If developer sets env variable value equals to <code v-pre>PushNotificationsServiceType.none</code> then app will not use any kind of service and won't be able to push remote or local notifications.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">More details</p>
<p>Please visit <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/notification.html">push notifications section</RouterLink> for more details.</p>
</div>
<h2 id="internal-in-app-notifications" tabindex="-1"><a class="header-anchor" href="#internal-in-app-notifications" aria-hidden="true">#</a> Internal (in-app) notifications</h2>
<ul>
<li>
<p>To enable internal notifications you need to update <code v-pre>internalNotificationsServiceType</code> variable in env file for your environment.</p>
</li>
<li>
<p>Possible values of the variable are:</p>
<ol>
<li>InternalNotificationsServiceType.firebase</li>
<li>InternalNotificationsServiceType.pusher</li>
<li>InternalNotificationsServiceType.custom</li>
<li>InternalNotificationsServiceType.none</li>
</ol>
</li>
</ul>
<h3 id="internalnotificationsservicetype-firebase" tabindex="-1"><a class="header-anchor" href="#internalnotificationsservicetype-firebase" aria-hidden="true">#</a> InternalNotificationsServiceType.firebase</h3>
<ul>
<li>If developer sets env variable value equals to <code v-pre>InternalNotificationsServiceType.firebase</code> then they have to do the setup for firebase fire store and run flutterfire configure. Read about it <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/services/firebase.html#integration">here</RouterLink>.</li>
</ul>
<h3 id="internalnotificationsservicetype-pusher" tabindex="-1"><a class="header-anchor" href="#internalnotificationsservicetype-pusher" aria-hidden="true">#</a> InternalNotificationsServiceType.pusher</h3>
<ul>
<li>If developer sets env variable value equals to <code v-pre>InternalNotificationsServiceType.pusher</code> then they have to do the setup for firebase fire store and run flutterfire configure. Read about it <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/services/firebase.html#integration">here</RouterLink>.</li>
</ul>
<h3 id="internalnotificationsservicetype-custom" tabindex="-1"><a class="header-anchor" href="#internalnotificationsservicetype-custom" aria-hidden="true">#</a> InternalNotificationsServiceType.custom</h3>
<ul>
<li>If developer sets env variable value equals to <code v-pre>InternalNotificationsServiceType.custom</code> then they have to setup custom service, <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/services/custom.html">here</RouterLink></li>
</ul>
<h3 id="internalnotificationsservicetype-none" tabindex="-1"><a class="header-anchor" href="#internalnotificationsservicetype-none" aria-hidden="true">#</a> InternalNotificationsServiceType.none</h3>
<ul>
<li>If developer sets env variable value equals to <code v-pre>InternalNotificationsServiceType.none</code> then app will not use any kind of service and won't be able to dump internal notifications.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">More details</p>
<p>Please visit <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/notification.html">internal notifications section</RouterLink> for more details.</p>
</div>
</div></template>


