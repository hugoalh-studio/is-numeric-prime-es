import { assertEquals } from "STD/assert/equals";
import { isNumericPrime } from "./mod.ts";
Deno.test("BigInteger 8", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(8n), false);
});
Deno.test("BigInteger 23", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(23n), true);
});
Deno.test("BigInteger 98765432100123456789", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(98765432100123456789n), true);
});
Deno.test("Number 17", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(17), true);
});
Deno.test("Number 9876", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(9876), false);
});
