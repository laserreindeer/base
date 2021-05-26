/**
 * Takes an array of functions returning promises and runs them in sequence.
 * @param promises Array of promises.
 */
export const promiseAllSequential =
	<Argument>(argument: Argument) =>
	<Output>(
		promises: ReadonlyArray<
			(promiseArgument: Argument) => Promise<Output>
		> = []
	) =>
		promises.slice(1).reduce(
			// eslint-disable-next-line max-params
			(promise, nextPromise) =>
				promise?.then(output =>
					nextPromise(argument).then(data => [...output, data])
				),
			promises[0]?.(argument).then(data => [data])
		);
