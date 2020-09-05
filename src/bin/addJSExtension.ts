import { readFile, writeFile } from "fs/promises";

/**
 * Adds .js extension in imports and exports of given filename.
 */
export const addJSExtension = (filename: string) =>
	readFile(filename, "utf8").then(data =>
		data.match(/(?:import|export)\s*.*\s*from/gu)
			? writeFile(
					filename,
					data.replace(
						/(?<prepend>(?:import|export)\s*?[\w*\s{},]*\s*from\s*?"(?=\.|\/))(?<path>.*?)(?=")/gu,
						"$1$2.js"
					)
			  ).then(_ => console.log(`${filename} prettified!`))
			: Promise.resolve()
	);
