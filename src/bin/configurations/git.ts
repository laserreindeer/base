import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { resolveConfigurationsPath, targetDirectoryResolve } from "../paths";
import type { Configuration } from "./Configuration";

export const git: Configuration = targetDirectory =>
	addDevDependencies([]).then(_ =>
		copyFilesRecursivePromise({
			[resolveConfigurationsPath("_gitignore")]:
				targetDirectoryResolve(targetDirectory)(".gitignore"),
			[resolveConfigurationsPath("_github/workflows/test.yaml")]:
				targetDirectoryResolve(targetDirectory)(
					".github/workflows/test.yaml"
				)
		})
	);
