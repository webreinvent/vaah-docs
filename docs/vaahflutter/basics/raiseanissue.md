# Raise an issue

[[toc]]

## How to raise an issue?

1. Check if the issue has been raised already on GitHub? Try searching closed issues also.

2. Try to reproduce it again. Specify, if you've tried `flutter clean`, `clean install`, `version bumps`, `etc`.

3. Try to record/ take snapshot of the issue and attach it.

4. Attach the debug log.

5. Provide steps to Reproduce.

6. If possible provide `minimal code sample` to reproduce the error.

7. If possible provide log for `flutter --doctor`, branch name, platform details to reproduce the error.


## Format
```markdown
## Overview

- [ ] I've performed a self-review of the issue I'm raising
- [ ] I've provided debug logs
- [ ] I've provided steps to reproduce
- [ ] I've provided minimal code sample to reproduce the issue
- [ ] I've provided additional information also

### Problem statement
<!-- Problem description -->

### Debug logs
\```bash
<!-- paste your debug logs here -->
\```

### Steps to reproduce
<!-- steps to reproduce -->

### Minimal code sample
<!-- code sample/link -->

### Suggested Solution
<!-- Solution description -->

### Links
<!-- links related to issue, videos, screenshot, etc. -->
```

### Output
<img :src="$withBase('/images/flutter/getting-started/issue.png')" alt="Output">

### Overview
Developer should tick the relevant boxes. To tick a box? put `[x]` instead of `[ ]`.

```markdown
## Overview

- [x] I've performed a self-review of the issue I'm raising
- [ ] I've provided debug logs
- [ ] I've provided steps to reproduce
- [ ] I've provided minimal code sample to reproduce the issue
- [ ] I've provided additional information also
```

### Problem statement
Write down the issue description after `<!-- Problem description -->` comment.

```markdown
### Problem statement
<!-- Problem description -->
This is issue description.
```

### Debug Logs
Remove `\`, Paste the Debug logs where the comment `<!-- paste your debug logs here -->` is.
```markdown
### Debug logs
\```bash
yyyy-mm-dd hh:mm:ss XYZ failed
yyyy-mm-dd hh:mm:ss flutter: Observatory listening on http://127.0.0.1/
\```
```

### Steps to reproduce
Write down the steps after `<!-- steps to reproduce -->` comment.
```markdown
### Steps to reproduce
<!-- steps to reproduce -->
Step 1: go to abc.
Step 2: try performing xyz.
```

### Minimal code sample
Attach minimal code sample to reproduce the issue.

```markdown
### Minimal code sample
<!-- code sample/link -->
Your code sample/ link.
```

### Suggested Solution
Write your suggetion after `<!-- Solution description -->` comment.

```markdown
### Suggested Solution
<!-- Solution description -->
I suggest changing xyz.
```

### Links
Attach links after <!-- links related to issue, videos, screenshot, etc. --> comment.

```markdown
### Links
<!-- links related to issue, videos, screenshot, etc. -->
[link](https://webreinvent.com)
```