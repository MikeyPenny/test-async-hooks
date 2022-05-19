import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from "vitest";

import { User } from "./hooks";

const testEmail = "test@test.com";
let user = new User(testEmail);

// testing hooks to set values before all or each test
// and for cleaning values either before or after
beforeAll(() => {
	console.log("beforeAll()");
});

beforeEach(() => {
	user = new User(testEmail);
	console.log("beforeEach()");
});

afterEach(() => {
	// user = new User(testEmail);
	console.log("afterEach()");
});

afterAll(() => {
	console.log("afterAll()");
});

// Use concurrent to run a huge amount of test to save some time
// of execution. Runs all the tests im parallel
// Also possible to add it to the describe function
// describe.concurrent('', () => {})
it.concurrent("should update the email", () => {
	const newTestEmail = "test2@test.com";

	user.updateEmail(newTestEmail);

	expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
	expect(user).toHaveProperty("email");
});

it.concurrent("should store the provided email value", () => {
	expect(user.email).toBe(testEmail);
});

it.concurrent("should clear the email", () => {
	user.clearEmail();

	expect(user.email).toBe("");
});

it.concurrent(
	"should still have an email property after clearing the email",
	() => {
		user.clearEmail();

		expect(user).toHaveProperty("email");
	}
);
