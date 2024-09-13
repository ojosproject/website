---
authors: [cvaldezh@uci.edu, pluong3@uci.edu]
slug: /road-to-iris/
hide_table_of_contents: true
description: >
  Iris comes with a unique challenge within the team that hasn't been faced
  before -- it's built with Rust! Learn about how the team has handled some
  of the challenges in working with Rust, NextJS, and more.
---

# Road to Learning Rust, NextJS, and Tauri

![Ojos Project header](@site/static/images/header.png)

Iris has been in development in the entire summer. It's been a slow but steady
pace seeing as how Iris comes with new experiences for the developers. With any
new experience, however, there are challenges.

In this more technical news post, learn about how the team managed to get around
working with the Rust programming language, NextJS, and Tauri!

<!-- truncate -->
<!-- ? Please keep truncate here! -->
<!-- ? Learn more: https://docusaurus.io/docs/blog#blog-list -->

<!-- markdownlint-disable MD026 -->
<!-- ? Disable no-trailing-punctuation, please keep here! -->
<!-- ? Learn more: -->
<!-- ? https://github.com/DavidAnson/markdownlint/blob/main/doc/md026.md -->

## Background

[Iris](https://github.com/ojosproject/iris/) is the Ojos Project's open-source
hospice management system. It's a program we've been researching for since
October 2023 and building since May 2024. Our goals for the project is to ensure
we have a centralized storage for hospice management that can be relayed to
other caregivers of a hospice patient. Some of the planned features we include
to have are:

- Medication management
- Video recording
- Noting care instructions
- ... and more.

The program is being build with various tools, notably
[React/NextJS](https://nextjs.org/), [Rust](https://rust-lang.org/) and
[Tauri](https://tauri.app/). We're also using [git](https://git-scm.com/) and
[GitHub](https://github.com/).

The challenge for us is to learn how to use these tools to the best of our
abilities, as many of us haven't worked with them. We are a team of amazing
programmers from the [University of California, Irvine](https://uci.edu/) that
decided to take on the challenge of using these tools effectively to build Iris.

## Hello, Tauri!

Hi hi, I'm Carlos. I am one of the founding members of the Ojos Project. My
main responsibility when it comes to Iris is working with the backend and
ensuring Tauri is appropriately implemented in the backend and the frontend.

Tauri is a toolkit to help developers create desktop apps using Rust and a
frontend framework of our choice. Typically when it comes to desktop apps,
people's tool of choice would be [Electron](https://www.electronjs.org/).
However, we didn't go down the Electron route for a few reasons:

- **Full JavaScript**: Electron requires us to write the frontend and backend in
  JavaScript, but I don't think JavaScript belongs in the backend
- **Huge Bundles**: An average Electron app can be around 200 MBs. This is
  because Electron ships with [Chromium](https://www.chromium.org) and
  [Node.js](https://nodejs.org/), practically meaning you're downloading a
  browser for every new Electron app you install
  [and there's a lot](https://www.electronjs.org/apps)

Tauri, on the other hand, tackles this differently:

- **A Rust Backend**: Tauri lets us work with Rust in the backend, which is
  considered to be a safe and effective programming language
- **Tiny Bundles**: Tauri uses the browser engine you already have installed, so
  you it makes your apps smaller, sometimes even up to 15x smaller while also
  making it more effective

Now, taking into consideration that Palliaview, our plug-and-play hardware
solution for Iris, is being build using an embedded system, the Rust programming
language as a backend seems to be the perfect choice for this kind of project.

### Troubles with Tauri

A massive challenge when it came to learning Tauri (and admittedly, learning
Rust alongside it) is discovering how to properly use Tauri. I had initially
believed Tauri was just the toolkit itself. However, it took a while for me to
understand how to work with
[Tauri's `AppHandle` structure](https://docs.rs/tauri/1.7.2/tauri/struct.AppHandle.html).

[As soon as I discovered you can add the `AppHandle` to a Tauri command's
parameters](https://github.com/ojosproject/iris/commit/9324044d1c19f8aa5a1064e3c620df1e57f26395),
it became much faster and efficient to develop Iris. As soon as it happened,
development for Iris speed up and (admittedly) became so much more fun. At least
to me!

### The v2 Plugin Ecosystem

[Iris has recently upgraded to Tauri v2](https://github.com/ojosproject/iris/commit/3190b1dda94820ce7c13a901060356d354524c7a),
which splits a lot of Tauri v1's core functions into plugins. One of the biggest
challenges in this aspect was realizing _just_ how many features Tauri came with
that we hadn't realized at first.

Although it's difficult to call this a "challenge" since it's always great to
discover new features, it's also unfortunate to realize a lot of external
solutions have a plugin alternative. For example...

- Instead of using [`std::fs`](https://doc.rust-lang.org/std/fs/index.html), we
  could have used [Tauri's File System plugin](https://v2.tauri.app/plugin/file-system/)
- Instead of using [`rusqlite`](https://docs.rs/rusqlite/latest/rusqlite/), we
  could have used [Tauri's SQL plugin](https://v2.tauri.app/plugin/sql/)

Although this doesn't slow down our development, it's still nice to know Tauri
has a lot of extensions!

### The Lack of Documentation

Tauri is an amazing way to develop desktop apps, but Electron is undoubtedly
dominant in the space. With this, it's clear that there's much more
documentation and support when it comes to Electron. I feel like Tauri's
documentation has many areas of improvement, and I certainly didn't help the
case with transitioning us to the soon-to-be released Tauri v2. I am, however,
really excited to see the future of Tauri as I believe is a very promising
toolkit. With more people working on programs with Tauri, documentation will
get better, and therefore finding solutions and support online becomes better.

## Front end with NextJS

Hi! My name is Mai Luong, and I’ve been working with Ojos since last Spring. My
responsibilities have primarily focused on developing the medication with
NextJS. I’m currently a 4 majoring in Informatics and Political Science
at UCI, and I’m excited to continue growing my skills in software development
through this project!

This summer, I've been learning server-side rendering and building Ojos UI.
Next.js simplifies many tasks like routing and API handling, which makes it
a powerful tool for frontend development. Routing become intuitive by allowing
me to create pages through the file system. Each pages corresponds
to a route in the application, streamline the static routing process.

One of the key challenges I've been working through is learning about connecting
frontend with backend. Learning how to present the necessary data from
back-end data have proven to be an informative learning experience.
