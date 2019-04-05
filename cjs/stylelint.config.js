"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stylelint settings.
 */
exports.stylelintConfig = {
	defaultSeverity: "error",
	extends: "stylelint-config-standard",
	ignoreFiles: [],
	plugins: ["stylelint-order"],
	processors: [],
	rules: {
		indentation: "tab",
		"order/properties-alphabetical-order": true
	}
};
exports.default = exports.stylelintConfig;
