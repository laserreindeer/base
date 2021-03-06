import { arrayZip } from "./arrayZip";
import { copyFileRecursivePromise } from "./copyFileRecursivePromise";

/**
 * Copies several files recursively.
 * @param sources List of source paths of files to be copied.
 */
export const copyFilesRecursivePromise = (
	sources: ReadonlyArray<string> = []
) =>
	/**
	 * @param targets List of target paths of files to be copied.
	 */
	(targets: ReadonlyArray<string> = []) =>
		Promise.all(
			arrayZip(sources)(targets).map(([source, target]) =>
				copyFileRecursivePromise(source)(target)
			)
		);
