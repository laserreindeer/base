import { constants } from "node:fs";
import { access } from "node:fs/promises";

/** Promised `fs.exists`. */
export const existsPromise = (filename: string) =>
	access(filename, constants.F_OK)
		.then(_ => true)
		.catch(_ => false)
		.then(exists => ({ exists, filename }));
