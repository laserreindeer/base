import { extname } from "path";
import { getFilesRecursive } from "./getFilesRecursive";

/** Gets list of files with the given extension, recursively */
export const getFilesByExtension = (extension: string) => (
	directory: string
): Promise<readonly string[]> =>
	getFilesRecursive(directory).then(filenames =>
		filenames.filter(filename => extname(filename) === `.${extension}`)
	);
