import { dirname } from "path";
import { copyFilePromise } from "./copyFilePromise";
import { existsPromise } from "./existsPromise";
import { makeDirectoryPromise } from "./makeDirectoryPromise";

/**
 * Copies a file in a recursively created directory (if it doesn't exists).
 * @param source Source path of the file to be copied.
 */
export const copyFileRecursivePromise = (source: string) =>
	/** @param target Target path of the file to be copied. */
	(target: string) =>
		existsPromise(dirname(target))
			.then(({ exists, filename }) =>
				!exists ? makeDirectoryPromise(filename) : { path: filename }
			)
			.then(_ => copyFilePromise(source)(target));
