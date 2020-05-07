import { dirname } from "path";
import copyFilePromise from "./copyFilePromise";
import existsPromise from "./existsPromise";
import makeDirectoryPromise from "./makeDirectoryPromise";

export const copyFileRecursivePromise = (source: string) => (target: string) =>
	existsPromise(dirname(target))
		.then(({ exists, filename }) =>
			!exists ? makeDirectoryPromise(filename) : { path: filename }
		)
		.then(_ => copyFilePromise(source)(target));

export default copyFileRecursivePromise;
