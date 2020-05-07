import { copyFile } from "fs";
import { promisify } from "util";

export const copyFilePromise = (source: string) => (target: string) =>
	promisify(copyFile)(source, target).then(_ => ({ source, target }));

export default copyFilePromise;
