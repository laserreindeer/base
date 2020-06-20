#! /usr/bin/env node

import { resolve } from "path";
import { addJSExtension } from "./addJSExtension";
import { getFilesByExtension } from "./getFilesByExtension";
import { cwdPath } from "./paths";

// TODO: Maybe make this better (still, is temporary until TS output is fixed).
const path = resolve(cwdPath, process.argv[2]);

export default getFilesByExtension("js")(path).then(filenames =>
	Promise.all(filenames.map(filename => addJSExtension(filename)))
);
