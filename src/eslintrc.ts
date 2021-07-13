/* eslint-disable max-lines */

import type { Linter } from "eslint";

/**
 * ESLint configuration.
 */
export const eslint: Linter.Config = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"prettier/prettier"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		extraFileExtensions: [".cjs", ".mjs"],
		project: "tsconfig.json",
		sourceType: "module"
	},
	plugins: [
		"@typescript-eslint",
		"eslint-plugin-ban",
		"eslint-plugin-import",
		"eslint-plugin-no-null",
		"eslint-plugin-prefer-arrow",
		"react"
	],
	rules: {
		// Grouping overloaded members together to improve readability.
		"@typescript-eslint/adjacent-overload-signatures": "error",
		// Consistent array types using generics `Array` and `ReadonlyArray`.
		"@typescript-eslint/array-type": [
			"error",
			{
				default: "generic"
			}
		],
		// Avoid await on non thenable values.
		"@typescript-eslint/await-thenable": "error",
		// @ts-comment rules.
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{
				// No limitations for @ts-check.
				"ts-check": false,
				// Requires description for @ts-expect-error.
				"ts-expect-error": "allow-with-description",
				// Disables @ts-ignore & @ts-nocheck.
				"ts-ignore": true,
				"ts-nocheck": true
			}
		],
		// Avoid TSLint comments when we are using ESLint.
		"@typescript-eslint/ban-tslint-comment": "error",
		// Ban some unwanted types.
		"@typescript-eslint/ban-types": [
			"error",
			{
				types: {
					Boolean: {
						fixWith: "boolean",
						message: "Use `boolean` instead."
					},
					Function: {
						fixWith:
							"(..._arguments: ReadonlyArray<never>) => unknown",
						message: "Use a typed alternative instead."
					},
					Number: {
						fixWith: "number",
						message: "Use `number` instead."
					},
					Object: {
						fixWith: "Record<PropertyKey, unknown>",
						message: "Use a typed Record instead."
					},
					String: {
						fixWith: "string",
						message: "Use `string` instead."
					},
					Symbol: {
						fixWith: "symbol",
						message: "Use `symbol` instead."
					},
					object: {
						fixWith: "Record<PropertyKey, unknown>",
						message: "Use a typed Record instead."
					},
					"{}": {
						fixWith: "Record<PropertyKey, unknown>",
						message: "Use a typed Record instead."
					}
				}
			}
		],
		// Disables trailing commas.
		"@typescript-eslint/comma-dangle": ["error", "never"],
		// Use `Record` instead of index signature.
		"@typescript-eslint/consistent-indexed-object-style": [
			"error",
			"record"
		],
		// Use `as` assertion.
		"@typescript-eslint/consistent-type-assertions": [
			"error",
			{
				assertionStyle: "as",
				objectLiteralTypeAssertions: "allow"
			}
		],
		// Use `type` for type definitions (instead of interfaces).
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		// Enforce "typed imports".
		"@typescript-eslint/consistent-type-imports": "error",
		// Enforce dot.notation instead of square["bracket"]["notation"].
		"@typescript-eslint/dot-notation": "error",
		// Let's use the power of inference.
		"@typescript-eslint/explicit-function-return-type": "off",
		// When working with classes, let's be explicit about accessibility.
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "explicit",
				overrides: {
					accessors: "explicit",
					constructors: "explicit"
				}
			}
		],
		// Let's use the power of inference.
		"@typescript-eslint/explicit-module-boundary-types": "off",
		// Prettier takes care of this.
		"@typescript-eslint/indent": "off",
		// Don't declare stuff without giving it a value.
		"@typescript-eslint/init-declarations": "error",
		// Prettier should take care of this, but just in case.
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true
				},
				singleline: {
					delimiter: "semi",
					requireLast: false
				}
			}
		],
		// If we work with classes, let's make sure they are tidy.
		"@typescript-eslint/member-ordering": "error",
		// Classes? Well, let's make those methods look like arrow functions.
		"@typescript-eslint/method-signature-style": ["error", "property"],
		// Consistent naming.
		"@typescript-eslint/naming-convention": [
			"error",
			{
				format: ["camelCase"],
				leadingUnderscore: "allow",
				selector: "default",
				trailingUnderscore: "forbid"
			},
			{
				format: ["camelCase", "PascalCase", "UPPER_CASE"],
				selector: [
					"objectLiteralProperty",
					"typeMethod",
					"typeProperty",
					"variable"
				]
			},
			{
				format: ["PascalCase"],
				leadingUnderscore: "forbid",
				selector: "typeLike"
			}
		],
		// Just use `[]`.
		"@typescript-eslint/no-array-constructor": "error",
		// Avoid `.toString()` without a useful return type.
		"@typescript-eslint/no-base-to-string": "error",
		// If working with classes, let's avoid duplicated members.
		"@typescript-eslint/no-dupe-class-members": "error",
		// Avoid duplicated imports.
		"@typescript-eslint/no-duplicate-imports": "error",
		// Avoid `delete` of dynamic properties.
		"@typescript-eslint/no-dynamic-delete": "error",
		// Avoid confusing `() => {}`.
		"@typescript-eslint/no-empty-function": "error",
		// An empty interface is useless.
		"@typescript-eslint/no-empty-interface": "error",
		// `any` is EVIL™
		"@typescript-eslint/no-explicit-any": "error",
		// A class with all statics can be turned into an object.
		"@typescript-eslint/no-extraneous-class": "error",
		// Let's avoid floating (unhandled) promises.
		"@typescript-eslint/no-floating-promises": "error",
		// Use `for/of`, or better yet `map` or `forEach`.
		"@typescript-eslint/no-for-in-array": "error",
		// `try/catch` ideally should have a `catch` argument of type `unknown`.
		"@typescript-eslint/no-implicit-any-catch": "error",
		// This is super insecure, avoid it at all costs.
		"@typescript-eslint/no-implied-eval": "error",
		// Inference is beautiful.
		"@typescript-eslint/no-inferrable-types": "off",
		// Avoid using `this` outside a class.
		"@typescript-eslint/no-invalid-this": "off",
		// Avoid `void` for types, use `undefine` instead.
		"@typescript-eslint/no-invalid-void-type": "off",
		// Avoid defining functions inside loops.
		"@typescript-eslint/no-loop-func": "off",
		// Avoid loss of precision in numbers at runtime.
		"@typescript-eslint/no-loss-of-precision": "off",
		// Avoid missuses of the `new` declaration.
		"@typescript-eslint/no-misused-new": "error",
		// Avoid missuses of promises.
		"@typescript-eslint/no-misused-promises": "error",
		// Old TS.
		"@typescript-eslint/no-namespace": "error",
		// Avoid null assertion
		"@typescript-eslint/no-non-null-assertion": "error",
		// Handy in TS, confusing for everyone else.
		"@typescript-eslint/no-parameter-properties": "error",
		// Avoid re-declaration of a value.
		"@typescript-eslint/no-redeclare": "error",
		// Use ES imports.
		"@typescript-eslint/no-require-imports": "error",
		// Avoid name shadowing.
		"@typescript-eslint/no-shadow": [
			"error",
			{
				allow: ["_"],
				hoist: "all"
			}
		],
		// Just use arrow functions, _this/that aliases are no longer needed.
		"@typescript-eslint/no-this-alias": "error",
		// Throw errors, not literals.
		"@typescript-eslint/no-throw-literal": "error",
		// If it's a `boolean`, use it as such.
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		// Avoid conditions with values that can't be falsy.
		"@typescript-eslint/no-unnecessary-condition": "error",
		// If the type assertion is the same, skip it.
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		// Don't assert something that doesn't need assertion.
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		// Don't do `extends any` or `extends unknown`. That's the default.
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		// Disallows calling an function with an `any` type value.
		"@typescript-eslint/no-unsafe-argument": "error",
		// Avoid `any` assignments.
		"@typescript-eslint/no-unsafe-assignment": "error",
		// Avoid calling `any`.
		"@typescript-eslint/no-unsafe-call": "error",
		// Avoid accessing `any` members.
		"@typescript-eslint/no-unsafe-member-access": "error",
		// Avoid returning `any`.
		"@typescript-eslint/no-unsafe-return": "error",
		// Don't just leave expressions lying around! Use them!
		"@typescript-eslint/no-unused-expressions": "error",
		// TS already takes care of this.
		"@typescript-eslint/no-unused-vars": "off",
		// Avoid using something before is defined.
		"@typescript-eslint/no-use-before-define": "error",
		// When working with classes, let's not define useless constructors.
		"@typescript-eslint/no-useless-constructor": "error",
		// Use ES imports!
		"@typescript-eslint/no-var-requires": "error",
		// Use `as const` instead of writing `Readonly<Type>`.
		"@typescript-eslint/prefer-as-const": "error",
		// If you'll use a `for` loop on an array, use `for/of`.
		"@typescript-eslint/prefer-for-of": "error",
		// Cleaner than the alternative.
		"@typescript-eslint/prefer-function-type": "error",
		// Avoid `indexOf` and use `includes` instead.
		"@typescript-eslint/prefer-includes": "error",
		// Use `namespace` instead of `module` (old TS).
		"@typescript-eslint/prefer-namespace-keyword": "error",
		// Use `??` instead of a ternary.
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		// Use `?.` instead of checking every property.
		"@typescript-eslint/prefer-optional-chain": "error",
		// In classes, private members should be read only.
		"@typescript-eslint/prefer-readonly": "error",
		// Immutability for the win!
		"@typescript-eslint/prefer-readonly-parameter-types": [
			"error",
			{ ignoreInferredTypes: true }
		],
		// Use `startsWith` and `endsWith` instead of the string index.
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		// Use `@ts-expect-error` instead of `@ts-ignore`.
		"@typescript-eslint/prefer-ts-expect-error": "error",
		// Enforce quotes style (should be handled by Prettier).
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{ allowTemplateLiterals: true, avoidEscape: false }
		],
		// Always use `Array.prototype.sort` with a comparing function.
		"@typescript-eslint/require-array-sort-compare": "error",
		// Use `await` if you are using `async`.
		"@typescript-eslint/require-await": "error",
		// Use `+` with the same type (`number` or `string`).
		"@typescript-eslint/restrict-plus-operands": [
			"error",
			{ checkCompoundAssignments: true }
		],
		// Only use strings or numbers inside template expressions.
		"@typescript-eslint/restrict-template-expressions": [
			"error",
			{
				allowNumber: true
			}
		],
		// Enforce consistent use of semicolons after statements.
		"@typescript-eslint/semi": ["error", "always"],
		// Consistent sorting of intersections and unions.
		"@typescript-eslint/sort-type-union-intersection-members": "error",
		// Consistent spacing of function parens (Prettier should do this).
		"@typescript-eslint/space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				asyncArrow: "always",
				named: "never"
			}
		],
		// Comparisons should be applied to booleans only (not falsy/truthy).
		"@typescript-eslint/strict-boolean-expressions": "error",
		// If you'll use switch, make sure to cover every possible value.
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		// Old TS.
		"@typescript-eslint/triple-slash-reference": "error",
		// Spacing with types (should be handled by Prettier).
		"@typescript-eslint/type-annotation-spacing": "error",
		// Bind stuff before using it.
		"@typescript-eslint/unbound-method": "error",
		// Unify signatures instead of overloading.
		"@typescript-eslint/unified-signatures": "error",
		// Makes sure you return from mapping functions.
		"array-callback-return": "error",
		// Only use braces in arrow functions when needed.
		"arrow-body-style": ["error", "as-needed"],
		// Only use parens in arrow functions when needed.
		"arrow-parens": ["error", "as-needed"],
		// This plugin gives false positives (it doesn't have type information).
		"ban/ban": [
			"warn",
			// Array
			{
				message: "Use `[item1, itemN]` instead.",
				name: ["*", "of"]
			},
			{
				message: "Use `Array.prototype.slice` and spread instead.",
				name: ["*", "copyWithin"]
			},
			{
				message: "Use `Array.prototype.map` instead.",
				name: ["*", "fill"]
			},
			{
				message: "Use `Array.prototype.map` instead.",
				name: ["*", "forEach"]
			},
			{
				message:
					"Use `Object.entries` and `Array.prototype.map` instead.",
				name: ["*", "keys"]
			},
			{
				message: "Use `Array.prototype.slice` instead.",
				name: ["*", "pop"]
			},
			{
				message: "Use spread instead `[...array, item]`.",
				name: ["*", "push"]
			},
			{
				message: "Use `Array.prototype.slice` instead.",
				name: ["*", "shift"]
			},
			{
				message: "Use `Array.prototype.slice` instead.",
				name: ["*", "splice"]
			},
			{
				message: "Use spread instead `[item, ...array]`.",
				name: ["*", "unshift"]
			},
			{
				message: "Use `Array.prototype.map` instead.",
				name: ["*", "values"]
			},
			// Function
			{
				message:
					"Call the function directly. Use spread for arguments.",
				name: ["*", "apply"]
			},
			{
				message: "Make a curried function instead",
				name: ["*", "bind"]
			},
			{
				message:
					"Call the function directly. Use spread for arguments.",
				name: ["*", "call"]
			},
			// Object
			{
				message: "Use spread instead `{ ...object1, ...object2 }`.",
				name: ["*", "assign"]
			},
			{
				message: "Use `{}` instead.",
				name: ["*", "create"]
			},
			{
				message: "Avoid mutations.",
				name: ["*", "freeze"]
			},
			{
				message: "Use `Object.keys` or `Object.entries` instead.",
				name: ["*", "getOwnPropertyNames"]
			},
			{
				message: "Avoid using classes and prototypes.",
				name: ["*", "getPrototypeOf"]
			},
			{
				message: "Avoid mutations.",
				name: ["*", "isExtensible"]
			},
			{
				message: "Avoid mutations.",
				name: ["*", "isFrozen"]
			},
			{
				message: "Avoid mutations.",
				name: ["*", "isSealed"]
			},
			{
				message: "Avoid mutations.",
				name: ["*", "preventExtension"]
			},
			{
				message: "Avoid mutations.",
				name: ["*", "seal"]
			},
			{
				message: "Avoid using classes and prototypes.",
				name: ["*", "setPrototypeOf"]
			},
			{
				message: "Use a Proxy instead.",
				name: ["*", "__noSuchMethod__"]
			},
			// Math
			{
				message: "Use the `**` operator instead.",
				name: ["*", "pow"]
			},
			// Date
			{
				message: "Use `Date.prototype.getFullYear` instead.",
				name: ["*", "getYear"]
			},
			{
				message: "Use `Date.prototype.setFullYear` instead.",
				name: ["*", "setYear"]
			},
			{
				message: "USe `Date.prototype.toLocaleDateString` instead.",
				name: ["*", "toDateString"]
			},
			{
				message: "USe `Date.prototype.toLocaleTimeString` instead.",
				name: ["*", "toTimeString"]
			},
			{
				message: "Use `Date.prototype.toUTCString` instead.",
				name: ["*", "toGMTString"]
			},
			// String
			{
				message: "Use `String.prototype.toLocaleLowerCase` instead.",
				name: ["*", "toLowerCase"]
			},
			{
				message: "Use `String.prototype.toLocaleUpperCase` instead.",
				name: ["*", "toUpperCase"]
			}
		],
		camelcase: "off", // Checked by TS
		"capitalized-comments": ["error", "always"],
		"class-methods-use-this": "error",
		"comma-dangle": "off", // Checked by TS
		complexity: "error",
		"consistent-return": "error",
		curly: "error",
		"default-case": "error",
		"default-param-last": "error",
		"dot-notation": "off", // Checked by TS
		"eol-last": "error",
		eqeqeq: "error",
		"guard-for-in": "error",
		"id-blacklist": [
			"error",
			"err" // Write "error", is just 2 more letters.
		],
		"id-length": ["error", { exceptions: ["_"] }],
		"id-match": "error",
		"import/no-default-export": "off",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true
			}
		],
		"import/no-internal-modules": "off",
		"init-declarations": "off", // Checked by TS
		"linebreak-style": ["error", "unix"],
		"max-classes-per-file": ["error", 1],
		"max-len": [
			"error",
			{
				code: 80,
				// Let's ignore both long import statements and eslint flags
				ignorePattern: "(^import [^,]+ from)|(// eslint-disable)",
				ignoreRegExpLiterals: true
			}
		],
		"max-lines": ["error", 300],
		"max-params": ["warn", 1],
		"new-parens": "error",
		"newline-per-chained-call": "off",
		"no-alert": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-console": [
			"error",
			{
				allow: [
					"log",
					"warn",
					"dir",
					"timeLog",
					"assert",
					"clear",
					"count",
					"countReset",
					"group",
					"groupEnd",
					"table",
					"dirxml",
					"error",
					"groupCollapsed",
					"Console",
					"profile",
					"profileEnd",
					"timeStamp",
					"context"
				]
			}
		],
		"no-duplicate-imports": "off", // Checked by TS
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-implied-eval": "off", // Checked by TS
		"no-import-assign": "error",
		"no-import-side-effect": "off",
		"no-lone-blocks": "error",
		"no-loop-func": "off", // Checked by TS
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 2
			}
		],
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-null/no-null": "error",
		"no-param-reassign": "error",
		"no-plusplus": "error",
		"no-proto": "error",
		"no-redeclare": "off", // Checked by TS
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "off", // Checked by TS
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef": "off", // Checked by TS
		"no-undef-init": "error",
		"no-underscore-dangle": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "off", // Checked by TS
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": ["error", "never"],
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				next: "return",
				prev: "*"
			}
		],
		"prefer-arrow/prefer-arrow-functions": "error",
		"prefer-const": "error",
		"prefer-named-capture-group": "warn",
		"prefer-object-spread": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quote-props": ["error", "as-needed"],
		radix: "error",
		"react/button-has-type": "error",
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function"
			}
		],
		"react/jsx-boolean-value": ["error", "never"],
		"react/jsx-curly-brace-presence": "error",
		"react/jsx-fragments": ["error", "syntax"],
		"react/jsx-handler-names": "error",
		"react/jsx-max-depth": ["error", { max: 3 }],
		"react/jsx-no-constructed-context-values": "error",
		"react/jsx-no-script-url": "error",
		"react/jsx-no-target-blank": "error",
		"react/jsx-no-useless-fragment": "error",
		"react/jsx-pascal-case": "error",
		"react/jsx-sort-props": "error",
		"react/no-array-index-key": "error",
		"react/no-children-prop": "off",
		"react/no-danger": "error",
		"react/no-multi-comp": "error",
		"react/no-this-in-sfc": "error",
		"react/no-unsafe": "error",
		"react/no-unstable-nested-components": "error",
		"react/prefer-es6-class": ["error", "never"],
		"react/prefer-stateless-function": "error",
		"require-await": "off", // Checked by TS
		"require-unicode-regexp": "error",
		"sort-keys": "error",
		"space-before-function-paren": "off", // Checked by TS
		"spaced-comment": "error",
		"wrap-iife": ["error", "inside"],
		yoda: "error"
	},
	settings: {
		react: {
			version: "17"
		}
	}
};
