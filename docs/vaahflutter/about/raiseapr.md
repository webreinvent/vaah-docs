# Raise a PR

[[toc]]

## How to raise a PR?

1. Check if the issue has been raised already on GitHub and if someone has picked it up already or not? Try searching closed issues also.

2. Fork the repo from latest develop branch

3. Perform the changes.

4. Do the manual and automated testing for different platforms, OS versions and different size devices.

5. Check the naming conventions.

6. Raise a PR.

## Format
```markdown
## Overview

- [ ] I have performed a self-review of my code
- [ ] New and existing tests pass locally with my changes
- [ ] The code modified as part of this PR has been covered with tests

### Problem statement
<!-- Problem description -->

### Solution
<!-- Solution description -->

### Dependencies
<!-- dependencies you added/ modified -->

### Links
<!-- links related to issue, videos, screenshot, etc. -->
```

### Output
<img :src="$withBase('/images/flutter/getting-started/pr.png')" alt="Output">

### Overview
Developer should tick the relevant boxes for PR they're raising. To tick a box? put `[x]` instead of `[ ]`.

```markdown
## Overview

- [x] I have performed a self-review of my code
- [ ] New and existing tests pass locally with my changes
- [ ] The code modified as part of this PR has been covered with tests
```

### Problem statement
Write down the issue description after `<!-- Problem description -->` comment.

```markdown
### Problem statement
<!-- Problem description -->
This is the issue description.
```

### Solution
Write your suggetion after `<!-- Solution description -->` comment.

```markdown
### Solution
<!-- Solution description -->
I suggest changing xyz.
```

### Dependencies
Write dependencies you added/ modified, after `<!-- dependencies you added/ modified -->` comment.

```markdown
### Dependencies
<!-- dependencies you added/ modified -->
xyz: 1.0.0
```

### Links
Attach links after <!-- links related to issue, videos, screenshot, etc. --> comment.

```markdown
### Links
<!-- links related to issue, videos, screenshot, etc. -->
[link](https://webreinvent.com)
```