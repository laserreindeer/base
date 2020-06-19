#! /usr/bin/env node

import { sep } from "path";
import * as prompts from "prompts";
import logo from "../logo";
import {
	Configuration,
	editorconfig,
	eslint,
	git,
	prettier,
	stylelint,
	typescript,
	vscode
} from "./configurations";
import type { Package } from "./Package";
import {
	cwdPackagePath,
	cwdPath,
	vangstylePackagePath,
	vangstylePath
} from "./paths";
import { readFilePromise } from "./readFilePromise";
import { updateJSONPromise } from "./updateJSONPromise";

const configurations = {
	ESLint: eslint,
	EditorConfig: editorconfig,
	Git: git,
	Prettier: prettier,
	TypeScript: typescript,
	"Visual Studio Code": vscode,
	stylelint
};

// TODO: Maybe make this less lengthy
export default new Promise((resolveDirectory, rejectDirectory) =>
	cwdPath !== vangstylePath
		? resolveDirectory(console.log(logo))
		: rejectDirectory("Script shouldn't be run in Vangstyle's directory")
)
	.then(_ =>
		prompts({
			choices: [
				{
					title: "Add dependencies to package.json",
					value: "addDependencies"
				},
				{
					title: "Copy configuration files",
					value: "copyConfigurations"
				}
			],
			message: "Which action do you want to perform?",
			name: "action",
			type: "select"
		})
	)
	.then(
		({
			action
		}: {
			readonly action: "addDependencies" | "copyConfigurations";
		}) =>
			({
				// eslint-disable-next-line functional/functional-parameters
				addDependencies: () =>
					readFilePromise(vangstylePackagePath, "utf8")
						.then(JSON.parse)
						.then((vangstylePackage: Package) =>
							updateJSONPromise<Package>(currentPackage => ({
								...currentPackage,
								devDependencies: {
									...(currentPackage.devDependencies ?? {}),
									...vangstylePackage.peerDependencies
								}
							}))(cwdPackagePath).then(_ => [
								"Package updated. Run install!"
							])
						),
				// eslint-disable-next-line functional/functional-parameters
				copyConfigurations: () =>
					prompts({
						choices: Object.entries(
							configurations
						).map(([title, value]) => ({ title, value })),
						message: "Which configurations should be copied?",
						name: "selected",
						type: "multiselect"
					})
						.then(
							({
								selected = []
							}: {
								readonly selected: readonly Configuration[];
							}) =>
								Promise.all(
									selected.map(configuration =>
										configuration(cwdPath)
									)
								)
						)
						.then((copiedData = []) =>
							copiedData
								.flatMap(fileData => fileData)
								.map(
									({ target }) =>
										`${target.replace(
											`${cwdPath}${sep}`,
											""
										)} installed!`
								)
						)
			}[action]())
	)
	.then((messages: readonly string[]) =>
		messages.map(message => console.log(message))
	)
	.catch(console.error);
