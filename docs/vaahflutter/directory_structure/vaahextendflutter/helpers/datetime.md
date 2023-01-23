# DateTime Helpers

::: warning Dependencies
`dart:math` and [`package:intl/intl.dart`](https://pub.dev/packages/intl)
:::

[[toc]]

This file contains all the common Date and Time helpers which can be used in the app.

## Extension On TimeOfDay

Get TimeOfDay in  HH:MM AM/PM format

```dart
final TimeOfDay time = TimeOfDay.now();
print(time.toHMaa);
```

date time helper contains toHMaa getter on the extension so it translates to the wanted result.

## Extension On DateTime

##### Get DateTime with zero milliseconds and microsecond

```dart
final DateTime date = DateTime.now();
print(date.resetMillisecond);
```

##### Get DateTime for n days before provided DateTime

```dart
final DateTime date = DateTime.now();
print(date.daysBefore(2));
```

##### Get DateTime for n days after provided DateTime

```dart
final DateTime date = DateTime.now();
print(date.daysAfter(2));
```

##### Get DateTime for the next day start

```dart
final DateTime date = DateTime.now();
print(date.nextDayStart);
```

returns `xxxx-xx-xx 00:00:00.000`

##### Get Date only (time is set to zero) (if DateTime type is UTC then return UTC otherwise return local)

```dart
final DateTime date = DateTime.now();
print(date.onlyDate);
```

returns year, month, date

##### Get Month only (time is set to zero and date is set to first) (if DateTime type is UTC then return UTC otherwise return local)

```dart
final DateTime date = DateTime.now();
print(date.onlyMonth);
```

returns `xxxx-xx-01 00:00:00.000`

##### Get Time only

```dart
final DateTime date = DateTime.now();
print(date.onlytime(01, 15));
```

can pass optional arguments hours and minutes, the first argument will be hour always.
returns (epoch date + time) `1970-01-01 xx:xx:00.000z`

##### Get UTC Time First Day Since Epoch

```dart
final DateTime date = DateTime.now();
print(date.utcTimeFirstDaySinceEpoch);
```

returns (epoch date + time with milli and micro secs) `1970-01-01 xx:xx:xx.xxxz`

##### Get UTC DateTime

```dart
final DateTime date = DateTime.now();
print(date.asUtc);
```

##### Get Local DateTime

```dart
final DateTime date = DateTime.now();
print(date.asLocal);
```

##### Get MMM DD HH:MM AM/PM formatted string

```dart
final DateTime date = DateTime.now();
print(date.toDateTimeString);
```

##### Get EEEE Month DD HH:MM AM/PM formatted string

```dart
final DateTime date = DateTime.now();
print(date.toFullDateTimeString);
```

##### Get EEE Month DD formated string

```dart
final DateTime date = DateTime.now();
print(date.toFullDateString);
```

##### Get HH:MM AM/PM formatted string

```dart
final DateTime date = DateTime.now();
print(date.toHMaa);
```

##### Get HH:MM:SS AM/PM formatted string

```dart
final DateTime date = DateTime.now();
print(date.toHHMMSS);
```

##### Get  Month(short) Date formated string

```dart
final DateTime date = DateTime.now();
print(date.toMMMMdd);
```

##### Get Year-Month(short)-Date formated string

```dart
final DateTime date = DateTime.now();
print(date.toYyyymmmdd);
```

##### Get Date of Birth (YYYY-MM-DD) formatted string

```dart
final DateTime date = DateTime.now();
print(date.toDateOfBirth);
```

## Extension On String

##### From String to DateTime

```dart
final DateTime date = '2023-01-01 00:00:00'.toDateTime();
```

you can pass a valid pattern in toDateTime function to convert the string from that format, default pattern is 'yyyy-mm-dd hh:mm:ss'

##### Add zeros as a prefix to equalize the length

```dart
const String number = '100';
print(number.zeroPrefix(6));
```

##### Parse string to int and double

```dart
const String number = '100';
final int? numInt = number.parseInt;
final double? numDouble = number.parseDouble;
```

## Extension on Duration

##### Get formatted String

```dart
const Duration dur = Duration(days:3, hours: 20, minutes: 10);
print(dur.format);
```

will give output HH:MM:SS

##### Get HH:MM:SS formatted String

```dart
const Duration dur = Duration(days:3, hours: 20, minutes: 10);
print(dur.toHms);
```

will give output HH:MM:SS (Two Digit Hours, Two Digit Minutes, Two Digit Seconds)

##### Get MM:SS formatted String

```dart
const Duration dur = Duration(days:3, hours: 20, minutes: 10);
print(dur.toMs);
```

will give output MM:SS (Two Digit Minutes, Two Digit Seconds)

## Extension on int

##### Get Local and UTC time from Milliseconds Since Epoch

```dart
final int millisecondsSinceEpoch = DateTime.now().millisecondsSinceEpoch;
print(millisecondsSinceEpoch.localDateTime);
print(millisecondsSinceEpoch.utcDateTime);
```

##### Get DateTime from Milliseconds Since Epoch

```dart
final int millisecondsSinceEpoch = DateTime.now().millisecondsSinceEpoch;
final DateTime date = millisecondsSinceEpoch.asDateTime(from: TimeZone.local);
```

The argument is optional.

##### Get DateTime from Milliseconds Since Epoch

```dart
final int millisecondsSinceEpoch = DateTime.now().millisecondsSinceEpoch;
final DateTime date = millisecondsSinceEpoch.asDateTime(from: TimeZone.local);
```

The `from` argument is optional.

## Source code for datetime.dart

```dart
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

enum TimeZone { utc, local }

extension TimeOfDayExtension on TimeOfDay {
  // HH:MM AM
  String get toHMaa => DateFormat('hh:mm aaaa').format(DateTime(0, 0, 0, hour, minute));
}

// Extension for DateTime
extension DateTimeExtension on DateTime {
  String toTime(BuildContext context) => TimeOfDay.fromDateTime(asLocal).format(context);

  // Return DateTime with zero millisecond and microsecond
  DateTime get resetMillisecond => DateTime(year, month, day, hour, minute, second);

  DateTime daysBefore(int days) => subtract(Duration(days: days));

  DateTime daysAfter(int days) => add(Duration(days: days));

  DateTime get nextDayStart => onlyDate.daysAfter(1);

  DateTime get localTimeToday {
    DateTime now = DateTime.now();
    return DateTime(
      now.year,
      now.month,
      now.day,
      hour,
      minute,
      second,
      millisecond,
      microsecond,
    );
  }

  DateTime get onlyDate => isUtc ? DateTime.utc(year, month, day) : DateTime(year, month, day);

  DateTime get onlyMonth => isUtc ? DateTime.utc(year, month) : DateTime(year, month);

  DateTime onlyTime([int? hourArg, int? minuteArg]) =>
      DateTime.utc(1970, 1, 1, hourArg ?? hour, minuteArg ?? minute, 0, 0, 0);

  DateTime get utcTimeFirstDaySinceEpoch =>
      DateTime.utc(1970, 1, 1, hour, minute, second, millisecond, microsecond);

  // Convert local time as current utc
  // DateTime.now() = 2021-01-25 18:49:03.049422
  // DateTime.asUtc() = 2021-01-25 18:49:03.049422
  // DateTime.toUtc() = 2021-01-25 11:49:03.056208Z
  DateTime get asUtc =>
      isUtc ? this : DateTime.utc(year, month, day, hour, minute, second, millisecond, microsecond);

  DateTime get asLocal =>
      !isUtc ? this : DateTime(year, month, day, hour, minute, second, millisecond, microsecond);

  // Convert DateTime to String
  // Month(short) DD HH:MM AM/PM
  String get toDateTimeString => DateFormat('MMM dd h:mm a').format(this);

  // Day, Month DD HH:MM am/pm
  String get toFullDateTimeString => DateFormat('EEEE, MMMM dd h:mm a').format(this);

  // Day, Month DD am/pm
  String get toFullDateString => DateFormat('EEE, yyyy MMMM dd').format(this);

  // HH:MM am/pm
  String get toHMaa => DateFormat('hh:mm aaaa').format(this);

  // HH:MM:SS am/pm
  String get toHHMMSS => DateFormat('hh:mm:ss a').format(this);

  // Month DD
  String get toMMMMdd => DateFormat('MMMM dd').format(this);

  // Month(short) DD
  String get toMMMdd => DateFormat('MMM dd').format(this);

  // YYYY-MM-DD
  String get toYyyymmmdd => DateFormat('yyyy-MMM-dd').format(this);

  // YYYY-MM-DD
  String get toDateOfBirth => DateFormat('yyyy-MM-dd').format(this);

  // To query format: YYYY-MM-DD
  String get toQueryFormat => DateFormat('yyyy-MM-dd').format(this);
}

// Extension for DateTime from String
extension DateTimeStringExtendsion on String {
  // Convert to DateTime by pattern
  // https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
  DateTime toDateTime({String pattern = 'yyyy-MM-dd HH:mm:ss'}) {
    return DateFormat(pattern).parse(this, true).toLocal();
  }

  String get safe => this;

  String zeroPrefix(int count) {
    if (length >= count) {
      return this;
    } else {
      String builder = '';
      for (int i = 0; i < count - length; i++) {
        builder += '0';
      }
      builder += this;
      return builder;
    }
  }

  int? get parseInt => int.tryParse(this);

  double? get parseDouble => double.tryParse(this);
}

// Extension for duration
extension DurationExtension on Duration {
  Duration get safe => this;

  String get format => toString().split('.').first.padLeft(8, '0');

  // Add zero padding
  String _twoDigits(int n) {
    if (n >= 10) {
      return '$n';
    }
    return '0${max(n, 0)}';
  }

  // hours:minutes:seconds
  String get toHms {
    final String twoDigitHours = _twoDigits(inHours.remainder(24));
    final String twoDigitMinutes = _twoDigits(inMinutes.remainder(60));
    final String twoDigitSeconds = _twoDigits(inSeconds.remainder(60));
    return '$twoDigitHours:$twoDigitMinutes:$twoDigitSeconds';
  }

  // minutes:seconds
  String get toMs {
    final String twoDigitMinutes = _twoDigits(inMinutes.remainder(60));
    final String twoDigitSeconds = _twoDigits(inSeconds.remainder(60));
    return '$twoDigitMinutes:$twoDigitSeconds';
  }
}

// Extension for int
extension DateExtensions on int {
  DateTime get localDateTime => DateTime.fromMillisecondsSinceEpoch(this, isUtc: false);

  DateTime get utcDateTime => DateTime.fromMillisecondsSinceEpoch(this, isUtc: true);

  DateTime asDateTime({TimeZone from = TimeZone.utc}) {
    switch (from) {
      case TimeZone.local:
        return localDateTime;
      case TimeZone.utc:
      default:
        return utcDateTime;
    }
  }

  DateTime asLocal({TimeZone from = TimeZone.utc}) => asDateTime(from: from).asLocal;

  String toTime(BuildContext context, {TimeZone from = TimeZone.utc}) =>
      asDateTime(from: from).toTime(context);

  int localTimeToday({TimeZone from = TimeZone.utc}) =>
      asDateTime(from: from).localTimeToday.millisecondsSinceEpoch;

  int onlyDate({TimeZone from = TimeZone.utc}) =>
      asDateTime(from: from).onlyDate.millisecondsSinceEpoch;

  int onlyTime({TimeZone from = TimeZone.utc}) =>
      asDateTime(from: from).utcTimeFirstDaySinceEpoch.millisecondsSinceEpoch;

  int utcTimeFirstDaySinceEpoch({TimeZone from = TimeZone.utc}) =>
      asDateTime(from: from).utcTimeFirstDaySinceEpoch.millisecondsSinceEpoch;

  Duration asDuration() => Duration(milliseconds: this);
}
```
