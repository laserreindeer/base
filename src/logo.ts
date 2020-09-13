import { greenText } from "@vangware/forcli";

/**
 * Vangware logo.
 */
export const logo = greenText(
	`${BigInt(
		`0x32f76324cdc57feb28bf646310132f18c39b3238083f572336f4857192b50c09d89b1
		cf64f28a4b894dc8ca9fe57d7d50faa83871d7cc92e42500213ed26e63fb6fba0ab15fc4
		55f36b49f75bd64779da0cb59752689da3fbbd048ccd994e75c7fc4560d831fe29f7d2df
		92737bdf174a7c8ca80c1dc1f168a0df07b6b326ee6bae9bc556c64b7e93cbb11c2f0070
		8d05678b32ad73f99509931ce59c9a854e77787bebf35d32ec73fd5`.replace(/\n\s+/gu, "")
	)}`.replace(/./gu, index => " _|/\\\n"[parseInt(index, 10)])
);
