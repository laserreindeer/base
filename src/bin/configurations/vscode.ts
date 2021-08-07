import { resolve } from "node:path";
import { addDevDependencies } from "../addDevDependencies";
import { copyFilesRecursivePromise } from "../copyFilesRecursivePromise";
import { basePath, targetDirectoryResolve } from "../paths";
import type { Configuration } from "./Configuration";

export const vscode: Configuration = targetDirectory =>
	addDevDependencies([]).then(_ =>
		copyFilesRecursivePromise({
			[resolve(basePath, ".vscode/settings.json")]:
				targetDirectoryResolve(targetDirectory)(".vscode/settings.json")
		})
	);
