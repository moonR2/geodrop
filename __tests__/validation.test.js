import { validateCode } from "../src/utils/validation";

// Mocking valid codes
jest.mock("../src/utils/validCodes", () => ({
  validCodes: [123, 456, 789],
}));

describe("validateCode function", () => {
  it("returns true for a valid code", () => {
    const isValid = validateCode(456);
    expect(isValid).toBe(true);
  });

  it("returns false for an invalid code", () => {
    const isValid = validateCode(999);
    expect(isValid).toBe(false);
  });

  it("returns false for undefined code", () => {
    const isValid = validateCode(undefined);
    expect(isValid).toBe(false);
  });
});
