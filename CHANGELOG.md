# Change log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).
This project uses [Gitmoji](https://gitmoji.carloscuesta.me/)

## 4.4.1

- :arrow_up: dependency upgrade.

## 4.4.0

- :arrow_up: dependency upgrade.
- :wrench: Change `@typescript-eslint/array-type` config from `"array"` to `"generic"`.
- :building_construction: update the code matching the new linting.

## 4.3.7

- :arrow_up: dependency upgrade.

## 4.3.6

- :arrow_up: dependency upgrade.

## 4.3.5

- :arrow_up: dependency upgrade.

## 4.3.4

- :arrow_up: dependency upgrade.

## 4.3.3

- :arrow_up: dependency upgrade.

## 4.3.2

- :arrow_up: dependency upgrade.
- :wrench: `husky` is now locked to version 4 until the configuration for the current version is better.

## 4.3.1

- :arrow_up: dependency upgrade.
- :wrench: update `tsconfig.json`.

## 4.3.0

- :arrow_up: dependency upgrade.
- :wrench: eslint now checks `.mjs` and `.cjs` files.

## 4.2.7

- :arrow_up: dependency upgrade.

## 4.2.6

- :arrow_up: dependency upgrade.

## 4.2.5

- :arrow_up: dependency upgrade.
- :wrench: add new string and Date rules.

## 4.2.4

- :arrow_up: dependency upgrade.
- :wrench: update eslint configuration with `max-params` rule.

## 4.2.3

- :arrow_up: dependency upgrade.

## 4.2.2

- :arrow_up: dependency upgrade.

## 4.2.1

- :arrow_up: dependency upgrade.
- :wrench: update eslint configuration.

## 4.2.0

- :truck: rename dot files to start with an underscore.

## 4.1.11

- :arrow_up: dependency upgrade.

## 4.1.10

- :arrow_up: dependency upgrade.

## 4.1.9

- :arrow_up: dependency upgrade.

## 4.1.8

- :wrench: update package.json adding `postpublish`.

## 4.1.7

- :arrow_up: dependency upgrade.

## 4.1.6

- :arrow_up: dependency upgrade.

## 4.1.5

- :arrow_up: dependency upgrade.

## 4.1.4

- :wrench: update `@typescript-eslint/quotes` config to behave better with prettier.

## 4.1.3

- :arrow_up: dependency upgrade.

## 4.1.2

- :arrow_up: dependency upgrade.

## 4.1.1

- :arrow_up: dependency upgrade.
- :pencil2: update README.md description and added package.json tags.

## 4.1.0

- :arrow_up: dependency upgrade.
- :truck: move configuration scripts to their own directory.
- :memo: formatted better some JSDocs.

## 4.0.0

- :building_construction: change command from `vangware` to `@vangware/base`.
- :building_construction: `@vangware/base` can be ran without installing it first.

## 3.0.4

- :arrow_up: dependency upgrade.

## 3.0.3

- :arrow_up: dependency upgrade.

## 3.0.2

- :construction_worker: add GitHub Actions when installing git configurations.

## 3.0.1

- :label: update typed imports to be `import type { ...`.

## 3.0.0

- :arrow_up: dependency upgrade.
- :heavy_minus_sign: remove `@vangware/forcli` so this is truly "base".
- :fire: removed ASCII logo.
- :fire: removed esm prettifier.

## 2.2.8

- :arrow_up: dependency upgrade.

## 2.2.7

- :arrow_up: dependency upgrade.

## 2.2.6

- :arrow_up: dependency upgrade.

## 2.2.5

- :bug: fix bug with `files` field in `package.json`.

## 2.2.4

- :arrow_up: dependency upgrade.

## 2.2.3

- :arrow_up: dependency upgrade.
- :poop: trying if I can publish something with a non-existent version (yet).

## 2.2.2

- :arrow_up: dependency upgrade.

## 2.2.1

- :arrow_up: dependency upgrade.

## 2.2.0

- :building_construction: update `devDependencies` injection to be sorted.

## 2.1.2

- :arrow_up: dependency upgrade.

## 2.1.1

- :arrow_up: dependency upgrade.

## 2.1.0

- :sparkles: added new "Documents" option.

## 2.0.6

- :bug: fix issue with race condition while writing to `package.json`.
- :arrow_up: dependency upgrade.

## 2.0.5

- :arrow_up: dependency upgrade.
- :art: the logo now looks green thanks to `@vangware/forcli`.

## 2.0.4

- :pencil2: fix remaining master references.

## 2.0.3

- :arrow_up: dependency upgrade.
- :pencil2: fix README.md title for vangware command.

## 2.0.2

- :arrow_up: dependency upgrade.

## 2.0.1

- :arrow_up: dependency upgrade.
- :art: update logo.

## 2.0.0

- :arrow_up: major dependency upgrade (new TS version!).

## 1.0.14

- :arrow_up: dependency upgrade.

## 1.0.13

- :arrow_up: dependency upgrade.
- :art: initial improvements to bin scripts.

## 1.0.12

- :arrow_up: dependency upgrade.

## 1.0.11

- :wrench: change `max-len` config to ignore long imports.

## 1.0.10

- :arrow_up: dependency upgrade.

## 1.0.9

- :arrow_up: dependency upgrade.
- :wrench: update `package.json` to run linter and pre-compile on commit.

## 1.0.8

- :arrow_up: dependency upgrade.

## 1.0.7

- :arrow_up: dependency upgrade.

## 1.0.6

- :bug: fix inconsistency between prettier and eslint (`space-before-function-paren`).

## 1.0.5

- :arrow_up: dependency upgrade.

## 1.0.4

- :arrow_up: dependency upgrade.

## 1.0.2

- :arrow_up: dependency upgrade.
- :memo: update README.md badges.

## 1.0.1

- :building_construction: because now we have a script to install peer dependencies, they are no longer enforced by package.json.

## 1.0.0

- :truck: rename package from `@vangware/vangstyle` to `@vangware/base`.
- :bookmark: version reset due to name change.
- :truck: rename package from `vgs`/`vangstyle` command to `vangware`.
- :memo: update `README.md` with new logo and data.

## 4.4.4 (deprecated @vangware/vangstyle)

- :bug: fix `prettify-esm` to affect multi line imports/exports.

## 4.4.3 (deprecated @vangware/vangstyle)

- :bug: fix `prettify-esm` to only affect relative paths.

## 4.4.2 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 4.4.1 (deprecated @vangware/vangstyle)

- :sparkles: Add temporary new `prettify-esm` bin, to add `.js` to esm files imports and exports.
- :bookmark: version bump.

## 4.4.0 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.
- :sparkles: add generic strict tsconfig.json.
- :memo: update `README.md`.
- :fire: inquirer.
- :heavy_plus_sign: add prompts.

## 4.3.10 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 4.3.9 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :sparkles: add logo (and exported it because why not?).

## 4.3.8 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 4.3.7 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :alien: disabled `@typescript-eslint/explicit-module-boundary-types`.

## 4.3.6 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :alien: removed some seemingly deprecated rules from `@typescript-eslint`.

## 4.3.5 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 4.3.4 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 4.3.3 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 4.3.2 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 4.3.1 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :memo: update `README.md` to be more informative.
- :arrow_up: dependency upgrade.

## 4.3.0 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :sparkles: add new option to include peer dependencies in current project.
- :bug: Fixed bug in installation of Prettier.

## 4.2.1 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :arrow_up: dependency upgrade.

## 4.2.0 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :building_construction: changed the code completely for `vgs`/`vangstyle`.
- :memo: update README.md.
- :sparkles: add CLI UI to make installation easier.
- :wrench: update "id-length" rule to allow _ only (to be used when parameters are needed).

## 4.1.0 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :building_construction: change some imports to typed imports.
- :truck: rename internal dot files to not include a dot.
- :building_construction: added "id-length" rule.

## 4.0.14 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 4.0.13 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 4.0.12 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :wrench: removed `toString` ban (when used with numbers, is kinda useful).

## 4.0.11 (deprecated @vangware/vangstyle)

- :heavy_plus_sign: add `eslint-import-resolver-node`.
- :bookmark: version bump.
- :memo: update README.md.

## 4.0.10 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :page_facing_up: update license.

## 4.0.9 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 4.0.8 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :arrow_up: Updated peerDependencies.
- :bookmark: version bump.

## 4.0.7 (deprecated @vangware/vangstyle)

- :arrow_up: Updated peerDependencies.
- :bookmark: version bump.

## 4.0.6 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :memo: add CHANGELOG.md.
- :wrench: update .eslintrc so it ignores i, j, k.

## 4.0.5 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 4.0.3 (deprecated @vangware/vangstyle)

- :ambulance: update peerDependencies (they should update automatically).
- :sparkles: add peer script to update peerDependencies.

## 4.0.2 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 4.0.1 (deprecated @vangware/vangstyle)

- :memo: update README.md to include new dependency.
- :bookmark: version bump.

## 4.0.0 (deprecated @vangware/vangstyle)

- :heavy_plus_sign: add eslint-plugin-functional.
- :arrow_up: dependency upgrade.
- :bookmark: version bump.

## 3.1.2 (deprecated @vangware/vangstyle)

- :art: improve max-len to ignore RegExp (generally really long).

## 3.1.1 (deprecated @vangware/vangstyle)

- :wrench: update eslint config to ignore max-len of eslint-ignore comments.
- :bookmark: version bump.

## 3.1.0 (deprecated @vangware/vangstyle)

- :sparkles: add esm back.
- :bug: fix vangstyle internal eslint and prettier config.
- :bookmark: version bump.

## 3.0.3 (deprecated @vangware/vangstyle)

- :page_facing_up: add license.
- :memo: update README.md to include badges.
- :bookmark: version bump.

## 3.0.2 (deprecated @vangware/vangstyle)

- :bookmark: version bump.
- :building_construction: change so indent is taken care of by prettier.
- :fire: remove some rules for identifiers such as any and _.

## 3.0.1 (deprecated @vangware/vangstyle)

- :bookmark: version 3.0.1
- :fire: remove no-magic-numbers (proved to be more annoying than useful)
- :fire: turned "no-undef" off (TypeScript takes care of that)

## 3.0.0 (deprecated @vangware/vangstyle)

- :bookmark: Version bump (3.0.0) with breaking changes.
- :building_construction: change TSLint to ESLint.
- :building_construction: change installation script (vangstyle).
- :sparkles: add vgs alias for vangstyle.
- :building_construction: change dependencies.
- :building_construction: no longer builds esm, just cjs.
- :sparkles: add configs directory.

## 2.0.0 (deprecated @vangware/vangstyle)

- :sparkles: add vangstyle command to ease installs.
- :arrow_up: dependency upgrade.
- :heavy_plus_sign: add minimist.
- :bookmark: version bump.
- :building_construction: change TSLint to be less strict.

## 1.4.5 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.

## 1.4.4 (deprecated @vangware/vangstyle)

- :arrow_up: upgrade lock files.
- :bookmark: version bump.

## 1.4.3 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :bookmark: version bump.
- :heavy_minus_sign: remove unwanted lodash dependency (idk when I even added that and why).

## 1.4.2 (deprecated @vangware/vangstyle)

- :arrow_up: upgrade dependencies.
- :memo: update README.md

## 1.4.1 (deprecated @vangware/vangstyle)

- :arrow_up: dependency upgrade.
- :clock3: temporary security fix (added lodash to devDependencies).

## 1.4.0 (deprecated @vangware/vangstyle)

- :building_construction: change stylelint to match prettier.
- :memo: better README.md.

## 1.3.1 (deprecated @vangware/vangstyle)

- :memo: improve further the README.md.
- :truck: move dependencies to devDependencies.

## 1.3.0 (deprecated @vangware/vangstyle)

- :bug: fix missing files.
- :memo: update README.md.
- :bookmark: version bump.

## 1.2.1 (deprecated @vangware/vangstyle)

- :fire: remove cjs and esm directories (unnecessary in git).
- :arrow_up: upgrade dependencies.
- :memo: document better the imports on a new "Usage" section on the README.
- :sparkles: add .npmignore.

## 1.2.0 (deprecated @vangware/vangstyle)

- :package: add ESM module support.
- :package: add CJS module support.

## 1.1.0 (deprecated @vangware/vangstyle)

- :sparkles: add Styleling config.

## 1.0.1 (deprecated @vangware/vangstyle)

- :arrow_up: updated dependencies.
- :wrench: update tslint.json to take prettier into consideration.

## 1.0.0 (deprecated @vangware/vangstyle)

- :sparkles: Initial commit.
