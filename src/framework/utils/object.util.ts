import { Dictionary } from '@/types';

/** @method */
export function dictionaryValueChecker(dictionary: Dictionary<any>): (value: string) => boolean {
  const values = Object.keys(dictionary).map(key => dictionary[key]);
  return (value: string) => values.includes(value);
}
