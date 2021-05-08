import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { resolveConfigurationsPath, targetDirectoryResolve } from "../paths";
import type { Configuration } from "./Configuration";

export const linting: Configuration = targetDirectory =>
	addDevDependencies([
		"@types/eslint",
		"@types/node",
		"@types/prettier",
		"@typescript-eslint/eslint-plugin",
		"@typescript-eslint/parser",
		"eslint-config-prettier",
		"eslint-import-resolver-node",
		"eslint-plugin-ban",
		"eslint-plugin-functional",
		"eslint-plugin-import",
		"eslint-plugin-no-null",
		"eslint-plugin-prefer-arrow",
		"eslint-plugin-prettier",
		"eslint",
		"prettier",
		"typescript"
	]).then(_ =>
		copyFilesRecursivePromise({
			[resolveConfigurationsPath(
				"tsconfig.json"
			)]: targetDirectoryResolve(targetDirectory)("tsconfig.json"),
			[resolveConfigurationsPath("_eslintrc.js")]: targetDirectoryResolve(
				targetDirectory
			)(".eslintrc.js"),
			[resolveConfigurationsPath(
				"_prettierrc.js"
			)]: targetDirectoryResolve(targetDirectory)(".prettierrc.js")
		})
	);
