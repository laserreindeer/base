/**
 * Curried zip of two arrays: [a1, a2], [b1, b2] => [[a1, b1], [a2, b2]]
 * @param source Source array to be zipped.
 */
export const arrayZip =
	<Item>(source: ReadonlyArray<Item>) =>
	/**
	 * @param extension Extension array to be zipped
	 */
	(extension: ReadonlyArray<Item>) =>
		source.map(
			// eslint-disable-next-line max-params
			(item, index) => [item, extension[index]] as readonly [Item, Item]
		);
