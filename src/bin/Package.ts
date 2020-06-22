export type Package = {
	readonly dependencies: Record<string, string>;
	readonly devDependencies: Record<string, string>;
};
