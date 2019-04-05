/**
 * Stylelint settings.
 * @type {import("stylelint").Configuration}
 */
module.exports = {
	extends: "stylelint-config-standard",
	plugins: [
		"stylelint-order"
	],
	rules: {
		indentation: "tab",
		"order/properties-alphabetical-order": true
	}
};
