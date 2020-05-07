import { resolve } from "path";
import copyFilesRecursivePromise from "./copyFilesRecursivePromise";
import { configsDirectory, vangstyleDirectory } from "./directories";

export type Configuration = (
	targetDirectory: string
) => Promise<readonly { readonly source: string; readonly target: string }[]>;

export const editorconfig: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(configsDirectory, ".editorconfig")])([
		resolve(targetDirectory, ".editorconfig")
	]);

export const eslint: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(configsDirectory, ".eslintrc.js")])([
		resolve(targetDirectory, ".eslintrc.js")
	]);

export const git: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(configsDirectory, ".gitignore")])([
		resolve(targetDirectory, ".gitignore")
	]);

export const prettier: Configuration = targetDirectory =>
	copyFilesRecursivePromise([
		resolve(configsDirectory, ".prettierignore"),
		resolve(configsDirectory, ".prettierrc.js")
	])([
		resolve(targetDirectory, ".prettierignore"),
		resolve(configsDirectory, ".prettierrc.js")
	]);

export const stylelint: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(configsDirectory, ".stylelintrc.js")])([
		resolve(targetDirectory, ".stylelintrc.js")
	]);

export const vscode: Configuration = targetDirectory =>
	copyFilesRecursivePromise([
		resolve(vangstyleDirectory, ".vscode/settings.json")
	])([resolve(targetDirectory, ".vscode/settings.json")]);
