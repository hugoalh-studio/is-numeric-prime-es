import { isNumericPrime } from "./mod.ts";
Deno.bench("8", { permissions: "none" }, () => {
	isNumericPrime(8n);
});
Deno.bench("17", { permissions: "none" }, () => {
	isNumericPrime(17);
});
Deno.bench("23", { permissions: "none" }, () => {
	isNumericPrime(23n);
});
Deno.bench("9876", { permissions: "none" }, () => {
	isNumericPrime(9876);
});
Deno.bench("9876543210123456789", { permissions: "none" }, () => {
	isNumericPrime(9876543210123456789n);
});
Deno.bench("98765432100123456789", { permissions: "none" }, () => {
	isNumericPrime(98765432100123456789n);
});
Deno.bench("98765432100123456789987654321001234567891", { permissions: "none" }, () => {
	isNumericPrime(98765432100123456789987654321001234567891n);
});
