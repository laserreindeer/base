import { readFile, writeFile } from "node:fs/promises";
import { jsonPrettyStringify } from "./jsonPrettyStringify";

/**
 * JSON file updater.
 * @param update Function that takes the current JSON state and should return
 * the new state.
 */
export const updateJSONPromise =
	<ParsedJSON = unknown, Output = ParsedJSON>(
		update: (data: ParsedJSON) => Output
	) =>
	(path: string) =>
		readFile(path, "utf8").then(data =>
			writeFile(
				path,
				jsonPrettyStringify(update(JSON.parse(data) as ParsedJSON))
			)
		);
