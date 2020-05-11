import { readFile } from "fs";
import { promisify } from "util";

/** Promised `fs.readFile`. */
export const readFilePromise = promisify(readFile);
