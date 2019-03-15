
export function getValue(obj, key) {
  return typeof obj === 'object' && obj[key] ? obj[key] : '';
}
