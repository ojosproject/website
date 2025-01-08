---
displayed_sidebar: policies
description: >
  Ojos Project builds Iris using Tauri. This page exists to help people build a
  minimal app and learn the core concepts of Tauri.
---
# Tauri Training

## Introduction

To build [Iris](https://github.com/ojosproject/iris/), Ojos Project is using
[Tauri](https://tauri.app/). Tauri is a toolkit to build desktop applications
using web technologies, like JavaScript or related frameworks. Tauri is
very similar to [Electron](https://www.electronjs.org/), however the biggest
difference is that Electron apps ship with
[Chromium](https://www.chromium.org/Home/). Chromium is prone to heavy memory
usage and large bundle sizes per application. What Tauri does instead is use the
browser you already have installed on your system.

There are cons to this, such as
[iris#42](https://github.com/ojosproject/iris/issues/42). Another con is that,
because we're using whatever browser is installed, we have to build our program
like traditional web development rather than _only_ developing for Chromium.
"Traditional web development" means making sure your program works the same
across browsers/operating systems. Ever notice how a page on Firefox may not
work as well as it does in Chrome?

There are also many benefits to using Tauri. Tauri is built using Rust, so our
program will be more efficient than a JavaScript-only application like Electron.
Since Iris will eventually be deployed to an embedded system designed by the
Engineering team, using a Rust-based toolkit is perfect for us.

Because Ojos Project is using Tauri, that means you should know how to
use Tauri as well. This document exists as an "Intro to Tauri" for Ojos Project
developers.

## Getting Started

:::important

Before working on anything, please follow the
[Tauri prerequisites guide](https://tauri.app/start/prerequisites/). You should
also install NodeJS using [nvm](https://github.com/nvm-sh/nvm) or
[nvm-windows](https://github.com/coreybutler/nvm-windows) if you're using a
JavaScript framework.

You will be working with Rust in this training. In fact, most of it will be
Rust.

:::

First and foremost, decide what tooling you want to use. Tauri gives us the
option of working with practically any web framework that exists. Examples
include [NextJS](https://nextjs.org/), [Vite](https://vite.dev/),
[Svelte](https://svelte.dev/), or just plain JavaScript. Choose whatever
feels most comfortable for you, but remember that Iris is built using NextJS.

Next, follow the instructions in Tauri's
[Create a project guide](https://tauri.app/start/create-project/) to use the
`create-tauri-app` tool. Then read Tauri's
[Development guide](https://tauri.app/develop/).

## Project Requirements

This is your project, so build it the way you want to build it. However, to
cover some of the core concepts for Iris, please do the following:

| Concept                                               | Guide                                                                                    | Description                                                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Creating a Tauri command                              | [Tauri docs](https://tauri.app/develop/calling-rust/#basic-example)                      | Iris is heavily based on Tauri commands written in Rust. Understanding how commands work is important. |
| Displaying Tauri command data                         | [Tauri docs](https://tauri.app/develop/calling-rust/#returning-data)                     | Tauri commands can return data, and they often do in Iris. Understand how to get data from commands.   |
| Using arguments with commands                         | [Tauri docs](https://tauri.app/develop/calling-rust/#passing-arguments)                  | Sometimes Tauri commands require us to use arguments.                                                  |
| Using the `AppHandle` to store data in `app_data_dir` | [Tauri docs](https://tauri.app/develop/calling-rust/#accessing-an-apphandle-in-commands) | Iris uses the `app_data_dir` a lot. It's a folder that Tauri recommends you store your app data in.    |

## Running/Building

:::note

**Running a program** means running it in a development environment. This means
resources are allocated towards debugging, not performance.

**Building a program** takes the code and builds an executable file to use as
any other program on your computer. This means resources are allocated towards
performance, not debugging.

:::

To run your Tauri project, please use:

```shell
npm i
cargo tauri dev
```

Note that `npm` is only required if you're using a JavaScript framework. Vanilla
JavaScript does not require this.

To build your program, you can run:

```shell
cargo tauri build
```

The terminal will tell you where your executable is located.
