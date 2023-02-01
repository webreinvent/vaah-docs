# Tabs

<img height=175 :src="$withBase('/images/flutter/atom-widgets/tabs.gif')" alt="tabs">

[[toc]]

## How to use?

Use `TabOptions` to show tabs section. You need to pass `tabs` parameter to have `desired tabs` in `TabOptions` class. `tabs` is of type `List<TabOption>`.

TabOption has two properties one `name` which will be displayed as title and other is `tab` which will holds the content to display when tab is selected.

```dart
TabOption(
    name: 'Hello',
    tab: Text('Hello (Tab)'),
),
```

`TabOptions` to show different tabs.
```dart
const TabOptions(
    tabs: [
        TabOption(
            name: 'Hello',
            tab: Text('Hello (Tab)'),
        ),
        TabOption(
            name: 'World!',
            tab: Text('World! (Tab)'),
        ),
    ],
),
```

## Source code:

```dart
import 'package:flutter/cupertino.dart';
import 'package:team/vaahextendflutter/helpers/constants.dart';
import 'package:team/views/pages/ui/components/section_title_selector.dart';

class TabOption {
  final String name;
  final Widget tab;

  const TabOption({
    required this.name,
    required this.tab,
  });
}

class TabOptions extends StatefulWidget {
  const TabOptions({
    Key? key,
    required this.tabs,
  }) : super(key: key);

  final List<TabOption> tabs;

  @override
  State<TabOptions> createState() => _TabOptionsState();
}

class _TabOptionsState extends State<TabOptions> {
  bool hasError = false;

  @override
  void initState() {
    if (widget.tabs.isEmpty) {
      hasError = true;
    }
    super.initState();
  }

  int _selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return hasError
        ? const Text('Something went wrong!')
        : Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Wrap(
                crossAxisAlignment: WrapCrossAlignment.end,
                children: [
                  for (int i = 0; i < widget.tabs.length; i++) ...[
                    sectionTitleSelector(
                      title: widget.tabs[i].name,
                      condition: _selectedIndex == i,
                      callback: () {
                        setState(() {
                          _selectedIndex = i;
                        });
                      },
                    ),
                    verticalMargin12,
                    horizontalMargin12,
                  ],
                ],
              ),
              verticalMargin24,
              widget.tabs[_selectedIndex].tab,
              verticalMargin24,
            ],
          );
  }
}
```