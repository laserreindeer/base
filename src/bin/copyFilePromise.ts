import { copyFile } from "fs";
import { promisify } from "util";

/** Curried and promised `fs.copyFile` */
export const copyFilePromise = (source: string) => (target: string) =>
	promisify(copyFile)(source, target).then(_ => ({ source, target }));
