import { mkdir } from "fs";
import { promisify } from "util";

/** Promised `fs.mkdir` (recursive). */
export const makeDirectoryPromise = (path: string) =>
	promisify(mkdir)(path, { recursive: true }).then(_ => ({ path }));
