import { Options } from "prettier";

/**
 * Prettier settings.
 */
export const prettierConfig: Options = {
	arrowParens: "avoid",
	bracketSpacing: true,
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "ignore",
	jsxBracketSameLine: false,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: "preserve",
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "none",
	useTabs: true
};

export default prettierConfig;

