# @vangware/vangstyle

![Vangstyle logo](https://i.imgur.com/Y0FMZDv.png)

![NPM Version](https://img.shields.io/npm/v/@vangware/vangstyle.svg?style=flat-square)
![License](https://img.shields.io/npm/l/@vangware/vangstyle?style=flat-square)
![Open Issues](https://img.shields.io/github/issues/vangware/vangstyle?style=flat-square)

[Vangware](https://vangware.com) shared styles, linting and formatting.

## Configurations

- [.editorconfig](https://editorconfig.org/): Editor formatting.
- [.eslintrc.js](https://eslint.org/): JS/TS linting.
- [.gitignore](https://gitignore.io/): Commonly ignored files and directories for git.
- [.prettierrc.js](https://prettier.io/): Code beautify.
- [.stylelintrc.js](https://stylelint.io/): CSS linting.

## Installation

`pnpm` or `yarn` can be used instead of `npm`.

### Main installation

```bash
npm i -D @vangware/vangstyle
```

### Peer dependency installation

Run `vgs` or `vangstyle` and select "Add dependencies to package.json":

```bash
npx vgs
# or
npx vangstyle
```

After that, `install` needs to be run:

```bash
npm i
```

### Manual peer dependency installation

```bash
# Required peer dependencies:
npm i -D prettier

# TypeScript peer dependencies:
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-node eslint-plugin-ban eslint-plugin-functional eslint-plugin-import eslint-plugin-no-null eslint-plugin-prefer-arrow eslint-plugin-prettier

# CSS peer dependencies:
npm i -D stylelint stylelint-config-prettier stylelint-order stylelint-prettier
```

### Copy configurations

Run `vgs` or `vangstyle` and select "Copy configuration files":

```bash
npx vgs
# or
npx vangstyle
```
