import { resolve } from "path";
import { Package } from "./Package";
import { vangstylePath } from "./paths";
import { updateJSONPromise } from "./updateJSONPromise";

export default updateJSONPromise<Package>(vangstyle => ({
	...vangstyle,
	peerDependencies: Object.fromEntries(
		Object.keys(vangstyle.peerDependencies).map(peerDependency => [
			peerDependency,
			vangstyle.devDependencies[peerDependency]
		])
	)
}))(resolve(vangstylePath, "package.json"))
	.then(_ => console.log("Peer dependencies updated!"))
	.catch(console.error);
