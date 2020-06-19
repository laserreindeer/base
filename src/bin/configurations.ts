import { resolve } from "path";
import { copyFilesRecursivePromise } from "./copyFilesRecursivePromise";
import { configurationsPath, vangstylePath } from "./paths";

export type Configuration = (
	targetDirectory: string
) => Promise<readonly { readonly source: string; readonly target: string }[]>;

export const editorconfig: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(configurationsPath, ".editorconfig")])([
		resolve(targetDirectory, ".editorconfig")
	]);

export const eslint: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(configurationsPath, ".eslintrc.js")])([
		resolve(targetDirectory, ".eslintrc.js")
	]);

export const git: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(configurationsPath, ".gitignore")])([
		resolve(targetDirectory, ".gitignore")
	]);

export const prettier: Configuration = targetDirectory =>
	copyFilesRecursivePromise([
		resolve(configurationsPath, ".prettierignore"),
		resolve(configurationsPath, ".prettierrc.js")
	])([
		resolve(targetDirectory, ".prettierignore"),
		resolve(targetDirectory, ".prettierrc.js")
	]);

export const stylelint: Configuration = targetDirectory =>
	copyFilesRecursivePromise([
		resolve(configurationsPath, ".stylelintrc.js")
	])([resolve(targetDirectory, ".stylelintrc.js")]);

export const vscode: Configuration = targetDirectory =>
	copyFilesRecursivePromise([
		resolve(vangstylePath, ".vscode/settings.json")
	])([resolve(targetDirectory, ".vscode/settings.json")]);

export const typescript: Configuration = targetDirectory =>
	copyFilesRecursivePromise([resolve(configurationsPath, "tsconfig.json")])([
		resolve(targetDirectory, "tsconfig.json")
	]);
