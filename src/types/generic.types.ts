/** @type */
export type Dictionary<T> = { [key: string]: T };

/** @type */
export type Nullable<T> = T | null;

/** @type */
export type VueCssStyleObject = Dictionary<Nullable<string>>;
