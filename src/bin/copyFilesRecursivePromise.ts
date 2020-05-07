import arrayZip from "./arrayZip";
import copyFileRecursivePromise from "./copyFileRecursivePromise";

export const copyFilesRecursivePromise = (sources: readonly string[] = []) => (
	targets: readonly string[] = []
) =>
	Promise.all(
		arrayZip(sources)(targets).map(([source, target]) =>
			copyFileRecursivePromise(source)(target)
		)
	);

export default copyFilesRecursivePromise;
