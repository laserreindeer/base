import { readdir } from "fs";
import { join } from "path";
import { promisify } from "util";

const readDirectory = promisify(readdir);

/** Get list of files in a directory, recursively */
export const getFilesRecursive = (
	directory: string
): Promise<readonly string[]> =>
	readDirectory(directory, { withFileTypes: true }).then(files =>
		Promise.all(
			files.map(file =>
				file.isDirectory()
					? getFilesRecursive(join(directory, file.name))
					: Promise.resolve([join(directory, file.name)])
			)
		).then(filenames => filenames.flat())
	);
