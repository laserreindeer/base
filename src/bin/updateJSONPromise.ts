import { jsonPrettyStringify } from "./jsonPrettyStringify";
import { readFilePromise } from "./readFilePromise";
import { writeFilePromise } from "./writeFilePromise";

/**
 * JSON file updater.
 * @param update Function that takes the current JSON state and should return
 * the new state.
 */
export const updateJSONPromise = <ParsedJSON = unknown, Output = ParsedJSON>(
	update: (data: ParsedJSON) => Output
) => (path: string) =>
	readFilePromise(path, "utf8").then(data =>
		writeFilePromise(path, jsonPrettyStringify(update(JSON.parse(data))))
	);
