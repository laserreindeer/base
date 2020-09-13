import { resolve } from "path";

/** @vangware/base installation path */
export const basePath = resolve(__dirname, "../..");

/** Configuration files path */
export const configurationsPath = resolve(basePath, "./configurations");

/** Current working directory path */
export const cwdPath = process.cwd();

/** Current working directory package.json file */
export const cwdPackagePath = resolve(cwdPath, "package.json");

/** @vangware/base package.json file */
export const basePackagePath = resolve(basePath, "package.json");

/** Resolver for configurationsPath */
export const resolveConfigurationsPath = (filename: string) =>
	resolve(configurationsPath, filename);

/** Curried target directory resolve */
export const targetDirectoryResolve = (targetDirectory: string) => (
	path: string
) => resolve(targetDirectory, path);
