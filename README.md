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

## Deploying for Production

To create a production-ready bundle, you must use:

```bash
npm run build
```

This creates the CSS files, runs `tsc`, and asks Vite to build for us.
