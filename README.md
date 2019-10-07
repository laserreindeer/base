# @vangware/vangstyle

![Vangstyle logo](https://i.imgur.com/Y0FMZDv.png)

[Vangware](https://vangware.com) shared styles, linting and formating.

## Content

- Editorconfig configuration.
- GitIgnore configuration.
- Prettier configuration.
- Stylelint configuration.
- TSLint configuration.

## Copy `.editorconfig`, `.gitignore` and `.prettierignore`

```sh
cp ./node_modules/@vangware/vangstyle/.{editorconfig,gitignore,prettierignore} .
```

## Install development dependencies

### Full

```bash
npm i -D prettier @types/prettier stylelint @types/stylelint stylelint-prettier stylelint-config-prettier stylelint-order tslib tslint tslint-config-prettier
```

```js
// prettier.config.js
module.exports = require("@vangware/vangstyle").prettierConfig;

// stylelint.config.js
module.exports = require("@vangware/vangstyle").stylelintConfig;
```

```json
// tslint.json
{
  "extends": "@vangware/vangstyle/tslint"
}
```

### TypeScript only

```bash
npm i -D prettier @types/prettier tslib tslint tslint-config-prettier
```

```js
// prettier.config.js
module.exports = require("@vangware/vangstyle").prettierConfig;
```

```json
// tslint.json
{
  "extends": "@vangware/vangstyle/tslint"
}
```

### Without TypeScript

```bash
npm i -D prettier @types/prettier stylelint @types/stylelint stylelint-prettier stylelint-config-prettier stylelint-order
```

```js
// prettier.config.js
module.exports = require("@vangware/vangstyle").prettierConfig;

// stylelint.config.js
module.exports = require("@vangware/vangstyle").stylelintConfig;
```
