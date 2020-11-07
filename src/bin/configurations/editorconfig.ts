import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { resolveConfigurationsPath, targetDirectoryResolve } from "../paths";
import { Configuration } from "./Configuration";

export const editorconfig: Configuration = targetDirectory =>
	addDevDependencies([]).then(_ =>
		copyFilesRecursivePromise([
			resolveConfigurationsPath(".editorconfig")
		])([targetDirectoryResolve(targetDirectory)(".editorconfig")])
	);
