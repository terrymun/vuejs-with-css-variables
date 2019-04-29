/** @method */
export function clamp(value: number, min: number = -Infinity, max: number = Infinity): number {
  return Math.max(min, Math.min(value, max));
}
