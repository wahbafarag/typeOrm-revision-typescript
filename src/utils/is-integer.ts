export function isInteger(input: string) {
  return input?.match(/^[+-]?\d+$/) !== null;
}
