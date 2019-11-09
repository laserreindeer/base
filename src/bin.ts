#! /usr/bin/env node

import { copyFile, mkdir } from "fs";
import * as minimist from "minimist";
import { resolve } from "path";

const cwd = process.cwd();
const installationDir = resolve(__dirname, "..");

if (installationDir !== cwd) {
	const { _ } = minimist(process.argv.slice(2));
	const log = console.log.bind(console);
	const installResolve = (file: string) => resolve(installationDir, file);
	const cwdResolve = (file: string) => resolve(cwd, file);
	const copy = (file: string) =>
		copyFile(installResolve(file), cwdResolve(file), error =>
			log(!error ? `${file} Copied!` : error)
		);

	if (_.length === 0) {
		log("vangstyle dot # copy dot files.");
		log("vangstyle prettier # copy prettier config.");
		log("vangstyle stylelint # copy stylelint config.");
		log("vangstyle tslint # copy tslint config.");
	} else {
		if (_.includes("dot")) {
			log(`Copying dot files to ${cwd}...`);
			[".editorconfig", ".gitignore", ".prettierignore"].forEach(copy);
			mkdir(cwdResolve(".vscode"), dirError =>
				dirError ? log(dirError) : copy(".vscode/settings.json")
			);
		}
		if (_.includes("prettier")) {
			log(`Copying prettier config to ${cwd}...`);
			copyFile(
				installResolve("configs/prettier.config.js"),
				cwdResolve("prettier.config.js"),
				error => log(error ? error : "Copied!")
			);
		}
		if (_.includes("stylelint")) {
			log(`Copying stylelint config to ${cwd}...`);
			copyFile(
				installResolve("configs/stylelint.config.js"),
				cwdResolve("stylelint.config.js"),
				error => log(error ? error : "Copied!")
			);
		}
		if (_.includes("tslint")) {
			log(`Copying tslint config to ${cwd}...`);
			copyFile(
				installResolve("configs/tslint.json"),
				cwdResolve("tslint.json"),
				error => log(error ? error : "Copied!")
			);
		}
	}
}
