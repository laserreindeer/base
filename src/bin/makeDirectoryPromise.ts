import { mkdir } from "fs";
import { promisify } from "util";

export const makeDirectoryPromise = (path: string) =>
	promisify(mkdir)(path, { recursive: true }).then(_ => ({ path }));

export default makeDirectoryPromise;
