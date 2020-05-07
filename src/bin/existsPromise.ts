import { exists as fsExists } from "fs";
import { promisify } from "util";

export const existsPromise = (filename: string) =>
	promisify(fsExists)(filename).then(exists => ({ exists, filename }));

export default existsPromise;
