import { Dictionary } from '@/types';

/** @enum */
export enum ThemeName {
  LIGHT = 'light',
  DARK = 'dark',
  SUMMER = 'summer',
  TWILIGHT = 'twilight',
}

/** @enum */
export enum ThemeLabel {
  light = 'Light',
  dark = 'Dark',
  summer = 'Summer',
  twilight = 'Twilight',
}

/** @type */
export type Theme = Dictionary<string>;

/** @enum */
export enum ThemePropertiesDictionary {
  appBackgroundColor = '--app-background-color',
  appExternalIcon = '--app-external-icon',
  appInputBorderColor = '--app-input-border-color',
  appLinkColor = '--app-link-color',
  appTextColor = '--app-text-color',
}
