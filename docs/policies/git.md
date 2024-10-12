---
displayed_sidebar: policies
last_update:
  author: Carlos Valdez
  date: April 19 2024
description: Read up on the Ojos Project policies for git and GitHub!
---

# Git Policies

[`git`](https://git-scm.org/) is a fantastic tool that helps developers manage
their source code. [GitHub](https://github.com/) is a tool that helps
developers manage their many git repositories.

This document will outline how we will use `git` in the Ojos Project.

## `git`

### Commits

Commit messages are similar to emails. I often like to use `git commit` instead of
`git commit -m "your message"` so that I can properly make it feel like an
email. Overall, think of it this way:

The first line is the subject line of an email. The middle section is the body
of the email.

Some commit messages can be long and detailed, [like this](https://github.com/ojosproject/website/commit/f447261bc1c373559350a89821067fc24b33ca16):

```plaintext
feat(index): hover over member generates a background color

This is done so that we can indicate to the user that the member
is clickable, and when they click the member, they are taken
to that members' requested website.
```

... or sometimes they can be short. [Like this](https://github.com/ojosproject/website/commit/6e22e43096f71f3590638b320bfa0e40552368ae):

```plaintext
feat(config): clicking edit this page opens github.dev
```

I won't go into commit conventions here, but the Developers team is encouraged
to use [Commit Lint](https://commitlint.io).

:::tip

Short messages can be written using `git commit -m "your message"`.

Long commits can be written in two ways. `git commit` opens an editor, OR you can use `git commit -m "subject line" -m "description"` to write a longer commit message.

:::

### Branching

Here's a short table explaining how we will use `git` branching:

| Branch           | Description                                                                                     | Will be merged into |
| ---------------- | ----------------------------------------------------------------------------------------------- | ------------------- |
| `release`        | This is the branch that should always be stable.                                                | None                |
| `main`           | This is the branch that Ojos developers add their changes to and test. **Main working branch.** | `release`           |
| Any other branch | A feature branch. If you can't push into `main` or are using a forked branch, use this.         | `main`              |

A general guideline is:

- Nobody pushes to `release`, it can only be merged into
- Push to `main` only if it's a quick feature/fix
- Push to your custom branch if it's something that will take a while to finish
  (i.e., won't be finished in a single sitting) and then merge it into `main`

### Identity

Before committing, you should make sure your identity has been set. Please use
your name and email associated with the Ojos Project. Often, this is the email
associated with your educational institution. If I wanted to set my identity, I
would use:

```shell
git config --global user.name "Carlos Valdez"
git config --global user.email "cvaldezh@uci.edu"
```

All identities must be structured the same. That is, preferred first name,
preferred last name, and your educational institution email address. There must
only be one identity per individual too. That is, if I run the command below,
you must only have one identity (line) for yourself.

```shell
git log | grep "Author: " | sort -u
```

If that is not the case, a
[`.mailmap`](https://ntietz.com/blog/git-mailmap-for-name-changes/) file will be
created to map your identities to each other.

### `git` Credit

Sometimes, you will need to commit for other individuals. There's two ways of
doing that.

You can add them as co-authors by having your commit message be:

```shell
your original message


Co-authored-by: Carlos Valdez <cvaldezh@uci.edu>
```

Another method is by changing the author for one commit by using this command:

```shell
git commit --author="Carlos Valdez <cvaldezh@uci.edu>"
```

## GitHub

:::warning

Your activity on GitHub can often be linked and used as a historical reference.
Say, somebody wants to figure out why a feature wasn't implemented and they link
your comment from a GitHub issue.

**Please act reasonable and respectful in any GitHub correspondence.**

:::

### Issues

GitHub has a neat feature called Issues. It basically allows for people to
submit bug reports, feature requests, tech support requests, etc.

In the Ojos Project, we use Issues to keep track of the above, as well as to ask
for community input.

### Pull Requests

GitHub Pull Requests are used to track work done by members and other
open-source contributors. At the beginning and end of our meetings, Ojos Project
members often have a PR assigned to them.

:::tip

To best participate in Issues/PRs, think of Issues as a place to discuss things
that *aren't* currently being worked on, while PRs as a place to discuss what
*is* being worked on.

:::

### Closing an Issue/PR

To close an issue, please make sure you write something like "Fixed in
`commit hash`". That way, we can reference individuals to where the fix was made
so that, if in the future we need to reference it, we can.

[Here's an example.](https://github.com/ojosproject/website/issues/28#issuecomment-2109323778)
