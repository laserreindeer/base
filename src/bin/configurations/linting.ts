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
		copyFilesRecursivePromise([
			resolveConfigurationsPath("tsconfig.json"),
			resolveConfigurationsPath("_eslintrc.js"),
			resolveConfigurationsPath("_prettierignore"),
			resolveConfigurationsPath("_prettierrc.js")
		])([
			targetDirectoryResolve(targetDirectory)("tsconfig.json"),
			targetDirectoryResolve(targetDirectory)(".eslintrc.js"),
			targetDirectoryResolve(targetDirectory)(".prettierignore"),
			targetDirectoryResolve(targetDirectory)(".prettierrc.js")
		])
	);
