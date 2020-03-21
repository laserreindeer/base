import type { Configuration } from "stylelint";

export default {
	defaultSeverity: "error",
	extends: "stylelint-prettier/recommended",
	ignoreFiles: [],
	plugins: ["stylelint-order"],
	processors: [],
	rules: {
		indentation: "tab",
		"order/properties-alphabetical-order": true
	}
} as Configuration;
