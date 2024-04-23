---
displayed_sidebar: groupUrlTeamDevelopers
unlisted: true
description: >
    This walks Developers over the Members JSON Protocol.
last_update:
    author: Carlos Valdez
    date: April 16 2024
---
# Members JSON Protocol

## Background

The purpose of the Docs website is to document the project and its APIs. Part of
that documentation process is documenting the members of the Ojos Project.

The Members JSON file includes information about the members. It's just casual
stuff like names and emails. However, we use this file to showcase who
contributed to our project.

## The Protocol

The Members JSON Protocol is the method in which we will use the Members JSON
file, the file that contains information about the URL Group's team members.

The protocol has two requirements.

1. Information about the URL Group must be found in this one JSON file
2. If we want to display information about the members, it must come from this
   JSON file

### JSON Structure

The structure of the Members JSON file is:

```json
[
    {
        "name": "",
        "email": "",
        "roles": [],
        "institution": "",
        "website": {"label": "", "value": ""},
        "joined": "",
        "avatar": "",
        "contributions": [],
        "active": false
    }
]
```

All of the Member objects will be inside of an array.

Here's a table of keys and their meaning:

| Key             | Type       | Meaning                                                                                                                                                                              | Purpose                                                                                                                               |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `name`          | `string`   | Member name.                                                                                                                                                                         | Used to identify you as you.                                                                                                          |
| `email`         | `string`   | Their institution email. Must be from an [approved domain](/url/getting-started/#send-us-your-email).                                                                                | Used to uniquely sort you from others in the team.                                                                                    |
| `roles`         | `string[]` | Their role(s) in the Ojos Project. Index 0 is your main role.                                                                                                                        | Used to give you credit for your role(s) in the Ojos Project.                                                                         |
| `institution`   | `string`   | Their associated institution. Examples: `University of California, Irvine`, `Imperial Valley College`, etc.                                                                          | Used to indicate the institution you're from.                                                                                         |
| `website.label` | `string`   | The label, usually `Personal Website`, `Email`, etc.                                                                                                                                 | Used to label your website URL.                                                                                                       |
| `website.value` | `string`   | The link to direct people to. `mailto:` for `Email`.                                                                                                                                 | Used to link people to your website.                                                                                                  |
| `joined`        | `string`   | Their join month/year                                                                                                                                                                | Used to sort people... or at least will be used to sort people.                                                                       |
| `avatar`        | `string`   | Their Gravatar link, with [default image `mp`](https://docs.gravatar.com/general/images/#default-image). Use [SHA256 Online Tool](https://emn178.github.io/online-tools/sha256.html) | Used to give a face to the name.                                                                                                      |
| `contributions` | `string[]` | An array of strings indicating their various contributions                                                                                                                           | Used to gie you credit for what you did in the Ojos Project, specifically in the [Former Members table](/url/members/#former-members) |
| `active`        | `boolean`  | A boolean indicating if they're still participating or not                                                                                                                           | Used to indicate if you're still participating in the project.                                                                        |

:::tip

You can
[view the public JSON file on GitLab](https://github.com/ojosproject/docs/blob/main/static/data/url/members.json).

:::

### Using the file

As of April 3, 2024, this file is used in two places:

1. [Main website](https://ojosproject.org#team)
2. [Members of the Ojos Project website](https://docs.ojosproject.org/url/members/)

The (literal) keys to sorting individuals are `active` and `contributions`.
Everything else in the Members JSON file is just for information.

#### Example: Main website

On the main website, it adds members if the `active` key is `true` and if the
`contributions` array is not empty. This indicates a
[Recognized Member](https://docs.ojosproject.org/url/getting-started/#getting-recognized-as-a-member).

It gets the Members JSON file by making a `GET` request to
`https://docs.ojosproject.org/data/url/members.json`.

#### Example: Docs website

On the Docs website, if adds members to the Current Members table if their
`active` key is `true`. It adds members to the Former members table if their
`active` is `false` and the `contributions` array is not empty.

Getting the data on the Docs website is different. Instead of doing a `GET`
request, you can just import it. It is imported in `/src/components/members.tsx`
and used to create `CurrentMembers` and `FormerMembers` tables that is then
imported in `/docs/url/members.mdx`.

If you want to import the Members JSON file in the Docs website, you can just
add something like
`import membersJSON from "@site/static/data/url/members.json"` in a JSX file.

### Changing the data

If you need to add a change to the Members JSON file, it is located in
`/static/data/url/members.json` in the
[Docs website repository](https://github.com/ojosproject/docs/blob/main/static/data/url/members.json).

:::tip

If you are not in the Developers team, it is highly recommended to use the
[GitLab IDE](/url/developers/guides/gitlab-ide) instead. You can do so by
going to the repository and pressing the `.` key.

:::
