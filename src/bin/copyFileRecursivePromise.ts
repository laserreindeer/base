import { copyFile, mkdir } from "fs/promises";
import { dirname } from "path";
import { existsPromise } from "./existsPromise";

/**
 * Copies a file in a recursively created directory (if it doesn't exists).
 * @param source Source path of the file to be copied.
 */
export const copyFileRecursivePromise =
	(source: string) =>
	/**
	 * @param target Target path of the file to be copied.
	 */
	(target: string) =>
		existsPromise(dirname(target))
			.then(({ exists, filename }) =>
				!exists
					? mkdir(filename, { recursive: true }).then(_ => ({
							path: filename
					  }))
					: { path: filename }
			)
			.then(_ =>
				copyFile(source, target).then(_ => ({ source, target }))
			);
