export const arrayZip = <ItemType>(source: readonly ItemType[]) => (
	extension: readonly ItemType[]
) => source.map((item, index) => [item, extension[index]]);

export default arrayZip;
