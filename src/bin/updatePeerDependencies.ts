import { resolve } from "path";
import { Package } from "./Package";
import { basePath } from "./paths";
import { updateJSONPromise } from "./updateJSONPromise";

export default updateJSONPromise<Package>(base => ({
	...base,
	peerDependencies: Object.fromEntries(
		Object.keys(base.peerDependencies).map(peerDependency => [
			peerDependency,
			base.devDependencies[peerDependency]
		])
	)
}))(resolve(basePath, "package.json"))
	.then(_ => console.log("Peer dependencies updated!"))
	.catch(console.error);
