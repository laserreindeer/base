#! /usr/bin/env node

/**
 * This code is really nasty, I could improve it in the future, but for now,
 * let's disable eslint and keep it simple.
 */

/* eslint-disable */

import { copyFile, mkdir } from "fs";
import * as minimist from "minimist";
import { resolve } from "path";

/** Current working directory (where the command is run) */
const cwd = process.cwd();

/** Installation directory of the vangstyle library */
const vangstyleDir = resolve(__dirname, "..");

// _ has all passed params to the vangstyle command
const { _ } = minimist(process.argv.slice(2));

/** Test if given params are included in the _ params array */
const paramsHas = (...params: string[]) =>
	params.some(param => _.includes(param));

/** Console.log shortcut */
const log = console.log.bind(console);

/** Resolve given path to current working directory */
const cwdResolve = (path: string) => resolve(cwd, path);

/** Resolve given path to vangstyle directory */
const vangstyleResolve = (path: string) => resolve(vangstyleDir, path);

/** Copy file from vangstyle to cwd, and log it */
const copy = (filename: string, source: string = `configs/${filename}`) => {
	log(`Copying ${filename} config to ${cwd}...`);
	copyFile(vangstyleResolve(source), cwdResolve(filename), error =>
		log(error ? error : `Done: ${filename} copied!`)
	);
};

/** Map of params and actions ran with every one */
const paramsMap = {
	editorconfig: {
		action: () => copy(".editorconfig"),
		description: "Copy .editorconfig"
	},
	eslint: {
		action: () => copy(".eslintrc.js"),
		description: "Copy .eslintrc.js"
	},
	gitignore: {
		action: () => copy(".gitignore"),
		description: "Copy .gitignore"
	},
	prettier: {
		action: () => [copy(".prettierrc.js"), copy(".prettierignore")],
		description: "Copy .prettierrc.js and .prettierignore"
	},
	stylelint: {
		action: () => copy(".stylelintrc.js"),
		description: "Copy .stylelintrc.js"
	},
	vscode: {
		action: () =>
			mkdir(cwdResolve(".vscode"), dirError =>
				dirError
					? log(dirError)
					: copy(".vscode/settings.json", ".vscode/settings.json")
			),
		description: "Copy .vscode/settings.json"
	}
};

// If the cwd is the vangstyle directory, we should skip installation.
if (vangstyleDir !== cwd) {
	if (_.length === 0) {
		// If no params are given, then just log the descriptions
		log("Vangstyle installation script needs params");
		log("    all # Copy everything");
		Object.keys(paramsMap).forEach(param =>
			console.log(
				`    ${param} - ${
					paramsMap[param as keyof typeof paramsMap].description
				}`
			)
		);
	} else {
		// Run all passed params.
		Object.keys(paramsMap).forEach(param =>
			paramsHas(param, "all")
				? paramsMap[param as keyof typeof paramsMap].action()
				: undefined
		);
	}
}
