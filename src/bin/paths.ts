import { resolve } from "path";

/** Vangstyle installation path */
export const vangstylePath = resolve(__dirname, "../..");

/** Configuration files path */
export const configurationsPath = resolve(vangstylePath, "./configurations");

/** Current working directory path */
export const cwdPath = process.cwd();

/** Current working directory package.json file */
export const cwdPackagePath = resolve(cwdPath, "package.json");

/** Vangstyle package.json file */
export const vangstylePackagePath = resolve(vangstylePath, "package.json");
