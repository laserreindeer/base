import type { Options } from "prettier";

/**
 * Prettier configuration.
 */
export const prettier: Options = {
	arrowParens: "avoid",
	bracketSpacing: true,
	endOfLine: "lf",
	htmlWhitespaceSensitivity: "ignore",
	jsxBracketSameLine: false,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: "preserve",
	quoteProps: "as-needed",
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "none",
	useTabs: true
};

export default prettier;
