/**
 * Vangware logo.
 */
export const logo = `${BigInt(
	`0x32f76324cdc57feb28bf646310132f18c39b3238083f572336f4857192b50c09d89b1cf64
	f28a4b894dc8ca9fe57d7d50faa83871d7cc92e42500213ed26e63fb6fba0ab15fc455f36b49
	f75bd64779da0cb59752689da3fbbd048ccd994e75c7fc4560d831fe29f7d2df92737bdf174a
	7c8ca80c1dc1f168a0df07b6b326ee6bae9bc556c64b7e93cbb11c2f00708d05678b32ad73f9
	9509931ce59c9a854e77787bebf35d32ec73fd5`.replace(/\n\t/gu, "")
)}`.replace(/./gu, index => " _|/\\\n"[index]);

export default logo;
