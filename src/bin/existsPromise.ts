import { exists as fsExists } from "fs";
import { promisify } from "util";

/** Promised `fs.exists`. */
export const existsPromise = (filename: string) =>
	promisify(fsExists)(filename).then(exists => ({ exists, filename }));
