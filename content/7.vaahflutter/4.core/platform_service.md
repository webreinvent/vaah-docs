---
title: Platform Service
description: Platform Service in vaah flutter is a simplified version of the Platform Channels in flutter framework.
---

## Overview
The platform service is used to establish a communication channel between the Flutter side and the native side of the application. 

It is built on top of the Flutter framework's platform channel. You can view the official documentation [here](https://docs.flutter.dev/platform-integration/platform-channels). 

## Platform Service Class 
The PlatformService class is an abstract class that provides static methods to interact with platform-specific services. Go to [usage guide]().

### Methods
| Name                           | Return Type      | Arguments                                            | Description                                                                                           |
|--------------------------------|------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `invokeMethod`                 | `Future<T?>`     | `String method`, `[dynamic arguments]`              | Invokes a method on the native side with an optional set of arguments, returning a future that completes with the result.   |
| `getEventStream`               | `Stream<dynamic>`| `String eventChannelName`, `[dynamic arguments]`    | Establishes a stream to receive events from the native side, with an optional set of arguments.                           |
