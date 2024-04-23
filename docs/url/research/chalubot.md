---
description: >
    ChaluBot is a Discord bot we use at the Ojos Project to organize our
    research notes. This document includes the commands for the bots, as well as
    how you might need to use it.
last_update:
    author: Carlos Valdez
    date: March 2, 2024 12:17:54 AM PST
---
# ChaluBot

:::info

This is a temporary name. Do not get attached.

:::

ChaluBot is the product of the [Credit via Git proposal](/url/research/git-credit/).

## How to use this bot

Let's say Carlos found a research paper for you. Carlos will use the command
`/assign <member> <paper id>` to assign you a paper.

Take notes on whatever device you use, as long as they're bullet point notes.
Once you've taken your notes, write a summary. Finally, run `/add_notes <paper id>`. You will get to paste your notes and summary there.

Don't know what the `<paper id>` is? Run `/list` to check!

Once you added your notes and you think they're ready to be properly added to
`docs.ojosproject.org`, run `/commit <paper id>` to mark it as finished.

Want to work on another paper? Check `/list` and use `/claim <paper id>` to
claim another paper.

So, in summary,

1. Get assigned with `/assign`, or `/claim` a paper
2. Paste your notes and summary with `/add_notes`
3. Mark as finished with `/commit`

## Commands

|Command|Who can use|Description|
|---|---|---|
|`/assign <member> <paper id>`|Carlos|Assigns `<member>` a research paper.|
|`/claim <paper id>`|Ojos Team|Team members can also claim research papers for themselves.|
|`/add_notes <paper id>`|Assignee for `<paper id>`|Opens a [long text box](https://discord.com/developers/docs/interactions/message-components#text-inputs) for you to add your notes. Make sure to use [Markdown](https://quickref.me/markdown)!|
|`/commit <paper id>`|Assignee for `<paper id>`|This means your notes are finalized and ready to be published.|
|`/list`|Ojos Project Team|Lists all papers, their status, and who is assigned to them.|
