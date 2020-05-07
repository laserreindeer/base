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

## Installation (pnpm, yarn or npm can be used)

```bash
# Main installation:
pnpm i -D @vangware/vangstyle

# Shared peer dependencies:
pnpm i -D prettier

# TypeScript peer dependencies:
pnpm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-node eslint-plugin-ban eslint-plugin-functional eslint-plugin-import eslint-plugin-no-null eslint-plugin-prefer-arrow eslint-plugin-prettier

# CSS peer dependencies:
pnpm i -D stylelint stylelint-config-prettier stylelint-order stylelint-prettier
```

## Copy files (pnpx, yarn or npx can be used)

Both `vgs` and `vangstyle` commands can be used

```sh
pnpx vgs # Opens the CLI UI and lets you choose what to install.
pnpx vangstyle # Alias of the above command.
```

## Future improvements

Make the CLI UI install above mentioned dependencies.
