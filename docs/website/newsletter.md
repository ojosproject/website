---
displayed_sidebar: softwareWebsite
description: >
  Learn about the Newsletter feature here!
last_update:
  date: June 8 2024
  author: Carlos Valdez
---
# Newsletter Information

Ojos Project has a newsletter sent by `newsletter@mail.ojosproject.org`. It is
used to communicate with people who don't want to be checking the website, but
still want to learn about what is happening in the project. This page will go
over some important information regarding the newsletter.

:::warning

We will **only** send content via `newsletter@mail.ojosproject.org`. Please
do not fall for phishing schemes.

:::

## Sending email

We have an unusual way of sending email. We use the
[Mailgun API](https://documentation.mailgun.com/docs/mailgun/api-reference/)
with our own custom [Python script](https://github.com/ojosproject/newsletter/)
to send plaintext email. We do this to (try to) keep things simple, but also
because Carlos doesn't want to research.

The documentation for sending email is in the repository. However, you will not
be able to send email without a valid API key. Only Carlos has that API key.

## Signing up for the newsletter

We created [this nifty tool](/newsletter/) on our website to help you sign up for our
newsletter. Happy reading!
