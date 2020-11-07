export type Configuration = (
	targetDirectory: string
) => Promise<readonly { readonly source: string; readonly target: string }[]>;
