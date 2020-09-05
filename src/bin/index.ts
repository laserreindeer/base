#! /usr/bin/env node

import { sep } from "path";
import * as prompts from "prompts";
import logo from "../logo";
import {
	Configuration,
	css,
	editorconfig,
	git,
	linting,
	vscode
} from "./configurations";
import { basePath, cwdPath } from "./paths";

export default new Promise((resolveDirectory, rejectDirectory) =>
	cwdPath !== basePath
		? resolveDirectory(console.log(logo))
		: rejectDirectory("Don't run this script in @vangware/base's directory")
)
	.then(_ =>
		prompts({
			choices: Object.entries({
				CSS: css,
				EditorConfig: editorconfig,
				Git: git,
				Linting: linting,
				"Visual Studio Code": vscode
			}).map(([title, value]) => ({
				title,
				value
			})),
			instructions:
				"Use ↑↓ to navigate. Select with [space]. Toggle all with [a].",
			message: "Configurations",
			name: "selected",
			type: "multiselect"
		} as prompts.PromptObject<"selected">)
			.then(
				({
					selected = []
				}: {
					readonly selected: readonly Configuration[];
				}) =>
					Promise.all(
						selected.map(configuration => configuration(cwdPath))
					)
			)
			.then((copiedData = []) =>
				copiedData
					.flat()
					.map(
						({ target }) =>
							`${target.replace(
								`${cwdPath}${sep}`,
								""
							)} installed!`
					)
			)
	)
	.then((messages: readonly string[]) =>
		messages.map(message => console.log(message))
	)
	.catch(console.error);
