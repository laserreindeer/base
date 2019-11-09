# @vangware/vangstyle

![Vangstyle logo](https://i.imgur.com/Y0FMZDv.png)

[Vangware](https://vangware.com) shared styles, linting and formating.

## Content

- Editorconfig configuration.
- GitIgnore configuration.
- Prettier configuration.
- Stylelint configuration.
- TSLint configuration.

## Copy files

```sh
npx vangstyle dot prettier stylelint tslint # Copy everything
npx vangstyle dot # Copy dot files
npx vangstyle prettier # Copy prettier config
npx vangstyle stylelint # Copy stylelint config
npx vangstyle tslint # Copy tslint config
```

## Install development dependencies

### Full

```bash
npm i -D prettier @types/prettier stylelint @types/stylelint stylelint-prettier stylelint-config-prettier stylelint-order tslib tslint tslint-config-prettier
```

### TypeScript only

```bash
npm i -D prettier @types/prettier tslib tslint tslint-config-prettier
```

### Without TypeScript

```bash
npm i -D prettier @types/prettier stylelint @types/stylelint stylelint-prettier stylelint-config-prettier stylelint-order
```
