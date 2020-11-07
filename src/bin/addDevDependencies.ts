import { readFile } from "fs/promises";
import type { Package } from "./Package";
import { basePackagePath, cwdPackagePath } from "./paths";
import { sortObject } from "./sortObject";
import { updateJSONPromise } from "./updateJSONPromise";

export const addDevDependencies = (packages: readonly string[]) =>
	readFile(basePackagePath, "utf8")
		.then(JSON.parse)
		.then(({ devDependencies, version }: Package) =>
			updateJSONPromise<Package>(targetPackage => ({
				...targetPackage,
				devDependencies: sortObject({
					...(targetPackage.devDependencies ?? {}),
					"@vangware/base": `^${version}`,
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
