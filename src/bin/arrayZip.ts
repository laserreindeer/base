/**
 * Curried zip of two arrays: [a1, a2], [b1, b2] => [[a1, b1], [a2, b2]]
 * @param source Source array to be zipped.
 */
export const arrayZip = <Item>(source: readonly Item[]) =>
	/**
	 * @param extension Extension array to be zipped
	 */
	(extension: readonly Item[]) =>
		source.map(
			(item, index) => [item, extension[index]] as readonly [Item, Item]
		);
