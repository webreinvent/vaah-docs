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

2. Configure the storage type in any of the environment configuration files you want to use.

For example `assets/env/develop.json`

```json
"network_storage_type": "firebase"
```

3. In `main.dart` provide the `firebaseOptions` as shown:

```dart
await baseController.init(
  firebaseOptions: DefaultFirebaseOptions.currentPlatform, // provide default firebase options here 
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

2. Configure the storage type in any of the environment configuration files you want to use.

For example `assets/env/develop.json`

```json
"network_storage_type": "supabase",
"supabase_config": {
  "url": "YOUR URL",
  "anon_key": "YOUR ANON KEY"
},
```
You can find the anon key and url [here](https://supabase.com/dashboard/project/your-project-id/settings/api), or go to your project settings in supabase.

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
No need to provide `coillectionName` if you want to use the default collection in firebase or default table in supabase `vaah-flutter-collection`.
::

## Source Code

### NetworkStorageService Class (Base Class)

```dart 
abstract class NetworkStorageService {
  Future<void> create(
      {required String collectionName, required String key, required Map<String, dynamic> value});

  Future<void> createMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  });

  Future<Map<String, dynamic>?> read({required String collectionName, required String key});

  Future<Map<String, Map<String, dynamic>?>> readMany({
    required String collectionName,
    required List<String> keys,
  });

  Future<Map<String, Map<String, dynamic>?>> readAll({required String collectionName});

  Future<void> update({
    required String collectionName,
    required String key,
    required Map<String, dynamic> value,
  });

  Future<void> updateMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  });

  Future<void> createOrUpdate({
    required String collectionName,
    required String key,
    required Map<String, dynamic> value,
  });

  Future<void> createOrUpdateMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  });

  Future<void> delete({required String collectionName, required String key});

  Future<void> deleteMany({required String collectionName, required List<String> keys});

  Future<void> deleteAll({required String collectionName});
}
```

### NetworkStorageWithFirestore Class
This class implements the NetworkStorageSerivce interface using Firebase Firestore as the storage backend.

```dart
import 'package:cloud_firestore/cloud_firestore.dart';

import 'base_service.dart';

class NetworkStorageWithFirestore implements NetworkStorageService {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  @override
  Future<void> create({
    required String collectionName,
    required String key,
    required Map<String, dynamic> value,
  }) async {
    return _firestore.runTransaction((transaction) async {
      final DocumentReference documentReference = _firestore.doc('$collectionName/$key');
      final DocumentSnapshot documentSnapshot = await transaction.get(documentReference);
      if (!documentSnapshot.exists) {
        transaction.set(documentReference, value);
      } else {
        throw ('Document with ID "$key" already exists.');
      }
    }).catchError((e) {
      throw (e.toString());
    });
  }

