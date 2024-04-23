---
displayed_sidebar: groupUrlTeamDevelopers
description: >
    This document will go into how to decrypt the interviews we conducted for
    the Ojos Project. This will use `gpg`.
last_update:
    author: Carlos Valdez
    date: February 22, 2024 2:42:55 PM PST
---

Decrypting the Interviews
=========================

I hope you're comfortable with the terminal.

Installation
------------

If you are on macOS, you'll have to install `gpg` using
[Homebrew](https://brew.sh/) using this command:

```shell
brew install gpg
```

If you are on Linux, install `gpg` using...

```shell
sudo apt install gpg
```

Decryption
----------

Once you have gpg installed, use the terminal to get to the folder the videos
are downloaded in. There's two useful comments that will help: `ls` and `cd`.

`ls` - list the content in your current folder

`cd <location>` - move to a new location

So...

```shell
ls
cd path/to/downloads/folder
```

Once you're there, you need to use this command:

```shell
gpg X.mp4.gpg
```

Note that X is just the number of the interview. You will be prompted to enter
a passphrase. Once it's decrypted, you can watch the video.
