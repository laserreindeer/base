export type Package = {
	readonly version: string;
	readonly dependencies: Record<string, string>;
	readonly devDependencies: Record<string, string>;
};
