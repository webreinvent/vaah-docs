# AutoComplete

<img height=400 :src="$withBase('/images/flutter/atom-widgets/auto-complete.gif')" alt="auto_complete">

[[toc]]

## How to use?

Assign the lable you wanna show and pass the array from which user can choose one value.

```dart
AutoCompleteInput(
    label: 'Select Continent',
    hints: const [
        'Asia',
        'Africa',
        'North America',
        'South America',
        'Antarctica',
        'Europe',
        'Australia',
    ],
),
```

use formattor to parse specific kind of values only

```dart{12-14}
AutoCompleteInput(
    label: 'Select Continent',
    hints: const [
        'Asia',
        'Africa',
        'North America',
        'South America',
        'Antarctica',
        'Europe',
        'Australia',
    ],
    inputFormatters: [
        FilteringTextInputFormatter.allow(RegExp('[a-zA-Z ]')),
    ],
),
```

Use padding, borderRadius, isEnabled, size, iconBackgroundColor, iconColor to change field visually.

```dart{12-16}
AutoCompleteInput(
    label: 'Select Continent',
    hints: const [
        'Asia',
        'Africa',
        'North America',
        'South America',
        'Antarctica',
        'Europe',
        'Australia',
    ],
    padding: allPadding16,
    borderRadius: 16,
    isEnabled: false,
    iconBackgroundColor: Colors.pink,
    iconColor: Colors.white,
),
```

Use onSelected to perform action when user selects input. TODO: pass the controller value back.

```dart{14-16}
const continents = [
    'Asia',
    'Africa',
    'North America',
    'South America',
    'Antarctica',
    'Europe',
    'Australia',
];

const AutoCompleteInput(
    label: 'Select Continent',
    hints: continents,
    onSelected: (value) {
        print(value);
    },
),
```