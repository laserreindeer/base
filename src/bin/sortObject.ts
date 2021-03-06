/**
 * Sort object properties alphabetically
 * @param source Source object to be sorted.
 */
export const sortObject = <Source extends Record<string, unknown>>(
	source: Source
) =>
	Object.fromEntries(
		// eslint-disable-next-line max-params
		[...Object.entries(source)].sort(([package1], [package2]) =>
			package1.localeCompare(package2)
		)
	) as Source;
