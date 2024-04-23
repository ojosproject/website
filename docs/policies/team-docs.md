---
displayed_sidebar: default
description: >
    If you're just learning about how to add to the Team Docs, please go ahead
    and read this document. It will help you go over how to add to the docs,
    the purpose of the docs, etc.
last_update:
    author: Carlos Valdez
    date: March 20 2024
---

# Team Docs

Team Docs refers to the sections of the Docs website (`docs.ojosproject.org`)
that are meant to be for team reference. For example,
`docs.ojosproject.org/teams/research/` is the team docs for the Research team.

These docs are meant to be updated by team leaders. They are meant for two
purposes:

1. Keep the team informed of tools to use and guides
2. Keep the public informed about how the team works

Keeping things documented is essential and should not be underestimated.

## Where is my team doc?

| Team        | Path                | Updater       |
| ----------- | ------------------- | ------------- |
| Developers  | `/url/developers/`  | Carlos Valdez |
| Engineering | `/url/engineering/` | Joseph Sweatt |
| Research    | `/url/research/`    | N/A           |

## How do I update the document?

The easiest way to do this is by using the GitLab IDE. [We have a guide for how
to use it](/url/developers/guides/gitlab-ide/).

The important part is to make sure you are switched into the `dev` branch. The
document goes over that too.

## Absolute Minimums

At the very least, every team must include two documents:

1. A `README.md` document
2. A `getting-started.md` document, which explains how to get set up for your
   team.

## Resources

The documentation is written in Markdown. [This website is very useful for
referencing Markdown.](https://quickref.me/markdown)

## Template

```markdown
---
displayed_sidebar: groupUrlTeamDevelopers OR groupUrlTeamEngineering OR groupUrlTeamResearch
description: >
    ENTER A DESCRIPTION ABOUT THIS DOCUMENT HERE.
last_update:
    author: ENTER YOUR NAME HERE.
    date: ENTER THE DATE HERE. JAN 1 2024 STRUCTURE.
---

# TITLE OF THE DOCUMENT

CONTENT OF THE DOCUMENT.

```
