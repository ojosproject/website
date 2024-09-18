---
authors: [cvaldezh@uci.edu, pluong3@uci.edu, jasonbm2@uci.edu, jessecd@uci.edu]
slug: /road-to-iris/
hide_table_of_contents: true
description: >
  Iris comes with a unique challenge within the team that hasn't been faced
  before -- it's built with Rust! Learn about how the team has handled some
  of the challenges in working with Rust, NextJS, and more.
---

# Road to Learning Rust, NextJS, and Tauri

![Ojos Project header](@site/static/images/header.png)

Iris has been in development for the entire summer. It's been a slow but steady
pace, seeing as how Iris comes with new experiences for the developers. With any
new experience, however, there are challenges.

In this more technical news post, learn about how the team managed to get around
working with the Rust programming language, NextJS, and Tauri!

<!-- truncate -->
<!-- markdownlint-disable MD026 -->

## Background

[Iris](https://github.com/ojosproject/iris/) is the Ojos Project's open-source
hospice management system. It's a program we've been researching for since
October 2023 and building since May 2024. Our goal for the project is to ensure
we have a centralized storage for hospice management that can be relayed to
other caregivers of a hospice patient. Some of the planned features we include
to have are:

- Medication management
- Video recording
- Noting care instructions
- ... and more.

The program is being built with various tools, notably
[React/NextJS](https://nextjs.org/), [Rust](https://rust-lang.org/) and
[Tauri](https://tauri.app/). We're also using [git](https://git-scm.com/) and
[GitHub](https://github.com/).

The challenge for us is to learn how to use these tools to the best of our
abilities, as many of us haven't worked with them. We are a team of amazing
programmers from the [University of California, Irvine](https://uci.edu/) that
decided to take on the challenge of using these tools effectively to build Iris.

## Hello, Tauri!

Hi, hi! I'm Carlos, one of the founding members of the Ojos Project. My
main responsibility regarding Iris is working with the backend and
ensuring Tauri is appropriately implemented in the backend and the frontend.

Tauri is a toolkit to help developers create desktop apps using Rust and a
frontend framework of our choice. Typically when it comes to desktop apps,
people's tool of choice would be [Electron](https://www.electronjs.org/).
However, we didn't go down the Electron route for a few reasons:

- **Full JavaScript**: Electron requires us to write the frontend and backend in
  JavaScript, but I don't think JavaScript belongs in the backend.
- **Huge Bundles**: An average Electron app can be around 200 MBs. This is
  because Electron ships with [Chromium](https://www.chromium.org) and
  [Node.js](https://nodejs.org/), which means you're downloading a
  browser for every new Electron app you install.
  [And there are a lot](https://www.electronjs.org/apps).

Tauri, on the other hand, tackles this differently:

- **A Rust Backend**: Tauri lets us work with Rust in the backend, which is
  considered to be a safe and effective programming language.
- **Tiny Bundles**: Tauri uses the browser engine you already have installed, so
  it makes your apps smaller, sometimes even up to 15x smaller while also
  making it more effective.

Now, taking into consideration that Palliaview is being built for an embedded
system, the Rust programming language as a backend seems to be the perfect
choice for this kind of project.

### Troubles with Tauri

A massive challenge when it came to learning Tauri (and admittedly, learning
Rust alongside it) is understanding how to properly use Tauri. I had initially
believed Tauri was just the setup and
[the CLI](https://tauri.app/v1/api/cli/). However, it took a while for me to
understand how to work with
[Tauri's `AppHandle` structure](https://docs.rs/tauri/1.7.2/tauri/struct.AppHandle.html).

[As soon as I discovered you can add the `AppHandle` to a Tauri command's
parameters](https://github.com/ojosproject/iris/commit/9324044d1c19f8aa5a1064e3c620df1e57f26395),
it became much faster and more efficient to develop Iris. Development for Iris
sped up and (admittedly) became so much more fun to work on. At least to me!

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
dominant in the space. With this, it's clear why there's much more
documentation and support when it comes to Electron. I feel like Tauri's
documentation has many areas of improvement, and I certainly didn't help the
case with transitioning us to the soon-to-be-released Tauri v2. I am, however,
really excited to see the future of Tauri as I believe is a very promising
toolkit. With more people working on programs with Tauri, documentation will
get better, and therefore finding solutions and support online will become
better.

## Front end with NextJS

Hi! My name is Mai Luong, and I’ve been working with Ojos since last Spring. My
responsibilities have primarily focused on developing the medication features
with NextJS. I’m currently a 4th year majoring in Informatics and Political
Science at UCI, and I’m excited to continue growing my skills in software
development through this project!

This summer, I've been learning server-side rendering and building Iris UI.
Next.js simplifies many tasks like routing and API handling, which makes it
a powerful tool for frontend development. Routing became intuitive by allowing
me to create pages through the file system. Each page corresponds
to a route in the application, streamlining the static routing process.

One of the key challenges I've been working through is learning about connecting
the frontend with the backend. Learning how to present the necessary data from
back-end data has proven to be an informative learning experience.

## Backend with Rust

My name is Jason Martin, an upcoming 2nd year Informatics major, and I have been
with Ojos since April 2024. While the obstacles that Iris threw at first-year
me proved to be challenging, I found none more daunting than tackling Rust’s
comparatively nonsensical syntax or seemingly roundabout solutions to problems
that Python, the only programming language I knew prior to joining, made easy.

Having to learn the complexities of Rust this summer has, in turn, helped me
better my understanding of the complexities of, the reasoning behind, and
the tools offered by programming languages, forcing me to be more mindful, or
even learn for the first time, in some cases, of mutability, ownership, object
references, pointers, stack vs heap, and more concepts I’m forgetting at the
moment. Additionally, applying Rust to solve problems, while challenging, gave
me necessary and foundational project-building experience, such as learning the
Unix time system to store and sort medications in a database or learning how to
make API calls and parse JSON files.

Remotely working with Rust this summer to help contribute to Iris’ backend,
albeit with a lot of hand-holding and patience from Carlos, has helped me look
forward to working more collaboratively and efficiently this upcoming school
year!

## Designing and Implementing

Hello, my name is Jesse David, and I am a 4th year Informatics major specializing
in Human-Computer Interaction at UCI. I have been involved with the Ojos Project
since April 2024. During this summer, I have mainly been working on the front end
by creating designs using Figma and implementing them using NextJS.

### Designing with Figma

The designs for the various Iris screens were created using Figma. During Spring
quarter, we created low-fidelity wireframes for various pages, and so, during
this summer, I worked on creating higher-fidelity wireframes of pages. To help
ensure consistency between pages, I first created a branding guide for Iris.
The color scheme revolves around different shades of blue as it
[conveys trust and is commonly seen in healthcare](https://doctorlogic.com/blog/medical-logo-colors).
Additionally, blue is also part of the
[UCI color scheme](https://brand.uci.edu/master-branding/color-palette/).
Accessibility is an important focus for designing this software, so it was
decided that foreground/background color combinations for text should be
compliant with at least the
[AA level for text according to WCAG](https://www.w3.org/TR/WCAG22/#contrast-minimum).
Noto Sans was selected as the primary font for our designs since we wanted to
use an [accessible font](https://www.audioeye.com/post/accessible-fonts/).

After creating a branding guide, I worked on designing higher-fidelity
wireframes with some interactions. As of the writing of the post, the pages that
have been designed are:

- the pin entry page
- the home/hub page
- the log view of the medications a patient takes
- the video call/recordings pages

### Transferring Designs Over to NextJS

After creating designs using Figma, I worked on implementing them into code
using NextJS. A couple of the reasons why I was in favor of using NextJS for
Iris were that NextJS's App Router allows for relatively simple page routing and
that NextJS has loading optimizations that we could potentially leverage later
on.

However, all tools come with tradeoffs, and since we were all relatively new to
the framework, we came to learn about a number of these tradeoffs while coding.
For example, when trying to implement the saving of video recordings into Iris,
the package that we were using involves using asynchronous functions. However,
we learned that client components in NextJS cannot directly call asynchronous
functions and that the useEffect hook would have to be used. Working around
these requirements has been a challenge for us, and we are still currently
trying to work this out. Despite the challenges, overall, this project has
allowed us to gain valuable experience in using this popular framework, and I
look forward to understanding NextJS even deeper as this project carries on.
