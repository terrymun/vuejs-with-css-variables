import { Dictionary } from '@/types';

/** @interface */
export type Theme = Dictionary<string>;

/** @enum */
export enum ThemePropertiesDictionary {
  appBackgroundColor = '--app-background-color',
  appTextColor = '--app-text-color',
}
