import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { resolveConfigurationsPath, targetDirectoryResolve } from "../paths";
import { Configuration } from "./Configuration";

export const git: Configuration = targetDirectory =>
	addDevDependencies([]).then(_ =>
		copyFilesRecursivePromise([
			resolveConfigurationsPath("_gitignore"),
			resolveConfigurationsPath("_github/workflows/test.yaml")
		])([
			targetDirectoryResolve(targetDirectory)(".gitignore"),
			targetDirectoryResolve(targetDirectory)(
				".github/workflows/test.yaml"
			)
		])
	);
