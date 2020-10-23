import { readFile } from "fs/promises";
import { resolve } from "path";
import { copyFilesRecursivePromise } from "./copyFilesRecursivePromise";
import type { Package } from "./Package";
import {
	basePackagePath,
	basePath,
	cwdPackagePath,
	resolveConfigurationsPath,
	targetDirectoryResolve
} from "./paths";
import { sortObject } from "./sortObject";
import { updateJSONPromise } from "./updateJSONPromise";

export type Configuration = (
	targetDirectory: string
) => Promise<readonly { readonly source: string; readonly target: string }[]>;

export const addDevDependencies = (packages: readonly string[]) =>
	readFile(basePackagePath, "utf8")
		.then(JSON.parse)
		.then(({ devDependencies }: Package) =>
			updateJSONPromise<Package>(targetPackage => ({
				...targetPackage,
				devDependencies: sortObject({
					...(targetPackage.devDependencies ?? {}),
					...Object.fromEntries(
						Object.entries(
							devDependencies
						).filter(([packageName]) =>
							packages.includes(packageName)
						)
					)
				})
			}))(cwdPackagePath)
		);

export const editorconfig: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolveConfigurationsPath(".editorconfig")])([
		targetDirectoryResolve(targetDirectory)(".editorconfig")
	]);

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
			resolveConfigurationsPath(".eslintrc.js"),
			resolveConfigurationsPath(".prettierignore"),
			resolveConfigurationsPath(".prettierrc.js")
		])([
			targetDirectoryResolve(targetDirectory)("tsconfig.json"),
			targetDirectoryResolve(targetDirectory)(".eslintrc.js"),
			targetDirectoryResolve(targetDirectory)(".prettierignore"),
			targetDirectoryResolve(targetDirectory)(".prettierrc.js")
		])
	);

export const git: Configuration = targetDirectory =>
	copyFilesRecursivePromise([
		resolveConfigurationsPath(".gitignore"),
		resolveConfigurationsPath(".github/workflows/test.yaml")
	])([
		targetDirectoryResolve(targetDirectory)(".gitignore"),
		targetDirectoryResolve(targetDirectory)(".github/workflows/test.yaml")
	]);

export const documents: Configuration = targetDirectory =>
	copyFilesRecursivePromise([
		resolveConfigurationsPath("LICENSE"),
		resolveConfigurationsPath("CHANGELOG.md"),
		resolveConfigurationsPath("README.md")
	])([
		targetDirectoryResolve(targetDirectory)("LICENSE"),
		targetDirectoryResolve(targetDirectory)("CHANGELOG.md"),
		targetDirectoryResolve(targetDirectory)("README.md")
	]);

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

export const vscode: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(basePath, ".vscode/settings.json")])([
		targetDirectoryResolve(targetDirectory)(".vscode/settings.json")
	]);
