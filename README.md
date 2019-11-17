# @vangware/vangstyle

![Vangstyle logo](https://i.imgur.com/Y0FMZDv.png)

[Vangware](https://vangware.com) shared styles, linting and formating.

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
pnpm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-ban eslint-plugin-import eslint-plugin-no-null eslint-plugin-prefer-arrow eslint-plugin-prettier

# CSS peer dependencies:
pnpm i -D stylelint stylelint-config-prettier stylelint-order stylelint-prettier
```

## Copy files (pnpx, yarn or npx can be used)

Both `vgs` and `vangstyle` commands can be used

```sh
pnpx vgs all # Copy everything
pnpx vgs editorconfig # Copy .editorconfig
pnpx vgs eslint # Copy .eslintrc.js
pnpx vgs gitignore # Copy .gitignore
pnpx vgs prettier # Copy .prettierrc.js and .prettierignore
pnpx vgs stylelint # Copy .stylelintrc.js
```

## Future improvements

Add `vgs init` to create a base project.
