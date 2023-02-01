# DateTime Helpers

::: warning Dependencies
`dart:math` and [`package:intl/intl.dart`](https://pub.dev/packages/intl)
:::

[[toc]]

This file contains all the common Date and Time helpers which can be used in the app.

## Extension On TimeOfDay

Get TimeOfDay in  HH:MM AM/PM format. DateTime extension contains toHMaa getter on the extension so it translates DateTime to HH:MM AM/PM.

```dart
final TimeOfDay time = TimeOfDay.now();
print(time.toHMaa);
```

```dart
String formatExt({String format = 'hh:mm a'}) =>
    DateFormat(format).format(DateTime(0, 0, 0, hour, minute));
```

## Extension On DateTime

### Timezone Related

::: tip Note:
In database developer should save DateTime in UTC if possible. And Developer will have to be carefull when working with Timezone.
:::

We have offset with respect to UTC time so we can change timezone with respect to UTC only. We will walk you through few use cases and how they should be handled.

Example of valid Timezones: `Asia/Kolkata`, `ASIA/KOLKATA`, `asia/kolkata`, Also check list of available timezones [here](https://gist.github.com/we-prajapati-c001/e67c763b0fb1f81c914092eedcfe0bbe)

#### Usecase: We receive UTC time from database and we want to change it for specific timezone.

```dart
DateTime? date = DateTimeHelper.toTimezone('Asia/Kolkata', dateString);
```

#### Usecase: We have DateTime for specific timezone and we want to change it to UTC.

let's assume we have two properties in our model, one `datekey` and other `timezonekey`. And for some reason when we use date we don't want to use it as UTC.

```dart
DateTime? date = DateTimeHelper.fromTimezone(timezonekey, datekey);
```

#### Usecase: We have to change DateTime from one timezone (known priorly) to another timezone.

Let's say I have my DateTime according to `ABC` timezone and I want to change it to `LMN` timezone then First I'll have to convert `ABC` to `UTC` and then we can convert that `UTC` to `LMN`. But why do we have to go back to UTC when we want to change from one timezone to another timezone? Because we have time offsets respected to UTC.

let's assume we have two properties in our model, one `datekey` and other `timezonekey`. And `newtimezone` holds new timezone value.

```dart
DateTime? date = DateTimeHelper.fromTimezone(timezonekey, datekey)?.toTimezone(newtimezone);
```

#### Usecase: We have to change DateTime from one timezone (not known priorly) to another timezone.

for reference in below explaination:
| **Region** | **DateTime** |
| --- | --- |
| EST | 2023-01-01 00:00:00 am |
| IST | 2023-01-01 10:30:00 am |

Now why can't we convert DateTime from one timezone (not known priorly) to another timezone. e.g. let's try to convert EST (unknown) DateTime to IST DateTime. Date property from database looks something like: `2023-01-01 00:00:00` now we parse it in flutter, flutter gives us DateTime object as local. If I live in India it will give me DateTime object with same properties of `2023-01-01 00:00:00` and not with properties of `2023-01-01 10:30:00`. Which is not correct. You can try everything/ available extension methods but you won't get correct results to show if you don't know the timezone.

::: danger Note
When we change timezone the DateTime, it will be converted to UTC. In Flutter we don't have `setter` for `timeZoneName` property on DateTime, so we don't know from which timzeone DateTime has and if we don't know that we can't convert that time to UTC automatically in our extension, because for every timezone offsets are different, And as we have said We can change timezone with respect to UTC. That's why if you want to remeber timezone, you have to maintain a separate property.
:::

#### DateTimeHelper

##### fromTimezone method: This method from DateTimeHelper class returns UTC datetime. `timezone` and `datetime` parameters are mendatory to pass, you can pass daylight true if the `datetime` is calculated depending on daylight, you can pass custom `pattern` if you're saving datetime in custom format.

```dart
static DateTime? fromTimezone(
  String timezone,
  String datetime, {
  String pattern = 'yyyy-MM-dd hh:mm:ss',
  bool daylight = false,
}) {
  // Will return UTC DateTime
  return DateFormat(pattern).parse(datetime, true).fromTimezone(timezone, daylight: daylight);
}

// Call
DateTime? datetime = DateTimeHelper.fromTimezone(
  'etc/gmt',
  '2023-01-01',
  pattern: 'yyyy-MM-dd',
);
```

##### toTimezone method: this method will give desired timezone datetime from UTC. You can pass daylight true if you want the results depending on daylight, you can pass custom `pattern` if you're saving datetime in custom format.

```dart
static DateTime? toTimezone(
  String timezone,
  String datetime, {
  String pattern = 'yyyy-MM-dd hh:mm:ss',
  bool daylight = false,
}) {
  return DateFormat(pattern).parse(datetime, true).toTimezone(timezone, daylight: daylight);
}

DateTime? datetime = DateTimeHelper.toTimezone(
  'Asia/Kolkata',
  '2023-01-01 10:30:00.000Z',
  pattern: 'yyyy-MM-dd hh:mm:ss.000Z',
);
```

### Other DateTime Extensions

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

##### Get Client DateTime

```dart
final DateTime date = DateTime.now();
print(date.asClient);
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

##### Get Month(short) Date formated string

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

##### Get Custom formatted string

by default format will be : 'yyyy MMM dd, h:mm a'

`mm` will be used for Minutes and `MM`, `MMM`, `MMMM` will be used for Month.

```dart
DateTime date = DateTime.now();
Console.danger(date.format(format: 'yyyy-MM-dd'));
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
