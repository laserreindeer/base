/**
 * JSON.stringify, pretty by default (2 spaces indent).
 * @param source Object to be stringified.
 */
export const jsonPrettyStringify = <Source>(source: Source) =>
	// eslint-disable-next-line no-null/no-null
	`${JSON.stringify(source, null, 2)}\n`;
