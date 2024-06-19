---
displayed_sidebar: softwareWebsite
description: >
  Kimai is the software the Ojos Project is going to use to track attendance and
  time logging for LAEP funding.
last_update:
  date: June 18, 2024
  author: Carlos Valdez
---
# Kimai: Time Logging and Attendance

![Kimai header](https://raw.githubusercontent.com/kimai/images/main/repository-header.png)

In order to better keep track of attendance and time logging for Summer 2024,
Ojos Project is going to be using a self-hosted [Kimai](https://kimai.org/) server.
Kimai is a free and open-source time logger. We will be using this software to
log our hours at the project.

## Your First Login

:::warning

You need to talk to Carlos when logging in for the first time. He will reset
the default password given to you.

:::

To log into Kimai, you must go to
[timesheet.ojosproject.org](https://timesheet.ojosproject.org). **Your login username
will be your UCINetID.** That is, the part before `@uci.edu` in your emails. The
program will prompt you to change your password.

When you log in, you will be given a quick onboarding process. You will also be
asked to set a new password. Please choose a strong password, and **please
enable 2FA**.
[I cannot enforce 2FA for all users](https://github.com/kimai/kimai/issues/4070),
but I would if I could. It's safer than just having a plain password.

Your account will already have the following information:

| Value        | Default                                                                              |
| ------------ | ------------------------------------------------------------------------------------ |
| Name         | Your name                                                                            |
| Username     | Your email username (before the `@`)                                                 |
| Email        | Your email                                                                           |
| An avatar    | Your Gravatar                                                                        |
| Set pay      | `0.00` if not enrolled in LAEP, otherwise `22.00`                                    |
| A team       | `Developers` or `Engineering`                                                        |
| A supervisor | `Mark S. Baldwin`, `Carlos Valdez`, or `Joseph Sweatt`                               |
| Your role    | `Faculty Advisor`, `Project Lead`, `Engineering Lead`, `Developer`, or `Engineering` |

Most of this information is from the [Members JSON file](/docs/website/members-json).

## Using Kimai

When you log in, there will be a button at the top right of the screen. It'll
look like a green play button.

![Play button](@site/static/images/kimai-play-button.png)

When you select it, a pop up menu will appear.

![Kimai popup to start activity](@site/static/images/kimai-input-hours-menu.png)

| Key              | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| `From`           | When you started your work                                                      |
| `Duration / End` | When you finished your work (Leave empty if you are still working)              |
| `Project`        | Select `Summer 2024`                                                            |
| `Activity`       | Select `Hour Tracker`                                                           |
| `Description`    | **Please** describe in great detail what you did / plan to do during this time. |

Select save, and depending on if you added a `Duration / End`, you will either
start a timer OR it'll save your hours.

You can find your hours under `Time Tracking` in `My Times`.

## Conclusion

Kimai offers a *LOT* of great features, but these are the main ones we will use
for now.
