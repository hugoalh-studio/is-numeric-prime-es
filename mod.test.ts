import { assertEquals } from "STD/assert/equals";
import { isNumericPrime } from "./mod.ts";
Deno.test("Number False 1", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(9876), false);
});
Deno.test("BigInteger False 1", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(8n), false);
});
Deno.test("Number True 1", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(17), true);
});
Deno.test("BigInteger True 1", { permissions: "none" }, () => {
	assertEquals(isNumericPrime(23n), true);
});
