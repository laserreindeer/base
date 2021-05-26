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
		copyFilesRecursivePromise({
			[resolveConfigurationsPath("_stylelintrc.js")]:
				targetDirectoryResolve(targetDirectory)(".stylelintrc.js"),
			[resolveConfigurationsPath("_prettierrc.js")]:
				targetDirectoryResolve(targetDirectory)(".prettierrc.js")
		})
	);