  @override
  Future<void> createMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  }) async {
    return _firestore.runTransaction((transaction) async {
      bool allDocumentsNew = true;

      for (String docId in values.keys) {
        final DocumentReference documentReference =
            _firestore.collection(collectionName).doc(docId);
        final DocumentSnapshot documentSnapshot = await transaction.get(documentReference);

        if (documentSnapshot.exists) {
          allDocumentsNew = false;
          throw ('Document with ID "$docId" already exists.');
        }
      }

      if (allDocumentsNew) {
        for (String docId in values.keys) {
          DocumentReference documentReference = _firestore.collection(collectionName).doc(docId);
          transaction.set(documentReference, values[docId]!);
        }
      } else {
        throw ('One or more documents already exist. Aborting transaction.');
      }
    }).catchError((e) {
      throw (e.toString());
    });
  }

  @override
  Future<Map<String, dynamic>?> read({
    required String collectionName,
    required String key,
  }) async {
    try {
      final DocumentSnapshot<Map<String, dynamic>> documentSnapshot =
          await _firestore.doc('$collectionName/$key').get();
      return documentSnapshot.data();
    } catch (e) {
      throw (e.toString());
    }
  }

  @override
  Future<Map<String, Map<String, dynamic>?>> readMany({
    required String collectionName,
    required List<String> keys,
  }) async {
    final Map<String, Map<String, dynamic>?> values = {};
    for (int i = 0; i < keys.length; i++) {
      values[keys[i]] = await read(collectionName: collectionName, key: keys[i]);
    }
    return values;
  }

  @override
  Future<Map<String, Map<String, dynamic>?>> readAll({required String collectionName}) async {
    try {
      final querySnapshot = await _firestore.collection(collectionName).get();
      final Map<String, Map<String, dynamic>?> result = Map.fromEntries(
        querySnapshot.docs.map(
          (entry) => MapEntry(entry.id, entry.data()),
        ),
      );
      return result;
    } catch (e) {
      throw (e.toString());
    }
  }

  @override
  Future<void> update({
    required String collectionName,
    required String key,
    required Map<String, dynamic> value,
  }) async {
    try {
      await _firestore.doc('$collectionName/$key').update(value);
    } on FirebaseException catch (e) {
      if (e.code == 'not-found') {
        throw FirebaseException(
          plugin: e.plugin,
          stackTrace: e.stackTrace,
          code: e.code,
          message: 'Update Failed: Document with ID "$key" does not exists. ${e.message}',
        );
      }
      throw ('Update Failed: ${e.toString()}');
    } catch (e) {
      throw ('Something went wrong: ${e.toString()}');
    }
  }

  @override
  Future<void> updateMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  }) async {
    try {
      final WriteBatch batch = _firestore.batch();
      values.forEach((key, value) async {
        final DocumentReference<Map<String, dynamic>> ref = _firestore.doc('$collectionName/$key');
        batch.update(ref, value);
      });
      await batch.commit();
    } on FirebaseException catch (e) {
      if (e.code == 'not-found') {
        throw FirebaseException(
          plugin: e.plugin,
          stackTrace: e.stackTrace,
          code: e.code,
          message: 'Update Failed: ${e.message}',
        );
      }
      throw ('Update Failed: ${e.toString()}');
    } catch (e) {
      throw ('Something went wrong: ${e.toString()}');
    }
  }

  @override
  Future<void> createOrUpdate({
    required String collectionName,
    required String key,
    required Map<String, dynamic> value,
  }) async {
    try {
      await _firestore.doc('$collectionName/$key').set(value, SetOptions(merge: true));
    } catch (e) {
      throw (e.toString());
    }
  }

  @override
  Future<void> createOrUpdateMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  }) async {
    try {
      final WriteBatch batch = _firestore.batch();
      values.forEach((key, value) async {
        final DocumentReference<Map<String, dynamic>> ref = _firestore.doc('$collectionName/$key');
        batch.set(ref, value, SetOptions(merge: true));
      });

      await batch.commit();
    } catch (e) {
      throw ('Batch write failed: $e');
    }
  }

  @override
  Future<void> delete({required String collectionName, required String key}) async {
    try {
      await _firestore.doc('$collectionName/$key').delete();
    } catch (e) {
      throw (e.toString());
    }
  }

  @override
  Future<void> deleteMany({required String collectionName, required List<String> keys}) async {
    try {
      final WriteBatch batch = _firestore.batch();
      for (int i = 0; i < keys.length; i++) {
        final DocumentReference<Map<String, dynamic>> ref =
            _firestore.doc('$collectionName/${keys[i]}');
        batch.delete(ref);
      }

      await batch.commit();
    } catch (e) {
      throw ('Delete failed: $e');
    }
  }

  @override
  Future<void> deleteAll({required collectionName}) async {
    try {
      final WriteBatch batch = _firestore.batch();
      final QuerySnapshot querySnapshot = await _firestore.collection(collectionName).get();
      for (DocumentSnapshot doc in querySnapshot.docs) {
        batch.delete(doc.reference);
      }
      batch.commit();
    } catch (e) {
      throw (e.toString());
    }
  }
}

```

### NetworkStorageWithSupabase Class

This class implements the NetworkStorageService interface using Supabase as the storage backend.

```dart
import 'package:supabase_flutter/supabase_flutter.dart';

import 'base_service.dart';

class NetworkStorageWithSupabase implements NetworkStorageService {
  final SupabaseClient _supabase = Supabase.instance.client;

