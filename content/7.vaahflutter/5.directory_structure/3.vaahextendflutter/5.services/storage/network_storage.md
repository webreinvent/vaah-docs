---
toc: true
title: Network Storage
description: Documentation on using network storage options (Firebase Firestore and Supabase) with Vaah Flutter.
---

## Overview

Vaah Flutter provides two network storage options: Firebase FireStore and Supabase. This section guides you through setting up and using these network storage solutions.

Select one option from Firebase Firestore and Supabase.

| Firestore  | Supabase |
| :---- |          :----         |
| The `NetworkStorageWithFirestore` class implements the `NetworkStorageService` interface using `Firebase Firestore` as the storage backend. It is used when `networkStorageType.firebase` is selected in the configuration. | The `networkStorageWithSupabase` class implements the `networkStorageService` interface using `Supabase` as the storage backend. It is used when `networkStorageType.supabase` is selected in the configuration. |

## Setup

### If you select Firebase Firestore

1. Configure the storage type in the env.dart file.

```dart
final EnvironmentConfig defaultConfig = EnvironmentConfig(
  // other configurations
  networkStorageType: networkStorageType.firebase,
);
```

::alert{type="info" class="flex flex-col p-4 mb-4 text-m text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"}
If you want to perform operations (i.e., CRUD) in default collection `vaah-flutter-collection`, don't pass the `collectionName` as shown in the example :

```dart 
await NetworkStorage.create(
  key: 'dave', 
  value: {
    'name': 'Dave',
    'age': 30,
    'email': 'x@yz.com',
  },
);
final value = await NetworkStorage.read(key: 'dave');
```
::

