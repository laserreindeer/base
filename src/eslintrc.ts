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
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"plugin:functional/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		project: "tsconfig.json",
		sourceType: "module"
	},
	plugins: [
		"@typescript-eslint",
		"eslint-plugin-ban",
		"eslint-plugin-import",
		"eslint-plugin-no-null",
		"eslint-plugin-prefer-arrow",
		"eslint-plugin-functional"
	],
	rules: {
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/consistent-type-assertions": "off",
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/explicit-function-return-type": "off",
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
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/indent": "off",
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
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-parameter-properties": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-use-before-define": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{ allowTemplateLiterals: true, avoidEscape: false }
		],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/space-within-parens": ["off", "never"],
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		"array-callback-return": "error",
		"arrow-body-style": ["error", "as-needed"],
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
				message: "Use `[...array, ...otherArray]` instead.",
				name: ["*", "concat"]
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
		camelcase: "error",
		"capitalized-comments": ["error", "always"],
		"class-methods-use-this": "error",
		"comma-dangle": ["error", "never"],
		complexity: "error",
		"consistent-return": "error",
		curly: "error",
		"default-case": "error",
		"default-param-last": "error",
		"dot-notation": "error",
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
		"max-params": ["error", 1],
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
		"no-duplicate-imports": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-implied-eval": "error",
		"no-import-assign": "error",
		"no-import-side-effect": "off",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
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
		"no-redeclare": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": [
			"error",
			{
				allow: ["_"],
				hoist: "all"
			}
		],
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef": "off", // TypeScript already takes care of this.
		"no-undef-init": "error",
		"no-underscore-dangle": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
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
		"require-await": "error",
		"require-unicode-regexp": "error",
		"sort-keys": "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				asyncArrow: "always",
				named: "never"
			}
		],
		"spaced-comment": "error",
		"wrap-iife": ["error", "inside"],
		yoda: "error"
	}
};
