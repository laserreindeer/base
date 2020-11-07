import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { resolveConfigurationsPath, targetDirectoryResolve } from "../paths";
import { Configuration } from "./Configuration";

export const css: Configuration = targetDirectory =>
	addDevDependencies([
		"@types/prettier",
		"@types/stylelint",
		"prettier",
		"stylelint",
		"stylelint-config-prettier",
		"stylelint-order",
		"stylelint-prettier"
	]).then(_ =>
		copyFilesRecursivePromise([
			resolveConfigurationsPath(".stylelintrc.js"),
			resolveConfigurationsPath(".prettierignore"),
			resolveConfigurationsPath(".prettierrc.js")
		])([
			targetDirectoryResolve(targetDirectory)(".stylelintrc.js"),
			targetDirectoryResolve(targetDirectory)(".prettierignore"),
			targetDirectoryResolve(targetDirectory)(".prettierrc.js")
		])
	);
