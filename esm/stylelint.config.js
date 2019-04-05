/**
 * Stylelint settings.
 */
export const stylelintConfig = {
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
export default stylelintConfig;
