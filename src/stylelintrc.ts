import type { Configuration } from "stylelint";

/**
 * Stylelint configuration.
 */
export const stylelint: Configuration = {
	defaultSeverity: "error",
	extends: "stylelint-prettier/recommended",
	ignoreFiles: [],
	plugins: ["stylelint-order"],
	processors: [],
	rules: {
		indentation: "tab",
		"order/properties-alphabetical-order": true
	}
};

export default stylelint;
