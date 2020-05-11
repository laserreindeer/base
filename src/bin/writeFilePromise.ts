import { writeFile } from "fs";
import { promisify } from "util";

/** Promised `fs.writeFile`. */
export const writeFilePromise = promisify(writeFile);
