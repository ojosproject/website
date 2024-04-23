---
displayed_sidebar: groupUrlTeamDevelopers
description: >
    The Developers team of the Ojos Project is in charge of building the
    software infrastructure of the device and the organization as a whole.
last_update:
    author: Carlos Valdez
    date: April 18 2024
---

# Developers Team

The Developers team of the Ojos Project is in charge of building the software
infrastructure of the device and the organization as a whole.

## Responsibilities

The responsibilities of the Developers team include:

- Ensuring the main website and Docs website is updated adequately
- Requirements analysis
- Researching different tools to use
- Software design with the C4 Model, class diagrams, etc.
- Programming ([Bash](https://quickref.me/bash), [Python](https://quickref.me/python))

## Tools

:::info

Most, if not all, of the documentation for URL assumes you are running macOS or
a Debian-based Linux distribution. **Please use macOS, Linux, or WSL for work
related to the Ojos Project.** Thanks!

:::

We try to use similar tools to ensure consistency throughout the team. Some of
the tools we use are:

| Tool           | Setup                                      | Reason                                              |
| -------------- | ------------------------------------------ | --------------------------------------------------- |
| macOS or Linux | N/A                                        | Ensuring we can use the same bash scripts.          |
| Gaphor         | [gaphor.org](https://gaphor.org/download/) | [C4 Model design](/url/developers/design/c4-model/) |

## Resources

| Resource         | URL                                                          | Reason                                                              |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| C4 Model website | [c4model.com](https://c4model.com/)                          | Outlines what the C4 Model is, with examples                        |
| `gtk4-rs` book   | [gtk-rs.org](https://gtk-rs.org/gtk4-rs/stable/latest/book/) | Simple documentation for `gtk4-rs`, the toolkit to build a Rust app |

## Custom bash commands

These are commands created via the `.zshrc` file.

| Command    | Substitute for                                  | Usage                                                        |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `cdrive`   | `cd /mnt/c/Users/[username]`                    | For WSL users, will take you to your Windows home directory. |
| `check`    | `ssh-add -l`                                    | Checks to see if there are identities in the SSH agent.      |
| `activate` | `eval $(ssh-agent -s) && ssh-add ~/.ssh/github` | Activates the SSH agent and adds the `github` identity.      |
| `config`   | `vim ~/.zshrc`                                  | Uses `vim` to open the `.zshrc`.                             |
