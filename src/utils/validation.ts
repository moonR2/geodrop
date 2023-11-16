import { validCodes } from "./validCodes";

export function validateCode(code: number) {
  if (validCodes.includes(code)) {
    return true;
  }
  return false;
}
