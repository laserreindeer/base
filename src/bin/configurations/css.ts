import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { resolveConfigurationsPath, targetDirectoryResolve } from "../paths";
import type { Configuration } from "./Configuration";

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
			resolveConfigurationsPath("_stylelintrc.js"),
			resolveConfigurationsPath("_prettierignore"),
			resolveConfigurationsPath("_prettierrc.js")
		])([
			targetDirectoryResolve(targetDirectory)(".stylelintrc.js"),
			targetDirectoryResolve(targetDirectory)(".prettierignore"),
			targetDirectoryResolve(targetDirectory)(".prettierrc.js")
		])
	);
