import type { PathLike } from "fs";
import { existsSync } from "fs";
import { promisify } from "util";

/** Promised `fs.exists`. */
export const existsPromise = (filename: string) =>
	promisify<PathLike, boolean>(existsSync)(filename).then(exists => ({
		exists,
		filename
	}));
