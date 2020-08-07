import { readdir } from "fs/promises";
import { join } from "path";

/** Get list of files in a directory, recursively */
export const getFilesRecursive = (
	directory: string
): Promise<readonly string[]> =>
	readdir(directory, { withFileTypes: true }).then(files =>
		Promise.all(
			files.map(file =>
				file.isDirectory()
					? getFilesRecursive(join(directory, file.name))
					: Promise.resolve([join(directory, file.name)])
			)
		).then(filenames => filenames.flat())
	);
