---
displayed_sidebar: softwareWebsite
unlisted: true
description: >
  Learn about what the Members JSON file is and how it's used in the website.
last_update:
  author: Carlos Valdez
  date: May 21 2024
---

# Members JSON Protocol

## Background

Throughout our website, we promote the individuals that became members of the
Ojos Project. However, to ensure the information is updated consistently, we
keep a singular JSON file that these pages pull from. That is the Members JSON
file.

## The Protocol

The Members JSON Protocol is the method in which we will use the Members JSON
file, the file that contains information about the URL Group's team members.

The protocol has two requirements.

1. Information about our members must be in the `members.json` file
2. Information displayed about our members must come from the `members.json` file

### JSON Structure

The structure of the Members JSON file is:

```json
[
  {
    "name": "",
    "email": "",
    "roles": [],
    "association": "",
    "website": { "label": "", "value": "" },
    "joined": 0,
    "avatar": "",
    "contributions": [],
    "active": false
  }
]
```

All of the Member objects will be inside of an array.

Here's a table of keys and their meaning:

| Key             | Type       | Meaning                                                                                                                                                                              | Purpose                                                                                                                                    |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`          | `string`   | Member name.                                                                                                                                                                         | Used to identify you as you.                                                                                                               |
| `email`         | `string`   | Their institution email. Must be from an [approved domain](/docs/url/getting-started/#send-us-your-email).                                                                           | Used to uniquely sort you from others in the team.                                                                                         |
| `roles`         | `string[]` | Their role(s) in the Ojos Project. Index 0 is your main role.                                                                                                                        | Used to give you credit for your role(s) in the Ojos Project.                                                                              |
| `association`   | `string`   | The individual's association. Examples: `University of California, Irvine`, `Imperial Valley College`, etc.                                                                          | Used to indicate your school or institution you're associated with.                                                                        |
| `website.label` | `string`   | The label, usually `Personal Website`, `Email`, etc.                                                                                                                                 | Used to label your website URL.                                                                                                            |
| `website.value` | `string`   | The link to direct people to. `mailto:` for `Email`.                                                                                                                                 | Used to link people to your website.                                                                                                       |
| `joined`        | `number`   | [Unix timestamp](https://www.unixtimestamp.com/) of their join date                                                                                                                  | Used to sort people... or at least will be used to sort people.                                                                            |
| `avatar`        | `string`   | Their Gravatar link, with [default image `mp`](https://docs.gravatar.com/general/images/#default-image). Use [SHA256 Online Tool](https://emn178.github.io/online-tools/sha256.html) | Used to give a face to the name.                                                                                                           |
| `contributions` | `string[]` | An array of strings indicating their various contributions                                                                                                                           | Used to gie you credit for what you did in the Ojos Project, specifically in the [Former Members table](/docs/url/members/#former-members) |
| `active`        | `boolean`  | A boolean indicating if they're still participating or not                                                                                                                           | Used to indicate if you're still participating in the project.                                                                             |

:::tip

You can
[view the `members.json` file on GitHub](https://github.com/ojosproject/website/blob/main/static/data/url/members.json).

:::

## Need to update something?

If you need to update content about yourself, feel free to do so. Some of the
most common fields you may want to update are:

- `roles`
- `website.label`
- `website.value`
- `contributions`

Once you do that, let Carlos know so that it's merged onto the `main` branch.

:::warning

It is **heavily** recommended you update these values yourself. Carlos does not
update these as often as he should.

:::
