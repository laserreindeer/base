import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { resolveConfigurationsPath, targetDirectoryResolve } from "../paths";
import { Configuration } from "./Configuration";

export const git: Configuration = targetDirectory =>
	addDevDependencies([]).then(_ =>
		copyFilesRecursivePromise([
			resolveConfigurationsPath(".gitignore"),
			resolveConfigurationsPath(".github/workflows/test.yaml")
		])([
			targetDirectoryResolve(targetDirectory)(".gitignore"),
			targetDirectoryResolve(targetDirectory)(
				".github/workflows/test.yaml"
			)
		])
	);