  @override
  Future<void> create({
    required String collectionName,
    required String key,
    required Map<String, dynamic> value,
  }) async {
    try {
      // add [key] as primary key
      value['key'] = key;
      await _supabase.from(collectionName).insert(value);
    } on PostgrestException catch (e) {
      // the code '23505 is for error while inserting existing row.
      if (e.code == '23505') {
        throw ('Row with provide key "$key" already exist: ${e.message}');
      } else {
        rethrow;
      }
    } catch (_) {
      rethrow;
    }
  }

  @override
  Future<void> createMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  }) async {
    try {
      List<Map<String, dynamic>> valuesMapToList = [];
      values.forEach((key, value) {
        final Map<String, dynamic> entry = Map<String, dynamic>.from(value);
        entry['key'] = key;
        valuesMapToList.add(entry);
      });
      await _supabase.from(collectionName).insert(valuesMapToList);
    } on PostgrestException catch (e) {
      // the code '23505 is for error while inserting existing row.
      if (e.code == '23505') {
        throw ('One or more rows with provide keys(foreign) already exist: ${e.message}');
      } else {
        rethrow;
      }
    } catch (_) {
      rethrow;
    }
  }

  @override
  Future<Map<String, dynamic>?> read({required String collectionName, required String key}) async {
    try {
      final data = await _supabase.from(collectionName).select().eq('key', key).single();
      data.remove('key');
      return data;
    } on PostgrestException catch (e) {
      // the code 'PGRST116' is for error while reading not-existent row.
      if (e.code == 'PGRST116') {
        return null;
      } else {
        rethrow;
      }
    } catch (_) {
      rethrow;
    }
  }

  @override
  Future<Map<String, Map<String, dynamic>?>> readMany({
    required String collectionName,
    required List<String> keys,
  }) async {
    final Map<String, Map<String, dynamic>?> values = {};
    for (int i = 0; i < keys.length; i++) {
      values[keys[i]] = await read(collectionName: collectionName, key: keys[i]);
    }
    return values;
  }

  @override
  Future<Map<String, Map<String, dynamic>?>> readAll({required String collectionName}) async {
    try {
      final List<Map<String, dynamic>> listResult = await _supabase.from(collectionName).select();
      final Map<String, Map<String, dynamic>> values = {};
      for (Map<String, dynamic> entry in listResult) {
        final String key = entry['key'];
        Map<String, dynamic> value = Map<String, dynamic>.from(entry);
        value.remove('key');
        values[key] = value;
      }
      return values;
    } catch (_) {
      rethrow;
    }
  }

  @override
  Future<void> update({
    required String collectionName,
    required String key,
    required Map<String, dynamic> value,
  }) async {
    try {
      final PostgrestResponse response = await _supabase
          .from(collectionName)
          .update(value)
          .eq('key', key)
          .count(CountOption.exact);
      // response.count == 0 means no row was returned that matches the specified key (rowId).
      if (response.count == 0) {
        throw ('Update Failed: The row "$key" does not exists.');
      }
    } catch (_) {
      rethrow;
    }
  }

  @override
  Future<void> updateMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  }) async {
    values.forEach((key, value) async {
      await update(collectionName: collectionName, key: key, value: value);
    });
  }

  @override
  Future<void> createOrUpdate({
    required String collectionName,
    required String key,
    required Map<String, dynamic> value,
  }) async {
    try {
      // add [key] as primary key.
      value['key'] = key;

      await _supabase.from(collectionName).upsert(value);
    } catch (_) {
      rethrow;
    }
  }

  @override
  Future<void> createOrUpdateMany({
    required String collectionName,
    required Map<String, Map<String, dynamic>> values,
  }) async {
    values.forEach((key, value) async {
      await createOrUpdate(collectionName: collectionName, key: key, value: value);
    });
  }

  @override
  Future<void> delete({required String collectionName, required String key}) async {
    try {
      await _supabase.from(collectionName).delete().eq('key', key);
    } catch (_) {
      rethrow;
    }
  }

  @override
  Future<void> deleteMany({required String collectionName, required List<String> keys}) async {
    try {
      await _supabase.from(collectionName).delete().inFilter('key', keys);
    } catch (_) {
      rethrow;
    }
  }

  @override
  Future<void> deleteAll({required String collectionName}) async {
    try {
      // assuming no row have key = ''
      await _supabase.from(collectionName).delete().neq('key', '');
    } catch (_) {
      rethrow;
    }
  }
}

```