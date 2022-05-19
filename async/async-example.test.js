import { it, expect, describe } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example.js";

describe("generateToken()", (doneFn) => {
	it("should generate a token", () => {
		const testUserEmail = "test@test.com";

		generateToken(testUserEmail, (err, token) => {
			expect(token).toBeDefined();
			// doneFn it's necessary to test callback functions
			doneFn();
			// try {
			//     expect(token).toBe(2);
			// 	doneFn();
			// } catch (err) {
			// 	doneFn(err);
			// }
		});
	});
});

// Testing promises where doneFn is no needed
describe("generateTokenPromise()", () => {
	it("promise generates a token", () => {
		const testUserEmail = "test@test.com";

		// Wrap the function call into expect
		// either reject or resolve the promise to get the result
		return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
	});

	it("promise generates a token with async await", async () => {
		const testUserEmail = "test@test.com";

		const token = await generateTokenPromise(testUserEmail);
		// Wrap the function call into expect
		// either reject or resolve the promise to get the result
		expect(token).toBeDefined();
	});
});
