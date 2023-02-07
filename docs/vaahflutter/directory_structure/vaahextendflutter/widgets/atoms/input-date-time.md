# Date and Time input

<img height="400" :src="$withBase('/images/flutter/atom-widgets/datetime.gif')" alt="datetime">

[[toc]]

## How to use?

`label` is mandatory property.

Use `isEnabled` to enable/ disable field.
```dart{3}
const DateTimeInput(
    label: 'Choose Date',
    isEnabled: false,
),
```

Use `size` to change size of field. valid values are: `enum InputSize { extraSmall, small, medium, large, extraLarge }`
```dart{3}
const DateTimeInput(
    label: 'Choose Date',
    size: InputSize.large,
),
```

Use `iconBackgroundColor` and `iconColor` to icon appearence.

```dart{3}
const DateTimeInput(
    label: 'Choose Date',
    iconBackgroundColor: Colors.pink,
    iconColor: Colors.white,
),
```

Use `callback` to get selected value.

```dart{3-5}
DateTimeInput(
    label: 'Choose Date',
    callback: (value) {
        print(value);
    },
),
```

use `validator` and `autoValidateMode` to validate values.

```dart{3-7}
DateTimeInput(
    label: 'Validator',
    validator: (value) {
        if (value!.isEmpty) return 'Invalid Value';
        return null;
    },
    autoValidateMode: AutovalidateMode.always,
),
```

We majory have three kind of datetime inputs: `Date Only`, `Time Only`, and `Date & Time Only`

### Date Only

```dart{3}
DateTimeInput(
    label: 'Choose Date',
    pickerType: PickerType.dateOnly,
    callback: (date) {
        if (date is DateTime) Console.danger(date.toString());
    },
),
```

### Time Only

```dart{3}
DateTimeInput(
    label: 'Choose Time',
    pickerType: PickerType.timeOnly,
    callback: (time) {
        if (time is TimeOfDay) Console.danger(time.toString());
    },
),
```

### Date and Time Both

```dart{3}
DateTimeInput(
    label: 'Choose Date And Time',
    pickerType: PickerType.dateAndTime,
    callback: (datetime) {
        if (datetime is DateTime) Console.danger(datetime.toString());
    },
),
```