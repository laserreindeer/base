#! /usr/bin/env node

import { prompt } from "inquirer";
import {
	editorconfig,
	eslint,
	git,
	prettier,
	stylelint,
	vscode
} from "./configurations";
import { currentWorkingDirectory, validDirectory } from "./directories";

const configurations = {
	ESLint: eslint,
	EditorConfig: editorconfig,
	Git: git,
	Prettier: prettier,
	"Visual Studio Code": vscode,
	stylelint
};

export default new Promise((resolve, reject) =>
	validDirectory ? resolve(validDirectory) : reject("Invalid directory")
)
	.then(_ =>
		prompt<{
			readonly selected: readonly (keyof typeof configurations)[];
		}>([
			{
				choices: Object.keys(configurations),
				message: "Choose Vangary configurations to install",
				name: "selected",
				type: "checkbox"
			}
		])
	)
	.then(({ selected = [] }) =>
		Promise.all(
			selected.map(configuration =>
				configurations[configuration](currentWorkingDirectory)
			)
		)
	)
	.then((copiedData = []) =>
		copiedData
			.flatMap(fileData => fileData)
			.map(
				({ target }) =>
					`${target.replace(currentWorkingDirectory, "")} installed!`
			)
	)
	.then(messages => messages.map(message => console.log(message)))
	.catch(console.error);
