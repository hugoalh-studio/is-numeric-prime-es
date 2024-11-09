import { isNumericPrime } from "./mod.ts";
Deno.bench("BigInteger 8", { permissions: "none" }, () => {
	isNumericPrime(8n);
});
Deno.bench("BigInteger 23", { permissions: "none" }, () => {
	isNumericPrime(23n);
});
Deno.bench("BigInteger 98765432100123456789", { permissions: "none" }, () => {
	isNumericPrime(98765432100123456789n);
});
Deno.bench("Number 17", { permissions: "none" }, () => {
	isNumericPrime(17);
});
Deno.bench("Number 9876", { permissions: "none" }, () => {
	isNumericPrime(9876);
});
