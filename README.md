# ojosproject.org: Home to Ojos Project, Iris, Palliaview, and more

![The Ojos Project header](https://ojosproject.org/images/header.png)

## Table of Contents

- [ojosproject.org: Home to Ojos Project, Iris, Palliaview, and more](#ojosprojectorg-home-to-ojos-project-iris-palliaview-and-more)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
    - [Features](#features)
  - [Getting Started](#getting-started)
    - [Installing dependencies](#installing-dependencies)
    - [npm commands](#npm-commands)
  - [Contributing](#contributing)
    - [Branching](#branching)
  - [License](#license)

## Description

Welcome to the repository for [ojosproject.org](https://ojosproject.org), Ojos
Project's home on the Internet! This contains the source code for our website.

Our website is built using [Docusaurus](https://docusaurus.io/), the
documentation website builder.

### Features

Thanks to Docusaurus, we use three of its features on our website:

- [Blogging](https://docusaurus.io/docs/blog), which is displayed on the
  `/news/` path
- [Documentation](https://docusaurus.io/docs/docs-introduction), which is
  displayed on the `/docs/` path
- [Any other pages](https://docusaurus.io/docs/creating-pages) we'd want to
  create using React

## Getting Started

> [!IMPORTANT]
> Please make sure to follow the
> [Ojos Project `git` policies](https://ojosproject.org/docs/policies/git/)

### Installing dependencies

If you'd like to make changes to the website, you can! First, you'll have to
install the dependencies with npm:

```shell
npm i
```

### npm commands

There's four useful commands Docusaurus provides:

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run start` | Starts the website in development mode           |
| `npm run clear` | Is something not working? This clears the cache! |
| `npm run build` | Makes a production-ready version of the website  |
| `npm run serve` | Starts the website in production mode            |

> [!TIP]
> If you're having issues with Docusaurus, clearing the cache with
> `npm run clear` may help.

Before pushing, I recommend running
`npm run clear; npm run build; npm run serve`, which runs the three commands in
that order to make sure you don't have any remaining bugs.

## Contributing

You can contribute by
[opening an Issue](https://github.com/ojosproject/website/issues/new/choose)
(after, of course, checking if
[the same issue doesn't already exist](https://github.com/ojosproject/website/issues?q=is%3Aissue))
or providing code.

### Branching

Please don't use the `main` branch. It must always be stable and will only be
merged into.

If you're a
[member of the Ojos Project GitHub organization](https://github.com/orgs/ojosproject/people),
please commit quick changes to `dev`. Otherwise, create a branch with any name.
Then open a Pull Request pointing to `dev`.

If you're not a member, please create a fork copy of `dev`, commit your changes,
and open a Pull Request pointing to `dev`.

## License

Content: [Creative Commons Attribution 4.0 International](https://choosealicense.com/licenses/cc-by-4.0/)

Code: [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
