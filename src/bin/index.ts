#! /usr/bin/env node

import { sep } from "path";
import prompts from "prompts";
import type { Configuration } from "./configurations/Configuration";
import { css } from "./configurations/css";
import { documents } from "./configurations/documents";
import { editorconfig } from "./configurations/editorconfig";
import { git } from "./configurations/git";
import { linting } from "./configurations/linting";
import { vscode } from "./configurations/vscode";
import { basePath, cwd } from "./paths";
import { promiseAllSequential } from "./promiseAllSequential";

export default new Promise((resolveDirectory, rejectDirectory) =>
	cwd !== basePath
		? resolveDirectory(undefined)
		: rejectDirectory("Don't run this script in @vangware/base's directory")
)
	.then(_ =>
		prompts({
			choices: Object.entries({
				"CSS (Stylelint)": css,
				"Documents (CHANGELOG, LICENSE and README)": documents,
				EditorConfig: editorconfig,
				Git: git,
				"Linting (ESLint)": linting,
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
				}) => promiseAllSequential(cwd)(selected)
			)
			.then((copiedData = []) =>
				copiedData
					.flat()
					.map(
						({ target }) =>
							`[ Added ] ${target.replace(`${cwd}${sep}`, "")}`
					)
			)
	)
	.then((messages: readonly string[]) =>
		messages.map(message => console.log(message))
	)
	.catch(console.error);
