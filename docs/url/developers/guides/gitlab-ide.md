---
displayed_sidebar: groupUrlTeamDevelopers
description: Want to edit our GitLab code without having to fight with SSH? Learn how to use the GitLab IDE tool!
last_update:
    date: April 5 2024
    author: Carlos Valdez
---

# Using the GitLab Web IDE

If you want to make a quick edit, you can use the
[GitLab Web IDE](https://docs.gitlab.com/ee/user/project/web_ide/). You can do
by going into the repository you want to edit, let's say the
[Ojos Project Docs](https://gitlab.com/ojosproject/docs), and pressing `.`. It
will automatically open up a Visual Studio Code-like coding environment for you
to use.

:::tip

Remember that at the bottom of every page, there is a "Edit this page" button.
Click that button, press `.`, and you'll be opened to that specific page in the
GitLab Web IDE.

:::

## Switching to `dev`

When you are going to add something to any project, please make sure to switch
to the `dev` branch. At the bottom of the screen next to "GitLab", there is a
branch icon either labeled `main` or `dev`. Please switch to `dev`.

:::tip

You will need to use GitLab IDE git features. If you'd like to learn how to
commit make sure the repository saves your changes, please watch
[this video](https://www.youtube.com/watch?v=i_23KUAEtUM).

:::

## What is this written in?

The website documentation is written in Markdown. Please use
[QuickRef.ME](https://quickref.me/markdown) to learn more. Some of this content
also includes admonitions. You can learn more about them using the
[Docusaurus docs](https://docusaurus.io/docs/markdown-features/admonitions).

:::note

Although the majority of the documentation is written in Markdown, some of it
is written in [MDX](https://mdxjs.com/), which is a
[programming language](https://en.wikipedia.org/wiki/Programming_language)
rather than a [markup language](https://en.wikipedia.org/wiki/Markup_language).
I **highly** recommend not editing pages that are written in MDX, such as the
[members page](/url/members/).

:::

## Error displaying webview

If you get an error stating that the webview could not be viewed, it is because
you need to enable cookies for the website, even cross-site cookies.

:::danger

After you are done editing your code with GitLab Web IDE, please disable
cross-site cookies.

:::
