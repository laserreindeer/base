# @vangware/vangstyle

![Vangstyle logo](https://i.imgur.com/Y0FMZDv.png)

[Vangware](https://vangware.com) shared styles, linting and formating.

## Content

- Editorconfig configuration.
- GitIgnore configuration.
- Prettier configuration.
- Stylelint configuration.
- TSLint configuration.

## Usage

To import `.editorconfig` and `.gitignore` simply run:

```sh
cp ./node_modules/@vangware/vangstyle/.{editorconfig,gitignore} .
```

First install `devDependencies`. You can use `yarn` or `pnpm` too!

```bash
npm i -D prettier @types/prettier stylelint @types/stylelint stylelint-config-standard stylelint-order tslib tslint tslint-config-prettier
```

This module exports `prettierConfig` and `stylelintConfig` to be imported as follows:

```js
// prettier.config.js
module.exports = require("@vangware/vangstyle").prettierConfig;

// stylelint.config.js
module.exports = require("@vangware/vangstyle").stylelintConfig;
```

To import the `TSLint` configs, do as follows:

```json
{
  "extends": "@vangware/vangstyle/tslint"
}
```
