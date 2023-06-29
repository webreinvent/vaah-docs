<template><div><h1 id="p12-certificate" tabindex="-1"><a class="header-anchor" href="#p12-certificate" aria-hidden="true">#</a> .p12 Certificate</h1>
<div class="custom-container tip"><p class="custom-container-title">Setup</p>
<ul>
<li>To do the setup of remote push notification service you will need to setup one of the below thing.
<ul>
<li>.p12 Certificate (Refer this documentation)</li>
<li>OR <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/push/configurations/p8_key.html">p8 Token-Based Connection to APNs</RouterLink></li>
</ul>
</li>
</ul>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#step-1-requirements">Step 1. Requirements</router-link></li><li><router-link to="#step-2-identifier-provisioning">Step 2. Identifier/ Provisioning</router-link></li><li><router-link to="#step-3-generate-a-push-certificate">Step 3. Generate a Push Certificate</router-link><ul><li><router-link to="#request-a-certificate-from-a-certificate-authority">Request a Certificate From a Certificate Authority</router-link></li><li><router-link to="#add-capabilities">Add Capabilities</router-link></li><li><router-link to="#select-push-notification-certificate">Select Push Notification Certificate</router-link></li><li><router-link to="#select-your-app">Select your App</router-link></li><li><router-link to="#upload-your-certificate-signing-request">Upload your Certificate Signing Request</router-link></li><li><router-link to="#creating-a-private-key">Creating a Private Key</router-link></li></ul></li><li><router-link to="#step-4-provisioning-profiles">Step 4. Provisioning Profiles</router-link><ul><li><router-link to="#create-your-profile">Create Your Profile</router-link></li></ul></li></ul></nav>
<h2 id="step-1-requirements" tabindex="-1"><a class="header-anchor" href="#step-1-requirements" aria-hidden="true">#</a> Step 1. Requirements</h2>
<ul>
<li>An iOS mobile app. (This is not for websites / web push)</li>
<li>An Apple Developer Account with Admin Role.</li>
<li>A Mac computer with Xcode 11+</li>
<li>Your Xcode project should have the Push Notification capability added. Otherwise your project may not be shown in the Apple Developer Center.</li>
</ul>
<h2 id="step-2-identifier-provisioning" tabindex="-1"><a class="header-anchor" href="#step-2-identifier-provisioning" aria-hidden="true">#</a> Step 2. Identifier/ Provisioning</h2>
<div class="custom-container warning"><p class="custom-container-title">🚧 Deprecated Provisionator</p>
<p>We have deprecated the Provisionator tool and recommend updating your application to instead use a .p8 token to connect to APNs.</p>
<p>If you would still like to use the .p12 certificate, you can continue following this guide to generate your certificate.</p>
</div>
<ul>
<li>
<p>If you are renewing a certificate or your app already has an existing App ID or Provisioning Profile, skip to <a href="#step-3-generate-a-push-certificate">Step 3. Generate a Push Certificate.</a></p>
</li>
<li>
<p>If your App does not have an existing App ID or Provisioning Profile setup, then login to your Apple Developer Account and navigate to Certificates, Identifiers &amp; Profiles-&gt;Identifiers and select the Blue + button.</p>
</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/identifier.png')">
<ul>
<li>Select App IDs and Continue</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/identifier-a.png')">
<ul>
<li>Select App and Continue</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/identifier-b.png')">
<ul>
<li>Provide a &quot;Description&quot; and your Explicit &quot;Bundle ID&quot;. This must be the same as the &quot;Bundle Identifier&quot; you set for your project in Xcode.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/identifier-c.png')">
<ul>
<li>Press Continue and on the next page, select Register</li>
</ul>
<h2 id="step-3-generate-a-push-certificate" tabindex="-1"><a class="header-anchor" href="#step-3-generate-a-push-certificate" aria-hidden="true">#</a> Step 3. Generate a Push Certificate</h2>
<div class="custom-container warning"><p class="custom-container-title">🚧 Previous Certificate Revocation</p>
<p>Previous .p12 Push Certificates for this Bundle ID will be revoked and cannot be used once you generate a new certificate with this method.</p>
</div>
<h3 id="request-a-certificate-from-a-certificate-authority" tabindex="-1"><a class="header-anchor" href="#request-a-certificate-from-a-certificate-authority" aria-hidden="true">#</a> Request a Certificate From a Certificate Authority</h3>
<ul>
<li>
<p>Open the Keychain Access App on your macOS system. It may be located in <strong>Applications &gt; Utilities &gt; Keychain Access</strong></p>
</li>
<li>
<p>Select <strong>Keychain Access &gt; Certificate Assistant &gt; Request a Certificate From a Certificate Authority...</strong></p>
</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/certificate-req.png')">
<ul>
<li>
<p>Next, select the Saved to disk option and enter your information in the required fields. Then click Continue.</p>
</li>
<li>
<p>This creates a certification request file that will be used later.</p>
</li>
</ul>
<h3 id="add-capabilities" tabindex="-1"><a class="header-anchor" href="#add-capabilities" aria-hidden="true">#</a> Add Capabilities</h3>
<ul>
<li>
<p>In your Apple Developer Account under Certificates, IDs &amp; Profiles &gt; Identifiers, select Identifiers.</p>
</li>
<li>
<p>Find and select your Identifier to enable Push Notifications, but do not click Configure.</p>
</li>
<li>
<p>If you do not see your Identifier, follow <a href="#step-2-identifier-provisioning">Step 2. Identifier/ Provisioning.</a></p>
</li>
</ul>
<h3 id="select-push-notification-certificate" tabindex="-1"><a class="header-anchor" href="#select-push-notification-certificate" aria-hidden="true">#</a> Select Push Notification Certificate</h3>
<ul>
<li>
<p>Go to Certificates and create a new certificate by clicking the blue + (plus) button.</p>
</li>
<li>
<p>Under Services, select Apple Push Notification service SSL (Sandbox &amp; Production) and click Continue.</p>
</li>
<li>
<p>The certificate will be applicable to both Sandbox and Production environments, so you do not need a separate key for each one.</p>
</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/certificate.png')">
<h3 id="select-your-app" tabindex="-1"><a class="header-anchor" href="#select-your-app" aria-hidden="true">#</a> Select your App</h3>
<ul>
<li>Choose your App ID with matching Bundle ID from the App ID pop-up menu, and click Continue.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/certificate-a.png')">
<h3 id="upload-your-certificate-signing-request" tabindex="-1"><a class="header-anchor" href="#upload-your-certificate-signing-request" aria-hidden="true">#</a> Upload your Certificate Signing Request</h3>
<ul>
<li>Click Choose File.., select the CertSigningRequest file you saved, click Open, and then click Continue.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/certificate-b.png')">
<ul>
<li>Click Download to save the certificate to your computer.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/certificate-c.png')">
<h3 id="creating-a-private-key" tabindex="-1"><a class="header-anchor" href="#creating-a-private-key" aria-hidden="true">#</a> Creating a Private Key</h3>
<ul>
<li>Open the .cer file you downloaded in the last step by double-clicking on it in Finder.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/certificate-d.png')">
<ul>
<li>After a few seconds, the Keychain Access program should open. Select <strong>Login &gt; My Certificates</strong>, then right-click on your Apple Push Services key in the list and <strong>select Export &quot;Apple Push Services...&quot;</strong>.</li>
</ul>
<img :src="$withBase('/images/flutter/apple-dev-portal/certificate-e.png')">
<ul>
<li>Give the file a unique name using the .p12 extension, and click Save. You will have the option to protect the file with a password.</li>
</ul>
<h2 id="step-4-provisioning-profiles" tabindex="-1"><a class="header-anchor" href="#step-4-provisioning-profiles" aria-hidden="true">#</a> Step 4. Provisioning Profiles</h2>
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


