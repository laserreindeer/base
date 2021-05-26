export type Configuration = (targetDirectory: string) => Promise<
	ReadonlyArray<{
		readonly source: string;
		readonly target: string;
	}>
>;
