---
last_update:
    author: Carlos Valdez
    date: April 14 2024
description: >
    This will guide you to transition from GitLab to GitHub. This page will also
    be used to help developers transition from one `git` service to another.
---
# Transitioning to GitHub

This guide will help you transition from GitLab to GitHub.

## SSH Key

Your GitLab authentication key can be used to authenticate to GitHub as well.
All you need to do is
[add your SSH public key to GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

## Commands to Run

There's some commands you can run on the terminal to not have to clone an entire
new repository. **This assumes you want to use SSH key authentication. If you
want to use HTTPS authentication, replace it with the appropriate URL.

| GitLab Repository                                     | Command                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| [docs](https://gitlab.com/ojosproject/docs)           | `git remote set-url origin git@github.com:ojosproject/docs.git`    |
| [website](https://gitlab.com/ojosproject/website)     | `git remote set-url origin git@github.com:ojosproject/website.git` |
| [scripts](https://gitlab.com/ojosproject/url/scripts) | `git remote set-url origin git@github.com:ojosproject/scripts.git` |

These are the main repositories we use at the Ojos Project for now.

## Administrative Changes

This is usually stuff Carlos has to get through.

- Change repository description
- Change Render deployment branch from GL go GH
- Enable push limit
- Enable GH pipelines
- Change GL Issue/Merge Request templates to GH
