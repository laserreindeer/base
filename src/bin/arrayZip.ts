/**
 * Curried zips of two arrays: [a1, a2], [b1, b2] => [[a1, b1], [a2, b2]]
 * @param source Source array to be zipped.
 */
export const arrayZip = <ItemType>(source: readonly ItemType[]) =>
	/** @param extension Extension array to be zipped */
	(extension: readonly ItemType[]) =>
		source.map((item, index) => [item, extension[index]]);
