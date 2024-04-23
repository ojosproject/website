---
description: >
    Let's learn how to use SSH!
last_update:
    date: April 22 2024
    author: Carlos Valdez
---
# Using SSH

SSH can be a bit intimidating at first, as all CLIs do. However, I'll try to
make this as easy as possible, and even show you how to connect to [ICS'
OpenLab](https://swiki.ics.uci.edu/doku.php/hardware:cluster:openlab)!

:::note

This document will assume you're not using the
[SSH setup](url/developers/guides/ssh-setup).

:::

## What is OpenLab?

OpenLab is a Linux server maintained by the School of ICS. Most ICS courses,
like CS 121/IN4MATX 141, endorse using OpenLab as it has a lot of the programs
we need to use pre-installed.

I think OpenLab is pretty cool to use.

### Prerequisites

#### ICS Account

In order to use OpenLab, you must have an ICS account. Please [active your ICS
account here](https://ics.uci.edu/~lab/students/acct_activate.php).

#### SSH Keys

To connect to OpenLab, you must generate an SSH key. An SSH key is a way to
authenticate yourself to the server. Think of it as a password.

## Setting up SSH

You can generate an SSH key using this command:

```shell
ssh-keygen -f ~/.ssh/ics -t ed25519 -C "OpenLab key"
```

It will ask for a password. This password is used to encrypt your SSH key. Give
it a password that you will remember. **Do not underestimate the importance of
encryption.**

The `ssh-keygen` is used to generate your SSH key. There's a few parameters I
added to make your key more convenient.

| Parameter | Value          | Meaning                                                                                |
| --------- | -------------- | -------------------------------------------------------------------------------------- |
| `-f`      | `~/.ssh/ics`   | This specifies where you want your key to be saved.                                    |
| `-t`      | `ed25519`      | This specifies the **t**ype of SSH key. `ed25519` is considered to be strong and fast. |
| `-C`      | `"OpenLab key` | This adds a comment to your SSH key.                                                   |

## Post-keygen Stuff

All of your SSH-related stuff will be in a folder in the path `~/.ssh/`.

When you generate a new key, a few things will happen. It will generate two new
folders in the `.ssh` folder: `ics` and `ics.pub`. The `ics.pub` file is the
one you'll be interacting with the most. It contains your public key, and you
can share this with anyone. You will have to share this with OpenLab.

The `ics` file is meant to be private. **Do not share this with anyone!**

## Getting your public key

To get your public key, you can run this command:

```shell
cat ~/.ssh/ics.pub
```

Here's my output:

```shell
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKhUItkt4dkot3/1K1e9SAP+CrGJQ9ior+gAVublCk/x OpenLab key
```

You need to copy this output and place it in the OpenLab server.

## First OpenLab Connection

When you first connect to OpenLab, you will need to get the `ics.pub` key you
got from [the step above](#getting-your-public-key) and go into the OpenLab
`.ssh` folder. You should create a new file called `authorized_keys` and place
your public key here.

`authorized_keys` tells OpenLab which keys should be allowed to connect to
OpenLab under your name. If you were to put my key in this file, I'd be able to
connect to OpenLab under your name. Make sure to use the right key!

Now, you can connect running this command:

```shell
ssh $YOUR_UCINETID@openlab.ics.uci.edu
```

It will ask you for your key's password that you set.

## Why does it ask us so much for my password?

I know. It's annoying. Thankfully, the SSH agent exists. When you use the SSH
agent, it remembers your password.

```shell
eval $(ssh-agent -s)
ssh-add -l # prints your active SSH keys

ssh-add ~/.ssh/ics # adds your ics private key to the agent
```

It will prompt you for your password.

## The `config` file

There's another file in `.ssh` called `config`. The config file allows you to
make changes to how you connect to SSH. Here's a quick `config` file you can
paste:

```plaintext
Host openlab.ics.uci.edu
    IdentityFile ~/.ssh/ics
    User [YOUR UCINETID]
```

Now, if you set the SSH agent correctly, and you pasted set up this `config`
file, you can connect to OpenLab by running:

```shell
ssh openlab.ics.uci.edu
```
