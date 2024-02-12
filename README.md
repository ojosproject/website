# ojos.calejvaldez.com

![The Ojos Project header](res/header.png)

Welcome to the repository for the Ojos Project's website.

## Developer Guide

This website uses the following technologies:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://typescriptlang.org/)
- [Sass](https://sass-lang.com/)

To start developing the website, install the dependencies with `npm`.

```bash
npm i
```

Once dependencies are installed, you need to compile Sass into CSS. You can do so (continuously) by using this command:

```bash
sass --watch src/styles:src/styles
```

Then, you get another terminal and run this to begin the development environment:

```bash
npm run dev
```

... or, you can also use [the debug tool in VS Code](https://code.visualstudio.com/docs/editor/debugging).

## Contributing

First thing's first: **please do not work directly on the `main` branch!** This is the structure we're following:

|branch|description|
|---|---|
|`main`|The [live](https://ojos.calejvaldez.com) branch|
|`dev`|Includes all code that is not quite ready for `main`. [Also used for testing](https://dev-ojosproject.onrender.com/).|
|Everything else|This is your branch! Have it be descriptive, and create a Merge Request upon completion. Read more below.|

In the "Everything else" branch, you will add your work and create a Merge Request. Once you finish your work, we will merge it into `dev`, where the maintainers will conduct further testing and/or add other people's features too.

Once the website is ready for a new release, the `dev` branch will be merged into the `main` branch.
