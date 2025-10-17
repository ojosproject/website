# ojosproject.org

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

### Installing dependencies

If you'd like to make changes to the website, you can! First, you must install
[pnpm](https://pnpm.io/installation). Then run:

```shell
pnpm env use --global vv22.3.0
pnpm i
```

### npm commands

There's four useful commands Docusaurus provides:

| Command      | Description                                      |
| ------------ | ------------------------------------------------ |
| `pnpm start` | Starts the website in development mode           |
| `pnpm clear` | Is something not working? This clears the cache! |
| `pnpm build` | Makes a production-ready version of the website  |
| `pnpm serve` | Starts the website in production mode            |

> [!TIP]
> If you're having issues with Docusaurus, clearing the cache with
> `pnpm clear` may help.

Before pushing, I recommend running
`pnpm clear; pnpm build; pnpm serve`, which runs the three commands in
that order to make sure you don't have any remaining bugs.

## Contributing

You can contribute by
[opening an Issue](https://github.com/ojosproject/website/issues/new/choose)
(after, of course, checking if
[the same issue doesn't already exist](https://github.com/ojosproject/website/issues?q=is%3Aissue))
or providing code.

### Working in this repository

Please don't use the `main` branch. It must always be stable and will only be
merged into. Please create a branch named `issue-x`, where x is the issue number
this branch is for. Then submit a PR.

## Acknowledgements

[Carlos Valdez](https://github.com/calejvaldez) is the maintainer of the
website repository. The website is being maintained by open source contributors
at Ojos Project.

## License

Content: [Creative Commons Attribution 4.0 International](https://choosealicense.com/licenses/cc-by-4.0/)

Code: [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
