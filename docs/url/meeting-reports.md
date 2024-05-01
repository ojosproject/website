---
displayed_sidebar: groupUrl
description: >
    Whenever we have a meeting for URL, we will note down the different things
    we did here.
last_update:
    author: Carlos Valdez
    date: May 1 2024
---
# Meeting Reports

Whenever we have any meeting, we will write a report here. Newest reports go at
the top.

<!--

Here's a template:

## Date

| General Information |     |
| ------------------- | --- |
| Teams Present       |     |
| Members Present     |     |
| Meeting Time        |     |
| Report Author(s)    |     |
| Location            |     |

### Team

Enter what this team did during the meeting!

-->

## May 1, 2024

| General Information |                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| Teams Present       | Developers, Engineering                                                                          |
| Members Present     | Carlos Valdez, Ayush Jain, Joseph Sweatt, Jesse David, Meadow Rubalcava, Mai Luong, Jason Martin |
| Meeting Time        | 12:30 PM - 3:00 PM                                                                               |
| Report Author(s)    | Carlos Valdez                                                                                    |
| Location            | Undergraduate Research Lab @ Donald Bren Hall, Zoom                                              |

### Developers

Developers took some time to ensure [all of our designs](/docs/iris/design/) are
consistent with one another. We also created a new
[Filesystem Diagram](/docs/iris/filesystem) to help us visualize how
Iris will interact with the Linux filesystem.

Developers also continued to work on the Requirements.

We plan on starting development this Friday.

We introduced a new developer! Welcome Mai!

### Engineering

This report is still being written.

## April 26, 2024

| General Information |                                                      |
| ------------------- | ---------------------------------------------------- |
| Teams Present       | Developers                                           |
| Members Present     | Carlos Valdez, Ayush Jain, Jason Martin, Jesse David |
| Meeting Time        | 12:00 PM - 4:00 PM                                   |
| Report Author(s)    | Carlos Valdez, Joseph Sweatt                         |
| Location            | Undergraduate Research Lab @ Donald Bren Hall        |

### Developers

Developers decided to work on the
[Iris database scheme](/docs/iris/database-schema/) since working on
class diagrams became complicated without having a solid idea of what exactly
the database will have. The database schema is mostly finalized.

Carlos took time to research how to implement Patient
Reported Outcomes (PROs) into the database and decided to use
[PROMIS](https://www.healthmeasures.net/explore-measurement-systems/promis).

Ayush and Jason worked on creating a dummy database to see how effective our
schema is.

Carlos and Jesse worked on a
[flowchart diagram for the Symposium](/docs/iris/flowcharts).

### Engineering

While Joseph and Meadow continue on the CAD modeling of the Palliaview, Kris
highlighted key problems that we needed to address in the mounting system.

Additionally, parts were able to be purchased with an estimated arrival of
May 1, 2024. Any additional parts such as fastener and thread inserts are still
need for purchase.

The following are still underway.

- [ ] Finite Element Analysis (FEA)
- [ ] Computer-Aided Drawings (CAD)
- [ ] Electrical Diagrams
- [ ] Engineering Reports

## April 25, 2024

| General Information |                                                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Teams Present       | Developers, Engineering                                                                                                 |
| Members Present     | Carlos Valdez, Joseph Sweatt, Ayush Jain, Jesse David, Meadow Rubalcava, Mark S. Baldwin, Kristopher Doan, Jason Martin |
| Meeting Time        | 12:00 PM - 3:00 PM                                                                                                      |
| Report Author(s)    | Carlos Valdez, Joseph Sweatt                                                                                            |
| Location            | Undergraduate Research Lab @ Donald Bren Hall                                                                           |

### Research Advisor Meeting

Engineering requested things to be bought for the prototype. The professor
bought the required hardware during the meeting.

Developers explained the prototype we're trying to program, which is a text
notification every time a medication is logged. We also explained that the
open-source accessibility tools we're looking into are either not updated
anymore or require more research.

We spoke about the Symposium and the abstract we wrote. We don't need to add
the open-source tools we're using in the abstract, though it's a good idea to
mention them in our poster, potentially with a QR code. We also clarified that
we're using the open-source AAC tools, and improving upon those tools is not the
focus of this project; therefore, it's not needed to add it in the abstract.

:::note

The website has a `/qr/` path we should use to ensure there's no broken links.
[Check the GitHub repository for how it works](https://github.com/ojosproject/website/blob/main/src/pages/qr.tsx).

:::

### Developers

Developers continued to work on C4 models. We near finalized the component
diagram, though they're going to look into it more. We also started working on
class diagrams and noticed the diagrams became a bit too messy. We're going to
work on a SQL schema before continuing with the class diagrams.

We will also start a new iteration of the requirements.

### Engineering

The Engineers continues with our digital modeling of the first prototype.
Additionally, we managed to classify our kiosk name to work in tandem with our
IRIS Software. For now the Kiosk will now be name the Palliaview.

Furthermore, We began to make a checklist of future reports and illustrations
needed to be produced:

- [ ] Finite Element Analysis (FEA)
- [ ] Computer-Aided Drawings (CAD)
- [ ] Electrical Diagrams
- [ ] Engineering Reports

## April 24, 2024

| General Information |                                                                         |
| ------------------- | ----------------------------------------------------------------------- |
| Teams Present       | Developers, Engineering                                                 |
| Members Present     | Carlos Valdez, Joseph Sweatt, Ayush Jain, Meadow Rubalcava, Jesse David |
| Meeting Time        | 12:00 PM - 3:00 PM                                                      |
| Report Author(s)    | Carlos Valdez, Joseph Sweatt                                            |
| Location            | Undergraduate Research Lab @ Donald Bren Hall                           |

### Developers

The Developers worked on the C4 Model more, creating a rough draft of the
Container Diagram and the Component Diagram, both of which will be found in the
[C4 Model page](/docs/iris/c4-model).

The Developers have also agreed to develop a mobile app for Iris written in
[React Native](https://reactnative.dev/) to keep only one extra codebase. This
app would be available for iOS, Android, and the Web. It is currently codenamed
"Iris Lite" and is meant to be a read-only version of the Iris data.

The Developers have agreed to meet on Fridays from 12 PM - 4 PM to ensure we
have prototype software for the Symposium.

We have a checklist we have to get done before the Symposium:

- [ ] Finish C4 Model
- [ ] Figma prototypes
- [ ] Learn... (we may decide to choose a different language)
  - [ ] Rust
  - [ ] GNOME ecosystem

### Engineering

Engineering Team has begun the Computer Aided Design Process for two systems for
our Kiosk Device:

- Kiosk Tablet
- Mounting System

Additionally, we have finalized our first shopping list for the prototype we
will be presenting during our [2024 Symposium](/news/symposium-2024/)

## Previous Reports

Before this page, we didn't exactly have "meeting reports". Rather, we just took
attendance in an [internal Google Docs, which you can view here if you have
access](https://docs.google.com/document/d/1aNoTci4Yo663LW_om2WUFohHg6SC70SI3AmMp9x4gc8/).
