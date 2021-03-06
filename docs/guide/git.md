# Git

[[toc]]


## Introduction

We use git in all our project products, packages, modules and themes.

### Branching Strategy

We use `GitFlow` as a default strategy for git branch management.

### What is GitFlow?

Gitflow is a branching model, a particularly useful framework for streamlining collaboration and scaling teams.

It contains following branches:

|Branch| Purpose |
|--|--|
|Master or Main| This contains your production code. |
|Develop| This is the most active branch in which all branches are merged. This contains the most updated code. |
|Feature| These are the branches created by developers to develop features. These branches are merged by `Merge Request` or `Pull Request` to `develop` branch. |
|Release| These are the branches created from the `develop` branch to eventually merge in `master` & `develop`. |
|Hotfix| These are the branches created from the `master` branch to eventually merge in `master` & `develop`. |


Read more about it at: [https://www.gitkraken.com/learn/git/git-flow](https://www.gitkraken.com/learn/git/git-flow)


### Commits

Please follow following logic for your commit messages:

```shell
<type>: <description>


[optional body]

[optional footer]

```

Where `type` can have following values:

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

Read more at [https://keepachangelog.com/en/1.0.0/](https://keepachangelog.com/en/1.0.0/)

