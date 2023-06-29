<template><div><h1 id="firebase-service" tabindex="-1"><a class="header-anchor" href="#firebase-service" aria-hidden="true">#</a> Firebase Service</h1>
<nav class="table-of-contents"><ul><li><router-link to="#internalnotificationswithfirebase-class">InternalNotificationsWithFirebase Class</router-link></li><li><router-link to="#integration">Integration</router-link></li><li><router-link to="#souce-code">Souce Code</router-link></li></ul></nav>
<p>The Firebase service file provides the implementation of internal notifications using Firebase Firestore. It contains the necessary methods and structures to interact with Firebase Firestore and manage internal notifications.</p>
<div class="custom-container danger"><p class="custom-container-title">Note:</p>
<p>However, developers should note that this file is not meant to be directly instantiated. Instead, it is used by the <RouterLink to="/vaahflutter/directory_structure/vaahextendflutter/services/notification/internal/notification.html">main internal notifications file</RouterLink>, which provides a unified interface for integrating different notification services.</p>
</div>
<h2 id="internalnotificationswithfirebase-class" tabindex="-1"><a class="header-anchor" href="#internalnotificationswithfirebase-class" aria-hidden="true">#</a> InternalNotificationsWithFirebase Class</h2>
<p>The InternalNotificationsWithFirebase class implements the InternalNotificationsService abstract class specifically for handling internal notifications using Firebase Firestore. It includes methods for initializing the service, subscribing to and unsubscribing from notifications, pushing notifications to users, and managing internal notification streams.</p>
<h2 id="integration" tabindex="-1"><a class="header-anchor" href="#integration" aria-hidden="true">#</a> Integration</h2>
<p>To integrate Firebase-based internal notifications using this service file, follow these steps:</p>
<ol>
<li>
<p>Ensure that you have set up Firebase Firestore in your Flutter project separately and have the required collections and permissions in place to store internal notifications.</p>
</li>
<li>
<p>Ensure that you have the necessary Firebase-related configurations set up in your Flutter project by running the <code v-pre>flutterfire configure</code> command. This step ensures that your project is properly connected to Firebase.</p>
</li>
<li>
<p>Implement the necessary logic to initialize Firebase Firestore and retrieve the user ID based on your application's authentication or identification system. Also when subscribing for perticular user user id is needed so for that logic should be implemented by developer in the <code v-pre>init()</code> method of this class to assign user id in the service, the logic may vary depending on the project.</p>
</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">note</p>
<p>Remember, the Firebase service file provided here serves as a part of the overall internal notifications system and should be used within the context of the main internal notifications file. It provides the implementation for Firebase Firestore-based notifications, while the main file acts as a central point for integrating different notification services.</p>
</div>
<h2 id="souce-code" tabindex="-1"><a class="header-anchor" href="#souce-code" aria-hidden="true">#</a> Souce Code</h2>
<div class="language-dart line-numbers-mode" data-ext="dart"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:cloud_firestore/cloud_firestore.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'./base_service.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../../models/notification.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">InternalNotificationsWithFirebase</span> <span class="token keyword">implements</span> <span class="token class-name">InternalNotificationsService</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">FirebaseFirestore</span> _firebaseFirestore <span class="token operator">=</span> <span class="token class-name">FirebaseFirestore</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span> _pendingNotificationsCountStreamController <span class="token operator">=</span>
      <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  late <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span> pendingNotificationsCountStream<span class="token punctuation">;</span>

  <span class="token keyword">final</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span> _notificationsStreamController <span class="token operator">=</span>
      <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  late <span class="token keyword">final</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span><span class="token punctuation">></span></span> notificationsStream<span class="token punctuation">;</span>

  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> _notifications <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> <span class="token keyword">get</span> notifications <span class="token operator">=</span><span class="token operator">></span> _notifications<span class="token punctuation">;</span>

  <span class="token comment">// collection ids</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> _notificationsCollection <span class="token operator">=</span> <span class="token string-literal"><span class="token string">'notifications'</span></span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> _notificationsDataCollection <span class="token operator">=</span> <span class="token string-literal"><span class="token string">'notification_data'</span></span><span class="token punctuation">;</span>

  late <span class="token keyword">final</span> <span class="token class-name">String</span> userId<span class="token punctuation">;</span>

  <span class="token class-name">StreamSubscription</span><span class="token operator">?</span> _firebaseNotificationStream<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    pendingNotificationsCountStream <span class="token operator">=</span> _pendingNotificationsCountStreamController<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>
    notificationsStream <span class="token operator">=</span> _notificationsStreamController<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>

    <span class="token comment">// Write your logic here to get user id</span>
    userId <span class="token operator">=</span> <span class="token string-literal"><span class="token string">'test'</span></span><span class="token punctuation">;</span>

    <span class="token keyword">final</span> bool hasSubscribed <span class="token operator">=</span>
        <span class="token punctuation">(</span><span class="token keyword">await</span> _firebaseFirestore<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsCollection<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'has_subscribed'</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasSubscribed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _firebaseNotificationStream <span class="token operator">=</span> _firebaseFirestore
          <span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsCollection<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsDataCollection<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">snapshots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>_notificationsUpdated<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    _firebaseNotificationStream<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _pendingNotificationsCountStreamController<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _notificationsStreamController<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _firebaseFirestore
        <span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsCollection<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-literal"><span class="token string">'has_subscribed'</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    _firebaseNotificationStream<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// To be safe we cancel old subscription if there is any</span>
    _firebaseNotificationStream <span class="token operator">=</span> _firebaseFirestore
        <span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsCollection<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsDataCollection<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">snapshots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>_notificationsUpdated<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _firebaseFirestore
        <span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsCollection<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-literal"><span class="token string">'has_subscribed'</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _firebaseNotificationStream<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userIds<span class="token punctuation">,</span> <span class="token class-name">InternalNotification</span> notification<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> id <span class="token keyword">in</span> userIds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> _firebaseFirestore
          <span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsCollection<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span>_notificationsDataCollection<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>notification<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">_notificationsUpdated</span><span class="token punctuation">(</span><span class="token class-name">QuerySnapshot</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span><span class="token punctuation">></span></span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    int count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InternalNotification</span><span class="token punctuation">></span></span> updatedNotifications <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> doc <span class="token keyword">in</span> event<span class="token punctuation">.</span>docs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">InternalNotification</span> notification <span class="token operator">=</span> <span class="token class-name">InternalNotification</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>notification<span class="token punctuation">.</span>opened<span class="token punctuation">)</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
      updatedNotifications<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>notification<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    _pendingNotificationsCountStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _notificationsStreamController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>updatedNotifications<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _notifications <span class="token operator">=</span> updatedNotifications<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


