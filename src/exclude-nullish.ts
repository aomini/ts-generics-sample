/**
 * Questions:
 * Write a utility type ExcludeNullish<T> that removes null
 * and undefined from any type.
 */
type ExcludeNullish<T> = {};

type NonNull = ExcludeNullish<string | number | null | undefined>;
// Result: string | number

/**
 * Solution:
    type ExcludeNullish<T> = T extends {} ? T : never;
 */
