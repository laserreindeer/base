import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { resolveConfigurationsPath, targetDirectoryResolve } from "../paths";
import { Configuration } from "./Configuration";

export const documents: Configuration = targetDirectory =>
	addDevDependencies([]).then(_ =>
		copyFilesRecursivePromise([
			resolveConfigurationsPath("LICENSE"),
			resolveConfigurationsPath("CHANGELOG.md"),
			resolveConfigurationsPath("README.md")
		])([
			targetDirectoryResolve(targetDirectory)("LICENSE"),
			targetDirectoryResolve(targetDirectory)("CHANGELOG.md"),
			targetDirectoryResolve(targetDirectory)("README.md")
		])
	);
