---
toc: true
title: Network Storage
description: Documentation on using network storage options (Firebase Firestore and Supabase) with Vaah Flutter.
---

::alert{type="warning" class="p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert"} 
Dependencies:

cloud_firestore: ^5.0.2

supabase_flutter: ^2.5.6
::

## Overview

Vaah Flutter provides two network storage options: Firebase Firestore and Supabase. This section guides you through setting up and using these network storage solutions.

Select one option from Firebase Firestore and Supabase.

| Firestore  | Supabase |
| :---- |          :----         |
| The `NetworkStorageWithFirestore` class implements the `NetworkStorageService` interface using `Firebase Firestore` as the storage backend. It is used when `networkStorageType.firebase` is selected in the configuration. | The `networkStorageWithSupabase` class implements the `networkStorageService` interface using `Supabase` as the storage backend. It is used when `networkStorageType.supabase` is selected in the configuration. |

## Setup

### If you select Firebase Firestore

1. Add and setup the firebase using [official documentation](https://firebase.google.com/docs/flutter/setup).

2. Configure the storage type in the env.dart file.

```dart
final EnvironmentConfig defaultConfig = EnvironmentConfig(
  // other configurations
  networkStorageType: networkStorageType.firebase,
);
```

3. In `main.dart` provide the `firebaseOptions` as shown:

```dart
await baseController.init(
  firebaseOptions: DefaultFirebaseOptions.currentPlatform,
    app: const AppConfig(),
    errorApp: const ErrorAppConfig(),
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
); // write

final value = await NetworkStorage.read(key: 'dave'); // read
```
::


### If you select Supabase

1. Setup the supabase project on [supabase](https://supabase.com/dashboard/new).

2. Configure the storage type and supabase configuration in the env.dart file.
You can find the anon key and url [here](https://supabase.com/dashboard/project/embgcnouywpgunriudxi/settings/api).

```dart
final EnvironmentConfig defaultConfig = EnvironmentConfig(
  // other configurations
  networkStorageType: networkStorageType.supabase,
  supabaseConfig: SupabaseConfig(
    anonKey: 'YOUR-ANON-KEY',
    url: 'YOUR-URL',
  ),
);
```
:::alert{type="info" class="flex flex-col p-4 mb-4 text-m text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"}
If you want to perform operations (i.e., CRUD) in default collection `vaah-flutter-collection`.
1. Create a table in the Supabase with name `vaah-flutter-collection` case sensitive.
2. Don't pass the `collectionName` as shown in the example:

```dart 
await NetworkStorage.create(
  key: 'dave', 
  value: {
    'name': 'Dave',
    'age': 30,
    'email': 'x@yz.com',
  },
); // write

final value = await NetworkStorage.read(key: 'dave'); // read
```
:::

::alert{type="info" class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"}
For more information about environment configuration [click here](../../../../3.essentials/2.environments.md).
::

## Usage Guide

After setting up the network Storage you can use the below methods to perform operations (i.e., CRUD).

### **Create Items**

```dart
await NetworkStorage.create(
  collectionName: 'users-collection', 
  key: 'dave', 
  value: {'name': 'Dave', 'age': 30, 'email': 'x@yz.com'},
); // single

await NetworkStorage.createMany(
  collectionName: 'users-collection',
  values: {
    'john': {'name': 'John', 'age': 30, 'email': 'gmail.com'},
    'sina': {'name': 'Sina', 'age': 30, 'email': 'gmail.com'},
    'rock': {'name': 'Rock', 'age': 30, 'email': 'gmail.com'},
    'sean': {'name': 'sean', 'age': 30, 'email': 'gmail.com'},
  },
); // multiple
```

### **Read Items**

```dart
final value =  await NetworkStorage.read(collectionName: 'users-collection', key: 'dave'); // single

final values = await NetworkStorage.readMany(
  collectionName: 'users-collection',
  keys: ['dave', 'john', 'sina', 'sean'],
); // multiple

final values = await networkStorage.readAll(collectionName: 'users-collection'); // all
```

### **Update Items**
```dart
await NetworkStorage.update(
  collectionName: 'users-collection',
  key: 'sean',
  value: {'name': 'Sean'}, // updating a single field
); // single

await NetworkStorage.updateMany(
  collectionName: 'users-collection',
  values: {
    'dave': {'name': 'Dave', 'age': 31, 'email': 'gmail.com'}, // updating multiple fields
    'sina': {'name': 'Sina', 'age': 31, 'email': 'gmail.com'},
    'rock': {'name': 'Rock', 'age': 31, 'email': 'gmail.com'},
    'sean': {'name': 'sean', 'age': 31, 'email': 'gmail.com'},
  },
); // multiple
```
### **Create or Update Items**
```dart
NetworkStorage.createOrUpdate(
  collectionName: 'users-collection',
  key: 'sean',
  value: {'age': 34, 'email': 't@email.com'},
); // single

await NetworkStorage.createOrUpdateMany(
  collectionName: 'users-collection',
  values: {
    'dave': {'name': 'Dave', 'age': 38, 'email': 'gmail.com'},
    'sina': {'name': 'Sina', 'age': 32, 'email': 'gmail.com'},
    'rock': {'name': 'Rock', 'age': 32, 'email': 'gmail.com'},
    'sean': {'name': 'Sean'},
  },
); // multiple
```

### **Delete Items**

```dart
await NetworkStorage.delete(collectionName: 'users-collection', key: 'sean'); // single

await NetworkStorage.deleteMany(
  collectionName: 'users-collection',
  keys: ['dave', 'sean', 'sina'],
); // multiple

await NetworkStorage.deleteAll(collectionName: 'users-collection'); // all
```

::alert{type="info" class="flex flex-col items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert"}
No need to provide `coillectionName` if you want to use the default local storage `vaah-flutter-collection`.
::
