# ojos.calejvaldez.com

![The Ojos Project header](res/header.png)

Welcome to the repository for the Ojos Project's website.

## Transition to Vite

As of the writing of this document, the current website is written in HTML and
CSS. This worked fine at first, [until we had to make a news post and realized
we needed to have a `news` subsection route](https://ojos.calejvaldez.com/news/1706645600/). So, we're transitioning to using the following techologies:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://typescriptlang.org/)
- [Sass](https://sass-lang.com/)

We're doing this so that it can become (somewhat) easier to manage the website.
Since the website is small, I don't think it'll be too big of an effort.

## Developer Guide

To start developing the website, install the dependencies with `npm`.

```bash
npm i
```

Once the dependencies are installed, you can do one of two things. You can use
the terminal to run the command:

```bash
npm run dev
```

You must also open another terminal to watch Sass changes:

```bash
sass --watch src/styles:src/styles
```

... or you can use [the debug tool in VS Code](https://code.visualstudio.com/docs/editor/debugging).
