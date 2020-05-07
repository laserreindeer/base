import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const encoding = "utf8";
const path = resolve(__dirname, "../../package.json");
const file = readFileSync(path, encoding);
const data = JSON.parse(file);
const update = JSON.stringify(
	{
		...data,
		peerDependencies: Object.keys(data.peerDependencies).reduce(
			(peerDependencies, peerDependency) => ({
				...peerDependencies,
				[peerDependency]: data.devDependencies[peerDependency]
			}),
			{}
		)
	},
	// eslint-disable-next-line no-null/no-null
	null,
	2
);

export default writeFileSync(path, `${update}\n`);
