---
displayed_sidebar: softwareWebsite
description: >
  Learn about what the Members JSON file is and how it's used in the website.
last_update:
  author: Carlos Valdez
  date: June 20, 2024
---

# members.json

<!-- markdownlint-disable MD010 -->

![Ojos Project header](@site/static/images/header.png)

The `members.json` file is a file located in `/static/data/` that keeps all
information of our members. The purpose of this file is to keep all data we
might need in a single place to keep the project consistent. This document is
here to provide a transparent view to our members of the kind of data we keep.

## Our Usage

Read more about how we use the information found in `members.json` on our
[Email Policies](/docs/policies/email) document.

## JSON Structure

The structure of the Members JSON file is:

```json
[
	{
		"name": "",
		"email": "",
		"roles": [],
		"association": "",
		"public_key": "",
		"website": { "label": "", "value": "" },
		"joined": 0,
		"avatar": "",
		"contributed": false,
		"active": false
	}
]
```

All of the Member objects will be inside of an array.

Here's a table of keys and their meaning:

| Key             | Type       | Meaning                                                                                                                                                                              | Purpose                                                                                                                            |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`          | `string`   | Member name.                                                                                                                                                                         | Used to identify you as you.                                                                                                       |
| `email`         | `string`   | Their institution email. Must be from an [approved domain](/docs/policies/email).                                                                                                    | Used to uniquely sort you from others in the team.                                                                                 |
| `roles`         | `string[]` | Their role(s) in the Ojos Project. Index 0 is your main role.                                                                                                                        | Used to give you credit for your role(s) in the Ojos Project.                                                                      |
| `association`   | `string`   | The individual's association. Examples: `University of California, Irvine`, `Imperial Valley College`, etc.                                                                          | Used to indicate your school or institution you're associated with.                                                                |
| `public_key`    | `string`   | Name of the file with the member's GPG public key. If it's empty, the member has not added a public key.                                                                             | Used to share public keys with each other.                                                                                         |
| `website.label` | `string`   | The label, usually `Personal Website`, `Email`, etc.                                                                                                                                 | Used to label your website URL.                                                                                                    |
| `website.value` | `string`   | The link to direct people to. `mailto:` for `Email`.                                                                                                                                 | Used to link people to your website.                                                                                               |
| `joined`        | `number`   | [Unix timestamp](https://www.unixtimestamp.com/) of their join date                                                                                                                  | Used to sort people... or at least will be used to sort people.                                                                    |
| `avatar`        | `string`   | Their Gravatar link, with [default image `mp`](https://docs.gravatar.com/general/images/#default-image). Use [SHA256 Online Tool](https://emn178.github.io/online-tools/sha256.html) | Used to give a face to the name.                                                                                                   |
| `contributed`   | `boolean`  | Whether or not a member contributed to the project.                                                                                                                                  | Used to credit you if you contributed. If `true`, you're displayed on the homepage and once you leave, on the Former Members table |
| `active`        | `boolean`  | A boolean indicating if they're still participating or not                                                                                                                           | Used to indicate if you're still participating in the project.                                                                     |

:::tip

You can
[view the `members.json` file on GitHub](https://github.com/ojosproject/website/blob/main/static/data/members.json).

:::

## Need to update something?

If you need to update content about yourself, feel free to do so. Some of the
most common fields you may want to update are:

- `roles`
- `website.label`
- `website.value`
- `contributions`

**DO NOT COMMIT DIRECTLY ON THE MAIN BRANCH.** Create a separate branch and
open a Pull Request. Once you do that, let Carlos know and he will review and
merge it into `main`.

:::warning

It is **heavily** recommended you update these values yourself. Carlos does not
update these as often as he should.

:::

## Data Retention Policies

Ojos Project doesn't have reason to keep this data for more than what we need.
However, if you're a current or incoming member of the Ojos Project, we keep
this information for the purposes mentioned above.

### Please delete my data

:::note

This is for former members only. If you're a current member, you may **modify**
your data, but we still need it until you're no longer a member for the reasons
mentioned above.

:::

If you're a former member and would like your data deleted, please email the
Developers Team at
[developers@ojosproject.org](mailto:developers@ojosproject.org) or
[raise a GitHub issue](https://github.com/ojosproject/website/issues/new/choose/).
You may request some or all of your data to be deleted.

If you're a former member and your `contributions` array is empty, we delete
all of your data as soon as you leave the project. However, if you're a former
member and have `contributions`, then we display your work on our [members
page](/docs/members/).
