import { Configuration } from "stylelint";

/**
 * Stylelint settings.
 */
export const stylelintConfig: Configuration = {
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

export default stylelintConfig;
