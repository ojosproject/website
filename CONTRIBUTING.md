# Developer Guide

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

Please follow the
[Ojos Project git policies](https://docs.ojosproject.org/policies/git).

Once the website is ready for a new release, the `dev` branch will be merged into the `main` branch.
