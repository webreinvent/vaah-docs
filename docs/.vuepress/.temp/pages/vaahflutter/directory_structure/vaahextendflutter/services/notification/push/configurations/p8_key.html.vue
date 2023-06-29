<template><div><h1 id="p8-token-based-connection-to-apns" tabindex="-1"><a class="header-anchor" href="#p8-token-based-connection-to-apns" aria-hidden="true">#</a> p8 Token-Based Connection to APNs</h1>
<div class="custom-container tip"><p class="custom-container-title">Setup</p>
<ul>
<li>To do the setup of remote push notification service you will need to setup one of the below thing.
<ul>
<li><RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/configurations/p12_certificate.html">.p12 Certificate</RouterLink></li>
<li>OR p8 Token-Based Connection to APNs (Refer this documentation)</li>
</ul>
</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#step-1-requirements">Step 1. Requirements</router-link></li><li><router-link to="#step-2-generate-a-new-p8-key">Step 2. Generate a new p8 key</router-link></li><li><router-link to="#step-3-provisioning-profiles">Step 3. Provisioning Profiles</router-link><ul><li><router-link to="#create-your-profile">Create Your Profile</router-link></li></ul></li></ul></nav>
<h2 id="step-1-requirements" tabindex="-1"><a class="header-anchor" href="#step-1-requirements" aria-hidden="true">#</a> Step 1. Requirements</h2>
<ul>
<li>An iOS mobile app. (This is not for websites / web push)</li>
<li>An Apple Developer Account with Admin Role.</li>
<li>A Mac computer with Xcode 11+</li>
<li>Your Xcode project should have the Push Notification capability added. Otherwise your project may not be shown in the  Apple Developer Center.</li>
</ul>
<h2 id="step-2-generate-a-new-p8-key" tabindex="-1"><a class="header-anchor" href="#step-2-generate-a-new-p8-key" aria-hidden="true">#</a> Step 2. Generate a new p8 key</h2>
<ul>
<li>Log in to your Apple Developer Account and navigate to Certificates, Identifiers &amp; Profiles &gt; Keys and select the Blue + button.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/p8-a.jpeg')">
<ul>
<li>Select Apple Push Notifications service (APNs), and enter a name for the key</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/p8-b.jpeg')">
<ul>
<li>
<p>Select Continue and on the next page, select Register.</p>
</li>
<li>
<p>Download your new key and save it in a secure place. You can only download it once, so don't lose it. Then, click Done and you will have a new key.</p>
</li>
</ul>
<div class="custom-container danger"><p class="custom-container-title">🚧 Previous Token Revokation</p>
<p>You can have up to two .p8 keys in your Apple account. If you need to generate a third key, you will need to revoke one of your existing keys and it can no longer be used.</p>
</div>
<p>Note: .p8 keys are in the “keys” section of the Apple developer account and the .p12 certificates are under “certificates”. In your Apple account, you can only have two .p8 keys, but you can have both active .p12s and .p8s.</p>
<h2 id="step-3-provisioning-profiles" tabindex="-1"><a class="header-anchor" href="#step-3-provisioning-profiles" aria-hidden="true">#</a> Step 3. Provisioning Profiles</h2>
<ul>
<li>
<p>Skip if selected &quot;Automatically manage signing&quot; in Xcode.</p>
</li>
<li>
<p>If you did not select &quot;Automatically manage signing&quot;, then follow these steps.</p>
</li>
</ul>
<h3 id="create-your-profile" tabindex="-1"><a class="header-anchor" href="#create-your-profile" aria-hidden="true">#</a> Create Your Profile</h3>
<ul>
<li>Go to your <strong>Apple Developer Account &gt; Certificates, Identifiers &amp; Profiles &gt; Profiles.</strong></li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/profile.png')">
<ul>
<li>Next find any that are for your app and remove them if they do not have App Groups and Push Notifications in Enabled Capabilities:</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/profile-a.png')">
<ul>
<li>Create a Profile by pressing the &quot;+&quot; button</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/profile-b.png')">
<ul>
<li>Select the type of profile you need to create and press Continue.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/profile-c.png')">
<ul>
<li>Select the Development or Distribution Certificate to associate with the Profile. Then click Continue.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/profile-d.png')">
<ul>
<li>Name your Provisioning Profile.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Best Practices</p>
<p>When creating a new profile, make sure to enter a unique name in the &quot;Provisioning Profile Name:&quot; field.</p>
<p>For example, if you are creating an Ad-Hoc Provisioning Profile to test push notifications with a Production Push Certificate .p12 file. Use the format AppName_AdHoc so you know the app and type of profile that it is.</p>
</div>
<ul>
<li>
<p>Select Generate.</p>
</li>
<li>
<p>On the last page Download your profile.</p>
</li>
<li>
<p>Re-sync your Developer Account in Xcode by going to <strong>Xcode &gt; Preferences...</strong> then click on the &quot;View Details...&quot; button. Then, click the refresh button on the bottom left of the popup. See Apple's documentation for more detailed instructions.</p>
</li>
<li>
<p>Make sure you pick your new provisioning profile from <strong>Build Settings&gt;Code Signing&gt;Provisioning Profile</strong> in Xcode.</p>
</li>
</ul>
</div></template>


