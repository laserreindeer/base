import { copyFileRecursivePromise } from "./copyFileRecursivePromise";

/**
 * Copies several files recursively.
 * @param sources List of source paths of files to be copied.
 */
export const copyFilesRecursivePromise = (
	filesMap: Readonly<Record<string, string>> = {}
) =>
	Promise.all(
		Object.entries(filesMap).map(([source, target]) =>
			copyFileRecursivePromise(source)(target)
		)
	);
