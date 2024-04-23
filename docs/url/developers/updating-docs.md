---
displayed_sidebar: groupUrlTeamDevelopers
description: >
    This document will explain the process of how to add a new Markdown file to
    the documentation. Out are the days of just adding the document...
last_update:
    author: Carlos Valdez
    date: April 5 2024
---
# Updating the documentation

You're probably reading this on `docs.ojosproject.org`. Previously, we would
keep our documentation in a
[GitLab folder](https://gitlab.com/ojosproject/docs/-/tree/33878f675970afe8e6b7dd4f60e08fcd8564c4a9)
full of Markdown files, which worked just fine. I wanted to focus on just
writing quick Markdown files and publishing them, and this method worked just
fine. However, other open-source projects have very pretty documentation, and
we just had a GitLab folder. Nothing wrong with it, but I want to make it look
just as nice!

In comes [Docusaurus](https://docusaurus.io/), an open-source documentation
tool that focuses on making the documentation look pretty while I can focus on
just writing it up! That is... until *after* the setup.

This document will explain the process of how to add a new Markdown file to
the documentation. Out are the days of just adding the document...

## Markdown Front Matter

On the top of almost every Markdown file, you will find something like this:

```yaml
---
displayed_sidebar: null
description: >
    null
last_update:
    author: null
    date: null
---
```

This is called the front matter. It includes information that can become
[meta tags](https://en.wikipedia.org/wiki/Meta_element) and/or can manipulate
how that page looks like.

I won't provide a full list of the keys here, but you can find them for the
[docs front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)
and the
[blog front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter)
in the Docusaurus Docs.

:::tip

The front matter is written with YAML. You can use the
[YAML cheat sheet](https://quickref.me/yaml) if you need help.

:::
