import { Linter } from "eslint";

export default {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
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
		"eslint-plugin-prefer-arrow"
	],
	rules: {
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/consistent-type-assertions": "off",
		"@typescript-eslint/consistent-type-definitions": "error",
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
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/interface-name-prefix": "error",
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
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/space-within-parens": ["off", "never"],
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		"array-callback-return": "error",
		"arrow-body-style": ["error", "as-needed"],
		"arrow-parens": ["error", "as-needed"],
		"ban/ban": [
			"warn",
			{
				message: "Use spread instead, like [...array, ...otherArray].",
				name: ["*", "concat"]
			},
			{
				message: "Use slice instead.",
				name: ["*", "pop"]
			},
			{
				message: "Use slice instead.",
				name: ["*", "shift"]
			},
			{
				message: "Use slice instead.",
				name: ["*", "splice"]
			},
			{
				message: "Use spread instead, like [...array, newItem].",
				name: ["*", "push"]
			},
			{
				message: "Use a template strings instead, like `${value}`.",
				name: ["*", "toString"]
			},
			{
				message: "Use spread instead, like [newItem, ...array].",
				name: ["*", "unshift"]
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
			"e", // Write "event", is far clearer than "e".
			"err", // Write "error", is just 2 more letters.
			"i", // Use "index" or something more readable than "i".
			"j", // Use "index" or something more readable than "j".
			"k" // Use "index" or something more readable than "k".
		],
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
				ignorePattern: "// eslint-disable"
			}
		],
		"max-lines": ["error", 300],
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
				hoist: "all"
			}
		],
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undef": "off", // TypeScript already takes care of this.
		"no-underscore-dangle": "error",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-return": "error",
		"no-unused-expressions": "error",
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
		"space-before-function-paren": ["error", "never"],
		"spaced-comment": "error",
		"wrap-iife": ["error", "inside"],
		yoda: "error"
	}
} as Linter.Config;
