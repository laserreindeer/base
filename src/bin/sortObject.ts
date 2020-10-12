/**
 * Sort object properties alphabetically
 * @param source Source object to be sorted.
 */
export const sortObject = <Source extends Record<string, unknown>>(
	source: Source
) =>
	Object.fromEntries(
		[...Object.entries(source)].sort(([package1], [package2]) =>
			package1.localeCompare(package2)
		)
	) as Source;
