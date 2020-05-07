import { resolve } from "path";

export const currentWorkingDirectory = process.cwd();
export const vangstyleDirectory = resolve(__dirname, "../..");
export const configsDirectory = resolve(vangstyleDirectory, "./configs");
export const validDirectory = currentWorkingDirectory !== vangstyleDirectory;
